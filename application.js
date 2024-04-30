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
      let similarBases = 0;
      for (let i = 0; i < 15; i++) {
        if (pAequor[i] === this.dna[i]) {
          similarBases += 1;
        }
      }
      let percentage = (similarBases / 15) * 100;
      console.log('specimen #1 and specimen #2 have ' + percentage.toFixed(0) + '% DNA in common')
    },
    willLikelySurvive () {
      let cOrG = 0;
      for (let i = 0; i < 15; i++) {
        if (this.dna === 'C' || this.dna === 'G') {
          cOrG += 1;
        }
      }
      let percentage = (cOrG / 15) * 100;
      if (percentage.toFixed(0) >= 60) {
        return true
      } else {
        return false
      }
    }
  };
}