interface Animal {
  name: string
  walk(): void
  onomatopoeia(): string
}

class Horse implements Animal {
  name: string = 'Rocinante'

  walk() {
    console.log('walking horse...')
  }

  onomatopoeia(): string {
    return 'neigh'
  }
}

class Pig implements Animal {
  name: string = 'Bacon'

  walk () {
    console.log('walking pig...')
  }

  onomatopoeia (): string {
    return 'oink'
  }
}

class Dog implements Animal {
  name: string = 'Charlie'

  walk (): void {
    console.log('walking dog...')
  }

  onomatopoeia (): string {
    return 'woof'
  }
}

// Index Signature

class DictionaryUsers {
  [id: string]: string // key(id): 'string', 'number', 'symbol', or a template literal type
}

// Create new instance - (dictionaryUsers)

const dictionaryUsers = new DictionaryUsers() // non-iterable values

dictionaryUsers['u1'] = 'User 1'
dictionaryUsers['u2'] = 'User 2'
dictionaryUsers['u3'] = 'User 3'

// Iterate with indexes

for (const userKey in dictionaryUsers) { // iterates over keys (property names)
  console.log(userKey) // 'u1', 'u2', 'u3'
  console.log(dictionaryUsers[userKey]) // 'User 1', 'User 2', 'User 3'
}

const users = Object.values(dictionaryUsers) // iterable

for (const userValue of users) {  // iterates over values of an iterable
  console.log(userValue) // 'User 1', 'User 2', 'User 3'
}
