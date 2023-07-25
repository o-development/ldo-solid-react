[ldo-solid-react](../README.md) / [Exports](../modules.md) / BinaryResourceStore

# Class: BinaryResourceStore

## Hierarchy

- [`DocumentStore`](DocumentStore.md)<[`BinaryResource`](BinaryResource.md), `string`, [`BinaryResourceStoreDependencies`](../interfaces/BinaryResourceStoreDependencies.md)\>

  ↳ **`BinaryResourceStore`**

## Table of contents

### Constructors

- [constructor](BinaryResourceStore.md#constructor)

### Properties

- [dependencies](BinaryResourceStore.md#dependencies)
- [documentMap](BinaryResourceStore.md#documentmap)

### Methods

- [create](BinaryResourceStore.md#create)
- [get](BinaryResourceStore.md#get)
- [normalizeInitializer](BinaryResourceStore.md#normalizeinitializer)

## Constructors

### constructor

• **new BinaryResourceStore**(`dependencies`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dependencies` | [`BinaryResourceStoreDependencies`](../interfaces/BinaryResourceStoreDependencies.md) |

#### Inherited from

[DocumentStore](DocumentStore.md).[constructor](DocumentStore.md#constructor)

#### Defined in

[lib/document/DocumentStore.ts:15](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/DocumentStore.ts#L15)

## Properties

### dependencies

• `Protected` **dependencies**: [`BinaryResourceStoreDependencies`](../interfaces/BinaryResourceStoreDependencies.md)

#### Inherited from

[DocumentStore](DocumentStore.md).[dependencies](DocumentStore.md#dependencies)

#### Defined in

[lib/document/DocumentStore.ts:13](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/DocumentStore.ts#L13)

___

### documentMap

• `Protected` **documentMap**: `Map`<`string`, [`BinaryResource`](BinaryResource.md)\>

#### Inherited from

[DocumentStore](DocumentStore.md).[documentMap](DocumentStore.md#documentmap)

#### Defined in

[lib/document/DocumentStore.ts:12](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/DocumentStore.ts#L12)

## Methods

### create

▸ **create**(`initializer`): [`BinaryResource`](BinaryResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializer` | `string` |

#### Returns

[`BinaryResource`](BinaryResource.md)

#### Overrides

[DocumentStore](DocumentStore.md).[create](DocumentStore.md#create)

#### Defined in

[lib/document/resource/binaryResource/BinaryResourceStore.ts:13](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/resource/binaryResource/BinaryResourceStore.ts#L13)

___

### get

▸ **get**(`initializerInput`): [`BinaryResource`](BinaryResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializerInput` | `string` |

#### Returns

[`BinaryResource`](BinaryResource.md)

#### Inherited from

[DocumentStore](DocumentStore.md).[get](DocumentStore.md#get)

#### Defined in

[lib/document/DocumentStore.ts:20](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/DocumentStore.ts#L20)

___

### normalizeInitializer

▸ `Protected` **normalizeInitializer**(`initializer`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializer` | `string` |

#### Returns

`string`

#### Overrides

[DocumentStore](DocumentStore.md).[normalizeInitializer](DocumentStore.md#normalizeinitializer)

#### Defined in

[lib/document/resource/binaryResource/BinaryResourceStore.ts:17](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/resource/binaryResource/BinaryResourceStore.ts#L17)
