export class Category {
  public category: string = "";
  public subcategories: SubCategory[];

  constructor() {
      this.subcategories =[];
  }

  static fromJSON(json: Object): Category {
      let obj = Object.create(Category.prototype);
      let bWrapper = Object.assign(obj, json);

      let vList: SubCategory[] = [];
      let values = bWrapper.subcategories;
      for (let i in values) {
          vList.push(SubCategory.fromJSON(values[i]));
      }
      bWrapper.subcategories = vList;

      return bWrapper;
  }
}


export class SubCategory {
  public name: string = "";
  public items: Item[];

  constructor() {
      this.items =[];
  }

  static fromJSON(json: Object): SubCategory {
      let obj = Object.create(SubCategory.prototype);
      let bWrapper = Object.assign(obj, json);

      let vList: Item[] = [];
      let values = bWrapper.items;
      for (let i in values) {
          vList.push(Item.fromJSON(values[i]));
      }
      bWrapper.items = vList;

      return bWrapper;
  }
}

export class Item {
  name: string
  description: string
  price: number
  imagelink: any
  rating: string
  stock: number;
  category: string
  subcategory: string

  constructor() {

  }

  static fromJSON(json: Object): Item {
      let obj = Object.create(Item.prototype);
      return Object.assign(obj, json);
  }
}
export class ShoppingCart {
  item: Item
  quantity: number

  constructor() {
    this.item = new Item();
  }

  static fromJSON(json: Object): ShoppingCart {
      let obj = Object.create(ShoppingCart.prototype);
      return Object.assign(obj, json);
  }
}


