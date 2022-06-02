// export default class DbModel {
//   config: string;
//
//   constructor(config: string) {
//     this.config = config;
//   }
//
//   where(params: any) {
//     console.log("Fetching from DB")
//     return { lastLogin: new Date }; // Mock DB Return
//   }
// }

export const connect = (config: any) => {
    // do smth with config
    console.log(config);

    return (params: any) => {
        console.log("Fetching from DB")
        return {lastLogin: new Date}; // Mock DB Return
    }
}