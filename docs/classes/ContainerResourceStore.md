[ldo-solid-react](../README.md) / [Exports](../modules.md) / ContainerResourceStore

# Class: ContainerResourceStore

## Hierarchy

- [`DocumentStore`](DocumentStore.md)<[`ContainerResource`](ContainerResource.md), `string`, [`ContainerResourceStoreDependencies`](../interfaces/ContainerResourceStoreDependencies.md)\>

  ↳ **`ContainerResourceStore`**

## Table of contents

### Constructors

- [constructor](ContainerResourceStore.md#constructor)

### Properties

- [dependencies](ContainerResourceStore.md#dependencies)
- [documentMap](ContainerResourceStore.md#documentmap)

### Methods

- [create](ContainerResourceStore.md#create)
- [get](ContainerResourceStore.md#get)
- [getContainerForResouce](ContainerResourceStore.md#getcontainerforresouce)
- [normalizeInitializer](ContainerResourceStore.md#normalizeinitializer)
- [getParentUri](ContainerResourceStore.md#getparenturi)

## Constructors

### constructor

• **new ContainerResourceStore**(`dependencies`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dependencies` | [`ContainerResourceStoreDependencies`](../interfaces/ContainerResourceStoreDependencies.md) |

#### Inherited from

[DocumentStore](DocumentStore.md).[constructor](DocumentStore.md#constructor)

#### Defined in

[lib/document/DocumentStore.ts:15](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/DocumentStore.ts#L15)

## Properties

### dependencies

• `Protected` **dependencies**: [`ContainerResourceStoreDependencies`](../interfaces/ContainerResourceStoreDependencies.md)

#### Inherited from

[DocumentStore](DocumentStore.md).[dependencies](DocumentStore.md#dependencies)

#### Defined in

[lib/document/DocumentStore.ts:13](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/DocumentStore.ts#L13)

___

### documentMap

• `Protected` **documentMap**: `Map`<`string`, [`ContainerResource`](ContainerResource.md)\>

#### Inherited from

[DocumentStore](DocumentStore.md).[documentMap](DocumentStore.md#documentmap)

#### Defined in

[lib/document/DocumentStore.ts:12](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/DocumentStore.ts#L12)

## Methods

### create

▸ `Protected` **create**(`initializer`): [`ContainerResource`](ContainerResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializer` | `string` |

#### Returns

[`ContainerResource`](ContainerResource.md)

#### Overrides

[DocumentStore](DocumentStore.md).[create](DocumentStore.md#create)

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResourceStore.ts:20](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResourceStore.ts#L20)

___

### get

▸ **get**(`initializerInput`): [`ContainerResource`](ContainerResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializerInput` | `string` |

#### Returns

[`ContainerResource`](ContainerResource.md)

#### Inherited from

[DocumentStore](DocumentStore.md).[get](DocumentStore.md#get)

#### Defined in

[lib/document/DocumentStore.ts:20](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/DocumentStore.ts#L20)

___

### getContainerForResouce

▸ **getContainerForResouce**(`resource`): `undefined` \| [`ContainerResource`](ContainerResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resource` | [`Resource`](Resource.md) |

#### Returns

`undefined` \| [`ContainerResource`](ContainerResource.md)

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResourceStore.ts:28](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResourceStore.ts#L28)

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

[lib/document/resource/dataResource/containerResource/ContainerResourceStore.ts:24](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResourceStore.ts#L24)

___

### getParentUri

▸ `Static` **getParentUri**(`uri`): `undefined` \| `string`

Returns the parent container URI

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`undefined` \| `string`

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResourceStore.ts:36](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResourceStore.ts#L36)
