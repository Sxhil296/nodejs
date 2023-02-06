// const add = (a, b) => {   //1
//     return a + b;
// };

// export default add;



// export default (a, b) => {  //2
//     return a + b;
// };


const add = (a, b) => {   //3
    return a + b;
};

const subtract = (a, b) =>{
    return a - b;
};

export default {
    add, 
    subtract
};

