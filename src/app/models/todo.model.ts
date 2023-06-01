export class Todo {
  constructor(
    private id: number,
    private createdAt: Date,
    private completedAt: Date | null = null,
    private title: string,
    private isComplete: boolean
  ) {}

  getId() {
    return this.id;
  }
  getCreatedAt() {
    return this.createdAt;
  }
  getCompletedAt() {
    return this.completedAt;
  }
  getTitle() {
    return this.title;
  }
  getIsComplete() {
    return this.isComplete;
  }
}
