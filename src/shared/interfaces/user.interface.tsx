import { ID } from "@datorama/akita";

export interface User {
    id?: ID;
    firstName: string;
    lastName: string;
    street: string;
    city: string;
    state: string;
    zip: number;
    phone: string;
    birth: string;
    socialSecurity: number; 
    preTax: string;
    coBorrower: boolean;
    status: 'approved' | 'processing' | 'unapproved';
}