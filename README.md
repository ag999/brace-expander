# Parenthesis Expander

**This is a parenthesis expander. You can either call it with an argument or just call it and it will ask for the input string. It will return an array.**

### Example
* **Input:** foo-(a,b)-(1,2,5).(txt,jpg)
* **Output:** [ 'foo-a-1.txt', 'foo-a-1.jpg', 'foo-a-2.txt', 'foo-a-2.jpg', 'foo-a-5.txt', 'foo-a-5.jpg', 'foo-b-1.txt', 'foo-b-1.jpg',                       'foo-b-2.txt', 'foo-b-2.jpg', 'foo-b-5.txt', 'foo-b-5.jpg']

### Rules
* The input string may have multiple pairs of parentheses (i.e. "()"). But they should be in pairs. But don't worry if they are not. The program will catch that!
* Inside each paired parentheses may list of options that are separated by commas (i.e. ",").
