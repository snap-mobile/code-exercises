export const dbModel = (config: string): string => {
  return config;
}

export const dbWhere = (config: string, query: { id: string }): { lastLogin: Date } => {
  dbModel(config);
  console.log("Fetching from DB");

  return { lastLogin: new Date };
}
