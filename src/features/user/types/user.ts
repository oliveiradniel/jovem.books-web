export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string | null;
  email: string;
  isPrivate: boolean;
  biography: string | null;
  avatarUrl: string | null;
  createdAt: string;
  updatedAt: string;
}
