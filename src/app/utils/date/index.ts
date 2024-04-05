import { formatDistanceStrict } from "date-fns";

export const getTimeDistanceToNow = (createdAt: string | Date) =>
  formatDistanceStrict(Date.now(), createdAt);
