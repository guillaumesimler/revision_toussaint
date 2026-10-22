var CFG = {
  id: 'sarah', name: 'Sarah', level: 'CM2',
  title: 'Le Manoir des Ombres',
  tagline: 'Dix salles. Dix énigmes. Un médaillon que personne n\'a trouvé depuis un siècle.',
  homeIcon: '🕯️', revIcon: '🕸️', collTitle: 'Le cabinet de curiosités',
  comp: { name: 'Nyx', icon: '🦇' },
  sibling: { href: 'sarah-meute.html', key: 'revision-sarah2-v1', icon: '🐺', label: 'Nouveau : Le Territoire de la Meute' },
  icons: { ortho: '✒️', calc: '🧮', lect: '📜', points: '🖤' },
  sec: { ortho: 'Orthographe', calc: 'Calcul', lect: 'Lecture' },
  ranks: [{ min: 0, name: 'Visiteuse' }, { min: 3, name: 'Habitante du manoir' }, { min: 6, name: 'Gardienne des secrets' }, { min: 10, name: 'Maîtresse des ombres' }],
  mapX: [130, 270, 200, 115, 250, 285, 160, 115, 245, 200],
  deco: [[340, 1100, '🕯️', 26], [45, 1000, '🕸️', 30], [355, 930, '🦇', 24], [40, 850, '🥀', 24], [350, 760, '🕷️', 22], [50, 680, '🌙', 30], [360, 590, '🦇', 20], [40, 510, '🗝️', 22], [355, 420, '🕸️', 28], [45, 330, '🕯️', 24], [350, 230, '🦇', 26], [60, 150, '⭐', 16], [330, 60, '🌕', 32], [90, 50, '🦇', 18]],
  particles: ['🦇', '🖤', '🕷️', '🥀', '✦'],
  sounds: { type: 'triangle', ok: [440, 523, 659], ok2: [392, 466], wrong: [196, 185], win: [220, 262, 330, 440, 523] },
  lines: {
    hello: ['Bonsoir, Sarah. Le manoir t\'attendait. Évidemment.', 'Te revoilà. Les araignées sont ravies. Moi aussi, un peu.', 'Une nouvelle salle s\'ouvre. Ne fais pas de bruit, les portraits dorment.'],
    idle: ['Je t\'observe.', 'Prends ton temps. L\'éternité est longue.', 'Silence. On réfléchit.', 'Les murs ont des oreilles. Et ils notent.', 'Rien ne presse. Sauf peut-être les fantômes.'],
    sec: { calc: 'Les chiffres, maintenant. Un brouillon est autorisé. Même les sorcières en utilisent.', lect: 'Lis le texte en entier d\'abord. Les secrets se cachent dans les détails.' },
    ok: ['Exact.', 'Correct. Je ne suis pas surprise.', 'Juste. Le manoir approuve en silence.', 'Parfait. C\'en est presque inquiétant.', 'Bonne réponse. Une chauve-souris a applaudi. Une seule.', 'Impeccable. Comme une partition bien jouée.'],
    ok2: ['Rattrapé de justesse. Ça compte.', 'Correct au deuxième essai. La persévérance est une qualité sombre mais utile.', 'Voilà. Tu as débusqué l\'erreur.'],
    wrong1: ['Non. L\'erreur rôde dans la zone indiquée.', 'Raté. Regarde la partie marquée : quelque chose cloche.', 'Hmm. Une faute se cache là. Débusque-la.'],
    wrong2: ['Voici la réponse. Grave-la dans ta mémoire.', 'Les ombres te révèlent la solution. Retiens-la.', 'Celle-ci rejoint les Revanches. Elle ne s\'échappera pas.'],
    combo: ['Série de 5. Même les fantômes sont impressionnés.', 'Série en cours. C\'est presque effrayant.', 'Implacable. Le manoir frissonne.'],
    end3: ['Trois étoiles. Le manoir s\'incline. Discrètement.', 'Trois étoiles. Les portraits ont souri. C\'est rare.'],
    end2: ['Deux étoiles. Honorable, pour une vivante.', 'Deux étoiles. Le corbeau hoche la tête, ce qui est beaucoup pour lui.'],
    end1: ['Mission accomplie. Les ombres attendent mieux demain.', 'Terminé. Les Revanches t\'attendent dans la toile.'],
    final: '🖤 Le Médaillon des Ombres est à toi. Sarah devient Maîtresse des ombres du manoir. Personne ne l\'avait trouvé depuis un siècle.',
    allDone: '🖤 Les dix salles sont explorées. Rejoue pour les trois étoiles partout, ou prends tes revanches.',
    revIntro: 'Les questions ratées sont prises dans la toile. Réussis-les du premier coup pour les libérer.',
    revEmpty: 'La toile est vide. Aucune erreur ne t\'échappe. C\'est presque inquiétant.',
    record: '🏆 Nouveau record. Même l\'horloge du hall a eu du mal à suivre.'
  }
};

