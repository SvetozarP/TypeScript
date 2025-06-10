import { PostsService } from "./postsService";
import { UsersService } from "./userService";

const postsService = new PostsService();
const usersService = new UsersService();

export const services = {
    postsService,
    usersService
};