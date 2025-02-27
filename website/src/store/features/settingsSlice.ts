import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  theme: 'light' | 'dark';
  language: 'en' | 'zh-CN' | 'zh-HK';
  notifications: boolean;
}

const initialState: SettingsState = {
  theme: 'light',
  language: 'en',
  notifications: true,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<'en' | 'zh-CN' | 'zh-HK'>) => {
      state.language = action.payload;
    },
    toggleNotifications: (state) => {
      state.notifications = !state.notifications;
    },
  },
});

export const { setTheme, setLanguage, toggleNotifications } = settingsSlice.actions;

export default settingsSlice.reducer;
