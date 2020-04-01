const obj = {
  people: {
    name: '张三',
    has() {
      return function (){
        console.log(this)
      }
    },
    had() {
      console.log(this)
    },
    wait() {
      setTimeout(
        function(){
          console.log(this)
          console.log(this === window)
        }
      , 100);
    }
  }
}

const fn = obj.people.has();
fn();
obj.people.had();
obj.people.wait();
console.log(this)
