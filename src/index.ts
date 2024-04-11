import zod from "zod";

export function maxLengthErrorMessage(inputName: string, inputLength: number) {
  return `${inputName} cannot exceed ${inputLength} characters`;
}

export function minLengthErrorMessage(inputName: string, inputLength: number) {
  return `${inputName} must be at least ${inputLength} characters long`;
}

export function emptyErrorMessage(inputName: string) {
  return `${inputName} cannot be empty`;
}

export function notValidErrorMessage(inputName: string) {
  return `${inputName} is not valid`;
}

export const signupBody = zod.object({
  name: zod
    .string({ invalid_type_error: emptyErrorMessage("Name") })
    .min(2, minLengthErrorMessage("Name", 2))
    .max(100, maxLengthErrorMessage("Name", 100)),
  email: zod
    .string()
    .email(notValidErrorMessage("Email"))
    .max(150, maxLengthErrorMessage("Email", 150)),
  password: zod
    .string()
    .min(6, minLengthErrorMessage("Password", 6))
    .max(20, maxLengthErrorMessage("Password", 20)),
});

export const signinBody = zod.object({
  email: zod
    .string()
    .email(notValidErrorMessage("Email"))
    .max(150, maxLengthErrorMessage("Email", 150)),
  password: zod
    .string()
    .min(6, minLengthErrorMessage("Password", 6))
    .max(20, maxLengthErrorMessage("Password", 20)),
});

export const createPostBody = zod.object({
  title: zod.string().min(3, minLengthErrorMessage("Title", 3)),
  content: zod.string().min(3, minLengthErrorMessage("Content", 3)),
});

export const updatePostBody = zod.object({
  title: zod
    .string()
    .min(3, minLengthErrorMessage("Title", 3))
    .max(200)
    .optional(),
  content: zod.string().min(3, minLengthErrorMessage("Content", 3)).optional(),
  published: zod.boolean().optional(),
  deleted: zod.boolean().optional(),
});

export type SigninBody = zod.infer<typeof signinBody>;
export type SignupBody = zod.infer<typeof signupBody>;
export type CreatePostBody = zod.infer<typeof createPostBody>;
export type UpdatePostBody = zod.infer<typeof updatePostBody>;
