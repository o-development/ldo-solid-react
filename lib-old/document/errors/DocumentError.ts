export class DocumentError extends Error {
  public readonly status: number;

  constructor(status: number, message?: string) {
    super(message);
    this.status = status;
  }
}
