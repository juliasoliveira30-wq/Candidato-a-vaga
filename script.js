// Lista de candidatos
const candidatos = [
  { id: 1, nome: 'Ana', notaTecnica: 8, ingles: true, status: 'Aprovado na Técnica' },
  { id: 2, nome: 'Bruno', notaTecnica: 6, ingles: false, status: 'Reprovado' },
  { id: 3, nome: 'Carla', notaTecnica: 9, ingles: true, status: 'Aprovado na Técnica' },
  { id: 4, nome: 'Daniel', notaTecnica: 7, ingles: false, status: 'Aprovado na Técnica' },
  { id: 5, nome: 'Eduarda', notaTecnica: 10, ingles: true, status: 'Aprovado na Técnica' }
];

//Filter: Apenas aprovados 
const aprovadosTecnica = candidatos.filter(
  candidato => candidato.status === 'Aprovado na Técnica'
);

//Map: Adicionar bônus de inglês 
// Regra: +1 ponto se tiver inglês 
const candidatosComBonus = aprovadosTecnica.map(candidato => {
  const bonusIngles = candidato.ingles ? 1 : 0;

  return {
    ...candidato, 
    notaFinal: candidato.notaTecnica + bonusIngles
  };
});

// Reduce: Soma das notas finais
const somaNotas = candidatosComBonus.reduce(
  (total, candidato) => total + candidato.notaFinal,
  0
);

//Cálculo da média 
const mediaTurma = somaNotas / candidatosComBonus.length;

// Relatório de candidatos
console.log('--- RELATÓRIO DE CANDIDATOS ---');

candidatosComBonus.forEach(({ nome, notaTecnica, notaFinal, ingles }) => {
  console.log(
    `Nome: ${nome} | Nota Técnica: ${notaTecnica} | Inglês: ${ingles ? 'Sim' : 'Não'} | Nota Final: ${notaFinal}`
  );
});

console.log('--------------------------------');
console.log(`Total de candidatos aprovados: ${candidatosComBonus.length}`);
console.log(`Média final: ${mediaTurma.toFixed(2)}`);
