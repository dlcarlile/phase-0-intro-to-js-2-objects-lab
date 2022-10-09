// Write your solution in this file!

const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway'
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const copyofemployees = { ...employee };

    copyofemployees[key] = value;

    return copyofemployees;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key){
    const copyofemployees = employee
    
    copyofemployees[key] =  "12 Broadway"

    return copyofemployees

}

function deleteFromEmployeeByKey(employee,name,Sam){
    const copyofemployees = {...employee}

    copyofemployees[name] = Sam

    delete name.Sam

    return copyofemployees

}

function destructivelyDeleteFromEmployeeByKey(employee1,name,Sam){
    

    const employee = {...employee1}

    employee[name] = Sam

    delete employee1.name

    return employee1
    
    
    
    

}

