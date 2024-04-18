import { z } from "zod";
import { FollowersSchema, RepositorieSchema, RepositoriesSchema, UserSchema } from "./schemas";

export type UserProps = z.infer<typeof UserSchema>

export type RepositorieProps = z.infer<typeof RepositorieSchema>

export type RepositoriesProps = z.infer<typeof RepositoriesSchema>

export type FollowersProps = z.infer<typeof FollowersSchema>