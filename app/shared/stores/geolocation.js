import { Store } from 'flummox';


export default class GeolocationStore extends Store {

  constructor (flux) {
    super();

    const actions = flux.getActions('geolocation');
    this.registerAsync(actions.getCurrentPosition,
      this.handleRequest,
      this.handleSuccess,
      this.handleFailure);

    this.state = {
      status: 'ok',
    };
  }

  handleRequest () {
    this.setState({ status: 'loading' });
  }

  handleSuccess (geoposition) {
    this.setState({ status: 'ok', currentPosition: geoposition.coords });
  }

  handleFailure () {
    this.setState({ status: 'failed'});
  }

  static serialize (state) {
    return JSON.stringify(state);
  }

  static deserialize (state) {
    return JSON.parse(state);
  }

}
