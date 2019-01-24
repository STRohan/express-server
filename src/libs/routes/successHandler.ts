export function successHandler(message: string, data: any, status: number) {
  console.log("in successHandler");
  return {
    message: message || "success",
    data: data || "data",
    status: status || 200
  };
}
