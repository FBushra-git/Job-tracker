// Job data entry
const jobs = [
  {id:1, company:"Google", position:"Frontend Developer", location:"Remote", type:"Full Time", salary:"$5000", description:"Developing scalable UI systems.", status:"not-applied"},
    {id:2, company:"Amazon", position:"Backend Engineer", location:"USA", type:"Full Time", salary:"$6000", description:"Building cloud infrastructure services.", status:"not-applied"},
    {id:3, company:"Microsoft", position:"Software Engineer", location:"Canada", type:"Hybrid", salary:"$5500", description:"Enterprise application development.", status:"not-applied"},
    {id:4, company:"Meta", position:"React Developer", location:"Remote", type:"Contract", salary:"$4500", description:"Creating interactive social platforms.", status:"not-applied"},
    {id:5, company:"Tesla", position:"UI Engineer", location:"USA", type:"Full Time", salary:"$5200", description:"Designing vehicle dashboards.", status:"not-applied"},
    {id:6, company:"Netflix", position:"JavaScript Engineer", location:"Remote", type:"Full Time", salary:"$5300", description:"Enhancing streaming UI.", status:"not-applied"},
    {id:7, company:"Spotify", position:"Web Developer", location:"Sweden", type:"Hybrid", salary:"$4800", description:"Improving music experience.", status:"not-applied"},
    {id:8, company:"Airbnb", position:"Frontend Engineer", location:"Remote", type:"Full Time", salary:"$5100", description:"Building booking platforms.", status:"not-applied"}
];

// if tab active

let currentTab = "all";
const jobContainer = document.getElementById("job-container");

// Job render Function

function renderJobs(){
  jobContainer.innerHTML ="";

  const filteredJobs = jobs.filter(job => {
    if(currentTab === "all")
      return true;
    return job.status === currentTab;
  });

  // tab count update
  document.getElementById("tab-job-count").innerText = filteredJobs.length + " Jobs";

  // Jodi Job na thake 0
  if(filteredJobs.length === 0){
    jobContainer.innerHTML = `<div class="flex flex-col items-center justify-center py-20 col-span-full"><img src="jobs.png" class="w-40 mb-6">
    <h3 class="text-2xl font-bold text-gray-700">No Jobs Available</h3>
    <p class="text-gray-500 mt-2">Check back soon for new job opportunities</p></div>`;
    return;
  }

  // jobs card creat

  filteredJobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "relative bg-white p-6 rounded-xl";

    card.innerHTML =
    `
    <button class = "absolute top-4 right-4 text-gray-400 hover:text-red-500 delete-btn">🗑️</button>

    <div class="mb-3">
    <span class="badge status-badge">Not Applied</span></div>
    
    
    <h3 class= "text-xl font-bold text-blue-900">
    ${job.position}</h3>

    <p class="font-semibold mt-1">
    ${job.company}</p>

    <p class="text-sm text-gray-500 mt-1">
          ${job.location} • ${job.type}
        </p>

        <p class="text-sm font-medium mt-1">
          Salary: ${job.salary}
        </p>

        <p class="text-sm text-gray-600 mt-3">
          ${job.description}
        </p>

         <div class="flex gap-3 mt-6">

          <button class="interview-btn px-5 py-2 rounded-lg text-sm font-semibold border border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition">
            Interview
          </button>

          <button class="rejected-btn px-5 py-2 rounded-lg text-sm font-semibold border border-red-500 text-red-600 hover:bg-red-500 hover:text-white transition">
            Rejected
          </button>

        </div>
      `;

      // badge update 
      const badge = card.querySelector(".status-badge");
      if(job.status === "interview"){
        badge.textContent = "Interview";
        badge.className="badge bg-green-100 text-green-700 status-badge";
      }
      else if(job.status === "rejected"){
        badge.textContent="Rejected";
        badge.className = "badge bg-red-100 text-red-700 status-badge";
      }
      // events

      card.querySelector(".interview-btn").addEventListener("click",()=>{
        job.status="interview";
        updateDashboard();
        renderJobs();
      });

       card.querySelector(".rejected-btn").addEventListener("click",()=>{
        job.status="rejected";
        updateDashboard();
        renderJobs();
      });

       card.querySelector(".delete-btn").addEventListener("click",()=>{
        const index = jobs.findIndex(j=>j.id===job.id);
        if(index != -1){
          jobs.splice(index,1);
        }
        updateDashboard();
        renderJobs();
      });

      jobContainer.appendChild(card);

    });
  
   
}
 // dashboard
   function updateDashboard(){
    document.getElementById("total-count").innerText= jobs.length;

    document.getElementById("interview-count").innerText =jobs.filter(j=>j.status==="interview").length;

    document.getElementById("rejected-count").innerText =jobs.filter(j=>j.status==="rejected").length;
   }
 


  // first loading
  updateDashboard();
  renderJobs();


