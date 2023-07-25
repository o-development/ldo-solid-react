[ldo-solid-react](../README.md) / [Exports](../modules.md) / DocumentFetchError

# Class: DocumentFetchError

## Hierarchy

- [`DocumentError`](DocumentError.md)

  ↳ **`DocumentFetchError`**

## Table of contents

### Constructors

- [constructor](DocumentFetchError.md#constructor)

### Properties

- [document](DocumentFetchError.md#document)
- [message](DocumentFetchError.md#message)
- [name](DocumentFetchError.md#name)
- [stack](DocumentFetchError.md#stack)
- [status](DocumentFetchError.md#status)
- [prepareStackTrace](DocumentFetchError.md#preparestacktrace)
- [stackTraceLimit](DocumentFetchError.md#stacktracelimit)

### Methods

- [captureStackTrace](DocumentFetchError.md#capturestacktrace)

## Constructors

### constructor

• **new DocumentFetchError**(`document`, `status`, `message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`FetchableDocument`](FetchableDocument.md) |
| `status` | `number` |
| `message` | `string` |

#### Overrides

[DocumentError](DocumentError.md).[constructor](DocumentError.md#constructor)

#### Defined in

[lib/document/errors/DocumentFetchError.ts:7](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/errors/DocumentFetchError.ts#L7)

## Properties

### document

• `Readonly` **document**: [`FetchableDocument`](FetchableDocument.md)

#### Inherited from

[DocumentError](DocumentError.md).[document](DocumentError.md#document)

#### Defined in

[lib/document/errors/DocumentError.ts:4](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/errors/DocumentError.ts#L4)

___

### message

• **message**: `string`

#### Inherited from

[DocumentError](DocumentError.md).[message](DocumentError.md#message)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

[DocumentError](DocumentError.md).[name](DocumentError.md#name)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

[DocumentError](DocumentError.md).[stack](DocumentError.md#stack)

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

___

### status

• `Readonly` **status**: `number`

#### Defined in

[lib/document/errors/DocumentFetchError.ts:5](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/errors/DocumentFetchError.ts#L5)

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

[DocumentError](DocumentError.md).[prepareStackTrace](DocumentError.md#preparestacktrace)

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

[DocumentError](DocumentError.md).[stackTraceLimit](DocumentError.md#stacktracelimit)

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

[DocumentError](DocumentError.md).[captureStackTrace](DocumentError.md#capturestacktrace)

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:4
