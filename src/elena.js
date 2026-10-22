var CFG = {
  id: 'elena', name: 'Elena', level: 'CM1',
  title: 'Le Royaume des Fées',
  tagline: 'Dix missions magiques pour devenir la gardienne du royaume',
  homeIcon: '🏰', revIcon: '🪄', collTitle: 'Le coffre à trésors',
  comp: { name: 'Pétale', icon: '🧚' },
  icons: { ortho: '✏️', calc: '🔢', lect: '📚', points: '💖' },
  sec: { ortho: 'Orthographe', calc: 'Calcul', lect: 'Lecture' },
  ranks: [{ min: 0, name: 'Apprentie fée' }, { min: 3, name: 'Fée des fleurs' }, { min: 6, name: 'Fée des étoiles' }, { min: 10, name: 'Gardienne du royaume' }],
  mapX: [120, 270, 200, 115, 250, 285, 160, 110, 245, 200],
  deco: [[330, 1100, '🌷', 30], [50, 1010, '🍄', 26], [355, 940, '🦋', 28], [40, 860, '🌸', 26], [345, 760, '☁️', 40], [55, 690, '🐚', 26], [360, 600, '🌈', 34], [45, 520, '💎', 24], [355, 420, '🍄', 26], [40, 330, '⭐', 26], [350, 230, '✨', 30], [60, 140, '🌙', 30], [330, 60, '👑', 30], [80, 40, '✨', 22]],
  particles: ['✨', '💖', '⭐', '🌸', '🦋', '💫'],
  sounds: { type: 'sine', ok: [784, 988, 1319], ok2: [659, 784], wrong: [330, 262], win: [523, 659, 784, 1047, 1319] },
  lines: {
    hello: ['Coucou Elena ! Prête pour une mission magique ? ✨', 'Bonjour princesse ! Le royaume compte sur toi aujourd\'hui 🌸', 'C\'est parti ! Je saupoudre un peu de poussière de fée sur ton crayon ✨'],
    idle: ['Prends ton temps 🌸', 'Tu peux y arriver !', 'Lis bien la consigne, c\'est la moitié du travail.', 'Je crois en toi ✨', 'Respire, comme avant un plongeon.'],
    sec: { calc: 'Place aux nombres ! Tu peux prendre un brouillon pour poser les opérations.', lect: 'Lis tout le texte une première fois avant de répondre 📚' },
    ok: ['Bravo ! ✨', 'Magique !', 'Super, tu brilles !', 'Parfait, comme une vraie fée !', 'Oui ! Ma baguette scintille !', 'Exactement ! 💖', 'Quelle championne !'],
    ok2: ['Bien rattrapé ! 🌸', 'Tu as trouvé ! Bravo de ne pas avoir abandonné.', 'Voilà ! Deuxième essai réussi.'],
    wrong1: ['Presque ! Regarde bien la zone qui brille.', 'Oups, petite erreur. Je t\'ai montré où chercher.', 'Essaie encore : l\'erreur se cache dans la partie colorée.'],
    wrong2: ['Pas grave ! Voici la réponse, retiens-la bien.', 'On apprend en se trompant. Regarde la bonne réponse 🌸', 'Ce n\'est pas grave, cette question reviendra dans tes Revanches.'],
    combo: ['Série magique de 5 ! 🔥', 'Tu es en feu, princesse !', 'Incroyable série ! Les fées applaudissent !'],
    end3: ['Trois étoiles ! Tu es une vraie fée savante ! 👑', 'Trois étoiles ! Tout le royaume danse pour toi !'],
    end2: ['Deux étoiles, très beau travail ! 💖', 'Deux belles étoiles ! Encore un petit effort et c\'est la troisième.'],
    end1: ['Mission réussie ! La prochaine fois, vise plus d\'étoiles ✨', 'Bravo d\'être allée jusqu\'au bout ! Les Revanches t\'aideront.'],
    final: '👑 Tu as traversé les dix contrées ! Elena devient officiellement Gardienne du Royaume des Fées. Montre vite ta couronne à tes grands-parents !',
    allDone: '👑 Les dix missions sont accomplies ! Rejoue pour décrocher toutes les étoiles, ou prends tes revanches.',
    revIntro: 'Les questions ratées t\'attendent ici. Réussis-les du premier coup pour les faire disparaître !',
    revEmpty: 'Aucune revanche à prendre : tout est réussi ! ✨',
    record: '🏆 Nouveau record ! Même la Reine des fées n\'est pas aussi rapide.'
  }
};

