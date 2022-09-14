
onEvent('recipes', event => {
	event.replaceInput({}, 'alexsmobs:bear_fur', 'naturalist:bear_fur')
	event.shapeless('2x alexsmobs:bear_fur', ['naturalist:bear_fur'])
})

onEvent('item.tags', event => {
	event.get('alexsmobs:animal_dictionary_ingredient').remove('alexsmobs:bear_fur')
})