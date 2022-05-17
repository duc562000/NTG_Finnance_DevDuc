import {
  PostLogin,
  PostData,
  GetData,
  PostFormData,
  GetHaveKey,
} from "../helpers";

import url from "../url";

export const newBankInfo = async (body) =>
  PostData(url.newBankInfo, body)
    .then((res) => res)
    .catch((err) => err);

export const updateBankAccountInfo = async (body) =>
  PostData(url.updateBankAccountInfo, body)
    .then((res) => res)
    .catch((err) => err);

export const newCreditCard = async (body) =>
  PostData(url.newCreditCard, body)
    .then((res) => res)
    .catch((err) => err);

export const updateCreditCard = async (body) =>
  PostData(url.updateCreditCard, body)
    .then((res) => res)
    .catch((err) => err);

export const deleteBankInfo = async (body) =>
  PostData(url.deleteBankInfo, body)
    .then((res) => res)
    .catch((err) => err);

export const deleteCreditCard = async (body) =>
  PostData(url.deleteCreditCard, body)
    .then((res) => res)
    .catch((err) => err);

export const getBankAccountList = async (body) =>
  PostData(url.getBankAccountList, body)
    .then((res) => res)
    .catch((err) => err);

export const getCreditCardList = async (body) =>
  PostData(url.getCreditCardList, body)
    .then((res) => res)
    .catch((err) => err);

export const getBankList = async (body) =>
  PostData(url.getBankList, body)
    .then((res) => res)
    .catch((err) => err);

export const createBorrowRequest = async (body) =>
  PostData(url.createBorrowRequest, body)
    .then((res) => res)
    .catch((err) => err);

export const listBorrowRequest = async (body) =>
  PostData(url.listBorrowRequest, body)
    .then((res) => res)
    .catch((err) => err);

export const detailBorrowRequest = async (id, key) =>
  GetHaveKey(`${url.detailBorrowRequest}/${id}`, {}, key)
    .then((res) => res)
    .catch((err) => err);

export const findBorrowRequestAPI = async (body) =>
  GetData(url.findBorrowRequest, body)
    .then((res) => res)
    .catch((err) => err);
//Previous

export const getBorrowRequestNotCompletedAPI = async (body) =>
  PostData(url.getBorrowRequestNotCompleted, body)
    .then((res) => res)
    .catch((err) => err);

export const acceptSessionAPI = async (body) =>
  PostData(url.acceptSession, body)
    .then((res) => res)
    .catch((err) => err);

export const getActionTodayAPI = async (body) =>
  PostData(url.getActionToday, body)
    .then((res) => res)
    .catch((err) => err);

export const getPaymentHistoryAPI = async (body) =>
  PostData(url.getPaymentHistory, body)
    .then((res) => res)
    .catch((err) => err);

export const getPaymentHistoryDetailAPI = async (params) =>
  GetData(url.getPaymentHistoryDetail, params)
    .then((res) => res)
    .catch((err) => err);

export const loanRequest = async (params) =>
  PostData(url.loanRequest, params)
    .then((res) => res)
    .catch((err) => err);
