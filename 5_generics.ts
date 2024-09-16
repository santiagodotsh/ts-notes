// Generic with functions

function log<T, U>(a: T, b: U): U { // T, U, ... - A, B, ... - R1, R2, ...
  console.log(a, b)

  return b
}

log<string, number>('Hello World', 5) // 'Hello World', 5
log<string, string>('Hello World', 'example') // 'Hello World', 'example'

async function fetchData<T>(url: string): Promise<T> {
  const response = await fetch(url)

  return response.json()
}

type User1 = {
  id: number
  name: string
}

async function main() {
  const user = await fetchData<User1>('/users/1')

  return user.id
}

// Generic with classes

type Computer = {
  on: () => void
  off: () => void
}

class Programmer<T> {
  computer: T

  constructor (t: T) {
    this.computer = t
  }
}

// Create new instances - (programmer1, programmer2)

const programmer1 = new Programmer<Computer>({ on: () => {}, off: () => {} })
const programmer2 = new Programmer<string>('Hello World')

programmer1.computer.on()
programmer2.computer

// Generic with interfaces

interface KeyValue<T, U> {
  key: T
  value: U
}

interface Product {
  id: number
}

function fetchProduct1(): KeyValue<string, Product> {
  return { key: '1', value: { id: 1 } }
}

function fetchProduct2(): KeyValue<string, number> {
  return { key: '1', value: 500 }
}

// Restricting generics

class User2 {
  constructor (
    public id: string,
    public name: string
  ) {}
}

interface User3 {
  id: string
  name: string
}

function printer<T extends User2>(t: T): T {
  console.log(t)

  return t
}

printer({ id: '1', name: 'John' }) // { id: '1', name: 'John' }

// Generic and inheritance

class State<T> { // pass generic to parent class
  protected data: T[] = []

  add(t: T): void {
    this.data.push(t)
  }

  get(): T[] {
    return this.data
  }
}

type ObjectId = {
  id: string
}

class RemoveState<T extends ObjectId> extends State<T> { // pass generic with restriction
  remove(id: string) {
    this.data = this.data.filter(t => t.id !== id)
  }
}

class UsersState extends State<User1> { // pass fixed generic
  resetPasswords() {
    //
  }
}

const usersState = new UsersState()

// keyof operator

type Calendar = {
  id: number
  source: string
  owner: string
}

const calendar: Calendar = {
  id: 1,
  source: 'Google',
  owner: 'Felix'
}

function getProp<T>(obj: T, prop: keyof T) {
  return obj[prop]
}

getProp(calendar, 'id')
getProp(calendar, 'source')
getProp(calendar, 'owner')

// Utility types

type Point = {
  x: number
  y: number
  desc?: string
}

type OptionalPoint = Partial<Point>
type RequiredPoint = Required<Point>

const keyVal: Record<string, Point> = {
  '1': { x: 1, y: 2 },
  '2': { x: 2, y: 3 }
}

type KeyVal = { [key: string]: Point }

const omitPoint: Omit<Point, 'desc' | 'y'> = {
  x: 1
}

const pickPoint: Pick<Point, 'x' | 'y'> = {
  x: 1,
  y: 2
}

const readOnlyPoint: Readonly<Point> = {
  x: 1,
  y: 2,
  desc: 'Point'
}
