 function Student(name,age,cgpa,language){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.language=language;
    
 }

 var student1= new Student("Shohel",27,3.78,["English","hindi"]);
 document.write(student1.name);