(function (window, $) {
  const g = {};

  window.glue = g;

	// TODO: need to modularize, maybe later.
  g.find = function (query) {
    return $(query);
  };

  g.findById = function (query) {
    return $(query)[0];
  };

  g.on = function (element, event, fn) {
    $(element).on(event, fn);
  };
}(window, $));

const Optional = (function () {
  function empty() {
    return new optional();
  }

  function ofNullable(arg) {
    return new optional(arg);
  }

  return {
    empty,
    ofNullable,
  };
}());


var optional = function (arg) {
  const value = arg;

  function isPresent() {
    if (value) {
      return true;
    }

    return false;
  }

  function fetch() {
    if (isPresent()) {
      return value;
    }
		// not throwing
    return {};
  }

  return {
    isPresent,
    fetch,
  };
};
