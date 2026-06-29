//Higher Order Function : Higher order function are those functions which takes another function as an argument or return an another function.

//callback()

function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,callback){
    callback(a,b);

}
 calculator(2,3,sum);

 //curring 

 function add(a){
return function (b){
    return function(c){
        return a+b+c;
    };
};
}
console.log(add(10)(20)(30));
