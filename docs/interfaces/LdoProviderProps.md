[ldo-solid-react](../README.md) / [Exports](../modules.md) / LdoProviderProps

# Interface: LdoProviderProps

## Hierarchy

- `PropsWithChildren`

  ↳ **`LdoProviderProps`**

## Table of contents

### Properties

- [children](LdoProviderProps.md#children)
- [dataset](LdoProviderProps.md#dataset)
- [fetch](LdoProviderProps.md#fetch)
- [onDocumentError](LdoProviderProps.md#ondocumenterror)

## Properties

### children

• `Optional` **children**: `ReactNode`

#### Inherited from

PropsWithChildren.children

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:800

___

### dataset

• `Optional` **dataset**: `Dataset`<`Quad`, `Quad`\>

#### Defined in

[lib/LdoProvider.tsx:19](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/LdoProvider.tsx#L19)

___

### fetch

• `Optional` **fetch**: (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`<`Response`\>

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

[lib/LdoProvider.tsx:18](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/LdoProvider.tsx#L18)

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

#### Defined in

[lib/LdoProvider.tsx:20](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/LdoProvider.tsx#L20)
