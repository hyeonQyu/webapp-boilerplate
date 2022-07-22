# webapp-boilerplate

## server
node.js 서버로 실제 npm 배포되는 프로젝트 루트 디렉토리

### package.json
```json
"name": "app-name"
```
npm으로 배포되는 패키지명

```json
"bin": {
  "cli-command": "bin/cli.js"
},
```
- cli-command: 배포 후 npx를 통해 실행할 command `예) npx cli-command`
- bin/cli.js: 파일명 변경 가능

```json
"script": {
  "dev": "SET \"NODE_ENV=development\" && nodemon --watch \"src/lib/**/*.ts\" --exec \"ts-node\" src/bin/cli.ts"
}
```
src/bin/cli.ts를 실제 지정한 파일명으로 작성

### app.ts
```typescript
program
  .option('-p, --port <port>', 'port of app')
  .option('-e, --env <env>', 'production or development')
```
- `-p`, `--port` 옵션으로 포트번호 전달
- `-e`, `--env` 옵션으로 환경 전달  
- option을 추가하여 cli로 추가적인 인자 전달 가능
