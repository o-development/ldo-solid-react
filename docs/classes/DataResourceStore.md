[ldo-solid-react](../README.md) / [Exports](../modules.md) / DataResourceStore

# Class: DataResourceStore

## Hierarchy

- [`DocumentStore`](DocumentStore.md)<[`DataResource`](DataResource.md), `string`, [`DataResourceStoreDependencies`](../interfaces/DataResourceStoreDependencies.md)\>

  ↳ **`DataResourceStore`**

## Table of contents

### Constructors

- [constructor](DataResourceStore.md#constructor)

### Properties

- [dependencies](DataResourceStore.md#dependencies)
- [documentMap](DataResourceStore.md#documentmap)

### Methods

- [create](DataResourceStore.md#create)
- [get](DataResourceStore.md#get)
- [normalizeInitializer](DataResourceStore.md#normalizeinitializer)

## Constructors

### constructor

• **new DataResourceStore**(`dependencies`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dependencies` | [`DataResourceStoreDependencies`](../interfaces/DataResourceStoreDependencies.md) |

#### Inherited from

[DocumentStore](DocumentStore.md).[constructor](DocumentStore.md#constructor)

#### Defined in

[lib/document/DocumentStore.ts:15](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/DocumentStore.ts#L15)

## Properties

### dependencies

• `Protected` **dependencies**: [`DataResourceStoreDependencies`](../interfaces/DataResourceStoreDependencies.md)

#### Inherited from

[DocumentStore](DocumentStore.md).[dependencies](DocumentStore.md#dependencies)

#### Defined in

[lib/document/DocumentStore.ts:13](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/DocumentStore.ts#L13)

___

### documentMap

• `Protected` **documentMap**: `Map`<`string`, [`DataResource`](DataResource.md)\>

#### Inherited from

[DocumentStore](DocumentStore.md).[documentMap](DocumentStore.md#documentmap)

#### Defined in

[lib/document/DocumentStore.ts:12](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/DocumentStore.ts#L12)

## Methods

### create

▸ `Protected` **create**(`initializer`): [`DataResource`](DataResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializer` | `string` |

#### Returns

[`DataResource`](DataResource.md)

#### Overrides

[DocumentStore](DocumentStore.md).[create](DocumentStore.md#create)

#### Defined in

[lib/document/resource/dataResource/DataResourceStore.ts:13](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/DataResourceStore.ts#L13)

___

### get

▸ **get**(`initializerInput`): [`DataResource`](DataResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializerInput` | `string` |

#### Returns

[`DataResource`](DataResource.md)

#### Inherited from

[DocumentStore](DocumentStore.md).[get](DocumentStore.md#get)

#### Defined in

[lib/document/DocumentStore.ts:20](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/DocumentStore.ts#L20)

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

[lib/document/resource/dataResource/DataResourceStore.ts:17](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/DataResourceStore.ts#L17)
