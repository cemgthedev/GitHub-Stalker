import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Table } from '../../components/Table';
import { List } from '../../components/List';
import { Footer } from '../../components/Footer';
import { NotFound } from '../NotFound';

import '../../styles/global.css'

export function Home() {
    const {userNameHome, userNameResearched} = useParams();
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        async function getUser() {
            try {
                const url = `https://api.github.com/users/${userNameResearched}`;
                const responseGetUser = await axios.get(url);
                const userData = responseGetUser.data;
                setUser(userData);

                const responseGetRepos = await axios.get(userData.repos_url);
                const dataRepos = responseGetRepos.data;
                setRepos(dataRepos);

                const responseGetFollowers = await axios.get(userData.followers_url);
                const dataFollowers = responseGetFollowers.data;
                console.log(dataFollowers);
                setFollowers(dataFollowers);
            } catch(error) {
                console.log(error);
                setUser(null);
            }
        }

        getUser();
    }, []);
    
    if(user != null) {
        const created_at = new Date(user.created_at);
        const created_at_date = created_at.toLocaleString('pt-br', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        const created_at_time = created_at.toLocaleString('pt-br', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const updated_at = new Date(user.updated_at);
        const updated_at_date = updated_at.toLocaleString('pt-br', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        const updated_at_time = updated_at.toLocaleString('pt-br', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        return (
            <div className='flex flex-col items-center gap-4'>
                <Header login={userNameHome} location={user.location} html_url={user.html_url} email={user.email} twitter_username={user.twitter_username}/>
                <main className='flex flex-col gap-4'>
                    <Card data = {
                        {
                            avatar_url: user.avatar_url,
                            name: user.name,
                            bio: user.bio,
                            created_at_date: created_at_date,
                            created_at_time: created_at_time,
                            updated_at_date: updated_at_date,
                            updated_at_time: updated_at_time,
                            public_repos: user.public_repos,
                            followers: user.followers,
                            following: user.following
                        }
                    }/>
                    <Table list={ repos }/>
                    <List login={userNameHome} list={ followers }/>
                </main>
                <button onClick={() => window.scrollTo(0, 0)} title='voltar para o topo da página' className="animate-bounce font-bold text-2xl bg-slate-900 text-white flex justify-center p-1 w-[32px] h-[32px] fixed top-4 right-4 rounded-[100%]">^</button>
                <Footer/>
            </div>
        );
    } else {
        return (
            <NotFound/>
        );
    }

}