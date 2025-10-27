export const emailValidate = (value) => {
    // Regex explanation:
    // ^          : Start of the string
    // .+         : One or more of any character
    // @          : Literal '@' character
    // [a-zA-Z]+  : One or more uppercase or lowercase letters
    // \.{1}      : Exactly one '.' character (escaped because '.' is a special character in regex)
    // [a-zA-Z]+  : One or more uppercase or lowercase letters
    // (\.{0,1}   : Zero or one '.' character (escaped) (optional)
    // [a-zA-Z]+  : One or more uppercase or lowercase letters (optional)
    // )          : Close the group
    // $          : End of the string
    const emailRegex = /^[^\s@]+@[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]+)?$/;
    return emailRegex.test(value);
  };
  
  export const passwordValidate = (value) => {
    // Regex explanation:
    // ^              : Start of the string
    // (?=.*?[A-Z])   : At least one uppercase letter
    // (?=.*?[a-z])   : At least one lowercase letter
    // (?=.*?[0-9])   : At least one digit
    // (?=.*?[!@#/$&*~]) : At least one special character from the set !@#/ $&*~
    // .{6,}          : At least 6 characters long
    // $              : End of the string
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#/$&*~]).{6,}$/;
    return passwordRegex.test(value);
  };
  
  export const bankCardValidate = (value) => {
    // Visa, MasterCard, and general credit card regex patterns
    const visaCard = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const masterCard = /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\d|2[3-6]\d{2}|27[0-1]\d|2720)[0-9]{12}$/;
    const creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    
    return visaCard.test(value) || masterCard.test(value) || creditCard.test(value);
  };
  
  export const validateCvv = (cvv) => {
    // CVV regex for 3 or 4 digits
    const cvvRegex = /^[0-9]{3,4}$/;
    return cvvRegex.test(cvv);
  };
  
  export const validatePin = (pin) => {
    // PIN regex for 4 or more digits
    const pinRegex = /^[0-9]{4,}$/;
    return pinRegex.test(pin);
  };
  
  export const validateMonth = (month) => {
    // Month regex for 01 to 12
    const monthRegex = /^(0[1-9]|1[0-2])$/;
    return monthRegex.test(month);
  };
  
  export const validateYear = (year) => {
    const currentYear = new Date().getFullYear();
    const yearRegex = /^\d{2}$/;
  
    if (yearRegex.test(year)) {
      const currentYearLastTwoDigits = currentYear.toString().slice(-2);
      const inputYear = parseInt(year, 10);
  
      return inputYear >= parseInt(currentYearLastTwoDigits, 10);
    }
  
    return false;
  };
  
  export const mobileNumberValidate = (value) => {
    // Mobile number regex for optional '+0' or '9' and 11 to 15 digits
    const mobileNumberRegex = /^(?:[+0]9)?[0-9]{11,15}$/;
    return mobileNumberRegex.test(value);
  };
  
  export const usernameValidate = (value) => {
    // Username regex for length 4-25 characters, no starting or ending _ or ., no consecutive _ or .
    const usernameRegex = /^(?=.{4,25}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    return usernameRegex.test(value);
  };
  
  export const isGreaterThan50Validate = (value) => {
    // Regex for numbers greater than 50
    const greaterThan50Regex = /^([5-9]\d|[1-9]\d{2,})$/;
    return greaterThan50Regex.test(value);
  };

  export const removeSpaces = (string) => {
    return string.trim().toLowerCase().replace(/\s+/g, '');
  };
  