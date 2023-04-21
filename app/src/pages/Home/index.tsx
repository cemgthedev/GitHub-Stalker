import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { RepositoryProps } from '../../components/PopUp';
import { Header, HeaderProps } from '../../components/Header';
import { Card, CardProps } from '../../components/Card';
import { Table, TableProps } from '../../components/Table';
import { List, ListProps, ListUsersProps } from '../../components/List';
import { Footer, FooterProps } from '../../components/Footer'
import { NotFound, NotFoundProps } from '../NotFound';

import '../../styles/global.css';

type UserProps = { repos_url: string, followers_url: string } & HeaderProps & CardProps | null;

export function Home() {
    const {userNameHome, userNameResearched} = useParams<string>();
    const [user, setUser] = useState<UserProps>(null);
    const [repos, setRepos] = useState<RepositoryProps[]>([] as RepositoryProps[]);
    const [followers, setFollowers] = useState([] as ListUsersProps[]);
    
    type TypePromise = UserProps | RepositoryProps[] | ListUsersProps[];

    useEffect(() => {
        function getData(url: string):Promise<TypePromise> {

            const promise:Promise<TypePromise> = new Promise(async (resolve, reject) => {
                try {
                    const response = await axios.get(url);
                    const data = response.data;
                
                    resolve(data);
                } catch(error) {
                    reject(error);
                }
            });

            return promise;

        }
        
        const url: string = `https://api.github.com/users/${userNameResearched}`;
        
        (getData(url) as Promise<UserProps>).then(user => {
            setUser(user); 
            if(user){
                return Promise.all([
                    (getData(user.repos_url) as Promise<RepositoryProps[]>).then(repos => setRepos(repos)),
                    (getData(user.followers_url) as Promise<ListUsersProps[]>).then(followers => setFollowers(followers))
                ]);
            }
        }).catch(error => console.error(error));

    }, []);
    
    if(user != null) {
        return (
            <div 
                id='top'
                className='flex 
                           flex-col 
                           items-center 
                           gap-4
                           bg-white'
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
                <a 
                    href='#top' 
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
                               right-2 
                               rounded-full
                               ring-2
                               ring-white"
                >
                    ^
                </a>
                <Footer
                    {...
                        {
                            hrefInstagram: "https://www.instagram.com/cemg.the.dev/",
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
                        message: `Usuário não encontrado`,
                        textButton: 'Voltar a página de pesquisa'
                    } as NotFoundProps
                }
            />
        );
    }
}
