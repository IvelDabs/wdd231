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

  // Function to display courses
  function displayCourses(filter = "all") {
    const filteredCourses = courses.filter((course) => {
      if (filter === "all") return true;
      return course.type === filter;
    });

    // Clear current display
    courseList.innerHTML = "";

    // Display filtered courses
    filteredCourses.forEach((course) => {
      const card = document.createElement("div");
      card.className = `course-card ${course.completed ? "completed" : ""}`;
      card.textContent = course.code; // Only show the course code
      courseList.appendChild(card);
    });
  }

  // Add click handlers to filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      // Update active button
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Update display
      displayCourses(filter);
    });
  });

  // Initial display
  displayCourses();
});
