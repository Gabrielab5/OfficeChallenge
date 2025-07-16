
class Document{
    constructor(EmployeeName){
        this._EmployeeName = EmployeeName
    }
}

class Cleaner{
    constructor(name){
        this._name = name
    }

    clean(){
        console.log("Clean")
    }
}

class Employee{
    constructor(name){
        this._name = name
    }

    work(office){
        for(let i=0;i<10;i++)
            office.documents(push(new Document(this._name)))
    }
}

class Manager{
    constructor(employees,name){
        this._name = name
        this._employees = []
    }

    hireEmployee(name){
        this._employees.push(new Employee(name))
    }
    
    askEmployeesToWork(office){
        this._employees.forEach(employee => {
            employee.work(office)
        })
    }
}

class Office{

    constructor(){
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }

    hireCleaner(name){
        this._cleaners.push(new Cleaner(name))
    }

    hireManager(name){
        this._managers.push(new Manager(name))
    }

    startWorkDay(){
        this._managers.forEach(manager => {
            manager.askEmployeesToWork(this)
        })

        this._cleaners.forEach(cleaner => {
            cleaner.clean()
        })
    }
}

module.exports = { Document, Cleaner, Employee, Manager, Office }


