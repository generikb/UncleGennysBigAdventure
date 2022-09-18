// priority: 0


onEvent('jei.hide.items', event => {
	// Hide items in JEI here
	event.hide([
			'quark:golden_apple_crate',
			'quark:apple_crate',
			'quark:potato_crate',
			'quark:carrot_crate',
			'quark:beetroot_crate',
			'shrink:mob_bottle',
			'cgm:workbench'
		])
})