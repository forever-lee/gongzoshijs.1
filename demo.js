//1三元运算符
var a,b,c
a='10';
b='8';
c=a>b?(b == a):( b = a-2 );
console.log(c);
//2、1~100中3的倍数
for(i=1;i<=100;i++){
   if(i%3==0){//i除3取余数为0的值
   console.log(i+'<br>');
   }
   }
//3、两个参数交换
var a,b,c
a ='A';
b ='B';
c ='C';
console.log(c=b,b=a,a=c);

//4、两数平方和
function sumOfSquares(a,b){
   
   return(a*a+b*b);
   

}
let res = sumOfSquares(11,22);
console.log(res);
//5、展平数组
const num = [ [ 'b' ,3],[ 'c' ,6],['d',9] ]
      list = [];
      function test(array){
         var newArray = [];
         for(var i=0;i<array.length-1;i++){
         if(array[i] instanceof Array){//判断是不是数组
         newArray = newArray.concat(test(array[i]))
         }else{
         newArray.push(array[i])
         }
         }
         
         return newArray;
     }
     console.log(  num); 
      
$('#myld')
$('.myclass')
$('.myclass>p')
//7、去重
const arr7 = [1,1,1,2,2,3,3,4,4,4,5,5];

function uniq (array) {
   var num =[];
   for(var i =0; i<array.length; i++){
      if(num.indexOf(array[i]) ==-i){
         num.push(array[i]);
      }
   return num;
   } 
}
console.log(uniq(arr7));
//8、
 let arr8 = [5, 3, 8, 1];  
 let filtered =arr8.filter(item=>item!==5,8);//筛选特定元素
 console.log( filtered ); 
 //9、
 let john = { name: "John", surname: "Smith", id: 1 };
 let pete = { name: "Pete", surname: "Hunt", id: 2 };
 let mary = { name: "Mary", surname: "Key", id: 3 };
 
 let users = [john, pete, mary ];
 let usersMapped= {
   [0]:[fullName=john.name+john.surname,id=john.id],
   [1]:[fullName=pete.name+pete.surname,id=pete.id],
   [2]:[fullName=mary.name+mary.surname,id=mary.id],
 }
 
 

 console.log(usersMapped[0] .id ) // 1
 console.log(usersMapped[0].fullName)// John Smith
