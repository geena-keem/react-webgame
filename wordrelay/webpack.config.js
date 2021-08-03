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

  // entry의 파일을 읽고 모듈을 적용한 후 output으로 뺀다.
  module: {
    rules: [
      {
        test: /\.jsx?/, // js나 jsx파일을
        loader: 'babel-loader', // 바벨 로더을 적용해서 문법을 호환되게끔 바꿔준다.
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          // plugins: ['@babel/plugin-proposal-class-properties'],
          // 강의는 에러나서 이거 추가함 (npm i -D @babel/plugin-proposal-class-properties)
        },
      },
    ],
  },

  output: {
    path: path.join(__dirname, 'dist'), // 현재 폴더 경로인 dist폴더
    filename: 'app.js',
  }, // 출력
};
