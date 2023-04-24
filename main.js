const jobs = [
    {
        image: "images/software engineer.svg",
        title: "Software Engineer",
        jobLocation : "India",
        jobCompany : "Google",
        time :"Full-time",
        Overview :"Looks after the design, development, testing, and maintenance of software applications",
        jobRequirement : "C++/C/Java",
        workInnvolved : "Coding",
        link: "#"
    },


    {
        image:"images/Sales representative.svg" ,
        title: "Sales Representative",
        jobLocation :"New Zealand",
        jobCompany : "KPMG",
        time :"Full-time",
        Overview :"Sells products or services for a company and represents their brand",
        jobRequirement :"Microsoft Excel" ,
        workInnvolved : "Regulating sales of the company",
        link: "#"
    },


    {
        image:"images/Project manager.svg" ,
        title:"Project Manager" ,
        jobLocation : "India",
        jobCompany : "P&G",
        time :"Part-time",
        Overview :"A project manager is a professional who organises, plans, and executes projects while working within restraints like budgets and schedules",
        jobRequirement : "Microsoft Excel",
        workInnvolved : "Leading teams and communicating with stakeholders",
        link: "#"
    },
    {
        image:"images/Sales representative.svg" ,
        title: "Sales Representative",
        jobLocation : "New Zealand",
        jobCompany :"KPMG" ,
        time :"Part-time",
        Overview :"Sells products or services for a company and represents their brand",
        jobRequirement : "Microsoft Excel",
        workInnvolved : "Regulating sales of the company",
        link: "#"
    },
    {
        image: "images/Marketing Manager.svg",
        title:"Marketing Manager" ,
        jobLocation : "USA",
        jobCompany :"American Express" ,
        time : "Full-time",
        Overview :"Marketing manager is responsible for leading the marketing efforts for a business, service, or product",
        jobRequirement : "Microsoft Word",
        workInnvolved : "Estimate market demand and lead a marketing team",
        link: "#"
    },
    {
        image:"images/data scientist.svg" ,
        title: "Data Scientist",
        jobLocation : "USA",
        jobCompany : "Google" ,
        time :"Full-time",
        Overview :"A data scientist is an analytics professional who is responsible for collecting,analyzing and interpreting data to help drive decision-making in an organization",
        jobRequirement :"Python" ,
        workInnvolved : "Collecting and interpreting data",
        link: "#"
    }

]

const jobsContainer = document.querySelector(".jobs-list-container .jobs");
const jobSearch = document.querySelector(".jobs-list-container .job-search");

let searchTerm = " ";


const createJobListingCards = () =>{
    jobsContainer.innerHTML = " ";



    jobs.forEach(job =>{
        if(job.title.toLowerCase().includes(searchTerm.toLocaleLowerCase())||job.time.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");

        let image = document.createElement("img");
        image.src = job.image;

        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");

        let location = document.createElement("span")
        location.innerHTML = job.jobLocation;
        location.classList.add("job-location");

        let company = document.createElement("span")
        company.innerHTML = job.jobCompany;
        company.classList.add("job-company");

        let time = document.createElement("div")
        time.innerHTML = job.time;
        time.classList.add("time");

        let Overview = document.createElement("span")
        Overview.innerHTML = job.Overview;
        Overview.classList.add("job-overview");

        let jobRequirement = document.createElement("span")
        jobRequirement.innerHTML = job.jobRequirement;
        jobRequirement.classList.add("job-requirement");

        let workInnvolved = document.createElement("span")
        workInnvolved.innerHTML = job.workInnvolved;
        workInnvolved.classList.add("work-innvolved");

        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(location);
        jobCard.appendChild(company);
        jobCard.appendChild(time);
        jobCard.appendChild(Overview);
        jobCard.appendChild(jobRequirement);
        jobCard.appendChild(workInnvolved);

        jobsContainer.appendChild(jobCard);
        }
    
    });
};

createJobListingCards();

jobSearch.addEventListener("input", (s) =>{
   searchTerm = s.target.value;

   createJobListingCards();

})