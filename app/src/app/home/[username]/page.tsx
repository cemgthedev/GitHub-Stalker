"use client"
import { getFollowers } from "@/services/followers";
import { getRepositories } from "@/services/repositories";
import { getUser } from "@/services/users";
import { FollowersProps, RepositoriesProps, UserProps } from "@/types/models";
import { useEffect, useState } from "react";

export default function Home({ params } : { params: { username: string } }) {

  const [user, setUser] = useState<UserProps>({} as UserProps);
  const [repositories, setRepositories] = useState<RepositoriesProps>([]);
  const [followers, setFollowers] = useState<FollowersProps>([]);

  useEffect(() => {
    async function getData() {
      const [response, responseRepositories, responseFollowers] = await Promise.all([getUser(params.username), getRepositories(params.username), getFollowers(params.username)]);
      
      if(response) {
        setUser(response);
    
        if(responseRepositories) {
          setRepositories(responseRepositories);
        }
        
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
