---
id: FieldApiOptions
title: FieldApiOptions
---

<!-- DO NOT EDIT: this page is autogenerated from the type comments -->

# Interface: FieldApiOptions\<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnServer, TParentSubmitMeta\>

Defined in: [packages/form-core/src/FieldApi.ts:455](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L455)

An object type representing the required options for the FieldApi class.

## Extends

- [`FieldOptions`](../fieldoptions.md)\<`TParentData`, `TName`, `TData`, `TOnMount`, `TOnChange`, `TOnChangeAsync`, `TOnBlur`, `TOnBlurAsync`, `TOnSubmit`, `TOnSubmitAsync`\>

## Type Parameters

• **TParentData**

• **TName** *extends* [`DeepKeys`](../../type-aliases/deepkeys.md)\<`TParentData`\>

• **TData** *extends* [`DeepValue`](../../type-aliases/deepvalue.md)\<`TParentData`, `TName`\>

• **TOnMount** *extends* `undefined` \| `FieldValidateOrFn`\<`TParentData`, `TName`, `TData`\>

• **TOnChange** *extends* `undefined` \| `FieldValidateOrFn`\<`TParentData`, `TName`, `TData`\>

• **TOnChangeAsync** *extends* `undefined` \| `FieldAsyncValidateOrFn`\<`TParentData`, `TName`, `TData`\>

• **TOnBlur** *extends* `undefined` \| `FieldValidateOrFn`\<`TParentData`, `TName`, `TData`\>

• **TOnBlurAsync** *extends* `undefined` \| `FieldAsyncValidateOrFn`\<`TParentData`, `TName`, `TData`\>

• **TOnSubmit** *extends* `undefined` \| `FieldValidateOrFn`\<`TParentData`, `TName`, `TData`\>

• **TOnSubmitAsync** *extends* `undefined` \| `FieldAsyncValidateOrFn`\<`TParentData`, `TName`, `TData`\>

• **TFormOnMount** *extends* `undefined` \| `FormValidateOrFn`\<`TParentData`\>

• **TFormOnChange** *extends* `undefined` \| `FormValidateOrFn`\<`TParentData`\>

• **TFormOnChangeAsync** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TParentData`\>

• **TFormOnBlur** *extends* `undefined` \| `FormValidateOrFn`\<`TParentData`\>

• **TFormOnBlurAsync** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TParentData`\>

• **TFormOnSubmit** *extends* `undefined` \| `FormValidateOrFn`\<`TParentData`\>

• **TFormOnSubmitAsync** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TParentData`\>

• **TFormOnServer** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TParentData`\>

• **TParentSubmitMeta**

## Properties

### asyncAlways?

```ts
optional asyncAlways: boolean;
```

Defined in: [packages/form-core/src/FieldApi.ts:402](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L402)

If `true`, always run async validation, even if there are errors emitted during synchronous validation.

#### Inherited from

[`FieldOptions`](../fieldoptions.md).[`asyncAlways`](../FieldOptions.md#asyncalways)

***

### asyncDebounceMs?

```ts
optional asyncDebounceMs: number;
```

Defined in: [packages/form-core/src/FieldApi.ts:398](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L398)

The default time to debounce async validation if there is not a more specific debounce time passed.

#### Inherited from

[`FieldOptions`](../fieldoptions.md).[`asyncDebounceMs`](../FieldOptions.md#asyncdebouncems)

***

### defaultMeta?

```ts
optional defaultMeta: Partial<FieldMeta<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, any, any, any, any, any, any, any>>;
```

Defined in: [packages/form-core/src/FieldApi.ts:421](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L421)

An optional object with default metadata for the field.

#### Inherited from

[`FieldOptions`](../fieldoptions.md).[`defaultMeta`](../FieldOptions.md#defaultmeta)

***

### defaultValue?

```ts
optional defaultValue: NoInfer<TData>;
```

Defined in: [packages/form-core/src/FieldApi.ts:394](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L394)

An optional default value for the field.

#### Inherited from

[`FieldOptions`](../fieldoptions.md).[`defaultValue`](../FieldOptions.md#defaultvalue)

***

### disableErrorFlat?

```ts
optional disableErrorFlat: boolean;
```

Defined in: [packages/form-core/src/FieldApi.ts:449](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L449)

Disable the `flat(1)` operation on `field.errors`. This is useful if you want to keep the error structure as is. Not suggested for most use-cases.

#### Inherited from

[`FieldOptions`](../fieldoptions.md).[`disableErrorFlat`](../FieldOptions.md#disableerrorflat)

***

### form

```ts
form: FormApi<TParentData, TFormOnMount, TFormOnChange, TFormOnChangeAsync, TFormOnBlur, TFormOnBlurAsync, TFormOnSubmit, TFormOnSubmitAsync, TFormOnServer, TParentSubmitMeta>;
```

Defined in: [packages/form-core/src/FieldApi.ts:507](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L507)

***

### listeners?

```ts
optional listeners: FieldListeners<TParentData, TName, TData>;
```

Defined in: [packages/form-core/src/FieldApi.ts:445](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L445)

A list of listeners which attach to the corresponding events

#### Inherited from

[`FieldOptions`](../fieldoptions.md).[`listeners`](../FieldOptions.md#listeners)

***

### name

```ts
name: TName;
```

Defined in: [packages/form-core/src/FieldApi.ts:390](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L390)

The field name. The type will be `DeepKeys<TParentData>` to ensure your name is a deep key of the parent dataset.

#### Inherited from

[`FieldOptions`](../fieldoptions.md).[`name`](../FieldOptions.md#name)

***

### validators?

```ts
optional validators: FieldValidators<TParentData, TName, TData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync>;
```

Defined in: [packages/form-core/src/FieldApi.ts:406](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldApi.ts#L406)

A list of validators to pass to the field

#### Inherited from

[`FieldOptions`](../fieldoptions.md).[`validators`](../FieldOptions.md#validators)
