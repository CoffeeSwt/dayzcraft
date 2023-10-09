注意力！！！ 某些功能可能会引起恶心/癫痫反应，如果您遇到这种情况，请禁用 .JSON 上的图像

什么：
这是我之前的精神疾病模组的完全重写，我想添加更多的东西并让用户可以编辑它们。

如何：
疾病越多，你的头脑中就会听到更多的噪音
杀死一名玩家、让僵尸造成流血的伤口以及吃人类牛排都可以改变你的心理健康状态。 （ 还有很多 ）
和：
“伏特加”或“啤酒”液体（不是瓶子，而是里面的液体）
“休息”（躺下）
您的疾病状态将会减轻，

而使用 BloodTestKit，您可以检查您的一般免疫力和精神疾病水平。

你可以在 .JSON 中设置你需要的一切

请观看视频以获取更多说明^^

{
     “全部精神疾病”：[
         {
             “qtywAlcol”：8.0，
             “插入的人类牛排数量”：20.0，
             “剩余数量”：0.5，
             “勾选疾病检查”：10.0，
             “qtyShock”：0.10000000149011612，
             “最大计数”：1000，
             “第一阶段”：100，
             “第二阶段”：250，
             “第三阶段”：400，
             “第四阶段”：600，
             “第五阶段”：800，
             “radNameTestKit”：32，
             “spawnZombiePhantomQty3”：1，
             “spawnZombiePhantomQty4”：2，
             “spawnZombieQty5”：1
         }
     ],
     “精神疾病战斗”：[
         {
             “qtyBiteInserted”：10.0，
             “qtyBiteInsertedAnimal”：10.0，
             “qtyAgentKillinPlayer”：100.0，
             “qtyAgentKillinZombie”：5.0，
             “qtyAgentKillinAnimal”：5.0，
             “qtyShockDEFFromEnemy”：30
         }
     ],
     “心理计时器”：[
         {
             “休息定时器”：3.0，
             “illCheckTimer”：900.0，
             “歌曲检查计时器”：120.0，
             “mentalSoundTimer”：60.0，
             “morementalSoundTimer”：45.0，
             “moremorementalSoundTimer”：30.0，
             “自杀检查定时器”：20.0，
             “自杀检查定时器偏移”：5.0，
             “spawnZombiePhantomTimer3”：120.0，
             “spawnZombiePhantomTimer4”：60.0，
             “spawnZombieTimer5”：30.0
         }
     ],
     “MentalTimerStagesImage”：[
         {
             “timerMinStage1”：450.0，
             “timerMaxStage1”：600.0，
             “timerMinStage2”：300.0，
             “timerMaxStage2”：450.0，
             “timerMinStage3”：120.0，
             “timerMaxStage3”：220.0，
             “timerMinStage4”：10.0，
             “timerMaxStage4”：40.0，
             “timerMinStage5”：120.0，
             “timerMaxStage5”：60.0，
             “timerMinStageFULL”：4.0，
             “timerMaxStageFULL”：8.0
         }
     ],
     “DropTimer”：[
         {
             “计时器最小下降”：400.0，
             “计时器最大下降”：500.0
         }
     ],
     “MentalZombieSpawn”：[
         {
             "spawnZombieName": "ZmbM_HermitSkinny_Beige"
         }
     ]
}


     "invasibility": 0.0, // 每秒增长
     "maxCount": 1000.0, // Agent MaxCount 保持这些值与上面相同
     “免疫效力”：0； // 当玩家的免疫系统处于此水平或更低时就会增长”
     "dieOffSpeed": 0.0 // 当代理不足以生长时死亡的速度（每秒）"
     "obsessiveLaugh": 1, // 启用疯狂大笑
     "sleepingSound": 1, // 启用睡眠声音
     "sleepingSoundSet": "Sleep_SoundSet" // 默认选择 SleepSoundSet "Sleep_SoundSet"

枚举 EStatLevels
{
     太棒了，= 0
     高，= 1
     中，= 2
     低，= 3
     严重，= 4
}