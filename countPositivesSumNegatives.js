// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// function countPositivesSumNegatives(input) {
    
//     let positive = [];
//     let negative = [];

//     for (let number of input){
//         if (number>=0){positive.push(number)};
//         if (number<0){negative.push(number)};
//     }  
//     let aux = (acc,num) => acc + num;
//     let negativeSum = negative.reduce(aux)

//     console.log([positive.length,negativeSum])  

//         // return ?;
    
//   }

//   countPositivesSumNegatives(input)
    

function countPositivesSumNegatives(input) {


    if(!input || input === null) {
        return input=0
    }

    else{
        const getPositive = item => item >= 0;
        const getNegative = item => item < 0;
        
        const positive = input.filter(getPositive);
        const negative = input.filter(getNegative);
    
        let aux = (acc,num) => acc + num;
        let negativeSum = negative.reduce(aux);
    
        return [positive.length,negativeSum]
    }

}

  console.log(countPositivesSumNegatives(input))
