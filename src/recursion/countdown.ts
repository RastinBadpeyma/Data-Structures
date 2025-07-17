const contdwon = (i: number):void => {
 console.log(i);

 if(i<= 0){
    return;
 }

 contdwon(i - 1);
}

contdwon(5);