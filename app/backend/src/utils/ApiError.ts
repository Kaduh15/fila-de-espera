export default class ApiError extends Error {
  public status: number;
  details: any;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}