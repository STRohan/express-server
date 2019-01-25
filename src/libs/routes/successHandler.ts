export function successHandler(message: string, data: any, status: number) {

  return {
    message: message || "success",
    data: data || "data",
    status: status || 200
  };
}
