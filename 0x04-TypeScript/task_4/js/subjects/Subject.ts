import { Subjects } from "./Teacher";

export namespace Subjects {
  export class Subject {
    protected teacher?: Teacher;

    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
