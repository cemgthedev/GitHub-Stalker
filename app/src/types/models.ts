import { z } from "zod";
import { FollowersSchema, RepositoriesSchema, UserSchema } from "./schemas";

export type UserProps = z.infer<typeof UserSchema>

export type RepositoriesProps = z.infer<typeof RepositoriesSchema>

export type FollowersProps = z.infer<typeof FollowersSchema>