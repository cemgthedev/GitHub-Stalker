import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Error } from '../../components/Error'

import '../../styles/global.css'

export function Home() {
    const {userNameResearched} = useParams();
    const [userName, setUserName] = useState(userNameResearched);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            try {
                const url = `https://api.github.com/users/${userName}`;
                const response = await axios.get(url);
                const data = response.data;
                setUser(data);
            } catch(error) {
                console.log(error);
            }
        }

        getUser();
    }, [userName]);

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

        console.log(created_at_date)
        return (
            <div className='flex flex-col items-center'>
                <Header location={user.location} html_url={user.html_url} email={user.email} twitter_username={user.twitter_username}/>
                <main>
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
                </main>
            </div>
        );
    } else {
        return (
            <Error/>
        );
    }

}