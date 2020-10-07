import { IGroup, IFullGroupInfo, IGroupPosts, IGroupRequestProps, IGroupUser } from '../types/group';
// const local = "http://localhost:3000/";
const web = 'http://91.241.64.178:5561/';

interface IFetchData {
  method: string
}

export default class {
  static urlBase = web;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async fetching(path: string, data?: IFetchData) : Promise<any> {
    const res: Response = await fetch(`${this.urlBase}${path}`, data);
    if (!res.ok) {
      throw new Error(`Fetching user-controller is status error ${res.status}`);
    }
    return res.json();
  }

  static async apiGroups(page = 1, size = 15) : Promise<IGroup[]> {
    return this.fetching(`api/groups/all?page=${page}&size=${size}`);
  }

  static async apiGroupInfo(id:number, page = 1, size = 15) : Promise<IGroupPosts[]> {
    return this.fetching(`api/groups/${id}/posts?page=${page}&size=${size}`);
  }

  static async apiSingleGroup(id:number) : Promise<IFullGroupInfo> {
    return this.fetching(`api/groups/${id}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static async apiLoadUsers({ userId, groupId }: IGroupRequestProps) : Promise<IGroupUser[]> {
    return this.fetching(`api/groups/${groupId}/users`);
  }

  static async apiJoinGroup({ userId, groupId }: IGroupRequestProps) : Promise<string> {
    const res: Response = await fetch(`${this.urlBase}api/groupsHasUsers/add?groupId=${groupId}&userId=${userId}`, {
      method: 'POST',
    });
    if (!res.ok) {
      throw new Error(`Fetching user-controller is status error ${res.status}`);
    }
    return res.text();
  }

  static async apiLeaveGroup({ userId, groupId }: IGroupRequestProps) : Promise<string> {
    const res: Response = await fetch(`${this.urlBase}api/groupsHasUsers/delete?groupId=${groupId}&userId=${userId}`, {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error(`Fetching user-controller is status error ${res.status}`);
    }
    return res.text();
  }
}
