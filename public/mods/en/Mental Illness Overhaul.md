ATTENTION!!! SOME FEATURE CAN GIVE NAUSEA/EPILEPSY REACTION, IF YOU SUFFER THIS, DISABLE THE IMAGE ON THE .JSON

What:
This is a complete rework of my previous Mental Illness Mod, i wanted to add more stuff and making them editable by the user.

How:
More Illness you have more Noises you're going to hear inside your Head
Killing a Player , Get a Bleeding Wound from a Zombie,and eating Human Steak can modify your MentalHealthState. ( and many more )
With:
"Vodka" or "Beer" liquid ( is not the Bottle but the Liquid inside )
"Rest" ( Laying Down )
your Disease State will Decrease,

while with BloodTestKit you can check your General Immunity and your Mental Illness Level.

you can set eveything you need in the .JSON

see the video for further explantion ^^

{
    "MentalIllnessAll": [
        {
            "qtywAlcol": 8.0,
            "qtyHumanSteakInserted": 20.0,
            "qtyRest": 0.5,
            "tickDiseaseCheck": 10.0,
            "qtyShock": 0.10000000149011612,
            "maxCount": 1000,
            "stage1": 100,
            "stage2": 250,
            "stage3": 400,
            "stage4": 600,
            "stage5": 800,
            "radNameTestKit": 32,
            "spawnZombiePhantomQty3": 1,
            "spawnZombiePhantomQty4": 2,
            "spawnZombieQty5": 1
        }
    ],
    "MentalIllnessCombat": [
        {
            "qtyBiteInserted": 10.0,
            "qtyBiteInsertedAnimal": 10.0,
            "qtyAgentKillinPlayer": 100.0,
            "qtyAgentKillinZombie": 5.0,
            "qtyAgentKillinAnimal": 5.0,
            "qtyShockDEFFromEnemy": 30
        }
    ],
    "MentalTimer": [
        {
            "restTimer": 3.0,
            "illCheckTimer": 900.0,
            "songCheckTimer": 120.0,
            "mentalSoundTimer": 60.0,
            "morementalSoundTimer": 45.0,
            "moremorementalSoundTimer": 30.0,
            "suicideCheckTimer": 20.0,
            "suicideCheckTimerOffset": 5.0,
            "spawnZombiePhantomTimer3": 120.0,
            "spawnZombiePhantomTimer4": 60.0,
            "spawnZombieTimer5": 30.0
        }
    ],
    "MentalTimerStagesImage": [
        {
            "timerMinStage1": 450.0,
            "timerMaxStage1": 600.0,
            "timerMinStage2": 300.0,
            "timerMaxStage2": 450.0,
            "timerMinStage3": 120.0,
            "timerMaxStage3": 220.0,
            "timerMinStage4": 10.0,
            "timerMaxStage4": 40.0,
            "timerMinStage5": 120.0,
            "timerMaxStage5": 60.0,
            "timerMinStageFULL": 4.0,
            "timerMaxStageFULL": 8.0
        }
    ],
    "DropTimer": [
        {
            "timerMinDrop": 400.0,
            "timerMaxDrop": 500.0
        }
    ],
    "MentalZombieSpawn": [
        {
            "spawnZombieName": "ZmbM_HermitSkinny_Beige"
        }
    ]
}


    "invasibility": 0.0,      	// Grow per SEC
    "maxCount": 1000.0,   // Agent MaxCount      KEEP these VALUES SAME as ABOVE
    "immunoPotency" : 0;  // grow when players immune system is at this level or lower"
    "dieOffSpeed": 0.0    	// how fast the agent dies off when not potent enough to grow(per sec)"
    "obsessiveLaugh": 1,	// enable Growing Mad Laugh
    "sleepingSound": 1,	// enable SleepSound
    "sleepingSoundSet": "Sleep_SoundSet"  // select SleepSoundSet  "Sleep_SoundSet" by default

enum EStatLevels
{
    GREAT,      = 0
    HIGH,	= 1
    MEDIUM,     = 2
    LOW,        = 3
    CRITICAL,   = 4
}
