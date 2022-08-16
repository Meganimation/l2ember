import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CartController extends Controller {
  @service('shoppingCart') cart;
  // subtotal = 0;
  get subtotal() {
    return this.model.reduce((acc, item) => acc + item.price, 0);
  }
  // tax = 0;
  get tax() {
    return this.subtotal * 0.09;
  }
  get total() {
    return this.subtotal + this.tax;
  }
}
