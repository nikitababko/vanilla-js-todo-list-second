/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Controller = /*#__PURE__*/function () {
  function Controller(model, view) {
    _classCallCheck(this, Controller);

    this.model = model;
    this.view = view;
    view.on('add', this.addTodo.bind(this));
    view.on('toggle', this.toggleTodo.bind(this));
    view.on('edit', this.editTodo.bind(this));
    view.on('remove', this.removeTodo.bind(this));
  }

  _createClass(Controller, [{
    key: "addTodo",
    value: function addTodo(title) {
      var todo = this.model.addItem({
        id: Date.now(),
        title: title,
        completed: false
      });
      console.log(todo);
      this.view.addItem(todo);
    }
  }, {
    key: "toggleTodo",
    value: function toggleTodo(_ref) {
      var id = _ref.id,
          completed = _ref.completed;
      var todo = this.model.updateItem(id, {
        completed: completed
      });
      this.view.toggleTodo(todo);
    }
  }, {
    key: "editTodo",
    value: function editTodo(_ref2) {
      var id = _ref2.id,
          title = _ref2.title;
      var todo = this.model.updateItem(id, {
        title: title
      });
      this.view.editItem(todo);
    }
  }, {
    key: "removeTodo",
    value: function removeTodo(id) {
      this.model.removeItem(id);
      this.view.removeItem(id);
    }
  }]);

  return Controller;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Controller);

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "EventEmitter": () => (/* binding */ EventEmitter)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var createElement = function createElement(tag, props) {
  var element = document.createElement(tag);
  Object.keys(props).forEach(function (key) {
    return element[key] = props[key];
  });

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  if (children.length > 0) {
    children.forEach(function (child) {
      if (typeof child === 'string') {
        child = document.createTextNode(child);
      }

      element.appendChild(child);
    });
  }

  return element;
};

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {};
  }
  /**
   * type - тип события, на который нужно подписаться
   * callback - функция обработчик
   */


  _createClass(EventEmitter, [{
    key: "on",
    value: function on(type, callback) {
      this.events[type] = this.events[type] || [];
      this.events[type].push(callback);
    }
  }, {
    key: "emit",
    value: function emit(type, arg) {
      if (this.event[type]) {
        this.events[type].forEach(function (callback) {
          return callback[arg];
        });
      }
    }
  }]);

  return EventEmitter;
}();



