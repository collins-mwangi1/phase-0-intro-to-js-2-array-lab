// Write your solution here!

//defining cats!.
    const cats = ["Milo", "Otis", "Garfield"];

    function addCat(catName) {
        cats.push(catName);
      }
      function destructivelyAppendCat(name) {
        cats.push(name);
      } 
      function destructivelyPrependCat(name) {
        cats.unshift(name);
      }
      function destructivelyRemoveLastCat() {
        cats.pop();
      }
      function destructivelyRemoveFirstCat() {
        cats.shift();
      }
      function appendCat(name) {
        return cats.concat(name);
      }
      function prependCat(name) {
        return [name].concat(cats);
      }
    function removeLastCat() {
        return cats.slice(0, -1);
      }
      function removeFirstCat() {
        return cats.slice(1);
      }
      function writeCards(names, event) {
        const thankYouMessages = [];
        for (let i = 0; i < names.length; i++) {
          const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
          thankYouMessages.push(message);
        }
        return thankYouMessages;
      }
      
      function countDown(num) {
        for (let i = num; i >= 0; i--) {
          console.log(i);
        }
      }