[ldo-solid-react](../README.md) / [Exports](../modules.md) / UseLdoReturn

# Interface: UseLdoReturn

## Table of contents

### Properties

- [dataset](UseLdoReturn.md#dataset)
- [getAccessRules](UseLdoReturn.md#getaccessrules)
- [getBinaryResource](UseLdoReturn.md#getbinaryresource)
- [getContainerResource](UseLdoReturn.md#getcontainerresource)
- [getDataResource](UseLdoReturn.md#getdataresource)

### Methods

- [changeData](UseLdoReturn.md#changedata)
- [commitData](UseLdoReturn.md#commitdata)
- [createData](UseLdoReturn.md#createdata)

## Properties

### dataset

• **dataset**: `LdoDataset`

#### Defined in

[lib/useLdo.ts:29](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/useLdo.ts#L29)

___

### getAccessRules

• **getAccessRules**: (`resource`: [`Resource`](../classes/Resource.md)) => [`AccessRules`](../classes/AccessRules.md)

#### Type declaration

▸ (`resource`): [`AccessRules`](../classes/AccessRules.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `resource` | [`Resource`](../classes/Resource.md) |

##### Returns

[`AccessRules`](../classes/AccessRules.md)

#### Defined in

[lib/useLdo.ts:33](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/useLdo.ts#L33)

___

### getBinaryResource

• **getBinaryResource**: (`uri`: `string`) => [`BinaryResource`](../classes/BinaryResource.md)

#### Type declaration

▸ (`uri`): [`BinaryResource`](../classes/BinaryResource.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

##### Returns

[`BinaryResource`](../classes/BinaryResource.md)

#### Defined in

[lib/useLdo.ts:31](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/useLdo.ts#L31)

___

### getContainerResource

• **getContainerResource**: (`uri`: `string`) => [`ContainerResource`](../classes/ContainerResource.md)

#### Type declaration

▸ (`uri`): [`ContainerResource`](../classes/ContainerResource.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

##### Returns

[`ContainerResource`](../classes/ContainerResource.md)

#### Defined in

[lib/useLdo.ts:32](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/useLdo.ts#L32)

___

### getDataResource

• **getDataResource**: (`uri`: `string`) => [`DataResource`](../classes/DataResource.md)

#### Type declaration

▸ (`uri`): [`DataResource`](../classes/DataResource.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

##### Returns

[`DataResource`](../classes/DataResource.md)

#### Defined in

[lib/useLdo.ts:30](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/useLdo.ts#L30)

## Methods

### changeData

▸ **changeData**<`Type`\>(`input`, ...`resources`): `Type`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `LdoBase` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Type` |
| `...resources` | [`Resource`](../classes/Resource.md)[] |

#### Returns

`Type`

#### Defined in

[lib/useLdo.ts:22](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/useLdo.ts#L22)

___

### commitData

▸ **commitData**(`input`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `LdoBase` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/useLdo.ts:23](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/useLdo.ts#L23)

___

### createData

▸ **createData**<`Type`\>(`shapeType`, `subject`, ...`resources`): `Type`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Type` | extends `LdoBase` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shapeType` | `ShapeType`<`Type`\> |
| `subject` | `string` \| `SubjectType` |
| `...resources` | [`Resource`](../classes/Resource.md)[] |

#### Returns

`Type`

#### Defined in

[lib/useLdo.ts:24](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/useLdo.ts#L24)
