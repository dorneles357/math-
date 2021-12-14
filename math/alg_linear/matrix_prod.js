/*Dados de entrada*/
let arr_1 = [
  [1, 2],
  [3, 4],
];

let arr_2 = [[3], [2]];

/*Verificar se o numero de linhas e colunas são iguais*/
let arr_row_1 = arr_1.length;
let arr_col_1 = arr_1[0].length;

let arr_row_2 = arr_2.length;
let arr_col_2 = arr_2[0].length;


if (arr_col_1.length === arr_row_2.length) {
  return true;
} else {
  return false;
}

/*criar uma nova matriz de ordem correspondente/
