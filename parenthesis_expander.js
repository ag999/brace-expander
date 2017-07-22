main();
function main(input){
  if(input === undefined){
    input = prompt("Enter a string you want expanded.");
  }
  if(input === null){
    return;
  }
  len = input.length;
  countOpen = input.split("(").length;
  countClosed = input.split(")").length;
  var tries = 0;
  while(!(checkParenthesis(input))){
    if(tries == 5){
      console.log("Please match the parenthesis in the input and try again later.");
      return;
    }
    input = prompt("Incorrect format. Please make sure the input has matching parenthesis.");
    if(input === null){
      console.log("Please check the rules and try again later.");
      return;
    }
    tries++;
  }
  
  count = input.split("(").length - 1;
  if(count === 0){
    // console.log(input);
    // return;
    return input;
  }
  count = 2*count + 1;
  result = {};
  for(var x = 0; x < count; x++){
    result[x] = [];
  }
  var tracker = 0;
  x = 0;
  word = "";
  while(x < len){
    letter = input.charAt(x);
    if(letter != "("){
      word = word + letter;
      x++;
    }
    else{
      var arr = [word];
      result[tracker] = arr;
      word = "";
      tracker++;
      x++;
      while(input.charAt(x) != ")"){
        word = word + input.charAt(x);
        x++;
      }
      result[tracker] = word.split(",");
      word = "";
      tracker++;
      x++;
    }
    if (word !== ""){
      result[tracker] = [word];
    }
  }
  // console.log(result)
  expanded = expansion(result);
  answer = [];
  len = expanded.length - 1;
      for (x = 0; x <= len; x++){
        //console.log(expanded[x].join(""));
        answer.push(expanded[x].join(""));
      }
      return answer;
}


function expansion(input) {
  let expanded = [];
  end = Object.keys(input).length - 1;
  dict = {};
  var count = 0;
  for (var x = 0; x <= end; x++){
    if (input[x].length > 0){
      dict[count] = input[x];
      count++;
    }
  }
  end = count - 1;
  helper([], 0);
  function helper(arr, iter) {
      for (var index = 0, len = dict[iter].length; index < len; index++) {
          let a = arr.slice(0);
          a.push(dict[iter][index]);
          if (iter != end) {
            helper(a, iter + 1);
          }
          else {
            expanded.push(a);
          }
      }
  }
  return expanded;
}


function checkParenthesis(str){
  var stack = [];
  for(var x = 0; x < str.length; x++){
    if(str.charAt(x)=="("){
      stack.push("(");
    }
    if(str.charAt(x) == ")"){
      if(stack.length <= 0) {
        return false;
      }
      stack.pop();
    }
  }
  if(stack.length > 0){
    return false;
  }
  return true;
}
