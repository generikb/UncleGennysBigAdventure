onEvent('recipes', event => {
let buddycardArrayEpic = []
let buddycardArrayRare = []
let buddycardArrayUncommon = []
let buddycardArrayCommon = []

//Epic Foil cards to create Epic Buddy Token
    Ingredient.of('#buddycards:epic').getStacks().forEach(i => {
        buddycardArrayEpic.push(i.withNBT('{foil: 1b}'))
    })    

    event.recipes.createMixing('kubejs:buddy_token_epic', 
      [
  Ingredient.matchAny(buddycardArrayEpic),
  'forbidden_arcanus:xpetrified_orb'
]).heated()

//Rare Foil cards to create Rare Buddy Token
    Ingredient.of('#buddycards:rare').getStacks().forEach(i => {
        buddycardArrayRare.push(i.withNBT('{foil: 1b}'))
    })    

    event.recipes.createMixing('kubejs:buddy_token_rare', 
      [
  Ingredient.matchAny(buddycardArrayRare),
  'forbidden_arcanus:xpetrified_orb'
]).heated()


//Uncommon Foil cards to create Uncommon Buddy Token
    Ingredient.of('#buddycards:uncommon').getStacks().forEach(i => {
        buddycardArrayUncommon.push(i.withNBT('{foil: 1b}'))
    })    

    event.recipes.createMixing('kubejs:buddy_token_uncommon', 
      [
  Ingredient.matchAny(buddycardArrayUncommon),
  'forbidden_arcanus:xpetrified_orb'
]).heated()

//Common Foil cards to create Common Buddy Token
    Ingredient.of('#buddycards:common').getStacks().forEach(i => {
        buddycardArrayCommon.push(i.withNBT('{foil: 1b}'))
    })    

    event.recipes.createMixing('kubejs:buddy_token_common', 
      [
  Ingredient.matchAny(buddycardArrayCommon),
  'forbidden_arcanus:xpetrified_orb'
]).heated()


})

