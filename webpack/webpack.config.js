const HtmlWebpackPlugin = require('html-webpack-plugin'); // via npm
const webpack = require('webpack') // 빌트인 플러그인에 접근
const path = require('path');

module.exports = {
   /**
    * entry
    * 프로젝트에 진입점을 나타낸다.
    * 진입접으로 부터 시작하여 의존성 관계를 이해한다.
    */

    // 속기 구문
    entry: '/path/to/my/entry/file.js',

    // 개체 구문
    // entry: {
    //     app: './src/app.js',
    //     adminApp: './src/adminApp.js',
    // }

    /**
     * ouput
     * 웹팩에게 결과물을 어디에 출력할 것인지 알려준다.
     * 번들을 생성하는 방법과 파일이름을 지정한다.
     */
    output: {
        // 출력에 사용될 파일 이름
        filename: 'bundle.js',

        // 여러 개의 엔트리 포인트가 있는경우
        // filename: '[name].js',
        // path: __dirname + '/dist'
    },

    /**
     * module(loader)
     * 기본적으로 웹팩은 자바스크립트와 JSON 파일만 이해한다.
     * 로더를 사용하여 다른 유형의 파일을 처리한다.
     */
    module: {
        rules: [
            /* test는 변환할 파일, use는 변환할 파일을 어떤 로더로 처리할지 */
            /* 로더를 별도로 설치해야 함 */
            /* use에 적는 순서대로 로더를 사용함 */
            { test: /\.css$/, use: [
                { loader: 'style-loader' },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true
                    }
                }
            ] },
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },

    /**
     * plugin
     * 로더가 특정 유형의 모듈을 변환하는 반면 
     * 플러그인을 사용하면 번들 최적화, 애셋 관리, 환경 변수 주입과 같은
     * 광범위한 작업을 수행한다.
     */
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]

    /**
     * mode
     * development, production, none 중 하나를 작성한다.
     * 기본값은 production
     * 각 환경에 맞는 웹팩 최적화를 활성화 할 수 있다.
     */

    
    mode: 'production'

}