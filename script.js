function preview() {
  let a = prompt("словосочетание или предложение больше 10 символов");
  let n = 10;
  let k = 1;
  if (a.length > n && a[10] == " ") {
    document.write(a.substr(0, n) + "...");
  } else if (a[10] !== " ") {
    b = a.indexOf(" ");
    document.write(a.substr(0, b) + "...");
  } else {
    document.write(a);
  }
}
