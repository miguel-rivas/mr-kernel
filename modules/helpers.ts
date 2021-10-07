const helpers = {
  dateToNumber(date: string): number {
    return parseInt(date.split("/").join(""));
  },
  getID(client: string, date: string): string {
    client = client.replace(/[\s.\/]/g, "").toLowerCase();
    date = date.replace(/\//g, "");
    return `${client}_${date}`;
  },
  getNewID(client: string, date: string): string {
    client = client.replace(/[\s.\/]/g, "").toLowerCase();
    date = date.replace(/\//g, "");
    return `${date}_${client}`;
  },
}

export default helpers;