import { userActions } from "./actions";

export const UsersState = () => ({
  user: null,
  uesrs: null,
  error: "",
  status: "",
});

export function UserReducer(state = new UsersState(), { payload, type }) {
  switch (type) {
    case userActions.REQUEST:
      return {
        ...state,
        status: "request_pending",
      };

    case userActions.SIGN_IN_FULFILED:
      return {
        ...state,
        user: payload.resp,
        status: "sign_in_request_success",
      };
    case userActions.SIGN_IN_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "sign_in_request_fail",
      };
    case userActions.SIGN_UP_FULFILED:
      return {
        ...state,
        new_user: payload.resp,
        status: "sign_up_request_success",
      };
    case userActions.SIGN_UP_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "sign_up_request_fail",
      };
    case userActions.SAVE_SETTINGS_FULFILED:
      return {
        ...state,
        user: payload.resp,
        status: "save_settings_request_success",
      };
    case userActions.SAVE_SETTINGS_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "save_settings_request_fail",
      };
    case userActions.GET_USERS_FULFILED:
      return {
        ...state,
        users: payload.resp,
        status: "get_users_request_success",
      };
    case userActions.GET_USERS_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_users_request_fail",
      };
    case userActions.UPDATE_ADMIN_FULFILED:
      return {
        ...state,
        updatedUser: payload.resp,
        status: "update_admin_request_success",
      };
    case userActions.UPDATE_ADMIN_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "update_admin_request_fail",
      };
    case userActions.UPDATE_ENABLED_FULFILED:
      return {
        ...state,
        updatedUser: payload.resp,
        status: "update_enabled_request_success",
      };
    case userActions.UPDATE_ENABLED_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "update_enabled_request_fail",
      };
    case userActions.DELETE_USER_FULFILED:
      return {
        ...state,
        updatedUser: payload.resp,
        status: "delete_user_request_success",
      };
    case userActions.DELETE_USER_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "delete_user_request_fail",
      };
    case userActions.GET_BROADCAST_INFO_FULFILED:
      return {
        ...state,
        broadcastInfo: payload.resp,
        status: "get_broadcast_info_request_success",
      };
    case userActions.GET_BROADCAST_INFO_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_broadcast_info_request_fail",
      };
    case userActions.CLEAR_ERROR:
      return {
        ...state,
        error: "",
        status: "",
      };
    case userActions.SAVE_COMPANY_SETTINGS_FULFILED:
      return {
        ...state,
        company: payload.resp,
        status: "save_company_settings_request_success",
      };
    case userActions.SAVE_COMPANY_SETTINGS_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "save_company_settings_request_fail",
      };
    case userActions.GET_COMPANY_SETTINGS_INFO_FULFILED:
      return {
        ...state,
        company: payload.resp,
        companyName : payload.resp.companyName,
        status: "get_company_settings_info_request_success",
      };
    case userActions.GET_COMPANY_SETTINGS_INFO_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_company_settings_info_request_fail",
      };
    case userActions.GET_COMPANY_NAME_INFO_FULFILED:
      return {
        ...state,
        companyName: payload.resp,
        status: "get_company_name_info_request_success",
      };
    case userActions.GET_COMPANY_NAME_INFO_ERROR:
      return {
        ...state,
        error: payload.error,
        status: "get_company_name_info_request_fail",
      };
    default:
      return {
        ...state,
      };
  }
}
