import zod from "zod";

const hasSpecialCharacter = (value: string) =>
    /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
export const userSchema = zod.object({
    email: zod
        .string()
        .email()
        .refine(
            (value) => value.includes("@"),
            "The email must contain the '@' character."
        ),
    password: zod
        .string()
        .min(8)
        .max(20)
        .refine((value) => hasSpecialCharacter(value), {
            message: "The password must be at least 8 characters containing at least 1 letter, 1 number, and 1 special character.",
            path: [],
        }),
})