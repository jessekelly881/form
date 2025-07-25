---
id: FormApi
title: FormApi
---

<!-- DO NOT EDIT: this page is autogenerated from the type comments -->

# Class: FormApi\<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnServer, TSubmitMeta\>

Defined in: [packages/form-core/src/FormApi.ts:778](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L778)

A class representing the Form API. It handles the logic and interactions with the form state.

Normally, you will not need to create a new `FormApi` instance directly. Instead, you will use a framework
hook/function like `useForm` or `createForm` to create a new instance for you that uses your framework's reactivity model.
However, if you need to create a new instance manually, you can do so by calling the `new FormApi` constructor.

## Type Parameters

• **TFormData**

• **TOnMount** *extends* `undefined` \| `FormValidateOrFn`\<`TFormData`\>

• **TOnChange** *extends* `undefined` \| `FormValidateOrFn`\<`TFormData`\>

• **TOnChangeAsync** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TFormData`\>

• **TOnBlur** *extends* `undefined` \| `FormValidateOrFn`\<`TFormData`\>

• **TOnBlurAsync** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TFormData`\>

• **TOnSubmit** *extends* `undefined` \| `FormValidateOrFn`\<`TFormData`\>

• **TOnSubmitAsync** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TFormData`\>

• **TOnServer** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TFormData`\>

• **TSubmitMeta** = `never`

## Implements

- `FieldManipulator`\<`TFormData`, `TSubmitMeta`\>

## Constructors

### new FormApi()

```ts
new FormApi<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnServer, TSubmitMeta>(opts?): FormApi<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnServer, TSubmitMeta>
```

Defined in: [packages/form-core/src/FormApi.ts:850](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L850)

Constructs a new `FormApi` instance with the given form options.

#### Parameters

##### opts?

[`FormOptions`](../../interfaces/formoptions.md)\<`TFormData`, `TOnMount`, `TOnChange`, `TOnChangeAsync`, `TOnBlur`, `TOnBlurAsync`, `TOnSubmit`, `TOnSubmitAsync`, `TOnServer`, `TSubmitMeta`\>

#### Returns

[`FormApi`](../formapi.md)\<`TFormData`, `TOnMount`, `TOnChange`, `TOnChangeAsync`, `TOnBlur`, `TOnBlurAsync`, `TOnSubmit`, `TOnSubmitAsync`, `TOnServer`, `TSubmitMeta`\>

## Properties

### baseStore

```ts
baseStore: Store<BaseFormState<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnServer>>;
```

Defined in: [packages/form-core/src/FormApi.ts:806](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L806)

***

### fieldInfo

```ts
fieldInfo: Record<DeepKeys<TFormData>, FieldInfo<TFormData>>;
```

Defined in: [packages/form-core/src/FormApi.ts:836](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L836)

A record of field information for each field in the form.

***

### fieldMetaDerived

```ts
fieldMetaDerived: Derived<Record<DeepKeys<TFormData>, AnyFieldMeta>>;
```

Defined in: [packages/form-core/src/FormApi.ts:819](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L819)

***

### options

```ts
options: FormOptions<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnServer, TSubmitMeta> = {};
```

Defined in: [packages/form-core/src/FormApi.ts:794](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L794)

The options for the form.

***

### store

```ts
store: Derived<FormState<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnServer>>;
```

Defined in: [packages/form-core/src/FormApi.ts:820](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L820)

## Accessors

### state

#### Get Signature

```ts
get state(): FormState<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnServer>
```

Defined in: [packages/form-core/src/FormApi.ts:838](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L838)

##### Returns

[`FormState`](../../interfaces/formstate.md)\<`TFormData`, `TOnMount`, `TOnChange`, `TOnChangeAsync`, `TOnBlur`, `TOnBlurAsync`, `TOnSubmit`, `TOnSubmitAsync`, `TOnServer`\>

## Methods

### clearFieldValues()

```ts
clearFieldValues<TField>(field, opts?): void
```

