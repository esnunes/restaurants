import { Store } from 'flummox';


class ConfigStore extends Store {

  constructor (config = {}) {
    super();

    this.state = config;
  }

  static serialize (state) {
    return JSON.stringify(state);
  }

  static deserialize (state) {
    return JSON.parse(state);
  }

}


export default ConfigStore;
