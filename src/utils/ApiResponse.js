class ApiResponse {
  constructor(statusCode, data, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.timestamp = new Date().toISOString();
    this.success = this.isSuccessful();
  }

  isSuccessful() {
    return this.statusCode >= 200 && this.statusCode < 400;
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      data: this.data,
      message: this.message,
      timestamp: this.timestamp,
      success: this.success,
    };
  }
}

export { ApiResponse };
