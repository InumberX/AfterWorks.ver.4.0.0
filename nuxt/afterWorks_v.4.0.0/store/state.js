export default {
 // クライアントサイドかどうか判定するフラグ
 isBrowser: false,
 // データローディング中かどうかを判定するフラグ
 isLoading: false,
 // レスポンスデータ
 contents: {
  index: {
   isGet: '',
   data: {}
  },
  about: {
   isGet: '',
   data: {}
  },
  works: {
   isGet: '',
   data: {}
  }
 }
}