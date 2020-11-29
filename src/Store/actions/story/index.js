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
        api.details.map((feed) => {
          feed.like_count = parseInt(feed.like_count)
        })
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

//Update nurse profile
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

//Fetch previous classes
export const getFullData = (nurseId, success, reject) => {
  return async dispatch => {
    try {
      let params = {
        nurse_id: nurseId,
        appuser_id: nurseId,
        access_token: "",
        token: "j56sugRk029Po5DB"
      }
      let api = await storyApi.getNurseClass(params)
      console.log('shwoing response here for submit', api)
      if (api) {
        if (api.details.length > 0) {
          for (var i = 0; i < api.details.length; i++) {
            if (i % 2 == 0) {
              api.details[i].isEven = true
            }
            else {
              api.details[i].isEven = false
            }
          }
        }

        dispatch({
          type: TYPES.NURSE_PREVIOUS_CLASSES,
          previousClasses: api.details
        })
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

//getComments for user feed 

export const fetchNurseComments = (nurseId, content_id, success, reject) => {
  return async dispatch => {
    try {
      let params = {
        nurse_id: nurseId,
        content_id: content_id,
        appuser_id: nurseId,
        access_token: "",
        token: "j56sugRk029Po5DB"
      }
      let api = await storyApi.getContentComment(params)
      console.log('shwoing response here for submit', api)
      if (api.success) {
        dispatch({
          type: TYPES.NURSE_COMMENTS,
          comments: api.details
        })
        success(api.details)
      }
      else {
        reject(true)
      }
    } catch (error) {
      reject(true)
    }
  }
}

//fetch likes by sending content id from feed
export const fetchNurseLikes = (nurseId, content_id, success, reject) => {
  return async dispatch => {
    try {
      let params = {
        nurse_id: nurseId,
        content_id: content_id,
        appuser_id: nurseId,
        access_token: "",
        token: "j56sugRk029Po5DB"
      }
      let api = await storyApi.getContentLikes(params)
      console.log('shwoing response here for submit', api)
      if (api.success) {
        success(api.details)
      }
      else {
        reject(true)
      }
    } catch (error) {
      reject(true)
    }
  }
}

//fetch Online courses 
export const fetchOnlineCourses = (userId) => {
  return async dispatch => {
    try {
      let params = {
        user_id: userId,
        token: "j56sugRk029Po5DB",
        appuser_id: userId,
        access_token: "",
      }
      let api = await storyApi.getTrainingCourses(params)
      console.log('shwoing response here for submit', api)
      if (api.success) {
        dispatch({
          type: TYPES.ONLINE_COURSES,
          courses: api.details
        })
      }
      else {
      }
    } catch (error) {
    }
  }
}

//fetchCCPtools material 

export const fetchCCPMaterials = (userId, success, reject) => {
  return async dispatch => {
    try {
      let params = {
        user_id: userId,
        token: "j56sugRk029Po5DB",
        appuser_id: userId,
        access_token: "",
      }
      let api = await storyApi.getCCPToolMaterial(params)
      console.log('shwoing response here for submit', api)
      if (api.success) {

        success(api.details)
      }
      else {
        reject(true)
      }
    } catch (error) {
      reject(true)
    }
  }
}

//Add comments to user feed 
export const addComments = (params, success, reject) => {
  return async dispatch => {
    try {
      let api = await storyApi.postContentCommentBulk(params)
      console.log('shwoing response here for submit', api)
      if (api.success) {
        success(api.details)
      }
      else {
        reject(true)
      }
    } catch (error) {
      reject(true)
    }
  }
}

//Add Like in feed 

export const addLikesToFeed = (params, success, reject) => {
  return async dispatch => {
    try {
      let api = await storyApi.setContentLikeBulk(params)
      console.log('shwoing response here for submit', api)
      if (api.success) {
        dispatch({
          type: TYPES.ADD_LIKE,
          id: params.content_id
        })
        success(api.details)

      }
      else {
        reject(true)
      }
    } catch (error) {
      reject(true)
    }
  }
}