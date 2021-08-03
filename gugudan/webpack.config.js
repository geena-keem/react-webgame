const path = require('path');
const webpack = require('webpack');

// 참고: https://webpack.js.org/concepts/
module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.jsx', '.js'],
  },

  entry: {
    app: './client',
  },

  // module = loader
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          // babel-loader에 대한 옵션
          presets: [
            [
              '@babel/preset-env',
              {
                // @babel/preset-env에 대한 옵션
                targets: {
                  browsers: ['> 5% in KR', 'last 2 chrome versions'],
                  // > 5% in KR: 한국에서 브라우저 점유율이 5%이상인 브라우저는 모두 지원한다.
                  // {  "chrome": "91",  "edge": "91",  "ios": "14.5",  "samsung": "14" }
                  // 참고: https://github.com/browserslist/browserslist#queries
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
        },
      },
    ],
  },

  // ✔ plugins: 웹팩에서 기본적으로 적용되는 모듈 말고 추가적 필요한 것들을 추가할 수 있다.
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  },
};
