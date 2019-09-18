/**
  Copyright (c) 2015, 2019, Oracle and/or its affiliates.
  The Universal Permissive License (UPL), Version 1.0
*/
define(['ojs/ojcomposite', 'text!./registratoin-and-login-page-view.html', './registratoin-and-login-page-viewModel', 'text!./component.json', 'css!./registratoin-and-login-page-styles'],
  function(Composite, view, viewModel, metadata) {
    Composite.register('registratoin-and-login-page', {
      view: view,
      viewModel: viewModel,
      metadata: JSON.parse(metadata)
    });
  }
);