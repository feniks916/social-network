import { IUser } from './user';

export interface Group {
  addressImageGroup: string;
  name: string;
  groupCategory: string;
  subscribers: number;
  id: number;
}

export interface FullGroupInfo {
  addressImageGroup: string;
  description: string;
  groupCategory: string;
  id: number;
  lastRedactionDate: Date;
  linkSite: string;
  name: string;
  ownerFio: string;
  persistDate: Date;
  subscribers: number;
}

interface Media {
  mediaType: string;
  url: string;
  userId: number;
}

interface Tag {
  id: number;
  text: string;
}

export interface GroupPosts {
  countBookmarks: number;
  countComments: number;
  countLikes: number;
  countReposts: number;
  id: number;
  lastRedactionDate: Date;
  media: Media[];
  persistDate: Date;
  tags: Tag[];
  text: string;
  title: string;
}

export interface GroupRequestProps {
  userId: number;
  groupId: number;
}
export interface GroupUser {
  userId: number;
  firstName: string;
  lastName: string;
  dateOfBirth: number;
  education: string;
  aboutMe: string;
  avatar: string;
  email: string;
  password: string;
  city: string;
  linkSite: string;
  roleName: string;
  status: string;
  activeName: string;
}
export interface GroupStateProps {
  groups:
    { groups: Group[];
      memberOf: number[];
      loading: boolean;
      error: Error; };
}

// Single group types

export interface Comment {
  avatar: string;
  author: string;
  date: Date;
  text: string;
}

export interface CommentData {
  data: Comment[];
}
export interface CommentsListProps {
  data: {
    author: string;
    date: Date;
    text: string;
  };
}

export interface GroupHeaderData {
  data: {
    description: string;
    groupCategory: string;
    id: string;
    lastRedactionDate: string;
    linkSite: string;
    name: string;
    ownerFio: string;
    persistDate: string;
    subscribers: number;
  };
}

export interface NewsData {
  countBookmarks: number;
  countComments: number;
  countLikes: number;
  countReposts: number;
  id: number;
  lastRedactionDate: Date;
  media: Media[];
  persistDate: Date;
  tags: Tag[];
  text: string;
  title: string;
  addressImageGroup: string;
  groupName: string;
}

export interface Store {
  user: {
    data: IUser;
    error: Error;
    loading: boolean;
  };
  groups: {
    groups: Group[];
    memberOf: number[];
    error: Error | null;
    loading: boolean;
  };
  singleGroup: {
    groupInfo: FullGroupInfo;
    posts: GroupPosts[];
    error: Error;
    loading: boolean;
  };
}
