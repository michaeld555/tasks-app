export interface Profile {
    name: string;
    email: string;
    username: string;
    profile_photo: string;
    user_id: number;
    redmine_id: number;
    redmine_token: string;
    notifications: boolean;
    alerts: boolean;
}