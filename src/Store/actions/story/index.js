import * as TYPES from '../types';
import * as Util from '../../../Services';
import * as storyApi from '../../../Services/api/methods/storyMethods'

//Method will pass nurse id and get all the nurses fields
export const getNurseFeed = (nurseId, setLoading) => {
  return async dispatch => {
    try {
      let params = {
        nurse_id: nurseId,
        updated_date: 0,
        appuser_id: nurseId,
        access_token: "",
        token: "j56sugRk029Po5DB"
      }
      let api = await storyApi.getNurseContent(params)
      if (api.success) {
        dispatch({
          type: TYPES.FEED_DATA,
          feed: api.details
        })
        Util.navigate('Feed')
        setLoading(false)
      }
      else {
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }
}

//Method will pass nurse id and get nurse profile
export const fetchNurseProfile = (nurseId) => {
  return async dispatch => {
    try {
      let params = {
        nurse_id: nurseId,
        updated_date: 0,
        appuser_id: nurseId,
        access_token: "",
        token: "j56sugRk029Po5DB"
      }
      let api = await storyApi.getNurseProfile(params)
      if (api.success) {
        dispatch({
          type: TYPES.NURSE_PROFILE,
          profile: api.details
        })
        Util.navigate('Profile')
      }
      else {
      }
    } catch (error) {
    }
  }
}

//Method will pass nurse id and mark attendance against it
export const markAttendance = (params, setLoading) => {
  return async dispatch => {
    try {
      let api = await storyApi.submitClass(params)
      console.log('shwoing response here for submit', api)
      if (api.success) {
        setLoading(false)
        Util.navigate('AttendanceMarked')
      }
      else {
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log('showing error', error)

    }
  }
}

export const updateUserProfiles = (params, success, reject) => {
  return async dispatch => {
    try {
      let api = await storyApi.updateUserProfile(params)
      console.log('shwoing response here for submit', api)
      if (api.success) {
        success(true)
      }
      else {
        reject(true)
      }
    } catch (error) {
      reject(true)
    }
  }
}