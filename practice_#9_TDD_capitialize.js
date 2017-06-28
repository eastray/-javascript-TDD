/**
 * Created by dhkim on 2017-05-12.
 */
function capitialize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  capitialize: capitialize
};