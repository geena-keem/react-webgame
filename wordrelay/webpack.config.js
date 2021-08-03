const path = require('path'); // ✔ node 경로 조작

module.exports = {
  name: 'word-relay-setting', // 웹팩 설정 이름
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 빌드: 빠름, 재구축: 가장 빠름 / 실서비스: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // ✔ entry, output 중요!
  entry: {
    app: ['./client'],
  }, // 입력
  output: {
    path: path.join(__dirname, 'dist'), // 현재 폴더 경로인 dist폴더
    filename: 'app.js',
  }, // 출력
};
