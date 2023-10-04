What Is This?

This mod overhauls how combination locks work in DayZ. It's designed to enhance the vanilla experience and is best suited for lightly modded servers, although it works with most popular basebuilding mods.

Combination locks will now remember the players who enter the code - much like the Code Lock mod. You only need to enter the code once, then the door will open for you without needing to enter the code again.

There are two lock-opening options the server can choose from: instant open, and a slow open.

Instant open works like the Code Lock mod - press F and the door/gate will open instantly.

The slow option simulates entering the code - so you need to cycle through a few "pretend" combination dial actions before the door will open (for a more authentic hardcore DayZ experience). Servers can adjust how many cycles are required, by default it's set to 1 cycle per digit on the lock.

This mod also includes a few other optional features, such as displaying the code on the screen while dialing, interacting with locks & gates from anywhere on the object, it adds several new combination locks (with up to 9 digits), and a new raiding option using a Bolt Cutter tool to break the locks. These features can be turned on or off based on the server config.

Here is a video explaining the core features of the mod as at the time of release:

https://youtu.be/fhJb1UWMCeI

I also included a stringtable so translations should work for all languages (although some translations might be inaccurate as I used an automatic translation tool).

Please report any bugs or mistranslations and I'll fix them ASAP - or feel free to fix them yourself and repack, it's open source (more info below).

Note: This mod may conflict with other mods that either modify combination lock behaviour or fence behaviour (especially base-building mods). I can make no guarantees for compatibility with other mods and don't have time to make it work with them all.

Known Compatibility:
- CodeLock: Seems fully compatible.
- BuildingFortifications: Seems fully compatible.
- EvenMoreDoors: Seems fully compatible.
- BaseBuildingPlus: Is 99% compatible - Manage Lock action doesn't work, can't figure out how to fix it yet as #ifdef BBP doesn't work for me. But this doesn't break my mod, it's just one feature that doesn't work properly.

Known Incompatibility/Issues:
- Expansion: Will likely have issues - haven't done any testing on it. Given the complexity of that mod I probably won't try unless it's a popular request, as most servers run code locks with Exp anyway.

Installation Instructions:

Install this mod like any other mod - copy it into your server folder and add it to your mods list. It must be run on both server and client. Make sure to copy the .bikey into your server keys.

Repack & Source Code:

You can repack this mod if you like, and do anything else you want with it for that matter. Just keep in mind my future updates won't be applied so make sure to check back for new versions if you notice any bugs. The source code is on my GitHub at www.zenarchist.io

Enjoy!