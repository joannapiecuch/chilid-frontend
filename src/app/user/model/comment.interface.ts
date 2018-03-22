export interface CommentInterface {
  owner: {
    firstName: string,
    lastName: string
  };
  avatar: string;
  content: string;
  creationTime: Date;
}
