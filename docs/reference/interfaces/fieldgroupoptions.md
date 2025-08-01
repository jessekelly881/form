---
id: FieldGroupOptions
title: FieldGroupOptions
---

<!-- DO NOT EDIT: this page is autogenerated from the type comments -->

# Interface: FieldGroupOptions\<TFormData, TFieldGroupData, TFields, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnServer, TSubmitMeta\>

Defined in: [packages/form-core/src/FieldGroupApi.ts:47](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldGroupApi.ts#L47)

An object representing the options for a field group.

## Type Parameters

• **TFormData**

• **TFieldGroupData**

• **TFields** *extends* 
  \| [`DeepKeysOfType`](../../type-aliases/deepkeysoftype.md)\<`TFormData`, `TFieldGroupData` \| `null` \| `undefined`\>
  \| [`FieldsMap`](../../type-aliases/fieldsmap.md)\<`TFormData`, `TFieldGroupData`\>

• **TOnMount** *extends* `undefined` \| `FormValidateOrFn`\<`TFormData`\>

• **TOnChange** *extends* `undefined` \| `FormValidateOrFn`\<`TFormData`\>

• **TOnChangeAsync** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TFormData`\>

• **TOnBlur** *extends* `undefined` \| `FormValidateOrFn`\<`TFormData`\>

• **TOnBlurAsync** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TFormData`\>

• **TOnSubmit** *extends* `undefined` \| `FormValidateOrFn`\<`TFormData`\>

• **TOnSubmitAsync** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TFormData`\>

• **TOnServer** *extends* `undefined` \| `FormAsyncValidateOrFn`\<`TFormData`\>

• **TSubmitMeta** = `never`

## Properties

### defaultValues?

```ts
optional defaultValues: TFieldGroupData;
```

Defined in: [packages/form-core/src/FieldGroupApi.ts:97](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldGroupApi.ts#L97)

The expected subsetValues that the form must provide.

***

### fields

```ts
fields: TFields;
```

Defined in: [packages/form-core/src/FieldGroupApi.ts:93](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldGroupApi.ts#L93)

The path to the field group data.

***

### form

```ts
form: 
  | FormApi<TFormData, TOnMount, TOnChange, TOnChangeAsync, TOnBlur, TOnBlurAsync, TOnSubmit, TOnSubmitAsync, TOnServer, TSubmitMeta>
| FieldGroupApi<any, TFormData, any, any, any, any, any, any, any, any, any, TSubmitMeta>;
```

Defined in: [packages/form-core/src/FieldGroupApi.ts:63](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldGroupApi.ts#L63)

***

### onSubmitMeta?

```ts
optional onSubmitMeta: TSubmitMeta;
```

Defined in: [packages/form-core/src/FieldGroupApi.ts:101](https://github.com/TanStack/form/blob/main/packages/form-core/src/FieldGroupApi.ts#L101)

onSubmitMeta, the data passed from the handleSubmit handler, to the onSubmit function props
