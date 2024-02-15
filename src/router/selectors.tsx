import { RootState } from './store';

// Data
export const getData = (state: RootState) => {
   return state?.data;
};

export const getSmileyList = (state: RootState) => {
   return getData(state).data.smileyList;
};

export const getHome = (state: RootState) => {
   return getData(state).data.home;
};

export const getAbout = (state: RootState) => {
   return getData(state).data.about;
};

export const getWork = (state: RootState) => {
   return getData(state).data.work;
};

export const getContact = (state: RootState) => {
   return getData(state).data.contact;
};

// Settings
export const getTheme = (state: RootState) => {
   return state?.settings.theme;
};

export const getLangue = (state: RootState) => {
   return state?.settings.langue;
};
export const getTimer = (state: RootState) => {
   return state?.settings.timer;
};