Defined in: [packages/form-core/src/FormApi.ts:2140](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2140)

Clear all values within an array field.

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

##### opts?

`UpdateMetaOptions`

#### Returns

`void`

#### Implementation of

```ts
FieldManipulator.clearFieldValues
```

***

### deleteField()

```ts
deleteField<TField>(field): void
```

Defined in: [packages/form-core/src/FormApi.ts:1948](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1948)

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

#### Returns

`void`

#### Implementation of

```ts
FieldManipulator.deleteField
```

***

### getAllErrors()

```ts
getAllErrors(): object
```

Defined in: [packages/form-core/src/FormApi.ts:2246](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2246)

Returns form and field level errors

#### Returns

`object`

##### fields

```ts
fields: Record<DeepKeys<TFormData>, {
  errorMap: ValidationErrorMap;
  errors: unknown[];
}>;
```

##### form

```ts
form: object;
```

###### form.errorMap

```ts
errorMap: ValidationErrorMap<UnwrapFormValidateOrFn<TOnMount>, UnwrapFormValidateOrFn<TOnChange>, UnwrapFormAsyncValidateOrFn<TOnChangeAsync>, UnwrapFormValidateOrFn<TOnBlur>, UnwrapFormAsyncValidateOrFn<TOnBlurAsync>, UnwrapFormValidateOrFn<TOnSubmit>, UnwrapFormAsyncValidateOrFn<TOnSubmitAsync>, UnwrapFormAsyncValidateOrFn<TOnServer>>;
```

###### form.errors

```ts
errors: (
  | UnwrapFormValidateOrFn<TOnMount>
  | UnwrapFormValidateOrFn<TOnChange>
  | UnwrapFormAsyncValidateOrFn<TOnChangeAsync>
  | UnwrapFormValidateOrFn<TOnBlur>
  | UnwrapFormAsyncValidateOrFn<TOnBlurAsync>
  | UnwrapFormValidateOrFn<TOnSubmit>
  | UnwrapFormAsyncValidateOrFn<TOnSubmitAsync>
  | UnwrapFormAsyncValidateOrFn<TOnServer>)[];
```

***

### getFieldInfo()

```ts
getFieldInfo<TField>(field): FieldInfo<TFormData>
```

Defined in: [packages/form-core/src/FormApi.ts:1862](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1862)

Gets the field info of the specified field.

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

#### Returns

[`FieldInfo`](../../type-aliases/fieldinfo.md)\<`TFormData`\>

***

### getFieldMeta()

```ts
getFieldMeta<TField>(field): undefined | AnyFieldMeta
```

Defined in: [packages/form-core/src/FormApi.ts:1853](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1853)

Gets the metadata of the specified field.

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

#### Returns

`undefined` \| [`AnyFieldMeta`](../../type-aliases/anyfieldmeta.md)

#### Implementation of

```ts
FieldManipulator.getFieldMeta
```

***

### getFieldValue()

```ts
getFieldValue<TField>(field): DeepValue<TFormData, TField>
```

Defined in: [packages/form-core/src/FormApi.ts:1846](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1846)

Gets the value of the specified field.

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

#### Returns

[`DeepValue`](../../type-aliases/deepvalue.md)\<`TFormData`, `TField`\>

#### Implementation of

```ts
FieldManipulator.getFieldValue
```

***

### handleSubmit()

#### Call Signature

```ts
handleSubmit(): Promise<void>
```

Defined in: [packages/form-core/src/FormApi.ts:1748](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1748)

Handles the form submission, performs validation, and calls the appropriate onSubmit or onSubmitInvalid callbacks.

##### Returns

`Promise`\<`void`\>

##### Implementation of

```ts
FieldManipulator.handleSubmit
```

#### Call Signature

```ts
handleSubmit(submitMeta): Promise<void>
```

Defined in: [packages/form-core/src/FormApi.ts:1749](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1749)

