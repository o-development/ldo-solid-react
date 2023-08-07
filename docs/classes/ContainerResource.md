[ldo-solid-react](../README.md) / [Exports](../modules.md) / ContainerResource

# Class: ContainerResource

## Hierarchy

- [`DataResource`](DataResource.md)

  ↳ **`ContainerResource`**

## Table of contents

### Constructors

- [constructor](ContainerResource.md#constructor)

### Properties

- [\_contains](ContainerResource.md#_contains)
- [\_didInitialFetch](ContainerResource.md#_didinitialfetch)
- [\_error](ContainerResource.md#_error)
- [\_isLoading](ContainerResource.md#_isloading)
- [\_isWriting](ContainerResource.md#_iswriting)
- [dependencies3](ContainerResource.md#dependencies3)
- [uri](ContainerResource.md#uri)
- [captureRejectionSymbol](ContainerResource.md#capturerejectionsymbol)
- [captureRejections](ContainerResource.md#capturerejections)
- [defaultMaxListeners](ContainerResource.md#defaultmaxlisteners)
- [errorMonitor](ContainerResource.md#errormonitor)

### Accessors

- [@id](ContainerResource.md#@id)
- [accessRules](ContainerResource.md#accessrules)
- [accessRulesStore](ContainerResource.md#accessrulesstore)
- [binaryResourceStore](ContainerResource.md#binaryresourcestore)
- [containerResourceStore](ContainerResource.md#containerresourcestore)
- [contains](ContainerResource.md#contains)
- [dataResourceStore](ContainerResource.md#dataresourcestore)
- [dataset](ContainerResource.md#dataset)
- [didInitialFetch](ContainerResource.md#didinitialfetch)
- [error](ContainerResource.md#error)
- [fetch](ContainerResource.md#fetch)
- [isLoading](ContainerResource.md#isloading)
- [isWriting](ContainerResource.md#iswriting)
- [onDocumentError](ContainerResource.md#ondocumenterror)
- [parentContainer](ContainerResource.md#parentcontainer)
- [updateManager](ContainerResource.md#updatemanager)

### Methods

- [addContainedResources](ContainerResource.md#addcontainedresources)
- [addListener](ContainerResource.md#addlistener)
- [beginWrite](ContainerResource.md#beginwrite)
- [create](ContainerResource.md#create)
- [delete](ContainerResource.md#delete)
- [emit](ContainerResource.md#emit)
- [emitStateUpdate](ContainerResource.md#emitstateupdate)
- [endWrite](ContainerResource.md#endwrite)
- [eventNames](ContainerResource.md#eventnames)
- [fetchDocument](ContainerResource.md#fetchdocument)
- [getMaxListeners](ContainerResource.md#getmaxlisteners)
- [listenerCount](ContainerResource.md#listenercount)
- [listeners](ContainerResource.md#listeners)
- [off](ContainerResource.md#off)
- [offStateUpdate](ContainerResource.md#offstateupdate)
- [on](ContainerResource.md#on)
- [onStateUpdate](ContainerResource.md#onstateupdate)
- [once](ContainerResource.md#once)
- [prependListener](ContainerResource.md#prependlistener)
- [prependOnceListener](ContainerResource.md#prependoncelistener)
- [rawListeners](ContainerResource.md#rawlisteners)
- [read](ContainerResource.md#read)
- [reload](ContainerResource.md#reload)
- [removeAllListeners](ContainerResource.md#removealllisteners)
- [removeContainedResources](ContainerResource.md#removecontainedresources)
- [removeListener](ContainerResource.md#removelistener)
- [setError](ContainerResource.md#seterror)
- [setMaxListeners](ContainerResource.md#setmaxlisteners)
- [update](ContainerResource.md#update)
- [getEventListeners](ContainerResource.md#geteventlisteners)
- [listenerCount](ContainerResource.md#listenercount-1)
- [normalizeUri](ContainerResource.md#normalizeuri)
- [on](ContainerResource.md#on-1)
- [once](ContainerResource.md#once-1)
- [setMaxListeners](ContainerResource.md#setmaxlisteners-1)

## Constructors

### constructor

• **new ContainerResource**(`uri`, `dependencies`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `dependencies` | [`ContainerResourceDependencies`](../interfaces/ContainerResourceDependencies.md) |

#### Overrides

[DataResource](DataResource.md).[constructor](DataResource.md#constructor)

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResource.ts:17](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResource.ts#L17)

## Properties

### \_contains

• `Private` **\_contains**: `Set`<[`Resource`](Resource.md)\>

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResource.ts:14](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResource.ts#L14)

___

### \_didInitialFetch

• `Protected` **\_didInitialFetch**: `boolean`

#### Inherited from

[DataResource](DataResource.md).[_didInitialFetch](DataResource.md#_didinitialfetch)

#### Defined in

[lib/document/FetchableDocument.ts:13](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L13)

___

### \_error

• `Protected` `Optional` **\_error**: [`DocumentError`](DocumentError.md)

#### Inherited from

[DataResource](DataResource.md).[_error](DataResource.md#_error)

#### Defined in

[lib/document/FetchableDocument.ts:14](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L14)

___

### \_isLoading

• `Protected` **\_isLoading**: `boolean`

#### Inherited from

[DataResource](DataResource.md).[_isLoading](DataResource.md#_isloading)

#### Defined in

[lib/document/FetchableDocument.ts:11](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L11)

___

### \_isWriting

• `Protected` **\_isWriting**: `boolean`

#### Inherited from

[DataResource](DataResource.md).[_isWriting](DataResource.md#_iswriting)

#### Defined in

[lib/document/FetchableDocument.ts:12](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L12)

___

### dependencies3

• `Private` **dependencies3**: [`ContainerResourceDependencies`](../interfaces/ContainerResourceDependencies.md)

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResource.ts:15](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResource.ts#L15)

___

### uri

• `Readonly` **uri**: `string`

#### Inherited from

[DataResource](DataResource.md).[uri](DataResource.md#uri)

#### Defined in

[lib/document/resource/Resource.ts:17](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L17)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](FetchableDocument.md#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

[DataResource](DataResource.md).[captureRejectionSymbol](DataResource.md#capturerejectionsymbol)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:326

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

[DataResource](DataResource.md).[captureRejections](DataResource.md#capturerejections)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:333

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners`property can be used. If this value is not a positive number, a `RangeError`is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_`EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()`methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

**`Since`**

v0.11.2

#### Inherited from

[DataResource](DataResource.md).[defaultMaxListeners](DataResource.md#defaultmaxlisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:370

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](FetchableDocument.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`events. Listeners installed using this symbol are called before the regular`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an`'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

**`Since`**

v13.6.0, v12.17.0

#### Inherited from

[DataResource](DataResource.md).[errorMonitor](DataResource.md#errormonitor)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:319

## Accessors

### @id

• `get` **@id**(): `string`

#### Returns

`string`

#### Inherited from

DataResource.@id

#### Defined in

[lib/document/resource/Resource.ts:39](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L39)

___

### accessRules

• `get` **accessRules**(): [`AccessRules`](AccessRules.md)

===========================================================================
Getters
===========================================================================

#### Returns

[`AccessRules`](AccessRules.md)

#### Inherited from

DataResource.accessRules

#### Defined in

[lib/document/resource/Resource.ts:31](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L31)

___

### accessRulesStore

• `Protected` `get` **accessRulesStore**(): [`AccessRulesStore`](AccessRulesStore.md)

#### Returns

[`AccessRulesStore`](AccessRulesStore.md)

#### Inherited from

DataResource.accessRulesStore

#### Defined in

[lib/document/resource/Resource.ts:47](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L47)

___

### binaryResourceStore

• `Protected` `get` **binaryResourceStore**(): [`BinaryResourceStore`](BinaryResourceStore.md)

#### Returns

[`BinaryResourceStore`](BinaryResourceStore.md)

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResource.ts:32](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResource.ts#L32)

___

### containerResourceStore

• `Protected` `get` **containerResourceStore**(): [`ContainerResourceStore`](ContainerResourceStore.md)

#### Returns

[`ContainerResourceStore`](ContainerResourceStore.md)

#### Inherited from

DataResource.containerResourceStore

#### Defined in

[lib/document/resource/Resource.ts:51](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L51)

___

### contains

• `get` **contains**(): [`Resource`](Resource.md)[]

===========================================================================
Getters
===========================================================================

#### Returns

[`Resource`](Resource.md)[]

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResource.ts:28](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResource.ts#L28)

___

### dataResourceStore

• `Protected` `get` **dataResourceStore**(): [`DataResourceStore`](DataResourceStore.md)

#### Returns

[`DataResourceStore`](DataResourceStore.md)

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResource.ts:36](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResource.ts#L36)

___

### dataset

• `Protected` `get` **dataset**(): `LdoDataset`

===========================================================================
Getters
===========================================================================

#### Returns

`LdoDataset`

#### Inherited from

DataResource.dataset

#### Defined in

[lib/document/resource/dataResource/DataResource.ts:29](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/DataResource.ts#L29)

___

### didInitialFetch

• `get` **didInitialFetch**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DataResource.didInitialFetch

#### Defined in

[lib/document/FetchableDocument.ts:33](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L33)

___

### error

• `get` **error**(): `undefined` \| [`DocumentError`](DocumentError.md)

#### Returns

`undefined` \| [`DocumentError`](DocumentError.md)

#### Inherited from

DataResource.error

#### Defined in

[lib/document/FetchableDocument.ts:37](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L37)

___

### fetch

• `Protected` `get` **fetch**(): (`input`: `RequestInfo` \| `URL`, `init?`: `RequestInit`) => `Promise`<`Response`\>

#### Returns

`fn`

▸ (`input`, `init?`): `Promise`<`Response`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `RequestInfo` \| `URL` |
| `init?` | `RequestInit` |

##### Returns

`Promise`<`Response`\>

#### Inherited from

DataResource.fetch

#### Defined in

[lib/document/resource/Resource.ts:43](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L43)

___

### isLoading

• `get` **isLoading**(): `boolean`

===========================================================================
Getters
===========================================================================

#### Returns

`boolean`

#### Inherited from

DataResource.isLoading

#### Defined in

[lib/document/FetchableDocument.ts:29](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L29)

___

### isWriting

• `get` **isWriting**(): `boolean`

#### Returns

`boolean`

#### Inherited from

DataResource.isWriting

#### Defined in

[lib/document/FetchableDocument.ts:41](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L41)

___

### onDocumentError

• `Protected` `get` **onDocumentError**(): `undefined` \| (`error`: [`DocumentError`](DocumentError.md)) => `void`

#### Returns

`undefined` \| (`error`: [`DocumentError`](DocumentError.md)) => `void`

#### Inherited from

DataResource.onDocumentError

#### Defined in

[lib/document/FetchableDocument.ts:45](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L45)

___

### parentContainer

• `get` **parentContainer**(): `undefined` \| [`ContainerResource`](ContainerResource.md)

#### Returns

`undefined` \| [`ContainerResource`](ContainerResource.md)

#### Inherited from

DataResource.parentContainer

#### Defined in

[lib/document/resource/Resource.ts:35](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L35)

___

### updateManager

• `Protected` `get` **updateManager**(): `UpdateManager`

#### Returns

`UpdateManager`

#### Inherited from

DataResource.updateManager

#### Defined in

[lib/document/resource/dataResource/DataResource.ts:33](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/DataResource.ts#L33)

## Methods

### addContainedResources

▸ **addContainedResources**(...`resources`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...resources` | [`Resource`](Resource.md)[] |

#### Returns

`void`

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResource.ts:76](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResource.ts#L76)

___

### addListener

▸ **addListener**(`eventName`, `listener`): [`ContainerResource`](ContainerResource.md)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ContainerResource`](ContainerResource.md)

#### Inherited from

[DataResource](DataResource.md).[addListener](DataResource.md#addlistener)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:390

___

### beginWrite

▸ `Protected` **beginWrite**(): `void`

#### Returns

`void`

#### Inherited from

[DataResource](DataResource.md).[beginWrite](DataResource.md#beginwrite)

#### Defined in

[lib/document/FetchableDocument.ts:72](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L72)

___

### create

▸ **create**(): `Promise`<`void`\>

===========================================================================
Methods
===========================================================================

#### Returns

`Promise`<`void`\>

#### Inherited from

[DataResource](DataResource.md).[create](DataResource.md#create)

#### Defined in

[lib/document/resource/dataResource/DataResource.ts:42](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/DataResource.ts#L42)

___

### delete

▸ **delete**(): `Promise`<`void`\>

===========================================================================
Methods
===========================================================================

#### Returns

`Promise`<`void`\>

#### Inherited from

[DataResource](DataResource.md).[delete](DataResource.md#delete)

#### Defined in

[lib/document/resource/Resource.ts:60](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L60)

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

[DataResource](DataResource.md).[emit](DataResource.md#emit)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:652

___

### emitStateUpdate

▸ `Protected` **emitStateUpdate**(): `void`

Emitter Information

#### Returns

`void`

#### Inherited from

[DataResource](DataResource.md).[emitStateUpdate](DataResource.md#emitstateupdate)

#### Defined in

[lib/document/FetchableDocument.ts:96](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L96)

___

### endWrite

▸ `Protected` **endWrite**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | [`DocumentError`](DocumentError.md) |

#### Returns

`void`

#### Inherited from

[DataResource](DataResource.md).[endWrite](DataResource.md#endwrite)

#### Defined in

[lib/document/FetchableDocument.ts:77](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L77)

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[DataResource](DataResource.md).[eventNames](DataResource.md#eventnames)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:715

___

### fetchDocument

▸ `Protected` **fetchDocument**(): `Promise`<`undefined` \| [`DocumentError`](DocumentError.md)\>

===========================================================================
Methods
===========================================================================

#### Returns

`Promise`<`undefined` \| [`DocumentError`](DocumentError.md)\>

#### Overrides

[DataResource](DataResource.md).[fetchDocument](DataResource.md#fetchdocument)

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResource.ts:44](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResource.ts#L44)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](ContainerResource.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

[DataResource](DataResource.md).[getMaxListeners](DataResource.md#getmaxlisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:567

___

### listenerCount

▸ **listenerCount**(`eventName`, `listener?`): `number`

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener?` | `Function` | The event handler function |

#### Returns

`number`

#### Inherited from

[DataResource](DataResource.md).[listenerCount](DataResource.md#listenercount)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:661

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[DataResource](DataResource.md).[listeners](DataResource.md#listeners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:580

___

### off

▸ **off**(`eventName`, `listener`): [`ContainerResource`](ContainerResource.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ContainerResource`](ContainerResource.md)

#### Inherited from

[DataResource](DataResource.md).[off](DataResource.md#off)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:540

___

### offStateUpdate

▸ **offStateUpdate**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Inherited from

[DataResource](DataResource.md).[offStateUpdate](DataResource.md#offstateupdate)

#### Defined in

[lib/document/FetchableDocument.ts:104](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L104)

___

### on

▸ **on**(`eventName`, `listener`): [`ContainerResource`](ContainerResource.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ContainerResource`](ContainerResource.md)

#### Inherited from

[DataResource](DataResource.md).[on](DataResource.md#on)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:422

___

### onStateUpdate

▸ **onStateUpdate**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | () => `void` |

#### Returns

`void`

#### Inherited from

[DataResource](DataResource.md).[onStateUpdate](DataResource.md#onstateupdate)

#### Defined in

[lib/document/FetchableDocument.ts:100](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L100)

___

### once

▸ **once**(`eventName`, `listener`): [`ContainerResource`](ContainerResource.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ContainerResource`](ContainerResource.md)

#### Inherited from

[DataResource](DataResource.md).[once](DataResource.md#once)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:452

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`ContainerResource`](ContainerResource.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ContainerResource`](ContainerResource.md)

#### Inherited from

[DataResource](DataResource.md).[prependListener](DataResource.md#prependlistener)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:679

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`ContainerResource`](ContainerResource.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ContainerResource`](ContainerResource.md)

#### Inherited from

[DataResource](DataResource.md).[prependOnceListener](DataResource.md#prependoncelistener)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:695

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[DataResource](DataResource.md).[rawListeners](DataResource.md#rawlisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:611

___

### read

▸ **read**(): `Promise`<`void`\>

===========================================================================
Methods
===========================================================================

#### Returns

`Promise`<`void`\>

#### Inherited from

[DataResource](DataResource.md).[read](DataResource.md#read)

#### Defined in

[lib/document/FetchableDocument.ts:54](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L54)

___

### reload

▸ **reload**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[DataResource](DataResource.md).[reload](DataResource.md#reload)

#### Defined in

[lib/document/FetchableDocument.ts:66](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L66)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ContainerResource`](ContainerResource.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`ContainerResource`](ContainerResource.md)

#### Inherited from

[DataResource](DataResource.md).[removeAllListeners](DataResource.md#removealllisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:551

___

### removeContainedResources

▸ **removeContainedResources**(...`resources`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...resources` | [`Resource`](Resource.md)[] |

#### Returns

`void`

#### Defined in

[lib/document/resource/dataResource/containerResource/ContainerResource.ts:90](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/containerResource/ContainerResource.ts#L90)

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`ContainerResource`](ContainerResource.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ContainerResource`](ContainerResource.md)

#### Inherited from

[DataResource](DataResource.md).[removeListener](DataResource.md#removelistener)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:535

___

### setError

▸ **setError**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`DocumentError`](DocumentError.md) |

#### Returns

`void`

#### Inherited from

[DataResource](DataResource.md).[setError](DataResource.md#seterror)

#### Defined in

[lib/document/FetchableDocument.ts:85](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/FetchableDocument.ts#L85)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ContainerResource`](ContainerResource.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`ContainerResource`](ContainerResource.md)

#### Inherited from

[DataResource](DataResource.md).[setMaxListeners](DataResource.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:561

___

### update

▸ **update**(`changes`): `Promise`<`undefined` \| [`DocumentError`](DocumentError.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `changes` | `DatasetChanges`<`Quad`\> |

#### Returns

`Promise`<`undefined` \| [`DocumentError`](DocumentError.md)\>

#### Inherited from

[DataResource](DataResource.md).[update](DataResource.md#update)

#### Defined in

[lib/document/resource/dataResource/DataResource.ts:92](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/dataResource/DataResource.ts#L92)

___

### getEventListeners

▸ `Static` **getEventListeners**(`emitter`, `name`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

**`Since`**

v15.2.0, v14.17.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[DataResource](DataResource.md).[getEventListeners](DataResource.md#geteventlisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:296

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `eventName`): `number`

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

**`Since`**

v0.9.12

**`Deprecated`**

Since v3.2.0 - Use `listenerCount` instead.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[DataResource](DataResource.md).[listenerCount](DataResource.md#listenercount-1)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:268

___

### normalizeUri

▸ `Static` **normalizeUri**(`uri`): `string`

Takes in a URL and will normalize it to the document it's fetching

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |

#### Returns

`string`

#### Inherited from

[DataResource](DataResource.md).[normalizeUri](DataResource.md#normalizeuri)

#### Defined in

[lib/document/resource/Resource.ts:87](https://github.com/o-development/ldo-solid-react/blob/04d2e11/lib/document/resource/Resource.ts#L87)

___

### on

▸ `Static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterableIterator`<`any`\>

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

**`Since`**

v13.6.0, v12.16.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options?` | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[DataResource](DataResource.md).[on](DataResource.md#on-1)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:250

___

### once

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

**`Since`**

v11.13.0, v10.16.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[DataResource](DataResource.md).[once](DataResource.md#once-1)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:189

▸ `Static` **once**(`emitter`, `eventName`, `options?`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options?` | `StaticEventEmitterOptions` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

[DataResource](DataResource.md).[once](DataResource.md#once-1)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:190

___

### setMaxListeners

▸ `Static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

**`Since`**

v15.4.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n?` | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| `...eventTargets` | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

[DataResource](DataResource.md).[setMaxListeners](DataResource.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:311
