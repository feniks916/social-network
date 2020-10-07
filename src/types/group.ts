export interface IGroup {
  addressImageGroup: string;
  name: string;
  groupCategory: string;
  subscribers: number;
  id: number;
}

export interface IFullGroupInfo {
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

interface IMedia {
  mediaType: string;
  url: string;
  userId: number
}

interface ITag {
  id: number;
  text: string;
}

export interface IGroupPosts {
  countBookmarks: number;
  countComments: number;
  countLikes: number;
  countReposts: number;
  id: number;
  lastRedactionDate: Date;
  media: IMedia[];
  persistDate: Date;
  tags: ITag[];
  text: string;
  title: string;
}

export interface IGroupRequestProps {
  userId: number;
  groupId: number;
}
export interface IGroupUser {
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
  activeName: string
}
export interface IGroupStateProps {
  groups:
    { groups: IGroup[];
      memberOf: number[];
      loading: boolean;
      error: Error; };
}

// Single group types

interface Icomment {
  avatar: string;
  author: string;
  date: Date;
  text: string;
}

export interface ICommentData {
  data: Icomment[];
}
export interface ICommentsListProps {
  data: {
    author: string;
    date: Date;
    text: string;
  };
}

export interface IGroupHeaderData {
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

export interface INewsData {
  countBookmarks: number;
  countComments: number;
  countLikes: number;
  countReposts: number;
  id: number;
  lastRedactionDate: Date;
  media: IMedia[];
  persistDate: Date;
  tags: ITag[];
  text: string;
  title: string;
  addressImageGroup: string;
  groupName: string;
}
