export class ApiResponse<T> {
    StatusCode:any;
    isSuccess?:boolean;
    errorMessages:[]=[];
    data?:T ;
}
