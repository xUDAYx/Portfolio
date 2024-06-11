export default function getCurrentAge() {
  const birthDate = new Date(2001, 6, 20);
  const today = new Date();
  const month = today.getMonth() - birthDate.getMonth();

  let age = today.getFullYear() - birthDate.getFullYear();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}