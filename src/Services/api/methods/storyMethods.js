import Api from '../index';
import { endPoints } from '../../index'
function getNurseContent(params) {
    return Api(
        endPoints.getNurseContent,
        params,
        'post',
    );
}
function getNurseClass(params) {
    return Api(
        endPoints.getNurseClass,
        params,
        'post',
    );
}
function setContentLikeBulk(params) {
    return Api(
        endPoints.setContentLikeBulk,
        params,
        'post',
    );
}
function getContentComment(params) {
    return Api(
        endPoints.getContentComment,
        params,
        'post',
    );
}
function getContentLikes(params) {
    return Api(
        endPoints.getContentLikes,
        params,
        'post',
    );
}
function postContentCommentBulk(params) {
    return Api(
        endPoints.postContentCommentBulk,
        params,
        'post',
    );
}
function getNurseProfile(params) {
    return Api(
        endPoints.getNurseProfile,
        params,
        'post',
    );
}
function getNurseFullProfile(params) {
    return Api(
        endPoints.getNurseFullProfile,
        params,
        'post',
    );
}

function getTrainingLanguage(params) {
    return Api(
        endPoints.getTrainingLanguage,
        params,
        'post',
    );
}
function getTrainingCourses(params) {
    return Api(
        endPoints.getTrainingCourses,
        params,
        'post',
    );
}
function submitClass(params) {
    return Api(
        endPoints.submitClass,
        params,
        'post',
    );
}
function updateUserSession(params) {
    return Api(
        endPoints.updateUserSession,
        params,
        'post',
    );
}
function getMasterData(params) {
    return Api(
        endPoints.getMasterData,
        params,
        'post',
    );
}
function updateUserContentView(params) {
    return Api(
        endPoints.updateUserContentView,
        params,
        'post',
    );
}
function updateUserProfile(params) {
    return Api(
        endPoints.updateUserProfile,
        params,
        'post',
    );
}
function getCCPLetsPlay(params) {
    return Api(
        endPoints.getCCPLetsPlay,
        params,
        'post',
    );
}
function getCCPToolType(params) {
    return Api(
        endPoints.getCCPToolType,
        params,
        'post',
    );
}
function getCCPToolMaterial(params) {
    return Api(
        endPoints.getCCPToolMaterial,
        params,
        'post',
    );
}
function getNurseList(params) {
    return Api(
        endPoints.getNurseList,
        params,
        'post',
    );
}
function UpdateFcmToken(params) {
    return Api(
        endPoints.updateDeviceToken,
        params,
        'post',
        true,
    );
}
export {
    getNurseContent,
    getNurseClass,
    setContentLikeBulk,
    getContentComment,
    getContentLikes,
    postContentCommentBulk,
    getNurseProfile,
    getNurseFullProfile,
    getTrainingLanguage,
    getTrainingCourses,
    submitClass,
    updateUserSession,
    updateUserContentView,
    updateUserProfile,
    getCCPLetsPlay,
    getCCPToolType,
    getCCPToolMaterial,
    getNurseList,
    getMasterData,
    UpdateFcmToken
}