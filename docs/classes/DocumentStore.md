[ldo-solid-react](../README.md) / [Exports](../modules.md) / DocumentStore

# Class: DocumentStore<DocumentType, Initializer, Dependencies\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `DocumentType` | extends [`FetchableDocument`](FetchableDocument.md) |
| `Initializer` | `Initializer` |
| `Dependencies` | extends [`DocumentStoreDependencies`](../interfaces/DocumentStoreDependencies.md) |

## Hierarchy

- **`DocumentStore`**

  ↳ [`AccessRulesStore`](AccessRulesStore.md)

  ↳ [`BinaryResourceStore`](BinaryResourceStore.md)

  ↳ [`DataResourceStore`](DataResourceStore.md)

  ↳ [`ContainerResourceStore`](ContainerResourceStore.md)

## Table of contents

### Constructors

- [constructor](DocumentStore.md#constructor)

### Properties

- [dependencies](DocumentStore.md#dependencies)
- [documentMap](DocumentStore.md#documentmap)

### Methods

- [create](DocumentStore.md#create)
- [get](DocumentStore.md#get)
- [normalizeInitializer](DocumentStore.md#normalizeinitializer)

## Constructors

### constructor

• **new DocumentStore**<`DocumentType`, `Initializer`, `Dependencies`\>(`dependencies`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DocumentType` | extends [`FetchableDocument`](FetchableDocument.md)<`DocumentType`\> |
| `Initializer` | `Initializer` |
| `Dependencies` | extends [`DocumentStoreDependencies`](../interfaces/DocumentStoreDependencies.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dependencies` | `Dependencies` |

#### Defined in

[lib/document/DocumentStore.ts:15](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/DocumentStore.ts#L15)

## Properties

### dependencies

• `Protected` **dependencies**: `Dependencies`

#### Defined in

[lib/document/DocumentStore.ts:13](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/DocumentStore.ts#L13)

___

### documentMap

• `Protected` **documentMap**: `Map`<`Initializer`, `DocumentType`\>

#### Defined in

[lib/document/DocumentStore.ts:12](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/DocumentStore.ts#L12)

## Methods

### create

▸ `Protected` `Abstract` **create**(`initializer`): `DocumentType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializer` | `Initializer` |

#### Returns

`DocumentType`

#### Defined in

[lib/document/DocumentStore.ts:31](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/DocumentStore.ts#L31)

___

### get

▸ **get**(`initializerInput`): `DocumentType`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializerInput` | `Initializer` |

#### Returns

`DocumentType`

#### Defined in

[lib/document/DocumentStore.ts:20](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/DocumentStore.ts#L20)

___

### normalizeInitializer

▸ `Protected` **normalizeInitializer**(`initializer`): `Initializer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializer` | `Initializer` |

#### Returns

`Initializer`

#### Defined in

[lib/document/DocumentStore.ts:33](https://github.com/o-development/ldo-solid-react/blob/29a7f21/lib/document/DocumentStore.ts#L33)
