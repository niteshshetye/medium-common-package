import zod from "zod";

export const signupBody = zod.object({
  name: zod.string({ invalid_type_error: "Name can't be empty" }),
  email: zod.string().email("Email is not valid"),
  password: zod.string().min(6, "Password should be greater than 6 letters"),
});

export const signinBody = zod.object({
  email: zod.string().email("Email is not valid"),
  password: zod.string().min(6, "Password should be greater than 6 letters"),
});

export const createPostBody = zod.object({
  title: zod.string().min(3, "Title should atleast contain 3 letters"),
  content: zod.string().min(3, "Content should atleast contain 3 letters"),
});

export const updatePostBody = zod.object({
  title: zod
    .string()
    .min(3, "Title should atleast contain 3 letters")
    .optional(),
  content: zod
    .string()
    .min(3, "Content should atleast contain 3 letters")
    .optional(),
  published: zod.boolean().optional(),
  deleted: zod.boolean().optional(),
});

export type SigninBody = zod.infer<typeof signinBody>;
export type SignupBody = zod.infer<typeof signupBody>;
export type CreatePostBody = zod.infer<typeof createPostBody>;
export type UpdatePostBody = zod.infer<typeof updatePostBody>;
