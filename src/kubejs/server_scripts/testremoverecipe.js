
onEvent('entity.loot_tables', event => {
  event.modifyEntity('minecraft:pig', table => {
    table.addPool(pool => {
      // Modify pig loot table to *also* drop dirt on top of its regular drops
      pool.addItem('minecraft:dirt')
    }).stage('testing')
  })
})

