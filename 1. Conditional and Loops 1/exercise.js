function calculateSalary(input) {
    switch (input) {
      case "ceo":
        return "2200€";
        break;
      case "manager":
        return "1800€";
        break;
      case "cto":
        return "1800€";
        break;
      case "developer":
        return "1500€";
        break;
      default:
        return "1000€";
        break;
    }
  }
  
  const ceoSalary = calculateSalary("ceo");
  const managerSalary = calculateSalary("manager");
  const ctoSalary = calculateSalary("cto");
  const developerSalary = calculateSalary("developer");
  const otherSalary = calculateSalary("other");
  
  console.log("The CEO salary is " + ceoSalary);
  console.log(managerSalary);
  console.log(ctoSalary);
  console.log(developerSalary);
  console.log(otherSalary);