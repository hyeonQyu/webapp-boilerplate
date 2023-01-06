const fs = require('fs');

export namespace FileSystemManager {

  export function createDirectoryWhenNotExist(directoryPath: string) {
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath);
    }
  }
}
