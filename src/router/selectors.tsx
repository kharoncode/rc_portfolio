import { RootState } from './store';

export const getData = (state: RootState) => {
   return state?.data;
};

export const getTheme = (state: RootState) => {
   return state?.settings.theme;
};

export const getLangue = (state: RootState) => {
   return state?.settings.langue;
};
