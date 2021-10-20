var codeUtil = {
    sum:function(number1,number2){
        return number1+number2;
    },
    sub:function(number1,number2){
        return number1-number2;
    },
    div:function(number1,number2){
        if (number2===0){
            return "You can't devide from 0"
        }
        return number1/number2;
    },
    mul:function(number1,number2){
        return number1*number2;
    }
}