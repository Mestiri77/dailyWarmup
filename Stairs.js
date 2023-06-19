    /**
     **               Good Morning everyone , it's WU (warm up ) time ¯\_( ͡ᵔ ͜ʖ ͡ᵔ )_/¯
     ** (ps : The purpose of this is to build your muscle memory and increase your problem solving skills )
     ** 
**    Imagine you are running up a staircase with n steps and can hop either 1 step, 2 steps at a time.
**   Implement a method to count how many possible ways you can run up the stairs if given the number of steps in the staircase as N.
** 
**  
**   
*!1.) 
*!Input: 3
*!Output: 3
*! 
*!2.) 

*!Input: 4
*!Output: 5
*! 
*!3.)

*!Input: 50
*!Output: 20365011074
**
*? HAPPY coding  ≧◠‿◠≦✌
*/


// INPUT OUTPUT 
//  1 => 1 
// 2 => 2
// 3 => 3
// 4 => 5
// that remind us the fibonacci sequence let's try and well figure out , that's mean that the a step with 7steps there is 21way to to run it up


const stairsSteps = (n) => {
    if(n === 1 ||n === 2 ) {
        return n
    }
    return stairsSteps(n-1)+stairsSteps(n-2)
}


console.log(stairsSteps(4))
console.log(stairsSteps(7))
console.log(stairsSteps(50))

