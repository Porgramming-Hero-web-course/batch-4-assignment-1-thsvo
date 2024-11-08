"use strict";
const greetFriends = (...total) => {
    total.forEach((single) => console.log(single));
};
greetFriends(1, 2, 3, 4, 5);
