import config from './config';


let file = config.environment === 'production' ? '' : '.dev';


export default require(`../../../webpack.config${file}`);
