import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View, Button, Text, StyleSheet } from 'react-native'
import { Layout, Fonts } from '@/Theme'
import { CustomLayout, CustomButton } from '@/Components'
import { useDispatch, useSelector } from 'react-redux'
import { CommonActions } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import OtpText from './Components/OtpText'
import OTPInputView from './Components/OtpInput'
import { Colors, WP } from '../../../Theme'
import { getAppSettings, requestOtp } from '../../../Store/actions'
import { phoneNumberValidator, showToast, deviceInformation, isOnline } from '../../../Services/index'
const Login = ({ navigation }) => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const [mobile, setMobile] = useState("")
    const [loading, setLoading] = useState(false)
    dispatch(getAppSettings())
    sendOtp = () => {
        if (phoneNumberValidator(mobile)) {
            let params = {
                mobile_number: mobile,
            }
            setLoading(true)
            isOnline((connected) => {
                dispatch(requestOtp(params, navigation, setLoading))
            }, (offline) => {
                setLoading(false)
                showToast(t('commonApp.internetError'))
            })
        }
        else {
            showToast(t('login.valid'))
        }
    }
    return (
        <View style={[Layout.fill, Layout.rowCenter]}>
            <CustomLayout
                isLogin={true}
                loginPlaceHolder={t('login.input')}
                value={(mobile)}
                onChangeText={setMobile}
                onArrowPress={sendOtp}
            >
                {/* <OtpText />
                {enterOtp ?
                    <CustomButton
                        title={t('login.resendOtp')}
                        onPress={resendPassword}
                        containerStyles={styles.resendOtp}
                        titleColor={Colors.white}
                    />
                    :
                    null
                }

                {enterOtp ?
                    <OTPInputView />
                    :
                    <CustomButton
                        title={t('login.otpInput')}
                        onPress={navigateHome}
                        titleColor={Colors.grey}
                        onPress={() => setEnterOtp(true)}
                    />
                } */}
                <CustomButton
                    title={t('login.submit')}
                    onPress={sendOtp}
                    loading={loading}
                />
            </CustomLayout>
        </View>
    )
}

export default Login
const styles = StyleSheet.create({
    resendOtp: {
        width: WP('25'),
        alignSelf: 'flex-end',
        backgroundColor: 'transparent',
    },
});