Handles the form submission, performs validation, and calls the appropriate onSubmit or onSubmitInvalid callbacks.

##### Parameters

###### submitMeta

`TSubmitMeta`

##### Returns

`Promise`\<`void`\>

##### Implementation of

```ts
FieldManipulator.handleSubmit
```

***

### insertFieldValue()

```ts
insertFieldValue<TField>(
   field, 
   index, 
   value, 
opts?): Promise<void>
```

Defined in: [packages/form-core/src/FormApi.ts:1987](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1987)

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

##### index

`number`

##### value

[`DeepValue`](../../type-aliases/deepvalue.md)\<`TFormData`, `TField`\> *extends* `any`[] ? `any`[] & [`DeepValue`](../../type-aliases/deepvalue.md)\<`TFormData`, `TField`\>\[`number`\] : `never`

##### opts?

`UpdateMetaOptions`

#### Returns

`Promise`\<`void`\>

#### Implementation of

```ts
FieldManipulator.insertFieldValue
```

***

### mount()

```ts
mount(): () => void
```

Defined in: [packages/form-core/src/FormApi.ts:1176](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1176)

#### Returns

`Function`

##### Returns

`void`

***

### moveFieldValues()

```ts
moveFieldValues<TField>(
   field, 
   index1, 
   index2, 
   opts?): void
```

Defined in: [packages/form-core/src/FormApi.ts:2111](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2111)

Moves the value at the first specified index to the second specified index within an array field.

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

##### index1

`number`

##### index2

`number`

##### opts?

`UpdateMetaOptions`

#### Returns

`void`

#### Implementation of

```ts
FieldManipulator.moveFieldValues
```

***

### parseValuesWithSchema()

```ts
parseValuesWithSchema(schema): 
  | undefined
  | {
  fields: Record<string, StandardSchemaV1Issue[]>;
  form: Record<string, StandardSchemaV1Issue[]>;
}
```

Defined in: [packages/form-core/src/FormApi.ts:2306](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2306)

Parses the form's values with a given standard schema and returns
issues (if any). This method does NOT set any internal errors.

#### Parameters

##### schema

[`StandardSchemaV1`](../../type-aliases/standardschemav1.md)\<`TFormData`, `unknown`\>

The standard schema to parse the form values with.

#### Returns

  \| `undefined`
  \| \{
  `fields`: `Record`\<`string`, [`StandardSchemaV1Issue`](../../interfaces/standardschemav1issue.md)[]\>;
  `form`: `Record`\<`string`, [`StandardSchemaV1Issue`](../../interfaces/standardschemav1issue.md)[]\>;
 \}

***

### parseValuesWithSchemaAsync()

```ts
parseValuesWithSchemaAsync(schema): Promise<
  | undefined
  | {
  fields: Record<string, StandardSchemaV1Issue[]>;
  form: Record<string, StandardSchemaV1Issue[]>;
}>
```

Defined in: [packages/form-core/src/FormApi.ts:2318](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2318)

Parses the form's values with a given standard schema and returns
issues (if any). This method does NOT set any internal errors.

#### Parameters

##### schema

[`StandardSchemaV1`](../../type-aliases/standardschemav1.md)\<`TFormData`, `unknown`\>

The standard schema to parse the form values with.

#### Returns

`Promise`\<
  \| `undefined`
  \| \{
  `fields`: `Record`\<`string`, [`StandardSchemaV1Issue`](../../interfaces/standardschemav1issue.md)[]\>;
  `form`: `Record`\<`string`, [`StandardSchemaV1Issue`](../../interfaces/standardschemav1issue.md)[]\>;
 \}\>

***

### pushFieldValue()

```ts
pushFieldValue<TField>(
   field, 
   value, 
   opts?): void
```

Defined in: [packages/form-core/src/FormApi.ts:1972](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1972)

Pushes a value into an array field.

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

##### value

