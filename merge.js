/**
 * $merge
 *
 * Copia as propriedades enumeravies de b para a e retorna a, se b
 * tem uma propriedade de mesmo nome, a propriedade sera deixada
 * intacta. Esta modulo nao manipula metodos getter e setter nem copia
 * atributos a funcao curry
 *
 * @module $merge
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 *
 *        $merge({ a: '', b: '' }, { c: '' });
 *
 */
this.Ninja.module('$merge', ['$curry'], function ($curry) {

  /**
   * Copia as propriedades enumeravies de b para a e retorna a, se b
   * tem uma propriedade de mesmo nome, a propriedade sera deixada
   * intacta. Esta modulo nao manipula metodos getter e setter nem copia atributos
   *
   * @public
   * @method merge
   * @param {Object} a Primeiro objeto
   * @param {Object} b Segundo objeto
   * @return {Object} Primeiro objeto com as propriedades do segundo objeto
   * @example
   *
   *        $merge({ a: '', b: '' }, { c: '' });
   *
   */
  function merge(a, b) {
    for (key in b) if (!(a.hasOwnProperty[key])) a[key] = b[key];
    return a;
  }

  /**
   * Revelacao do modulo $merge, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(merge);

});
