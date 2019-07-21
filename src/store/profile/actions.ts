import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProfileState, User } from './types';
import { RootState } from '../../types';


export const actions: ActionTree<ProfileState, RootState> = {
    initWithId({ commit }, id: string): any {
        const user: User = {
            id,
            isAttending: null,
            phone: null,
            dietaryRestrictions: null,
            isWaiverTruthful: null,
            waiver: null,
            resume: null,
        };
        commit('setProfile', user);
    }
};
