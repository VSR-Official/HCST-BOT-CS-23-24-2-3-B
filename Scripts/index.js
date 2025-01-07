// Students List Array
const Students = [
    "Mohak Kumar Singh", "Mradul Upadhyay", "Muhammad Hasan", "Naman Kumar Gupta", "Naresh Kumar", "Nikhil Bansal", "Nikki Saraswat", "Nishant Sharma", "Nishkarsh Jain", "Pooja",
    "Pooja Sharma", "Prachi Gupta", "Pratham Sharma", "Prince Agarwal", "Priya", "Priyanaka Chauhan", "Puneet Yadav", "Radha Shakya", "Raj Singh", "Rajat Yadav",
    "Rakim Jameel", "Rashmi Bhadauria", "Rishabh Rajauriya", "Rishika Mishra", "Rishika Saxena", "Ritika Sharma", "Rohit Upadhyay", "Sachin Yadav", "Sakshi Gautam", "Sakshi Tomar",
    "Saloni Sharma", "Sambhav Sharma", "Samman Khan", "Sara Singh", "Sarthak Kaushik", "Saurav Shrama", "Shahzar Ali", "Shivam Kumar", "Shivam Kumar", "Shivangi Rajpoot",
    "Shivansh Shrivastav", "Shreyansh Kumar", "Shruti", "Sneha", "Sonakshi Chaturvedi", "Sumit Goyal", "Tanishka", "Tanya Rawat", "Tarun Kumar", "Tarun Saxena",
    "Uday Pratap Singh", "Vaibhav Gautum", "Vanisha Gupta", "Vansh Saxena", "Vikrant Kumar", "Vishakha Singh", "Vishal Singhal", "Vivek Kashyap", "Vivek Kumar", "Yash Bhardwaj",
    "Yash Vardhan", "Yatharth Raghuvanshi", "Arnav Dube", "Gauri Saxena", "Rishabh Jain", "Rishikant Chaturvedi", "Harsh Sharma", "Pankaj Singh",
];
// Script Break




// Accessing Student List Container In index.html
const Student_List = document.getElementById("Dynamic_StdList");
// Script Break




// Generating Links Dynamically
let Std_Count = 1;
Students.forEach(Name => {
    const Link = document.createElement("a");
    Link.href = `Pages/StudentDetails.html?Name=${encodeURIComponent(Name)}`;
    Link.textContent = `${Std_Count}. ${Name}`;
    Student_List.appendChild(Link);
    Link.setAttribute("class", "Std_Name_Link");
    Std_Count++;
});