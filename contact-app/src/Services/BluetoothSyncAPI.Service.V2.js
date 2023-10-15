export default class BluetoothSyncAPIService {
  static BLUETOOTH_SYNC_API = 'https://randomuser.me/api/?results=1000';

  static sync = () => {
    return new Promise((resolve,reject) => { 
      try{
        BluetoothSyncAPIService.getBluetoothInfo(BluetoothSyncAPIService.BLUETOOTH_SYNC_API, {}, 3).then(response => {
          resolve(response);
        });
      }catch(error){
        reject(error.message)
      }
    });
  };

  static getBluetoothInfo(url, options, retries = 3) {
    return fetch(url, options).then(response => {
      if(response.ok) {
        return response.json();
      }else{
        if(retries > 0) {
          return  BluetoothSyncAPIService.getBluetoothInfo(url, options, retries - 1);
        }else {
          throw new Error("Failed to sync data");
        }
      }
    }).catch((error)=> {
      throw new Error("Failed to sync data");
    });
  }
}
