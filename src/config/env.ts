interface EnvironmentVariables {
  API_URL: string;
}

export const env: EnvironmentVariables = {
  API_URL: import.meta.env.VITE_API_URL,
};
