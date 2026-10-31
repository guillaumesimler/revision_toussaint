var TAB10 = [['tabT'], ['tabT'], ['tabT'], ['tabT'], ['tabT'], ['tabT'], ['tabT'], ['tabT'], ['tabT'], ['tabT']];
var CFG = {
  id: 'elena2', name: 'Elena', level: 'CM1',
  title: "L'Harmonie des Fées et des Sirènes",
  tagline: "Maëlle la sirène t'appelle : fées et sirènes doivent rejouer ensemble le grand concert de l'Harmonie.",
  homeIcon: '🫧', revIcon: '🪸', collTitle: 'Le coffre de nacre',
  comp: { name: 'Maëlle', icon: '🧜‍♀️' },
  sections: ['hist', 'geo', 'deu', 'erd', 'tab'],
  icons: { hist: '📜', geo: '🗺️', deu: '📘', erd: '🧭', tab: '⏱️', points: '💜' },
  sec: { hist: 'Histoire', geo: 'Géographie', deu: 'Deutsch', erd: 'Erdkunde', tab: 'Tables chrono' },
  showExp: ['hist', 'geo', 'deu', 'erd'],
  timer: { start: 15, step: 1, min: 6 },
  siblings: [{ href: 'elena.html', key: 'revision-elena-v1', icon: '🏰', label: 'Retour au Royaume des Fées' }, { href: 'elena-livre.html', key: 'revision-elena3-v1', icon: '📖', label: "Nouveau : Le Livre de l'Harmonie" }],
  parentsText: "Une mission par jour, 20 minutes environ : un texte d'histoire avec ses questions (Moyen Âge puis Révolution française), de la géographie de la France, un texte en allemand avec un petit exercice d'écriture (niveau Klasse 2, soit deux classes en dessous de son niveau français), de la géographie de l'Allemagne en allemand, puis 10 multiplications chronométrées. Le chrono commence à 15 secondes par calcul le jour 1 et perd une seconde chaque jour, jusqu'à 6 secondes le jour 10. Ce jeu est indépendant du Royaume des Fées : sa progression est enregistrée à part.",
  ranks: [{ min: 0, name: 'Petite ondine' }, { min: 3, name: 'Fée des vagues' }, { min: 6, name: "Sirène d'améthyste" }, { min: 10, name: "Reine de l'Harmonie" }],
  mapX: [120, 270, 200, 115, 250, 285, 160, 110, 245, 200],
  deco: [[330, 1100, '🐚', 28], [50, 1010, '🫧', 26], [355, 940, '🐠', 26], [40, 860, '🪸', 26], [345, 760, '🫧', 30], [55, 690, '🧚', 26], [360, 600, '🌊', 32], [45, 520, '🐬', 26], [355, 420, '🐚', 24], [40, 330, '✨', 26], [350, 230, '🫧', 26], [60, 140, '🌙', 28], [330, 60, '💜', 26], [80, 40, '✨', 22]],
  particles: ['🫧', '💜', '✨', '🐚', '🦋', '⭐'],
  sounds: { type: 'sine', ok: [698, 880, 1175], ok2: [587, 698], wrong: [311, 247], win: [466, 587, 698, 932, 1175] },
  lines: {
    hello: ["Coucou Elena ! Pétale m'a dit que tu étais la Gardienne du royaume. Bienvenue dans l'océan ! 🫧", "Bonjour ! Le Miroir des Marées s'est rallumé, viens voir ce qu'il nous montre aujourd'hui.", "Te revoilà ! Le crabe Pinçou t'a gardé une place au premier rang."],
    idle: ['Prends ton temps, comme une vague qui revient doucement 🌊', 'Tu peux y arriver !', 'Lis bien la question jusqu\'au bout.', 'Pétale te fait coucou depuis la plage ✨', 'Respire, comme avant un plongeon.'],
    sec: { geo: 'Les sirènes connaissent toutes les côtes de France. À ton tour de les découvrir !', deu: 'Jetzt auf Deutsch! Die Fische im Meer sprechen nämlich Deutsch. 🐠', erd: 'Erdkunde! Wo liegen die Meere und Berge in Deutschland?', tab: 'Les tables chrono ! Réponds vite, avant que la bulle n\'éclate 🫧' },
    ok: ['Bravo ! 💜', 'Magique !', 'Les sirènes chantent pour toi !', 'Parfait, comme une perle !', 'Oui ! Pétale applaudit sur la plage !', 'Exactement ! ✨', 'Quelle championne !'],
    ok2: ['Bien rattrapé ! 🫧', 'Tu as trouvé ! Bravo de ne pas avoir abandonné.', 'Voilà ! Deuxième essai réussi.'],
    wrong1: ['Presque ! Regarde bien la zone qui brille.', 'Oups, petite erreur. Je t\'ai montré où chercher.', 'Essaie encore : la réponse est toute proche.'],
    wrong2: ['Pas grave ! Voici la réponse, retiens-la bien.', 'On apprend en se trompant. Regarde la bonne réponse 💜', 'Cette question ira dans tes revanches de corail.'],
    combo: ['Série magique de 5 ! 🔥', 'Tu fais des vagues, princesse !', 'Incroyable série ! Fées et sirènes applaudissent !'],
    end3: ['Trois étoiles ! L\'océan entier brille pour toi ! 👑', 'Trois étoiles ! Pétale et moi, on danse de joie !'],
    end2: ['Deux étoiles, très beau travail ! 💜', 'Deux belles étoiles ! Encore un petit effort et c\'est la troisième.'],
    end1: ['Mission réussie ! La prochaine fois, vise plus d\'étoiles ✨', 'Bravo d\'être allée jusqu\'au bout ! Les revanches t\'aideront.'],
    final: "💠 Le grand concert de l'Harmonie a eu lieu ! Ton violon, les ailes des fées et le chant des sirènes ont joué ensemble. Elena devient Reine de l'Harmonie, avec la Couronne des Étoiles et le Diadème de l'Harmonie.",
    allDone: "💠 Les dix lieux de l'océan sont explorés ! Rejoue pour décrocher toutes les étoiles, ou prends tes revanches.",
    revIntro: 'Les questions ratées sont cachées dans le corail. Réussis-les du premier coup pour les libérer !',
    revEmpty: 'Le corail est vide : tout est réussi ! ✨',
    record: '🏆 Nouveau record ! Plus rapide qu\'un dauphin.'
  }
};

