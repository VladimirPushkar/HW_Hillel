const nKm = +prompt('Write the value in KM ');
const nFt = +prompt('Write the value in FT');
const nFtKm = nFt * 0.0003048
alert(nKm > nFtKm ? `${nKm}km more than ${nFt}ft` : `${nFt}ft more than ${nKm}km`);