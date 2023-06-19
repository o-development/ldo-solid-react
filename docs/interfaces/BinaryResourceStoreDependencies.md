[ldo-solid-react](../README.md) / [Exports](../modules.md) / BinaryResourceStoreDependencies

# Interface: BinaryResourceStoreDependencies

## Hierarchy

- [`DocumentStoreDependencies`](DocumentStoreDependencies.md)

- [`BinaryResourceDependencies`](../modules.md#binaryresourcedependencies)

  ↳ **`BinaryResourceStoreDependencies`**

## Table of contents

### Properties

- [accessRulesStore](BinaryResourceStoreDependencies.md#accessrulesstore)
- [containerResourceStore](BinaryResourceStoreDependencies.md#containerresourcestore)
- [fetch](BinaryResourceStoreDependencies.md#fetch)
- [onDocumentError](BinaryResourceStoreDependencies.md#ondocumenterror)

## Properties

### accessRulesStore

• **accessRulesStore**: [`AccessRulesStore`](../classes/AccessRulesStore.md)

#### Inherited from

BinaryResourceDependencies.accessRulesStore

#### Defined in

[lib/document/resource/Resource.ts:12](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L12)

___

### containerResourceStore

• **containerResourceStore**: [`ContainerResourceStore`](../classes/ContainerResourceStore.md)

#### Inherited from

BinaryResourceDependencies.containerResourceStore

#### Defined in

[lib/document/resource/Resource.ts:13](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L13)

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

BinaryResourceDependencies.fetch

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

BinaryResourceDependencies.onDocumentError

#### Defined in

[lib/document/FetchableDocument.ts:5](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L5)
