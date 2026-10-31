/* Dictée à choix : la première phrase, dite à voix haute, est la bonne. Les trois autres se prononcent pareil. */
function DC(say, w1, w2, w3, z, e) { return { t: 'dchoix', say: say, c: [say, w1, w2, w3], a: 0, z: z, e: e }; }
var CFG = {
  id: 'elena3', name: 'Elena', level: 'CM1', noEclair: true,
  title: "Le Livre de l'Harmonie",
  tagline: "Le chant du grand concert s'est envolé page par page. Écho le répète, Gribouille le copie de travers, et toi seule sais l'écrire.",
  homeIcon: '📖', revIcon: '🖋️', collTitle: 'Les pages retrouvées',
  comp: { name: 'Écho', icon: '🌬️' },
  sections: ['dict', 'gram'],
  icons: { dict: '👂', gram: '✏️', points: '🪶' },
  sec: { dict: 'Dictée', gram: 'Grammaire' },
  showExp: ['dict', 'gram'],
  siblings: [
    { href: 'elena.html', key: 'revision-elena-v1', icon: '🏰', label: 'Retour au Royaume des Fées' },
    { href: 'elena-harmonie.html', key: 'revision-elena2-v1', icon: '🧜‍♀️', label: "Retour à L'Harmonie des Fées et des Sirènes" }
  ],
  parentsText: "Une mission par jour, 15 minutes environ. Dictée : le jeu lit une phrase deux fois et Elena choisit, parmi quatre phrases qui se prononcent pareil, la seule bien écrite. Puis 6 questions de grammaire du programme de CM1. Le bouton « Pour un grand-parent » affiche la phrase si la voix de l'appareil ne fonctionne pas : il suffit alors de la lire à voix haute. Ce jeu est indépendant des deux autres : sa progression est enregistrée à part.",
  ranks: [{ min: 0, name: 'Petite plume' }, { min: 3, name: 'Apprentie scribe' }, { min: 6, name: "Scribe de l'Harmonie" }, { min: 10, name: 'Grande Scribe' }],
  mapX: [130, 270, 195, 110, 255, 285, 165, 110, 245, 200],
  deco: [[335, 1100, '📜', 26], [50, 1010, '🪶', 24], [355, 940, '🎻', 24], [40, 860, '🐚', 24], [345, 760, '🌈', 30], [55, 690, '💎', 24], [360, 600, '🍄', 26], [45, 520, '🏛️', 24], [355, 420, '⭐', 24], [40, 330, '✨', 24], [350, 230, '🐙', 26], [60, 140, '🌙', 26], [330, 60, '📖', 28], [80, 40, '✨', 22]],
  particles: ['🪶', '✨', '📜', '⭐', '💧'],
  sounds: { type: 'sine', ok: [659, 831, 1109], ok2: [554, 659], wrong: [294, 233], win: [440, 554, 659, 880, 1109] },
  lines: {
    hello: ['Coucou Elena ! Coucou Elena ! Oh pardon, je répète toujours tout deux fois.', 'Bonjour ! Bonjour ! Une page nous attend.', "Te revoilà ! Te revoilà ! Gribouille a encore renversé son encre."],
    idle: ['Écoute bien, écoute bien.', 'Lis chaque phrase jusqu\'au bout.', 'Tu peux réécouter autant de fois que tu veux.', 'Cherche le petit mot qui change tout.', 'Gribouille te regarde avec ses grands yeux.'],
    sec: { gram: 'Maintenant la grammaire ! Une phrase bien construite ne s\'envole plus.' },
    ok: ['Bravo ! Bravo !', 'Parfait ! Parfait !', 'Cette phrase est sauvée !', 'Exactement ! ✨', 'Pétale applaudit !', 'Quelle belle plume !'],
    ok2: ['Bien rattrapé !', 'Tu as trouvé ! Bravo de ne pas avoir abandonné.', 'Voilà ! Deuxième essai réussi.'],
    wrong1: ['Regarde la partie colorée.', 'Oups, Gribouille est passé par là !', 'Presque ! Écoute encore une fois.'],
    wrong2: ['Pas grave ! Regarde bien la bonne phrase.', 'On apprend en se trompant.', 'Celle-ci ira dans ton encrier à revanches.'],
    combo: ['Série de 5 ! Série de 5 ! 🔥', 'Ta plume vole toute seule !', 'Incroyable ! Même Gribouille applaudit avec ses huit bras !'],
    end3: ['Trois étoiles ! Trois étoiles ! La page est parfaite ! 👑', 'Trois étoiles ! Gribouille n\'en revient pas !'],
    end2: ['Deux étoiles, très beau travail !', 'Deux belles étoiles ! Encore un effort pour la troisième.'],
    end1: ['Page retrouvée ! La prochaine fois, vise plus d\'étoiles ✨', 'Bravo d\'être allée jusqu\'au bout ! Les revanches t\'aideront.'],
    final: "📖 Le Livre de l'Harmonie est complet ! Gribouille a écrit le dernier mot tout seul, sans une seule faute. Elena signe la dernière page : elle est maintenant la Grande Scribe, et le chant ne se perdra plus jamais.",
    allDone: "📖 Les dix pages sont retrouvées ! Rejoue pour décrocher toutes les étoiles, ou prends tes revanches.",
    revIntro: 'Les phrases ratées sont restées dans l\'encrier. Réussis-les du premier coup pour les libérer !',
    revEmpty: 'L\'encrier est vide : tout est réussi ! ✨',
    record: '🏆 Nouveau record !'
  }
};

