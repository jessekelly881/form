import { describe, expect, it } from 'vitest'

import { FieldApi, FormApi } from '@tanstack/form-core'
import * as Schema from '@effect/schema/Schema'
import { effectValidator } from '../validator'

describe('Form api', () => {
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
      validatorAdapter: effectValidator,
    })

    const field = new FieldApi({
      form,
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

  it('should run an onChange fn with Effect validation option enabled', () => {
    const form = new FormApi({
      defaultValues: {
        name: '',
      },
      validatorAdapter: effectValidator,
    })

    const field = new FieldApi({
      form,
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
})
