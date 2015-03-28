import { Actions } from 'flummox';

import service from '../services/poi';


export default class extends Actions {

  constructor (flux) {
    super();

    this.flux = flux;
  }

  async filter (options = {}) {
    const config = this.flux.getStore('config');
    const geolocation = this.flux.getStore('geolocation');

    const params = {
      q: options.q,
    };

    if (geolocation.state.status === 'ok') {
      params.lat = geolocation.state.currentPosition.latitude.toFixed(6);
      params.lng = geolocation.state.currentPosition.longitude.toFixed(6);
      if (typeof options.km !== 'undefined') params.meters = options.km * 1000;
    }

    return service.filter(config.state.poi.url, params);
  }

}
