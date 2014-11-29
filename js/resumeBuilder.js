function displayHeader(){
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $('#header').prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $('#header').prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
}
function displayWork(){
    for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
    }
}
function inName(){
    name.name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].splice(0,1).toUpperCase() + name[0].splice(1).toLowerCase();

    return name[0] + " " + name[1];
}
$('#main').append(internationalizeButton);

var skills = ['awesomeness' , 'programming' , 'teaching' , 'JS'];
//$('#main').append(skills);
//$('#main').append(skills[0]);

var bio = {
    "name" : "Javier Fraga",
    "age" : 32,
    "role" : "Developer (SW), Scrum Master, Project Manager",
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
console.log(bio.name);
console.log(bio.age);
var newEmail = bio.contacts.email.replace('gmail', 'att');
console.log(bio.contacts.email);
console.log(newEmail);
//var work = {};
//work.position = "Developer / Project Manager";
//work.employer = "AT&T";
//work.years = 0.5;
//$("#main").append(bio.name);
//$("#main").append(work["position"]);
//$("#main").append(education.name);
var work = {
    "jobs" : [
    {
	"employer" : "AT&T",
	"title" : "Developer (SW), Scrum Master, Project Manager",
	"dates" : "2014 - present",
	"location" : "Dallas, TX, USA",
	"description" : "fulltime employee working as an internal consultant in various projects in Responsive Web Design, API realization, and Cloud serving various roles as Project Manager, Scrum Master, and Developer"
    },
    {
	"employer" : "Intel Corporation",
	"title" : "Component Design Engineer (HW)",
	"dates" : "2005 - 2011",
	"location" : "Folsom, CA, USA",
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

var projects = {
    "projects" : [
	{
	    "title" : "Sample Project 1",
	    "dates" : 2014,
	    "description" : "bla bla blah",
	    "images" : [
		"images/cristina3.jpg",
	    "images/cristina5.jpg"
		]
	}
    ]
}
projects.display = function(){
    for (project in projects.projects){
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	if (projects.projects[project].images.length > 0){
	    for (image in projects.projects[project].images){
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
		$(".project-entry:last").append(formattedImage);
	    }
	}
    }
}
displayHeader();
displayWork();
//display();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});
