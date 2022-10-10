const firstSport = 'Football';
const secondSport = 'Golf';
const thirdSport = 'basketball';
const footballTop = 'Ronaldy';
const golfTop = 'Woods';
const basketballTop = 'Jordan';
let userCountry;
let userAgeMessage;
let whatCountryUserFrom;
let whomUserWantToBeMessage;
//=================================//
const userAge = prompt('Hello. What year were you born.', '');
if (userAge) {
    userAgeMessage = `Your age is ${2022 - userAge}`;
} else {
    userAgeMessage = 'I don\'t know how old are you';
    alert('Too bad you didn\'t enter this.');
};
//=================================//
const userCity = prompt('What the city do you live?', '');
if (!userCity) {
    whatCountryUserFrom = 'I don\'t know where are you live';
    alert('Too bad you didn\'t enter this.');
} else {
    if (userCity == 'Kyiv') {
    userCountry = 'Ukraine';
    whatCountryUserFrom = (`Do you live in the capital ${userCountry}`);
    } else if (userCity == 'Washington') {
        userCountry = 'USA';
        whatCountryUserFrom = (`Do you live in the capital ${userCountry}`);
    } else if (userCity == 'Ottawa') {
        userCountry = 'Canada';
        whatCountryUserFrom = (`Do you live in the capital? ${userCountry}`);
    } else {
        whatCountryUserFrom = (`Do you live in the capital? ${userCity}`);
    }
};
//=================================//
const userTopSport = prompt('What is your favorite sport?', '');
if (!userTopSport) {
    whomUserWantToBeMessage = 'I don\'t know who you want to be';
    alert('Too bad you didn\'t enter this.');
} else if (userTopSport == firstSport) {
        whomUserWantToBeMessage = (`Excellent! Do you want to be ${footballTop}?`);
} else if (userTopSport == secondSport) {
        whomUserWantToBeMessage = (`Excellent! Do you want to be ${golfTop}?`);
} else if (userTopSport == thirdSport) {
        whomUserWantToBeMessage = (`Excellent! Do you want to be ${basketballTop}?`);
} else {
    whomUserWantToBeMessage = 'Excellent! Do you want to become an athlete.';
};
//=================================//
if (userTopSport || userTopSport == '')  {
    alert(`${userAgeMessage}\n${whatCountryUserFrom}\n${whomUserWantToBeMessage}`);
};