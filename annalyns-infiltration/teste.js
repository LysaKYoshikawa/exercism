function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  if (guardiansAwake(archerIsAwake, knightIsAwake, petDogIsPresent)) {
    return false;
  } else {
    if (preRec(petDogIsPresent)) {
      return true
    }
    else {
      return false;
    }
  }

  function preRec(prisonerIsAwake) {
    if (prisonerIsAwake) {
      return true;
    } else {
      return false;
    }
  }

  function guardiansAwake(archerIsAwake, knightIsAwake, petDogIsPresent) {
    if (archerIsAwake && knightIsAwake && !petDogIsPresent) {
      return true;
    } else {
      return false;
    }
  }

  switch (XPTO) {
    case guardiansAwake():

      break;
    case RuleTester():

      break;

    default:
      break;
  }

}