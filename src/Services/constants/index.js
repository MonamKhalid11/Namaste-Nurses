
// export const BASE_URL = 'http://34.94.112.24/noora/api/v5/' //Live 

//staging 
export const BASE_URL = 'http://34.94.112.24/noora/api/v6/'
export const endPoints = {

    //Authentication EndPoints
    sendMobileOTP: 'sendMobileOTP',
    verifyMobileOTP: 'verifyMobileOTP',
    updateDeviceToken: 'updateDeviceToken',
    getAppSetting: 'getAppSetting',
    getMasterData: "getMasterData",

    //Story EndPoints
    getNurseContent: "getNurseContent",
    getNurseClass: 'getNurseClass',
    setContentLikeBulk: 'setContentLikeBulk',
    getContentComment: 'getContentComment',
    getContentLikes: 'getContentLikes',
    postContentCommentBulk: "postContentCommentBulk",
    getNurseProfile: 'getNurseProfile',
    getNurseFullProfile: 'getNurseFullProfile',
    getTrainingLanguage: 'getTrainingLanguage',
    getTrainingCourses: 'getTrainingCourses',
    submitClass: 'submitClass',
    updateUserSession: 'updateUserSession',
    updateUserContentView: 'updateUserContentView',
    updateUserProfile: 'updateUserProfile',
    getCCPLetsPlay: 'getCCPLetsPlay',
    getCCPToolType: 'getCCPToolType',
    getCCPToolMaterial: 'getCCPToolMaterial',
    getNurseList: 'getNurseList',
}