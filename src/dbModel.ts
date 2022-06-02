export interface DbModel {
  config: string;
  lastLogin?: Date;
}

function dbModelFactory(): DbModel {
  return { config: 'hi joseph' };
}

export function getPersonRecord(_id: string): DbModel {
  // irl we'd use id but whatever
  return { config: dbModelFactory().config, lastLogin: new Date() };
}
