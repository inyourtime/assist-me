declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URL: string;
      MONGO_DATABASE: string;
    }
  }
}

export {}
