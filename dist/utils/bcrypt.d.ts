export declare const hashPassword: (password: string) => Promise<string>;
export declare const comparePassword: (password: string, storedPassword: string) => Promise<boolean>;
