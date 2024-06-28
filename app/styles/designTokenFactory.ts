import { type Paths, type Replace, type Split } from 'type-fest'

// TODO[Shannon]: Decide on a better name for this file.

// TODO[Shannon]: This should be moved to a library once it is complete.

/*
const source = {
  space: {
    sm: '2px',
    md: '8px',
    lg: '20px',
  },
  color: {
    gray: {
      // DEFAULT: 'color(display-p3 0.925 0.937 0.953 / 1)',
      narrow: 'color(display-p3 0.976 0.98 0.984 / 1)',
      wide: 'color(display-p3 0.831 0.855 0.886 / 1)',
    },
    blue: {
      sm: 'color(display-p3 0.925 0.937 0.953 / 1)',
      lg: 'color(display-p3 0.831 0.855 0.886 / 1)',
    },
  },
}

const target = {
  'space-sm': 2,
  'space-md': 8,
  'space-lg': 12,
  'color-gray-narrow': 'color(display-p3 0.976 0.98 0.984 / 1)',
  'color-gray-default': 'color(display-p3 0.925 0.937 0.953 / 1)',
  'color-gray-wide': 'color(display-p3 0.831 0.855 0.886 / 1)',
  'color-blue-sm': 'color(display-p3 0.925 0.937 0.953 / 1)',
  'color-blue-lg': 'color(display-p3 0.831 0.855 0.886 / 1)',
}
*/

// expands object types recursively
export type Expand<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: Expand<O[K]> }
    : never
  : T

export type TokenValue = string | number

export type TokenSet = {
  [tokenGroup: string]: {
    [tokenName: string]:
      | TokenValue
      | {
          // DEFAULT: TokenValue
          [tokenVariation: string]: TokenValue
        }
  }
}

export type LevelThree<T extends string> = Exclude<
  T & `${string}.${string}.${string}`,
  `${string}.${string}.DEFAULT`
>

export type TokensWithVariants<
  T extends string,
  L3 = T & `${string}.${string}.${string}`,
> = `${Split<L3 & string, '.'>[0]}.${Split<L3 & string, '.'>[1]}`

export type LevelTwo<
  T extends string,
  L3 = T & `${string}.${string}.${string}`,
  TWV = TokensWithVariants<T>,
  EX = L3 | TWV,
> = Exclude<T & `${string}.${string}`, EX>

export type Tokens<
  T extends TokenSet,
  U extends Paths<T> & string = Paths<T> & string,
> = Replace<LevelTwo<U> | LevelThree<U>, '.', '-', { all: true }>

export type TokenFunc<T extends TokenSet> = (
  name: Expand<Tokens<T>>,
) => TokenValue

/**
 * Creates a `Map` with an entry for every token in the provided `tokenSet`.
 */
export const createTokenMap = <T extends TokenSet>(
  tokenSet: T,
): Map<string, TokenValue> => {
  const tokenMap = new Map<string, TokenValue>()
  for (const group in tokenSet) {
    for (const name in tokenSet[group]) {
      if (
        typeof tokenSet[group][name] === 'string' ||
        typeof tokenSet[group][name] === 'number'
      ) {
        const key = `${group}-${name}`
        const value = tokenSet[group][name]
        if (typeof value === 'string' || typeof value === 'number') {
          tokenMap.set(key, value)
        } else {
          throw new Error(
            `Expected value type is 'string' or 'number'. Received: '${typeof value}'`,
          )
        }
      } else if (typeof tokenSet[group][name] === 'object') {
        for (const variant in tokenSet[group][name]) {
          const key = `${group}-${name}-${variant}`
          const value = tokenSet[group][name][variant]
          if (typeof value === 'string' || typeof value === 'number') {
            tokenMap.set(key, value)
          } else {
            throw new Error(
              `Expected value type is 'string' or 'number'. Received: '${typeof value}'`,
            )
          }
        }
      }
    }
  }
  return tokenMap
}

export const defineTokens = <T extends TokenSet>(
  tokenSet: T,
): { token: TokenFunc<T> } => {
  const tokenMap = createTokenMap(tokenSet)

  const tokenFunc: TokenFunc<T> = name => {
    if (typeof name !== 'string') {
      throw new Error(`Token not found: "${name}"`)
    }
    const value = tokenMap.get(name as string)
    if (value === undefined) {
      throw new Error(`Token not found: "${name}"`)
    }
    return value
  }

  return { token: tokenFunc }
}
