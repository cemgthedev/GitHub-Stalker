"use client";
import { getFollowers } from "@/services/followers";
import { getRepositories } from "@/services/repositories";
import { getUser } from "@/services/users";
import { FollowersProps, RepositoriesProps, UserProps } from "@/types/models";
import { useEffect, useState } from "react";

export function Teste() {
    const [user, setUser] = useState<UserProps>({} as UserProps);
    const [repositories, setRepositories] = useState<RepositoriesProps>([]);
    const [followers, setFollowers] = useState<FollowersProps>([]);

    useEffect(() => {
        console.log('teste');
        async function getData() {
          const response = await getUser('cemgthedev');
          if(response) {
            setUser(response);
        
            const responseRepositories = await getRepositories('cemgthedev');
            if(responseRepositories) {
              setRepositories(responseRepositories);
            }
            
            const responseFollowers = await getFollowers('cemgthedev');
            if(responseFollowers) {
              setFollowers(responseFollowers);
            }
          }
        }
    
        getData();
      }, [])

    return (
        <h1>{JSON.stringify(followers)}</h1>
    );
}