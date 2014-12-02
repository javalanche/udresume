function displayHeader(){
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $('#header').prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $('#header').prepend(formattedName);

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);

    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);

    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);

    var formattedLinkedin = HTMLcontactGeneric.replace("%contact%", "linkedIn").replace("%data%", bio.contacts.linkedIn);
    $("#topContacts").append(formattedLinkedin); 

    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);

    var formattedPic = HTMLbioPic.replace("%data%", "images/javierFragaLinkedInPhoto.jpg");
    $("#header").append(formattedPic);

    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

    var formattedSkillsStart = HTMLskillsStart;
    $("#header").append(formattedSkillsStart);

    var skillsHeader = bio.skills.sw.join(", ");
    var formattedSkills = HTMLskills.replace("%data%", skillsHeader); 
    $("#header").append(formattedSkills); 
    skillsHeader = bio.skills.hw.join(", ");
    formattedSkills = HTMLskills.replace("%data%", skillsHeader); 
    $("#header").append(formattedSkills);
    skillsHeader = bio.skills.business.join(", ");
    formattedSkills = HTMLskills.replace("%data%", skillsHeader)  ; 
    $("#header").append(formattedSkills);
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
function displayProjects(){
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
function displayEducation(){
    for (school  in education.schools){
	$("#education").append(HTMLschoolStart);

	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	$(".education-entry:last").append(formattedName);

	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	$(".education-entry:last").append(formattedDegree);

	var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].years);
	$(".education-entry:last").append(formattedDate);

	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
	$(".education-entry:last").append(formattedLocation);

	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	$(".education-entry:last").append(formattedMajor);
    }
}
function displayOnline(){
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    for (_class  in online.classes){

	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.classes[_class].title);
	$(".education-entry:last").append(formattedOnlineTitle);
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

//var skills = ['awesomeness' , 'programming' , 'teaching' , 'JS'];
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
	"linkedIn" : "www.linkedin.com/pub/javier-fraga"	
    },
    "welcomeMessage" : "Electrical engineer with Bilingual MBA from top-tier program with international experience and experience with two world-class technology providers",
    "skills" : {
	"sw" : ['Front End Web Design' , 'Data Science' , 'Operating Systems', 'Continuous Integration' , 'Test-Drive Development'  ], 
	"hw" : ['Digital and Analog Circuit Design' , 'Verilog' ], 
	"business" : [ 'Project Management' , 'Scrum Agile' ,'Finance' , 'Accounting' , 'Strategy' ] 
    },
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
}

var online = {
    "classes" : [
          {
              "title" : "How to Use Git and GitHub",
              "school" : "Udacity",
              "date" : "2014",
              "url" : "tba.com"
          },
          {
              "title" : "Intro to HTML and CSS",
              "school" : "Udacity",
              "date" : "2014",
              "url" : "tba.com"
          },
          {
              "title" : "JavaScript Basics",
              "school" : "Udacity",
              "date" : "2014",
              "url" : "tba.com"
          },
          {
              "title" : "Intro to jQuery",
              "school" : "Udacity",
              "date" : "2014",
              "url" : "tba.com"
          },
          {
              "title" : "Programming Foundations with Python",
              "school" : "Udacity",
              "date" : "2014",
              "url" : "tba.com"
          },
          {
              "title" : "Into to Data Science",
              "school" : "Udacity",
              "date" : "2014",
              "url" : "tba.com"
          },
          {
              "title" : "Intro to Machine Learning",
              "school" : "Udacity",
              "date" : "2014",
              "url" : "tba.com"
          }
      ]
}

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

displayHeader();
displayWork();
displayProjects();
displayEducation();
displayOnline();
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});
