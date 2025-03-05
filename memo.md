# Memo

## formのonSubmitとactionについて

### onSubmit

- クライアントサイドのバリデーションとしての役割を果たす
- JavaScriptが有効な環境でクライアントサイドのバリデーションを実行
- onSubmitを設定しなくても問題はないが、リアルタイムバリデーションは効かなくなる（ボタンを押下したタイミングでバリデーションが動作する以外不可）

### action

- useActionStateから取得したactionを設定
- サーバーサイドでのアクションの実行が可能
- onSubmitでバリデーションが失敗した場合、actionは動作しない

### 結論

- 両方指定した方が良い
  - 理由：プログレッシブエンハンスメント: onSubmitとactionの両方を設定することで、JavaScriptが無効な環境でもフォームが機能し、JavaScriptが有効な場合はより高度な機能を提供できる
  - が、そもそもJS無効化されている場合は、Next.js自体が動かないので動かない環境など想定はしなくても良さそう
- クライアントサイドのバリデーションは実行して欲しいので、onSubmitは指定する
- クライアントサイドのバリデーションが成功した場合にactionを実行 →　action内では、入力内容の整形、送信、送信完了後の処理を記載する
- conformのuseFormでは、`lastResult` `onValidate` `shouldValidate: "onInput"` を指定（submitの処理はserver actions内で行うため、onSubmitは不要）

### 参考記事
- https://ask-nugey.com/posts/conform-doc-v1#onsubmit
- https://ja.react.dev/reference/react/useActionState#usage
- https://ja.conform.guide/