import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  maintenanceEnabled: true,
  rsvpEnabled: true,
};

const maintenanceModeSlice = createSlice({
  name: 'maintenanceMode',
  initialState,
  reducers: {
    disableMaintenanceMode(state) {
      state.maintenanceEnabled = false;
    },
  },
});

const { reducer: maintenanceMode } = maintenanceModeSlice;

export { maintenanceMode };

export const { disableMaintenanceMode } = maintenanceModeSlice.actions;
