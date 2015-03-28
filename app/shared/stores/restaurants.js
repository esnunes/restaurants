import { Store } from 'flummox';


const Status = {
  Loading: 'loading',
  Ok: 'ok',
};


export default class RestaurantsStore extends Store {

  constructor (flux) {
    super();

    const actions = flux.getActions('poi');
    this.registerAsync(actions.filter, this.handleFilterRequest, this.handleFilter, this.handleFilter);

    this.state = {};
  }

  handleFilterRequest (params = {}) {
    this.setState({ status: Status.Loading, params });
  }

  handleFilter (res) {
    if (res.status !== 200) return;

    this.setState({ status: Status.Ok, restaurants: res.data });
  }

  getStatus () {
    return this.state.status || Status.Loading;
  }

  getRestaurants () {
    return this.state.restaurants || [];
  }

  static serialize (state) {
    return JSON.stringify(state);
  }

  static deserialize (state) {
    return JSON.parse(state);
  }

}
