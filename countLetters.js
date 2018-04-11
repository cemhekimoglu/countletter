// write function countLetters that returns all unique characters
// in the string.
//

var str = "lighthouse in the house";
str = str.replace(/\s/g, '');

var countLetters = {}

for (var i = 0; str.length>i ; i++) {
  var letter = str[i];
  var count = char_count(str, str[i]);

  countLetters[letter] = count


  // char_count(str, str[i])


// var newstr = str.match(/d/gi).length;

}

  console.log(countLetters);

var str = {
}



  // var matches = str.match(/d/gi).length;


function char_count(str, letter)
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++)
 {
    if (str.charAt(position) == letter)
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}