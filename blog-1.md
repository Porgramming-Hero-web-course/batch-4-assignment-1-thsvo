[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16981326&assignment_repo_type=AssignmentRepo)

- About Union Types?
  In typescript Union Types allow multiple variable. Its allows more than one type. Union Types symbol like this |
  Example:
  const Rain (value: string | number){
  //function logic
  }

Here we can send argument as string or number. Typescript guarantees that we can use both types.

- Intersection Types

Intersection Types Marge multiple types into one. Intersection Types symbol like this &
Example:

type Student = {
name: string;
age: number;
};

type Stuff = {
StuffId: number;
department: string;
};

type PStudentStuff = Student & Stuff;

const person: PersonEmployee = {
name: "John sinha",
age: 30,
StuffId: 0122,
department: "CSE"
};

Benefits of Using Intersection Types:

- ability to merge multiple types into a single type
- support for function overloading
- Flexible Code Reusablility
- reduce errors because the object meets the requirements of multiple types.
