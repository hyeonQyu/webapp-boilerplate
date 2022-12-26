# webapp-boilerplate

## root package.json
```json
"name": "app-name",
"version": "0.0.1"
```
npm으로 배포되는 패키지명 및 버전
그 외 author, licenses, bugs, homepage 필드 입력 가능

## server
node.js 서버

### package.json
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

### uiExecutor.ts
```typescript
export function runHtmlUi(port: number) {
  const appName = 'app-name';
  const htmlPath = `${process.cwd()}/node_modules/${appName}/ui/index.html`;
  addPortToHtml(htmlPath, port);
  exec(`${getCommandLine()} ${htmlPath}`);
}
```
appName: [package.json](#rootpackagejson) 에서 `"name"` 속성에 작성한 패키지명
