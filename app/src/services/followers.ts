import { FollowersProps } from "@/types/models";
import { FollowersSchema } from "@/types/schemas";
import { api } from "./api";

export async function getFollowers(username: string):Promise<FollowersProps> {
    const endpoint = '/users/' + username + '/followers';
    
    try {
        const response = await api.get(endpoint);
        const followersValidation = FollowersSchema.safeParse(response.data);
        if(followersValidation.success) {
            return followersValidation.data;
        } else {
            return [];
        }
    } catch(error) {
        return [];
    }
}