var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

// Object.setPrototypeOf(employees, Object.prototype);
// console.log(employees);

function Employee(name, empNumber, currentSalary, rating) {
	this.name = name;
	this.empNumber = empNumber;
	this.currentSalary = currentSalary;
	this.rating = rating;
}

atticus = new Employee(atticus[0], atticus[1], atticus[2], atticus[3]);
jem = new Employee(jem[0], jem[1], jem[2], jem[3]);
boo = new Employee(boo[0], boo[1], boo[2], boo[3]);
scout = new Employee(scout[0], scout[1], scout[2], scout[3]);

var employees = [atticus, jem, boo, scout];
console.log(employees);

// function empConvert(array) {
// 	for(var i = 0; i < array.length; i++) {
// 		this.name = array[i][0];
// 		this.empNumber = array[i][1];
// 		this.currentSalary = array[i][2];
// 		this.rating = array[i][3];
// 	}
// 	console.log(employees);
// }

// empConvert(employees);
// Why can't I figure out how to pass an array of arrays into a constructor?!!!


function calculateSTI(empInfo) {
	var name = empInfo.name;
	var empNumber = empInfo.empNumber;
	var currentSalary = Math.round(parseFloat(empInfo.currentSalary));
	var rating = empInfo.rating;
	
	var processedEmployee;
	var bonus = 0;
	var bonusPercentage = 0;
	var adjSalary = currentSalary;	// base + STI
	var totalBonus = bonus;

	// calc sti
	switch(rating) {
		case 0:
		case 1:
		case 2:
			bonusPercentage = 0;
			break;
		case 3:
			bonusPercentage = .04;
			break;
		case 4:
			bonusPercentage = .06;
			break;
		case 5:
			bonusPercentage = .10;
			break;
		default:
			bonusPercentage = 0;
	}

	bonusPercentage = adjustBonusPercentage(empNumber, bonusPercentage, currentSalary);
	
	bonus = Math.round(bonusPercentage * currentSalary);
	adjSalary = currentSalary + bonus;

	// build processed array
	function EmployeeSti(name, bonusPercentage, adjSalary, bonus) {
		this.name = name;
		this.bonusPercentage = bonusPercentage;
		this.adjSalary = adjSalary;
		this.bonus = bonus;
	}
	processedEmployee = new EmployeeSti(name, bonusPercentage, adjSalary, bonus);

	// processedEmployee.name = name;
	// processedEmployee. = bonusPercentage;

	// processedEmployee[2] = adjSalary;
	// processedEmployee[3] = bonus;

	return processedEmployee;
}

function adjustBonusPercentage(empNumber, bonusPercentage, currentSalary) {
	if(empNumber == 4) {
		bonusPercentage += .05;
	}

	if(currentSalary > 65000) {
		bonusPercentage -= .01;
	}

	if(bonusPercentage > .13) {
		bonusPercentage = .13;
	}

	return Math.round(bonusPercentage * 100) / 100;
}


for(var i = 0; i < employees.length; i++) {
	
	console.log(calculateSTI(employees[i]));

}