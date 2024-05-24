import { describe, expect, it } from 'vitest'

import { FieldApi, FormApi } from '@tanstack/form-core'
import * as Schema from '@effect/schema/Schema'
import { Effect } from 'effect'
import { effectValidator } from '../validator'
import { sleep } from './utils'

describe('field api', () => {
  it('should run an onChange with Schema.minLength validation', () => {
    const schema = Schema.String.pipe(
      Schema.minLength(3, {
        message: () => 'You must have a length of at least 3',
      }),
    )

    const form = new FormApi({
      defaultValues: {
        name: '',
      },
    })

    const field = new FieldApi({
      form,
      validatorAdapter: effectValidator,
      name: 'name',
      validators: {
        onChange: schema,
      },
    })

    field.mount()

    expect(field.getMeta().errors).toEqual([])
    field.setValue('a', { touch: true })
    expect(field.getMeta().errors).toEqual([
      'You must have a length of at least 3',
    ])
    field.setValue('asdf', { touch: true })
    expect(field.getMeta().errors).toEqual([])
  })

  it('should run an onChange fn with validation option enabled', () => {
    const form = new FormApi({
      defaultValues: {
        name: '',
      },
    })

    const field = new FieldApi({
      form,
      validatorAdapter: effectValidator,
      name: 'name',
      validators: {
        onChange: ({ value }) => (value === 'a' ? 'Test' : undefined),
      },
    })

    field.mount()

    expect(field.getMeta().errors).toEqual([])
    field.setValue('a', { touch: true })
    expect(field.getMeta().errors).toEqual(['Test'])
    field.setValue('asdf', { touch: true })
    expect(field.getMeta().errors).toEqual([])
  })

  it('should run an onChangeAsync with validation', async () => {
    const asyncSchema = Schema.transformOrFail(Schema.String, Schema.String, {
      decode: (value) => Effect.succeed(value).pipe(Effect.delay('10 millis')),
      encode: (value) => Effect.succeed(value).pipe(Effect.delay('10 millis')),
    }).pipe(
      Schema.minLength(3, {
        message: () => 'Testing 123',
      }),
    )

    const form = new FormApi({
      defaultValues: {
        name: '',
      },
    })

    const field = new FieldApi({
      form,
      validatorAdapter: effectValidator,
      name: 'name',
      validators: {
        onChangeAsync: asyncSchema,
        onChangeAsyncDebounceMs: 0,
      },
    })

    field.mount()

    expect(field.getMeta().errors).toEqual([])
    field.setValue('a', { touch: true })
    await sleep(30)
    expect(field.getMeta().errors).toEqual(['Testing 123'])
    field.setValue('asdf', { touch: true })
    await sleep(30)
    expect(field.getMeta().errors).toEqual([])
  })

  it('should run an onChangeAsyc fn with validation option enabled', async () => {
    const form = new FormApi({
      defaultValues: {
        name: '',
      },
    })

    const field = new FieldApi({
      form,
      validatorAdapter: effectValidator,
      name: 'name',
      validators: {
        onChangeAsync: async ({ value }) =>
          value === 'a' ? 'Test' : undefined,
        onChangeAsyncDebounceMs: 0,
      },
    })

    field.mount()

    expect(field.getMeta().errors).toEqual([])
    field.setValue('a', { touch: true })
    await sleep(10)
    expect(field.getMeta().errors).toEqual(['Test'])
    field.setValue('asdf', { touch: true })
    await sleep(10)
    expect(field.getMeta().errors).toEqual([])
  })
})
