function createPhoneNumber(numbers) {
    let phoneNumber = "(";
    phoneNumber += numbers.slice(0, 3).join('') + ") ";
    phoneNumber += numbers.slice(3, 6).join('') + "-";
    phoneNumber += numbers.slice(6, 10).join('');
    return phoneNumber;
  }