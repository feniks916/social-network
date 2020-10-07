import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import groupController from '../services/groups-controller';
import { IGroup, IGroupUser, IGroupRequestProps } from '../types/group';

const loadGroups = createAsyncThunk('groups/loadGroups', async (page: number) => {
  const response = await groupController.apiGroups(page);
  return response;
});

const loadGroupInfo = createAsyncThunk('groups/loadGroupInfo', async (id: number) => {
  const response = await groupController.apiGroupInfo(id);
  return response;
});

const joinGroup = createAsyncThunk('groups/joinGroup', async (props : IGroupRequestProps) => {
  const response = await groupController.apiJoinGroup(props);
  return [response, props.groupId];
});

const leaveGroup = createAsyncThunk('groups/leaveGroup', async (props : IGroupRequestProps) => {
  const response = await groupController.apiLeaveGroup(props);
  return [response, props.groupId];
});

const loadAllUsers = createAsyncThunk('groups/loadUsers', async (props : IGroupRequestProps) => {
  const response = await groupController.apiLoadUsers(props);
  // Переделать когда появится возможность сразу получать все группы юзера
  const res = response.some((element : IGroupUser) => element.userId === props.userId);
  if (res) { return props.groupId; }
  return null;
});

interface groups {
  groups: IGroup[];
  memberOf: number[];
  error: null | Error;
  loading: boolean;
}

const initialState: groups = {
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
    getAllUsers: (state, action) => ({
      ...state,
      memberOf: action.payload,
    }),
    _joinGroup: (state) => ({
      ...state,
    }),
    _leaveGroup: (state) => ({
      ...state,
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

    [joinGroup.pending.type]: (state) => ({ ...state, loading: true }),
    [joinGroup.fulfilled.type]: (state, action) => ({ ...state,
      memberOf: [...state.memberOf, action.payload[1]],
      loading: false }),
    [joinGroup.rejected.type]: (state, action) => ({ ...state,
      error: action.error,
      loading: false }),

    [leaveGroup.pending.type]: (state) => ({ ...state, loading: true }),
    [leaveGroup.fulfilled.type]: (state, action) => {
      const tempArr = [...state.memberOf];
      tempArr.splice(tempArr.indexOf(action.payload[1]), 1);
      return { ...state, memberOf: tempArr, loading: false };
    },
    [leaveGroup.rejected.type]: (state, action) => ({ ...state,
      error: action.error,
      loading: false }),

    [loadAllUsers.pending.type]: (state) => ({ ...state, loading: true }),
    [loadAllUsers.fulfilled.type]: (state, action) => {
      // Переделать когда появится возможность сразу получать все группы юзера
      if (state.memberOf.some((element : number) => (element === action.payload))) {
        return { ...state,
          loading: false };
      }
      if (action.payload) {
        return { ...state, memberOf: [...state.memberOf, action.payload], loading: false };
      }
      return { ...state,
        loading: false };
    },
    [loadAllUsers.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
});

export const { getGroups, _joinGroup, _leaveGroup, getAllUsers } = groupsSlice.actions;
export { loadGroups, loadGroupInfo, joinGroup, leaveGroup, loadAllUsers };

export const groupsReducer = groupsSlice.reducer;
