// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
}
  
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}

function pAequorFactory (specimenNum, dna) {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate () {
      let mutatedBase = Math.floor(Math.random() * 15);
      let newBase = returnRandBase();
      if (newBase != dna[mutatedBase]) {
        dna.splice(mutatedBase, 1, newBase);
        return {
          specimenNum: specimenNum,
          dna: dna,
        };
      } else {
        newBase = returnRandBase();
        if (newBase != dna[mutatedBase]) {
          dna.splice(mutatedBase, 1, newBase);
          return {
            specimenNum: specimenNum,
            dna: dna,
          };
        }
      }
    },
    compareDNA (pAequor) {
      let similar = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna[i] === pAequor.dna[i]) {
          similar += 1;
        }
      }
      let percentageSimilar = (similar / 15) * 100;
      console.log(this.specimenNum + ' and ' + pAequor.specimenNum + ' have ' + percentageSimilar.toFixed(2) + '% DNA in common')
    },
    willLikelySurvive () {
      let cOrG = 0;
      for (let j = 0; j < 15; j++) {
        if (this.dna[j] === 'C' || this.dna[j] === 'G') {
          cOrG += 1;
        }
      }
      let percentageOfSurvival = (cOrG / 15) * 100;
      if (percentageOfSurvival.toFixed(0) >= 60) {
        return true
      } else {
        return false
      }
    }
  };
}