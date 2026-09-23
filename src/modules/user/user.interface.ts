
export enum UserRole {
    ADMIN = "admin",
    AGENT = "agent",
    USER = "user",
}

export interface IUser {
    name: string;
    email: string;
    password: string;
    age: number;
    role?: UserRole;
    is_active?: boolean;
}