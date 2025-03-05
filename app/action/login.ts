import { loginSchema } from "@/app/verification/sample1/_schema";
import { parseWithZod } from "@conform-to/zod";

export async function loginAction(prevState: unknown, formData: FormData) {
	const submission = parseWithZod(formData, {
		schema: loginSchema,
	});

	if (submission.status === "error") {
		console.log("バリデーションエラーを検知");
		return submission.reply();
	}

	if (submission.status === "success") {
		console.log("loginAction内：成功！！！");

		// フォームから送信された生のデータ
		console.log(submission.payload);

		// Zodスキーマによってパースおよびバリデーションされたデータ()
		console.log(submission.value);

		// redirect("/verification");
	}
}
