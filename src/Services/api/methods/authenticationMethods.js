import Api from '../index';
import { endPoints } from '../../index'
function sendMobileOTP(params) {
    return Api(
        endPoints.sendMobileOTP,
        params,
        'post',
    );
}
function verifyMobileOTP(params) {
    return Api(
        endPoints.verifyMobileOTP,
        params,
        'post',
    );
}
function getAppSetting(params) {
    return Api(
        endPoints.getAppSetting,
        params,
        'post',
    );
}
function updateDeviceToken(params) {
    return Api(
        endPoints.updateDeviceToken,
        params,
        'post',
    );
}
export {
    sendMobileOTP,
    verifyMobileOTP,
    getAppSetting,
    updateDeviceToken
}