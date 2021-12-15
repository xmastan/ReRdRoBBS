import { UserRecord } from "./user";

interface Img {
  _id: string;
  name: string;
  url: string;
}

export interface UserMini {
  _id: string;
  username: string;
  sex: number;
  avator: string;
  email: string;
  record: UserRecord;
}
interface ClassMini {
  _id: string;
  classname: string;
}
export interface Reply {
  _id: string;
  createBy: UserMini;
  content: string;
  hadParise: boolean;
  hasChild: boolean;
  reply: Reply[];
}

export interface Topic {
  _id: string;
  createBy: UserMini;
  classFrom: ClassMini;
  title: string;
  content: string;
  topicImage: Img[];

  hitsCount: number;
  praiseCount: number;
  starCount: number;
  replyCount: number;

  reply: Reply[];

  hadStar: boolean;
  hadParise: boolean;

  status: boolean;
  createTime: string;
}