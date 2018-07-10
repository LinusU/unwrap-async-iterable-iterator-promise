const unwrapAsyncIterableIteratorPromise = require('./')
const assert = require('assert')

async function * count () {
  yield 1
  yield 2
  yield 3
}

async function test () {
  {
    const input = Promise.resolve(count())
    const iterator = unwrapAsyncIterableIteratorPromise(input)

    assert.deepStrictEqual(await iterator.next(), { value: 1, done: false })
    assert.deepStrictEqual(await iterator.next(), { value: 2, done: false })
    assert.deepStrictEqual(await iterator.next(), { value: 3, done: false })
    assert.deepStrictEqual(await iterator.next(), { value: undefined, done: true })
  }

  {
    const input = Promise.resolve(count())
    const iterator = unwrapAsyncIterableIteratorPromise(input)
    const actual = []

    for await (const n of iterator) actual.push(n)

    assert.deepStrictEqual(actual, [1, 2, 3])
  }
}

test().catch((err) => {
  process.exitCode = 1
  console.error(err.stack)
})
