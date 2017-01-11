const hash = (str) => {
  var hash = '';
  var len = 8;

  if (str.length < len) {
    len = str.length;
  }

  for (var i = 0; i < len; i++) {
    var char = '';
    char = str.charCodeAt(i);
    char = char.toString();
    char = char.substring(char.length - 1, char.length);
    hash += char;
  }
  return hash;
};

export default hash;
