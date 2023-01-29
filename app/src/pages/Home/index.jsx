import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import axios from 'axios';

import { Header } from '../../components/Header';
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
        return (
            <div>
                <Header location={'user.location'} html_url={user.html_url} email={'user.email'} twitter_username={'user.twitter_username'}/>
            </div>
        );
    } else {
        return (
            <Error/>
        );
    }

}