var string=process.argv[2];

var counter=0;
while (counter<string.length){
  if ((string.charAt(counter)==="a") ||
     (string.charAt(counter)==="e") ||
     (string.charAt(counter)==="i") ||
     (string.charAt(counter)==="o") ||
     (string.charAt(counter)==="u")){
  console.log(string.charAt(counter))}
  counter ++;
}
