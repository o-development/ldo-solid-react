[ldo-solid-react](../README.md) / [Exports](../modules.md) / AccessRulesStore

# Class: AccessRulesStore

## Hierarchy

- [`DocumentStore`](DocumentStore.md)<[`AccessRules`](AccessRules.md), [`Resource`](Resource.md), [`AccessRulesStoreDependencies`](../interfaces/AccessRulesStoreDependencies.md)\>

  ↳ **`AccessRulesStore`**

## Table of contents

### Constructors

- [constructor](AccessRulesStore.md#constructor)

### Properties

- [dependencies](AccessRulesStore.md#dependencies)
- [documentMap](AccessRulesStore.md#documentmap)

### Methods

- [create](AccessRulesStore.md#create)
- [get](AccessRulesStore.md#get)
- [normalizeInitializer](AccessRulesStore.md#normalizeinitializer)

## Constructors

### constructor

• **new AccessRulesStore**(`dependencies`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dependencies` | [`AccessRulesStoreDependencies`](../interfaces/AccessRulesStoreDependencies.md) |

#### Inherited from

[DocumentStore](DocumentStore.md).[constructor](DocumentStore.md#constructor)

#### Defined in

[lib/document/DocumentStore.ts:15](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/DocumentStore.ts#L15)

## Properties

### dependencies

• `Protected` **dependencies**: [`AccessRulesStoreDependencies`](../interfaces/AccessRulesStoreDependencies.md)

#### Inherited from

[DocumentStore](DocumentStore.md).[dependencies](DocumentStore.md#dependencies)

#### Defined in

[lib/document/DocumentStore.ts:13](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/DocumentStore.ts#L13)

___

### documentMap

• `Protected` **documentMap**: `Map`<[`Resource`](Resource.md), [`AccessRules`](AccessRules.md)\>

#### Inherited from

[DocumentStore](DocumentStore.md).[documentMap](DocumentStore.md#documentmap)

#### Defined in

[lib/document/DocumentStore.ts:12](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/DocumentStore.ts#L12)

## Methods

### create

▸ **create**(`initializer`): [`AccessRules`](AccessRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializer` | [`Resource`](Resource.md) |

#### Returns

[`AccessRules`](AccessRules.md)

#### Overrides

[DocumentStore](DocumentStore.md).[create](DocumentStore.md#create)

#### Defined in

[lib/document/accessRules/AccessRulesStore.ts:14](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/accessRules/AccessRulesStore.ts#L14)

___

### get

▸ **get**(`initializerInput`): [`AccessRules`](AccessRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializerInput` | [`Resource`](Resource.md) |

#### Returns

[`AccessRules`](AccessRules.md)

#### Inherited from

[DocumentStore](DocumentStore.md).[get](DocumentStore.md#get)

#### Defined in

[lib/document/DocumentStore.ts:20](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/DocumentStore.ts#L20)

___

### normalizeInitializer

▸ `Protected` **normalizeInitializer**(`initializer`): [`Resource`](Resource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializer` | [`Resource`](Resource.md) |

#### Returns

[`Resource`](Resource.md)

#### Inherited from

[DocumentStore](DocumentStore.md).[normalizeInitializer](DocumentStore.md#normalizeinitializer)

#### Defined in

[lib/document/DocumentStore.ts:33](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/DocumentStore.ts#L33)
