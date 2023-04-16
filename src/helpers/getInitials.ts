export const getInitials = (name: string): string => {
  if (name.length === 0) return '';
  const splitedName = name.split(' ');
  if (splitedName.length === 2)
    return `${splitedName[0][0]}${splitedName.length > 1 ? splitedName[1][0] : splitedName[1][1]}`;
  return '';
};
