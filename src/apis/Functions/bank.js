import {
  PostLogin,
  PostData,
  GetData,
  PostFormData,
  GetHaveKey,
} from "../helpers";

import url from "../url";

export const getListBankAccount = async (params) =>
  PostData(url.getListBankAccount, params)
    .then((res) => res)
    .catch((err) => err);
export const addBankAccount = async (params) =>
  PostData(url.addBankAccount, params)
    .then((res) => res)
    .catch((err) => err);

export const updateBankAccount = async (params) =>
  PostData(url.updateBankAccount, params)
    .then((res) => res)
    .catch((err) => err);

export const deleteBankAccount = async (params) =>
  PostData(url.deleteBankAccount, params)
    .then((res) => res)
    .catch((err) => err);

export const detailBankAccount = async (id) =>
  GetData(`${url.detailBankAccount}/${id}`, {})
    .then((res) => res)
    .catch((err) => err);

export const getListCredit = async (params) =>
  PostData(url.getListCredit, params)
    .then((res) => res)
    .catch((err) => err);
export const addCredit = async (params) =>
  PostData(url.addCredit, params)
    .then((res) => res)
    .catch((err) => err);

export const updateCredit = async (params) =>
  PostData(url.updateCredit, params)
    .then((res) => res)
    .catch((err) => err);

export const deleteCredit = async (params) =>
  PostData(url.deleteCredit, params)
    .then((res) => res)
    .catch((err) => err);

export const detailCredit = async (id, key) =>
  GetHaveKey(`${url.detailCredit}/${id}`, {}, key)
    .then((res) => res)
    .catch((err) => err);
