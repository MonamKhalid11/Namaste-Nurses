import { BASE_URL } from '../index'
import { deviceInformation } from '../index'
let deviceInfo = null
deviceInformation((success) => {
  deviceInfo = success
})
export default async function api(path, params, method) {
  let options;
  options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'TOKEN': deviceInfo ? deviceInfo.id : 'j56sugRk029Po5DB',
      'APITYPE': 1,
    },
    method: method,
    ...(params && { body: JSON.stringify(params) }),
  };
  try {
    console.log("showing options here", options)
    const resp = await fetch(BASE_URL + path, options);
    console.log("showing response ", resp);

    const responseJSON = await resp.json();
    console.log("showing response parsed ", JSON.parse(responseJSON.data));

    return JSON.parse(responseJSON.data);
  } catch (error) {
    return error;
  }
}
