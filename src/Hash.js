const hash = (str) => {
  let hash = '';
  let len = 8;

  if (str.length < len) {
    len = str.length;
  }

  for (let i = 0; i < len; i++) {
    let char = '';
    char = str.charCodeAt(i);
    char = char.toString();
    char = char.substring(char.length - 1, char.length);
    hash += char;
  }
  return hash;
};

export default hash;
