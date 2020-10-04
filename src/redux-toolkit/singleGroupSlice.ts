import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import groupController from '../services/groups-controller';

const loadGroupInfo = createAsyncThunk('groups/loadGroupInfo', async (id: number) => {
  const response = await groupController.apiSingleGroup(id);
  return response;
});

const loadGroupPosts = createAsyncThunk('groups/loadGroupPosts', async (id: number) => {
  const response = await groupController.apiGroupInfo(id);
  return response;
});

const initialState = {
  groupInfo: [],
  posts: [],
  error: null,
  loading: false,
};
const singleGroupSlice = createSlice({
  name: 'groupInfo',
  initialState,
  reducers: {
    getGroupInfo: (state, action) => ({
      ...state,
      groupInfo: action.payload,
    }),
    getGroupPosts: (state, action) => ({
      ...state,
      posts: action.payload,
    }),
  },
  extraReducers: {
    [loadGroupInfo.pending.type]: (state) => ({ ...state, loading: true }),
    [loadGroupInfo.fulfilled.type]: (state, action) => ({
      ...state,
      groupInfo: action.payload,
      loading: false,
    }),
    [loadGroupInfo.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
    [loadGroupPosts.pending.type]: (state) => ({ ...state, loading: true }),
    [loadGroupPosts.fulfilled.type]: (state, action) => ({
      ...state,
      posts: action.payload,
      loading: false,
    }),
    [loadGroupPosts.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
});

export const { getGroupInfo, getGroupPosts } = singleGroupSlice.actions;
export { loadGroupInfo, loadGroupPosts };

export const singleGroupsReducer = singleGroupSlice.reducer;
