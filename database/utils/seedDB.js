/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imageUrl: "https://s29068.pcdn.co/wp-content/uploads/main-campus-768x768-alt.jpg.optimal.jpg"
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imageUrl: "https://macaulay.cuny.edu/wp-content/uploads/2016/07/qc10_bg_000056-1920x1080.jpg"
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imageUrl: "https://www.brooklyn.edu/wp-content/uploads/2022/06/50-50-4.jpg"
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Smith",
	  	email: "joe.smith@example.com", 
  		gpa: 3.5, 
		campusId: 1,
		imageUrl: "https://media.licdn.com/dms/image/v2/D4E03AQE4Ct5FKPUxWA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1694455936602?e=2147483647&v=beta&t=N1bTkrDeAfPUpYg8lMvyG5voQzNo6LkaQlOMm2aIFsw"
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      	lastname: "Johnson",
		email: "mary.johnson@google.com",
		gpa: 3.8,
		campusId: 2,
		imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/University_of_Maryland_seal.svg/1200px-University_of_Maryland_seal.svg.png"
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;