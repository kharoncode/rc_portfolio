import { RootState } from './store';

// Data
export const getData = (state: RootState) => {
   return state?.data;
};

export const getAbout = (state: RootState) => {
   return getData(state).data.about;
};

export const getWork = (state: RootState) => {
   return getData(state).data.work;
};

// Settings
export const getTheme = (state: RootState) => {
   return state?.settings.theme;
};

export const getLangue = (state: RootState) => {
   return state?.settings.langue;
};
