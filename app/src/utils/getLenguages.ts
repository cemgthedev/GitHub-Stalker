import { RepositoriesProps } from "@/types/models";

export function getLenguages(repositories: RepositoriesProps) {
    const setLenguages = new Set<string>();
    repositories.forEach((item) => {
        setLenguages.add(item.language ? item.language : "");
    })
    setLenguages.delete("");

    let listLenguages = Array.from(setLenguages);
    
    return listLenguages;
}