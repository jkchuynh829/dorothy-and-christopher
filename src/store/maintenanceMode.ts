import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  enabled: false,
};

const maintenanceModeSlice = createSlice({
  name: 'maintenanceMode',
  initialState,
  reducers: {
    disableMaintenanceMode(state) {
      state.enabled = false;
    },
  },
});

const { reducer: maintenanceMode } = maintenanceModeSlice;

export { maintenanceMode };

export const { disableMaintenanceMode } = maintenanceModeSlice.actions;
