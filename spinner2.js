const spinner = function(array) {

  for (let char in array)
    setTimeout(() => {
      process.stdout.write(array[char]);
    }, 100 * char);
  
};

const spinnerAnimation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r/  ', '\r-  ', '\r\\  ', '\r|  '];

spinner(spinnerAnimation);