/**
 * busca dentro de un objeto
 * @param  {Ojbeto} obj Objeto en el que buscamos  gente = [{nombre:'luis', 'apellido': 'garcia'},{'nombre':'juan','apellido': 'martinez'}]
 * @param  {llave} key llave del campo en que se busca 'nombre'
 * @param  {string} val identificador que se busca
 * @return {Objeto}   Devuelve el objeto que coincide
 */

// getObjects(gente, 'nombre', 'martinez') => {'nombre':'juan','apellido': 'martinez'}

function getObjects(obj, key, val) {
  var objects = [];
  for (var i in obj) {
    if (!obj.hasOwnProperty(i)) continue;
    if (typeof obj[i] == 'object') {
      objects = objects.concat(getObjects(obj[i], key, val));
    } else if (i == key && obj[key] == val) {
      objects.push(obj);
    }
  }
  return objects;
  }
