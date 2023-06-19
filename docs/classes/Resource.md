[ldo-solid-react](../README.md) / [Exports](../modules.md) / Resource

# Class: Resource

## Hierarchy

- [`FetchableDocument`](FetchableDocument.md)

  ↳ **`Resource`**

  ↳↳ [`BinaryResource`](BinaryResource.md)

  ↳↳ [`DataResource`](DataResource.md)

## Table of contents

### Constructors

- [constructor](Resource.md#constructor)

### Properties

- [\_didInitialFetch](Resource.md#_didinitialfetch)
- [\_error](Resource.md#_error)
- [\_isLoading](Resource.md#_isloading)
- [\_isWriting](Resource.md#_iswriting)
- [dependencies1](Resource.md#dependencies1)
- [uri](Resource.md#uri)
- [captureRejectionSymbol](Resource.md#capturerejectionsymbol)
- [captureRejections](Resource.md#capturerejections)
- [defaultMaxListeners](Resource.md#defaultmaxlisteners)
- [errorMonitor](Resource.md#errormonitor)

### Accessors

- [@id](Resource.md#@id)
- [accessRules](Resource.md#accessrules)
- [accessRulesStore](Resource.md#accessrulesstore)
- [containerResourceStore](Resource.md#containerresourcestore)
- [didInitialFetch](Resource.md#didinitialfetch)
- [error](Resource.md#error)
- [fetch](Resource.md#fetch)
- [isLoading](Resource.md#isloading)
- [isWriting](Resource.md#iswriting)
- [onDocumentError](Resource.md#ondocumenterror)
- [parentContainer](Resource.md#parentcontainer)

### Methods

- [addListener](Resource.md#addlistener)
- [beginWrite](Resource.md#beginwrite)
- [delete](Resource.md#delete)
- [emit](Resource.md#emit)
- [emitStateUpdate](Resource.md#emitstateupdate)
- [endWrite](Resource.md#endwrite)
- [eventNames](Resource.md#eventnames)
- [fetchDocument](Resource.md#fetchdocument)
- [getMaxListeners](Resource.md#getmaxlisteners)
- [listenerCount](Resource.md#listenercount)
- [listeners](Resource.md#listeners)
- [off](Resource.md#off)
- [offStateUpdate](Resource.md#offstateupdate)
- [on](Resource.md#on)
- [onStateUpdate](Resource.md#onstateupdate)
- [once](Resource.md#once)
- [prependListener](Resource.md#prependlistener)
- [prependOnceListener](Resource.md#prependoncelistener)
- [rawListeners](Resource.md#rawlisteners)
- [read](Resource.md#read)
- [removeAllListeners](Resource.md#removealllisteners)
- [removeListener](Resource.md#removelistener)
- [setError](Resource.md#seterror)
- [setMaxListeners](Resource.md#setmaxlisteners)
- [getEventListeners](Resource.md#geteventlisteners)
- [listenerCount](Resource.md#listenercount-1)
- [normalizeUri](Resource.md#normalizeuri)
- [on](Resource.md#on-1)
- [once](Resource.md#once-1)
- [setMaxListeners](Resource.md#setmaxlisteners-1)

## Constructors

### constructor

• **new Resource**(`uri`, `dependencies`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `uri` | `string` |
| `dependencies` | [`ResourceDependencies`](../interfaces/ResourceDependencies.md) |

#### Overrides

[FetchableDocument](FetchableDocument.md).[constructor](FetchableDocument.md#constructor)

#### Defined in

[lib/document/resource/Resource.ts:20](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L20)

## Properties

### \_didInitialFetch

• `Protected` **\_didInitialFetch**: `boolean`

#### Inherited from

[FetchableDocument](FetchableDocument.md).[_didInitialFetch](FetchableDocument.md#_didinitialfetch)

#### Defined in

[lib/document/FetchableDocument.ts:13](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L13)

___

### \_error

• `Protected` `Optional` **\_error**: [`DocumentError`](DocumentError.md)

#### Inherited from

[FetchableDocument](FetchableDocument.md).[_error](FetchableDocument.md#_error)

#### Defined in

[lib/document/FetchableDocument.ts:14](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L14)

___

### \_isLoading

• `Protected` **\_isLoading**: `boolean`

#### Inherited from

[FetchableDocument](FetchableDocument.md).[_isLoading](FetchableDocument.md#_isloading)

#### Defined in

[lib/document/FetchableDocument.ts:11](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L11)

___

### \_isWriting

• `Protected` **\_isWriting**: `boolean`

#### Inherited from

[FetchableDocument](FetchableDocument.md).[_isWriting](FetchableDocument.md#_iswriting)

#### Defined in

[lib/document/FetchableDocument.ts:12](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L12)

___

### dependencies1

• `Private` **dependencies1**: [`ResourceDependencies`](../interfaces/ResourceDependencies.md)

#### Defined in

[lib/document/resource/Resource.ts:18](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L18)

___

### uri

• `Readonly` **uri**: `string`

#### Defined in

[lib/document/resource/Resource.ts:17](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L17)

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](FetchableDocument.md#capturerejectionsymbol)

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

**`Since`**

v13.4.0, v12.16.0

#### Inherited from

[FetchableDocument](FetchableDocument.md).[captureRejectionSymbol](FetchableDocument.md#capturerejectionsymbol)

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

[FetchableDocument](FetchableDocument.md).[captureRejections](FetchableDocument.md#capturerejections)

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

[FetchableDocument](FetchableDocument.md).[defaultMaxListeners](FetchableDocument.md#defaultmaxlisteners)

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

[FetchableDocument](FetchableDocument.md).[errorMonitor](FetchableDocument.md#errormonitor)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:319

## Accessors

### @id

• `get` **@id**(): `string`

#### Returns

`string`

#### Defined in

[lib/document/resource/Resource.ts:39](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L39)

___

### accessRules

• `get` **accessRules**(): [`AccessRules`](AccessRules.md)

===========================================================================
Getters
===========================================================================

#### Returns

[`AccessRules`](AccessRules.md)

#### Defined in

[lib/document/resource/Resource.ts:31](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L31)

___

### accessRulesStore

• `Protected` `get` **accessRulesStore**(): [`AccessRulesStore`](AccessRulesStore.md)

#### Returns

[`AccessRulesStore`](AccessRulesStore.md)

#### Defined in

[lib/document/resource/Resource.ts:47](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L47)

___

### containerResourceStore

• `Protected` `get` **containerResourceStore**(): [`ContainerResourceStore`](ContainerResourceStore.md)

#### Returns

[`ContainerResourceStore`](ContainerResourceStore.md)

#### Defined in

[lib/document/resource/Resource.ts:51](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L51)

___

### didInitialFetch

• `get` **didInitialFetch**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FetchableDocument.didInitialFetch

#### Defined in

[lib/document/FetchableDocument.ts:33](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L33)

___

### error

• `get` **error**(): `undefined` \| [`DocumentError`](DocumentError.md)

#### Returns

`undefined` \| [`DocumentError`](DocumentError.md)

#### Inherited from

FetchableDocument.error

#### Defined in

[lib/document/FetchableDocument.ts:37](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L37)

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

#### Defined in

[lib/document/resource/Resource.ts:43](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L43)

___

### isLoading

• `get` **isLoading**(): `boolean`

===========================================================================
Getters
===========================================================================

#### Returns

`boolean`

#### Inherited from

FetchableDocument.isLoading

#### Defined in

[lib/document/FetchableDocument.ts:29](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L29)

___

### isWriting

• `get` **isWriting**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FetchableDocument.isWriting

#### Defined in

[lib/document/FetchableDocument.ts:41](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L41)

___

### onDocumentError

• `Protected` `get` **onDocumentError**(): `undefined` \| (`error`: [`DocumentError`](DocumentError.md)) => `void`

#### Returns

`undefined` \| (`error`: [`DocumentError`](DocumentError.md)) => `void`

#### Inherited from

FetchableDocument.onDocumentError

#### Defined in

[lib/document/FetchableDocument.ts:45](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L45)

___

### parentContainer

• `get` **parentContainer**(): `undefined` \| [`ContainerResource`](ContainerResource.md)

#### Returns

`undefined` \| [`ContainerResource`](ContainerResource.md)

#### Defined in

[lib/document/resource/Resource.ts:35](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L35)

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`Resource`](Resource.md)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Resource`](Resource.md)

#### Inherited from

[FetchableDocument](FetchableDocument.md).[addListener](FetchableDocument.md#addlistener)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:390

___

### beginWrite

▸ `Protected` **beginWrite**(): `void`

#### Returns

`void`

#### Inherited from

[FetchableDocument](FetchableDocument.md).[beginWrite](FetchableDocument.md#beginwrite)

#### Defined in

[lib/document/FetchableDocument.ts:68](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L68)

___

### delete

▸ **delete**(): `Promise`<`void`\>

===========================================================================
Methods
===========================================================================

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/document/resource/Resource.ts:60](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L60)

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

[FetchableDocument](FetchableDocument.md).[emit](FetchableDocument.md#emit)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:652

___

### emitStateUpdate

▸ `Protected` **emitStateUpdate**(): `void`

Emitter Information

#### Returns

`void`

#### Inherited from

[FetchableDocument](FetchableDocument.md).[emitStateUpdate](FetchableDocument.md#emitstateupdate)

#### Defined in

[lib/document/FetchableDocument.ts:92](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L92)

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

[FetchableDocument](FetchableDocument.md).[endWrite](FetchableDocument.md#endwrite)

#### Defined in

[lib/document/FetchableDocument.ts:73](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L73)

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

[FetchableDocument](FetchableDocument.md).[eventNames](FetchableDocument.md#eventnames)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:715

___

### fetchDocument

▸ `Protected` `Abstract` **fetchDocument**(): `Promise`<`undefined` \| [`DocumentError`](DocumentError.md)\>

#### Returns

`Promise`<`undefined` \| [`DocumentError`](DocumentError.md)\>

#### Inherited from

[FetchableDocument](FetchableDocument.md).[fetchDocument](FetchableDocument.md#fetchdocument)

#### Defined in

[lib/document/FetchableDocument.ts:66](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L66)

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](Resource.md#defaultmaxlisteners).

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

[FetchableDocument](FetchableDocument.md).[getMaxListeners](FetchableDocument.md#getmaxlisteners)

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

[FetchableDocument](FetchableDocument.md).[listenerCount](FetchableDocument.md#listenercount)

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

[FetchableDocument](FetchableDocument.md).[listeners](FetchableDocument.md#listeners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:580

___

### off

▸ **off**(`eventName`, `listener`): [`Resource`](Resource.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`Resource`](Resource.md)

#### Inherited from

[FetchableDocument](FetchableDocument.md).[off](FetchableDocument.md#off)

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

[FetchableDocument](FetchableDocument.md).[offStateUpdate](FetchableDocument.md#offstateupdate)

#### Defined in

[lib/document/FetchableDocument.ts:100](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L100)

___

### on

▸ **on**(`eventName`, `listener`): [`Resource`](Resource.md)

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

[`Resource`](Resource.md)

#### Inherited from

[FetchableDocument](FetchableDocument.md).[on](FetchableDocument.md#on)

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

[FetchableDocument](FetchableDocument.md).[onStateUpdate](FetchableDocument.md#onstateupdate)

#### Defined in

[lib/document/FetchableDocument.ts:96](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L96)

___

### once

▸ **once**(`eventName`, `listener`): [`Resource`](Resource.md)

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

[`Resource`](Resource.md)

#### Inherited from

[FetchableDocument](FetchableDocument.md).[once](FetchableDocument.md#once)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:452

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`Resource`](Resource.md)

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

[`Resource`](Resource.md)

#### Inherited from

[FetchableDocument](FetchableDocument.md).[prependListener](FetchableDocument.md#prependlistener)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:679

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`Resource`](Resource.md)

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

[`Resource`](Resource.md)

#### Inherited from

[FetchableDocument](FetchableDocument.md).[prependOnceListener](FetchableDocument.md#prependoncelistener)

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

[FetchableDocument](FetchableDocument.md).[rawListeners](FetchableDocument.md#rawlisteners)

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

[FetchableDocument](FetchableDocument.md).[read](FetchableDocument.md#read)

#### Defined in

[lib/document/FetchableDocument.ts:54](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L54)

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Resource`](Resource.md)

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

[`Resource`](Resource.md)

#### Inherited from

[FetchableDocument](FetchableDocument.md).[removeAllListeners](FetchableDocument.md#removealllisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:551

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`Resource`](Resource.md)

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

[`Resource`](Resource.md)

#### Inherited from

[FetchableDocument](FetchableDocument.md).[removeListener](FetchableDocument.md#removelistener)

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

[FetchableDocument](FetchableDocument.md).[setError](FetchableDocument.md#seterror)

#### Defined in

[lib/document/FetchableDocument.ts:81](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/FetchableDocument.ts#L81)

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`Resource`](Resource.md)

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

[`Resource`](Resource.md)

#### Inherited from

[FetchableDocument](FetchableDocument.md).[setMaxListeners](FetchableDocument.md#setmaxlisteners)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:561

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

[FetchableDocument](FetchableDocument.md).[getEventListeners](FetchableDocument.md#geteventlisteners)

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

[FetchableDocument](FetchableDocument.md).[listenerCount](FetchableDocument.md#listenercount-1)

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

#### Defined in

[lib/document/resource/Resource.ts:86](https://github.com/o-development/ldo-solid-react/blob/2b81d9a/lib/document/resource/Resource.ts#L86)

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

[FetchableDocument](FetchableDocument.md).[on](FetchableDocument.md#on-1)

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

[FetchableDocument](FetchableDocument.md).[once](FetchableDocument.md#once-1)

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

[FetchableDocument](FetchableDocument.md).[once](FetchableDocument.md#once-1)

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

[FetchableDocument](FetchableDocument.md).[setMaxListeners](FetchableDocument.md#setmaxlisteners-1)

#### Defined in

node_modules/@types/node/ts4.8/events.d.ts:311