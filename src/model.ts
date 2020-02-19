export interface employee{
    id:number;
    email:string;
    username:string;
}

export interface department{
    id:number;
    collegeid:string;
    departmentid:string;
    departmentname:string;
}

export interface course{
    id:number;
    collegeid:string;
    departmentid:string;
    courseid:string;
    coursename:string;
}