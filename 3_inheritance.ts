/** BasicData (abstract class)
 * name
 * desc
 * created_at
 * created_by
 */

/** Product (inherited class)
 * name
 * desc
 * created_at
 * created_by
 * stock
 * sku
 */

/** Category (inherited class)
 * name
 * desc
 * created_at
 * created_by
 */

abstract class BasicData { // only used to inherit or extend - (abstract)
  constructor(
    public name: string,
    public desc: string,
    protected created_at: Date, // visible only in this class and in the classes that inherit from it - (protected)
    protected created_by: number
  ) {}

  get fullYear() {
    return this.created_at.getFullYear
  }

  get fullDesc() {
    return this.name + ' - ' + this.desc
  }

  abstract save(): void // force the classes that inherit from it to implement this method - (abstract)
}

class Product extends BasicData { // inherited class - (extends)
  constructor(
    name: string,
    desc: string,
    created_at: Date,
    created_by: number,
    public stock: number,
    public sku: number
  ) {
    super( // invoke the constructor of the parent class - (super) *required
      name,
      desc,
      created_at,
      created_by
    )
  }

  override get fullDesc(): string { // overrides a method with the same name in the parent class - (override)
    super.created_at = new Date() // access methods or properties of the parent class - (super)

    return 'Product: ' + super.fullDesc
  }

  save() { // mandatory implemented method
    console.log('Saving product...')
  }
}

class Category extends BasicData {
  public products: Product[] = []

  constructor(
    name: string,
    desc: string,
    created_at: Date,
    created_by: number
  ) {
    super(
      name,
      desc,
      created_at,
      created_by
    )
  }

  addProduct(product: Product) {
    this.products.push(product)
  }

  override get fullDesc(): string {
    super.created_at = new Date()
    
    return 'Category: ' + super.fullDesc
  }

  save() {
    console.log('Saving category...')
  }
}

// Create new instance - (product)

const product = new Product(
  'Iphone',
  'it\'s a product',
  new Date(),
  1,
  100,
  1
)

// Create new instance - (category)

const category = new Category(
  'smartphones',
  'it\'s a category',
  new Date(),
  1
)

category.addProduct(product) // add a product to category