var DATA = { days: [
/* ---------------- JOUR 1 ---------------- */
{
  place: 'Jardin des Pétales', icon: '🌸', reward: { icon: '🌹', name: 'La Rose enchantée' },
  focus: 'a / à, et / est, être et avoir au présent · nombres jusqu\'à 99 999 · addition',
  intro: 'Les fleurs du jardin se sont endormies. Pour les réveiller, il faut résoudre les énigmes de Pétale !',
  ortho: [
    { t: 'fill', s: 'Elena ___ un violon tout neuf.', c: ['a', 'à'], a: 0, z: 'Remplace par « avait » : « Elena avait un violon ». Est-ce que ça marche ?', e: 'On peut dire « Elena avait un violon » : c\'est le verbe avoir, donc « a » sans accent.' },
    { t: 'fill', s: 'Le mercredi, elle va ___ la piscine.', c: ['à', 'a'], a: 0, z: 'Remplace par « avait » : « elle va avait la piscine » ? Ça ne veut rien dire...', e: 'On ne peut pas dire « avait » : c\'est le petit mot « à », avec un accent.' },
    { t: 'fill', s: 'La petite fée ___ très gentille.', c: ['est', 'et'], a: 0, z: 'Remplace par « était » : « la petite fée était très gentille ».', e: 'On peut dire « était » : c\'est le verbe être, donc « est ».' },
    { t: 'fill', s: 'Elena danse ___ chante avec ses amies.', c: ['et', 'est'], a: 0, z: 'Remplace par « et puis » : « Elena danse et puis chante ».', e: 'On peut dire « et puis » : c\'est le mot qui relie, « et ».' },
    { t: 'type', q: 'Conjugue le verbe <b>être</b> au présent.', pre: 'Nous', post: 'à la piscine.', a: ['sommes'], e: 'Être au présent : je suis, tu es, il est, nous sommes, vous êtes, ils sont.' },
    { t: 'type', q: 'Conjugue le verbe <b>avoir</b> au présent.', pre: 'Tu', post: 'un tutu rose.', a: ['as'], e: 'Avoir au présent : j\'ai, tu as, il a, nous avons, vous avez, ils ont.' }
  ],
  calc: {
    gen: [['place', 5], ['words', 5], ['add', 4, 3]],
    probs: [
      { t: 'num', q: 'Elena nage <b>4 longueurs</b> de <b>25 m</b>. Combien de mètres nage-t-elle en tout ?', a: 100, unit: 'm', chk: '4*25', z: 'Une longueur fait 25 m. Combien font 4 fois 25 ?', e: '4 × 25 = 100. Elena nage 100 m.' },
      { t: 'num', q: 'La Reine des fées a <b>1 250</b> pétales magiques. Elle en donne <b>380</b> aux lutins. Combien lui en reste-t-il ?', a: 870, chk: '1250-380', z: 'Elle en donne : il faut enlever, donc faire une soustraction.', e: '1 250 − 380 = 870. Il lui reste 870 pétales.' }
    ]
  },
  lect: {
    title: 'Le violon de la fée',
    s: ['Dans le Jardin des Pétales vivait une petite fée nommée Lila.', 'Chaque matin, elle jouait du violon pour réveiller les fleurs.', 'Mais un jour, une corde de son violon se cassa.', 'Les fleurs restèrent fermées et le jardin devint tout gris.', 'Lila partit alors chercher un fil d\'or chez l\'araignée Mirabelle, qui tissait les plus beaux fils du royaume.', 'Avec ce fil, elle répara son violon et joua sa plus belle mélodie.', 'Aussitôt, les fleurs s\'ouvrirent en riant.'],
    qs: [
      { q: 'Pourquoi Lila joue-t-elle du violon chaque matin ?', c: ['Pour réveiller les fleurs', 'Pour faire danser les lutins', 'Pour apprendre une chanson', 'Pour appeler la Reine'], a: 0, r: [1], e: 'Le texte dit qu\'elle joue « pour réveiller les fleurs ».' },
      { q: 'Que se passe-t-il quand la corde casse ?', c: ['Le jardin devient tout gris', 'Lila pleure toute la journée', 'Les lutins se fâchent', 'Il se met à pleuvoir'], a: 0, r: [3], e: 'Les fleurs restent fermées et le jardin devient gris.' },
      { q: 'Pourquoi Lila va-t-elle voir l\'araignée Mirabelle ?', c: ['Parce qu\'elle fabrique de très beaux fils', 'Parce qu\'elle joue aussi du violon', 'Parce que c\'est sa sœur', 'Parce qu\'elle a peur d\'elle'], a: 0, r: [4], e: 'Mirabelle tisse les plus beaux fils du royaume : il faut un fil pour remplacer la corde.' }
    ]
  }
},
/* ---------------- JOUR 2 ---------------- */
{
  place: 'Prairie des Papillons', icon: '🦋', reward: { icon: '🦋', name: 'Le Papillon de lumière' },
  focus: 'son / sont, on / ont, accord sujet-verbe · comparer des nombres · soustraction · tables 2 à 5',
  intro: 'Aujourd\'hui, c\'est la grande course des papillons. Pétale a besoin de toi pour compter les points !',
  ortho: [
    { t: 'fill', s: 'Elena range ___ tutu dans son sac.', c: ['son', 'sont'], a: 0, z: 'Remplace par « mon » : « Elena range mon tutu ». Ou par « étaient » ?', e: 'On peut dire « mon tutu » : c\'est le petit mot devant le nom, « son ».' },
    { t: 'fill', s: 'Les fées ___ cachées dans les fleurs.', c: ['sont', 'son'], a: 0, z: 'Remplace par « étaient » : « les fées étaient cachées ».', e: 'On peut dire « étaient » : c\'est le verbe être, « sont ».' },
    { t: 'fill', s: 'Les lutins ___ perdu leur chapeau.', c: ['ont', 'on'], a: 0, z: 'Remplace par « avaient » : « les lutins avaient perdu ».', e: 'On peut dire « avaient » : c\'est le verbe avoir, « ont ».' },
    { t: 'fill', s: 'Le mercredi, ___ va à la piscine.', c: ['on', 'ont'], a: 0, z: 'Remplace par « il » : « le mercredi, il va à la piscine ».', e: 'On peut dire « il » : c\'est le pronom « on ».' },
    { t: 'fill', s: 'Les danseuses ___ sur la scène.', c: ['tournent', 'tourne', 'tournes'], a: 0, z: 'Qui tourne ? « Les danseuses » : le sujet est au pluriel.', e: 'Le sujet « les danseuses » est au pluriel (elles) : le verbe se termine par -ent.' },
    { t: 'fill', s: 'Tu ___ ton violon tous les jours.', c: ['accordes', 'accorde', 'accordent'], a: 0, z: 'Regarde le sujet : « tu ». Quelle lettre met-on à la fin du verbe avec « tu » ?', e: 'Avec « tu », le verbe se termine toujours par un -s : tu accordes.' }
  ],
  calc: {
    gen: [['compare', 5], ['sub', 4, 3], ['table', [2, 3, 4, 5]]],
    probs: [
      { t: 'num', q: 'Le cours de violon d\'Elena dure <b>45 minutes</b>. Elle a déjà joué <b>28 minutes</b>. Combien de minutes reste-t-il ?', a: 17, unit: 'min', chk: '45-28', z: 'Il faut chercher ce qui reste : c\'est une soustraction.', e: '45 − 28 = 17. Il reste 17 minutes.' },
      { t: 'num', q: 'Dans la prairie, il y a <b>6 groupes</b> de <b>8 papillons</b>. Combien de papillons en tout ?', a: 48, chk: '6*8', z: '6 groupes de 8, c\'est 6 fois 8.', e: '6 × 8 = 48 papillons.' }
    ]
  },
  lect: {
    title: 'La course des papillons',
    s: ['Ce matin, la Prairie des Papillons organise une grande course.', 'Bleuet, le plus petit des papillons, a très envie de gagner.', 'Ses amis se moquent de lui : « Tes ailes sont bien trop petites ! »', 'Au départ, Bleuet est le dernier.', 'Mais le vent se lève et pousse les grands papillons dans les ronces.', 'Bleuet, lui, vole tout près de l\'herbe, là où le vent ne souffle pas.', 'Il passe la ligne d\'arrivée en premier, sous les applaudissements des fées.'],
    qs: [
      { q: 'Pourquoi les amis de Bleuet se moquent-ils de lui ?', c: ['Ses ailes sont petites', 'Il vole trop lentement le matin', 'Il ne sait pas compter', 'Il arrive toujours en retard'], a: 0, r: [2], e: 'Ils lui disent que ses ailes sont trop petites.' },
      { q: 'Que fait le vent pendant la course ?', c: ['Il pousse les grands papillons dans les ronces', 'Il fait tomber la pluie', 'Il aide Bleuet à voler plus haut', 'Il arrête la course'], a: 0, r: [4], e: 'Le vent pousse les grands papillons dans les ronces.' },
      { q: 'Pourquoi Bleuet gagne-t-il la course ?', c: ['Il vole près de l\'herbe, à l\'abri du vent', 'Il est plus rapide que tous les autres', 'Les fées le portent', 'Les autres papillons s\'endorment'], a: 0, r: [5], e: 'En volant près de l\'herbe, il est protégé du vent. Être petit est devenu un avantage !' }
    ]
  }
},
/* ---------------- JOUR 3 ---------------- */
{
  place: 'Salle de bal du Palais', icon: '🩰', reward: { icon: '🩰', name: 'Les Chaussons de bal' },
  focus: 'pluriel des noms (-s, -x, -al/-aux, -eau, -ou) · nombres jusqu\'à 999 999 · tables de 6 et 7',
  intro: 'Le grand bal commence ce soir ! Mais les invitations sont pleines de fautes. À toi de jouer.',
  ortho: [
    { t: 'type', q: 'Écris au pluriel.', pre: 'un château → des', a: ['châteaux'], e: 'Les noms en -eau prennent un x au pluriel : des châteaux, des gâteaux.' },
    { t: 'type', q: 'Écris au pluriel.', pre: 'un cheval → des', a: ['chevaux'], e: 'La plupart des noms en -al font leur pluriel en -aux : des chevaux, des journaux.' },
    { t: 'type', q: 'Écris au pluriel.', pre: 'un bijou → des', a: ['bijoux'], e: 'Bijou fait partie des 7 noms en -ou qui prennent un x : bijou, caillou, chou, genou, hibou, joujou, pou.' },
    { t: 'type', q: 'Écris au pluriel.', pre: 'un trou → des', a: ['trous'], e: 'La plupart des noms en -ou prennent un s : des trous, des clous... sauf les 7 exceptions (bijou, caillou, chou, genou, hibou, joujou, pou).' },
    { t: 'type', q: 'Écris au pluriel.', pre: 'une fée → des', a: ['fées'], e: 'En général, on ajoute un s au pluriel : des fées.' },
    { t: 'fill', s: 'Les longs ___ de la Reine brillent au soleil.', c: ['cheveux', 'cheveus', 'cheveu'], a: 0, z: 'Les noms en -eu prennent-ils un s ou un x au pluriel ?', e: 'Les noms en -eu prennent un x au pluriel : des cheveux, des jeux.' }
  ],
  calc: {
    gen: [['place', 6], ['words', 6], ['table', [6, 7]]],
    probs: [
      { t: 'num', q: 'Pour le bal, <b>7 fées</b> préparent chacune <b>9 colliers</b>. Combien de colliers en tout ?', a: 63, chk: '7*9', z: '7 fées qui font 9 colliers chacune : 7 fois 9.', e: '7 × 9 = 63 colliers.' },
      { t: 'num', q: 'La tour du palais mesure <b>1 340 m</b>. La tour des étoiles mesure <b>875 m</b>. Quelle est la différence de hauteur ?', a: 465, unit: 'm', chk: '1340-875', z: 'Une différence, c\'est une soustraction : le plus grand moins le plus petit.', e: '1 340 − 875 = 465 m.' }
    ]
  },
  lect: {
    title: 'Le bal du palais',
    s: ['Ce soir, la Salle de bal du Palais brille de mille bougies.', 'Elena, la petite danseuse, enfile ses chaussons roses.', 'Elle a un peu peur, car c\'est la première fois qu\'elle danse devant la Reine.', 'Son professeur lui murmure : « Respire, souris et écoute la musique. »', 'Dès les premières notes, Elena oublie sa peur et tourne comme une plume.', 'À la fin, la Reine se lève et applaudit la première.'],
    qs: [
      { q: 'Pourquoi Elena a-t-elle un peu peur ?', c: ['C\'est la première fois qu\'elle danse devant la Reine', 'Elle a perdu ses chaussons', 'La salle est trop sombre', 'Elle ne connaît pas la musique'], a: 0, r: [2], e: 'Le texte dit : « c\'est la première fois qu\'elle danse devant la Reine ».' },
      { q: 'Quel conseil lui donne son professeur ?', c: ['Respirer, sourire et écouter la musique', 'Danser plus vite que les autres', 'Fermer les yeux', 'Saluer la Reine avant de danser'], a: 0, r: [3], e: 'Il lui murmure : respire, souris et écoute la musique.' },
      { q: 'Que veut dire « tourner comme une plume » ?', c: ['Tourner avec beaucoup de légèreté', 'Tourner en tombant', 'Tourner très lentement', 'Tourner en écrivant'], a: 0, r: [4], e: 'Une plume est très légère : Elena danse avec légèreté.' }
    ]
  }
},
/* ---------------- JOUR 4 ---------------- */
{
  place: 'Lagon des Sirènes', icon: '🐚', reward: { icon: '🐚', name: 'Le Coquillage de sirène' },
  focus: 'présent des verbes en -er (nager, commencer...) · × 10, 100, 1 000 · addition de 3 nombres · tables de 8 et 9',
  intro: 'Plouf ! Les sirènes du lagon ont perdu un collier. Nage avec elles pour le retrouver.',
  ortho: [
    { t: 'type', q: 'Conjugue au présent.', pre: 'nous (nager) → nous', a: ['nageons'], e: 'Avec les verbes en -ger, on garde le e devant -ons : nous nageons, nous mangeons.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'je (danser) → je', a: ['danse'], e: 'Verbes en -er avec « je » : -e. Je danse.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'vous (jouer) → vous', a: ['jouez'], e: 'Avec « vous », la terminaison est -ez : vous jouez.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'nous (commencer) → nous', a: ['commençons'], e: 'Devant -ons, le c prend une cédille pour garder le son [s] : nous commençons.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'elles (chanter) → elles', a: ['chantent'], e: 'Avec « ils » ou « elles », la terminaison est -ent : elles chantent.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'tu (plonger) → tu', a: ['plonges'], e: 'Avec « tu », la terminaison est -es : tu plonges.' }
  ],
  calc: {
    gen: [['x10'], ['add3', 3], ['table', [8, 9]]],
    probs: [
      { t: 'num', q: 'Une sirène ramasse <b>125 perles</b> par jour. Combien en ramasse-t-elle en <b>4 jours</b> ?', a: 500, chk: '125*4', z: '125 perles, 4 fois de suite.', e: '125 × 4 = 500 perles.' },
      { t: 'num', q: 'À l\'entraînement, Elena nage <b>50 m</b> en crawl, puis <b>25 m</b> en dos, puis <b>50 m</b> en brasse. Combien de mètres a-t-elle nagé ?', a: 125, unit: 'm', chk: '50+25+50', z: 'Il faut tout rassembler : une addition.', e: '50 + 25 + 50 = 125 m.' }
    ]
  },
  lect: {
    title: 'La sirène et le collier',
    s: ['Au fond du Lagon des Sirènes vivait Maëlle, une sirène qui nageait plus vite que les dauphins.', 'Un matin, elle découvrit que son collier de perles avait disparu.', 'Elle chercha sous les rochers, dans les algues et même dans le coffre d\'un vieux bateau.', 'Soudain, elle aperçut un reflet brillant près d\'un crabe qui avait l\'air très fier.', 'Le crabe portait le collier autour de sa pince !', 'Maëlle éclata de rire et lui proposa un échange : le collier contre un joli coquillage.', 'Depuis ce jour, le crabe et la sirène sont les meilleurs amis du lagon.'],
    qs: [
      { q: 'Où Maëlle cherche-t-elle son collier ?', c: ['Sous les rochers, dans les algues et dans un vieux bateau', 'Sur la plage', 'Dans le château de la Reine', 'Dans la grotte des lutins'], a: 0, r: [2], e: 'Elle cherche sous les rochers, dans les algues et dans le coffre d\'un vieux bateau.' },
      { q: 'Qui avait pris le collier ?', c: ['Un crabe', 'Un dauphin', 'Une autre sirène', 'Un lutin'], a: 0, r: [3, 4], e: 'C\'est le crabe : il le portait autour de sa pince.' },
      { q: 'Comment Maëlle récupère-t-elle son collier ?', c: ['Elle propose un échange au crabe', 'Elle se fâche contre le crabe', 'Elle appelle les dauphins', 'Elle le reprend pendant qu\'il dort'], a: 0, r: [5], e: 'Elle échange le collier contre un joli coquillage.' }
    ]
  }
},
/* ---------------- JOUR 5 ---------------- */
{
  place: 'Forêt des Violons', icon: '🎻', reward: { icon: '🎻', name: 'Le Violon d\'argent' },
  focus: 'm devant m, b, p · c / ç · g / ge · soustraction · doubles et moitiés',
  intro: 'Dans cette forêt, les arbres chantent. Mais l\'un d\'eux est devenu muet... Mène l\'enquête !',
  ortho: [
    { t: 'fill', s: 'La fée se cache dans l\'___bre du grand chêne.', c: ['om', 'on'], a: 0, z: 'Regarde la lettre juste après le trou : un b. Quelle règle s\'applique devant m, b, p ?', e: 'Devant m, b, p, on écrit m au lieu de n : une ombre.' },
    { t: 'fill', s: 'Le prince porte un ___teau bleu.', c: ['man', 'mam'], a: 0, z: 'La lettre suivante est un t. La règle du m ne marche que devant m, b, p.', e: 'Devant t, on garde le n : un manteau.' },
    { t: 'fill', s: 'Le lutin joue du ___bour.', c: ['tam', 'tan'], a: 0, z: 'Regarde la lettre juste après : un b.', e: 'Devant b, on écrit m : un tambour.' },
    { t: 'fill', s: 'Le gar___on nage très vite.', c: ['ç', 'c'], a: 0, z: 'Quelle lettre vient après ? Un o. Comment garder le son [s] devant o ?', e: 'Devant a, o, u, on ajoute une cédille pour faire le son [s] : un garçon.' },
    { t: 'fill', s: 'Hier, le lutin ___ une pomme.', c: ['mangeait', 'mangait'], a: 0, z: 'Lis « mangait » à voix haute : on entend [g] comme dans « gare ». Il faut le son [j].', e: 'Devant a et o, on ajoute un e pour faire le son [j] : il mangeait.' },
    { t: 'dictee', say: 'le printemps', a: ['le printemps'], e: 'printemps : « im » s\'écrit avec un m devant le p, et il y a un s muet à la fin.' }
  ],
  calc: {
    gen: [['sub', 5, 4], ['double'], ['half']],
    probs: [
      { t: 'num', q: 'Elena a <b>36 €</b> dans sa tirelire. Elle achète des cordes de violon à <b>18 €</b>. Combien lui reste-t-il ?', a: 18, unit: '€', chk: '36-18', z: 'Elle dépense de l\'argent : il faut enlever.', e: '36 − 18 = 18 €. (18 est aussi la moitié de 36 !)' },
      { t: 'num', q: 'Un violon coûte <b>240 €</b>. Son étui coûte <b>la moitié</b> du prix du violon. Combien coûte l\'étui ?', a: 120, unit: '€', chk: '240/2', z: 'La moitié, c\'est partager en 2 parts égales.', e: 'La moitié de 240, c\'est 120 €.' }
    ]
  },
  lect: {
    title: 'La forêt qui chantait',
    s: ['Dans la Forêt des Violons, les arbres ne parlent pas : ils chantent.', 'Quand le vent souffle dans leurs branches, on entend de douces mélodies.', 'Mais cet automne, un arbre restait silencieux.', 'Les écureuils découvrirent qu\'un nid de pie bouchait le creux de son tronc.', 'Ils demandèrent poliment à la pie de déménager dans un autre arbre.', 'Le soir même, l\'arbre chanta à nouveau, plus fort que tous les autres, comme pour dire merci.'],
    qs: [
      { q: 'Comment les arbres de la forêt chantent-ils ?', c: ['Grâce au vent dans leurs branches', 'Grâce aux oiseaux', 'Grâce aux fées qui jouent du violon', 'Grâce à la pluie'], a: 0, r: [1], e: 'C\'est le vent qui souffle dans leurs branches.' },
      { q: 'Pourquoi un arbre ne chante-t-il plus ?', c: ['Un nid bouche le creux de son tronc', 'Il est trop vieux', 'Il a perdu ses feuilles', 'Le vent ne souffle plus'], a: 0, r: [3], e: 'Un nid de pie bouche le creux de son tronc.' },
      { q: 'Pourquoi l\'arbre chante-t-il « plus fort que tous les autres » ?', c: ['Pour remercier les écureuils', 'Parce qu\'il est en colère', 'Parce que la pie est revenue', 'Parce qu\'il y a une tempête'], a: 0, r: [5], e: 'Le texte dit « comme pour dire merci » : il remercie les écureuils qui l\'ont aidé.' }
    ]
  }
},
/* ---------------- JOUR 6 ---------------- */
{
  place: 'Pont Arc-en-ciel', icon: '🌈', reward: { icon: '🌈', name: 'L\'Éclat d\'arc-en-ciel' },
  focus: 'accord dans le groupe nominal (masculin / féminin, singulier / pluriel) · multiplication par un chiffre',
  intro: 'Le pont arc-en-ciel a perdu ses couleurs. Chaque bonne réponse en rallume une !',
  ortho: [
    { t: 'fill', s: 'Elena porte une robe ___.', c: ['violette', 'violet', 'violettes'], a: 0, z: 'Le nom « robe » est-il masculin ou féminin ? Singulier ou pluriel ?', e: '« une robe » est féminin singulier : violette.' },
    { t: 'fill', s: 'Les fées ont des ailes ___.', c: ['brillantes', 'brillant', 'brillante'], a: 0, z: 'Regarde le nom « ailes » : féminin, et combien ?', e: '« des ailes » est féminin pluriel : brillantes (e + s).' },
    { t: 'fill', s: 'Les ___ lutins dorment sous un champignon.', c: ['petits', 'petit', 'petites'], a: 0, z: '« lutins » est masculin pluriel.', e: '« les lutins » : masculin pluriel, donc petits (avec un s, sans e).' },
    { t: 'type', q: 'Accorde l\'adjectif entre parenthèses.', pre: 'des chaussons (blanc) →', a: ['blancs'], e: '« des chaussons » est masculin pluriel : blancs.' },
    { t: 'type', q: 'Accorde l\'adjectif entre parenthèses.', pre: 'une étoile (lumineux) →', a: ['lumineuse'], e: 'Les adjectifs en -eux font -euse au féminin : lumineuse.' },
    { t: 'fill', s: 'Une ___ licorne galope dans le ciel.', c: ['belle', 'beau', 'beaux'], a: 0, z: '« licorne » est un nom féminin. Quel est le féminin de « beau » ?', e: 'Le féminin de beau est belle : une belle licorne.' }
  ],
  calc: {
    gen: [['mul1', 3], ['mul1', 2], ['table', [6, 7, 8, 9]]],
    probs: [
      { t: 'num', q: 'Un arc-en-ciel a <b>7 couleurs</b>. Combien de couleurs y a-t-il dans <b>12 arcs-en-ciel</b> ?', a: 84, chk: '7*12', z: '12 fois 7 couleurs.', e: '12 × 7 = 84 couleurs.' },
      { t: 'num', q: 'Le pont arc-en-ciel mesure <b>356 m</b>. Elena le traverse <b>aller et retour</b>. Combien de mètres parcourt-elle ?', a: 712, unit: 'm', chk: '356*2', z: 'Aller et retour : on traverse le pont deux fois.', e: '356 × 2 = 712 m.' }
    ]
  },
  lect: {
    title: 'Comment naît un arc-en-ciel ?',
    s: ['Un arc-en-ciel apparaît quand le soleil brille pendant qu\'il pleut.', 'La lumière du soleil semble blanche, mais elle contient en réalité plusieurs couleurs.', 'En traversant les gouttes de pluie, la lumière se sépare et les couleurs apparaissent.', 'On voit toujours les couleurs dans le même ordre : rouge, orange, jaune, vert, bleu, indigo et violet.', 'Pour voir un arc-en-ciel, il faut avoir le soleil dans le dos.', 'Parfois, on peut même en observer deux en même temps !'],
    qs: [
      { q: 'Quand apparaît un arc-en-ciel ?', c: ['Quand le soleil brille pendant qu\'il pleut', 'Quand il fait nuit', 'Quand il neige', 'Quand il y a beaucoup de vent'], a: 0, r: [0], e: 'Il faut à la fois du soleil et de la pluie.' },
      { q: 'Quelle couleur se trouve entre le jaune et le bleu ?', c: ['Le vert', 'Le rouge', 'Le violet', 'L\'orange'], a: 0, r: [3], e: 'L\'ordre est : rouge, orange, jaune, vert, bleu, indigo, violet.' },
      { q: 'Où doit se trouver le soleil pour voir un arc-en-ciel ?', c: ['Dans ton dos', 'Devant toi', 'Juste au-dessus de ta tête', 'Caché derrière un nuage'], a: 0, r: [4], e: 'Il faut avoir le soleil dans le dos.' }
    ]
  }
},
/* ---------------- JOUR 7 ---------------- */
{
  place: 'Grotte de Cristal', icon: '💎', reward: { icon: '💎', name: 'Le Cristal magique' },
  focus: 'présent : finir, grandir, choisir, aller, faire, dire · multiplication · comparer des grands nombres',
  intro: 'Une porte minuscule se cache au fond de la grotte. Qui saura l\'ouvrir ?',
  ortho: [
    { t: 'type', q: 'Conjugue au présent.', pre: 'nous (finir) → nous', a: ['finissons'], e: 'Les verbes comme finir (2e groupe) : nous finissons, vous finissez, ils finissent.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'ils (grandir) → ils', a: ['grandissent'], e: 'Ils grandissent : on ajoute -iss- au pluriel.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'je (aller) → je', a: ['vais'], e: 'Aller au présent : je vais, tu vas, il va, nous allons, vous allez, ils vont.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'vous (faire) → vous', a: ['faites'], e: 'Attention au piège : on dit « vous faites », jamais « vous faisez ».' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'vous (dire) → vous', a: ['dites'], e: 'Encore un piège : « vous dites », comme « vous faites ».' },
    { t: 'fill', s: 'Les fées ___ leur gâteau préféré.', c: ['choisissent', 'choisisent', 'choisent'], a: 0, z: 'Choisir se conjugue comme finir : ils finissent → ils...', e: 'Comme « ils finissent » : elles choisissent, avec deux s.' }
  ],
  calc: {
    gen: [['mul1', 3], ['compare', 6], ['sub', 4, 4]],
    probs: [
      { t: 'num', q: 'Dans la grotte, il y a <b>8 coffres</b>. Chaque coffre contient <b>125 cristaux</b>. Combien de cristaux en tout ?', a: 1000, chk: '8*125', z: '8 coffres de 125 : une multiplication.', e: '8 × 125 = 1 000 cristaux.' },
      { t: 'num', q: 'Elena a <b>1 000</b> points de magie. Elle en dépense <b>235</b>, puis encore <b>150</b>. Combien lui en reste-t-il ?', a: 615, chk: '1000-235-150', z: 'Elle dépense deux fois : enlève 235, puis enlève 150.', e: '1 000 − 235 = 765, puis 765 − 150 = 615 points.' }
    ]
  },
  lect: {
    title: 'Le secret de la grotte',
    s: ['Elena et son amie Jade entrèrent dans la Grotte de Cristal avec une lanterne.', 'Les murs scintillaient de mille couleurs, comme si les étoiles s\'étaient cachées sous la terre.', 'Au fond de la grotte, elles trouvèrent une porte minuscule, pas plus haute qu\'une tasse.', 'Sur la porte, on pouvait lire : « Seuls ceux qui jouent juste peuvent entrer. »', 'Jade chanta une chanson, mais la porte resta fermée.', 'Elena prit alors son violon et joua une note parfaitement juste.', 'La porte s\'ouvrit lentement sur une pièce remplie de lucioles.'],
    qs: [
      { q: 'À quoi ressemblent les murs de la grotte ?', c: ['À des étoiles cachées sous la terre', 'À des vagues', 'À des arbres', 'À un arc-en-ciel'], a: 0, r: [1], e: 'Ils scintillent « comme si les étoiles s\'étaient cachées sous la terre ».' },
      { q: 'Quelle est la taille de la porte ?', c: ['Pas plus haute qu\'une tasse', 'Aussi haute qu\'une maison', 'De la taille d\'Elena', 'Aussi grande qu\'un violon'], a: 0, r: [2], e: 'Elle n\'est pas plus haute qu\'une tasse.' },
      { q: 'Pourquoi la porte s\'ouvre-t-elle à la fin ?', c: ['Parce qu\'Elena joue une note juste', 'Parce que Jade chante très fort', 'Parce qu\'elles ont une clé', 'Parce que les lucioles l\'ouvrent'], a: 0, r: [3, 5], e: 'La porte s\'ouvre pour ceux qui jouent juste : c\'est la note d\'Elena qui l\'ouvre.' }
    ]
  }
},
/* ---------------- JOUR 8 ---------------- */
{
  place: 'Village des Lutins', icon: '🍄', reward: { icon: '🍄', name: 'Le Champignon des lutins' },
  focus: 'féminin des noms · révision a/à, on/ont, et/est · problèmes de partage et de multiplication',
  intro: 'C\'est jour de marché chez les lutins. Ici, on paie avec des glands !',
  ortho: [
    { t: 'type', q: 'Écris au féminin.', pre: 'un danseur → une', a: ['danseuse'], e: 'Beaucoup de noms en -eur font -euse au féminin : danseuse, nageuse.' },
    { t: 'type', q: 'Écris au féminin.', pre: 'un musicien → une', a: ['musicienne'], e: 'Les noms en -ien doublent le n et prennent un e : musicienne.' },
    { t: 'type', q: 'Écris au féminin.', pre: 'un prince → une', a: ['princesse'], e: 'Le féminin de prince est princesse.' },
    { t: 'fill', s: 'Le lutin ___ un chapeau pointu.', c: ['a', 'à'], a: 0, z: 'Remplace par « avait ».', e: 'On peut dire « le lutin avait un chapeau » : a (verbe avoir).' },
    { t: 'fill', s: 'Les lutins ___ des bonnets rouges.', c: ['ont', 'on'], a: 0, z: 'Remplace par « avaient ».', e: 'On peut dire « avaient » : ont (verbe avoir).' },
    { t: 'fill', s: 'Le village ___ caché au fond de la forêt.', c: ['est', 'et'], a: 0, z: 'Remplace par « était ».', e: 'On peut dire « le village était caché » : est (verbe être).' }
  ],
  calc: {
    gen: [['place', 6], ['mul1', 3], ['add', 5, 5]],
    probs: [
      { t: 'num', q: 'Les lutins cueillent <b>48 champignons</b>. Ils les rangent dans des paniers de <b>6</b>. Combien de paniers remplissent-ils ?', a: 8, chk: '48/6', z: 'Cherche dans la table de 6 : 6 fois combien font 48 ?', e: '6 × 8 = 48, donc 8 paniers.' },
      { t: 'num', q: 'Le village compte <b>3 rues</b> de <b>24 maisons</b>. Combien de maisons en tout ?', a: 72, chk: '3*24', z: '3 fois 24.', e: '3 × 24 = 72 maisons.' }
    ]
  },
  lect: {
    title: 'Le marché des lutins',
    s: ['Tous les samedis, le Village des Lutins accueille un grand marché.', 'On y trouve des confitures de mûres, des chapeaux tricotés et des bottes en écorce.', 'Cette semaine, Elena voulait acheter un ruban doré pour ses cheveux.', 'Le marchand lui dit qu\'il coûtait trois glands.', 'Elena n\'avait que deux glands dans sa poche, alors elle proposa de jouer un air de violon pour payer le dernier.', 'Le marchand accepta avec joie, et tout le marché se mit à danser.'],
    qs: [
      { q: 'Que voulait acheter Elena ?', c: ['Un ruban doré', 'Des bottes en écorce', 'Un chapeau tricoté', 'De la confiture'], a: 0, r: [2], e: 'Elle voulait un ruban doré pour ses cheveux.' },
      { q: 'Au village des lutins, avec quoi paie-t-on ?', c: ['Avec des glands', 'Avec des pièces d\'or', 'Avec des perles', 'Avec des fleurs'], a: 0, r: [3], e: 'Le ruban coûte trois glands : on paie avec des glands.' },
      { q: 'Combien de glands manquait-il à Elena ?', c: ['Un seul', 'Deux', 'Trois', 'Aucun'], a: 0, r: [3, 4], e: 'Le ruban coûte 3 glands et elle en a 2 : il en manque 1.' }
    ]
  }
},
/* ---------------- JOUR 9 ---------------- */
{
  place: 'Tour des Étoiles', icon: '⭐', reward: { icon: '⭐', name: 'L\'Étoile filante' },
  focus: 'présent : venir, prendre, pouvoir, vouloir · nature des mots · durées · combien de fois',
  intro: 'Au sommet de la tour, on observe les étoiles filantes. Encore une marche avant le palais !',
  ortho: [
    { t: 'type', q: 'Conjugue au présent.', pre: 'je (venir) → je', a: ['viens'], e: 'Venir au présent : je viens, tu viens, il vient, nous venons, vous venez, ils viennent.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'ils (prendre) → ils', a: ['prennent'], e: 'Prendre : ils prennent, avec deux n.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'nous (pouvoir) → nous', a: ['pouvons'], e: 'Pouvoir : je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'tu (vouloir) → tu', a: ['veux'], e: 'Vouloir : je veux, tu veux (avec un x !), il veut.' },
    { t: 'qcm', q: 'Dans la phrase « La petite fée vole », quelle est la nature du mot <b>petite</b> ?', c: ['Un adjectif', 'Un nom', 'Un verbe', 'Un déterminant'], a: 0, z: 'Ce mot donne une précision sur le nom « fée » : il dit comment elle est.', e: '« petite » décrit la fée : c\'est un adjectif.' },
    { t: 'qcm', q: 'Dans la phrase « Elena joue du violon le soir », quel mot est le <b>verbe</b> ?', c: ['joue', 'violon', 'soir', 'Elena'], a: 0, z: 'Le verbe change si on dit « Hier, Elena... ».', e: 'Hier, Elena jouait : c\'est « joue » qui change, c\'est le verbe.' }
  ],
  calc: {
    gen: [['divTable'], ['x10'], ['mul1', 2]],
    probs: [
      { t: 'qcm', q: 'Le cours de violon commence à <b>14 h 30</b> et dure <b>45 minutes</b>. À quelle heure se termine-t-il ?', c: ['15 h 15', '15 h 30', '14 h 75', '15 h 45'], a: 0, z: 'Après 30 minutes, il est 15 h. Combien de minutes reste-t-il à ajouter ?', e: '14 h 30 + 30 min = 15 h, puis + 15 min = 15 h 15.' },
      { t: 'num', q: 'La Tour des Étoiles a <b>9 étages</b>. Chaque étage a <b>45 marches</b>. Combien de marches en tout ?', a: 405, chk: '9*45', z: '9 fois 45 : tu peux poser la multiplication.', e: '45 × 9 = 405 marches.' }
    ]
  },
  lect: {
    title: 'Les étoiles filantes',
    s: ['Une étoile filante n\'est pas vraiment une étoile.', 'C\'est un petit caillou venu de l\'espace, souvent plus petit qu\'un grain de sable.', 'Quand il entre dans l\'air qui entoure la Terre, il va si vite qu\'il chauffe et se met à briller.', 'On voit alors une traînée lumineuse dans le ciel pendant une ou deux secondes.', 'En été, vers le 12 août, on peut en observer beaucoup : c\'est la « nuit des étoiles filantes ».', 'Il faut alors s\'éloigner des lumières de la ville et attendre patiemment.'],
    qs: [
      { q: 'Qu\'est-ce qu\'une étoile filante ?', c: ['Un petit caillou venu de l\'espace', 'Une étoile qui tombe', 'Un avion très haut', 'Une fée qui vole'], a: 0, r: [0, 1], e: 'Ce n\'est pas une étoile : c\'est un petit caillou venu de l\'espace.' },
      { q: 'Pourquoi l\'étoile filante brille-t-elle ?', c: ['Elle va si vite qu\'elle chauffe', 'Elle reflète la lumière de la Lune', 'Elle contient de l\'électricité', 'Les fées l\'allument'], a: 0, r: [2], e: 'Elle va si vite dans l\'air qu\'elle chauffe et brille.' },
      { q: 'Pourquoi faut-il s\'éloigner des lumières de la ville ?', c: ['Pour mieux voir les étoiles filantes dans un ciel sombre', 'Pour ne pas réveiller les voisins', 'Parce que c\'est interdit en ville', 'Pour avoir moins froid'], a: 0, r: [5], e: 'Les lumières de la ville éclairent le ciel : on voit mieux les étoiles filantes dans le noir.' }
    ]
  }
},
/* ---------------- JOUR 10 ---------------- */
{
  place: 'Palais de la Reine', icon: '👑', reward: { icon: '👑', name: 'La Couronne des Étoiles' },
  focus: 'grand défi : révision de tout le programme',
  intro: 'Le grand défi final ! Réussis-le et la Reine te remettra la Couronne des Étoiles.',
  ortho: [
    { t: 'fill', s: 'Elena ___ à la piscine avec son amie.', c: ['est', 'et'], a: 0, z: 'Remplace par « était ».', e: 'Elena était à la piscine : est (verbe être).' },
    { t: 'type', q: 'Écris au pluriel.', pre: 'un journal → des', a: ['journaux'], e: '-al → -aux : des journaux.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'nous (voyager) → nous', a: ['voyageons'], e: 'Verbes en -ger : on garde le e devant -ons. Nous voyageons.' },
    { t: 'fill', s: 'Les princesses ___ invitées au bal.', c: ['sont', 'son'], a: 0, z: 'Remplace par « étaient ».', e: 'Les princesses étaient invitées : sont (verbe être).' },
    { t: 'type', q: 'Accorde l\'adjectif entre parenthèses.', pre: 'une reine (heureux) →', a: ['heureuse'], e: '-eux → -euse au féminin : heureuse.' },
    { t: 'type', q: 'Conjugue au présent.', pre: 'vous (être) → vous', a: ['êtes'], e: 'Être : vous êtes, avec un accent circonflexe.' }
  ],
  calc: {
    gen: [['words', 6], ['mul1', 3], ['sub', 5, 4]],
    probs: [
      { t: 'num', q: 'Pour le grand bal, la Reine commande <b>15 gâteaux</b> de <b>8 parts</b>. Combien de parts en tout ?', a: 120, chk: '15*8', z: '15 gâteaux de 8 parts : 15 fois 8.', e: '15 × 8 = 120 parts.' },
      { t: 'qcm', q: 'Range ces nombres <b>du plus petit au plus grand</b> : 12 450 ; 12 045 ; 12 504', c: ['12 045 < 12 450 < 12 504', '12 450 < 12 045 < 12 504', '12 504 < 12 450 < 12 045', '12 045 < 12 504 < 12 450'], a: 0, z: 'Les trois commencent par 12. Compare le chiffre des centaines.', e: 'Centaines : 0 < 4 < 5, donc 12 045 < 12 450 < 12 504.' }
    ]
  },
  lect: {
    title: 'La Couronne des Étoiles',
    s: ['Au Palais de la Reine, toutes les fées du royaume étaient réunies.', 'La Reine annonça qu\'elle remettrait la Couronne des Étoiles à celle qui avait traversé les dix contrées.', 'Une seule fée s\'avança : c\'était Elena, son violon sous le bras.', 'Elle avait dansé devant la Reine, ouvert une porte magique et même payé un marchand en musique.', 'La Reine posa la couronne sur sa tête et déclara : « Le courage et la patience sont la vraie magie. »', 'Ce soir-là, Elena joua pour tout le royaume jusqu\'au lever de la lune.'],
    qs: [
      { q: 'À qui la Reine veut-elle donner la couronne ?', c: ['À celle qui a traversé les dix contrées', 'À la meilleure danseuse', 'À la plus jeune fée', 'À celle qui chante le mieux'], a: 0, r: [1], e: 'À celle qui a traversé les dix contrées.' },
      { q: 'Selon la Reine, quelle est la vraie magie ?', c: ['Le courage et la patience', 'La baguette magique', 'La musique', 'Les étoiles'], a: 0, r: [4], e: '« Le courage et la patience sont la vraie magie. »' },
      { q: 'Quelle aventure d\'Elena n\'est PAS citée dans le texte ?', c: ['Nager avec une sirène', 'Danser devant la Reine', 'Ouvrir une porte magique', 'Payer un marchand en musique'], a: 0, r: [3], e: 'Le texte cite la danse, la porte et le marchand, mais pas la sirène.' }
    ]
  }
}
]};
