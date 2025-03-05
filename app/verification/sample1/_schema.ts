import { z } from "zod";

export const loginSchema = z.object({
	email: z.string().email(),
	password: z
		.string()
		.min(8, "パスワードは 8 文字以上である必要があります")
		.max(100),
});
