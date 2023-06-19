[ldo-solid-react](../README.md) / [Exports](../modules.md) / AccessRulesStoreDependencies

# Interface: AccessRulesStoreDependencies

## Hierarchy

- [`DocumentStoreDependencies`](DocumentStoreDependencies.md)

- [`AccessRulesDependencies`](AccessRulesDependencies.md)

  ↳ **`AccessRulesStoreDependencies`**

## Table of contents

### Properties

- [fetch](AccessRulesStoreDependencies.md#fetch)
- [onDocumentError](AccessRulesStoreDependencies.md#ondocumenterror)

## Properties

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

[AccessRulesDependencies](AccessRulesDependencies.md).[fetch](AccessRulesDependencies.md#fetch)

#### Defined in

[lib/document/accessRules/AccessRules.ts:14](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/accessRules/AccessRules.ts#L14)

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

[AccessRulesDependencies](AccessRulesDependencies.md).[onDocumentError](AccessRulesDependencies.md#ondocumenterror)

#### Defined in

[lib/document/FetchableDocument.ts:5](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L5)