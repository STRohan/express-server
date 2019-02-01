export function successHandler(message: string, nData: any, status: number) {
  return {
    data: nData || 'data',
    message: message || 'success',
    status: status || 200,
  };
}
