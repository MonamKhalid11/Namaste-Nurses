import * as TYPES from '../types';
import * as Util from '../../../Services';
import * as TASKS from '../index';
import * as AuthenticationApi from '../../../Services/api/methods/authenticationMethods'
import * as StoryApi from '../../../Services/api/methods/storyMethods'
import { CommonActions } from '@react-navigation/native'


export const getAppSettings = () => {
  return async dispatch => {
    try {
      // let params = { user_id: "0", appuser_id: "0", access_token: "", token: "j56sugRk029Po5DB", }
      let params = {
        user_id: 0,
        appuser_id: "0",
        access_token: "",
        token: "j56sugRk029Po5DB"
      }
      let api = await AuthenticationApi.getAppSetting(params)
      console.log("showing api response ", api)

    } catch (error) {
    }
  }
}
export const requestOtp = (userApp, navigation, setLoading) => {
  return async dispatch => {
    try {
      let params = { mobile_number: userApp.mobile_number, otp: "1234", token: "j56sugRk029Po5DB", appuser_id: "0", access_token: "" }
      let api = await AuthenticationApi.verifyMobileOTP(params)
      if (api.success) {
        dispatch({
          type: TYPES.ADD_USER,
          user: api.details
        })
        setLoading(false)
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: 'Main' }],
          }),
        )
      }
      else {
        setLoading(false)
        Util.showToast(api.message)
      }
      // dispatch({
      //   type: TYPES.ADD_USER,
      //   userList: api.data
      // })
    } catch (error) {
      setLoading(false)
    }
  }
}



export const verifyOtp = (params) => {
  return async dispatch => {
    dispatch(TASKS.showLoader());
    try {
      let api = await AuthenticationApi.verifyOtp(params)
      dispatch(TASKS.hideLoader());
      if (api.status == true && api.code == 200) {
        if (api.data) {
          dispatch({
            type: TYPES.SAVE_TOKEN,
            token: api.data.auth_token
          })
          Util.navigate('SignUp')
        }
      }
      else if (api.code == 405) {
        Util.showToast(api.data)
      }
      else {
        Util.showToast(Util.APPLICATION_CONSTANTS.invalidCode)
      }
    } catch (error) {
      dispatch(TASKS.hideLoader());
    }
  }
}
export const verifyOtpUpdated = (params) => {
  return async dispatch => {
    // dispatch(TASKS.showLoader());
    try {
      let api = await AuthenticationApi.verifyUpdatedPhoneNumber(params)
      dispatch(TASKS.hideLoader());
      if (api.status == true && api.code == 200) {
        // if(api.data){
        dispatch({
          type: TYPES.CHANGE_NUMBER,
          phone_number: params.new_phone
        })
        //   Util.navigate('SignUp')
        // }
        Util.showToast('You have updated number successfully !')
        Util.navigate('Home')

      }
      else if (api.code == 405) {
      }
      else {
        // Util.showToast(Util.APPLICATION_CONSTANTS.invalidCode)

      }
    } catch (error) {
      alert(error)
      // dispatch(TASKS.hideLoader());
      console.log('showing error ', error)
    }
  }
}
export const loginUser = (params) => {
  console.log('showing params', params)
  // return async dispatch => {
  //   dispatch(TASKS.showLoader());
  //   try {
  //     let api = await AuthenticationApi.loginUser(params)
  //     dispatch(TASKS.hideLoader());
  //     console.log('showing api called and error', api)
  //     if (api.status == true && api.code == 200) {
  //       dispatch({
  //         type: TYPES.ADD_USER,
  //         user: api.data
  //       })
  //       Util.navigate('Home')
  //     }
  //     else if (api.code == 405) {
  //       Util.showToast(api.data)
  //     }
  //     else {
  //       Util.showToast(Util.APPLICATION_CONSTANTS.failedSignUp)
  //     }
  //   } catch (error) {
  //     dispatch(TASKS.hideLoader());
  //   }
  // }
}
