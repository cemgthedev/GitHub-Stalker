import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { RepositoryProps } from '../../components/PopUp';
import { Header, HeaderProps } from '../../components/Header';
import { Card, CardProps } from '../../components/Card';
import { Table, TableProps } from '../../components/Table';
import { List, ListProps } from '../../components/List';
import { Footer, FooterProps } from '../../components/Footer'
import { NotFound, NotFoundProps } from '../NotFound';

import '../../styles/global.css';

type UserProps = HeaderProps & CardProps;

export function Home() {
    const {userNameHome, userNameResearched} = useParams<string>();
    const [user, setUser] = useState<UserProps | undefined>({} as UserProps);
    const [repos, setRepos] = useState<RepositoryProps[]>([] as RepositoryProps[]);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        async function getUser() {
            try {
                const url = `https://api.github.com/users/${userNameResearched}`;
                const responseGetUser = await axios.get(url);
                const userData = responseGetUser.data;
                setUser({
                    login: userData.login,
                    location: userData.location,
                    html_url: userData.html_url,
                    email: userData.email,
                    twitter_username: userData.twitter_username,
                    name: userData.name,
                    bio: userData.bio,
                    avatar_url: userData.avatar_url,
                    created_at: userData.created_at,
                    updated_at: userData.updated_at,
                    public_repos: userData.public_repos,
                    followers: userData.followers,
                    following: userData.following
                } as UserProps);

                const responseGetRepos = await axios.get(userData.repos_url);
                const dataRepos = responseGetRepos.data;
                setRepos(dataRepos);

                const responseGetFollowers = await axios.get(userData.followers_url);
                const dataFollowers = responseGetFollowers.data;
                console.log(dataFollowers);
                setFollowers(dataFollowers);
            } catch(error) {
                console.log(error);
            }
        }

        getUser();
    }, []);
    
    if(user != undefined) {
        return (
            <div 
                className='flex 
                           flex-col 
                           items-center 
                           gap-4'
            >
                <Header 
                    {...
                        {
                            login: userNameHome,
                            location: user.location,
                            html_url: user.html_url,
                            email: user.email,
                            twitter_username: user.twitter_username
                        } as HeaderProps
                    }
                />
                <main 
                    className='flex 
                               flex-col 
                               gap-4'
                >
                    <Card 
                        {...
                            {
                                name: user.name,
                                bio: user.bio,
                                avatar_url: user.avatar_url,
                                created_at: user.created_at,
                                updated_at: user.updated_at,
                                public_repos: user.public_repos,
                                followers: user.followers,
                                following: user.following
                            } as CardProps
                        }
                    />
                    <Table 
                        {...
                            {
                                list: repos
                            } as TableProps
                        }
                    />
                    <List 
                        {...
                            {
                                login: userNameHome,
                                list: followers
                            } as ListProps
                        }
                    />
                </main>
                <button 
                    onClick={() => window.scrollTo(0, 0)} 
                    title='voltar para o topo da página' 
                    className="animate-bounce 
                               font-bold 
                               text-2xl 
                               bg-slate-900 
                               text-white 
                               flex 
                               justify-center 
                               p-1 
                               w-[32px] 
                               h-[32px] 
                               fixed 
                               top-4 
                               right-4 
                               rounded-full"
                >
                    ^
                </button>
                <Footer
                    {...
                        {
                            hrefInstagram: "https://www.instagram.com/_carlos_eduardo_mg/",
                            hrefLinkedin: "https://www.linkedin.com/in/carlos-eduardo-moura-gomes-bb0ab7250/",
                            hrefEmail: "mailto:cemg.the.dev@gmail.com",
                            projectName: 'GitHub Stalker',
                            licenceLabel: 'Copyright (c) 2023 Carlos Eduardo de Moura Gomes',
                            hrefLicence: "https://github.com/cemgthedev/GitHub-Stalker/blob/main/LICENSE"
                        } as FooterProps
                    }
                />
            </div>
        );
    } else {
        return (
            <NotFound
                {...
                    {
                        message: 'Usuário não encontrado',
                        textButton: 'Voltar a página de pesquisa'
                    } as NotFoundProps
                }
            />
        );
    }

}