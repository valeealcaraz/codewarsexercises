// Introduction
// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
// Task
// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:
//  w - 4
//  p - 3
//  b - 2
//  s - 1

// The right side letters and their power:
//  m - 4
//  q - 3
//  d - 2
//  z - 1

// The other letters don't have power and are only victims. 

const leftSideLetters = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
}

const rightSideLetters = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
} 

function alphabetWar(fight) {
    let leftSum = [0];
    let rightSum = [0];

    for(let letter of fight) {
        for(let l in leftSideLetters){
            if (letter === l) {
                leftSum.push(leftSideLetters[l])
            } 
        }
        for(let l in rightSideLetters){
            if (letter === l) {
                rightSum.push(rightSideLetters[l])
            } 
        }
    }
    const leftTotal = leftSum.reduce((a,b) => a+b);
    const rightTotal = rightSum.reduce((a,b) => a+b);

    if (leftTotal > rightTotal) { return "Left side wins!" }
    else if (leftTotal < rightTotal) { return "Right side wins!" }
    else { return"Let's fight again!" }

}

console.log(alphabetWar("zdfdfdfws"))
console.log(alphabetWar("zdqmwpbs"))
console.log(alphabetWar("wwwwww"))
