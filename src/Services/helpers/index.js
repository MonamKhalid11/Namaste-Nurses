import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-simple-toast';
import ImagePicker from 'react-native-image-picker';
import DeviceInfo from 'react-native-device-info';
import { Platform } from 'react-native';

import React, { Component } from 'react';
import {
  PulseIndicator,
  SkypeIndicator,
  BallIndicator
} from 'react-native-indicators';
import { Colors, WP } from '../../Theme';
export const phoneNumberValidator = val => {
  return /^[6-9]\d{9}$/.test(
    val,
  );
};
export const isOnline = (success, reject) => {
  NetInfo.fetch().then(state => {
    console.log("showing online states ", state)
    if (state.isConnected) {
      success(true)
    } else {
      reject(false)
    }
  });
};

export const showToast = (message, duration) => {
  Toast.show(message, duration ? Toast.LONG : Toast.SHORT);
};
export const storeToStorage = (key, data) => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
export const retriveFromStorage = (key, token) => {
  AsyncStorage.getItem(key, (err, value) => {
    if (err) {
      console.log(err);
      token(null);
    } else {
      token(JSON.parse(value));
    }
  });
};
export const ShowActivityIndicator = (color) => {
  return (
    <BallIndicator color={color ? color : Colors.grey} size={WP('7')} />
  )
}
export const getCurrentDate = () => {
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();
  return year + '-' + month + '-' + date;//format: dd-mm-yyyy;
}
export const getPicture = (isCamera, success, reject) => {
  const options = {
    quality: 0.1,
    maxWidth: 700,
    maxHeight: 700,
    storageOptions: {
      skipBackup: true,
    },
  };

  if (isCamera) {
    ImagePicker.launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        reject();
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        reject();
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        success(source);
      }
    });
  }
  else {
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        reject();
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        reject();
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        success(source);
      }
    });
  }
};
export const pickImages = (success, reject) => {
  const options = {
    quality: 0.1,
    maxWidth: 700,
    maxHeight: 700,
    storageOptions: {
      skipBackup: true,
    },
  };
  ImagePicker.showImagePicker(options, response => {
    if (response.didCancel) {
      console.log('User cancelled photo picker');
      reject();
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
      reject();
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      let source = { uri: response };
      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };
      success(source);
    }
  });

};


export const deviceInformation = (success) => {
  try {
    let brand = DeviceInfo.getBrand();
    let deviceInfo = null

    if (Platform.OS === 'ios') {
    }
    else {
      DeviceInfo.getAndroidId().then(androidId => {
        deviceInfo = {
          id: androidId,
          brand: brand
        }
        success(deviceInfo)
      });
    }
  } catch (error) {

  }
}

