/** CLASS
 * Properties (variables)
 * Methods (functions)
 */

class Character {
  // Properties

  profession?: string // public by default (property)
  private static team: number = 0 // class property not instance - (static)

  // Methods

  constructor(
    public readonly id: number,
    public name: string,
    public level: number,
    private _hp: number,
  ) {}

  get hp(): number { // not parameters (getter)
    return this._hp
  }

  set hp(amount: number) { // not return (setter)
    this._hp = this._hp + amount
  }

  levelUp(): number { // public by default (method)
    return this.level++
  }

  levelDown(): number {
    return this.level--
  }

  changeHp(hp: number): number {
    this._hp = this._hp + hp

    return this._hp
  }

  static addCharacter(): void { // class method not instance - (static)
    Character.team++
  }

  static getTeam(): number {
    return Character.team
  }
}

// Create new instance - (character1)

const character1 = new Character(
  1,
  'Cardano',
  1,
  160
)

character1.changeHp(-10) // execute public method

// Create new instance - (character2)

const character2 = new Character(
  2,
  'Cosmos',
  1,
  120
)

Character.addCharacter() // execute public and static method

console.log(character1, character2) // Character { id: 1, name: 'Cardano', level: 1, _hp: 150 } Character { id: 2, name: 'Cosmos', level: 1, _hp: 120 }
console.log(Character.getTeam()) // 1

if (character1 instanceof Character) { // check if character1 is an instance of Character (boolean)
  console.log(character1)
}