[`DeepValue`](../../type-aliases/deepvalue.md)\<`TFormData`, `TField`\> *extends* `any`[] ? `any`[] & [`DeepValue`](../../type-aliases/deepvalue.md)\<`TFormData`, `TField`\>\[`number`\] : `never`

##### opts?

`UpdateMetaOptions`

#### Returns

`void`

#### Implementation of

```ts
FieldManipulator.pushFieldValue
```

***

### removeFieldValue()

```ts
removeFieldValue<TField>(
   field, 
   index, 
opts?): Promise<void>
```

Defined in: [packages/form-core/src/FormApi.ts:2045](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2045)

Removes a value from an array field at the specified index.

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

##### index

`number`

##### opts?

`UpdateMetaOptions`

#### Returns

`Promise`\<`void`\>

#### Implementation of

```ts
FieldManipulator.removeFieldValue
```

***

### replaceFieldValue()

```ts
replaceFieldValue<TField>(
   field, 
   index, 
   value, 
opts?): Promise<void>
```

Defined in: [packages/form-core/src/FormApi.ts:2019](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2019)

Replaces a value into an array field at the specified index.

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

##### index

`number`

##### value

[`DeepValue`](../../type-aliases/deepvalue.md)\<`TFormData`, `TField`\> *extends* `any`[] ? `any`[] & [`DeepValue`](../../type-aliases/deepvalue.md)\<`TFormData`, `TField`\>\[`number`\] : `never`

##### opts?

`UpdateMetaOptions`

#### Returns

`Promise`\<`void`\>

#### Implementation of

```ts
FieldManipulator.replaceFieldValue
```

***

### reset()

```ts
reset(values?, opts?): void
```

Defined in: [packages/form-core/src/FormApi.ts:1264](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1264)

Resets the form state to the default values.
If values are provided, the form will be reset to those values instead and the default values will be updated.

#### Parameters

##### values?

`TFormData`

Optional values to reset the form to.

##### opts?

Optional options to control the reset behavior.

###### keepDefaultValues?

`boolean`

#### Returns

`void`

***

### resetField()

```ts
resetField<TField>(field): void
```

Defined in: [packages/form-core/src/FormApi.ts:2166](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2166)

Resets the field value and meta to default state

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

#### Returns

`void`

#### Implementation of

```ts
FieldManipulator.resetField
```

***

### resetFieldMeta()

```ts
resetFieldMeta<TField>(fieldMeta): Record<TField, AnyFieldMeta>
```

Defined in: [packages/form-core/src/FormApi.ts:1902](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1902)

resets every field's meta

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### fieldMeta

`Record`\<`TField`, [`AnyFieldMeta`](../../type-aliases/anyfieldmeta.md)\>

#### Returns

`Record`\<`TField`, [`AnyFieldMeta`](../../type-aliases/anyfieldmeta.md)\>

***

### setErrorMap()

```ts
setErrorMap(errorMap): void
```

Defined in: [packages/form-core/src/FormApi.ts:2184](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2184)

Updates the form's errorMap

#### Parameters

##### errorMap

`FormValidationErrorMap`\<`TFormData`, [`UnwrapFormValidateOrFn`](../../type-aliases/unwrapformvalidateorfn.md)\<`TOnMount`\>, [`UnwrapFormValidateOrFn`](../../type-aliases/unwrapformvalidateorfn.md)\<`TOnChange`\>, [`UnwrapFormAsyncValidateOrFn`](../../type-aliases/unwrapformasyncvalidateorfn.md)\<`TOnChangeAsync`\>, [`UnwrapFormValidateOrFn`](../../type-aliases/unwrapformvalidateorfn.md)\<`TOnBlur`\>, [`UnwrapFormAsyncValidateOrFn`](../../type-aliases/unwrapformasyncvalidateorfn.md)\<`TOnBlurAsync`\>, [`UnwrapFormValidateOrFn`](../../type-aliases/unwrapformvalidateorfn.md)\<`TOnSubmit`\>, [`UnwrapFormAsyncValidateOrFn`](../../type-aliases/unwrapformasyncvalidateorfn.md)\<`TOnSubmitAsync`\>, [`UnwrapFormAsyncValidateOrFn`](../../type-aliases/unwrapformasyncvalidateorfn.md)\<`TOnServer`\>\>

