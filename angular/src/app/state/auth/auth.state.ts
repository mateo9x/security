import {User} from "../../models/user.model";

export interface AuthState {
  user: User | null;
  authorities: string[];
}

export const initialState: AuthState = {
  user: null,
  authorities: []
};
