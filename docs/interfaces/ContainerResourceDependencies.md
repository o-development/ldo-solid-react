[ldo-solid-react](../README.md) / [Exports](../modules.md) / ContainerResourceDependencies

# Interface: ContainerResourceDependencies

## Hierarchy

- [`DataResourceDependencies`](DataResourceDependencies.md)

  ↳ **`ContainerResourceDependencies`**

  ↳↳ [`ContainerResourceStoreDependencies`](ContainerResourceStoreDependencies.md)

## Table of contents

### Properties

- [accessRulesStore](ContainerResourceDependencies.md#accessrulesstore)
- [binaryResourceStore](ContainerResourceDependencies.md#binaryresourcestore)
- [containerResourceStore](ContainerResourceDependencies.md#containerresourcestore)
- [dataResourceStore](ContainerResourceDependencies.md#dataresourcestore)
- [dataset](ContainerResourceDependencies.md#dataset)
- [fetch](ContainerResourceDependencies.md#fetch)
- [onDocumentError](ContainerResourceDependencies.md#ondocumenterror)
- [updateManager](ContainerResourceDependencies.md#updatemanager)

## Properties

### accessRulesStore

• **accessRulesStore**: [`AccessRulesStore`](../classes/AccessRulesStore.md)

#### Inherited from

[DataResourceDependencies](DataResourceDependencies.md).[accessRulesStore](DataResourceDependencies.md#accessrulesstore)

#### Defined in

[lib/document/resource/Resource.ts:12](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L12)

___

### binaryResourceStore

• **binaryResourceStore**: [`BinaryResourceStore`](../classes/BinaryResourceStore.md)

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResource.ts:10](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResource.ts#L10)

___

### containerResourceStore

• **containerResourceStore**: [`ContainerResourceStore`](../classes/ContainerResourceStore.md)

#### Inherited from

[DataResourceDependencies](DataResourceDependencies.md).[containerResourceStore](DataResourceDependencies.md#containerresourcestore)

#### Defined in

[lib/document/resource/Resource.ts:13](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L13)

___

### dataResourceStore

• **dataResourceStore**: [`DataResourceStore`](../classes/DataResourceStore.md)

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResource.ts:9](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResource.ts#L9)

___

### dataset

• **dataset**: `LdoDataset`

#### Inherited from

[DataResourceDependencies](DataResourceDependencies.md).[dataset](DataResourceDependencies.md#dataset)

#### Defined in

[lib/document/resource/dataResource/DataResource.ts:12](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/DataResource.ts#L12)

___

### fetch

• **fetch**: (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`<`Response`\>

#### Type declaration

▸ (`input`, `init?`): `Promise`<`Response`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` \| `URL` |
| `init?` | `RequestInit` |

##### Returns

`Promise`<`Response`\>

#### Inherited from

[DataResourceDependencies](DataResourceDependencies.md).[fetch](DataResourceDependencies.md#fetch)

#### Defined in

[lib/document/resource/Resource.ts:11](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L11)

___

### onDocumentError

• `Optional` **onDocumentError**: (`error`: [`DocumentError`](../classes/DocumentError.md)) => `void`

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`DocumentError`](../classes/DocumentError.md) |

##### Returns

`void`

#### Inherited from

[DataResourceDependencies](DataResourceDependencies.md).[onDocumentError](DataResourceDependencies.md#ondocumenterror)

#### Defined in

[lib/document/FetchableDocument.ts:5](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L5)

___

### updateManager

• **updateManager**: `UpdateManager`

#### Inherited from

[DataResourceDependencies](DataResourceDependencies.md).[updateManager](DataResourceDependencies.md#updatemanager)

#### Defined in

[lib/document/resource/dataResource/DataResource.ts:13](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/DataResource.ts#L13)
