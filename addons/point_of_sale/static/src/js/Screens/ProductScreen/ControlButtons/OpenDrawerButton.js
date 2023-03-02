odoo.define('point_of_sale.OpenDrawerButton', function (require) {
  'use strict';

  const PosComponent = require('point_of_sale.PosComponent');
  const ProductScreen = require('point_of_sale.ProductScreen');
  const Registries = require('point_of_sale.Registries');
  const { useListener } = require('@web/core/utils/hooks');

  class OpenDrawerButton extends PosComponent {
    setup() {
      super.setup();
      useListener('click', this._onClick);
    }
    _onClick() {
      window.print();
    }
  }

  OpenDrawerButton.template = 'point_of_sale.OpenDrawerButton';

  ProductScreen.addControlButton({
    component: OpenDrawerButton,
    condition: function() {
      return true;
    }
  });

  Registries.Component.add(OpenDrawerButton)

  return OpenDrawerButton;
})