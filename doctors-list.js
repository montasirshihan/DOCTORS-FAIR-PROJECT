document.addEventListener("DOMContentLoaded", () => {
  // Booking form submission
  const filterForm = document.getElementById("filterForm");

  filterForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const district = document.getElementById("district").value;
    const hospital = document.getElementById("hospital").value;
    const specialist = document.getElementById("specialist").value;
    const day = document.getElementById("day").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (district && hospital && specialist && day && date && time) {
      alert(
        `✅ Appointment booked!\n\nDistrict: ${district}\nHospital: ${hospital}\nSpecialist: ${specialist}\nDay: ${day}\nDate: ${date}\nTime: ${time}`
      );
    } else {
      alert("⚠️ Please fill in all the fields to book an appointment.");
    }
  });

  // Doctor search form
  const searchForm = document.querySelector("main form");
  const searchInput = document.getElementById("name");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const doctorName = searchInput.value.trim();

    if (doctorName) {
      alert(`🔍 Searching for Doctor: ${doctorName}`);
    } else {
      alert("⚠️ Please enter a doctor's name.");
    }
  });

  // Animate patient reviews
  const reviewItems = document.querySelectorAll("main ul li");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  reviewItems.forEach((item) => {
    observer.observe(item);
  });
});
