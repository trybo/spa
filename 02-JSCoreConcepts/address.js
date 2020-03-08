title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/*
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

// Method 1
address1 = title + " " + name + " " + surname + "\nul. " + street + "\n" + zip + " " + city + "\n" + country.toUpperCase();
console.log(address1);

console.log();

// Method 2
address2 = `${title} ${name} ${surname}\nul. ${street}\n${zip} ${city}\n${country.toUpperCase()}`;
console.log(address2);
