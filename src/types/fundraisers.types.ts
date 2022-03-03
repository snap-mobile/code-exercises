interface Fundraiser {
  id: string;
  name: string;
  startDate: Date;
  isActive: boolean;
  teamSize: number;
  statusLog: StatusLog[];
}

interface StatusLog {
  date: Date;
  status: string;
}

interface MostRecentStatus {
  fundId: string;
  lastStatus: string;
}
