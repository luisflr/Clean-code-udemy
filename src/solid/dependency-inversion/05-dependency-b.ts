import { DatabaseService } from "./05-dependency-c";
import { Post } from "./interface";

export class PostService {

    private posts: Post[] = [];

    constructor( public postProvider: DatabaseService) {}

    async getPosts() {
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}
