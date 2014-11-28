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
//$('#main').append(skills[0]);

var bio = {
    "name" : "Javier Fraga",
    "role" : "Developer / Scrum Master",
    "contacts" : {
	"mobile" : "+1 415 952 7314",
	"email" : "javier.s.fraga@gmail.com",
	"github" : "javalanche",
	"twitter" : "@jsfraga",
	"linkedIn" : "http://www.linkedin.com/pub/javier-fraga/3b/25a/842/"	
    },
    "welcomeMessage" : "blah blah blah",
    "skills" : skills,
    "bioPic" : "images/javierFragaLinkedInPhoto.jpg"
};
//var work = {};
//work.position = "Developer / Project Manager";
//work.employer = "AT&T";
//work.years = 0.5;
var work = {
    "jobs" : [
    {
	"employer" : "AT&T",
	"position" : "Project Manager / Scrum Master / Developer",
	"dates" : "2014 - present",
	"description" : "fulltime employee working as an internal consultant in various projects in Responsive Web Design, API realization, and Cloud serving various roles as Project Manager, Scrum Master, and Developer"
    },
    {
	"employer" : "Intel Corporation",
	"position" : "Component Design Engineer",
	"dates" : "2005 - 2011",
	"description" : "fulltime employee designing graphics processor units (GPU), specializing in Low-Power Digital Design" 
    }
	]
}

var education = {
    "schools" : [
	    {
		"name" : "IESE Business School",
		"city" : "Barcelona, Spain",
		"degree" : "Masters",
		"major" : "MBA",
		"years" : "2011-2013"
	    },
	    {
		"name" : "The University of Texas at San Antonio",
		"city" : "San Antonio, Texas",
		"degree" : "BA",
		"major" : "Electrical Engineering",
		"years" : "2003-2005"
	    }
	]
};
//$("#main").append(bio.name);
//$("#main").append(work["position"]);
//$("#main").append(education.name);

//for (job in work.jobs){
//    $("#workExperience").append(HTMLworkStart);
}
