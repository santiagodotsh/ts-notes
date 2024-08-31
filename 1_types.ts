var tsMessage: string = 'Hello World'

/** Variable Declarations
 * ---------------------------------
 * VAR (function-scoped)
 * CONST (block-scoped, immutable)
 * LET (block-scoped, mutable)
 * ---------------------------------
 */

/** Type Annotations
 * ---------------------------------
 * number (integer, float)
 * string (text)
 * boolean (true, false)
 * null (null)
 * undefined (undefined)
 * object (non-primitive)
 * function (function)
 * ---------------------------------
 */

/** Advanced Types
 * ---------------------------------
 * any (dynamic)
 * unknown (unknown)
 * never (error)
 * array ([])
 * tuple ([])
 * enum (enum)
 * void (undefined)
 * ---------------------------------
 */

const tsNumberEx: number = 10_000_000
const tsStringEx: string = 'My Cats'
const tsBooleanEx: boolean = true

const tsArrayNumberEx: number[] = [1, 2, 3]
const tsArrayStringEx: string[] = ['a', 'b', 'c']
const tsArrayBooleanEx: boolean[] = [true, false, true]

const tsArrayType: Array<number> = [4, 5, 6]

const tsTupleEx: [number, string[]] = [1, ['abc', 'xyz']]

/** Loading States
 * ---------------------------------
 * IDLE (API has not been called yet)
 * LOADING (API call in progress)
 * SUCCESS (successful response)
 * ERROR (error in the response)
 * ---------------------------------
 */

// PascalCase - UpperCamelCase

enum TsEnumEx { First, Second = 9, Third }
const enum LoadingStates { Idle, Loading, Success, Error }

const tsObjectEx1: {
  readonly id: number, // immutable
  name?: string, // optional
  state: LoadingStates
} = {
  id: 1,
  name: 'Cosmos',
  state: LoadingStates.Idle
}

type TsObjectEx2 = {
  readonly id: number
  name?: string
  state: LoadingStates
}

const tsObjectEx2: TsObjectEx2 = {
  id: 2,
  name: 'Luna',
  state: LoadingStates.Loading
}

type Address = {
  street: string
  city: string
  state: string
  postalCode: string
}

type TsObjectEx3 = {
  readonly id: number,
  name?: string,
  state: LoadingStates,
  address: Address
}

const tsObjectEx3: TsObjectEx3 = {
  id: 3,
  name: 'Felix',
  state: LoadingStates.Success,
  address: {
    street: '123 Main St',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94101'
  }
}

const tsArrayObjectEx: Address[] = [
  {
    street: '123 Main St',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94101'
  },
  {
    street: '456 Main St',
    city: 'San Francisco',
    state: 'CA',
    postalCode: '94101'
  }
]

function tsFunctionEx1(name: string): string {
  return `Hello ${name}`
}

const tsFunctionEx2 = (name: string): string => {
  return `Hello ${name}`
}

const tsFunctionEx3: (name: string) => string = (name) => {
  return `Hello ${name}`
}

// never: error or infinite loop
// void: no return value (undefined)

function tsFunctionErrorEx(): never {
  throw new Error('Error')
}

// Union types

let tsUnionEx: string | number = 'abc'
tsUnionEx = 123

type Client = {
  id: number,
  type: string
}

type User = {
  id: number,
  name: string
}

let someone: Client | User = { id: 1, type: 'Desktop', name: 'Shiba' }

function sum(num: number | string): number {
  if (typeof num === 'string') {
    return parseInt(num) + 10
  }

  return num + 10
}

sum(2)
sum('2')

// Intersection types

type Audit = {
  createdAt: Date
  updatedAt: Date
}

type Product = {
  id: number
  name: string
}

const product: Product & Audit = {
  id: 1,
  name: 'cosmos',
  createdAt: new Date(),
  updatedAt: new Date()
}

// Literal types

type Fibo = 0 | 1 | 2 | 3 | 5

const fibo: Fibo = 1

// Nullable types

function toNumber(str: string | null | undefined): number {
  if (!str) {
    return 0
  }

  return parseInt(str)
}

const num = toNumber(undefined)

// Optional chaining

function getUser(id: number) {
  if (id < 0) {
    return null
  }

  return { id, name: 'Solana' }
}

const user = getUser(1)
console.log(user?.name) // 'Solana'

const tsArr = null
console.log(tsArr?.[0]) // undefined

const tsFunc: any = null
console.log(tsFunc?.()) // undefined

// Nullish coalescing operator

const difficulty: number | null = 0

const user2 = {
  id: 1,
  name: 'Veo',
  difficulty: difficulty ?? 1, // 0 is falsy
}

// Type assertions

const elem1: any = null
const elem2 = elem1 as HTMLElement
const elem3 = <HTMLElement> elem1

// Type narrowing

function printId(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase())
  } else {
    console.log(id)
  }
}

// Type unknown

function processValue(val: unknown) {
  if (typeof val === 'number') {
    val.toFixed(2)
  }

  if (typeof val === 'string') {
    val.toUpperCase()
  }

  if (typeof val === 'boolean') {
    val.valueOf()
  }
}
