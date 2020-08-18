import moment from "moment";
import { DATE_PATTERN } from "./constants";

export const getDate = () => {
  return formatDate(moment().subtract(1, "month"));
};

export const formatDate = (date) => {
  return moment(date).format(DATE_PATTERN);
};
