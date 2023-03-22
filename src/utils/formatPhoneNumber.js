export function formatPhoneNumber(phoneNumber) {
  return (
    "+38 (" +
    phoneNumber.slice(3, 6) +
    ") " +
    phoneNumber.slice(6, 9) +
    " " +
    phoneNumber.slice(9, 11) +
    " " +
    phoneNumber.slice(11)
  );
}
