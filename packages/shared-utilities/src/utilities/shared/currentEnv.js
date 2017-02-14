let isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
let isNode = new Function("try {return this===global;}catch(e){return false;}");

const environment = () => {
  let env;
  if(isBrowser()) env = 'browser';
  if(isNode()) env = 'node';
  return env;
}

export default environment;