/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Model = /*#__PURE__*/function () {
  function Model() {
    _classCallCheck(this, Model);
  }

  _createClass(Model, [{
    key: "contructor",
    value: function contructor() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.state = state;
    }
  }, {
    key: "getItem",
    value: function getItem(id) {
      return this.state.find(function (item) {
        return item.id == id;
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      this.state.push(item);
      return item;
    }
  }, {
    key: "updateItem",
    value: function updateItem(id, data) {
      var item = this.getItem(id);
      Object.keys(data).forEach(function (prop) {
        return item[prop] = data[prop];
      });
      return item;
    }
  }, {
    key: "removeItem",
    value: function removeItem(id) {
      var index = this.state.findIndex(function (item) {
        return item.id == id;
      });

      if (index > -1) {
        this.state.splice(index, 1);
      }
    }
  }]);

  return Model;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var View = /*#__PURE__*/function (_EventEmitter) {
  _inherits(View, _EventEmitter);

  var _super = _createSuper(View);

  function View() {
    _classCallCheck(this, View);

    return _super.apply(this, arguments);
  }

  _createClass(View, [{
    key: "contructor",
    value: function contructor() {
      // super();
      this.form = document.getElementById('todo-form');
      this.input = document.getElementById('add-input');
      this.list = document.getElementById('todo-list');
      this.form.addEventListener('submit', this.handleAdd.bind(this));
    }
  }, {
    key: "createElement",
    value: function createElement() {
      var checkbox = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {
        type: 'checkbox',
        className: 'checkbox',
        checked: todo.completed ? 'checked' : ''
      });

      var label = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('label', {
        className: 'title'
      }, todo.title);

      var editInput = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('input', {
        className: 'textfield'
      });

      var editButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {
        className: 'edit'
      }, 'Edit');

      var removeButton = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('button', {
        className: 'remove'
      }, 'Delete');

      var item = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', {
        className: "todo-item ".concat(todo.completed ? 'completed' : ''),
        'data-id': todo.id
      }, checkbox, label, editInput, editButton, editButton, removeButton);

      return this.addEventListeners(item);
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(listItem) {
      var checkbox = listItem.querySelector('.checkbox');
      var editButton = listItem.querySelector('button.edit');
      var removeButton = listItem.querySelector('button.remove');
      checkbox.addEventListener('change', this.handleToggle.bind(this));
      editButton.addEventListener('click', this.handleEdit.bind(this));
      removeButton.addEventListener('click', this.handleRemove.bind(this));
      return listItem;
    }
  }, {
    key: "handleAdd",
    value: function handleAdd(e) {
      e.preventDefault();
      if (!this.input.value) return alert('Enter task name');
      var value = this.input.value;
      this.emit('add', value);
    }
  }, {
    key: "handleToggle",
    value: function handleToggle(e) {
      var listItem = e.target.parentNode;
      var id = listItem.getAttribute('data-id');
      var completed = target.completed;
      this.emit('toggle', {
        id: id,
        completed: completed
      });
    }
  }, {
    key: "handleEdit",
    value: function handleEdit(e) {
      var listItem = e.target.parentNode;
      var id = listItem.getAttribute('data-id');
      var label = listItem.querySelector('.title');
      var input = listItem.querySelector('.textfield');
      var editButton = listItem.querySelector('button.edit');
      var title = input.value;
      var isEditing = listItem.classList.contains('editing');

      if (isEditing) {
        this.emit('edit', {
          id: id,
          title: title
        });
      } else {
        input.value = label.textContent;
        editButton.textContent = 'Save';
        listItem.classList.add('editing');
      }
    }
  }, {
    key: "handleRemove",
    value: function handleRemove(e) {
      var listItem = e.target.parentNode;
      var id = listItem.getAttribute('data-id');
      this.emit('remove', id);
    }
  }, {
    key: "findListItem",
    value: function findListItem(id) {
      return this.list.querySelector("[data-id=\"".concat(id, "\"]"));
    }
  }, {
    key: "addItem",
    value: function addItem(todo) {
      var listItem = this.createElement(todo);
      this.input.value = '';
      this.list.appendChild(listItem);
    }
  }, {
    key: "toggleItem",
    value: function toggleItem(todo) {
      var listItem = this.findListItem(todo.id);
      var checkbox = listItem.querySelector('.checkbox');
      checkbox.checked = todo.completed;

      if (todo.completed) {
        listItem.classList.add(completed);
      } else {
        listItem.classList.remove(completed);
      }
    }
  }, {
    key: "editItem",
    value: function editItem(todo) {
      var listItem = this.findListItem(todo.id);
      var label = listItem.querySelector('.title');
      var input = listItem.querySelector('.textfield');
      var editButton = listItem.querySelector('button.edit');
      label.textContent = todo.title;
      editButton.textContent = 'Edit';
      listItem.classList.remove('editing');
    }
  }, {
    key: "removeItem",
    value: function removeItem(id) {
      var listItem = this.findListItem(todo.id);
      this.list.removeChild(listItem);
    }
  }]);

  return View;
}(_helpers__WEBPACK_IMPORTED_MODULE_0__.EventEmitter);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.js");



