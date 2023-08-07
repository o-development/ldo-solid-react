[ldo-solid-react](../README.md) / [Exports](../modules.md) / DataResourceDependencies

# Interface: DataResourceDependencies

## Hierarchy

- [`ResourceDependencies`](ResourceDependencies.md)

  ↳ **`DataResourceDependencies`**

  ↳↳ [`DataResourceStoreDependencies`](DataResourceStoreDependencies.md)

  ↳↳ [`ContainerResourceDependencies`](ContainerResourceDependencies.md)

## Table of contents

### Properties

- [accessRulesStore](DataResourceDependencies.md#accessrulesstore)
- [containerResourceStore](DataResourceDependencies.md#containerresourcestore)
- [dataset](DataResourceDependencies.md#dataset)
- [fetch](DataResourceDependencies.md#fetch)
- [onDocumentError](DataResourceDependencies.md#ondocumenterror)
- [updateManager](DataResourceDependencies.md#updatemanager)

## Properties

### accessRulesStore

• **accessRulesStore**: [`AccessRulesStore`](../classes/AccessRulesStore.md)

#### Inherited from

[ResourceDependencies](ResourceDependencies.md).[accessRulesStore](ResourceDependencies.md#accessrulesstore)

#### Defined in

[lib/document/resource/Resource.ts:12](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L12)

___

### containerResourceStore

• **containerResourceStore**: [`ContainerResourceStore`](../classes/ContainerResourceStore.md)

#### Inherited from

[ResourceDependencies](ResourceDependencies.md).[containerResourceStore](ResourceDependencies.md#containerresourcestore)

#### Defined in

[lib/document/resource/Resource.ts:13](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L13)

___

### dataset

• **dataset**: `LdoDataset`

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

[ResourceDependencies](ResourceDependencies.md).[fetch](ResourceDependencies.md#fetch)

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

[ResourceDependencies](ResourceDependencies.md).[onDocumentError](ResourceDependencies.md#ondocumenterror)

#### Defined in

[lib/document/FetchableDocument.ts:5](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L5)

___

### updateManager

• **updateManager**: `UpdateManager`

#### Defined in

[lib/document/resource/dataResource/DataResource.ts:13](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/DataResource.ts#L13)
