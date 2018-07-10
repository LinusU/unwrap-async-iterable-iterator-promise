# Unwrap Async Iterable Iterator Promise

Unwrap a `Promise` of an `AsyncIterableIterator` into a `AsyncIterableIterator`.

## Installation

```sh
npm install --save unwrap-async-iterable-iterator-promise
```

## Usage

```js
const unwrapAsyncIterableIteratorPromise = require('unwrap-async-iterable-iterator-promise')

function iterateOverItems () {
  const iteratorPromise = getResource().then((resource) => {
    return resource.iterateItems()
  })

  return unwrapAsyncIterableIteratorPromise(iteratorPromise)
}
```

## API

### `unwrapAsyncIterableIteratorPromise<T> (input: Promise<AsyncIterableIterator<T>>): AsyncIterableIterator<T>`

Returns an async iterator that will wait for `input` to resolve, and the yield the items from the resolved iterator.
