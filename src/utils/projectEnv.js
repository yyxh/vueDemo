//所有环境变量统一导出

export const env = process.env.NODE_ENV;
export const baseUrl = process.env.VUE_APP_BASE_URL || "http://api.dev.dlab.cn";