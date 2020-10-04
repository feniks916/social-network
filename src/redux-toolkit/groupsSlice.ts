import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import groupController from '../services/groups-controller';

const loadGroups = createAsyncThunk('groups/loadGroups', async (page: number) => {
  const response = await groupController.apiGroups(page);
  return response;
});

const loadGroupInfo = createAsyncThunk('groups/loadGroupInfo', async (id: number) => {
  const response = await groupController.apiGroupInfo(id);
  return response;
});

const initialState = {
  groups: [],
  memberOf: [],
  error: null,
  loading: false,
};
const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    getGroups: (state, action) => ({
      ...state,
      groups: action.payload,
    }),
    getGroupInfo: (state, action) => ({
      ...state,
      memberOf: action.payload,
    }),
  },
  extraReducers: {
    [loadGroups.pending.type]: (state) => ({ ...state, loading: true }),
    [loadGroups.fulfilled.type]: (state, action) => ({
      ...state,
      groups: action.payload,
      loading: false,
    }),
    [loadGroups.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
    [loadGroupInfo.pending.type]: (state) => ({ ...state, loading: true }),
    [loadGroupInfo.fulfilled.type]: (state, action) => ({
      ...state,
      memberOf: action.payload,
      loading: false,
    }),
    [loadGroupInfo.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
});

export const { getGroups, getGroupInfo } = groupsSlice.actions;
export { loadGroups, loadGroupInfo };

export const groupsReducer = groupsSlice.reducer;
