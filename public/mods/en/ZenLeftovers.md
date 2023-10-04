What Is This?

This mod adds a player-tracking feature: dropped garbage after consuming vanilla packaged food & medical items.

There are some lightly re-textured models for empty food cans etc, nothing too fancy.

The mod is intended for hardcore and RP servers so that players can track other players' activity by finding their garbage trail - if players don't want to be tracked, then they need to clean up after themselves carefully ;)

You can craft empty cans into fish hooks (optional - can be disabled in the server config. Very rough on your knife tool and produces a damaged hook).

You can turn some paper-based food packets into regular paper.

You can hold liquids in empty jam or honey jars (only 250mL, 25% of regular bottles - and they're extremely fragile and easy to ruin).

Items That Drop Junk When Consumed:

- All vanilla packaged food and drink items
- Used saline bags
- Used blood bags
- Used morphine, epinephrine and pox injectors
- MRE items from MassFood mod (as an example of how to add modded items)

Keep in mind that any modded items will only drop empty versions of themselves and not re-textured items with a unique name & description. But it's the best I can do with this sort of mod, and better than nothing I guess!

Installation:

To install follow the usual steps - subscribe to the mod, copy the mod folder to your server folder, copy the .bikey file into the server's key folder, and then (optional) copy the types.xml entries into your types. Don't forget to put the mod "@ZenLeftovers" in your server's mods list.

The types.xml file is optional - if you don't add the types, then the food items will disappear immediately when a player is not nearby. If you have a popular server this might be preferred, if you have a quieter server you might want to implement the types.xml items so that you can still track players who have left an area.

The default persistence on all empty garbage items is 30 minutes.

If you use vanilla food items you don't need to do anything else, but if you use food or medical mods and want to add them you'll need to modify the .json config file. Further instructions are included in the mod files.

Also be aware there may be conflicts with any mods that override any of the player consume functions - especially any that affect how food/water/meds are consumed. I haven't done any testing with other food mods except for MRE Foods so please let me know if you encounter any bugs while consuming items with this mod installed.

Adding Modded Items:

This mod comes with a JSON config file that you can modify to add extra items. Run your server once after installation, and a JSON config file will be added in your server config folder under "Zenarchist/ZenLeftoversConfig.json".

This file is where you can add extra junk items that get dropped after consuming an original food/drink/medical item.

Make sure that your JSON syntax is correct or it'll break the mod, but all you need to do to add a junk item entry is add something like this:

{
    "OriginalItemType": "Food_Type_Name",
    "LeftoverItemType": "Junk_Type_Name",
    "ItemHealth": 1,
    "DropToGround": 0
}

It'll work with any item, doesn't necessarily need to be food (could be meds too for example).

OriginalItemType is the item you consume.
LeftoverItemType is the item that is dropped on the ground after.
ItemHealth is the HP of the junk item - 0 means inherit health from the original item, -1 means ruined, 1-100 means HP (1 = badly damaged).
DropToGround is a true/false 1/0 value - 0 means the junk item will be placed in the player's hands, 1 means the item will be dropped onto the ground.

The persistence on these junk items will also be whatever the edible equivalents are in your types.xml files, so be aware that this might result in your server being overly cluttered with junk items. If you have a popular server and want to run this mod you might want to set the ItemHealth to -1 so that the junk item spawns ruined and despawns if no one is around.

You can also disable the use of empty jars as water containers by changing the LeftoverItemType for honey and marmalade to Empty_Honey_NoLiquid and Empty_Marmalade_NoLiquid (particularly useful for Namalsk as the default Empty model doesn't freeze).

Repacking & Credits:

Feel free to repack or use this mod or its source code in any way with no credit necessary :)

Huge thanks to everyone in the DayZ Modding discord (https://discord.com/invite/NEX27Gx) - I learned how to do all of this by just searching through prior discussions. Also thanks Spurgle for your retexturing vanilla items guide on YouTube, and thanks heaps to Mass for some great suggestions & advice.

Source Code:
Check out the source code to all my mods here: Github[www.zenarchist.io]

PS. Check Out My Servers:

If you want to see all of my mods in action check out HardcoreDayZꓸcom!