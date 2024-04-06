import { RepositoriesProps } from "@/types/models";
import { RepositoriesSchema } from "@/types/schemas";
import { api } from "./api";

export async function getRepositories(username: string):Promise<RepositoriesProps> {
    const endpoint = '/users/' + username + '/repos';
    
    try {
        const response = await api.get(endpoint);
        const repositoriesValidation = RepositoriesSchema.safeParse(response.data);
        if(repositoriesValidation.success) {
            return repositoriesValidation.data;
        } else {
            return [];
        }
    } catch(error) {
        return [];
    }
}