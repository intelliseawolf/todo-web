class TodoItem {
  constructor(arg) {
    this.content = arg;
    this.pending = true;
    this.birth = timeStamp();
  }

  static retore(obj) {
    var _item = new TodoItem(obj.content);
    _item.pending = obj.pending;
    _item.birth = obj.birth;
    return _item;
  }

  finish() {
    this.pending = false;
    this.container.saveToLS();
  }

  remove() {
    this.container.removeTask(this)
  }

  setDomNode(domNode) {
    this.domNode = domNode;
  }

  setContainer(container) {
    this.container = container;
  }
}
