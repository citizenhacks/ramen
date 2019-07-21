import { GetterTree } from 'vuex';
import { ProfileState } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ProfileState, RootState> = {
    fullName(state): string {
        const { user } = state;
        const id = (user && user.id) || '';
        return id;
    }
};
