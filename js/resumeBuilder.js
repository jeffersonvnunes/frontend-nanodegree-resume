var bio = {
    "name": 'Jefferson Ventura Nunes',
    "role": 'Software Developer',
    "contacts":{
        "mobile": "+55 41 99999-1111",
        "email": "jeffersonvnunes@gmail.com",
        "github":"jeffersonvnunes",
        "twitter":"@jverd",
        "location":"Curitiba"
    } ,
    "welcomeMessage": "Welcome. This page is a resume of my skills and previous work experiences.",
    "skills":["Software Development", "SQL", "Delphi", "Design Patterns"],
    "biopic": 'https://avatars2.githubusercontent.com/u/9067137?v=4&s=460',
    "display": function (){
        var formattedName = HTMLheaderName.replace('%data%', this.name),
            formattedRole = HTMLheaderRole.replace('%data%', this.role),
            formattedEmail = HTMLemail.replace('%data%', this.contacts.email),
            formattedTwitter = HTMLtwitter.replace('%data%', this.contacts.twitter),
            formattedGitHub = HTMLgithub.replace('%data%', this.contacts.github),
            formattedLocation = HTMLlocation.replace('%data%', this.contacts.location),
            formattedBioPic = HTMLbioPic.replace('%data%', this.biopic),
            formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', this.welcomeMessage),
            formattedMobile = HTMLmobile.replace('%data%', this.contacts.mobile);

        var header = $('#header');

        header.prepend(formattedWelcomeMsg).prepend(formattedRole).prepend(formattedName).prepend(formattedBioPic);
        $('#topContacts').append(formattedEmail).append(formattedTwitter).append(formattedGitHub).append(formattedLocation).append(formattedMobile);
        $('#footerContacts').append(formattedEmail).append(formattedTwitter).append(formattedGitHub).append(formattedLocation).append(formattedMobile);

        header.append(HTMLskillsStart);
        this.skills.forEach(function (skill) {
            $('#skills').append(HTMLskills.replace('%data%', skill));
        });
    }

};

var work = {
    "jobs":[
        {
            "employer":"Agrotis",
            "title":"Delphi Developer",
            "location":"Curitiba - PR",
            "dates":"03/2017 - in progress",
            "description":"Development of delphi applications"
        },
        {
            "employer":"DB1",
            "title":"Delphi Developer",
            "location":"Maringá - PR",
            "dates":"08/2013 - 02/2017",
            "description":"Development of delphi applications"
        },
        {
            "employer":"HotSoft",
            "title":"Delphi Developer",
            "location":"Maringá - PR",
            "dates":"03/2010 - 08/2013",
            "description":"Development of delphi applications"
        }
    ],
    "display": function () {
        this.jobs.forEach(function (job) {
            $('#workExperience').append(HTMLworkStart);
            $(".work-entry:last").append(HTMLworkEmployer.replace('%data%',job.employer) + HTMLworkTitle.replace('%data%',job.title))
            .append(HTMLworkDates.replace('%data%',job.dates))
            .append(HTMLworkLocation.replace('%data%',job.location))
            .append(HTMLworkDescription.replace('%data%',job.description));
        });
    }
};

var projects = {
    "projects" : [
        {
            "title":"LiveDash",
            "dates":"07/2015 - 02/2017",
            "description":"Dashboards",
            "images":["https://lh3.googleusercontent.com/FJG2JAHEGOnjcML32omdpVlmBD595t5ZNvtWr3f-pAY8mcrNPqZYrIYyf_NULO2yGHCC=h900-rw",
                "https://lh3.googleusercontent.com/A5EesH--_zhGZw_h5iEC8gDlf5bESutbJA7s0-Mx4WVY7l8PYWm6VuHA3pC6e3-Ozw=h900-rw"]

        }
    ],
    "display": function () {
        var projectDOM;

        this.projects.forEach(function (project) {
            $('#projects').append(HTMLprojectStart);
            projectDOM = $(".project-entry:last");
            projectDOM.append(HTMLprojectTitle.replace('%data%',project.title))
            .append(HTMLprojectDates.replace('%data%',project.dates))
            .append(HTMLprojectDescription.replace('%data%',project.description));

            for(var i = 0; i < project.images.length; i++){
                projectDOM.append(HTMLprojectImage.replace('%data%',project.images[i]));
            }
        });
    }
};

var education = {
    "schools":[
        {
            "name":"Unigran",
            "location":"Dourados - MS",
            "degree":"BA",
            "majors":["Computer Science"],
            "dates":"01/2002 - 12/2009",
            "url":"http://www.unigran.br/"
        }
    ],
    "onlineCourses":[
        {
            "title":"Android Development",
            "school":"Courcera",
            "dates":"01/2014 - 01/2015",
            "url":"https://www.coursera.org/"
        }
    ],
    "display": function () {
        var educationDOM;

        this.schools.forEach(function (school) {
            $('#education').append(HTMLschoolStart);
            educationDOM = $('.education-entry:last');
            educationDOM.append(HTMLschoolName.replace('%data%',school.name) + HTMLschoolDegree.replace('%data%',school.degree))
            .append(HTMLschoolDates.replace('%data%',school.dates))
            .append(HTMLschoolLocation.replace('%data%',school.location));

            for(var m = 0; m < school.majors.length; m++){
                educationDOM.append(HTMLschoolMajor.replace('%data%',school.majors[m]));
            }
        });

        this.onlineCourses.forEach(function (online) {
            educationDOM.append(HTMLonlineClasses)
            .append(HTMLonlineTitle.replace('%data%',online.title) + HTMLonlineSchool.replace('%data%',online.school))
            .append(HTMLonlineDates.replace('%data%',online.dates))
            .append(HTMLonlineURL.replace('%data%',online.url));
        });
    }
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);



