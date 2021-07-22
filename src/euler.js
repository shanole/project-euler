export const euler = (num) => {
    if (num <= 3) {
        return 0;
    } else {
        let newNum = num-1;
        if ((newNum % 3 === 0) || (newNum % 5 === 0)) {
            return euler(newNum) + newNum;
        } else {
            return euler(newNum);
        }
    }
}

// const euler = (num) => {
//   if (num <= 3) {
//     return 0; 
//   }
//   else {
//     let newNum = num-1;
//     let numToAdd = 0;
//     if ( newNum % 3 || newNum % 5) {
//       numToAdd = newNum
//     }
//     return euler(newNum) + newNum;
//   }
// }