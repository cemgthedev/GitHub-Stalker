import { z } from "zod";
import { FollowerSchema, FollowersSchema, RepositorieSchema, RepositoriesSchema, UserSchema } from "./schemas";

export type UserProps = z.infer<typeof UserSchema>

export type RepositorieProps = z.infer<typeof RepositorieSchema>

export type RepositoriesProps = z.infer<typeof RepositoriesSchema>

export type FollowerProps = z.infer<typeof FollowerSchema>

export type FollowersProps = z.infer<typeof FollowersSchema>