// Tests for consumer API
import { model, init } from '../src/index'
import { _store } from '../src/store'

beforeEach(() => {
  jest.resetModules()
})

describe('init', () => {
  test('no params should create store with state `{}`', () => {
    init()

    expect(_store.getState()).toEqual({})
  })
})

describe('init & one model', () => {
  test('init() & one model of state type `string`', () => {
    init()

    model({
      name: 'app',
      state: 'Hello, world',
    })

    expect(_store.getState()).toEqual({
      app: 'Hello, world'
    })
  })

  test('init() & one model of state type `number`', () => {
    init()

    model({
      name: 'count',
      state: 99,
    })

    expect(_store.getState()).toEqual({
      count: 99
    })
  })

  test('init() & one model of state type `object`', () => {
    init()

    model({
      name: 'todos',
      state: {
        abc: {
          text: 'PRty down',
          done: true
        }
      },
    })

    expect(_store.getState()).toEqual({
      todos: {
        abc: {
          text: 'PRty down',
          done: true
        }
      }
    })
  })
})

describe('init & multiple models', () => {
  test('init() & twos models', () => {
    init()

    model({
      name: 'app',
      state: 'Hello, world',
    })

    model({
      name: 'count',
      state: 99,
    })

    expect(_store.getState()).toEqual({
      app: 'Hello, world',
      count: 99
    })
  })

  test('init() & three models', () => {
    init()

    model({
      name: 'app',
      state: 'Hello, world',
    })

    model({
      name: 'count',
      state: 99,
    })

    model({
      name: 'todos',
      state: {
        abc: {
          text: 'PRty down',
          done: true
        }
      },
    })

    expect(_store.getState()).toEqual({
      app: 'Hello, world',
      count: 99,
      todos: {
        abc: {
          text: 'PRty down',
          done: true
        }
      }
    })
  })
})
