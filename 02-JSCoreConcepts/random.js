array = [];

let randomArray = (arr) => {
    for (let i=0; i<10; i++){
        arr.push(Math.floor(Math.random() * 16) + 5);
    };
};

let showArray = (arr) => {
    for (let i=0; i<10; i++){
        console.log(arr[i]);
    };
};

randomArray(array);
showArray(array);
