[ldo-solid-react](README.md) / Exports

# ldo-solid-react

## Table of contents

### Classes

- [AccessRules](classes/AccessRules.md)
- [AccessRulesStore](classes/AccessRulesStore.md)
- [BinaryResource](classes/BinaryResource.md)
- [BinaryResourceStore](classes/BinaryResourceStore.md)
- [ContainerResource](classes/ContainerResource.md)
- [ContainerResourceStore](classes/ContainerResourceStore.md)
- [DataResource](classes/DataResource.md)
- [DataResourceStore](classes/DataResourceStore.md)
- [DocumentError](classes/DocumentError.md)
- [DocumentFetchError](classes/DocumentFetchError.md)
- [DocumentStore](classes/DocumentStore.md)
- [FetchableDocument](classes/FetchableDocument.md)
- [Resource](classes/Resource.md)

### Interfaces

- [AccessRulesDependencies](interfaces/AccessRulesDependencies.md)
- [AccessRulesStoreDependencies](interfaces/AccessRulesStoreDependencies.md)
- [BinaryResourceStoreDependencies](interfaces/BinaryResourceStoreDependencies.md)
- [ContainerResourceDependencies](interfaces/ContainerResourceDependencies.md)
- [ContainerResourceStoreDependencies](interfaces/ContainerResourceStoreDependencies.md)
- [DataResourceDependencies](interfaces/DataResourceDependencies.md)
- [DataResourceStoreDependencies](interfaces/DataResourceStoreDependencies.md)
- [DocumentStoreDependencies](interfaces/DocumentStoreDependencies.md)
- [FetchableDocumentDependencies](interfaces/FetchableDocumentDependencies.md)
- [ResourceDependencies](interfaces/ResourceDependencies.md)
- [UseDocumentOptions](interfaces/UseDocumentOptions.md)
- [UseLdoReturn](interfaces/UseLdoReturn.md)

### Type Aliases

- [AccessModes](modules.md#accessmodes)
- [BinaryResourceDependencies](modules.md#binaryresourcedependencies)

### Variables

- [SolidAuthContext](modules.md#solidauthcontext)

### Functions

- [SolidAuthProvider](modules.md#solidauthprovider)
- [useAccessRules](modules.md#useaccessrules)
- [useBinaryResource](modules.md#usebinaryresource)
- [useContainerResource](modules.md#usecontainerresource)
- [useDataResource](modules.md#usedataresource)
- [useDocument](modules.md#usedocument)
- [useLdo](modules.md#useldo)
- [useSolidAuth](modules.md#usesolidauth)
- [useSubject](modules.md#usesubject)

## Type Aliases

### AccessModes

Ƭ **AccessModes**: `IAccessModes`

#### Defined in

[lib/document/accessRules/AccessRules.ts:11](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/accessRules/AccessRules.ts#L11)

___

### BinaryResourceDependencies

Ƭ **BinaryResourceDependencies**: [`ResourceDependencies`](interfaces/ResourceDependencies.md)

#### Defined in

[lib/document/resource/binaryResource/BinaryResource.ts:4](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/binaryResource/BinaryResource.ts#L4)

## Variables

### SolidAuthContext

• `Const` **SolidAuthContext**: `Context`<`AuthGlobalHookReturn`\> = `authGlobalHook.Context`

#### Defined in

[lib/SolidAuthProvider.ts:74](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/SolidAuthProvider.ts#L74)

## Functions

### SolidAuthProvider

▸ **SolidAuthProvider**(`props`, `context?`): ``null`` \| `ReactElement`<`any`, `any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Object` |
| `props.children?` | `ReactNode` |
| `context?` | `any` |

#### Returns

``null`` \| `ReactElement`<`any`, `any`\>

#### Defined in

node_modules/@types/react/ts5.0/index.d.ts:521

___

### useAccessRules

▸ **useAccessRules**(`resource`, `options?`): [`AccessRules`](classes/AccessRules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `resource` | `string` \| [`Resource`](classes/Resource.md) |
| `options?` | [`UseDocumentOptions`](interfaces/UseDocumentOptions.md) |

#### Returns

[`AccessRules`](classes/AccessRules.md)

#### Defined in

[lib/documentHooks/useAccessRules.ts:6](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/documentHooks/useAccessRules.ts#L6)

___

### useBinaryResource

▸ **useBinaryResource**(`uri`, `options?`): [`BinaryResource`](classes/BinaryResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `options?` | [`UseDocumentOptions`](interfaces/UseDocumentOptions.md) |

#### Returns

[`BinaryResource`](classes/BinaryResource.md)

#### Defined in

[lib/documentHooks/useBinaryResource.ts:4](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/documentHooks/useBinaryResource.ts#L4)

___

### useContainerResource

▸ **useContainerResource**(`uri`, `options?`): [`ContainerResource`](classes/ContainerResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `options?` | [`UseDocumentOptions`](interfaces/UseDocumentOptions.md) |

#### Returns

[`ContainerResource`](classes/ContainerResource.md)

#### Defined in

[lib/documentHooks/useContainerResource.ts:4](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/documentHooks/useContainerResource.ts#L4)

___

### useDataResource

▸ **useDataResource**(`uri`, `options?`): [`DataResource`](classes/DataResource.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `options?` | [`UseDocumentOptions`](interfaces/UseDocumentOptions.md) |

#### Returns

[`DataResource`](classes/DataResource.md)

#### Defined in

[lib/documentHooks/useDataResource.ts:4](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/documentHooks/useDataResource.ts#L4)

___

### useDocument

▸ **useDocument**<`DocumentType`, `Initializer`\>(`initializer`, `documentStore`, `options?`): `DocumentType`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DocumentType` | extends [`FetchableDocument`](classes/FetchableDocument.md)<`DocumentType`\> |
| `Initializer` | `Initializer` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initializer` | `Initializer` |
| `documentStore` | [`DocumentStore`](classes/DocumentStore.md)<`DocumentType`, `Initializer`, [`DocumentStoreDependencies`](interfaces/DocumentStoreDependencies.md)\> |
| `options?` | [`UseDocumentOptions`](interfaces/UseDocumentOptions.md) |

#### Returns

`DocumentType`

#### Defined in

[lib/documentHooks/useDocument.ts:13](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/documentHooks/useDocument.ts#L13)

___

### useLdo

▸ **useLdo**(): [`UseLdoReturn`](interfaces/UseLdoReturn.md)

#### Returns

[`UseLdoReturn`](interfaces/UseLdoReturn.md)

#### Defined in

[lib/useLdo.ts:36](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/useLdo.ts#L36)

___

### useSolidAuth

▸ **useSolidAuth**(): `AuthGlobalHookReturn`

#### Returns

`AuthGlobalHookReturn`

#### Defined in

[lib/util/createGlobalHook.tsx:11](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/util/createGlobalHook.tsx#L11)

___

### useSubject

▸ **useSubject**<`Type`\>(`shapeType`, `subject`): [`Type`, `undefined`] \| [`undefined`, `Error`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `LdoBase` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeType` | `ShapeType`<`Type`\> |
| `subject` | `string` \| `SubjectType` |

#### Returns

[`Type`, `undefined`] \| [`undefined`, `Error`]

#### Defined in

[lib/ldoHooks/useSubject.ts:13](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/ldoHooks/useSubject.ts#L13)
