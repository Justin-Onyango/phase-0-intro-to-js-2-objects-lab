// Write your solution in this file!
const employee= {
    name:'John',
    streetAddress:'87 West',
};
function updateEmployeeWithKeyAndValue(object,key,value) {
    return {
        ...employee, 
        name :'Sam', 
        streetAddress :'11 Broadway',
    } 
}

function destructivelyUpdateEmployeeWithKeyAndValue(object,key,value) {
    employee[key]='Sam'
    employee[key]='12 Broadway'
    return employee;
}
function deleteFromEmployeeByKey(object,key,value) {
    return {
        ...employee,
        name :undefined
        
    }
}
function destructivelyDeleteFromEmployeeByKey(object,key,value) {
    employee[key]='name'
    employee[key]=undefined
    return employee;
}