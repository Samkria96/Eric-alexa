module.exports = {
  translation: {
    SKILL_NAME: 'アポイントスケジュール管理',
    GREETING: [
      'こんにちは。%s へようこそ。予約をご希望ですか。',
      'こんにちは。%s へようこそ。予約をご希望ですか。',
      'こんにちは。%s へようこそ。予約をご希望ですか。',
    ],
    GREETING_REPROMPT: [
      '予約をご希望ですか。',
      '予約いたしましょうか。',
      'アポイントを取得致します。始めますか？',
    ],
    SCHEDULE_YES: [
      'わかりました。アポイントをスケジュールしましょう。',
      'わかりました。始めましょう。',
      'わかりました。始めましょう。',
    ],
    SCHEDULE_NO: [
      'わかりました。予約を希望したい時はいつでもお知らせください。',
      'わかりました。予約をしたい時はいつでも私はここにいます。',
      'わかりました。予約する準備ができたら、教えてください。',
    ],
    HELP: [
      'このスキルはアポイントを取得するのに役たちます。予約をご希望ですか。',
    ],
    HELP_REPROMPT: [
      '予約をご希望ですか。',
    ],
    CANCEL_STOP_RESPONSE: [
      'さようなら',
      'またのご利用お待ちしています。',
    ],
    FALLBACK: [
      '「予定を入れて」や「予定を追加して」のように言うことができます。スケジュールを設定しますか？',
    ],
    FALLBACK_REPROMPT: [
      'スケジュールを設定しますか？',
    ],
    APPOINTMENT_CONFIRM: [
      '%s に設定された %s のアポイントリクエストがあります。このリクエストを確認しますか。',
    ],
    APPOINTMENT_CONFIRM_REPROMPT: [
      '%s のアポイントリクエストを送りましょうか。',
    ],
    APPOINTMENT_CONFIRM_COMPLETED: [
      'あなたの %s の %s のアポイントが取得されました。確認メールが送信されます。キャンセルまたは再度スケジュールするには、確認メールに返信してください。ありがとうございました。',
    ],
    TIME_AVAILABLE: [
      '%s は利用可能です。予約しますか。',
    ],
    TIME_AVAILABLE_REPROMPT: [
      '%s を予約しますか。',
    ],
    TIME_NOT_AVAILABLE: [
      'すみませんが、%s は利用できません。他の時間にしますか。',
    ],
    TIME_NOT_AVAILABLE_REPROMPT: [
      '他の時間にしますか。',
    ],
    APPOINTMENT_TITLE: '%s のアポイント',
    APPOINTMENT_DESCRIPTION: 'これは %s の %s の電話アポイントです。%s に電話します。このアポイントをキャンセルまたは変更する必要がある場合は、このメールに返信してください。',
    EMAIL_SUBJECT: '%sの%sのアポイント',
    EMAIL_TEXT: 'これは %s の %s の電話アポイントです。%s に電話します。このアポイントをキャンセルまたは変更する必要がある場合は、このメールに返信してください。',
    NO_CONFIRM: 'やり直すにはアポイントを取得、または、キャンセルはストップといってください。',
    NO_CONFIRM_REPROMOT: 'やり直すにはアポイントを取得、または、キャンセルはストップといってください。',
    ENV_NOT_CONFIGURED: 'いくつかの環境変数が正しく設定されていません。リードミーファイルに記載されているヘルプを参照してください。',
    PERMISSIONS_REQUIRED: '予約をして確認をするためには、%s は名前、メールアドレス、電話番号にアクセスする必要があります。Alexaアプリからユーザープロフィールへのアクセス権限を有効にしてください。',
    EMAIL_REQUIRED: 'メールアドレスが登録されていないようです。Alexaアプリでメールアドレスを登録してください。',
    EMAIL_REQUIRED_REPROMPT: 'Alexaアプリでメールアドレスを登録してください。',
    NAME_REQUIRED: '名前が登録されていないようです。Alexaアプリで名前を登録してください。',
    NAME_REQUIRED_REPROMPT: 'Alexaアプリで名前を登録してください。',
    PHONE_REQUIRED: '電話番号が設定されていないようです。Alexaアプリで電話番号を登録してください。',
    PHONE_REQUIRED_REPROMPT: 'Alexaアプリで電話番号を登録してください',
    ERROR: 'わかりませんでした。もう一度お願いします。',
    ERROR_REPROMPT: 'もう一度お願いします',
    FREEBUSY_DISABLED: 'チェックしている空き時間は無効です。予約をしますか。',
  },
};