var DATA = { days: [
/* ---------------- JOUR 1 ---------------- */
{
  place: 'Le Rivage violet', icon: '🌊', reward: { icon: '📜', name: 'La Page du vent' },
  focus: 'Dictée : a / à, et / est · Grammaire : le sujet et le verbe',
  intro: "Le grand concert est fini, mais personne n'avait écrit le chant ! Pétale, Lila et Maëlle commencent le Livre de l'Harmonie quand une tempête arrache les pages. Sur le rivage, une toute petite voix répète : « Une page, une page... » C'est Écho.",
  parts: [
    { dom: 'dict', qs: [
      DC('Le vent a emporté les pages.', 'Le vent à emporté les pages.', 'Le vent a emporter les pages.', 'Le vent a emporté les page.', 'Remplace par « avait » : le vent avait emporté. Ça marche ?', '« a » sans accent, car on peut dire « avait ». Ici on écrit « emporté », comme « vendu ». « les pages » prend un s.'),
      DC('Maëlle est sur la plage.', 'Maëlle et sur la plage.', 'Maëlle est sûr la plage.', 'Maëlle est sur la plages.', 'Peut-on dire « était » ?', '« est » = « était ». « sur la plage » ne prend pas d\'accent : « sûr » veut dire « certain ».'),
      DC('Pétale a une plume et un livre.', 'Pétale à une plume et un livre.', 'Pétale a une plume est un livre.', 'Pétale a une plume et un livres.', '« et » peut se remplacer par « et puis ».', 'Pétale « avait » une plume : « a ». Une plume « et puis » un livre : « et ».'),
      DC("Lila va à l'école des fées.", "Lila va a l'école des fées.", "Lila vas à l'école des fées.", "Lila va à l'école des fée.", 'Après « va », dirait-on « avait » ?', '« à » prend un accent ici. Avec « elle » ou « Lila », on écrit « va » sans s.'),
      DC('La page est belle et douce.', 'La page et belle et douce.', 'La page est belle est douce.', 'La page est bel et douce.', 'Le premier mot peut devenir « était ». Le second devient « et puis ».', 'La page « était » belle : « est ». Belle « et puis » douce : « et ».'),
      DC('Elena a un crayon à la main.', 'Elena à un crayon à la main.', 'Elena a un crayon a la main.', 'Elena a un crayons à la main.', 'Il y a deux petits mots qui se prononcent pareil. Teste « avait » sur chacun.', 'Elena « avait » un crayon : « a ». On ne dit pas « avait la main » : « à ».')
    ] },
    { dom: 'gram', qs: [
      { t: 'qcm', q: 'Quel est le <b>verbe</b> dans : « Écho répète la phrase. » ?', c: ['répète', 'Écho', 'phrase', 'la'], a: 0, z: 'Le verbe change quand on change le temps : hier, il...', e: '« répète » est le verbe : hier, il répétait ; demain, il répétera.' },
      { t: 'qcm', q: 'Quel est le <b>sujet</b> dans : « Le vent emporte les pages. » ?', c: ['Le vent', 'emporte', 'les pages', 'pages'], a: 0, z: 'Demande : qui est-ce qui emporte ?', e: 'Qui est-ce qui emporte ? C\'est le vent : « Le vent » est le sujet.' },
      { t: 'qcm', q: 'Attention, piège ! Quel est le sujet dans : « Dans le jardin dorment les lutins. » ?', c: ['les lutins', 'le jardin', 'dorment', 'Dans'], a: 0, z: 'Qui est-ce qui dort ?', e: 'Le sujet est parfois après le verbe : ce sont les lutins qui dorment.' },
      { t: 'fill', s: 'Elena ___ une nouvelle page.', c: ['a', 'à'], a: 0, z: 'Remplace par « avait ».', e: 'Elena « avait » une nouvelle page : « a » sans accent.' },
      { t: 'fill', s: 'Le livre ___ ouvert.', c: ['est', 'et'], a: 0, z: 'Remplace par « était ».', e: 'Le livre « était » ouvert : « est ».' },
      { t: 'type', q: 'Trouve le <b>verbe</b> et écris-le.', s: 'Maëlle nage vite.', pre: '→', a: ['nage'], z: 'Quel mot change si tu dis « hier » ?', e: 'Hier, Maëlle nageait : le verbe est « nage ».' }
    ] }
  ]
},
/* ---------------- JOUR 2 ---------------- */
{
  place: 'Le Jardin des Pétales', icon: '🌸', reward: { icon: '🌸', name: 'La Page des fleurs' },
  focus: "Dictée : son / sont, on / ont · Grammaire : l'accord sujet-verbe",
  intro: "Une page s'est accrochée à une rose. Elena la décroche, et un petit bras noir sort du buisson. C'est Gribouille, un bébé pieuvre tout couvert d'encre, qui recopie les phrases à sa façon. Il a trois essais sur quatre de travers.",
  parts: [
    { dom: 'dict', qs: [
      DC('Les pages sont dans son sac.', 'Les pages son dans son sac.', 'Les pages sont dans sont sac.', 'Les page sont dans son sac.', '« sont » peut se remplacer par « étaient ».', 'Les pages « étaient » : « sont ». Son sac = le sac de quelqu\'un : « son ».'),
      DC('On cherche son livre.', 'Ont cherche son livre.', 'On cherche sont livre.', 'On cherches son livre.', '« on » se remplace par « il ».', '« Il » cherche : « on ». Avec « on », le verbe s\'écrit comme avec « il » : cherche.'),
      DC('Les fées ont perdu leur plume.', 'Les fées on perdu leur plume.', 'Les fées ont perdus leur plume.', 'Les fée ont perdu leur plume.', '« ont » se remplace par « avaient ».', 'Les fées « avaient » perdu : « ont ». Après « ont », « perdu » ne prend pas de s.'),
      DC('Elles sont contentes.', 'Elles son contentes.', 'Elle sont contentes.', 'Elles sont contente.', 'Elles sont plusieurs : regarde tous les mots.', 'Elles « étaient » : « sont ». Comme elles sont plusieurs, « Elles » et « contentes » prennent un s.'),
      DC('On a vu son ami.', 'Ont a vu son ami.', 'On a vu sont ami.', 'On à vu son ami.', 'Teste « il » pour le premier mot, « avait » pour le deuxième.', '« Il » a vu : « on ». Il « avait » vu : « a ». L\'ami de quelqu\'un : « son ».'),
      DC('Les lutins ont mangé leur pain.', 'Les lutins on mangé leur pain.', 'Les lutins ont manger leur pain.', 'Les lutin ont mangé leur pain.', 'Après « ont », remplace par « vendu » pour entendre la fin du verbe.', 'Ils « avaient » mangé : « ont ». On dit « ils ont vendu », donc on écrit « mangé » avec é.')
    ] },
    { dom: 'gram', qs: [
      { t: 'fill', s: 'Les fées ___ dans le jardin.', c: ['chantent', 'chante', 'chantes'], a: 0, z: 'Le sujet est au pluriel.', e: 'Sujet au pluriel, verbe en -ent : elles chantent.' },
      { t: 'fill', s: 'Le vent ___ très fort.', c: ['souffle', 'soufflent', 'souffles'], a: 0, z: 'Le vent : combien y en a-t-il ?', e: 'Sujet au singulier, verbe en -e : il souffle.' },
      { t: 'fill', s: 'Pétale et Lila ___ ensemble.', c: ['jouent', 'joue', 'joues'], a: 0, z: 'Pétale et Lila, c\'est « elles ».', e: 'Deux sujets font un pluriel : elles jouent.' },
      { t: 'fill', s: 'Tu ___ ton livre.', c: ['cherches', 'cherche', 'cherchent'], a: 0, z: 'Avec « tu », le verbe prend un s.', e: 'Avec « tu », le verbe finit par -s : tu cherches.' },
      { t: 'type', q: 'Écris le verbe au présent.', pre: 'Les lutins (porter) →', post: 'les pages.', a: ['portent'], z: 'Les lutins, c\'est « ils ».', e: 'Ils portent : la fin -ent ne s\'entend pas.' },
      { t: 'type', q: 'Écris le verbe au présent.', pre: 'On (regarder) →', post: 'la mer.', a: ['regarde'], z: '« On » fonctionne comme « il ».', e: 'On regarde, comme il regarde.' }
    ] }
  ]
},
/* ---------------- JOUR 3 ---------------- */
{
  place: 'La Forêt des Violons', icon: '🎻', reward: { icon: '🎼', name: 'La Page des arbres' },
  focus: 'Dictée : ces / ses, ce / se · Grammaire : le groupe nominal',
  intro: "Dans la Forêt des Violons, les arbres chantent une phrase du Livre, mais personne ne sait l'écrire. Gribouille a déjà essayé, et il y a de l'encre sur toutes les feuilles.",
  parts: [
    { dom: 'dict', qs: [
      DC('Pétale ouvre ses ailes.', 'Pétale ouvrent ses ailes.', 'Pétale ouvre ses aile.', 'Pétale ouvres ses ailes.', 'Pétale est seule, mais elle a plusieurs ailes.', 'Pétale est seule : ouvre. Ses ailes sont à elle : « ses » (les siennes), avec un s à ailes.'),
      DC('Regarde ces arbres-là !', 'Regarde ses arbres-là !', 'Regarde ces arbre-là !', 'Regardes ces arbres-là !', 'On montre les arbres avec le doigt.', 'On montre : « ces » arbres. Pour un ordre, un verbe en -er ne prend pas de s : regarde.'),
      DC('Ce violon chante tout seul.', 'Se violon chante tout seul.', 'Ce violon chantent tout seul.', 'Ce violon chante tous seul.', 'Avant un nom, on écrit « ce » pour montrer.', '« ce » est suivi d\'un nom : ce violon. « se » va devant un verbe.'),
      DC('Le lutin se cache.', 'Le lutin ce cache.', 'Le lutin se caches.', 'Le lutins se cache.', 'Devant un verbe, c\'est « se ». Essaie : je me cache, il...', 'Je me cache, il se cache : « se » devant un verbe.'),
      DC('Lila se lève tôt.', 'Lila ce lève tôt.', 'Lila se lève tot.', 'Lila se lèves tôt.', 'Je me lève, elle...', 'Je me lève, elle se lève. « tôt » prend un accent circonflexe.'),
      DC('Ce matin, ces fées chantent.', 'Se matin, ces fées chantent.', 'Ce matin, ces fée chantent.', 'Ce matin, ces fées chante.', 'Il y a deux noms après deux petits mots. Regarde qui fait l\'action.', '« Ce » devant le nom matin. « ces fées » au pluriel, donc « chantent ».')
    ] },
    { dom: 'gram', qs: [
      { t: 'qcm', q: 'Quel est le <b>groupe nominal</b> dans : « La petite fée danse. » ?', c: ['La petite fée', 'danse', 'petite', 'fée danse'], a: 0, z: 'Un groupe nominal contient un nom et les mots qui l\'accompagnent.', e: '« La petite fée » : un déterminant, un adjectif et un nom.' },
      { t: 'qcm', q: 'Quel est le <b>nom</b> dans : « une grande plume bleue » ?', c: ['plume', 'grande', 'bleue', 'une'], a: 0, z: 'C\'est le mot qui désigne la chose.', e: '« plume » est le nom. « grande » et « bleue » le décrivent.' },
      { t: 'qcm', q: 'Quel groupe nominal est au <b>féminin pluriel</b> ?', c: ['de belles fleurs', 'un beau livre', 'une belle fleur', 'de beaux livres'], a: 0, z: 'Féminin : une fleur. Pluriel : plusieurs.', e: 'Fleurs est féminin, et il y en a plusieurs.' },
      { t: 'fill', s: 'une ___ fée', c: ['petite', 'petit', 'petits'], a: 0, z: 'On dit « une » fée : c\'est féminin.', e: 'L\'adjectif s\'accorde avec le nom : une petite fée.' },
      { t: 'fill', s: 'Il cherche ___ robes bleues là-bas.', c: ['ces', 'ce', 'se'], a: 0, z: 'Le nom est au pluriel.', e: 'Devant un nom pluriel, on écrit « ces ».' },
      { t: 'type', q: 'Mets au <b>pluriel</b>.', pre: 'la belle page → les', a: ['belles pages'], z: 'Le nom et l\'adjectif changent tous les deux.', e: 'Les belles pages : un s à chaque mot.' }
    ] }
  ]
},
/* ---------------- JOUR 4 ---------------- */
{
  place: 'Le Lagon des Sirènes', icon: '🐚', reward: { icon: '🐚', name: 'La Page de nacre' },
  focus: 'Dictée : les pluriels en -x et -aux · Grammaire : déterminant, nom, adjectif',
  intro: "Maëlle a trouvé une page au fond du lagon. Pinçou la serre dans ses pinces et refuse de la donner à Gribouille, qui pleure de l'encre. Écho dit que Gribouille ne veut pas tricher : il ne sait simplement pas encore écrire.",
  parts: [
    { dom: 'dict', qs: [
      DC("Les bateaux sont sur l'eau.", "Les bateau sont sur l'eau.", "Les bateaus sont sur l'eau.", "Les bateaux son sur l'eau.", 'Les mots en -eau font leur pluriel en x.', 'Un bateau, des bateaux : les mots en -eau prennent un x.'),
      DC('Les chevaux courent vite.', 'Les chevaus courent vite.', 'Les chevaux cours vite.', 'Les chevaux courent vites.', 'Regarde le pluriel, puis le verbe.', 'Un cheval, des chevaux : -al devient -aux. « vite » ne change jamais.'),
      DC('Les journaux sont sur la table.', 'Les journeaux sont sur la table.', 'Les journaus sont sur la table.', 'Les journaux son sur la table.', 'Un journal, des...', 'Un journal, des journaux : -al devient -aux, sans e.'),
      DC('Mes cheveux sont bleus.', 'Mes cheveus sont bleus.', 'Mes cheveux sont bleu.', 'Mes cheveu sont bleus.', 'Les mots en -eu prennent souvent un x.', 'Un cheveu, des cheveux. « bleu » est un adjectif : il prend un s, comme bleus.'),
      DC('Les bijoux brillent dans la nuit.', 'Les bijous brillent dans la nuit.', 'Les bijoux brille dans la nuit.', 'Les bijoux brillent dans la nui.', 'Il y a sept mots en -ou qui prennent un x, comme bijou et caillou.', 'Bijou, caillou, chou, genou, hibou, joujou, pou : pluriel en x.'),
      DC('Les cailloux sont gris.', 'Les caillous sont gris.', 'Les caillou sont gris.', 'Les cailloux sont gri.', 'C\'est l\'un des sept mots en -ou avec un x.', 'Des cailloux, avec un x. « gris » garde toujours son s.')
    ] },
    { dom: 'gram', qs: [
      { t: 'qcm', q: 'Dans « le gentil lutin », quelle est la nature du mot <b>gentil</b> ?', c: ['un adjectif', 'un nom', 'un verbe', 'un déterminant'], a: 0, z: 'Il décrit le lutin.', e: '« gentil » décrit le nom : c\'est un adjectif.' },
      { t: 'qcm', q: 'Dans « cette page », quelle est la nature du mot <b>cette</b> ?', c: ['un déterminant', 'un adjectif', 'un nom', 'un verbe'], a: 0, z: 'Il se place avant un nom, comme « la » ou « une ».', e: '« cette » est un déterminant, comme le, la, un, mon.' },
      { t: 'qcm', q: 'Lequel de ces mots est un <b>nom</b> ?', c: ['océan', 'chanter', 'joli', 'vite'], a: 0, z: 'On peut mettre « un » ou « une » devant.', e: 'On dit « un océan » : c\'est un nom.' },
      { t: 'type', q: 'Écris au <b>pluriel</b>.', pre: 'un cheval → des', a: ['chevaux'], z: '-al devient -aux.', e: 'Un cheval, des chevaux.' },
      { t: 'type', q: 'Écris au <b>pluriel</b>.', pre: 'un genou → des', a: ['genoux'], z: 'C\'est l\'un des sept mots en -ou avec un x.', e: 'Un genou, des genoux.' },
      { t: 'type', q: 'Écris au <b>pluriel</b>.', pre: 'un château → des', a: ['châteaux'], z: 'Les mots en -eau prennent un x. Garde l\'accent.', e: 'Un château, des châteaux.' }
    ] }
  ]
},
/* ---------------- JOUR 5 ---------------- */
{
  place: 'Le Pont Arc-en-ciel', icon: '🌈', reward: { icon: '🌈', name: 'La Page des couleurs' },
  focus: "Dictée : l'accord de l'adjectif · Grammaire : le présent des verbes en -er et -ir",
  intro: "Gribouille s'assied à côté d'Elena sur le Pont Arc-en-ciel. Pour la première fois, il demande : « Tu m'apprends ? » Sa phrase est pleine de couleurs mal accordées. La leçon peut commencer.",
  parts: [
    { dom: 'dict', qs: [
      DC('Les fleurs sont jolies.', 'Les fleurs sont jolis.', 'Les fleurs sont jolie.', 'Les fleur sont jolies.', 'Fleur est féminin et pluriel.', 'Une fleur jolie, des fleurs jolies : féminin (e) et pluriel (s).'),
      DC('Ma robe bleue est neuve.', 'Ma robe bleu est neuve.', 'Ma robe bleue est neuves.', 'Ma robes bleue est neuve.', 'La robe est féminine, même si le e ne s\'entend pas.', 'Une robe, féminin : bleue. La robe « était » neuve : « est ».'),
      DC('Ces petites fées sont gaies.', 'Ces petite fées sont gaies.', 'Ces petites fées sont gais.', 'Ces petites fée sont gaies.', 'Toute la phrase est au féminin pluriel.', 'Chaque mot prend la marque du féminin pluriel : petites, fées, gaies.'),
      DC('Les arbres sont grands et verts.', 'Les arbres sont grand et verts.', 'Les arbres sont grands et vert.', 'Les arbre sont grands et verts.', 'Arbre est masculin et pluriel.', 'Des arbres grands et verts : un s à chaque mot.'),
      DC('Une belle journée commence.', 'Une bel journée commence.', 'Une belle journé commence.', 'Une belle journée commencent.', 'Il n\'y a qu\'une journée, et le mot est féminin.', 'Une journée, féminin : belle, et journée s\'écrit -ée.'),
      DC('Les nuits sont noires et froides.', 'Les nuits sont noirs et froides.', 'Les nuits sont noires et froide.', 'Les nuit sont noires et froides.', 'Nuit est féminin : ce sont des adjectifs féminins pluriels.', 'Des nuits noires et froides : féminin pluriel partout.')
    ] },
    { dom: 'gram', qs: [
      { t: 'fill', s: 'Nous ___ le chant.', c: ['chantons', 'chantont', 'chantez'], a: 0, z: 'Avec « nous », le verbe finit par -ons.', e: 'Nous chantons : terminaison -ons.' },
      { t: 'fill', s: 'Je ___ ma page.', c: ['finis', 'finit', 'fini'], a: 0, z: 'Avec « je », un verbe comme finir prend un s.', e: 'Je finis, tu finis, il finit.' },
      { t: 'fill', s: 'Les fées ___ une plume.', c: ['choisissent', 'choisisent', 'choisis'], a: 0, z: 'Au pluriel, on ajoute -issent.', e: 'Ils finissent, elles choisissent : -issent, avec deux s.' },
      { t: 'fill', s: 'Nous ___ du pain.', c: ['mangeons', 'mangons', 'mangeont'], a: 0, z: 'Il faut garder le son « j » devant -ons.', e: 'Nous mangeons : on garde le e pour garder le son « j ».' },
      { t: 'type', q: 'Écris le verbe au présent.', pre: 'Vous (grandir) →', post: 'vite.', a: ['grandissez'], z: 'Vous finissez, vous...', e: 'Vous grandissez, avec -issez.' },
      { t: 'type', q: 'Écris le verbe au présent.', pre: 'Elles (finir) →', post: 'la page.', a: ['finissent'], z: 'Pluriel : -issent.', e: 'Elles finissent.' }
    ] }
  ]
},
/* ---------------- JOUR 6 ---------------- */
{
  place: 'La Grotte de Cristal', icon: '💎', reward: { icon: '💎', name: 'La Page de cristal' },
  focus: 'Dictée : ou / où, la / là · Grammaire : le présent de être, avoir, aller, faire, dire, vouloir',
  intro: "Dans la Grotte de Cristal, chaque mot rebondit sur les murs. Écho est chez lui ! Il entend tout deux fois, et même quatre. Une page brille derrière la petite porte, mais il faut savoir où chercher.",
  parts: [
    { dom: 'dict', qs: [
      DC('Où est ma plume ?', 'Ou est ma plume ?', 'Où et ma plume ?', 'Où est ma plumes ?', 'Ici, le mot parle d\'un lieu.', '« où » avec accent parle d\'un lieu. « ou » sans accent veut dire « ou bien ».'),
      DC('Tu veux du thé ou du lait ?', 'Tu veux du thé où du lait ?', 'Tu veut du thé ou du lait ?', 'Tu veux du thé ou du lai ?', 'Peut-on dire « ou bien » ?', 'Du thé « ou bien » du lait : « ou » sans accent. Avec « tu » : veux.'),
      DC('La grotte est là.', 'Là grotte est là.', 'La grotte est la.', 'La grotte et là.', 'Le dernier mot indique un lieu : ici.', '« La » devant un nom. « là » avec accent veut dire « à cet endroit ».'),
      DC('Écho va là où tu vas.', 'Écho va la où tu vas.', 'Écho va là ou tu vas.', 'Écho vas là où tu vas.', 'Les deux petits mots indiquent des lieux.', '« là » et « où » parlent d\'un lieu : ils prennent chacun un accent.'),
      DC('La page est là-bas.', 'Là page est là-bas.', 'La page est la-bas.', 'La page et là-bas.', '« là-bas » parle d\'un endroit.', '« là-bas » prend toujours un accent sur le a.'),
      DC('Je ne sais pas où aller.', 'Je ne sais pas ou aller.', 'Je ne sait pas où aller.', 'Je ne sais pas où allé.', 'On cherche un endroit. Puis regarde « je ».', 'Un lieu : « où ». Avec « je » : sais. On dirait « où vendre » : infinitif, en -er.')
    ] },
    { dom: 'gram', qs: [
      { t: 'fill', s: 'Nous ___ dans la grotte.', c: ['allons', 'vont', 'allez'], a: 0, z: 'Je vais, nous...', e: 'Je vais, tu vas, il va, nous allons, vous allez, ils vont.' },
      { t: 'fill', s: 'Ils ___ un grand bruit.', c: ['font', 'faisent', 'fait'], a: 0, z: 'Le verbe faire est irrégulier.', e: 'Je fais, nous faisons, vous faites, ils font.' },
      { t: 'fill', s: 'Vous ___ la vérité.', c: ['dites', 'disez', 'dise'], a: 0, z: 'Il ressemble à « vous faites ».', e: 'Vous dites et vous faites : deux formes à retenir.' },
      { t: 'fill', s: 'Tu ___ entrer.', c: ['peux', 'peut', 'peu'], a: 0, z: 'Avec « tu », pouvoir finit par x.', e: 'Je peux, tu peux, il peut.' },
      { t: 'type', q: 'Écris le verbe au présent.', pre: 'Je (vouloir) →', post: 'cette page.', a: ['veux'], z: 'Comme « je peux ».', e: 'Je veux, tu veux, il veut.' },
      { t: 'type', q: 'Écris le verbe au présent.', pre: 'Elles (être) →', post: 'prêtes.', a: ['sont'], z: 'Le même mot que « les pages ... dans son sac ».', e: 'Je suis, tu es, il est, nous sommes, vous êtes, elles sont.' }
    ] }
  ]
},
/* ---------------- JOUR 7 ---------------- */
{
  place: 'Le Village des Lutins', icon: '🍄', reward: { icon: '🍄', name: 'La Page des lutins' },
  focus: "Dictée : les lettres muettes en fin de mot · Grammaire : l'imparfait",
  intro: "Au marché des lutins, une page est à vendre pour trois glands. Le vieux lutin raconte comment c'était autrefois, et il oublie la fin de tous ses mots. Gribouille cherche les lettres qui ne s'entendent pas.",
  parts: [
    { dom: 'dict', qs: [
      DC('Le chat dort sur le toit.', 'Le cha dort sur le toit.', 'Le chat dors sur le toit.', 'Le chat dort sur le toi.', 'Pense à « chatte » et « toiture ».', 'Chat, comme chatte. Toit, comme toiture : la lettre muette s\'entend dans un mot de la même famille.'),
      DC('Il fait froid ce soir.', 'Il fait froit ce soir.', 'Il fais froid ce soir.', 'Il fait froid se soir.', 'Froid, comme froide.', 'Au féminin on entend le d : froide, donc froid.'),
      DC('Le renard est petit.', 'Le renart est petit.', 'Le renard est petis.', 'Le renard et petit.', 'Pense à « renarde » et « petite ».', 'Renarde, donc renard. Petite, donc petit.'),
      DC('Mon lit est trop grand.', 'Mon li est trop grand.', 'Mon lit est trop grant.', 'Mon lit est trot grand.', 'Pense à « literie » et « grande ».', 'Literie, donc lit. Grande, donc grand. « trop » finit par p.'),
      DC('Le vent souffle fort.', 'Le vant souffle fort.', 'Le vent souffle for.', 'Le vent souffles fort.', 'Pense à « forte » et à « venteux ».', 'Venteux, donc vent. Forte, donc fort.'),
      DC('Un long chemin part du pont.', 'Un lon chemin part du pont.', 'Un long chemin par du pont.', 'Un long chemin part du pond.', 'Pense à « longue », « partir » et « ponton ».', 'Longue, donc long. Il part, de partir. Ponton, donc pont.')
    ] },
    { dom: 'gram', qs: [
      { t: 'qcm', q: 'À quel temps est le verbe dans : « Lila jouait du violon. » ?', c: ['l\'imparfait', 'le présent', 'le futur', 'le passé composé'], a: 0, z: 'On pourrait commencer par « autrefois ».', e: 'La fin -ait montre l\'imparfait.' },
      { t: 'fill', s: 'Autrefois, je ___ tout le temps.', c: ['chantais', 'chantait', 'chantaient'], a: 0, z: 'Avec « je », l\'imparfait finit par -ais.', e: 'Je chantais, tu chantais, il chantait.' },
      { t: 'fill', s: 'Autrefois, nous ___ au bord de l\'eau.', c: ['jouions', 'jouons', 'jouait'], a: 0, z: 'À l\'imparfait, « nous » finit par -ions.', e: 'Nous jouions : on garde le ou, puis -ions.' },
      { t: 'fill', s: 'Les lutins ___ au marché.', c: ['dansaient', 'dansait', 'dansais'], a: 0, z: 'Au pluriel, -aient.', e: 'Ils dansaient : la fin est -aient.' },
      { t: 'fill', s: 'Tu ___ toujours ta page.', c: ['finissais', 'finissait', 'finissaient'], a: 0, z: 'Avec « tu », -ais.', e: 'Tu finissais, comme je finissais.' },
      { t: 'type', q: 'Écris le verbe à l\'<b>imparfait</b>.', pre: 'Il (marcher) →', post: 'longtemps.', a: ['marchait'], z: 'Avec « il », la fin est -ait.', e: 'Il marchait.' }
    ] }
  ]
},
/* ---------------- JOUR 8 ---------------- */
{
  place: 'La Cité engloutie', icon: '🏛️', reward: { icon: '🗝️', name: 'La Page engloutie' },
  focus: "Dictée : m devant m, b, p · c et ç · Grammaire : l'imparfait de être, avoir, aller, faire",
  intro: "La page la plus ancienne dort dans la Cité engloutie. Pour la première fois, Gribouille écrit une phrase presque juste, et il rougit de fierté, ce qui est assez rare pour une pieuvre noire.",
  parts: [
    { dom: 'dict', qs: [
      DC('La lampe éclaire la chambre.', 'La lanpe éclaire la chambre.', 'La lampe éclaire la chanbre.', 'La lampe éclairent la chambre.', 'Quelle lettre avant m, b et p ?', 'Devant m, b, p, on écrit m : lampe, chambre.'),
      DC('Le garçon commence à lire.', 'Le garcon commence à lire.', 'Le garçon comence à lire.', 'Le garçon commençe à lire.', 'Le c fait le son « s » devant a, o, u ? Il lui faut une cédille.', 'Garçon : ç devant o. Commence : pas de cédille devant e, et deux m.'),
      DC('Nous avançons dans la forêt.', 'Nous avancons dans la forêt.', 'Nous avançon dans la forêt.', 'Nous avançons dans la foret.', 'Avancer devient « avançons » avec une cédille.', 'Devant o, le c prend une cédille pour garder le son « s ». « forêt » a un accent.'),
      DC('Elle emporte un timbre.', 'Elle enporte un timbre.', 'Elle emporte un tinbre.', 'Elle emportes un timbre.', 'Regarde les lettres avant p et b.', 'Devant p et b, m : emporte, timbre.'),
      DC('Cette pomme est immense.', 'Sette pomme est immense.', 'Cette pome est immense.', 'Cette pomme est imense.', 'Il y a deux mots avec deux m.', 'Pomme et immense s\'écrivent avec deux m. « Cette » montre quelque chose.'),
      DC('Le maçon construit un pont.', 'Le macon construit un pont.', 'Le maçon construis un pont.', 'Le maçon construit un pond.', 'Le c devant o a besoin d\'aide.', 'Maçon avec ç devant o. Avec « il » : construit, et ponton donne pont.')
    ] },
    { dom: 'gram', qs: [
      { t: 'fill', s: 'J\'___ petite autrefois.', c: ['étais', 'était', 'étaient'], a: 0, z: 'Avec « je », -ais.', e: 'J\'étais, tu étais, il était.' },
      { t: 'fill', s: 'Autrefois, nous ___ une grande maison.', c: ['avions', 'avons', 'avaient'], a: 0, z: 'À l\'imparfait, « nous » finit par -ions.', e: 'Nous avions, à l\'imparfait.' },
      { t: 'fill', s: 'Les sirènes ___ à la cité.', c: ['allaient', 'allait', 'allais'], a: 0, z: 'Au pluriel, -aient.', e: 'Elles allaient.' },
      { t: 'fill', s: 'Tu ___ de la musique.', c: ['faisais', 'faisait', 'faisaient'], a: 0, z: 'Avec « tu », -ais.', e: 'Tu faisais, avec ai au début et ais à la fin.' },
      { t: 'fill', s: 'Vous ___ très courageuses.', c: ['étiez', 'étaient', 'était'], a: 0, z: 'Avec « vous », -iez.', e: 'Vous étiez, à l\'imparfait.' },
      { t: 'type', q: 'Écris le verbe à l\'<b>imparfait</b>.', pre: 'Elle (avoir) →', post: 'une plume.', a: ['avait'], z: 'Avec « elle », -ait.', e: 'Elle avait.' }
    ] }
  ]
},
/* ---------------- JOUR 9 ---------------- */
{
  place: 'La Tour des Étoiles', icon: '⭐', reward: { icon: '⭐', name: 'La Page des étoiles' },
  focus: 'Dictée : le son é, écrit -é, -er ou -ez · Grammaire : les compléments',
  intro: "Il ne manque plus qu'une page, tout en haut de la Tour des Étoiles. Écho souffle : « Demain, demain ! » Gribouille monte les marches avec ses huit bras et une plume dans chaque ventouse.",
  parts: [
    { dom: 'dict', qs: [
      DC('Écho veut chanter.', 'Écho veut chanté.', 'Écho veut chantez.', 'Écho veux chanter.', 'Remplace par « vendre » : Écho veut vendre.', 'Après « veut », le second verbe reste à l\'infinitif, en -er.'),
      DC('Lila a fermé le livre.', 'Lila a fermer le livre.', 'Lila a fermez le livre.', 'Lila à fermé le livre.', 'Remplace par « vendu » : Lila a vendu.', 'Après « a », on peut dire « vendu » : on écrit -é.'),
      DC('Vous parlez trop fort.', 'Vous parler trop fort.', 'Vous parlé trop fort.', 'Vous parlez trop for.', 'Avec « vous », la fin est...', 'Vous parlez : avec « vous », le verbe finit par -ez.'),
      DC('Il faut écouter les vagues de la mer.', 'Il faut écouté les vagues de la mer.', 'Il faut écoutez les vagues de la mer.', 'Il faut écouter les vagues de la mère.', 'Remplace par « vendre ». Puis pense aux vagues.', 'Il faut vendre : infinitif, -er. « la mer » avec les vagues, « la mère » est la maman.'),
      DC('Elena a trouvé le chemin.', 'Elena a trouver le chemin.', 'Elena a trouvez le chemin.', 'Elena à trouvé le chemin.', 'Elena a vendu : quelle fin ?', 'Après « a », on peut dire « vendu » : on écrit « trouvé ».'),
      DC('Allez chercher la clé !', 'Allé chercher la clé !', 'Allez cherché la clé !', 'Allez chercher la clés !', 'On donne un ordre à « vous ». Le deuxième verbe se remplace par « vendre ».', 'Allez, avec « vous ». Chercher à l\'infinitif : on peut dire « allez vendre ».')
    ] },
    { dom: 'gram', qs: [
      { t: 'qcm', q: 'Dans « Le soir, les fées dansent. », que nous dit <b>Le soir</b> ?', c: ['le temps : quand ?', 'le lieu : où ?', 'la manière : comment ?', 'le sujet : qui ?'], a: 0, z: 'Pose la question : quand les fées dansent-elles ?', e: 'Quand ? Le soir : c\'est un complément de temps.' },
      { t: 'qcm', q: 'Dans « Maëlle nage dans le lagon. », que nous dit <b>dans le lagon</b> ?', c: ['le lieu : où ?', 'le temps : quand ?', 'la manière : comment ?', 'le verbe'], a: 0, z: 'Où nage-t-elle ?', e: 'Où ? Dans le lagon : c\'est un complément de lieu.' },
      { t: 'qcm', q: 'Dans « Écho parle doucement. », que nous dit <b>doucement</b> ?', c: ['la manière : comment ?', 'le lieu : où ?', 'le temps : quand ?', 'le sujet : qui ?'], a: 0, z: 'Comment parle-t-il ?', e: 'Comment ? Doucement : c\'est un complément de manière.' },
      { t: 'qcm', q: 'Quel est le <b>complément du verbe</b> dans : « Elena lit un livre. » ?', c: ['un livre', 'Elena', 'lit', 'Elena lit'], a: 0, z: 'Elena lit quoi ?', e: 'Elena lit quoi ? Un livre. On ne peut pas l\'enlever ni le déplacer sans changer le sens.' },
      { t: 'qcm', q: 'Quel groupe peut-on <b>enlever ou déplacer</b> dans : « Ce matin, Lila prend son violon. » ?', c: ['Ce matin', 'Lila', 'prend', 'son violon'], a: 0, z: 'Lila prend son violon ce matin : qu\'est-ce qui a bougé ?', e: '« Ce matin » est un complément de phrase : on peut l\'enlever ou le déplacer.' },
      { t: 'qcm', q: 'Quel est le complément de lieu dans : « Les pages volent au-dessus de la mer. » ?', c: ['au-dessus de la mer', 'Les pages', 'volent', 'la mer volent'], a: 0, z: 'Où volent-elles ?', e: 'Où volent les pages ? Au-dessus de la mer.' }
    ] }
  ]
},
/* ---------------- JOUR 10 ---------------- */
{
  place: "Le Palais de l'Harmonie", icon: '📖', reward: { icon: '🖋️', name: "La Plume de l'Harmonie" },
  focus: "Grand défi : révision de toutes les difficultés et de toute la grammaire",
  intro: "Toutes les pages sont réunies au Palais de l'Harmonie. Pétale, Lila, Maëlle et Pinçou attendent. Écho dit la dernière phrase deux fois, et Gribouille te tend sa plume. Il reste à écrire la fin.",
  parts: [
    { dom: 'dict', qs: [
      DC('Les fées ont retrouvé leur livre.', 'Les fées on retrouvé leur livre.', 'Les fées ont retrouver leur livre.', 'Les fées ont retrouvé leur livres.', 'Teste « avaient », puis « vendu ».', 'Elles « avaient » retrouvé : « ont ». Elles ont vendu : retrouvé.'),
      DC('Elena est là, et elle écrit.', 'Elena et là, et elle écrit.', 'Elena est la, et elle écrit.', 'Elena est là, et elle écris.', 'Teste « était », puis pense à « ici ».', 'Elena « était » : est. Ici : là, avec un accent. Avec « elle » : écrit.'),
      DC('Ces belles pages sont pour nous.', 'Ces belle pages sont pour nous.', 'Ces belles pages son pour nous.', 'Ces belles page sont pour nous.', 'Deux petits pièges : l\'accord et « sont ».', 'Des pages, féminin pluriel : belles. Elles « étaient » : sont.'),
      DC('Où sont les chevaux ?', 'Ou sont les chevaux ?', 'Où son les chevaux ?', 'Où sont les chevaus ?', 'Le premier mot parle d\'un lieu.', 'Où, avec accent pour un lieu. Ils « étaient » : sont. -al devient -aux.'),
      DC('Le garçon voulait chanter.', 'Le garcon voulait chanter.', 'Le garçon voulais chanter.', 'Le garçon voulait chanté.', 'Il y a une cédille, un imparfait et un infinitif.', 'Garçon avec ç. Il voulait, en -ait. Il voulait vendre : chanter.'),
      DC('Gribouille a écrit le dernier mot.', 'Gribouille à écrit le dernier mot.', 'Gribouille a écrit le dernier mo.', 'Gribouille a écrit le derniers mot.', 'Teste « avait ». Pense à « motus ».', 'Il « avait » écrit : a. Motus, donc mot. Un seul mot, donc « dernier » sans s.')
    ] },
    { dom: 'gram', qs: [
      { t: 'qcm', q: 'Révision : quel est le <b>sujet</b> dans : « Sur la table dort Gribouille. » ?', c: ['Gribouille', 'la table', 'dort', 'Sur'], a: 0, z: 'Qui est-ce qui dort ?', e: 'Le sujet est après le verbe : c\'est Gribouille qui dort.' },
      { t: 'fill', s: 'Révision : les petits lutins ___ gentils.', c: ['sont', 'son', 'ont'], a: 0, z: 'Remplace par « étaient ».', e: 'Ils « étaient » gentils : sont.' },
      { t: 'type', q: 'Révision : écris au <b>pluriel</b>.', pre: 'un journal → des', a: ['journaux'], z: '-al devient -aux.', e: 'Un journal, des journaux.' },
      { t: 'type', q: 'Révision : écris le verbe à l\'<b>imparfait</b>.', pre: 'Nous (finir) →', post: 'le livre.', a: ['finissions'], z: 'Nous finissons, à l\'imparfait : -ions.', e: 'Nous finissions : le radical finiss-, puis -ions.' },
      { t: 'fill', s: 'Révision : vous ___ le chant ensemble.', c: ['chantez', 'chanter', 'chanté'], a: 0, z: 'Avec « vous », -ez.', e: 'Vous chantez, au présent.' },
      { t: 'qcm', q: 'Révision : dans « Demain, Elena lira le livre. », que nous dit <b>Demain</b> ?', c: ['le temps : quand ?', 'le lieu : où ?', 'la manière : comment ?', 'le sujet : qui ?'], a: 0, z: 'Quand lira-t-elle ?', e: 'Quand ? Demain : c\'est un complément de temps.' }
    ] }
  ]
}
]};
