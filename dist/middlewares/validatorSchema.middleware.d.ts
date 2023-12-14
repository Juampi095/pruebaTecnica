import zod from "zod";
export declare const userSchema: zod.ZodObject<{
    email: zod.ZodEffects<zod.ZodString, string, string>;
    password: zod.ZodEffects<zod.ZodString, string, string>;
}, "strip", zod.ZodTypeAny, {
    password: string;
    email: string;
}, {
    password: string;
    email: string;
}>;
