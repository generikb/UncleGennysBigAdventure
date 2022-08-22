// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (You will see this line every time server resources reload)')

onEvent('server.load', event => {
	// Change recipes here
		const lootTables = event.server.getMinecraftServer().m_129898_().getIds().filter(name => name.toString().contains('chests'))
JsonIO.write('kubejs/exported/lootTables.json', {big_list: lootTables})
})

onEvent('server.load', event => {
	// Change recipes here
		const lootTables = event.server.getMinecraftServer().m_129898_().getIds()
JsonIO.write('kubejs/exported/allLootTables.json', {big_list: lootTables})
})

onEvent('recipes', event => {
	// Change recipes here
})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

