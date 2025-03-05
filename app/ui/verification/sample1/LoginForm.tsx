"use client";

import { loginAction } from "@/app/action/login";
import { loginSchema } from "@/app/verification/sample1/_schema";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { useActionState } from "react";

export function LoginForm() {
	/**
	 * @see https://ja.react.dev/reference/react/useActionState
	 */
	const [lastResult, formActions] = useActionState(loginAction, undefined);

	/**
	 * @see https://ja.conform.guide/api/react/useForm
	 */
	const [form, fields] = useForm({
		// 最後の送信の結果です。これは通常、サーバーから送信され、プログレッシブエンハンスメントのためのフォームの初期状態として使用されます。
		lastResult,
		// フォームを（再）バリデーションする必要があるときに呼び出される関数です。
		onValidate: ({ formData }) => {
			return parseWithZod(formData, {
				schema: loginSchema,
			});
		},
		// バリデーションのトリガーとなるタイミングを指定
		shouldValidate: "onInput",
	});

	const isFormFilled = fields.email.value && fields.password.value;

	return (
		<form
			id={form.id}
			onSubmit={form.onSubmit}
			action={formActions}
			className="mx-auto max-w-md rounded bg-white p-4 shadow-md"
		>
			<div className="mb-4">
				<label
					htmlFor={fields.email.id}
					className="block font-medium text-gray-700 text-sm"
				>
					Email
				</label>
				<input
					type="email"
					name={fields.email.name}
					className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					autoComplete="email"
				/>
				<div className="mt-1 text-red-500 text-sm">{fields.email.errors}</div>
			</div>
			<div className="mb-4">
				<label
					htmlFor={fields.password.id}
					className="block font-medium text-gray-700 text-sm"
				>
					Password
				</label>
				<input
					type="password"
					name={fields.password.name}
					className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
					autoComplete="current-password"
				/>
				<div className="mt-1 text-red-500 text-sm">
					{fields.password.errors}
				</div>
			</div>

			<button
				type="submit"
				disabled={!isFormFilled || !form.valid}
				className="w-full rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-10"
			>
				Login
			</button>

			{form.status === "success" && <p>送信完了しました</p>}
			{form.status === "error" && <p>送信に失敗しました</p>}
		</form>
	);
}
