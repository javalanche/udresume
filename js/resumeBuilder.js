//$('#header').append('Javier Fraga');
//$('#main').append('Javier Fraga');
//$("#main").append("Javier Fraga");

var firstName = 'Javier';
var age = 32;
var awesomeThoughts = 'I am ' + firstName + ' and I am awesome';
console.log(firstName);
console.log(age);
console.log(awesomeThoughts);

var email = 'javier.s.fraga@att.com';
var newEmail = email.replace('att', 'gmail');
console.log(email);
console.log(newEmail);

var name = 'Javier Fraga';
var role = 'Developer';
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

var skills = ['awesomeness' , 'programming' , 'teaching' , 'JS'];
//$('#main').append(skills);
$('#main').append(skills[0]);
