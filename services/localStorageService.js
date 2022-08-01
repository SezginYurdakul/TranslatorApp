"use strict";
const INFO = "info";

export const getAllInfo = () => {
  return toJson(localStorage.getItem(INFO)) || [];
};

export const saveAllInfo = (info) => {
  localStorage.setItem(INFO, toString(info));
};

export const addRecord = (record) => {
  const allInfo = getAllInfo();
  allInfo.push(record);
  saveAllInfo(allInfo);
};

export const deleteRecord = (id) => {
  const allInfo = getAllInfo();
  const newAllInfo = allInfo.filter((item) => item.id != id);
  saveAllInfo(newAllInfo);
};

const toString = (obj) => JSON.stringify(obj);
const toJson = (str) => JSON.parse(str);
