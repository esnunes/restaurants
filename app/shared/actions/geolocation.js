import { Actions } from 'flummox';


export default class extends Actions {

  async getCurrentPosition () {
    if (typeof navigator === 'undefined' || !('geolocation' in navigator)) return Promise.reject();

    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

}
