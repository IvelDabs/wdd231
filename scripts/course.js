// Course data array
const courses = [
  {
    code: "CSE 110",
    name: "Programming Building Blocks",
    credits: 3,
    completed: true,
    type: "cse",
  },
  {
    code: "WDD 130",
    name: "Web Fundamentals",
    credits: 3,
    completed: true,
    type: "wdd",
  },
  {
    code: "CSE 111",
    name: "Programming with Functions",
    credits: 3,
    completed: true,
    type: "cse",
  },
  {
    code: "CSE 210",
    name: "Programming with Classes",
    credits: 3,
    completed: false,
    type: "cse",
  },
  {
    code: "WDD 131",
    name: "Web Design Development",
    credits: 3,
    completed: true,
    type: "wdd",
  },
  {
    code: "WDD 231",
    name: "Frontend Development II",
    credits: 3,
    completed: false,
    type: "wdd",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const courseList = document.getElementById("courseList");
  const filterBtns = document.querySelectorAll(".filter-btn");

  // Create and append credits display
  const creditDisplay = document.createElement("p");
  creditDisplay.id = "totalCredits";
  creditDisplay.className = "credit-total";
  document.querySelector(".certificate-section").appendChild(creditDisplay);

  // Function to display courses and update credits
  function displayCourses(filter = "all") {
    // Filter courses
    const filteredCourses = courses.filter((course) => {
      if (filter === "all") return true;
      return course.type === filter;
    });

    // Calculate total credits using reduce
    const totalCredits = filteredCourses.reduce(
      (sum, course) => sum + course.credits,
      0
    );
    creditDisplay.textContent = `Total Credits: ${totalCredits}`;

    // Clear and display courses
    courseList.innerHTML = "";
    filteredCourses.forEach((course) => {
      const card = document.createElement("div");
      card.className = `course-card ${course.completed ? "completed" : ""}`;
      card.textContent = course.code;
      courseList.appendChild(card);
    });
  }

  // Add click handlers to filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      displayCourses(btn.dataset.filter);
    });
  });

  // Initial display
  displayCourses();
});
