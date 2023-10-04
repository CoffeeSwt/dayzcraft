Overview:
The project's goal is to give a realistic feeling of the enviroment enclosing around the dead: Intended for more immersion in cold servers, primarily using the Namalsk Island and Namalsk Survival mods.

This mod adds frost and snow to dead players after they would normally decay. A dead body freezes depening on the surrounding temperature and will be covered in snow depening on the location.
Once a body is frozen, it can no longer be looted or skinned. You could try warming it up though.

Features:
30 new character frost textures, applied when a body decays in freezing temperatures.
A new snowy textures for clothing, applied when a body freezes on snow or ice.
Frozen bodies can not be looted or skinned, but can be buried.
Frozen bodies will last much longer than normal bodies and the time depends on the temperature.
Server installation:
Subscribe to this mod on the Steam Workshop.
Add the mod to the server starting parameter "-mod=@FrozenCorpses;"
Copy the "Nate.bikey" into your servers "keys" folder
Set the optional server configs - guide below
Enjoy!


The following values can optionally be added to your mpmissions/your.mission/db/globals.xml:

<var name="FreezingDeadPlayerTemperature" type="1" value="0.0"/>
This is the ambient temperature in °C at which player corpses freeze. Default value is "0.0".
If you do not want every corpse on regular namalsk to freeze, I recommend setting this to around -8.0 to -11.0 (this depends on your server settings/temperature).

<var name="CleanupLifetimeFrozenPlayer" type="0" value="600"/>
This is the lifetime of frozen corpses (in seconds) per degree below the configured freezing point. Default value is "600".
When using the default freezing point of 0.0 and a player that decayed at -10°C, the frozen body will last 6000s (=100min).
I recommend setting this a lot lower for high population (>30) namalsk servers.
The "CleanupLifetimeDeadPlayer" value still applies, bodies will freeze after the normal lifetime (after 70% of that lifetime to be exact).

<var name="UseWinterChernarusLivonia" type="0" value="1"/>
If you are using the 'Winter Chernarus' or 'Winter Livonia' mods, add this line. Otherwise the snowy clothing texture will not get applied.


Creators:
Nate: Scripting
Kaffeina: Textures

Promotion:
Have any questions, suggestions or found a bug? Join our Discord or drop a message below!
Kaffeina's Workshop Discord: https://discord.gg/3AYpt69afq