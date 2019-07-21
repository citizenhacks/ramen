export interface User {
    id: string;
    isAttending: boolean | null;
    phone: string | null;
    dietaryRestrictions: string | null;
    isWaiverTruthful: boolean | null;
    waiver: string | null;
    resume: string | null;
}

export interface ProfileState {
    user?: User;
    error: boolean;
}
