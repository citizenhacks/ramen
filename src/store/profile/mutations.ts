import { MutationTree } from 'vuex';
import { ProfileState, User } from './types';

export const mutations: MutationTree<ProfileState> = {
    setProfile(state, payload: User) {
        if (payload && payload.id) {
            state.error = false;
            state.user = payload;
        } else {
            state.error = true;
            state.user = undefined;
        }
    },
    profileError(state) {
        state.error = true;
        state.user = undefined;
    },
};
