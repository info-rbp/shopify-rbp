(function () {
  var MIN_ADDRESS_LENGTH = 1;
  var STORAGE_ADDRESS = 'rbp_nbn_address';
  var STORAGE_STATUS = 'rbp_nbn_validation_status';
  var STORAGE_MODE = 'rbp_nbn_validation_mode';

  function show(element) {
    if (element) {
      element.hidden = false;
    }
  }

  function hide(element) {
    if (element) {
      element.hidden = true;
    }
  }

  function setupValidator() {
    var form = document.querySelector('[data-rbp-nbn-form]');
    if (!form) {
      return;
    }

    var input = form.querySelector('[data-rbp-nbn-address]');
    var error = document.querySelector('[data-rbp-nbn-error]');
    var success = document.querySelector('[data-rbp-nbn-success]');

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var address = input ? input.value.trim() : '';
      if (address.length < MIN_ADDRESS_LENGTH) {
        hide(success);
        show(error);
        if (input) {
          input.focus();
        }
        return;
      }

      try {
        window.sessionStorage.setItem(STORAGE_ADDRESS, address);
        window.sessionStorage.setItem(STORAGE_STATUS, 'accepted');
        window.sessionStorage.setItem(STORAGE_MODE, 'temporary_accept_all');
      } catch (errorEvent) {
        // Session storage can be unavailable in strict browser contexts.
      }

      hide(error);
      show(success);
    });
  }

  function setupAddressPanel() {
    var panel = document.querySelector('[data-rbp-nbn-address-panel]');
    if (!panel) {
      return;
    }

    var emptyMessage = panel.querySelector('[data-rbp-nbn-address-empty]');
    var displayMessage = panel.querySelector('[data-rbp-nbn-address-display]');
    var valueNode = panel.querySelector('[data-rbp-nbn-address-value]');
    var address = '';
    var status = '';

    try {
      address = window.sessionStorage.getItem(STORAGE_ADDRESS) || '';
      status = window.sessionStorage.getItem(STORAGE_STATUS) || '';
    } catch (errorEvent) {
      address = '';
      status = '';
    }

    if (address && status === 'accepted') {
      if (valueNode) {
        valueNode.textContent = address;
      }
      hide(emptyMessage);
      show(displayMessage);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    setupValidator();
    setupAddressPanel();
  });
})();
