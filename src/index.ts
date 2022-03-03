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

const fundraisers = [
  {
    id: "1234",
    name: "Anytown Highschool Basketball",
    startDate: new Date("December 17, 2021 03:24:00"),
    isActive: true,
    teamSize: 26,
    statusLog: [
      {
        date: new Date("December 15, 2021 01:01:01"),
        status: "pending",
      },
      {
        date: new Date("December 17, 2021 03:24:00"),
        status: "active",
      },
      {
        date: new Date("December 28, 2021 06:52:12"),
        status: "closed",
      },
    ],
  },
  {
    id: "5678",
    name: "Newtown Hockey Team",
    startDate: new Date("January 23, 2022 03:24:00"),
    isActive: true,
    teamSize: 26,
    statusLog: [
      {
        date: new Date("January 12, 2022 01:01:01"),
        status: "pending",
      },
      {
        date: new Date("January 23, 2022 03:24:00"),
        status: "active",
      },
      {
        date: new Date("January 30, 2022 06:52:12"),
        status: "closed",
      },
    ],
  },
];

const lastStatusFor = (statusLog: StatusLog[]): StatusLog => {
  return statusLog.reduce((a: StatusLog, b: StatusLog) => {
    return a.date > b.date ? a : b;
  });
};

const mostRecentStatuses = (fundraisers: Fundraiser[]): MostRecentStatus[] => {
  return fundraisers.map((fundraiser: Fundraiser): MostRecentStatus => {
    return {
      fundId: fundraiser.id,
      lastStatus: lastStatusFor(fundraiser.statusLog).status,
    };
  });
};

console.log(mostRecentStatuses(fundraisers));
