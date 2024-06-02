function calculateAge() {
    // Get input values
    var birthDate = new Date(document.getElementById("birth-date").value);
    var currentDate = new Date(document.getElementById("current-date").value);
  
    // Calculate age
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    var monthDiff = currentDate.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
      age--;
    }
  
    // Display result
    document.getElementById("result").innerHTML = "Your Age is : " + age;
  }
  