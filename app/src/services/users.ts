import { UserProps } from "@/types/models";
import { UserSchema } from "@/types/schemas";
import { api } from "./api";

export async function getUser(username: string):Promise<UserProps | null> {
    const endpoint = '/users/' + username;

    try {
        const response = await api.get(endpoint);
        const userValidation = UserSchema.safeParse(response.data);
        if(userValidation.success) {
            return userValidation.data;
        } else {
            return null;
        }
    } catch(error) {
        return null;
    }
}