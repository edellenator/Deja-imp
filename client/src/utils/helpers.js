export function validateEmail(email) {
  var re = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;
  return re.test(String(email).toLowerCase());
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
