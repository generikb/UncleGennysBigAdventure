onEvent('jei.hide.items', event => {
  event.hide('create:gearbox')
})


onEvent('jei.add.items', event => {
  event.add(Item.of('create:gearbox'))
}).stage('testing')