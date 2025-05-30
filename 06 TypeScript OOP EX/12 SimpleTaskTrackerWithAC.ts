class Task {
    public title: string
    public description: string
    private completed: boolean
    private _createdBy: string

    constructor(title: string, description: string, createdBy: string, completed: boolean = false) {
        this.title = title
        this.description = description
        this._createdBy = createdBy
        this.completed = completed
    }

    public get createdBy(): string {
        return this._createdBy;
    }

    public toggleStatus(): void {
        this.completed = !this.completed;
    }

    public getDetails(): string {
        return `Task: ${this.title} - ${this.description} - ${this.completed ? 'Completed' : 'Pending'}`
    }

    static createSampleTasks(): Task[] {
        return [
            new Task("Write report", "Prepare monthly performance report", "Alice"),
            new Task("Fix bugs", "Resolve open issues in tracker", "Bob")
        ];
  }

}


const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
task1.toggleStatus();
console.log(task1.getDetails());


const task2 = new Task("Clean room", "Clean the room", "Mary");
console.log(task2.getDetails());


const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));
