function List() {
   this.listSize = 0;
   this.pos = 0;
   this.dataStore = [];
   this.clear = clear;
   this.find = find;
   this.toString = toString;
   this.insert = insert;
   this.append = append;
   this.remove = remove;
   this.front = front;
   this.end = end;
   this.previous = previous;
   this.next = next;
   this.length = length;
   this.currPos = currPos;
   this.moveTo = moveTo;
   this.getElement = getElement;
   this.length = length;
}

function append(element) {
   this.dataStore[this.listSize++] = element;
}

function find(element) {
   for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] == element) {
         return i;
      }
   }
   return -1;
}

function remove(element) {
   var foundAt = this.find(element);
   if (foundAt > -1) {
      this.dataStore.splice(foundAt,1);
      --this.listSize;
      return true;
   }
   return false;
}

function toString() {
    return this.dataStore;
}

function clear() {
 delete this.dataStore;
 this.dataStore = [];
 this.listSize = this.pos = 0;
}

function front() {
 this.pos = 0;
}

function previous() {
 return this.dataStore[--this.pos];
}

function next() {
 return this.dataStore[this.pos++];
}

function hasNext() {
 if (this.pos > this.listSize -1) {
 return false;
 } else {
 return true;
 }
}

function hasPrevious() {
 if (this.pos <= 0) {
 return false;
 } else {
 return true;
 }
}
function end() {
 this.pos = this.listSize - 1;
}

function currPos() {
 return pos;
}
function insert(element, after) {
 var insertPos = this.find(after);
 if (insertPos > -1) {
   this.dataStore.splice(insertPos+1, 0, element);
   ++this.listSize;
   return true;
 }
   return false;
}

function length() {
 return this.listSize;
}

function moveTo(position) {
 this.pos = position;
}

function getElement() {
 return this.dataStore[this.pos];
}

var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");

names.next();
print(names.next()); // displays Raymond
names.next();
names.previous();
print(names.previous()); // displays Raymond
print(names.toString());
// names.remove("Raymond");
// print(names.toString());
