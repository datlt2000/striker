export const inputLongScheduler = [
  {
    name: "title",
    type: "text"
  },
  {
    name: "office",
    type: "text"
  },
  {
    name: "type",
    type: "text"
  },
  {
    name: "startTime",
    type: "date"
  },
  {
    name: "endTime",
    type: "date"
  },
  {
    name: "priority",
    options: ["High", "Middle", "Low"],
    type: "select"
  },
  {
    name: "description",
    type: "text"
  },
  {
    name: "complete",
    type: "checkbox"
  }
];
export const inputShortScheduler = [
  {
    name: "title",
    type: "text"
  },
  {
    name: "office",
    type: "text"
  },
  {
    name: "type",
    type: "text"
  },
  {
    name: "location",
    type: "text"
  },
  {
    name: "startTime",
    type: "time"
  },
  {
    name: "endTime",
    type: "time"
  },
  {
    name: "priority",
    options: ["High", "Middle", "Low"],
    type: "select"
  },
  {
    name: "description",
    type: "text",
  },
  {
    name: "complete",
    type: "checkbox"
  }
];
export const itemsLongScheduler = {
  upcoming: [
    {
      accountId: 1,
      id: 1,
      title: "no Scheduler",
      description: "",
      office: "",
      priority: "",
      type: "",
      color: "blue",
      startTime: "2020-12-16",
      endTime: "2020-12-20",
      complete: "true"
    }
  ],
  over: [
    {
      accountId: 1,
      id: 1,
      title: "no scheduler",
      description: "no",
      office: "",
      type: "",
      priority: "high",
      color: "red",
      startTime: "2020-12-16",
      endTime: "2020-12-18",
      complete: "true"
    }
  ],
};
export const itemsShortScheduler = {
  upcoming: [
    {
      accountId: "1",
      id: 1,
      title: "No Scheduler",
      description: "no",
      office: "MMT",
      type: "project",
      priority: "High",
      repeat: "FREQ=DAILY;INTERVAL=1;COUNT=1",
      color: "green",
      startTime: "2020-12-18 07:30",
      endTime: "2020-12-18 09:30",
      location: "home",
      complete: "false"
    }
  ],
  over: [
    {
      accountId: "1",
      id: 2,
      title: "android",
      description: "no",
      office: "cnpm",
      type: "project",
      priority: "High",
      repeat: "FREQ=DAILY;INTERVAL=1;COUNT=1",
      color: "blue",
      startTime: "2020-12-15 15:00",
      endTime: "2020-12-15 19:30",
      location: "home",
      complete: "false"
    }
  ],
};
export const defaultLongScheduler =
{
  accountId: "",
  id: "",
  title: "",
  description: "",
  office: "",
  type: "",
  color: "",
  startTime: "",
  endTime: "",
  priority: "High",
  complete: "false"
};
export const defaultShortScheduler =
{
  accountId: "",
  id: "",
  title: "",
  description: "",
  office: "",
  type: "",
  repeat: "FREQ=DAILY;INTERVAL=1;COUNT=1",
  color: "",
  priority: "High",
  startTime: "",
  endTime: "",
  complete: "false"
};
export const initialization = {
  infor: {
    inforID: "",
    accountId: "",
    email: "Guest",
    firstName: "Guest",
    lastName: "Unknown",
    sex: "male",
    birthDay: "2000-01-18",
    school: "",
    address: ""
  },
  longSchedulers: itemsLongScheduler,
  shortSchedulers: itemsShortScheduler,
}
export const accountRegister = {
  email: "Guest",
  password: "a",
  firstname: "Guest",
  lastName: "",
  sex: "male",
  birthDay: "2000-01-18"
}
export const generation = {
  feedbacks: [
    {
      id: 3,
      email: "dat@gmail.com",
      feedback: "co"
    },
    {
      id: 2,
      email: "letrongdat@gmail.com",
      feedback: "no"
    }
  ],
  statistic: {
    shortSchedulerUpcoming: 30,
    longSchedulerUpcoming: 30,
    complete: 30,
    late: 5,
    other: 5,
    login: 30,
    register: 5,
    newShortScheduler: 10,
    newLongScheduler: 5
  }
}