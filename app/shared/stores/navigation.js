import { Store } from 'flummox';


const Apps = {
  Waze: 'waze',
  Google: 'google',
  Apple: 'apple',
};


export default class NavigationStore extends Store {

  constructor (flux) {
    super();

    const actions = flux.getActions('navigation');
    this.register(actions.update, this.handleUpdate);

    this.state = { app: Apps.Waze };
  }

  handleUpdate (opts) {
    this.setState(opts);
  }

  getApp () {
    return this.state.app;
  }

  static serialize (state) {
    return JSON.stringify(state);
  }

  static deserialize (state) {
    return JSON.parse(state);
  }

}
