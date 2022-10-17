onEvent('recipes', event => {

    const modifyShaped = (result, count, pattern, ingridients) => {
        e.remove({
            output: result
        });
        e.shaped(Item.of(result, count),
            pattern,
            ingridients
        );
    };

	//
	// Add Recipes to allow the redying of the terracotta bricks
	// so you don't have to start over every time
	//
    event.shaped('8x biomemakeover:white_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:white_dye'
	})



    event.shaped('8x biomemakeover:orange_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:orange_dye'
	})


    event.shaped('8x biomemakeover:magenta_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:magenta_dye'
	})

    event.shaped('8x biomemakeover:light_blue_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:light_blue_dye'
	})	

    event.shaped('8x biomemakeover:yellow_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:yellow_dye'
	})

    event.shaped('8x biomemakeover:lime_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:lime_dye'
	})

    event.shaped('8x biomemakeover:pink_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:pink_dye'
	})	

    event.shaped('8x biomemakeover:gray_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:gray_dye'
	})		

    event.shaped('8x biomemakeover:light_gray_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:light_gray_dye'
	})	

    event.shaped('8x biomemakeover:cyan_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:cyan_dye'
	})		

    event.shaped('8x biomemakeover:purple_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:purple_dye'
	})	

    event.shaped('8x biomemakeover:blue_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:blue_dye'
	})		

    event.shaped('8x biomemakeover:brown_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:brown_dye'
	})	

    event.shaped('8x biomemakeover:green_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:green_dye'
	})		

    event.shaped('8x biomemakeover:red_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:red_dye'
	})

    event.shaped('8x biomemakeover:black_terracotta_bricks',
		[
		  'ttt',
		  'tdt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 d: 'minecraft:black_dye'
	})

	//
	// Add a recipie to remove the dye if needed
	//
    event.shaped('8x biomemakeover:terracotta_bricks',
		[
		  'ttt',
		  'twt',
		  'ttt'
		], {
		 t: '#gennygreatadv:terracotta_bricks',
		 w: 'minecraft:water_bucket'
	})


	//
	// Allow the crafting of hoppers from Logs
	//
	//
	event.shaped('minecraft:hopper',
		[
			'ILI',
			'ILI',
			' I '
		], {
			I: 'minecraft:iron_ingot',
			L: '#minecraft:logs'
		})

	//
	// Create Recipes Additions
	//
	event.recipes.createCrushing(
		[
		  'minecraft:netherite_scrap',
		  Item.of('minecraft:ancient_debris').withChance(0.5)
		], 'minecraft:ancient_debris')
});
