// Listen to item registry event
onEvent('item.registry', event => {
  
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('buddy_token_epic').glow(true)

  event.create('buddy_token_rare').glow(true)

  event.create('buddy_token_uncommon').glow(true)

  event.create('buddy_token_common').glow(true)

})