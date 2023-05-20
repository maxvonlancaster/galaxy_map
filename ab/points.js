const points = [
    {
        name: "Sol", coordinates : [0,0], color: "MidnightBlue", priority: 1, map : [0,0], radius: 20,
        text: "sample text", newRadius : 0
    },
    {
        name: "Alpha Centauri", coordinates : [5,0], color: "MidnightBlue", priority: 2, map : [0,0],
        text: "sample text", newRadius : 0
    },
    {
        name: "Qonos", coordinates : [85,-30], color: "DarkRed", priority: 1, map : [0,0], radius: 25,
        text: "The homeworld of Klingons and the capital of Klingon Empire. Described as a 'planet of caves', the planet is composed of a subterranean series of volcanoes, and has haotic weather systems with frequent thunderstorms.", newRadius : 0
    },
    {
        name: "Romulus", coordinates : [65,95], color: "DarkGreen", priority: 1, map : [0,0], radius: 5,
        text: "The Romulus system is a planetary system, the second and third planets are Romulus and Remus, the homeworlds of the Romulans and Remans, with Romulus being the capital system of the Romulan Star Empire, planet with population of 18 billion.", newRadius : 0
    },
    {
        name: "Bajor", coordinates : [-170,-30], color: "white", priority: 2, map : [0,0], 
        text: "sample text", newRadius : 0
    },
    {
        name: "MalcorIII", coordinates : [-1900,1000], color: "white", priority: 1, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },
    {
        name: "Deneb", coordinates : [-1250,1050], color: "white", priority: 1, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },
    {
        name: "Ferenginar", coordinates : [-170,30], color: "MediumPurple", priority: 1, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },
    {
        name: "Cardassia", coordinates : [-175,-35], color: "GoldenRod", priority: 1, map : [0,0], radius: 5,
        text: "Capital planet of the Cardassian Union - one of great powers in the Alpha Quadrant", newRadius : 0
    },
    {
        name: "Breen", coordinates : [-450,-15], color: "grey", priority: 1, map : [0,0], radius: 35,
        text: "sample text", newRadius : 0
    },
    {
        name: "Gorn", coordinates : [105,-155], color: "brown", priority: 1, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },
    {
        name: "Talara", coordinates : [-195,-155], color: "DarkViolet", priority: 1, map : [0,0], radius: 20,
        text: "The capital of Talarian Republic", newRadius : 0
    },
    {
        name: "Tama", coordinates : [-195,-285], color: "DeepPink", priority: 1, map : [0,0], radius: 20,
        text: "sample text", newRadius : 0
    },
    {
        name: "Tholia", coordinates : [65,-295], color: "orange", priority: 1, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },
    {
        name: "Sheliak", coordinates : [-385,-225], color: "grey", priority: 1, map : [0,0], radius: 20,
        text: "sample text", newRadius : 0
    },
    {
        name: "Vulcan", coordinates : [15,-10], color: "MidnightBlue", priority: 2, map : [0,0], radius: 15,
        text: "sample text", newRadius : 0
    },
    {
        name: "Tellar", coordinates : [-10,-10], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },
    {
        name: "Andor", coordinates : [20,-5], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },
    {
        name: "Terra Nova", coordinates : [20,5], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },
    {
        name: "Capella", coordinates : [5,-40], color: "MidnightBlue", priority: 2, map : [0,0], radius: 15,
        text: "sample text", newRadius : 0
    },
    {
        name: "Cestus", coordinates : [65,-135], color: "MidnightBlue", priority: 2, map : [0,0], radius: 5,
        text: "sample text", newRadius : 0
    },
    {
        name: "Risa", coordinates : [-10,-90], color: "MidnightBlue", priority: 2, map : [0,0], radius: 15,
        text: "sample text", newRadius : 0
    },{
        name: "Caitia", coordinates : [-35,-145], color: "MidnightBlue", priority: 2, map : [0,0], radius: 15,
        text: "sample text", newRadius : 0
    },
    {
        name: "Khitomer", coordinates : [95,5], color: "DarkRed", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },{
        name: "TyGokor", coordinates : [125,-35], color: "DarkRed", priority: 2, map : [0,0], radius: 15,
        text: "sample text", newRadius : 0
    },{
        name: "Rura Penthe", coordinates : [125,-50], color: "DarkRed", priority: 2, map : [0,0], radius: 5,
        text: "sample text", newRadius : 0
    },{
        name: "Krios", coordinates : [85,-65], color: "DarkRed", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },
    {
        name: "CeltrisIII", coordinates : [-175,-50], color: "GoldenRod", priority: 2, map : [0,0], radius: 15,
        text: "sample text", newRadius : 0
    },{
        name: "Sarpedion V", coordinates : [-195,-45], color: "GoldenRod", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },{
        name: "Lazon", coordinates : [-215,-50], color: "GoldenRod", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },{
        name: "Omekla", coordinates : [-155,-50], color: "GoldenRod", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },
    // Ganalda IV
    {
        name: "Debrune", coordinates : [90,70], color: "DarkGreen", priority: 2, map : [0,0], radius: 30,
        text: "sample text", newRadius : 0
    },{
        name: "Chaltok IV ", coordinates : [110,50], color: "DarkGreen", priority: 2, map : [0,0], radius: 20,
        text: "sample text", newRadius : 0
    },{
        name: "GanaldaIV", coordinates : [65,-55], color: "DarkRed", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },
    //
    {
        name: "Delta", coordinates : [-55,105], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },
    {
        name: "Delta Vega", coordinates : [-1050,1050], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },{
        name: "Beta Rigel", coordinates : [15,25], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },{
        name: "Alpha 177", coordinates : [-45,30], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "The Enemy Within", newRadius : 0
    },{
        name: "UFC 113", coordinates : [-30,25], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "The Man Trap", newRadius : 0
    },{
        name: "PSI 2000", coordinates : [-45,45], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },{
        name: "Alpha", coordinates : [-45,15], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "Charlie X", newRadius : 0
    },{
        name: "ExoIII", coordinates : [30,65], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "sample", newRadius : 0
    },{
        name: "Tantalus", coordinates : [-25,-105], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "Dagger of the mind", newRadius : 0
    },{
        name: "Miri", coordinates : [35,105], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "Miri", newRadius : 0
    },{
        name: "Bolarus", coordinates : [15,80], color: "MidnightBlue", priority: 2, map : [0,0], radius: 15,
        text: "", newRadius : 0
    },{
        name: "Planet Q", coordinates : [25,-25], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "", newRadius : 0
    },{
        name: "Makus III", coordinates : [25,-35], color: "MidnightBlue", priority: 2, map : [0,0], radius: 5,
        text: "", newRadius : 0
    },{
        name: "Janus VI", coordinates : [15,-135], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "The Devil in the Dark", newRadius : 0
    },{
        name: "Deneva", coordinates : [15,-35], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "Operation - Annihilate", newRadius : 0
    },{
        name: "Argelius", coordinates : [25,35], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "", newRadius : 0
    },{
        name: "Malluria", coordinates : [5,-75], color: "MidnightBlue", priority: 2, map : [0,0], radius: 15,
        text: "", newRadius : 0
    },{
        name: "Gamma Hydrae", coordinates : [80,125], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "", newRadius : 0
    },{
        name: "Babel", coordinates : [20,55], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "", newRadius : 0
    },{
        name: "Trill", coordinates : [-60,-85], color: "MidnightBlue", priority: 2, map : [0,0], radius: 15,
        text: "", newRadius : 0
    },{
        name: "Betazed", coordinates : [-75,-95], color: "MidnightBlue", priority: 2, map : [0,0], radius: 15,
        text: "", newRadius : 0
    },{
        name: "Arcturus", coordinates : [-10,40], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "", newRadius : 0
    },{
        name: "Altair", coordinates : [-5,25], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "", newRadius : 0
    },{
        name: "Benzite", coordinates : [40,30], color: "MidnightBlue", priority: 2, map : [0,0], radius: 15,
        text: "", newRadius : 0
    },{
        name: "Denobula", coordinates : [45,5], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "", newRadius : 0
    },{
        name: "Corridan", coordinates : [-25,-75], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "", newRadius : 0
    },
    
    {
        name: "Shore Leave Planet", coordinates : [145,45], color: "black", priority: 2, map : [0,0], radius: 5,
        text: "", newRadius : 0
    },{
        name: "Eminiar", coordinates : [-105,125], color: "black", priority: 2, map : [0,0], radius: 5,
        text: "", newRadius : 0
    },{
        name: "Gothos", coordinates : [805,205], color: "black", priority: 2, map : [0,0], radius: 5,
        text: "", newRadius : 0
    },{
        name: "Metron", coordinates : [95,-125], color: "black", priority: 2, map : [0,0], radius: 5,
        text: "", newRadius : 0
    },{
        name: "Ceti Alpha V", coordinates : [-175,-125], color: "black", priority: 2, map : [0,0], radius: 5,
        text: "", newRadius : 0
    },{
        name: "Guardian of Forever", coordinates : [-525,-515], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "", newRadius : 0
    }, {
        name: "Parus III", coordinates : [-15,-45], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "", newRadius : 0
    },{
        name: "Gamma Cannaris", coordinates : [305,-305], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "", newRadius : 0
    },{
        name: "Pollux", coordinates : [-10,-35], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "", newRadius : 0
    },{
        name: "Gamma Trianguli", coordinates : [-125,-135], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "", newRadius : 0
    },{
        name: "Halka", coordinates : [-85,-145], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "", newRadius : 0
    },{
        name: "Shermans Planet", coordinates : [50,-45], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "", newRadius : 0
    },{
        name: "FGC 892", coordinates : [205,-45], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "Rome planet", newRadius : 0
    },{
        name: "Neural", coordinates : [-10,180], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "", newRadius : 0
    },

    // TOS S3
    {
        name: "Melcotia", coordinates : [155,15], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "Spectre of the gun", newRadius : 0
    },{
        name: "Tellun", coordinates : [10,-65], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "Elaan of Troyius", newRadius : 0
    },{
        name: "Amerind", coordinates : [-105,-105], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "The paradise syndrome", newRadius : 0
    },{
        name: "Triacus", coordinates : [-50,-40], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "The paradise syndrome", newRadius : 0
    },{
        name: "Sigma Draconis", coordinates : [-25,0], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "Spock's Brain", newRadius : 0
    },{
        name: "Xi Hydra", coordinates : [115,115], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "", newRadius : 0
    },{
        name: "Minara", coordinates : [55,-85], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "The Empath", newRadius : 0
    },{
        name: "Daran", coordinates : [0,55], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "", newRadius : 0
    },{
        name: "Beta Lionis Minoris", coordinates : [65,-105], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "Day of the Dove", newRadius : 0
    },{
        name: "Platonius", coordinates : [-95,-155], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "Platos Stepchildren", newRadius : 0
    },{
        name: "Scalos", coordinates : [-150,-135], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "Wink of an Eye", newRadius : 0
    },{
        name: "Kalenda", coordinates : [55,10], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "That which survives", newRadius : 0
    },{
        name: "Elba", coordinates : [-75,-155], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "Whom Gods Destroy", newRadius : 0
    },{
        name: "Gideon", coordinates : [-85,45], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "The Mark of Gideon", newRadius : 0
    },{
        name: "Memory Alpha", coordinates : [-45,55], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "The Lights of Zetar", newRadius : 0
    },{
        name: "Ardena", coordinates : [20,-85], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "The Cloud Minders", newRadius : 0
    },{
        name: "Eden", coordinates : [65,65], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "The Way to Eden", newRadius : 0
    },{
        name: "Holberg", coordinates : [-5,-125], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "Requiem for Methuselah", newRadius : 0
    },{
        name: "Excalbia", coordinates : [5,125], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "The Savage Curtain", newRadius : 0
    },{
        name: "BetaNiobe", coordinates : [-15,-65], color: "black", priority: 2, map : [0,0], radius: 0,
        text: "All Our Yesterdays", newRadius : 0
    },{
        name: "Camus", coordinates : [25,-95], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "Turnabout Intruder", newRadius : 0
    },

    {
        name: "Tau Cygna V", coordinates : [-355,-215], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },
    {
        name: "Xindi", coordinates : [-50,-5], color: "grey", priority: 2, map : [0,0], radius: 5,
        text: "sample text", newRadius : 0
    },
    {
        name: "Organia", coordinates : [45,-95], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },
    {
        name: "Kiley 279", coordinates : [-105,-125], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },
    {
        name: "Tzenkethi", coordinates : [-120,25], color: "grey", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },
    {
        name: "Free Haven", coordinates : [-245,55], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },
    {
        name: "El-Audriel", coordinates : [-175,-275], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },
    {
        name: "Tanagra", coordinates : [-205,-305], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },
    {
        name: "NimbusII", coordinates : [80,30], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },
    {
        name: "NelvanaIII", coordinates : [50,55], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },
    {
        name: "Fesarius", coordinates : [-25,125], color: "grey", priority: 2, map : [0,0], radius: 15,
        text: "sample text", newRadius : 0
    },
    {
        name: "Talos", coordinates : [-25,-35], color: "black", priority: 2, map : [0,0], radius: 5,
        text: "sample text", newRadius : 0
    },
    // TNG S1 
    {
        name: "Bynars", coordinates : [-750,850], color: "white", priority: 1, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Ligon II", coordinates : [-950,950], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Haven", coordinates : [-850,920], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Delos", coordinates : [-450,350], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Minos", coordinates : [-650,450], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "VelaraIII", coordinates : [-705,550], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Sarona VIII", coordinates : [-205,205], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },

    // OTHER
    {
        name: "Nyberrite Alliance", coordinates : [1800,-900], color: "grey", priority: 1, map : [0,0], radius: 35,
        text: "sample text", newRadius : 0
    },{
        name: "Pakleds", coordinates : [-1200,-800], color: "grey", priority: 1, map : [0,0], radius: 15,
        text: "sample text", newRadius : 0
    },{
        name: "Sattaran", coordinates : [-305,905], color: "grey", priority: 1, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },{
        name: "Lysia", coordinates : [-325,915], color: "pink", priority: 1, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },{
        name: "Kzin", coordinates : [35,-55], color: "grey", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },{
        name: "Cheron", coordinates : [5,-305], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Orion", coordinates : [-105,105], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "50 Eridani", coordinates : [105,-60], color: "DarkRed", priority: 2, map : [0,0], radius: 15,
        text: "sample text", newRadius : 0
    },{
        name: "The Patriarchy", coordinates : [15,155], color: "grey", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    },{
        name: "Schedar", coordinates : [-205,-85], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "DorvanV", coordinates : [-145,-65], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "SetklikIII", coordinates : [-135,-55], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Ronara", coordinates : [-165,-70], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "VolanIII", coordinates : [-185,-70], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Bryma", coordinates : [-195,-80], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Alpha441", coordinates : [-220,-75], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "AschelanV", coordinates : [-230,-85], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Athos", coordinates : [-240,-75], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Hakton", coordinates : [-250,-85], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Juhraya", coordinates : [-260,-75], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Marva", coordinates : [-145,-85], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Nivoch", coordinates : [-165,-85], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Panora", coordinates : [-185,-95], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Portas", coordinates : [-195,-95], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Quatal", coordinates : [-220,-105], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Soltok", coordinates : [-230,-115], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "SalvaII", coordinates : [-240,-105], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Tracken", coordinates : [-250,-115], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Umoth", coordinates : [-260,-105], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Veloz", coordinates : [-270,-115], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Rongovia", coordinates : [215,15], color: "white", priority: 2, map : [0,0], radius: 0,
        text: "sample text", newRadius : 0
    },{
        name: "Antares", coordinates : [5,550], color: "MidnightBlue", priority: 2, map : [0,0], radius: 10,
        text: "sample text", newRadius : 0
    }
];

export {points};