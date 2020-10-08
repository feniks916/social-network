import { combineReducers } from '@reduxjs/toolkit';
import { groupsReducer } from './groupsSlice';
import { userReducer } from './userSlice';
import allAudiosReducer from './audios/allAudiosSlice';
import myAudiosReducer from './audios/myAudiosSlice';
import { singleGroupsReducer } from './singleGroupSlice';
import { frendsReducer } from './frendsListSlice';
import { postsReducer } from './postsSlice';
import chatReducer from './chatSlice';
import { currentUserReducer } from './currentUserSlice';


const rootReducer = combineReducers({
  user: userReducer,
  groups: groupsReducer,
  singleGroup: singleGroupsReducer,
  currentUser: currentUserReducer,
  posts: postsReducer,
  allAudiosReducer,
  chat: chatReducer,
  frends: frendsReducer,
});

export type TypeRootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
