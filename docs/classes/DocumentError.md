[ldo-solid-react](../README.md) / [Exports](../modules.md) / DocumentError

# Class: DocumentError

## Hierarchy

- `Error`

  ↳ **`DocumentError`**

  ↳↳ [`DocumentFetchError`](DocumentFetchError.md)

## Table of contents

### Constructors

- [constructor](DocumentError.md#constructor)

### Properties

- [document](DocumentError.md#document)
- [message](DocumentError.md#message)
- [name](DocumentError.md#name)
- [stack](DocumentError.md#stack)
- [prepareStackTrace](DocumentError.md#preparestacktrace)
- [stackTraceLimit](DocumentError.md#stacktracelimit)

### Methods

- [captureStackTrace](DocumentError.md#capturestacktrace)

## Constructors

### constructor

• **new DocumentError**(`document`, `message`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | [`FetchableDocument`](FetchableDocument.md) |
| `message` | `string` |

#### Overrides

Error.constructor

#### Defined in

[lib/document/errors/DocumentError.ts:6](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/errors/DocumentError.ts#L6)

## Properties

### document

• `Readonly` **document**: [`FetchableDocument`](FetchableDocument.md)

#### Defined in

[lib/document/errors/DocumentError.ts:4](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/errors/DocumentError.ts#L4)

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

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

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

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

Error.captureStackTrace

#### Defined in

node_modules/@types/node/ts4.8/globals.d.ts:4
