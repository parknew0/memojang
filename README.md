# memojang


```
var 오브젝트 = {
  이름들 : ['김', '이', '박'];
  함수 : function(){
      오브젝트.이름들.forEach(() => {
        console.log(this)
      });
  }
}
자바스크립트 ES6 문법 중,
```

function () {} 대신 쓸 수 있는 () => {} 이라는 arrow function 문법이 있습니다. 

똑같이 함수 만드는 문법입니다. 

이걸 쓰시면 함수 내부의 this값을 새로 바꿔주지 않기 때문에 this를 사용하실 때 유용합니다. 

심심하면 사용하시길 바랍니다. (아니면 애초에 this 키워드를 쓰지맙시다) 

자세한 arrow function에 관한 내용은 다음 강의에서 설명하기로 합시다. 