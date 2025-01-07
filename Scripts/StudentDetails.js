// Fetching the data of students from the JSON file containing student data
fetch('../Data/StudentDetails.json')
    .then(Response => Response.json())
    .then(data => {
        const Student_Name = new URLSearchParams(window.location.search).get("Name");
        const Student = data.find(Student => Student.Name === Student_Name);

        if (Student) {

            document.getElementById("DOne_Name").textContent = Student.Name.replace(/([A-Z])g/, " $1").trim();
            document.getElementById("DOne_RollNum").textContent = `${Student.RollNum}`;
            document.getElementById("DOne_AdmNum").textContent = `${Student.AdmNum}`;


            document.title = `${Student.Name.replace(/([A-Z])g/, " $1").trim()} | Student Details`;
        } else {
            document.getElementById("DOne_Name").textContent = "Student Not Found";
            document.getElementById("DOne_RollNum").textContent = "";
            document.getElementById("DOne_AdmNum").textContent = "";
        }
    })

    .catch(error => console.error('Error Loading Student Data', error));