import { type Paths } from 'type-fest'
import { type Equal, type Expect } from 'type-testing'
import { describe, expect, test } from 'vitest'
import {
  createTokenMap,
  defineTokens,
  type Expand,
  type LevelThree,
  type TokenSet,
} from './designTokenFactory'

// TODO[Shannon]: There is something odd here with the type.
// Using `const source: TokenSet = { ... }` leads to a type error.
// I don't know why
const source = {
  space: {
    sm: '2px',
    md: '8px',
    lg: '20px',
  },
  color: {
    gray: {
      narrow: 'color(display-p3 0.976 0.98 0.984 / 1)',
      wide: 'color(display-p3 0.831 0.855 0.886 / 1)',
    },
    blue: {
      sm: 'color(display-p3 0.925 0.937 0.953 / 1)',
      lg: 'color(display-p3 0.831 0.855 0.886 / 1)',
    },
  },
} satisfies TokenSet

describe('token factory types', () => {
  test('LevelThree should include only level three types', async () => {
    type Input = Expand<LevelThree<Paths<typeof source>>>
    type ExpectedResult =
      | 'color.gray.narrow'
      | 'color.gray.wide'
      | 'color.blue.sm'
      | 'color.blue.lg'

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type TestResult = Expect<Equal<Input, ExpectedResult>>

    expect(true).toBeTruthy()
  })
})

describe('createTokenMap', () => {
  const tokenMap = createTokenMap(source)
  test('should have a value for every token', async () => {
    expect(tokenMap.size).toBe(7)
  })

  test('should find keys for single value tokens', async () => {
    const value = tokenMap.get('space-lg')
    expect(value).toBe('20px')
  })

  test('should find keys for variant value tokens', async () => {
    const value = tokenMap.get('color-gray-narrow')
    expect(value).toBe('color(display-p3 0.976 0.98 0.984 / 1)')
  })
})

describe('defineTokens', () => {
  const { token } = defineTokens(source)

  test('should find keys for single value tokens', async () => {
    const value = token('space-lg')
    expect(value).toBe('20px')
  })

  test('should find keys for variant value tokens', async () => {
    const value = token('color-gray-narrow')
    expect(value).toBe('color(display-p3 0.976 0.98 0.984 / 1)')
  })
})
