import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class CartController extends Controller {
  @service('shoppingCart') cart;
  // subtotal = 0;
  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => acc + item.price * item.count, 0);
  }
  // tax = 0;
  get tax() {
    return this.subtotal * 0.09;
  }
  get total() {
    return this.subtotal + this.tax;
  }

  @action
  updateItemCount(item, event) {

    const count = parseInt(event.target.value);

    if (count <= 0) {
      item.count = 0;
    }
    else item.count = count;
  }
}
