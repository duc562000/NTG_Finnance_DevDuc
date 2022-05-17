import { GetData, PostData, PostFormData } from "../helpers";
import url from "../url";

export const historyInvest = async (params) =>
  PostData(url.historyInvest, params)
    .then((res) => res)
    .catch((err) => err);

export const dataInvestToday = async (params) =>
  GetData(url.dataInvestToday, params)
    .then((res) => res)
    .catch((err) => err);

export const detailInvestItem = async (id) =>
  GetData(`${url.detailInvest}/${id}`, {})
    .then((res) => res)
    .catch((err) => err);


