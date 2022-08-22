onEvent("lootjs", (event) => {
    event
        .addEntityLootModifier("minecraft:pig")
        .hasAnyStage("testing")
        .addLoot("minecraft:coal");
});


onEvent("lootjs", (event) => {
    event
      //  .addLootTableModifier("minecraft:chests/ancient_end_city")
        .addLootTableModifier(/minecraft:chests.*/)
        .hasAnyStage("testing")
        .removeLoot(Ingredient.getAll())
        .addLoot("minecraft:coal");
});

onEvent("lootjs", (event) => {
    event
      //  .addLootTableModifier("minecraft:chests/ancient_end_city")
        .addLootTableModifier("graveyard:chests/crypt_loot")
        .hasAnyStage("testing")
        .removeLoot(Ingredient.getAll())
        .addLoot("minecraft:coal");
});



