const createElement = (tag, props, ...children) => {
  const element = document.createElement(tag);

  Object.keys(props).forEach((key) => {
    if (key.startsWith('data-')) {
      element.setAttribute(key, props[key]);
    } else {
      element[key] = props[key];
    }
  });

  children.forEach((child) => {
    if (typeof child === 'string') {
      child = document.createTextNode(child);
    }

    element.appendChild(child);
  });

  return element;
};

class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * type - тип события, на который нужно подписаться
   * callback - функция обработчик
   */
  on(type, callback) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(callback);
  }

  emit(type, arg) {
    if (this.event[type]) {
      this.events[type].forEach((callback) => callback[arg]);
    }
  }
}

function save(data) {
  const string = JSON.stringify(data);

  localStorage.setItem('todos', string);
}

function load() {
  const string = localStorage.getItem('todos');
  const data = JSON.parse(string);

  return data;
}

export { createElement, EventEmitter, save, load };
