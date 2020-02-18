export function dotName(value: string): string {
  const splits = value.split(' ')
  return `${splits[0][0]}. ${splits[1]}`
}