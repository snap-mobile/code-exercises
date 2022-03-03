export interface Fundraiser {
  id: string;
  name: string;
  startDate: Date;
  isActive: boolean;
  teamSize: number;
  statusLog: StatusLog[];
}

export interface StatusLog {
  date: Date;
  status: string;
}

export interface MostRecentStatus {
  fundId: string;
  lastStatus: string;
}
