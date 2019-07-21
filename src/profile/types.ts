export interface User {
    id: string;
    isAttending: boolean;
    phone: string;
    dietaryRestrictions: string;
    isWaiverTruthful: boolean;
    waiver: string;
    resume: string;
}

export interface ProfileState {
    user?: User;
    error: boolean;
}
