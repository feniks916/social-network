import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { cloneDeep } from 'lodash';
import { getUserById, updateUser, getCurrentUser as _getCurrentUser } from '../services/user-controller';
import { IUser } from '../types/user';
import { PostsState } from './postsSlice';
import { StateChat } from './chatSlice';

const getCurrentUser = createAsyncThunk('user/getCurrUser', async () => {
  const response = await _getCurrentUser();
  return response;
});

const loadUser = createAsyncThunk('user/loadUser', async (id: number) => {
  const response = await getUserById(id);
  return response;
});

interface UserState {
  shownUser: null | IUser, // Пользователь, отображаемый на данный момент на экране
  currentUser: null | IUser, // Пользователь, от имени которого произведен логин
  loading: boolean,
  error: null | Error,
}

const initialState: UserState = {
  shownUser: null,
  currentUser: null,
  loading: false,
  error: null,
};

/*
Нужен, чтобы обращаться в createAsyncThunk к thunkApi.
Так как импортировать уже существующий тип стора не выйдет - создание стора зависит от
этого файла, - то приходится делать слепок ещё несуществующего стора.
Если через thunkApi надо будет обратиться куда-то в пределах данного файла -
модифицируете модель ниже.
*/
type CloneRootState = {
  user: UserState;
  posts: PostsState;
  allAudiosReducer: {
    allAudios: never[];
    friends: never[];
    loading: string;
    msgFetchState: string;
  };
  chat: StateChat;
};

const updateStatus = createAsyncThunk<AxiosResponse<IUser>, string, {state:CloneRootState }>('shownUser/updateStatus', async (status: string, thunkApi) => {
  const { user } = thunkApi.getState();
  const newUser = { ...user.currentUser, status, roleName: undefined, activeName: 'Active' } as IUser;
  const response = await updateUser(newUser);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    /*
    LOAD USER
      Загружает текущего отображаемого юзера.
      Использовать для отображения личной страницы другого пользователя и т.д.
    */
    [loadUser.pending.type]: (state) => ({ ...state, loading: true }),
    [loadUser.fulfilled.type]: (state, action) => ({
      ...state,
      shownUser: action.payload,
      loading: false,
    }),
    [loadUser.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
    /*
    UPDATE STATUS
      Изменяет статус юзера, из под которого пользователь залогинин, то есть currentUser.
    */
    [updateStatus.pending.type]: (state) => ({ ...state, loading: true }),
    [updateStatus.fulfilled.type]: (state, action) => {
      if (state?.currentUser) {
        return state;
      }
      /*
      Пробовал заставить prettier и eslint игнорировать строчки ниже,
      прописывать изменение через Object.assign, но линтеры просто переправляют
      все обратно на spread. Если есть идеи, как обрубить руки линтерам тут, то хорошо бы
      уменьшить количество кода тут. А пока вот так.
      */
      const currentUserClone = cloneDeep(state.currentUser) as IUser | null;
      const newUser: IUser | null = { ...currentUserClone as IUser, status: action.payload };
      return { ...state, data: { ...state, currentUser: newUser } };
    },
    [updateStatus.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
    /* GET CURRENT USER */
    [getCurrentUser.pending.type]: (state) => ({ ...state, loading: true }),
    [getCurrentUser.fulfilled.type]: (state, action) => ({
      ...state,
      currentUser: action.payload,
      loading: false,
    }),
    [getCurrentUser.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
});

export { loadUser, updateStatus, getCurrentUser };
export const userReducer = userSlice.reducer;
