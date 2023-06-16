import { baseurl } from "../../const/const";

export const userActions = {

  REQUEST: "@@user/REQUEST",
  SIGN_IN_FULFILED: "@@user/SIGN_IN_FULFILED",
  SIGN_IN_ERROR: "@@user/IGN_IN_ERROR",
  CLEAR_ERROR: "@@user/CLEAR_ERROR",
  SIGN_UP_FULFILED: "@@user/SIGN_UP_FULFILED",
  SIGN_UP_ERROR: "@@user/SIGN_UP_ERROR",
  SAVE_SETTINGS_FULFILED: "@@user/SAVE_SETTINGS_FULFILED",
  SAVE_SETTINGS_ERROR: "@@user/SAVE_SETTINGS_ERROR",
  GET_USERS_REQUEST: "@@user/GET_USERS_REQUEST",
  GET_USERS_FULFILED: "@@user/GET_USERS_FULFILED",
  GET_USERS_ERROR: "@@user/GET_USERS_ERROR",
  UPDATE_ADMIN_REQUEST: "@@user/UPDATE_ADMIN_REQUEST",
  UPDATE_ADMIN_FULFILED: "@@user/UPDATE_ADMIN_FULFILED",
  UPDATE_ADMIN_ERROR: "@@user/UPDATE_ADMIN_ERROR",
  UPDATE_ENABLED_REQUEST: "@@user/UPDATE_ENABLED_REQUEST",
  UPDATE_ENABLED_FULFILED: "@@user/UPDATE_ENABLED_FULFILED",
  UPDATE_ENABLED_ERROR: "@@user/UPDATE_ENABLED_ERROR",
  DELETE_USER_FULFILED: "@@user/DELETE_USER_FULFILED",
  DELETE_USER_ERROR: "@@user/DELETE_USER_ERROR",
  GET_BROADCAST_INFO_FULFILED: "@@user/GET_BROADCAST_INFO_FULFILED",
  GET_BROADCAST_INFO_ERROR: "@@user/GET_BROADCAST_INFO_ERROR",
  SAVE_COMPANY_SETTINGS_FULFILED: "@@user/SAVE_COMPANY_SETTINGS_FULFILED",
  SAVE_COMPANY_SETTINGS_ERROR: "@@user/SAVE_COMPANY_SETTINGS_ERROR",
  GET_COMPANY_SETTINGS_INFO_FULFILED: "@@user/GET_COMPANY_SETTINGS_INFO_FULFILED",
  GET_COMPANY_SETTINGS_INFO_ERROR: "@@user/GET_COMPANY_SETTINGS_INFO_ERROR",
  GET_COMPANY_NAME_INFO_FULFILED: "@@user/GET_COMPANY_NAME_INFO_FULFILED",
  GET_COMPANY_NAME_INFO_ERROR: "@@user/GET_COMPANY_NAME_INFO_ERROR",
  
  signIn: (user) => ({
    type: userActions.REQUEST,
    payload: {
      data: user,
      method: "post",
      url: baseurl + "/api/login",
      sucess: userActions.signInFulfilled,
      error: userActions.signInError,
    },
  }),
  signInFulfilled: (resp) => ({
    type: userActions.SIGN_IN_FULFILED,
    payload: { resp },
  }),
  signInError: (error) => ({
    type: userActions.SIGN_IN_ERROR,
    payload: { error },
  }),
  signUp: (user) => ({
    type: userActions.REQUEST,
    payload: {
      data: user,
      method: "post",
      url: baseurl + "/api/signup",
      sucess: userActions.signUpFulfilled,
      error: userActions.signUpError,
    },
  }),
  signUpFulfilled: (resp) => ({
    type: userActions.SIGN_UP_FULFILED,
    payload: { resp },
  }),
  signUpError: (error) => ({
    type: userActions.SIGN_UP_ERROR,
    payload: { error },
  }),
  saveSettings: (settings) => ({
    type: userActions.REQUEST,
    payload: {
      data: settings,
      method: "post",
      url: baseurl + "/api/settings",
      sucess: userActions.saveSettingsFulfilled,
      error: userActions.saveSettingsError,
    },
  }),
  saveSettingsFulfilled: (resp) => ({
    type: userActions.SAVE_SETTINGS_FULFILED,
    payload: { resp },
  }),
  saveSettingsError: (error) => ({
    type: userActions.SAVE_SETTINGS_ERROR,
    payload: { error },
  }),
  getUsers:(email) => ({
    type: userActions.REQUEST,
    payload: {
      data: {email},
      method: "post",
      url: baseurl + "/api/users",
      sucess: userActions.getUsersFulfilled,
      error: userActions.getUsersError,
    },
  }),
  getUsersFulfilled: (resp) => ({
    type: userActions.GET_USERS_FULFILED,
    payload: { resp },
  }),
  getUsersError: (error) => ({
    type: userActions.GET_USERS_ERROR,
    payload: { error },
  }),
  updateAdmin:(email, isAdmin) => ({
    type: userActions.REQUEST,
    payload: {
      data: {email, isAdmin},
      method: "post",
      url: baseurl + "/api/updateAdmin",
      sucess: userActions.updateAdminFulfilled,
      error: userActions.updateAdminError,
    },
  }),
  updateAdminFulfilled: (resp) => ({
    type: userActions.UPDATE_ADMIN_FULFILED,
    payload: { resp },
  }),
  updateAdminError: (error) => ({
    type: userActions.UPDATE_ADMIN_ERROR,
    payload: { error },
  }),
  updateEnabled:(email, isEnabled) => ({
    type: userActions.REQUEST,
    payload: {
      data: {email, isEnabled},
      method: "post",
      url: baseurl + "/api/updateEnabled",
      sucess: userActions.updateEnabledFulfilled,
      error: userActions.updateEnabledError,
    },
  }),
  updateEnabledFulfilled: (resp) => ({
    type: userActions.UPDATE_ENABLED_FULFILED,
    payload: { resp },
  }),
  updateEnabledError: (error) => ({
    type: userActions.UPDATE_ENABLED_ERROR,
    payload: { error },
  }),
  deleteUser: (email) => ({
    type: userActions.REQUEST,
    payload: {
      data: {email},
      method: "post",
      url: baseurl + "/api/deleteUser",
      sucess: userActions.deleteUserFulfilled,
      error: userActions.deleteUserError,
    },
  }),
  deleteUserFulfilled: (resp) => ({
    type: userActions.DELETE_USER_FULFILED,
    payload: { resp },
  }),
  deleteUserError: (error) => ({
    type: userActions.DELETE_USER_ERROR,
    payload: { error },
  }),
  getBroadcastInfo: (path) => ({
    type: userActions.REQUEST,
    payload: {
      data: {path},
      method: "post",
      url: baseurl + "/api/broadcastInfo",
      sucess: userActions.getBroadcastInfoFulfilled,
      error: userActions.getBroadcastInfoError,
    },
  }),
  getBroadcastInfoFulfilled: (resp) => ({
    type: userActions.GET_BROADCAST_INFO_FULFILED,
    payload: { resp },
  }),
  getBroadcastInfoError: (error) => ({
    type: userActions.GET_BROADCAST_INFO_ERROR,
    payload: { error },
  }),
  saveCompanySettings: (settings) => ({
    type: userActions.REQUEST,
    payload: {
      data: settings,
      method: "post",
      url: baseurl + "/api/companysettings",
      sucess: userActions.saveCompanySettingsFulfilled,
      error: userActions.saveCompanySettingsError,
    },
  }),
  saveCompanySettingsFulfilled: (resp) => ({
    type: userActions.SAVE_COMPANY_SETTINGS_FULFILED,
    payload: { resp },
  }),
  saveCompanySettingsError: (error) => ({
    type: userActions.SAVE_COMPANY_SETTINGS_ERROR,
    payload: { error },
  }),
  getCompanySettingsInfo: (email) => ({
    type: userActions.REQUEST,
    payload: {
      data: {email},
      method: "post",
      url: baseurl + "/api/getCompanysettingsInfo",
      sucess: userActions.getCompanySettingsInfoFulfilled,
      error: userActions.getCompanySettingsInfoError,
    },
  }),
  getCompanySettingsInfoFulfilled: (resp) => ({
    type: userActions.GET_COMPANY_SETTINGS_INFO_FULFILED,
    payload: { resp },
  }),
  getCompanySettingsInfoError: (error) => ({
    type: userActions.GET_COMPANY_SETTINGS_INFO_ERROR,
    payload: { error },
  }),
  getCompanyNameInfo: () => ({
    type: userActions.REQUEST,
    payload: {
      data: {},
      method: "get",
      url: baseurl + "/api/companyname",
      sucess: userActions.getCompanyNameInfoFulfilled,
      error: userActions.getCompanyNameInfoError,
    },
  }),
  getCompanyNameInfoFulfilled: (resp) => ({
    type: userActions.GET_COMPANY_NAME_INFO_FULFILED,
    payload: { resp },
  }),
  getCompanyNameInfoError: (error) => ({
    type: userActions.GET_COMPANY_NAME_INFO_ERROR,
    payload: { error },
  }),
  clearError: () => ({
    type: userActions.CLEAR_ERROR,
  }),
};