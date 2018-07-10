if (typeof Symbol.asyncIterator === 'undefined') {
  Object.assign(Symbol, { asyncIterator: Symbol.for('Symbol.asyncIterator') })
}

module.exports = function unwrapAsyncIterableIteratorPromise (input) {
  return {
    next (value) {
      return input.then((iterator) => iterator.next(value))
    },
    [Symbol.asyncIterator] () {
      return this
    }
  }
}
