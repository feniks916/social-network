import { combineReducers } from '@reduxjs/toolkit';
import { groupsReducer } from './groupsSlice';
import { userReducer } from './userSlice';
import allAudiosReducer from './audios/allAudiosSlice';
import myAudiosReducer from './audios/myAudiosSlice';
import { singleGroupsReducer } from './singleGroupSlice';

const rootReducer = combineReducers({
  user: userReducer,
  groups: groupsReducer,
  singleGroup: singleGroupsReducer,
  allAudiosReducer,
});

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
