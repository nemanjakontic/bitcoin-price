export interface Config {
  appVersion: string,
  local: boolean,
  dev: boolean,
  test: boolean,
  production: boolean,
  api: {
    host: string,
    port: number,
    prefix: string
  }
}
