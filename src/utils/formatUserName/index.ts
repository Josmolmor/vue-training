export function formatUserName(userName: string): string {
  const values = userName.split(' ');
  return `${values[0][0]}. ${values[1]}`;
}