var model = new _model__WEBPACK_IMPORTED_MODULE_0__.default();
var view = new _view__WEBPACK_IMPORTED_MODULE_1__.default();
var controller = new _controller__WEBPACK_IMPORTED_MODULE_2__.default(model, view);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU4sTUFBQUEsS0FBSyxDQUFDcUIsV0FBTixHQUFvQnpFLElBQUksQ0FBQ0QsS0FBekI7QUFDQXVELE1BQUFBLFVBQVUsQ0FBQ21CLFdBQVgsR0FBeUIsTUFBekI7QUFDQWhCLE1BQUFBLFFBQVEsQ0FBQ2MsU0FBVCxDQUFtQkssTUFBbkIsQ0FBMEIsU0FBMUI7QUFDRDs7O1dBRUQsb0JBQVcxRSxFQUFYLEVBQWU7QUFDYixVQUFNdUQsUUFBUSxHQUFHLEtBQUtrQixZQUFMLENBQWtCM0UsSUFBSSxDQUFDRSxFQUF2QixDQUFqQjtBQUVBLFdBQUs0QyxJQUFMLENBQVUrQixXQUFWLENBQXNCcEIsUUFBdEI7QUFDRDs7OztFQXRKZ0JoQzs7QUF5Sm5CLGlFQUFlaUIsSUFBZjs7Ozs7O1VDM0pBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBLElBQU1uRCxLQUFLLEdBQUcsSUFBSXlDLDJDQUFKLEVBQWQ7QUFDQSxJQUFNeEMsSUFBSSxHQUFHLElBQUlrRCwwQ0FBSixFQUFiO0FBQ0EsSUFBTW9DLFVBQVUsR0FBRyxJQUFJeEYsZ0RBQUosQ0FBZUMsS0FBZixFQUFzQkMsSUFBdEIsQ0FBbkIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29vcC8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL29vcC8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL29vcC8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly9vb3AvLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly9vb3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb29wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vb3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vb3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vb3AvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgY29uc3RydWN0b3IobW9kZWwsIHZpZXcpIHtcclxuICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcclxuICAgIHRoaXMudmlldyA9IHZpZXc7XHJcblxyXG4gICAgdmlldy5vbignYWRkJywgdGhpcy5hZGRUb2RvLmJpbmQodGhpcykpO1xyXG4gICAgdmlldy5vbigndG9nZ2xlJywgdGhpcy50b2dnbGVUb2RvLmJpbmQodGhpcykpO1xyXG4gICAgdmlldy5vbignZWRpdCcsIHRoaXMuZWRpdFRvZG8uYmluZCh0aGlzKSk7XHJcbiAgICB2aWV3Lm9uKCdyZW1vdmUnLCB0aGlzLnJlbW92ZVRvZG8uYmluZCh0aGlzKSk7XHJcbiAgfVxyXG5cclxuICBhZGRUb2RvKHRpdGxlKSB7XHJcbiAgICBjb25zdCB0b2RvID0gdGhpcy5tb2RlbC5hZGRJdGVtKHtcclxuICAgICAgaWQ6IERhdGUubm93KCksXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codG9kbyk7XHJcblxyXG4gICAgdGhpcy52aWV3LmFkZEl0ZW0odG9kbyk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVUb2RvKHsgaWQsIGNvbXBsZXRlZCB9KSB7XHJcbiAgICBjb25zdCB0b2RvID0gdGhpcy5tb2RlbC51cGRhdGVJdGVtKGlkLCB7IGNvbXBsZXRlZCB9KTtcclxuXHJcbiAgICB0aGlzLnZpZXcudG9nZ2xlVG9kbyh0b2RvKTtcclxuICB9XHJcblxyXG4gIGVkaXRUb2RvKHsgaWQsIHRpdGxlIH0pIHtcclxuICAgIGNvbnN0IHRvZG8gPSB0aGlzLm1vZGVsLnVwZGF0ZUl0ZW0oaWQsIHsgdGl0bGUgfSk7XHJcblxyXG4gICAgdGhpcy52aWV3LmVkaXRJdGVtKHRvZG8pO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVG9kbyhpZCkge1xyXG4gICAgdGhpcy5tb2RlbC5yZW1vdmVJdGVtKGlkKTtcclxuICAgIHRoaXMudmlldy5yZW1vdmVJdGVtKGlkKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXI7XHJcbiIsImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGFnLCBwcm9wcywgLi4uY2hpbGRyZW4pID0+IHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cclxuICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgoa2V5KSA9PiAoZWxlbWVudFtrZXldID0gcHJvcHNba2V5XSkpO1xyXG5cclxuICBpZiAoY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNoaWxkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59O1xyXG5cclxuY2xhc3MgRXZlbnRFbWl0dGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB0eXBlIC0g0YLQuNC/INGB0L7QsdGL0YLQuNGPLCDQvdCwINC60L7RgtC+0YDRi9C5INC90YPQttC90L4g0L/QvtC00L/QuNGB0LDRgtGM0YHRj1xyXG4gICAqIGNhbGxiYWNrIC0g0YTRg9C90LrRhtC40Y8g0L7QsdGA0LDQsdC+0YLRh9C40LpcclxuICAgKi9cclxuICBvbih0eXBlLCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5ldmVudHNbdHlwZV0gPSB0aGlzLmV2ZW50c1t0eXBlXSB8fCBbXTtcclxuICAgIHRoaXMuZXZlbnRzW3R5cGVdLnB1c2goY2FsbGJhY2spO1xyXG4gIH1cclxuXHJcbiAgZW1pdCh0eXBlLCBhcmcpIHtcclxuICAgIGlmICh0aGlzLmV2ZW50W3R5cGVdKSB7XHJcbiAgICAgIHRoaXMuZXZlbnRzW3R5cGVdLmZvckVhY2goKGNhbGxiYWNrKSA9PiBjYWxsYmFja1thcmddKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIEV2ZW50RW1pdHRlciB9O1xyXG4iLCJjbGFzcyBNb2RlbCB7XHJcbiAgY29udHJ1Y3RvcihzdGF0ZSA9IFtdKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKGlkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09IGlkKTtcclxuICB9XHJcblxyXG4gIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgdGhpcy5zdGF0ZS5wdXNoKGl0ZW0pO1xyXG5cclxuICAgIHJldHVybiBpdGVtO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSXRlbShpZCwgZGF0YSkge1xyXG4gICAgY29uc3QgaXRlbSA9IHRoaXMuZ2V0SXRlbShpZCk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocHJvcCkgPT4gKGl0ZW1bcHJvcF0gPSBkYXRhW3Byb3BdKSk7XHJcblxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKGlkKSB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc3RhdGUuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmlkID09IGlkKTtcclxuXHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLnN0YXRlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RlbDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbmNsYXNzIFZpZXcgZXh0ZW5kcyBFdmVudEVtaXR0ZXIge1xyXG4gIGNvbnRydWN0b3IoKSB7XHJcbiAgICAvLyBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0nKTtcclxuICAgIHRoaXMuaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWlucHV0Jyk7XHJcbiAgICB0aGlzLmxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby1saXN0Jyk7XHJcblxyXG4gICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlQWRkLmJpbmQodGhpcykpO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRWxlbWVudCgpIHtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gY3JlYXRlRWxlbWVudCgnaW5wdXQnLCB7XHJcbiAgICAgIHR5cGU6ICdjaGVja2JveCcsXHJcbiAgICAgIGNsYXNzTmFtZTogJ2NoZWNrYm94JyxcclxuICAgICAgY2hlY2tlZDogdG9kby5jb21wbGV0ZWQgPyAnY2hlY2tlZCcgOiAnJyxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgJ2xhYmVsJyxcclxuICAgICAgeyBjbGFzc05hbWU6ICd0aXRsZScgfSxcclxuICAgICAgdG9kby50aXRsZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBlZGl0SW5wdXQgPSBjcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgY2xhc3NOYW1lOiAndGV4dGZpZWxkJyB9KTtcclxuXHJcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gY3JlYXRlRWxlbWVudChcclxuICAgICAgJ2J1dHRvbicsXHJcbiAgICAgIHsgY2xhc3NOYW1lOiAnZWRpdCcgfSxcclxuICAgICAgJ0VkaXQnXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICdidXR0b24nLFxyXG4gICAgICB7IGNsYXNzTmFtZTogJ3JlbW92ZScgfSxcclxuICAgICAgJ0RlbGV0ZSdcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgaXRlbSA9IGNyZWF0ZUVsZW1lbnQoXHJcbiAgICAgICdsaScsXHJcbiAgICAgIHtcclxuICAgICAgICBjbGFzc05hbWU6IGB0b2RvLWl0ZW0gJHt0b2RvLmNvbXBsZXRlZCA/ICdjb21wbGV0ZWQnIDogJyd9YCxcclxuICAgICAgICAnZGF0YS1pZCc6IHRvZG8uaWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNoZWNrYm94LFxyXG4gICAgICBsYWJlbCxcclxuICAgICAgZWRpdElucHV0LFxyXG4gICAgICBlZGl0QnV0dG9uLFxyXG4gICAgICBlZGl0QnV0dG9uLFxyXG4gICAgICByZW1vdmVCdXR0b25cclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoaXRlbSk7XHJcbiAgfVxyXG5cclxuICBhZGRFdmVudExpc3RlbmVycyhsaXN0SXRlbSkge1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcclxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCdidXR0b24uZWRpdCcpO1xyXG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignYnV0dG9uLnJlbW92ZScpO1xyXG5cclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlVG9nZ2xlLmJpbmQodGhpcykpO1xyXG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlRWRpdC5iaW5kKHRoaXMpKTtcclxuICAgIHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlUmVtb3ZlLmJpbmQodGhpcykpO1xyXG5cclxuICAgIHJldHVybiBsaXN0SXRlbTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUFkZChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmlucHV0LnZhbHVlKSByZXR1cm4gYWxlcnQoJ0VudGVyIHRhc2sgbmFtZScpO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ2FkZCcsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVRvZ2dsZShlKSB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XHJcbiAgICBjb25zdCBpZCA9IGxpc3RJdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgY29uc3QgY29tcGxldGVkID0gdGFyZ2V0LmNvbXBsZXRlZDtcclxuXHJcbiAgICB0aGlzLmVtaXQoJ3RvZ2dsZScsIHsgaWQsIGNvbXBsZXRlZCB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUVkaXQoZSkge1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBlLnRhcmdldC5wYXJlbnROb2RlO1xyXG4gICAgY29uc3QgaWQgPSBsaXN0SXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcclxuICAgIGNvbnN0IGxhYmVsID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignLnRpdGxlJyk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0ZmllbGQnKTtcclxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCdidXR0b24uZWRpdCcpO1xyXG4gICAgY29uc3QgdGl0bGUgPSBpbnB1dC52YWx1ZTtcclxuXHJcbiAgICBjb25zdCBpc0VkaXRpbmcgPSBsaXN0SXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2VkaXRpbmcnKTtcclxuXHJcbiAgICBpZiAoaXNFZGl0aW5nKSB7XHJcbiAgICAgIHRoaXMuZW1pdCgnZWRpdCcsIHsgaWQsIHRpdGxlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5wdXQudmFsdWUgPSBsYWJlbC50ZXh0Q29udGVudDtcclxuICAgICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcclxuICAgICAgbGlzdEl0ZW0uY2xhc3NMaXN0LmFkZCgnZWRpdGluZycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlUmVtb3ZlKGUpIHtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gZS50YXJnZXQucGFyZW50Tm9kZTtcclxuICAgIGNvbnN0IGlkID0gbGlzdEl0ZW0uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcblxyXG4gICAgdGhpcy5lbWl0KCdyZW1vdmUnLCBpZCk7XHJcbiAgfVxyXG5cclxuICBmaW5kTGlzdEl0ZW0oaWQpIHtcclxuICAgIHJldHVybiB0aGlzLmxpc3QucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9XCIke2lkfVwiXWApO1xyXG4gIH1cclxuXHJcbiAgYWRkSXRlbSh0b2RvKSB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMuY3JlYXRlRWxlbWVudCh0b2RvKTtcclxuXHJcbiAgICB0aGlzLmlucHV0LnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLmxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlSXRlbSh0b2RvKSB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IHRoaXMuZmluZExpc3RJdGVtKHRvZG8uaWQpO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcclxuXHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZWQ7XHJcblxyXG4gICAgaWYgKHRvZG8uY29tcGxldGVkKSB7XHJcbiAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5hZGQoY29tcGxldGVkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxpc3RJdGVtLmNsYXNzTGlzdC5yZW1vdmUoY29tcGxldGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVkaXRJdGVtKHRvZG8pIHtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gdGhpcy5maW5kTGlzdEl0ZW0odG9kby5pZCk7XHJcbiAgICBjb25zdCBsYWJlbCA9IGxpc3RJdGVtLnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBsaXN0SXRlbS5xdWVyeVNlbGVjdG9yKCcudGV4dGZpZWxkJyk7XHJcbiAgICBjb25zdCBlZGl0QnV0dG9uID0gbGlzdEl0ZW0ucXVlcnlTZWxlY3RvcignYnV0dG9uLmVkaXQnKTtcclxuXHJcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XHJcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gJ0VkaXQnO1xyXG4gICAgbGlzdEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZWRpdGluZycpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlSXRlbShpZCkge1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSB0aGlzLmZpbmRMaXN0SXRlbSh0b2RvLmlkKTtcclxuXHJcbiAgICB0aGlzLmxpc3QucmVtb3ZlQ2hpbGQobGlzdEl0ZW0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmlldztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTW9kZWwgZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCBWaWV3IGZyb20gJy4vdmlldyc7XHJcbmltcG9ydCBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcic7XHJcblxyXG5jb25zdCBtb2RlbCA9IG5ldyBNb2RlbCgpO1xyXG5jb25zdCB2aWV3ID0gbmV3IFZpZXcoKTtcclxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKG1vZGVsLCB2aWV3KTtcclxuIl0sIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJtb2RlbCIsInZpZXciLCJvbiIsImFkZFRvZG8iLCJiaW5kIiwidG9nZ2xlVG9kbyIsImVkaXRUb2RvIiwicmVtb3ZlVG9kbyIsInRpdGxlIiwidG9kbyIsImFkZEl0ZW0iLCJpZCIsIkRhdGUiLCJub3ciLCJjb21wbGV0ZWQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlSXRlbSIsImVkaXRJdGVtIiwicmVtb3ZlSXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJ0YWciLCJwcm9wcyIsImVsZW1lbnQiLCJkb2N1bWVudCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJjaGlsZCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJFdmVudEVtaXR0ZXIiLCJldmVudHMiLCJ0eXBlIiwiY2FsbGJhY2siLCJwdXNoIiwiYXJnIiwiZXZlbnQiLCJNb2RlbCIsInN0YXRlIiwiZmluZCIsIml0ZW0iLCJkYXRhIiwiZ2V0SXRlbSIsInByb3AiLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsIlZpZXciLCJmb3JtIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbnB1dCIsImxpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQWRkIiwiY2hlY2tib3giLCJjbGFzc05hbWUiLCJjaGVja2VkIiwibGFiZWwiLCJlZGl0SW5wdXQiLCJlZGl0QnV0dG9uIiwicmVtb3ZlQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJsaXN0SXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJoYW5kbGVUb2dnbGUiLCJoYW5kbGVFZGl0IiwiaGFuZGxlUmVtb3ZlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJhbGVydCIsImVtaXQiLCJ0YXJnZXQiLCJwYXJlbnROb2RlIiwiZ2V0QXR0cmlidXRlIiwiaXNFZGl0aW5nIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ0ZXh0Q29udGVudCIsImFkZCIsImZpbmRMaXN0SXRlbSIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwiY29udHJvbGxlciJdLCJzb3VyY2VSb290IjoiIn0=