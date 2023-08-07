[ldo-solid-react](../README.md) / [Exports](../modules.md) / ResourceDependencies

# Interface: ResourceDependencies

## Hierarchy

- [`FetchableDocumentDependencies`](FetchableDocumentDependencies.md)

  ↳ **`ResourceDependencies`**

  ↳↳ [`DataResourceDependencies`](DataResourceDependencies.md)

## Table of contents

### Properties

- [accessRulesStore](ResourceDependencies.md#accessrulesstore)
- [containerResourceStore](ResourceDependencies.md#containerresourcestore)
- [fetch](ResourceDependencies.md#fetch)
- [onDocumentError](ResourceDependencies.md#ondocumenterror)

## Properties

### accessRulesStore

• **accessRulesStore**: [`AccessRulesStore`](../classes/AccessRulesStore.md)

#### Defined in

[lib/document/resource/Resource.ts:12](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L12)

___

### containerResourceStore

• **containerResourceStore**: [`ContainerResourceStore`](../classes/ContainerResourceStore.md)

#### Defined in

[lib/document/resource/Resource.ts:13](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L13)

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

[FetchableDocumentDependencies](FetchableDocumentDependencies.md).[onDocumentError](FetchableDocumentDependencies.md#ondocumenterror)

#### Defined in

[lib/document/FetchableDocument.ts:5](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L5)
