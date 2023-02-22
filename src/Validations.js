export const mobileValitaion = (number) => {
  if (number.length < 10 || number.length > 10 || number === "") {
    return false;
  } else {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    console.log(re.test(number));
    return re.test(number);
  }
};
