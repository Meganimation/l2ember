import Route from '@ember/routing/route';

export default class CartRoute extends Route {
  model() {
    const items = [{ price: 10 }, { price: 15 }];
    return items;
  }

  //   setupController(controller, model) {
  //     super.setupController(controller, model);
  //     const subtotal = model.reduce((acc, item) => acc + item.price, 0);
  //     controller.set(
  //         'subtotal',
  //         subtotal
  //     )
  //   }

  //NOTE: The above was moved to app/controllers/cart.js
}
