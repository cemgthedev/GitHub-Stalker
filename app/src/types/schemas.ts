import { z } from 'zod';

export const UserSchema = z.object({
    login: z.string(),
    avatar_url: z.string(),
    name: z.string(),
    location: z.string(),
    public_repos: z.number(),
    followers: z.number(),
    following: z.number(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    repos_url: z.string(),
    followers_url: z.string(),
    html_url: z.string(),
    email: z.string().nullable(),
    twitter_username: z.string().nullable(),
    bio: z.string().nullable(),
})

export const RepositoriesSchema = z.array(z.object({
    name: z.string(),
    html_url: z.string(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
    stargazers_count: z.number(),
    watchers_count: z.number(),
    size: z.number(),
    forks_count: z.number(),
    language: z.string().nullable(),
}))

export const FollowersSchema = z.array(z.object({
    avatar_url: z.string(),
    html_url: z.string(),
    login: z.string()
}))