export const samePasswordValidator = ({ value }: any) => {
  if (value.password === value.password_confirm) { return null; }
  return { 'mismatch': true };
}
