# Parcel

## 설치
`yarn global add parcel-bundler`

## 실행
진입 파일을 설정하여 실행한다.

`parcel index.html`

포트 번호 변경시

`parcel index.html -p <port number>`

서버에서 자동 리빌드가 필요하는 경우

`parcel watch index.html`

빌드 (자동으로 NODE_ENV=production 설정)

`parcel build entry.js`

출력 디렉토리를 변경하고 싶을 때

`parcel build entry.js --out-dir build/output`

또는

`parcel build entry.js -d build/output`