/// <reference types="mongoose" />
import { IUserDoc } from '../types';
declare const User: import("mongoose").Model<IUserDoc, {}, {}>;
export default User;
