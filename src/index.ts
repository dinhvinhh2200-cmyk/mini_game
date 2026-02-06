function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('--- Method Decorator ---');
  console.log('Target (Prototype):', target);
  console.log('Method Name:', name);
  console.log('Descriptor:', descriptor);
}

class Product {
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Giá phải là số dương!');
    }
  }

  @Log3
  getPriceWithTax(tax: number = 0.1) {
    return this._price * (1 + tax);
  }
}

// Chạy thử
const book = new Product('Sách lập trình', 100);
console.log('Giá sau thuế:', book.getPriceWithTax());