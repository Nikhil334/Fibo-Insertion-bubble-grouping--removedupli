let students= [
    {
        name : "Nikhil",
        rollno :151,
        department:"CSE" 
    },
    {
        name : "Mayank",
        rollno :137,
        department:"CSE" 
    },
    {
        name : "Bharat",
        rollno :102,
        department:"IT" 
    },
    {
        name : "Himanshu",
        rollno :50,
        department:"Mech" 
    },
    {
        name : "Neeraj",
        rollno :153,
        department:"IT" 
    },
    {
        name : "Rohan",
        rollno :151,
        department:"Mech" 
    },
    {
        name : "Harshit",
        rollno :104,
        department:"CSE" 
    }
  ];

  function group(students, department) {
    return students.reduce((acc, curr)=> {
      let key = curr[department];
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(curr);
      return acc;
    }, {});
  }
  let carsObject = group(students, "department");
  console.log(carsObject);