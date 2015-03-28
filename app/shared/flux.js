import { Flummox } from 'flummox';


export default class Flux extends Flummox {

  constructor (opts = {}) {
    super();

    this.opts = opts;

    this.createActions('poi', require('./actions/poi'), this);
    this.createActions('navigation', require('./actions/navigation'));
    this.createActions('geolocation', require('./actions/geolocation'));

    this.createStore('config', require('./stores/config'), opts.config);
    this.createStore('restaurants', require('./stores/restaurants'), this);
    this.createStore('navigation', require('./stores/navigation'), this);
    this.createStore('geolocation', require('./stores/geolocation'), this);
  }

  clientSide (cb, ...args) {
    if (this.opts.serverSide) return false;
    if (cb) cb(...args);
    return true;
  }

  serverSide (cb, ...args) {
    if (!this.opts.serverSide) return false;
    if (cb) cb(...args);
    return true;
  }

}
