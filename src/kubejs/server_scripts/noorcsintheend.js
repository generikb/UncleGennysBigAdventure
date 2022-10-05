const denyList = ['orcz:goblinwerid', 'orcz:orcsavageweird']
onEvent('entity.spawned', event => {
  if(denyList.includes(event.entity.type) && event.level.dimension == 'minecraft:the_end') {
    event.cancel()
  }})