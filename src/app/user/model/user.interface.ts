import {CommentInterface} from './comment.interface';

export interface UserInterface {
  firstName: string;
  lastName: string;
  avatar: string;
  country: string;
  city: string;
  likes: number;
  following: number;
  followers: number;
  totalComments: number;
  comments: CommentInterface[];
}
