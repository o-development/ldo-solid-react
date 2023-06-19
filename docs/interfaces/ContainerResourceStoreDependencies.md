[ldo-solid-react](../README.md) / [Exports](../modules.md) / ContainerResourceStoreDependencies

# Interface: ContainerResourceStoreDependencies

## Hierarchy

- [`ContainerResourceDependencies`](ContainerResourceDependencies.md)

- [`DocumentStoreDependencies`](DocumentStoreDependencies.md)

  ↳ **`ContainerResourceStoreDependencies`**

## Table of contents

### Properties

- [accessRulesStore](ContainerResourceStoreDependencies.md#accessrulesstore)
- [binaryResourceStore](ContainerResourceStoreDependencies.md#binaryresourcestore)
- [containerResourceStore](ContainerResourceStoreDependencies.md#containerresourcestore)
- [dataResourceStore](ContainerResourceStoreDependencies.md#dataresourcestore)
- [dataset](ContainerResourceStoreDependencies.md#dataset)
- [fetch](ContainerResourceStoreDependencies.md#fetch)
- [onDocumentError](ContainerResourceStoreDependencies.md#ondocumenterror)
- [updateManager](ContainerResourceStoreDependencies.md#updatemanager)

## Properties

### accessRulesStore

• **accessRulesStore**: [`AccessRulesStore`](../classes/AccessRulesStore.md)

#### Inherited from

[ContainerResourceDependencies](ContainerResourceDependencies.md).[accessRulesStore](ContainerResourceDependencies.md#accessrulesstore)

#### Defined in

[lib/document/resource/Resource.ts:12](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L12)

___

### binaryResourceStore

• **binaryResourceStore**: [`BinaryResourceStore`](../classes/BinaryResourceStore.md)

#### Inherited from

[ContainerResourceDependencies](ContainerResourceDependencies.md).[binaryResourceStore](ContainerResourceDependencies.md#binaryresourcestore)

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResource.ts:10](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/dataResource/containerResource/ContainerResource.ts#L10)

___

### containerResourceStore

• **containerResourceStore**: [`ContainerResourceStore`](../classes/ContainerResourceStore.md)

#### Inherited from

[ContainerResourceDependencies](ContainerResourceDependencies.md).[containerResourceStore](ContainerResourceDependencies.md#containerresourcestore)

#### Defined in

[lib/document/resource/Resource.ts:13](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L13)

___

### dataResourceStore

• **dataResourceStore**: [`DataResourceStore`](../classes/DataResourceStore.md)

#### Inherited from

[ContainerResourceDependencies](ContainerResourceDependencies.md).[dataResourceStore](ContainerResourceDependencies.md#dataresourcestore)

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResource.ts:9](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/dataResource/containerResource/ContainerResource.ts#L9)

___

### dataset

• **dataset**: `LdoDataset`

#### Inherited from

[ContainerResourceDependencies](ContainerResourceDependencies.md).[dataset](ContainerResourceDependencies.md#dataset)

#### Defined in

[lib/document/resource/dataResource/DataResource.ts:12](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/dataResource/DataResource.ts#L12)

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

[ContainerResourceDependencies](ContainerResourceDependencies.md).[fetch](ContainerResourceDependencies.md#fetch)

#### Defined in

[lib/document/resource/Resource.ts:11](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L11)

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

[ContainerResourceDependencies](ContainerResourceDependencies.md).[onDocumentError](ContainerResourceDependencies.md#ondocumenterror)

#### Defined in

[lib/document/FetchableDocument.ts:5](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L5)

___

### updateManager

• **updateManager**: `UpdateManager`

#### Inherited from

[ContainerResourceDependencies](ContainerResourceDependencies.md).[updateManager](ContainerResourceDependencies.md#updatemanager)

#### Defined in

[lib/document/resource/dataResource/DataResource.ts:13](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/dataResource/DataResource.ts#L13)