var DATA = { days: [
/* ---------------- JOUR 1 ---------------- */
{
  place: 'Le Rivage violet', icon: '🌊', reward: { icon: '💜', name: 'La Perle violette' },
  focus: "Le Moyen Âge, repères · la France et ses mers · Deutsch: Maëlle · Berlin, die Flagge",
  intro: "Une bouteille est arrivée au Royaume des Fées. Dedans, un message de Maëlle, la sirène du lagon : « Viens vite sur le Rivage violet, le Miroir des Marées s'est rallumé ! »",
  parts: [
    { dom: 'hist',
      lect: { title: 'Le Miroir des Marées',
        s: ["Le Miroir des Marées est un grand coquillage magique : quand on regarde dedans, on voit le passé.", "Aujourd'hui, il montre un rocher entouré par la mer : le Mont-Saint-Michel, en Normandie.", "Au Moyen Âge, des moines ont construit une abbaye tout en haut de ce rocher.", "À marée haute, la mer entourait le rocher et on ne pouvait plus y aller à pied.", "Les pèlerins devaient donc bien regarder l'heure des marées avant de traverser la baie.", "Maëlle connaît par cœur les marées : elle sait toujours quand la mer monte."],
        qs: [
          { q: 'Qui a construit l\'abbaye en haut du Mont-Saint-Michel ?', c: ['Des moines', 'Des sirènes', 'Des chevaliers', 'Des lutins'], a: 0, r: [2], e: "Au Moyen Âge, ce sont des moines qui ont construit l'abbaye." },
          { q: 'Que se passe-t-il à marée haute ?', c: ['La mer entoure le rocher', 'Le rocher disparaît sous l\'eau', 'Les moines partent en bateau', 'La plage devient très grande'], a: 0, r: [3], e: "À marée haute, la mer entoure le rocher, qui devient une île." }
        ] },
      qs: [
        { t: 'qcm', q: 'Le Moyen Âge a duré environ...', c: ['mille ans', 'dix ans', 'cent ans', 'un million d\'années'], a: 0, z: 'Il commence vers 476 et finit en 1492.', e: "De 476 à 1492, cela fait environ mille ans." },
        { t: 'qcm', q: 'Quelle période vient juste <b>après</b> le Moyen Âge ?', c: ['Les Temps modernes', 'L\'Antiquité', 'La Préhistoire', 'Le temps des dinosaures'], a: 0, z: 'L\'Antiquité est avant le Moyen Âge.', e: "Préhistoire, Antiquité, Moyen Âge, puis Temps modernes." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Quelle est la capitale de la France ?', c: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'], a: 0, z: 'La tour Eiffel s\'y trouve.', e: "Paris est la capitale de la France." },
      { t: 'qcm', q: 'Quelle mer borde le <b>sud</b> de la France ?', c: ['La mer Méditerranée', 'La Manche', 'La mer du Nord', 'La mer Noire'], a: 0, z: 'Marseille et Nice sont au bord de cette mer.', e: "La Méditerranée borde le sud de la France." },
      { t: 'qcm', q: 'Dans quelle région se trouve le Mont-Saint-Michel ?', c: ['En Normandie', 'En Corse', 'En Alsace', 'En Provence'], a: 0, z: 'Relis le texte du Miroir des Marées.', e: "Le Mont-Saint-Michel se trouve en Normandie, tout près de la Bretagne." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Maëlle',
        s: ['Maëlle ist eine Meerjungfrau.', 'Sie wohnt im Meer.', 'Ihr Schwanz ist lila und glitzert.', 'Maëlle singt sehr schön.', 'Ihr Freund ist ein kleiner Krebs.'],
        qs: [
          { q: 'Welche Farbe hat Maëlles Schwanz?', c: ['Lila', 'Grün', 'Blau', 'Rot'], a: 0, r: [2], e: 'Ihr Schwanz ist lila und glitzert.' },
          { q: 'Wer ist Maëlles Freund?', c: ['Ein kleiner Krebs', 'Ein großer Fisch', 'Eine Fee', 'Ein Delfin'], a: 0, r: [4], e: 'Ihr Freund ist ein kleiner Krebs.' }
        ] },
      qs: [
        { t: 'fill', q: 'Welcher Artikel passt?', s: '___ Meer ist blau.', c: ['Das', 'Der', 'Die'], a: 0, z: 'Man sagt: ein Meer.', e: 'das Meer.' },
        { t: 'dictee', cs: true, say: 'das Meer', a: ['das Meer'], z: 'Meer schreibt man mit zwei e.', e: '„Meer“ hat zwei e. Es ist ein Nomen, also groß.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Wie heißt die Hauptstadt von Deutschland?', c: ['Berlin', 'Paris', 'Wien', 'München'], a: 0, z: 'Paris ist die Hauptstadt von Frankreich.', e: 'Berlin ist die Hauptstadt von Deutschland.' },
      { t: 'qcm', q: 'Welche Farben hat die deutsche Flagge?', c: ['Schwarz, Rot, Gold', 'Blau, Weiß, Rot', 'Grün, Weiß, Rot', 'Lila, Rosa, Weiß'], a: 0, z: 'Blau, Weiß, Rot ist die französische Flagge.', e: 'Die deutsche Flagge ist schwarz, rot und gold.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 2 ---------------- */
{
  place: 'Les Rochers chantants', icon: '🎶', reward: { icon: '🐚', name: 'Le Coquillage chantant' },
  focus: "Seigneurs et paysans · la Seine, la Manche, l'Atlantique · Deutsch: im Schwimmbad · Nordsee, Ostsee",
  intro: "Quand les vagues frappent les Rochers chantants, on entend une mélodie. Mais aujourd'hui, un rocher chante faux. Le Miroir des Marées montre un village du Moyen Âge.",
  parts: [
    { dom: 'hist',
      lect: { title: 'Au village du seigneur',
        s: ["Dans le Miroir, Elena voit un village de paysans au pied d'un château.", "Les paysans cultivent le blé, élèvent des poules et des moutons.", "Le seigneur du château les protège en cas de danger.", "En échange, ils lui donnent une partie de leurs récoltes.", "Certains jours, ils doivent aussi travailler gratuitement dans ses champs : c'est la corvée.", "Le soir, une petite fille joue de la vielle, un instrument à cordes, devant sa maison."],
        qs: [
          { q: 'Que fait le seigneur pour les paysans ?', c: ['Il les protège en cas de danger', 'Il leur donne de l\'argent', 'Il cultive leurs champs', 'Il leur apprend à lire'], a: 0, r: [2], e: "Le seigneur protège les paysans. En échange, ils lui donnent une partie de leurs récoltes." },
          { q: 'Qu\'est-ce que la corvée ?', c: ['Travailler gratuitement pour le seigneur', 'Une fête au village', 'Un instrument de musique', 'Un repas au château'], a: 0, r: [4], e: "La corvée, c'est le travail gratuit que les paysans doivent au seigneur." }
        ] },
      qs: [
        { t: 'qcm', q: 'Au Moyen Âge, la plupart des gens étaient...', c: ['des paysans', 'des chevaliers', 'des rois', 'des moines'], a: 0, z: 'Il fallait beaucoup de monde pour cultiver la terre.', e: "Presque tout le monde vivait à la campagne et travaillait la terre." },
        { t: 'qcm', q: 'Où vivait le seigneur ?', c: ['Dans un château fort', 'Dans une cabane', 'Dans un bateau', 'Dans une grotte'], a: 0, z: 'Regarde le texte : le village est au pied de ...', e: "Le seigneur vivait dans un château fort, qui protégeait aussi le village." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Quel fleuve traverse Paris ?', c: ['La Seine', 'La Loire', 'Le Rhône', 'La Garonne'], a: 0, z: 'Des bateaux-mouches y naviguent.', e: "La Seine traverse Paris et se jette dans la Manche." },
      { t: 'qcm', q: 'Quel océan borde l\'<b>ouest</b> de la France ?', c: ['L\'océan Atlantique', 'L\'océan Pacifique', 'L\'océan Indien', 'L\'océan Arctique'], a: 0, z: 'De l\'autre côté, il y a l\'Amérique.', e: "L'océan Atlantique borde l'ouest de la France, en Bretagne et au Pays basque par exemple." },
      { t: 'qcm', q: 'Quelle mer sépare la France de l\'Angleterre ?', c: ['La Manche', 'La Méditerranée', 'La mer Rouge', 'La mer Baltique'], a: 0, z: 'C\'est aussi le nom d\'une partie d\'un pull.', e: "La Manche sépare la France de l'Angleterre." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Im Schwimmbad',
        s: ['Heute ist Mittwoch.', 'Elena geht ins Schwimmbad.', 'Sie springt ins Wasser.', 'Das Wasser ist warm.', 'Elena schwimmt wie ein Fisch.'],
        qs: [
          { q: 'Wohin geht Elena?', c: ['Ins Schwimmbad', 'In die Schule', 'In den Wald', 'Zu Oma'], a: 0, r: [1], e: 'Elena geht ins Schwimmbad.' },
          { q: 'Wie ist das Wasser?', c: ['Warm', 'Kalt', 'Grün', 'Salzig'], a: 0, r: [3], e: 'Das Wasser ist warm.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Setze das Verb ein.', pre: 'ich (schwimmen) → ich', a: ['schwimme'], z: 'Bei „ich“ endet das Verb auf -e.', e: 'ich schwimme, du schwimmst, sie schwimmt.' },
        { t: 'fill', q: 'Welcher Artikel passt?', s: '___ Fisch ist klein.', c: ['Der', 'Die', 'Das'], a: 0, z: 'Man sagt: ein Fisch.', e: 'der Fisch.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Wo liegt das Meer in Deutschland?', c: ['Im Norden', 'Im Süden', 'In der Mitte', 'Es gibt kein Meer'], a: 0, z: 'Im Süden sind die Berge.', e: 'Im Norden liegen die Nordsee und die Ostsee.' },
      { t: 'qcm', q: 'Wie heißen die zwei Meere in Deutschland?', c: ['Nordsee und Ostsee', 'Südsee und Westsee', 'Mittelmeer und Nordsee', 'Rotes Meer und Ostsee'], a: 0, z: 'Ein Meer heißt wie eine Himmelsrichtung im Norden.', e: 'Die Nordsee und die Ostsee.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 3 ---------------- */
{
  place: "Le Jardin d'algues", icon: '🌿', reward: { icon: '🪸', name: 'La Branche de corail' },
  focus: "Chevaliers et châteaux forts · les fleuves de France · Deutsch: die Geige · Alpen, Zugspitze",
  intro: "Dans le Jardin d'algues, les poissons jouent à cache-cache. Le Miroir des Marées montre un jeune garçon qui s'entraîne avec une épée de bois.",
  parts: [
    { dom: 'hist',
      lect: { title: 'Le jeune écuyer',
        s: ["Le garçon du Miroir s'appelle Thibaut.", "Il est écuyer : il aide un chevalier à s'habiller, à porter son armure et à soigner son cheval.", "Chaque jour, il s'entraîne à l'épée et à l'équitation.", "Quand il sera grand, il deviendra chevalier lors d'une cérémonie : l'adoubement.", "Ce jour-là, son seigneur lui remettra une vraie épée.", "Thibaut a hâte, mais il a un peu peur de tomber de cheval devant tout le monde."],
        qs: [
          { q: 'Que fait un écuyer ?', c: ['Il aide un chevalier', 'Il construit des châteaux', 'Il cultive le blé', 'Il copie des livres'], a: 0, r: [1], e: "L'écuyer aide le chevalier : armure, cheval, armes." },
          { q: 'Comment s\'appelle la cérémonie où l\'on devient chevalier ?', c: ['L\'adoubement', 'Le mariage', 'Le couronnement', 'La corvée'], a: 0, r: [3], e: "C'est l'adoubement. Le seigneur remet une épée au nouveau chevalier." }
        ] },
      qs: [
        { t: 'qcm', q: 'Comment appelle-t-on la plus haute tour d\'un château fort ?', c: ['Le donjon', 'Le pont-levis', 'Le moulin', 'Le clocher'], a: 0, z: 'C\'était le dernier refuge en cas d\'attaque.', e: "Le donjon est la tour la plus haute et la plus solide du château." },
        { t: 'qcm', q: 'À quoi sert le <b>pont-levis</b> ?', c: ['À entrer dans le château, et à le fermer en le relevant', 'À traverser la mer', 'À monter dans le donjon', 'À décorer la cour'], a: 0, z: 'Son nom contient le verbe « lever ».', e: "Le pont-levis passe au-dessus des douves. On le relève pour empêcher les ennemis d'entrer." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Quel est le plus long fleuve de France ?', c: ['La Loire', 'La Seine', 'Le Rhône', 'La Garonne'], a: 0, z: 'On trouve beaucoup de châteaux le long de ce fleuve.', e: "La Loire est le plus long fleuve de France. Elle se jette dans l'océan Atlantique." },
      { t: 'qcm', q: 'Quel fleuve traverse Lyon et se jette dans la Méditerranée ?', c: ['Le Rhône', 'La Seine', 'La Loire', 'Le Rhin'], a: 0, z: 'Il vient de Suisse.', e: "Le Rhône vient de Suisse, traverse Lyon et se jette dans la Méditerranée." },
      { t: 'qcm', q: 'Quel fleuve traverse Bordeaux ?', c: ['La Garonne', 'La Seine', 'Le Rhin', 'La Loire'], a: 0, z: 'Il traverse aussi Toulouse.', e: "La Garonne traverse Toulouse et Bordeaux." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Die Geige',
        s: ['Elena spielt Geige.', 'Die Geige ist aus Holz.', 'Sie hat vier Saiten.', 'Elena übt jeden Tag.', 'Ihre Katze hört gern zu.'],
        qs: [
          { q: 'Woraus ist die Geige?', c: ['Aus Holz', 'Aus Glas', 'Aus Papier', 'Aus Stein'], a: 0, r: [1], e: 'Die Geige ist aus Holz.' },
          { q: 'Wer hört Elena gern zu?', c: ['Ihre Katze', 'Ihr Hund', 'Ihre Lehrerin', 'Ein Fisch'], a: 0, r: [4], e: 'Ihre Katze hört gern zu.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Schreib das Wort richtig: groß oder klein?', s: 'Elena spielt (GEIGE).', pre: '→', a: ['Geige'], z: 'Kann man „die“ davor sagen? Dann ist es ein Nomen.', e: 'die Geige ist ein Nomen: groß!' },
        { t: 'dictee', cs: true, say: 'die Katze', a: ['die Katze'], z: 'Nach a hört man ein kurzes a: tz.', e: 'die Katze mit tz.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Wo sind die hohen Berge in Deutschland, die Alpen?', c: ['Im Süden', 'Im Norden', 'Im Westen', 'Am Meer'], a: 0, z: 'Das Meer ist im Norden.', e: 'Die Alpen sind im Süden von Deutschland.' },
      { t: 'qcm', q: 'Wie heißt der höchste Berg in Deutschland?', c: ['Die Zugspitze', 'Der Mont Blanc', 'Der Eiffelturm', 'Der Kilimandscharo'], a: 0, z: 'Der Mont Blanc ist in Frankreich.', e: 'Die Zugspitze ist der höchste Berg Deutschlands.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 4 ---------------- */
{
  place: 'La Grotte aux perles', icon: '🦪', reward: { icon: '🎼', name: 'La Harpe de nacre' },
  focus: "Moines et cathédrales · les montagnes de France · Deutsch: Lila und Bleuet · Rhein, Köln",
  intro: "Dans la Grotte aux perles, Lila, la fée violoniste, a retrouvé Maëlle. Ensemble, elles regardent le Miroir : il montre des fenêtres qui brillent de toutes les couleurs.",
  parts: [
    { dom: 'hist',
      lect: { title: 'Les vitraux de la cathédrale',
        s: ["Le Miroir montre une immense église : une cathédrale.", "Au Moyen Âge, il fallait souvent plus de cent ans pour en construire une.", "Ses grandes fenêtres sont faites de morceaux de verre de couleur : ce sont des vitraux.", "Quand le soleil passe à travers, la cathédrale se remplit de lumière bleue, rouge et violette.", "Les vitraux racontent des histoires en images, car beaucoup de gens ne savaient pas lire.", "Lila trouve que les vitraux ressemblent aux ailes de Pétale."],
        qs: [
          { q: 'Qu\'est-ce qu\'un vitrail ?', c: ['Une fenêtre en morceaux de verre de couleur', 'Une tour très haute', 'Un livre ancien', 'Une statue en pierre'], a: 0, r: [2], e: "Un vitrail est une fenêtre faite de morceaux de verre colorés." },
          { q: 'Pourquoi les vitraux racontent-ils des histoires en images ?', c: ['Beaucoup de gens ne savaient pas lire', 'Les moines aimaient dessiner', 'C\'était plus rapide', 'Le roi l\'avait demandé'], a: 0, r: [4], e: "Beaucoup de gens ne savaient pas lire : les images leur racontaient les histoires." }
        ] },
      qs: [
        { t: 'qcm', q: 'Au Moyen Âge, que faisaient les moines dans les monastères ?', c: ['Ils priaient et recopiaient des livres à la main', 'Ils construisaient des bateaux', 'Ils allaient à la guerre', 'Ils vendaient des poissons'], a: 0, z: 'L\'imprimerie n\'existait pas encore.', e: "Les moines priaient, travaillaient et recopiaient des livres à la main." },
        { t: 'qcm', q: 'Quelle cathédrale célèbre se trouve à Paris ?', c: ['Notre-Dame', 'La tour Eiffel', 'Le Louvre', 'L\'Arc de triomphe'], a: 0, z: 'Elle a été réparée après un grand incendie.', e: "Notre-Dame de Paris a été construite au Moyen Âge. Elle a été restaurée après l'incendie de 2019." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Quel est le plus haut sommet de France ?', c: ['Le mont Blanc', 'Le mont Saint-Michel', 'Le puy de Dôme', 'La tour Eiffel'], a: 0, z: 'Il est blanc de neige toute l\'année.', e: "Le mont Blanc, dans les Alpes, est le plus haut sommet de France." },
      { t: 'qcm', q: 'Quelles montagnes se trouvent entre la France et l\'Espagne ?', c: ['Les Pyrénées', 'Les Alpes', 'Les Vosges', 'Le Jura'], a: 0, z: 'Elles sont au sud-ouest.', e: "Les Pyrénées séparent la France de l'Espagne." },
      { t: 'qcm', q: 'Dans quelles montagnes se trouve le mont Blanc ?', c: ['Les Alpes', 'Les Pyrénées', 'Le Massif central', 'Les Vosges'], a: 0, z: 'Ces montagnes touchent la Suisse et l\'Italie.', e: "Le mont Blanc est dans les Alpes, à l'est de la France." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Lila und Bleuet',
        s: ['Lila ist eine Fee.', 'Sie spielt Geige im Garten.', 'Bleuet ist ein kleiner Schmetterling.', 'Er tanzt zur Musik.', 'Dann schlafen beide unter einer Blume.'],
        qs: [
          { q: 'Wer ist Bleuet?', c: ['Ein kleiner Schmetterling', 'Eine Fee', 'Ein Fisch', 'Eine Katze'], a: 0, r: [2], e: 'Bleuet ist ein kleiner Schmetterling.' },
          { q: 'Wo schlafen Lila und Bleuet?', c: ['Unter einer Blume', 'Im Meer', 'In einem Schloss', 'Auf einem Baum'], a: 0, r: [4], e: 'Sie schlafen unter einer Blume.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Schreib das Wort in der <b>Mehrzahl</b>.', pre: 'die Blume → die', a: ['Blumen'], z: 'Man hängt -n an.', e: 'die Blume, die Blumen.' },
        { t: 'fill', q: 'Welcher Artikel passt?', s: '___ Fee spielt Geige.', c: ['Die', 'Der', 'Das'], a: 0, z: 'Man sagt: eine Fee.', e: 'die Fee.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Welcher große Fluss fließt durch Köln?', c: ['Der Rhein', 'Die Seine', 'Die Loire', 'Die Elbe'], a: 0, z: 'Er fließt auch an Straßburg vorbei.', e: 'Der Rhein fließt durch Köln.' },
      { t: 'qcm', q: 'Was ist der Kölner Dom?', c: ['Eine sehr große Kirche', 'Ein Berg', 'Ein Schiff', 'Ein Zoo'], a: 0, z: 'Er sieht aus wie die Kathedrale im Zauberspiegel.', e: 'Der Kölner Dom ist eine riesige Kirche mit zwei Türmen.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 5 ---------------- */
{
  place: 'Le Phare des fées', icon: '🗼', reward: { icon: '🏮', name: 'La Lanterne du phare' },
  focus: "Jeanne d'Arc · les îles et les côtes · Deutsch: der Leuchtturm · Hamburg, Bayern",
  intro: "Le Phare des fées s'est éteint et les bateaux se perdent. Pendant que les lucioles le rallument, le Miroir montre une jeune fille très courageuse.",
  parts: [
    { dom: 'hist',
      lect: { title: "Jeanne d'Arc",
        s: ["Il y a presque six cents ans, la France et l'Angleterre étaient en guerre depuis très longtemps.", "Une jeune paysanne, Jeanne, disait entendre des voix qui lui demandaient de sauver le royaume.", "Elle est allée voir le futur roi, Charles VII, pour lui demander une armée.", "En 1429, à la tête des soldats, elle a libéré la ville d'Orléans.", "Ensuite, Charles VII a été couronné roi dans la cathédrale de Reims.", "Maëlle trouve que Jeanne était aussi courageuse qu'Elena dans la Grotte de Cristal."],
        qs: [
          { q: 'Quelle ville Jeanne d\'Arc a-t-elle libérée en 1429 ?', c: ['Orléans', 'Paris', 'Marseille', 'Lyon'], a: 0, r: [3], e: "En 1429, Jeanne a libéré Orléans." },
          { q: 'Contre quel pays la France était-elle en guerre ?', c: ['L\'Angleterre', 'L\'Allemagne', 'L\'Espagne', 'L\'Italie'], a: 0, r: [0], e: "C'était la guerre de Cent Ans, entre la France et l'Angleterre." }
        ] },
      qs: [
        { t: 'qcm', q: 'Comment s\'appelle la longue guerre entre la France et l\'Angleterre au Moyen Âge ?', c: ['La guerre de Cent Ans', 'La guerre des Étoiles', 'La guerre de Troie', 'La guerre des Fées'], a: 0, z: 'Son nom parle d\'un nombre d\'années.', e: "La guerre de Cent Ans a duré de 1337 à 1453, en fait 116 ans !" },
        { t: 'qcm', q: 'Où le roi Charles VII a-t-il été couronné ?', c: ['À Reims', 'À Orléans', 'Au Mont-Saint-Michel', 'À Versailles'], a: 0, z: 'Relis le texte : dans quelle cathédrale ?', e: "Les rois de France étaient couronnés (sacrés) dans la cathédrale de Reims." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Quelle grande île française se trouve dans la mer Méditerranée ?', c: ['La Corse', 'La Martinique', 'La Réunion', 'La Sicile'], a: 0, z: 'On l\'appelle « l\'île de Beauté ».', e: "La Corse est une île française de la Méditerranée." },
      { t: 'qcm', q: 'À quoi sert un phare ?', c: ['À guider les bateaux la nuit', 'À stocker les poissons', 'À regarder les étoiles', 'À faire de la musique'], a: 0, z: 'Il lance une grande lumière tournante.', e: "La lumière du phare indique la côte aux bateaux pour qu'ils ne heurtent pas les rochers." },
      { t: 'qcm', q: 'La Bretagne est entourée par...', c: ['la mer et l\'océan sur trois côtés', 'des montagnes très hautes', 'un grand désert', 'la Suisse et l\'Italie'], a: 0, z: 'Elle ressemble à une pointe qui avance dans l\'eau.', e: "La Bretagne est une presqu'île : la Manche au nord, l'Atlantique à l'ouest et au sud." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Der Leuchtturm',
        s: ['Am Meer steht ein Leuchtturm.', 'Er ist rot und weiß.', 'In der Nacht leuchtet er hell.', 'So sehen die Schiffe die Felsen.', 'Die Glühwürmchen helfen heute mit.'],
        qs: [
          { q: 'Welche Farben hat der Leuchtturm?', c: ['Rot und weiß', 'Blau und gelb', 'Grün und lila', 'Schwarz'], a: 0, r: [1], e: 'Der Leuchtturm ist rot und weiß.' },
          { q: 'Warum leuchtet der Leuchtturm?', c: ['Damit die Schiffe die Felsen sehen', 'Damit die Fische schlafen', 'Weil es Geburtstag ist', 'Damit es warm wird'], a: 0, r: [3], e: 'So sehen die Schiffe die Felsen.' }
        ] },
      qs: [
        { t: 'fill', q: 'Welcher Artikel passt?', s: '___ Schiff fährt auf dem Meer.', c: ['Das', 'Der', 'Die'], a: 0, z: 'Man sagt: ein Schiff.', e: 'das Schiff.' },
        { t: 'dictee', cs: true, say: 'Das Schiff ist groß.', a: ['Das Schiff ist groß'], z: 'groß schreibt man mit ß.', e: '„Schiff“ ist ein Nomen (groß). „groß“ schreibt man mit ß.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Hamburg hat einen großen...', c: ['Hafen für Schiffe', 'Berg', 'Vulkan', 'Strand am Mittelmeer'], a: 0, z: 'Viele große Schiffe kommen dorthin.', e: 'Hamburg hat den größten Hafen Deutschlands, an der Elbe.' },
      { t: 'qcm', q: 'Welches Bundesland ist das größte?', c: ['Bayern', 'Berlin', 'Bremen', 'Hamburg'], a: 0, z: 'Seine Hauptstadt ist München.', e: 'Bayern ist das größte Bundesland. Die Hauptstadt ist München.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 6 ---------------- */
{
  place: 'Le Pont de nacre', icon: '🌉', reward: { icon: '⭐', name: "L'Étoile de mer dorée" },
  focus: "1789 : le roi, les trois ordres, les cahiers de doléances · les grandes villes · Deutsch: Oma und Opa · Nachbarländer",
  intro: "Le Pont de nacre relie la plage des fées au palais des sirènes. Le Miroir des Marées fait un grand saut dans le temps : nous voilà en 1789.",
  parts: [
    { dom: 'hist',
      lect: { title: 'Le cahier du village',
        s: ["En 1789, la France est gouvernée par un roi, Louis XVI.", "La société est divisée en trois groupes : le clergé, la noblesse et le tiers état.", "Le tiers état, ce sont presque tous les Français : paysans, artisans, marchands.", "C'est lui qui paie le plus d'impôts.", "Le roi demande aux habitants d'écrire leurs plaintes dans des cahiers : les cahiers de doléances.", "Dans le Miroir, Elena voit une paysanne qui écrit : « Nous voulons payer moins d'impôts et manger à notre faim. »"],
        qs: [
          { q: 'Qui est le roi de France en 1789 ?', c: ['Louis XVI', 'Charlemagne', 'Charles VII', 'Napoléon'], a: 0, r: [0], e: "En 1789, le roi est Louis XVI." },
          { q: 'Qu\'écrit-on dans les cahiers de doléances ?', c: ['Les plaintes des habitants', 'Des recettes de cuisine', 'Des partitions de musique', 'Les noms des chevaliers'], a: 0, r: [4], e: "Une doléance est une plainte. Les Français y écrivent ce qu'ils veulent changer." }
        ] },
      qs: [
        { t: 'qcm', q: 'Quel groupe paie le plus d\'impôts avant la Révolution ?', c: ['Le tiers état', 'La noblesse', 'Le clergé', 'Le roi'], a: 0, z: 'C\'est le groupe le plus nombreux.', e: "Le tiers état paie presque tous les impôts. La noblesse et le clergé ont des privilèges." },
        { t: 'qcm', q: 'Le clergé, ce sont...', c: ['les hommes et les femmes d\'Église', 'les chevaliers', 'les paysans', 'les marchands'], a: 0, z: 'Les prêtres, les moines et les religieuses.', e: "Le clergé regroupe les prêtres, les moines et les religieuses." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Quelle grande ville est un port au bord de la Méditerranée ?', c: ['Marseille', 'Lille', 'Strasbourg', 'Paris'], a: 0, z: 'C\'est la deuxième ville de France.', e: "Marseille est un grand port de la Méditerranée." },
      { t: 'qcm', q: 'Quelle ville se trouve au bord du Rhin, tout près de l\'Allemagne ?', c: ['Strasbourg', 'Bordeaux', 'Nice', 'Brest'], a: 0, z: 'Le Parlement européen s\'y trouve.', e: "Strasbourg est au bord du Rhin, face à l'Allemagne." },
      { t: 'qcm', q: 'Laquelle de ces villes est au <b>nord</b> de la France ?', c: ['Lille', 'Marseille', 'Toulouse', 'Nice'], a: 0, z: 'Elle est proche de la Belgique.', e: "Lille est au nord, près de la Belgique." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Bei Oma und Opa',
        s: ['Elena ist bei Oma und Opa.', 'Oma backt einen Kuchen.', 'Opa liest eine Geschichte vor.', 'Elena malt eine Fee.', 'Am Abend essen alle zusammen.'],
        qs: [
          { q: 'Was macht Oma?', c: ['Sie backt einen Kuchen', 'Sie liest', 'Sie malt', 'Sie schwimmt'], a: 0, r: [1], e: 'Oma backt einen Kuchen.' },
          { q: 'Was malt Elena?', c: ['Eine Fee', 'Ein Haus', 'Einen Hund', 'Das Meer'], a: 0, r: [3], e: 'Elena malt eine Fee.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Setze das Verb ein.', pre: 'du (malen) → du', a: ['malst'], z: 'Bei „du“ endet das Verb auf -st.', e: 'ich male, du malst, sie malt.' },
        { t: 'type', cs: true, q: 'Schreib das Wort richtig: groß oder klein?', s: 'Oma backt einen (KUCHEN).', pre: '→', a: ['Kuchen'], z: 'Kann man „der“ davor sagen?', e: 'der Kuchen ist ein Nomen: groß!' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Welches Land ist ein Nachbar von Deutschland?', c: ['Frankreich', 'Spanien', 'Portugal', 'Griechenland'], a: 0, z: 'Du wohnst dort.', e: 'Frankreich ist ein Nachbarland von Deutschland, im Westen.' },
      { t: 'qcm', q: 'Wie heißt die Hauptstadt von Österreich?', c: ['Wien', 'Berlin', 'Rom', 'Madrid'], a: 0, z: 'Auf Französisch: Vienne.', e: 'Wien ist die Hauptstadt von Österreich. Dort spricht man auch Deutsch.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 7 ---------------- */
{
  place: 'Le Lagon des méduses', icon: '🪼', reward: { icon: '🪼', name: 'La Méduse lumineuse' },
  focus: "Le 14 juillet 1789 · lire une carte, les points cardinaux · Deutsch: Quallen · Bodensee, Schwarzwald",
  intro: "Les méduses du lagon brillent comme des lanternes. Le Miroir montre une foule en colère devant une grande forteresse, à Paris.",
  parts: [
    { dom: 'hist',
      lect: { title: 'La prise de la Bastille',
        s: ["Le 14 juillet 1789, à Paris, les habitants ont peur que le roi envoie ses soldats contre eux.", "Ils cherchent des armes et de la poudre.", "Ils se rendent à la Bastille, une vieille forteresse qui sert de prison.", "Après plusieurs heures de combat, ils prennent la Bastille.", "Pour beaucoup de Français, c'est le début de la Révolution.", "Aujourd'hui, le 14 juillet est la fête nationale : il y a un défilé et des feux d'artifice."],
        qs: [
          { q: 'Qu\'était la Bastille ?', c: ['Une forteresse qui servait de prison', 'Le palais du roi', 'Une cathédrale', 'Un phare'], a: 0, r: [2], e: "La Bastille était une vieille forteresse transformée en prison." },
          { q: 'Que se passe-t-il chaque 14 juillet aujourd\'hui ?', c: ['La fête nationale, avec défilé et feux d\'artifice', 'La rentrée des classes', 'Noël', 'Le premier jour de l\'été'], a: 0, r: [5], e: "Le 14 juillet est la fête nationale française." }
        ] },
      qs: [
        { t: 'qcm', q: 'En quelle année la Bastille a-t-elle été prise ?', c: ['1789', '1429', '1914', '2024'], a: 0, z: 'C\'est l\'année des cahiers de doléances.', e: "La Bastille a été prise le 14 juillet 1789." },
        { t: 'qcm', q: 'Dans quelle ville se trouvait la Bastille ?', c: ['Paris', 'Versailles', 'Orléans', 'Reims'], a: 0, z: 'Relis la première phrase du texte.', e: "La Bastille était à Paris. Aujourd'hui, il reste une grande place de la Bastille." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Sur une carte, le <b>nord</b> est en général...', c: ['en haut', 'en bas', 'à gauche', 'à droite'], a: 0, z: 'La rose des vents l\'indique avec la lettre N.', e: "Sur la plupart des cartes, le nord est en haut, le sud en bas, l'ouest à gauche et l'est à droite." },
      { t: 'qcm', q: 'Sur une carte, à quoi sert la <b>légende</b> ?', c: ['À expliquer ce que veulent dire les couleurs et les symboles', 'À raconter une histoire de fées', 'À donner la date', 'À écrire le nom de l\'auteur'], a: 0, z: 'Elle se trouve souvent dans un petit cadre, dans un coin.', e: "La légende explique les couleurs et les symboles : bleu pour l'eau, points pour les villes..." },
      { t: 'qcm', q: 'L\'Espagne se trouve au... de la France.', c: ['sud', 'nord', 'est', 'ouest'], a: 0, z: 'Les Pyrénées sont entre les deux pays.', e: "L'Espagne est au sud (sud-ouest) de la France." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Die Quallen',
        s: ['Im Meer schwimmen viele Quallen.', 'Sie sind fast durchsichtig.', 'In der Nacht leuchten sie lila.', 'Maëlle passt gut auf.', 'Manche Quallen brennen auf der Haut.'],
        qs: [
          { q: 'Welche Farbe haben die Quallen in der Nacht?', c: ['Lila', 'Rot', 'Grün', 'Schwarz'], a: 0, r: [2], e: 'In der Nacht leuchten sie lila.' },
          { q: 'Warum passt Maëlle gut auf?', c: ['Manche Quallen brennen auf der Haut', 'Sie hat Angst vor der Nacht', 'Das Wasser ist kalt', 'Sie sucht ihren Krebs'], a: 0, r: [4], e: 'Manche Quallen brennen auf der Haut.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Schreib das Wort in der <b>Mehrzahl</b>.', pre: 'die Qualle → die', a: ['Quallen'], z: 'Man hängt -n an.', e: 'die Qualle, die Quallen.' },
        { t: 'dictee', cs: true, say: 'Die Qualle leuchtet.', a: ['Die Qualle leuchtet'], z: 'Qualle schreibt man mit Qu und zwei l.', e: '„Qualle“: Qu am Anfang und ll in der Mitte.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Der Bodensee ist...', c: ['ein großer See', 'ein Berg', 'ein Meer', 'eine Stadt'], a: 0, z: 'Das Wort „See“ steckt darin.', e: 'Der Bodensee ist ein großer See im Süden, an der Grenze zu Österreich und der Schweiz.' },
      { t: 'qcm', q: 'Der Schwarzwald ist...', c: ['ein großer Wald', 'ein schwarzes Meer', 'eine Wüste', 'ein Fluss'], a: 0, z: 'Das Wort „Wald“ steckt darin.', e: 'Der Schwarzwald ist ein großer Wald im Südwesten. Dort gibt es Kuckucksuhren.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 8 ---------------- */
{
  place: 'La Cité engloutie', icon: '🏛️', reward: { icon: '📜', name: 'Le Parchemin des Droits' },
  focus: "Les droits de l'homme, la devise de la République · l'outre-mer · Deutsch: Pinçou · Donau, Wien",
  intro: "Au fond de l'océan dort une cité engloutie. Sur une colonne, Maëlle a trouvé un parchemin que l'eau n'a jamais effacé. Le Miroir explique ce qu'il contient.",
  parts: [
    { dom: 'hist',
      lect: { title: 'Les droits de l\'homme',
        s: ["En août 1789, les députés réunis à Versailles prennent de grandes décisions.", "Le 4 août, ils suppriment les privilèges : la noblesse et le clergé devront payer des impôts comme tout le monde.", "Le 26 août, ils écrivent la Déclaration des droits de l'homme et du citoyen.", "Sa première idée est : « Les hommes naissent et demeurent libres et égaux en droits. »", "Plus tard, la France choisit une devise : Liberté, Égalité, Fraternité.", "Maëlle dit que les sirènes et les fées aussi devraient avoir les mêmes droits."],
        qs: [
          { q: 'Que décident les députés le 4 août 1789 ?', c: ['Ils suppriment les privilèges', 'Ils prennent la Bastille', 'Ils choisissent un nouveau roi', 'Ils construisent une cathédrale'], a: 0, r: [1], e: "Le 4 août, les privilèges sont supprimés : tout le monde devra payer des impôts." },
          { q: 'Que dit la première idée de la Déclaration ?', c: ['Les hommes naissent libres et égaux en droits', 'Le roi décide de tout', 'Seuls les nobles sont libres', 'Il faut payer plus d\'impôts'], a: 0, r: [3], e: "« Les hommes naissent et demeurent libres et égaux en droits. »" }
        ] },
      qs: [
        { t: 'qcm', q: 'Quelle est la devise de la France ?', c: ['Liberté, Égalité, Fraternité', 'Courage, Patience, Magie', 'Un pour tous, tous pour un', 'Paix, Amour, Joie'], a: 0, z: 'Elle est écrite sur les mairies et les écoles.', e: "Liberté, Égalité, Fraternité est écrit sur le fronton des mairies et des écoles." },
        { t: 'qcm', q: 'Où étaient réunis les députés en 1789 ?', c: ['À Versailles', 'À Orléans', 'À Reims', 'Au Mont-Saint-Michel'], a: 0, z: 'C\'est là que se trouvait le château du roi.', e: "Les députés se réunissaient à Versailles, près du château du roi." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'La Guadeloupe et la Martinique sont des îles françaises situées...', c: ['dans la mer des Caraïbes', 'dans la Manche', 'au milieu des Alpes', 'dans la mer du Nord'], a: 0, z: 'Il y fait chaud toute l\'année.', e: "La Guadeloupe et la Martinique sont aux Antilles, dans la mer des Caraïbes." },
      { t: 'qcm', q: 'Quelle île française se trouve dans l\'océan Indien ?', c: ['La Réunion', 'La Corse', 'La Guadeloupe', 'La Martinique'], a: 0, z: 'Elle a un volcan très actif, le piton de la Fournaise.', e: "La Réunion est dans l'océan Indien, près de Madagascar." },
      { t: 'qcm', q: 'La Guyane française se trouve en...', c: ['Amérique du Sud', 'Afrique', 'Asie', 'Europe'], a: 0, z: 'Elle est couverte d\'une immense forêt, l\'Amazonie.', e: "La Guyane est en Amérique du Sud, à côté du Brésil." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Pinçou',
        s: ['Pinçou ist ein kleiner Krebs.', 'Er hat zwei große Scheren.', 'Er wohnt in einer Muschel.', 'Pinçou sammelt glänzende Steine.', 'Er schenkt Maëlle den schönsten Stein.'],
        qs: [
          { q: 'Wo wohnt Pinçou?', c: ['In einer Muschel', 'In einem Schloss', 'In einem Baum', 'In einem Schiff'], a: 0, r: [2], e: 'Pinçou wohnt in einer Muschel.' },
          { q: 'Was sammelt Pinçou?', c: ['Glänzende Steine', 'Blumen', 'Federn', 'Briefe'], a: 0, r: [3], e: 'Er sammelt glänzende Steine.' }
        ] },
      qs: [
        { t: 'fill', q: 'Welcher Artikel passt?', s: '___ Muschel ist rosa.', c: ['Die', 'Der', 'Das'], a: 0, z: 'Man sagt: eine Muschel.', e: 'die Muschel.' },
        { t: 'type', cs: true, q: 'Setze das Verb ein.', pre: 'er (wohnen) → er', a: ['wohnt'], z: 'Bei „er“ endet das Verb auf -t.', e: 'ich wohne, du wohnst, er wohnt.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Die Donau ist...', c: ['ein langer Fluss', 'ein hoher Berg', 'eine Insel', 'ein See'], a: 0, z: 'Sie fließt durch Wien.', e: 'Die Donau ist ein langer Fluss. Sie beginnt im Schwarzwald und fließt durch Wien.' },
      { t: 'qcm', q: 'Durch welche Hauptstadt fließt die Donau?', c: ['Wien', 'Berlin', 'Paris', 'London'], a: 0, z: 'Die Hauptstadt von Österreich.', e: 'Die Donau fließt durch Wien, die Hauptstadt von Österreich.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 9 ---------------- */
{
  place: "Le Récif d'améthyste", icon: '💎', reward: { icon: '🔮', name: "L'Orbe d'améthyste" },
  focus: "La République, la Marseillaise, les symboles · les paysages · Deutsch: das Lied · Elbe, Neuschwanstein",
  intro: "Le Récif d'améthyste brille de mille violets. Pour le grand concert de demain, il faut un chant puissant. Le Miroir en connaît un très célèbre.",
  parts: [
    { dom: 'hist',
      lect: { title: 'La Marseillaise',
        s: ["En 1792, la France est en guerre contre l'Autriche.", "À Strasbourg, un officier, Rouget de Lisle, écrit un chant pour donner du courage aux soldats.", "Des soldats venus de Marseille le chantent en arrivant à Paris : on l'appelle alors la Marseillaise.", "La même année, le roi perd son pouvoir et la France devient une République.", "Aujourd'hui, la Marseillaise est l'hymne national de la France.", "Maëlle veut que les sirènes apprennent un chant aussi puissant pour le concert."],
        qs: [
          { q: 'Pourquoi ce chant s\'appelle-t-il la Marseillaise ?', c: ['Des soldats venus de Marseille l\'ont chanté à Paris', 'Il a été écrit à Marseille', 'Il parle de la mer', 'Le roi habitait à Marseille'], a: 0, r: [2], e: "Il a été écrit à Strasbourg, mais ce sont des soldats marseillais qui l'ont fait connaître à Paris." },
          { q: 'Que devient la France en 1792 ?', c: ['Une République', 'Un royaume des fées', 'Un empire', 'Une île'], a: 0, r: [3], e: "En 1792, la royauté est abolie : la France devient une République." }
        ] },
      qs: [
        { t: 'qcm', q: 'Quelles sont les couleurs du drapeau français ?', c: ['Bleu, blanc, rouge', 'Noir, rouge, or', 'Vert, blanc, rouge', 'Violet, rose, blanc'], a: 0, z: 'Noir, rouge, or, c\'est le drapeau allemand.', e: "Le drapeau tricolore bleu, blanc, rouge date de la Révolution." },
        { t: 'qcm', q: 'Comment s\'appelle la femme qui représente la République française ?', c: ['Marianne', 'Jeanne', 'Maëlle', 'Agathe'], a: 0, z: 'Son buste est dans toutes les mairies.', e: "Marianne représente la République. On la voit sur les timbres et dans les mairies." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Comment s\'appelle le paysage au bord de la mer ?', c: ['Le littoral', 'La montagne', 'La forêt', 'Le désert'], a: 0, z: 'On y trouve des plages, des ports et des falaises.', e: "Le littoral, c'est le bord de mer : plages, ports, falaises." },
      { t: 'qcm', q: 'Un village entouré de champs et de prés se trouve...', c: ['à la campagne', 'en ville', 'sur le littoral', 'sous la mer'], a: 0, z: 'C\'est le contraire de la ville.', e: "À la campagne, il y a des champs, des prés, des fermes et des villages." },
      { t: 'qcm', q: 'En ville, on trouve surtout...', c: ['des immeubles, des rues et des magasins', 'des champs de blé', 'des troupeaux de vaches', 'des glaciers'], a: 0, z: 'Pense à Paris ou à Lyon.', e: "En ville, il y a beaucoup d'immeubles, de rues, de magasins et d'habitants." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Das Lied',
        s: ['Die Meerjungfrauen üben ein Lied.', 'Sie singen laut und schön.', 'Die Fische hören zu.', 'Ein Delfin springt aus dem Wasser.', 'Morgen ist das große Konzert.'],
        qs: [
          { q: 'Was üben die Meerjungfrauen?', c: ['Ein Lied', 'Einen Tanz', 'Ein Spiel', 'Ein Bild'], a: 0, r: [0], e: 'Die Meerjungfrauen üben ein Lied.' },
          { q: 'Wann ist das Konzert?', c: ['Morgen', 'Heute', 'Gestern', 'Im Sommer'], a: 0, r: [4], e: 'Morgen ist das große Konzert.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Setze das Verb ein.', pre: 'wir (singen) → wir', a: ['singen'], z: 'Bei „wir“ endet das Verb auf -en.', e: 'ich singe, du singst, wir singen.' },
        { t: 'dictee', cs: true, say: 'der Delfin', a: ['der Delfin', 'der Delphin'], z: 'Delfin schreibt man mit f.', e: '„Delfin“ mit f (man darf auch „Delphin“ schreiben, aber Delfin ist heute üblich).' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Welcher Fluss fließt durch Hamburg?', c: ['Die Elbe', 'Der Rhein', 'Die Donau', 'Die Seine'], a: 0, z: 'Sie fließt auch durch Dresden.', e: 'Die Elbe fließt durch Hamburg in die Nordsee.' },
      { t: 'qcm', q: 'Das Schloss Neuschwanstein sieht aus wie ein Märchenschloss. In welchem Bundesland steht es?', c: ['In Bayern', 'In Berlin', 'In Hamburg', 'In Bremen'], a: 0, z: 'Im Süden, bei den Alpen.', e: 'Neuschwanstein steht in Bayern, vor den Alpen.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 10 ---------------- */
{
  place: "Le Palais de l'Harmonie", icon: '🎻', reward: { icon: '💠', name: "Le Diadème de l'Harmonie" },
  focus: "Grand défi : Napoléon et révision de toute l'histoire · révision de géographie · Deutsch: das Konzert",
  intro: "Le grand soir est arrivé. Fées et sirènes attendent dans le Palais de l'Harmonie. Le concert commencera quand Elena aura réussi l'épreuve finale.",
  parts: [
    { dom: 'hist',
      lect: { title: 'Napoléon Bonaparte',
        s: ["Après la Révolution, un jeune général devient très célèbre : Napoléon Bonaparte.", "En 1799, il prend le pouvoir.", "En 1804, il se fait couronner empereur des Français.", "Il crée le Code civil, un grand livre de lois que la France utilise encore aujourd'hui.", "Il fait aussi ouvrir des lycées pour former les élèves.", "Mais il fait beaucoup de guerres en Europe, et il finit sa vie prisonnier sur une île très lointaine."],
        qs: [
          { q: 'En quelle année Napoléon devient-il empereur ?', c: ['1804', '1789', '1429', '1792'], a: 0, r: [2], e: "Napoléon est couronné empereur des Français en 1804." },
          { q: 'Qu\'est-ce que le Code civil ?', c: ['Un grand livre de lois', 'Un code secret', 'Un château', 'Une armée'], a: 0, r: [3], e: "Le Code civil rassemble les lois. On l'utilise encore aujourd'hui." }
        ] },
      qs: [
        { t: 'qcm', q: 'Range dans l\'ordre, du plus ancien au plus récent :', c: ['Jeanne d\'Arc, la prise de la Bastille, Napoléon empereur', 'La prise de la Bastille, Jeanne d\'Arc, Napoléon empereur', 'Napoléon empereur, Jeanne d\'Arc, la prise de la Bastille', 'Jeanne d\'Arc, Napoléon empereur, la prise de la Bastille'], a: 0, z: '1429, 1789, 1804.', e: "1429 (Jeanne d'Arc), 1789 (la Bastille), 1804 (Napoléon empereur)." },
        { t: 'qcm', q: 'Révision : comment s\'appelle la plus haute tour d\'un château fort ?', c: ['Le donjon', 'Le phare', 'Le vitrail', 'Le pont-levis'], a: 0, z: 'Thibaut l\'écuyer pourrait te le dire.', e: "Le donjon est la tour la plus haute du château fort." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Révision : quel fleuve traverse Paris ?', c: ['La Seine', 'La Loire', 'Le Rhône', 'La Garonne'], a: 0, z: 'Il se jette dans la Manche.', e: "La Seine traverse Paris." },
      { t: 'qcm', q: 'Révision : dans quelles montagnes est le mont Blanc ?', c: ['Les Alpes', 'Les Pyrénées', 'Les Vosges', 'Le Massif central'], a: 0, z: 'À l\'est, vers l\'Italie et la Suisse.', e: "Le mont Blanc est dans les Alpes." },
      { t: 'qcm', q: 'Révision : quelle île est en Méditerranée ?', c: ['La Corse', 'La Réunion', 'La Martinique', 'La Guadeloupe'], a: 0, z: 'Les autres sont très loin de la France métropolitaine.', e: "La Corse est en Méditerranée. Les autres îles sont en outre-mer." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Das Konzert',
        s: ['Heute ist das große Konzert.', 'Elena spielt Geige.', 'Lila spielt auch Geige.', 'Die Meerjungfrauen singen.', 'Alle Feen und Fische tanzen.', 'Das ist die Harmonie!'],
        qs: [
          { q: 'Wer spielt Geige?', c: ['Elena und Lila', 'Nur Maëlle', 'Die Fische', 'Pinçou'], a: 0, r: [1, 2], e: 'Elena und Lila spielen Geige.' },
          { q: 'Was machen die Meerjungfrauen?', c: ['Sie singen', 'Sie schlafen', 'Sie malen', 'Sie backen'], a: 0, r: [3], e: 'Die Meerjungfrauen singen.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Schreib das Wort in der <b>Mehrzahl</b>.', pre: 'die Fee → die', a: ['Feen'], z: 'Man hängt -n an.', e: 'die Fee, die Feen.' },
        { t: 'dictee', cs: true, say: 'Alle tanzen.', a: ['Alle tanzen'], z: 'tanzen schreibt man mit nz.', e: '„tanzen“ mit z nach dem n.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Wiederholung: Wie viele Bundesländer hat Deutschland?', c: ['16', '2', '100', '5'], a: 0, z: 'Mehr als zehn, weniger als zwanzig.', e: 'Deutschland hat 16 Bundesländer.' },
      { t: 'qcm', q: 'Wiederholung: Wo liegen die Nordsee und die Ostsee?', c: ['Im Norden', 'Im Süden', 'Im Osten', 'In Bayern'], a: 0, z: 'Das Wort „Nord“ hilft dir.', e: 'Die Nordsee und die Ostsee liegen im Norden von Deutschland.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
}
]};
