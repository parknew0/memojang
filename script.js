var 오브젝트2 = {
  data : {
    간지함수 : function(){ console.log(this) }
  }
}
오브젝트2.data.간지함수();

var arr = [1,2,3,4];

arr.forEach(function(a) {
  console.log(a);
});