#### Returns

`void`

***

### setFieldMeta()

```ts
setFieldMeta<TField>(field, updater): void
```

Defined in: [packages/form-core/src/FormApi.ts:1881](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1881)

Updates the metadata of the specified field.

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

##### updater

[`Updater`](../../type-aliases/updater.md)\<[`AnyFieldMetaBase`](../../type-aliases/anyfieldmetabase.md)\>

#### Returns

`void`

#### Implementation of

```ts
FieldManipulator.setFieldMeta
```

***

### setFieldValue()

```ts
setFieldValue<TField>(
   field, 
   updater, 
   opts?): void
```

Defined in: [packages/form-core/src/FormApi.ts:1918](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1918)

Sets the value of the specified field and optionally updates the touched state.

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

##### updater

[`Updater`](../../type-aliases/updater.md)\<[`DeepValue`](../../type-aliases/deepvalue.md)\<`TFormData`, `TField`\>\>

##### opts?

`UpdateMetaOptions`

#### Returns

`void`

#### Implementation of

```ts
FieldManipulator.setFieldValue
```

***

### swapFieldValues()

```ts
swapFieldValues<TField>(
   field, 
   index1, 
   index2, 
   opts?): void
```

Defined in: [packages/form-core/src/FormApi.ts:2082](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L2082)

Swaps the values at the specified indices within an array field.

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

##### index1

`number`

##### index2

`number`

##### opts?

`UpdateMetaOptions`

#### Returns

`void`

#### Implementation of

```ts
FieldManipulator.swapFieldValues
```

***

### update()

```ts
update(options?): void
```

Defined in: [packages/form-core/src/FormApi.ts:1196](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1196)

Updates the form options and form state.

#### Parameters

##### options?

[`FormOptions`](../../interfaces/formoptions.md)\<`TFormData`, `TOnMount`, `TOnChange`, `TOnChangeAsync`, `TOnBlur`, `TOnBlurAsync`, `TOnSubmit`, `TOnSubmitAsync`, `TOnServer`, `TSubmitMeta`\>

#### Returns

`void`

***

### validateAllFields()

```ts
validateAllFields(cause): Promise<unknown[]>
```

Defined in: [packages/form-core/src/FormApi.ts:1290](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1290)

Validates all fields using the correct handlers for a given validation cause.

#### Parameters

##### cause

`ValidationCause`

#### Returns

`Promise`\<`unknown`[]\>

#### Implementation of

```ts
FieldManipulator.validateAllFields
```

***

### validateArrayFieldsStartingFrom()

```ts
validateArrayFieldsStartingFrom<TField>(
   field, 
   index, 
cause): Promise<unknown[]>
```

Defined in: [packages/form-core/src/FormApi.ts:1320](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1320)

Validates the children of a specified array in the form starting from a given index until the end using the correct handlers for a given validation type.

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

##### index

`number`

##### cause

`ValidationCause`

#### Returns

`Promise`\<`unknown`[]\>

#### Implementation of

```ts
FieldManipulator.validateArrayFieldsStartingFrom
```

***

### validateField()

```ts
validateField<TField>(field, cause): unknown[] | Promise<unknown[]>
```

Defined in: [packages/form-core/src/FormApi.ts:1361](https://github.com/TanStack/form/blob/main/packages/form-core/src/FormApi.ts#L1361)

Validates a specified field in the form using the correct handlers for a given validation type.

#### Type Parameters

• **TField** *extends* `string`

#### Parameters

##### field

`TField`

##### cause

`ValidationCause`

#### Returns

`unknown`[] \| `Promise`\<`unknown`[]\>

#### Implementation of

```ts
FieldManipulator.validateField
```