var DATA = { days: [
/* ---------------- JOUR 1 ---------------- */
{
  place: 'Bibliothèque interdite', icon: '📚', reward: { icon: '📜', name: 'Le Grimoire d\'argent' },
  focus: 'a/à, et/est, son/sont, ces/ses · grands nombres jusqu\'aux milliards',
  intro: 'Personne n\'entre plus dans la bibliothèque depuis cent ans. Personne, sauf toi.',
  ortho: [
    { t: 'fill', s: 'Sarah ___ toujours un livre étrange sous le bras.', c: ['a', 'à'], a: 0, z: 'Remplace par « avait ».', e: 'Sarah avait toujours un livre : a (verbe avoir).' },
    { t: 'fill', s: 'La bibliothèque ___ fermée depuis cent ans.', c: ['est', 'et'], a: 0, z: 'Remplace par « était ».', e: 'La bibliothèque était fermée : est (verbe être).' },
    { t: 'fill', s: 'Les vieux livres ___ couverts de poussière.', c: ['sont', 'son'], a: 0, z: 'Remplace par « étaient ».', e: 'Les livres étaient couverts : sont (verbe être).' },
    { t: 'fill', s: 'Sarah range ___ partitions dans son cartable noir.', c: ['ses', 'ces'], a: 0, z: 'Ce sont les siennes ou celles qu\'on montre du doigt ? Essaie « les siennes ».', e: '« ses » = les siennes, à elle. « ces » = celles-là, qu\'on montre.' },
    { t: 'fill', s: 'Regarde ___ chauves-souris accrochées au plafond !', c: ['ces', 'ses'], a: 0, z: 'On les montre du doigt : on pourrait dire « ces chauves-souris-là ».', e: 'On montre les chauves-souris : ces (celles-là).' },
    { t: 'fill', s: 'Elle lit à la lueur d\'une bougie ___ d\'une lanterne.', c: ['et', 'est'], a: 0, z: 'Remplace par « et puis ».', e: 'On peut dire « et puis » : et.' }
  ],
  calc: {
    gen: [['placeM'], ['wordsM'], ['compareM']],
    probs: [
      { t: 'num', q: 'La bibliothèque contient <b>3 450 000</b> pages. Un fantôme en a déjà lu <b>1 275 000</b>. Combien de pages lui reste-t-il à lire ?', a: 2175000, chk: '3450000-1275000', z: 'Ce qui reste : une soustraction. Aligne bien les classes (millions, mille, unités).', e: '3 450 000 − 1 275 000 = 2 175 000 pages.' },
      { t: 'num', q: 'Un grimoire compte <b>365 pages</b>. Combien de pages ont <b>4 grimoires</b> identiques ?', a: 1460, chk: '365*4', z: '4 fois 365.', e: '365 × 4 = 1 460 pages.' }
    ]
  },
  lect: {
    title: 'Le livre qui murmurait',
    s: ['Personne n\'entrait plus dans la bibliothèque du manoir depuis l\'hiver où la grande horloge s\'était arrêtée.', 'Sarah, elle, aimait le silence épais des étagères et l\'odeur des vieux papiers.', 'Un mercredi, alors qu\'elle cherchait une partition de violoncelle, elle entendit un murmure.', 'Il venait d\'un livre à la couverture violette, coincé entre deux dictionnaires.', 'Quand elle l\'ouvrit, les pages étaient blanches, sauf une phrase écrite à l\'encre d\'argent : « Remets l\'horloge à l\'heure. »', 'Sarah descendit dans le hall, grimpa sur un tabouret et poussa doucement l\'aiguille.', 'L\'horloge reprit son tic-tac, et toutes les bougies du manoir s\'allumèrent en même temps.', 'Le livre, lui, se referma avec un petit soupir satisfait.'],
    qs: [
      { q: 'Depuis quand personne n\'entre plus dans la bibliothèque ?', c: ['Depuis l\'hiver où l\'horloge s\'est arrêtée', 'Depuis l\'arrivée de Sarah', 'Depuis la dernière tempête', 'Depuis toujours'], a: 0, r: [0], e: 'Depuis l\'hiver où la grande horloge s\'était arrêtée.' },
      { q: 'Que cherchait Sarah dans la bibliothèque ?', c: ['Une partition de violoncelle', 'Un dictionnaire', 'Une bougie', 'Un livre violet'], a: 0, r: [2], e: 'Elle cherchait une partition de violoncelle quand elle a entendu le murmure.' },
      { q: 'Que demande le livre à Sarah ?', c: ['De remettre l\'horloge à l\'heure', 'D\'allumer les bougies', 'De jouer du violoncelle', 'De le ranger à sa place'], a: 0, r: [4], e: 'La phrase à l\'encre d\'argent dit : « Remets l\'horloge à l\'heure. »' },
      { q: 'Que montre le « petit soupir satisfait » du livre ?', c: ['Qu\'il est content que Sarah ait réussi', 'Qu\'il est fatigué', 'Qu\'il est déçu', 'Qu\'il a peur de l\'horloge'], a: 0, r: [7], e: 'Satisfait = content : sa mission est accomplie grâce à Sarah.' }
    ]
  }
},
/* ---------------- JOUR 2 ---------------- */
{
  place: 'Salle de musique hantée', icon: '🎻', reward: { icon: '🕯️', name: 'La Bougie noire' },
  focus: 'c\'est / s\'est, ce / se · addition et soustraction de grands nombres',
  intro: 'Chaque nuit, à minuit, un violoncelle joue tout seul. Il est temps de savoir pourquoi.',
  ortho: [
    { t: 'fill', s: '___ le plus beau violoncelle du manoir.', c: ['C\'est', 'S\'est'], a: 0, z: 'Remplace par « Cela est ».', e: 'On peut dire « Cela est le plus beau » : c\'est.' },
    { t: 'fill', s: 'Le fantôme ___ caché derrière le piano.', c: ['s\'est', 'c\'est'], a: 0, z: 'Mets la phrase avec « je » : « je me suis caché ». Quel petit mot change ?', e: 'Se cacher : il s\'est caché (je me suis caché). C\'est un verbe pronominal.' },
    { t: 'fill', s: 'Sarah ___ prépare pour son concert.', c: ['se', 'ce'], a: 0, z: 'Remplace par « me » : « je me prépare ».', e: 'Se préparer : elle se prépare (je me prépare).' },
    { t: 'fill', s: '___ soir, la salle de musique résonne.', c: ['Ce', 'Se'], a: 0, z: 'Le petit mot est devant un nom (« soir »). Peut-on dire « cette nuit » ?', e: 'Devant un nom, on écrit « ce » : ce soir, cette nuit.' },
    { t: 'fill', s: 'L\'archet ___ mis à grincer tout seul.', c: ['s\'est', 'c\'est'], a: 0, z: 'Avec « je » : « je me suis mis à... ».', e: 'Se mettre : il s\'est mis (je me suis mis).' },
    { t: 'dictee', say: 'un violoncelle', a: ['un violoncelle'], e: 'violoncelle : deux l, un c, et un e à la fin.' }
  ],
  calc: {
    gen: [['add', 7, 6], ['sub', 7, 6], ['x10']],
    probs: [
      { t: 'num', q: 'Le concert du manoir a attiré <b>1 248</b> fantômes le samedi et <b>987</b> le dimanche. Combien de spectateurs en tout ?', a: 2235, chk: '1248+987', z: 'En tout : une addition.', e: '1 248 + 987 = 2 235 spectateurs.' },
      { t: 'num', q: 'Un violoncelle a <b>4 cordes</b>. Combien de cordes faut-il pour <b>26 violoncelles</b> ?', a: 104, chk: '4*26', z: '26 fois 4 cordes.', e: '26 × 4 = 104 cordes.' }
    ]
  },
  lect: {
    title: 'Le violoncelle fantôme',
    s: ['Chaque nuit, à minuit précis, un air de violoncelle s\'élevait de la salle de musique.', 'Les domestiques du manoir refusaient d\'y entrer, persuadés qu\'un fantôme y jouait.', 'Sarah, qui ne croyait qu\'à ce qu\'elle voyait, décida d\'aller vérifier.', 'Elle se cacha derrière un rideau de velours et attendit sans un bruit.', 'À minuit, une fenêtre mal fermée s\'ouvrit, et le vent fit vibrer les cordes de l\'instrument.', 'Le « fantôme » n\'était qu\'un courant d\'air musicien.', 'Sarah ferma la fenêtre, un peu déçue : elle aurait préféré un vrai fantôme.'],
    qs: [
      { q: 'Pourquoi les domestiques n\'entrent-ils pas dans la salle de musique ?', c: ['Ils pensent qu\'un fantôme y joue', 'La porte est fermée à clé', 'Sarah le leur interdit', 'Ils n\'aiment pas la musique'], a: 0, r: [1], e: 'Ils sont persuadés qu\'un fantôme y joue.' },
      { q: 'Quel trait de caractère de Sarah ce texte montre-t-il ?', c: ['Elle veut vérifier par elle-même', 'Elle est peureuse', 'Elle est paresseuse', 'Elle est bavarde'], a: 0, r: [2], e: 'Elle ne croit qu\'à ce qu\'elle voit et décide d\'aller vérifier.' },
      { q: 'Qui joue vraiment du violoncelle la nuit ?', c: ['Le vent', 'Un fantôme', 'Un domestique', 'Sarah'], a: 0, r: [4, 5], e: 'C\'est le vent, par une fenêtre mal fermée, qui fait vibrer les cordes.' },
      { q: 'Pourquoi Sarah est-elle « un peu déçue » ?', c: ['Elle aurait aimé rencontrer un vrai fantôme', 'Le violoncelle est cassé', 'Elle a eu froid', 'Elle n\'a pas pu jouer'], a: 0, r: [6], e: 'Elle aurait préféré un vrai fantôme. Chacun ses goûts.' }
    ]
  }
},
/* ---------------- JOUR 3 ---------------- */
{
  place: 'Salle de bal des ombres', icon: '🩰', reward: { icon: '🥀', name: 'La Rose fanée' },
  focus: 'présent des verbes du 3e groupe · sujet inversé ou éloigné · multiplication posée',
  intro: 'Les ombres d\'anciens danseurs tournent encore dans la salle de bal. Ne marche pas sur leurs pieds.',
  ortho: [
    { t: 'type', q: 'Conjugue au présent.', pre: 'nous (prendre) → nous', a: ['prenons'], e: 'Prendre : nous prenons, vous prenez, ils prennent.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'ils (venir) → ils', a: ['viennent'], e: 'Venir : ils viennent (deux n).' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'vous (faire) → vous', a: ['faites'], e: 'Vous faites (jamais « vous faisez »), comme vous dites.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'elles (savoir) → elles', a: ['savent'], e: 'Savoir : je sais, tu sais, il sait, nous savons, vous savez, ils savent.' },
    { t: 'fill', s: 'Dans la salle de bal ___ les ombres des anciens danseurs.', c: ['dansent', 'danse'], a: 0, z: 'Qui est-ce qui danse ? Cherche le sujet : il est placé APRÈS le verbe.', e: 'Le sujet est « les ombres », placé après le verbe : elles dansent.' },
    { t: 'fill', s: 'Les danseuses du manoir, vêtues de noir, ___ sans bruit.', c: ['glissent', 'glisse'], a: 0, z: 'Qui est-ce qui glisse ? « du manoir, vêtues de noir » sépare le sujet du verbe.', e: 'Le sujet est « les danseuses » : elles glissent.' }
  ],
  calc: {
    gen: [['mul2', 3, 2], ['mul2', 2, 2], ['table', [6, 7, 8, 9]]],
    probs: [
      { t: 'num', q: 'Une chorégraphie compte <b>8 temps</b> par mesure. Combien de temps y a-t-il dans <b>32 mesures</b> ?', a: 256, chk: '8*32', z: '32 mesures de 8 temps : 32 fois 8.', e: '32 × 8 = 256 temps.' },
      { t: 'num', q: 'La salle de bal a <b>24 rangées</b> de <b>35 chaises</b>. Combien de chaises en tout ?', a: 840, chk: '24*35', z: 'Pose la multiplication 35 × 24.', e: '35 × 24 = 840 chaises.' }
    ]
  },
  lect: {
    title: 'Les chaussons de pointe',
    s: ['Les danseuses classiques portent parfois des chaussons de pointe, qui leur permettent de se tenir sur le bout des orteils.', 'Le bout de ces chaussons est rigide : il est fabriqué avec des couches de tissu et de colle durcies.', 'Une danseuse ne commence pas les pointes avant plusieurs années de danse, car ses pieds et ses chevilles doivent être assez forts.', 'Les danseuses professionnelles usent leurs chaussons très vite : parfois une paire en un seul spectacle.', 'Avant de les porter, beaucoup les « cassent » volontairement, en les pliant ou en les tapant, pour qu\'ils soient plus souples.'],
    qs: [
      { q: 'À quoi servent les chaussons de pointe ?', c: ['À se tenir sur le bout des orteils', 'À danser plus vite', 'À sauter plus haut', 'À ne pas glisser'], a: 0, r: [0], e: 'Ils permettent de se tenir sur le bout des orteils.' },
      { q: 'Avec quoi est fabriqué le bout du chausson ?', c: ['Des couches de tissu et de colle durcies', 'Du bois', 'Du métal', 'Du plastique'], a: 0, r: [1], e: 'Des couches de tissu et de colle durcies.' },
      { q: 'Pourquoi faut-il attendre avant de faire des pointes ?', c: ['Les pieds et les chevilles doivent être assez forts', 'Les chaussons coûtent trop cher', 'Il faut connaître toute la musique', 'Il faut être très grande'], a: 0, r: [2], e: 'Les pieds et les chevilles doivent être assez forts.' },
      { q: 'Pourquoi les danseuses « cassent »-elles leurs chaussons neufs ?', c: ['Pour les rendre plus souples', 'Parce qu\'elles sont en colère', 'Pour en acheter d\'autres', 'Pour les décorer'], a: 0, r: [4], e: 'Pour qu\'ils soient plus souples.' }
    ]
  }
},
/* ---------------- JOUR 4 ---------------- */
{
  place: 'Bassin souterrain', icon: '🌊', reward: { icon: '🐙', name: 'La Pieuvre des profondeurs' },
  focus: 'imparfait de l\'indicatif · calcul mental (× 25, × 11, ÷ 10, ÷ 100) · problèmes de natation',
  intro: 'Sous le manoir dort un bassin d\'eau noire. Ton grand-oncle le traversait d\'une traite. Et toi ?',
  ortho: [
    { t: 'type', q: 'Conjugue à l\'<b>imparfait</b>.', pre: 'nous (nager) → nous', a: ['nagions'], e: 'À l\'imparfait, devant -ions, le e disparaît : nous nagions (mais je nageais).' },
    { t: 'type', q: 'Conjugue à l\'<b>imparfait</b>.', pre: 'je (plonger) → je', a: ['plongeais'], e: 'Devant a, on garde le e pour le son [j] : je plongeais.' },
    { t: 'type', q: 'Conjugue à l\'<b>imparfait</b>.', pre: 'ils (être) → ils', a: ['étaient'], e: 'Être à l\'imparfait : j\'étais, tu étais, il était, nous étions, vous étiez, ils étaient.' },
    { t: 'type', q: 'Conjugue à l\'<b>imparfait</b>.', pre: 'vous (avoir) → vous', a: ['aviez'], e: 'Avoir à l\'imparfait : j\'avais, ..., vous aviez, ils avaient.' },
    { t: 'type', q: 'Conjugue à l\'<b>imparfait</b>.', pre: 'tu (faire) → tu', a: ['faisais'], e: 'Faire à l\'imparfait : je faisais, tu faisais (on écrit « ai » mais on entend [e]).' },
    { t: 'type', q: 'Conjugue à l\'<b>imparfait</b>.', pre: 'elle (commencer) → elle', a: ['commençait'], e: 'Devant a, le c prend une cédille : elle commençait.' }
  ],
  calc: {
    gen: [['mental'], ['mental'], ['mul2', 3, 2]],
    probs: [
      { t: 'num', q: 'Le bassin mesure <b>25 m</b>. Sarah nage <b>36 longueurs</b>. Combien de mètres a-t-elle nagé ?', a: 900, unit: 'm', chk: '25*36', z: 'Astuce : × 25, c\'est × 100 puis ÷ 4.', e: '36 × 25 = 900 m (36 × 100 = 3 600, puis ÷ 4).' },
      { t: 'num', q: 'Au club, Sarah nage <b>1 500 m</b> dans un bassin de <b>50 m</b>. Combien de longueurs fait-elle ?', a: 30, chk: '1500/50', z: 'Combien de fois 50 dans 1 500 ? Pense à 150 ÷ 5.', e: '1 500 ÷ 50 = 30 longueurs.' }
    ]
  },
  lect: {
    title: 'Le bassin sous le manoir',
    s: ['Sous le manoir s\'étendait un bassin d\'eau noire, si calme qu\'il reflétait les voûtes comme un miroir.', 'Autrefois, le grand-oncle de Sarah y nageait chaque matin avant le lever du soleil.', 'Sarah, qui s\'entraînait trois fois par semaine au club, rêvait de le traverser d\'une seule traite.', 'L\'eau était glacée, et personne ne savait vraiment ce qui se cachait au fond.', 'Un matin, elle plongea, compta ses mouvements et nagea sans jamais s\'arrêter.', 'Arrivée de l\'autre côté, elle aperçut sur la paroi des initiales gravées : celles de son grand-oncle.', 'Elle prit un caillou pointu et grava les siennes juste en dessous.'],
    qs: [
      { q: 'À quoi ressemble l\'eau du bassin ?', c: ['À un miroir', 'À une rivière', 'À de l\'encre bleue', 'À de la neige'], a: 0, r: [0], e: 'Elle est si calme qu\'elle reflète les voûtes comme un miroir.' },
      { q: 'Quel est le rêve de Sarah ?', c: ['Traverser le bassin sans s\'arrêter', 'Trouver un trésor au fond', 'Rencontrer son grand-oncle', 'Plonger jusqu\'au fond'], a: 0, r: [2], e: 'Le traverser « d\'une seule traite », c\'est-à-dire sans s\'arrêter.' },
      { q: 'Que trouve-t-elle de l\'autre côté ?', c: ['Les initiales de son grand-oncle', 'Un coffre', 'Une sortie secrète', 'Une partition'], a: 0, r: [5], e: 'Des initiales gravées : celles de son grand-oncle.' },
      { q: 'Que veut montrer Sarah en gravant ses initiales ?', c: ['Qu\'elle a réussi le même exploit que son grand-oncle', 'Qu\'elle s\'ennuie', 'Que le manoir lui appartient', 'Qu\'elle s\'est perdue'], a: 0, r: [5, 6], e: 'Elle grave les siennes sous celles de son grand-oncle : elle a réussi la même traversée.' }
    ]
  }
},
/* ---------------- JOUR 5 ---------------- */
{
  place: 'Serre carnivore', icon: '🌿', reward: { icon: '🪴', name: 'La Plante carnivore apprivoisée' },
  focus: 'futur simple · division posée par un chiffre · multiples',
  intro: 'Dans la serre, les plantes ont faim. Réponds juste, et elles te laisseront passer.',
  ortho: [
    { t: 'type', q: 'Conjugue au <b>futur</b>.', pre: 'je (chanter) → je', a: ['chanterai'], e: 'Futur : infinitif + -ai, -as, -a, -ons, -ez, -ont. Je chanterai.' },
    { t: 'type', q: 'Conjugue au <b>futur</b>.', pre: 'nous (finir) → nous', a: ['finirons'], e: 'Nous finirons : finir + -ons.' },
    { t: 'type', q: 'Conjugue au <b>futur</b>.', pre: 'ils (aller) → ils', a: ['iront'], e: 'Aller est irrégulier au futur : j\'irai, tu iras, ils iront.' },
    { t: 'type', q: 'Conjugue au <b>futur</b>.', pre: 'tu (venir) → tu', a: ['viendras'], e: 'Venir au futur : je viendrai, tu viendras.' },
    { t: 'type', q: 'Conjugue au <b>futur</b>.', pre: 'vous (voir) → vous', a: ['verrez'], e: 'Voir au futur : je verrai, vous verrez (deux r).' },
    { t: 'type', q: 'Conjugue au <b>futur</b>.', pre: 'elle (pouvoir) → elle', a: ['pourra'], e: 'Pouvoir au futur : je pourrai, elle pourra (deux r).' }
  ],
  calc: {
    gen: [['div1', 2], ['div1', 3], ['multiple']],
    probs: [
      { t: 'num', q: 'La serre contient <b>144 plantes carnivores</b>, réparties en <b>9 rangées</b> égales. Combien de plantes par rangée ?', a: 16, chk: '144/9', z: 'Partager en parts égales : une division. 9 fois combien font 144 ?', e: '144 ÷ 9 = 16 plantes, car 16 × 9 = 144.' },
      { t: 'num', q: 'Une plante carnivore attrape <b>7 mouches</b> par jour. Combien en attrape-t-elle en <b>3 semaines</b> ?', a: 147, chk: '7*21', z: 'Combien de jours dans 3 semaines ?', e: '3 semaines = 21 jours. 21 × 7 = 147 mouches.' }
    ]
  },
  lect: {
    title: 'Les plantes carnivores',
    s: ['Les plantes carnivores poussent souvent dans des sols pauvres, où elles trouvent peu de nourriture.', 'Pour compléter leur repas, elles capturent de petits insectes.', 'La dionée, par exemple, possède des feuilles qui se referment comme une mâchoire quand un insecte les touche deux fois.', 'Le népenthès, lui, forme une sorte d\'urne glissante remplie de liquide, dans laquelle les insectes tombent.', 'Contrairement à ce que l\'on croit parfois, aucune plante carnivore ne peut dévorer un être humain.'],
    qs: [
      { q: 'Pourquoi les plantes carnivores capturent-elles des insectes ?', c: ['Parce que leur sol est pauvre en nourriture', 'Pour se défendre', 'Pour décorer leurs feuilles', 'Parce qu\'elles détestent les insectes'], a: 0, r: [0, 1], e: 'Leur sol est pauvre : les insectes complètent leur repas.' },
      { q: 'Que se passe-t-il quand un insecte touche deux fois une feuille de dionée ?', c: ['La feuille se referme', 'La feuille tombe', 'La plante fleurit', 'L\'insecte s\'envole'], a: 0, r: [2], e: 'Elle se referme comme une mâchoire.' },
      { q: 'Comment le népenthès attrape-t-il ses proies ?', c: ['Elles glissent dans une urne remplie de liquide', 'Il les colle avec ses fleurs', 'Il les écrase', 'Il les poursuit'], a: 0, r: [3], e: 'Les insectes tombent dans son urne glissante remplie de liquide.' },
      { q: 'Que nous apprend la dernière phrase ?', c: ['Une plante carnivore ne peut pas manger un humain', 'Les plantes carnivores mangent parfois des humains', 'Il faut les arroser souvent', 'Elles sont très rares'], a: 0, r: [4], e: 'Aucune plante carnivore ne peut dévorer un être humain. Dommage, diront certains.' }
    ]
  }
},
/* ---------------- JOUR 6 ---------------- */
{
  place: 'Grenier aux portraits', icon: '🖼️', reward: { icon: '🗝️', name: 'La Clé rouillée' },
  focus: 'pluriel des noms et adjectifs (exceptions) · accord dans le groupe nominal · fractions',
  intro: 'Vingt ancêtres te fixent depuis leurs cadres. L\'un d\'eux vient de cligner des yeux.',
  ortho: [
    { t: 'type', q: 'Écris au pluriel.', pre: 'un travail → des', a: ['travaux'], e: 'Quelques noms en -ail font -aux : travail, vitrail, corail, émail, soupirail, bail, vantail.' },
    { t: 'type', q: 'Écris au pluriel.', pre: 'un festival → des', a: ['festivals'], e: 'Exceptions en -al qui prennent un s : bal, carnaval, chacal, festival, récital, régal.' },
    { t: 'type', q: 'Écris au pluriel.', pre: 'un pneu → des', a: ['pneus'], e: 'Exceptions en -eu qui prennent un s : bleu, pneu, émeu.' },
    { t: 'type', q: 'Écris au pluriel.', pre: 'un vitrail → des', a: ['vitraux'], e: 'Vitrail fait partie des noms en -ail qui font -aux : des vitraux.' },
    { t: 'fill', s: 'Les portraits ___ observent Sarah.', c: ['anciens', 'ancien', 'anciennes'], a: 0, z: '« portraits » est masculin pluriel.', e: 'Masculin pluriel : anciens.' },
    { t: 'fill', s: 'Des robes ___ pendent dans la vieille armoire.', c: ['noires', 'noirs', 'noir'], a: 0, z: '« robes » : féminin, pluriel.', e: 'Féminin pluriel : noires (e + s).' }
  ],
  calc: {
    gen: [['fracOf'], ['fracCompare'], ['mul2', 3, 2]],
    probs: [
      { t: 'qcm', q: 'Sarah a mangé <b>3 parts</b> d\'un gâteau coupé en <b>8 parts égales</b>. Quelle fraction du gâteau a-t-elle mangée ?', c: ['3/8', '8/3', '3/5', '5/8'], a: 0, z: 'Le nombre du bas dit en combien de parts on a coupé, celui du haut combien on en prend.', e: '3 parts sur 8 : 3/8. (5/8, c\'est ce qui reste.)' },
      { t: 'num', q: 'Le grenier contient <b>60 portraits</b>. Les <b>2/3</b> représentent des ancêtres moustachus. Combien de portraits moustachus ?', a: 40, chk: '60/3*2', z: 'Cherche d\'abord 1/3 de 60, puis prends-en 2.', e: '60 ÷ 3 = 20, puis 20 × 2 = 40 portraits.' }
    ]
  },
  lect: {
    title: 'Le portrait effacé',
    s: ['Au grenier, vingt portraits d\'ancêtres fixaient la poussière depuis des décennies.', 'Sarah les connaissait tous, sauf un : une fillette en robe noire dont le nom avait été effacé.', 'Ce jour-là, elle eut l\'impression que la fillette avait cligné des yeux.', 'Elle s\'approcha, souffla sur le cadre et découvrit une inscription : « Agathe, 1891, violoncelliste ».', 'Derrière le tableau, cachée dans le bois, se trouvait une vieille partition jaunie.', 'Sarah la déchiffra le soir même : c\'était un morceau magnifique, que personne n\'avait joué depuis plus d\'un siècle.'],
    qs: [
      { q: 'Combien de portraits y a-t-il au grenier ?', c: ['Vingt', 'Dix', 'Cent', 'Un seul'], a: 0, r: [0], e: 'Vingt portraits d\'ancêtres.' },
      { q: 'Qu\'est-ce qui intrigue Sarah dans le portrait de la fillette ?', c: ['Son nom est effacé et elle croit la voir cligner des yeux', 'La fillette lui ressemble trait pour trait', 'Le cadre est en or', 'Il est plus grand que les autres'], a: 0, r: [1, 2], e: 'Le nom est effacé, et la fillette semble cligner des yeux.' },
      { q: 'Quel point commun Sarah a-t-elle avec Agathe ?', c: ['Elles jouent toutes les deux du violoncelle', 'Elles ont le même âge', 'Elles vivent au grenier', 'Elles portent le même prénom'], a: 0, r: [3], e: 'L\'inscription dit « violoncelliste », comme Sarah.' },
      { q: 'Comment sait-on que la partition est très ancienne ?', c: ['Personne ne l\'a jouée depuis plus d\'un siècle', 'Elle est en couleur', 'Elle est écrite au stylo', 'Sarah l\'a écrite elle-même'], a: 0, r: [4, 5], e: 'Elle est jaunie et personne ne l\'a jouée depuis plus d\'un siècle.' }
    ]
  }
},
/* ---------------- JOUR 7 ---------------- */
{
  place: 'Observatoire de minuit', icon: '🔭', reward: { icon: '🌙', name: 'La Lune d\'argent' },
  focus: 'passé composé avec avoir et être · accord du participe passé avec être · nombres décimaux',
  intro: 'Minuit sonne. La lunette est pointée vers la Lune. Les chiffres, eux, sont à virgule.',
  ortho: [
    { t: 'type', q: 'Conjugue au <b>passé composé</b>.', pre: 'nous (regarder) → nous', a: ['avons regardé'], e: 'Passé composé = avoir ou être au présent + participe passé : nous avons regardé.' },
    { t: 'type', q: 'Conjugue au <b>passé composé</b>.', pre: 'elle (partir) → elle', a: ['est partie'], e: 'Avec être, le participe s\'accorde avec le sujet : elle est partie (+ e).' },
    { t: 'type', q: 'Conjugue au <b>passé composé</b>.', pre: 'ils (venir) → ils', a: ['sont venus'], e: 'Avec être : ils sont venus (masculin pluriel, + s).' },
    { t: 'type', q: 'Conjugue au <b>passé composé</b>.', pre: 'j\' (prendre) → j\'', a: ['ai pris'], e: 'Prendre : j\'ai pris (participe passé « pris », avec un s).' },
    { t: 'fill', s: 'Les étoiles sont ___ une à une.', c: ['apparues', 'apparu', 'apparus'], a: 0, z: 'Avec l\'auxiliaire être, le participe s\'accorde avec le sujet « les étoiles ».', e: '« les étoiles » : féminin pluriel, donc apparues.' },
    { t: 'fill', s: 'Sarah est ___ à l\'observatoire.', c: ['montée', 'monté', 'montés'], a: 0, z: 'Auxiliaire être : accorde avec « Sarah ».', e: 'Sarah est féminin singulier : montée.' }
  ],
  calc: {
    gen: [['decCompare'], ['decAdd'], ['mul2', 2, 2]],
    probs: [
      { t: 'num', q: 'La lunette de l\'observatoire mesure <b>1,25 m</b>. Son support mesure <b>0,8 m</b>. Quelle est la hauteur totale ?', a: '2,05', unit: 'm', chk: '1.25+0.8', z: 'Aligne les virgules : 0,8 = 0,80.', e: '1,25 + 0,80 = 2,05 m.' },
      { t: 'num', q: 'Sarah observe la Lune <b>3 nuits</b> de suite, <b>45 minutes</b> chaque nuit. Combien de minutes en tout ?', a: 135, unit: 'min', chk: '3*45', z: '3 fois 45 minutes.', e: '3 × 45 = 135 minutes (soit 2 h 15 min).' }
    ]
  },
  lect: {
    title: 'La Lune',
    s: ['La Lune tourne autour de la Terre en un peu moins d\'un mois.', 'Elle ne produit pas de lumière : elle renvoie celle du Soleil, comme un miroir.', 'Selon sa position, nous voyons une partie plus ou moins grande de sa face éclairée : ce sont les phases de la Lune.', 'Lors de la nouvelle lune, on ne la voit presque pas ; lors de la pleine lune, elle apparaît comme un disque entier.', 'La Lune montre toujours la même face à la Terre : c\'est pourquoi on a longtemps parlé de sa « face cachée ».'],
    qs: [
      { q: 'D\'où vient la lumière de la Lune ?', c: ['Du Soleil', 'De la Lune elle-même', 'Des étoiles', 'De la Terre'], a: 0, r: [1], e: 'Elle renvoie la lumière du Soleil, comme un miroir.' },
      { q: 'Comment appelle-t-on les changements d\'aspect de la Lune ?', c: ['Les phases', 'Les éclipses', 'Les saisons', 'Les marées'], a: 0, r: [2], e: 'Ce sont les phases de la Lune.' },
      { q: 'Quand la Lune apparaît-elle comme un disque entier ?', c: ['À la pleine lune', 'À la nouvelle lune', 'Le matin', 'En hiver'], a: 0, r: [3], e: 'À la pleine lune.' },
      { q: 'Pourquoi parle-t-on de « face cachée » de la Lune ?', c: ['Elle montre toujours la même face à la Terre', 'Une de ses faces est toujours dans le noir', 'Elle est souvent cachée par les nuages', 'Personne n\'est jamais allé sur la Lune'], a: 0, r: [4], e: 'Elle nous montre toujours la même face : l\'autre reste invisible depuis la Terre.' }
    ]
  }
},
/* ---------------- JOUR 8 ---------------- */
{
  place: 'Cabinet de curiosités', icon: '🕷️', reward: { icon: '🕷️', name: 'L\'Araignée apprivoisée' },
  focus: '-é / -er, ou / où, la / l\'a / là · conversions de longueurs, masses et durées',
  intro: 'Bocaux, plumes, fossiles et une clé qui n\'ouvre rien. Le cabinet a besoin d\'être étiqueté.',
  ortho: [
    { t: 'fill', s: 'Sarah veut ___ un nouveau bocal.', c: ['ranger', 'rangé', 'rangez'], a: 0, z: 'Remplace par « mordre » : « Sarah veut mordre » ou « Sarah veut mordu » ?', e: 'On dit « veut mordre » : c\'est l\'infinitif, ranger.' },
    { t: 'fill', s: 'Elle a ___ une araignée très rare.', c: ['trouvé', 'trouver', 'trouvez'], a: 0, z: 'Remplace par « mordu » : « elle a mordu » ou « elle a mordre » ?', e: 'On dit « a mordu » : c\'est le participe passé, trouvé.' },
    { t: 'fill', s: '___ as-tu caché la clé ?', c: ['Où', 'Ou'], a: 0, z: 'Peut-on remplacer par « ou bien » ? Si non, c\'est le « où » du lieu.', e: 'On demande un lieu : où (avec un accent).' },
    { t: 'fill', s: 'Préfères-tu la plume de corbeau ___ la plume de hibou ?', c: ['ou', 'où'], a: 0, z: 'Remplace par « ou bien ».', e: 'On peut dire « ou bien » : ou (sans accent).' },
    { t: 'fill', s: 'La clé ? Sarah ___ cachée dans un tiroir.', c: ['l\'a', 'la', 'là'], a: 0, z: 'Remplace par « l\'avait » : « Sarah l\'avait cachée ».', e: 'On peut dire « l\'avait » : l\'a (verbe avoir).' },
    { t: 'fill', s: 'Pose ce bocal ___, sur l\'étagère du haut.', c: ['là', 'la', 'l\'a'], a: 0, z: 'Remplace par « ici ».', e: 'On peut dire « ici » : là (avec un accent), qui indique un lieu.' }
  ],
  calc: {
    gen: [['conv'], ['conv'], ['conv']],
    probs: [
      { t: 'num', q: 'Une araignée tisse <b>12 cm</b> de fil par minute. Combien de centimètres tisse-t-elle en <b>un quart d\'heure</b> ?', a: 180, unit: 'cm', chk: '12*15', z: 'Un quart d\'heure, c\'est combien de minutes ?', e: 'Un quart d\'heure = 15 min. 12 × 15 = 180 cm.' },
      { t: 'num', q: 'Le cabinet contient <b>245 objets</b>. Sarah ajoute <b>3 boîtes</b> de <b>18 objets</b>. Combien d\'objets maintenant ?', a: 299, chk: '245+3*18', z: 'Calcule d\'abord combien d\'objets il y a dans les 3 boîtes.', e: '3 × 18 = 54, puis 245 + 54 = 299 objets.' }
    ]
  },
  lect: {
    title: 'Les étiquettes du cabinet',
    s: ['Étiquette n° 1 : plume de corbeau trouvée sur le rebord de la tour, un soir d\'orage.', 'Étiquette n° 2 : coquillage fossile vieux de plusieurs millions d\'années, rapporté d\'une falaise par l\'arrière-grand-mère de Sarah.', 'Étiquette n° 3 : clé rouillée qui n\'ouvre aucune porte connue du manoir.', 'Étiquette n° 4 : araignée empaillée, espèce inconnue, découverte dans le piano.', 'Note de Sarah : la clé n° 3 me semble très suspecte. Il doit bien exister une porte qu\'elle ouvre.'],
    qs: [
      { q: 'Où a été trouvée la plume de corbeau ?', c: ['Sur le rebord de la tour', 'Dans le piano', 'Sur une falaise', 'Dans la serre'], a: 0, r: [0], e: 'Sur le rebord de la tour, un soir d\'orage.' },
      { q: 'Quel objet est sans doute le plus ancien ?', c: ['Le coquillage fossile', 'La plume de corbeau', 'La clé rouillée', 'L\'araignée'], a: 0, r: [1], e: 'Il a plusieurs millions d\'années.' },
      { q: 'Qui a rapporté le coquillage ?', c: ['L\'arrière-grand-mère de Sarah', 'Sarah', 'Le grand-oncle de Sarah', 'Un domestique'], a: 0, r: [1], e: 'L\'arrière-grand-mère de Sarah, d\'une falaise.' },
      { q: 'Que pense Sarah de la clé ?', c: ['Qu\'elle ouvre forcément une porte encore inconnue', 'Qu\'il faut la jeter', 'Qu\'elle est en or', 'Qu\'elle appartient à l\'araignée'], a: 0, r: [4], e: 'Elle la trouve suspecte : il doit exister une porte qu\'elle ouvre. Affaire à suivre...' }
    ]
  }
},
/* ---------------- JOUR 9 ---------------- */
{
  place: 'Crypte aux échos', icon: '⚰️', reward: { icon: '🔮', name: 'L\'Orbe mystérieux' },
  focus: 'sujet, COD, compléments circonstanciels · féminin des noms et adjectifs · problèmes à étapes, durées',
  intro: 'Dans la crypte, l\'écho répète tout. Enfin, presque tout.',
  ortho: [
    { t: 'qcm', q: '« Dans la crypte, l\'écho répète les mots de Sarah. »<br>Quel est le <b>sujet</b> du verbe « répète » ?', c: ['l\'écho', 'Sarah', 'les mots', 'la crypte'], a: 0, z: 'Pose la question : qui est-ce qui répète ?', e: 'C\'est l\'écho qui répète : « l\'écho » est le sujet.' },
    { t: 'qcm', q: '« Dans la crypte, l\'écho répète les mots de Sarah. »<br>Quel est le <b>complément d\'objet direct</b> (COD) ?', c: ['les mots de Sarah', 'Dans la crypte', 'l\'écho', 'répète'], a: 0, z: 'Pose la question : l\'écho répète QUOI ?', e: 'L\'écho répète quoi ? Les mots de Sarah : c\'est le COD.' },
    { t: 'qcm', q: '« <b>Dans la crypte</b>, l\'écho répète les mots de Sarah. »<br>« Dans la crypte » est un complément circonstanciel de...', c: ['lieu', 'temps', 'manière', 'cause'], a: 0, z: 'Ce groupe répond à quelle question : où ? quand ? comment ? pourquoi ?', e: 'Il répond à la question « où ? » : c\'est un complément circonstanciel de lieu.' },
    { t: 'type', q: 'Écris au féminin.', pre: 'un violoncelliste → une', a: ['violoncelliste'], e: 'Piège ! Les noms en -iste ne changent pas au féminin : une violoncelliste, une pianiste.' },
    { t: 'type', q: 'Écris au féminin.', pre: 'un acteur → une', a: ['actrice'], e: 'Beaucoup de noms en -teur font -trice : actrice, directrice.' },
    { t: 'type', q: 'Accorde l\'adjectif entre parenthèses.', pre: 'une élève (sérieux) →', a: ['sérieuse'], e: '-eux devient -euse au féminin : sérieuse.' }
  ],
  calc: {
    gen: [['div1', 3], ['fracOf'], ['mul2', 3, 2]],
    probs: [
      { t: 'num', q: 'La crypte compte <b>6 couloirs</b>. Dans chaque couloir, il y a <b>14 niches</b>, et dans chaque niche, <b>3 bougies</b>. Combien de bougies en tout ?', a: 252, chk: '6*14*3', z: 'Commence par compter les niches (6 couloirs de 14), puis les bougies.', e: '6 × 14 = 84 niches, puis 84 × 3 = 252 bougies.' },
      { t: 'qcm', q: 'Le cours de danse commence à <b>17 h 45</b> et dure <b>1 h 20</b>. À quelle heure se termine-t-il ?', c: ['19 h 05', '18 h 65', '19 h 15', '18 h 05'], a: 0, z: 'Ajoute d\'abord 1 h, puis 20 min. Attention : une heure n\'a que 60 minutes.', e: '17 h 45 + 1 h = 18 h 45, puis + 15 min = 19 h, puis + 5 min = 19 h 05.' }
    ]
  },
  lect: {
    title: 'L\'écho de la crypte',
    s: ['On racontait que l\'écho de la crypte ne répétait pas toujours ce qu\'on lui disait.', 'Sarah voulut en avoir le cœur net et descendit avec une lampe et un carnet.', 'Elle cria « Bonsoir ! », et l\'écho répondit « Bonsoir ! » trois fois, de plus en plus faiblement.', 'Puis elle demanda : « Où est la porte de la clé rouillée ? »', 'Cette fois, l\'écho ne répéta rien du tout : une pierre du mur glissa lentement sur le côté.', 'Derrière, un escalier en colimaçon montait vers le haut du beffroi.', 'Sarah nota dans son carnet : « Les échos aussi savent garder des secrets. »'],
    qs: [
      { q: 'Qu\'emporte Sarah dans la crypte ?', c: ['Une lampe et un carnet', 'Une clé et une bougie', 'Son violoncelle', 'Une corde'], a: 0, r: [1], e: 'Une lampe et un carnet.' },
      { q: 'Comment l\'écho répond-il au « Bonsoir ! » ?', c: ['Il le répète trois fois, de plus en plus faiblement', 'Il ne répond pas', 'Il crie plus fort', 'Il répond « Au revoir »'], a: 0, r: [2], e: 'Trois fois, de plus en plus faiblement.' },
      { q: 'Que se passe-t-il quand Sarah pose sa question ?', c: ['Une pierre glisse et révèle un passage', 'L\'écho éclate de rire', 'La lampe s\'éteint', 'Une porte se referme'], a: 0, r: [4, 5], e: 'Une pierre glisse et révèle un escalier vers le beffroi.' },
      { q: 'De quel objet d\'une salle précédente parle Sarah ?', c: ['De la clé rouillée du cabinet de curiosités', 'De la plume du corbeau', 'Du portrait d\'Agathe', 'De la plante carnivore'], a: 0, r: [3], e: 'Elle cherche la porte de la clé rouillée, trouvée dans le cabinet de curiosités (mission 8).' }
    ]
  }
},
/* ---------------- JOUR 10 ---------------- */
{
  place: 'Tour du beffroi', icon: '🔔', reward: { icon: '🖤', name: 'Le Médaillon des Ombres' },
  focus: 'grand défi : révision de tout le programme',
  intro: 'L\'escalier monte vers la cloche. Ta clé rouillée tremble dans ta poche. C\'est la dernière salle.',
  ortho: [
    { t: 'fill', s: 'Les chauves-souris se ___ envolées au crépuscule.', c: ['sont', 'son'], a: 0, z: 'Remplace par « étaient ».', e: 'Elles s\'étaient envolées : sont (verbe être).' },
    { t: 'type', q: 'Conjugue à l\'<b>imparfait</b>.', pre: 'nous (manger) → nous', a: ['mangions'], e: 'Imparfait : nous mangions (pas de e devant i).' },
    { t: 'type', q: 'Écris au pluriel.', pre: 'un récital → des', a: ['récitals'], e: 'Récital fait partie des exceptions en -al qui prennent un s.' },
    { t: 'fill', s: '___ la dernière marche du beffroi.', c: ['C\'est', 'S\'est'], a: 0, z: 'Remplace par « Cela est ».', e: 'Cela est la dernière marche : c\'est.' },
    { t: 'type', q: 'Conjugue au <b>futur</b>.', pre: 'nous (être) → nous', a: ['serons'], e: 'Être au futur : je serai, nous serons.' },
    { t: 'fill', s: 'Les deux amies sont ___ en haut de la tour.', c: ['arrivées', 'arrivé', 'arriver'], a: 0, z: 'Auxiliaire être : accorde avec le sujet « les deux amies ».', e: '« les deux amies » : féminin pluriel, donc arrivées.' }
  ],
  calc: {
    gen: [['wordsM'], ['div1', 3], ['decCompare']],
    probs: [
      { t: 'num', q: 'Le beffroi compte <b>248 marches</b>. Sarah les monte, puis les redescend. Combien de marches au total ?', a: 496, chk: '248*2', z: 'Elle monte et redescend : deux fois les marches.', e: '248 × 2 = 496 marches.' },
      { t: 'num', q: 'La cloche sonne <b>12 coups</b> à midi et <b>12 coups</b> à minuit. Combien de coups pour ces deux heures-là en <b>une semaine</b> ?', a: 168, chk: '24*7', z: 'Combien de coups par jour ? Puis combien de jours dans une semaine ?', e: '12 + 12 = 24 coups par jour, et 24 × 7 = 168 coups.' }
    ]
  },
  lect: {
    title: 'Le sommet du beffroi',
    s: ['L\'escalier en colimaçon semblait ne jamais finir, mais Sarah compta chaque marche sans se plaindre.', 'Tout en haut, sous l\'énorme cloche, elle trouva une petite porte avec une serrure rouillée.', 'La clé du cabinet de curiosités tourna sans effort.', 'Dans la pièce, il n\'y avait qu\'un coffret de bois sombre, posé sur un pupitre de musique.', 'À l\'intérieur reposait un médaillon noir, avec un mot : « Pour celle qui a eu la patience de tout découvrir. »', 'Sarah l\'accrocha à son cou et, pour la première fois depuis longtemps, elle sourit. Un tout petit peu.'],
    qs: [
      { q: 'Comment Sarah monte-t-elle l\'escalier ?', c: ['En comptant chaque marche sans se plaindre', 'En courant', 'En se plaignant à chaque marche', 'En chantant'], a: 0, r: [0], e: 'Elle compte chaque marche, sans se plaindre.' },
      { q: 'Quelle clé ouvre la petite porte ?', c: ['La clé du cabinet de curiosités', 'Une clé en or', 'La clé de la bibliothèque', 'Aucune : la porte est ouverte'], a: 0, r: [2], e: 'La clé rouillée du cabinet de curiosités. Le mystère est résolu.' },
      { q: 'Sur quoi est posé le coffret ?', c: ['Sur un pupitre de musique', 'Sur la cloche', 'Sur un piano', 'Par terre'], a: 0, r: [3], e: 'Sur un pupitre de musique.' },
      { q: 'Que nous apprend la dernière phrase sur Sarah ?', c: ['Elle sourit rarement, mais là elle est contente', 'Elle est très triste', 'Elle a peur du médaillon', 'Elle rit tout le temps'], a: 0, r: [5], e: '« Pour la première fois depuis longtemps » : elle sourit rarement. « Un tout petit peu » : c\'est déjà beaucoup pour elle.' }
    ]
  }
}
]};
