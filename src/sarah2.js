var TAB10 = [['tabT'], ['tabT'], ['tabT'], ['tabT'], ['tabT'], ['tabT'], ['tabT'], ['tabT'], ['tabT'], ['tabT']];
var CFG = {
  id: 'sarah2', name: 'Sarah', level: 'CM2',
  title: 'Le Territoire de la Meute',
  tagline: "Au-delà des grilles du manoir commence la forêt. Une meute y garde des secrets que même Nyx ignore.",
  homeIcon: '🌲', revIcon: '🪤', collTitle: 'La tanière aux trésors',
  comp: { name: 'Vesper', icon: '🐺' },
  sections: ['hist', 'geo', 'deu', 'erd', 'tab'],
  icons: { hist: '📜', geo: '🗺️', deu: '📘', erd: '🧭', tab: '⏱️', points: '🐾' },
  sec: { hist: 'Histoire', geo: 'Géographie', deu: 'Deutsch', erd: 'Erdkunde', tab: 'Tables chrono' },
  showExp: ['hist', 'geo', 'deu', 'erd'],
  timer: { start: 15, step: 1, min: 6 },
  sibling: { href: 'sarah.html', key: 'revision-sarah-v1', icon: '🦇', label: 'Retour au Manoir des Ombres' },
  parentsText: "Une mission par jour, 20 minutes environ : un texte d'histoire avec ses questions (Moyen Âge puis Première Guerre mondiale), de la géographie de la France, un texte en allemand avec un petit exercice d'écriture (niveau Klasse 3, soit deux classes en dessous de son niveau français), de la géographie de l'Allemagne en allemand, puis 10 multiplications chronométrées. Le chrono commence à 15 secondes par calcul le jour 1 et perd une seconde chaque jour, jusqu'à 6 secondes le jour 10. Ce jeu est indépendant du Manoir des Ombres : sa progression est enregistrée à part.",
  ranks: [{ min: 0, name: 'Louveteau' }, { min: 3, name: 'Éclaireuse de la meute' }, { min: 6, name: 'Gardienne du territoire' }, { min: 10, name: 'Cheffe de meute' }],
  mapX: [130, 270, 200, 115, 250, 285, 160, 115, 245, 200],
  deco: [[340, 1100, '🌲', 30], [45, 1010, '🍄', 22], [355, 930, '🌲', 26], [40, 850, '🐾', 20], [350, 760, '🌫️', 30], [50, 680, '🌲', 32], [360, 590, '🦉', 22], [40, 510, '🌿', 24], [355, 420, '🌲', 28], [45, 330, '🪨', 22], [350, 230, '🌲', 24], [60, 150, '🦇', 18], [330, 60, '🌕', 34], [90, 50, '🌲', 26]],
  particles: ['🐾', '🍃', '🌲', '✦', '🌙'],
  sounds: { type: 'triangle', ok: [392, 494, 587], ok2: [349, 440], wrong: [175, 165], win: [196, 247, 294, 392, 494] },
  lines: {
    hello: ["Tu es revenue. La meute l'avait senti avant moi.", "Le médaillon brille ce soir. Suis-moi, sans faire craquer les branches.", "Nyx m'a dit que tu étais fiable. Pour une chauve-souris, c'est un compliment énorme."],
    idle: ['Un loup ne se presse jamais. Il observe.', 'Prends ton temps. La forêt est patiente.', 'Renifle bien la question.', 'Je ne dirai rien. Les loups savent se taire.', 'Écoute le vent : il connaît peut-être la réponse.'],
    sec: { geo: 'Les loups connaissent chaque sentier. Toi, tu vas apprendre ceux de la France.', deu: 'Jetzt auf Deutsch. Meine Cousine wohnt in der Lausitz, sie spricht nur Deutsch.', erd: 'Erdkunde! Welche Wege kennen die deutschen Wölfe?', tab: 'Les tables, maintenant. Le chrono tourne : pense vite, comme un loup qui chasse.' },
    ok: ['Exact.', 'La meute approuve.', 'Juste. Vesper hoche la tête.', 'Parfait. Même le vieux loup gris est impressionné.', 'Bonne réponse. Un hurlement discret pour toi.', 'Impeccable.'],
    ok2: ['Retrouvé la piste. Ça compte.', 'Deuxième essai, mais la bonne trace.', 'Voilà. Tu as flairé l\'erreur.'],
    wrong1: ['Fausse piste. Regarde la zone indiquée.', 'Pas tout à fait. Renifle la partie marquée.', 'Presque. La bonne trace est tout près.'],
    wrong2: ['Voici la réponse. Garde-la dans ta mémoire de louve.', 'Pas grave. Même les loups se trompent de piste.', 'Celle-ci rejoint les pièges à revanches.'],
    combo: ['Série de 5. La meute hurle pour toi.', 'Tu chasses en série. Impressionnant.', 'Implacable, comme une louve en hiver.'],
    end3: ['Trois étoiles. La meute entière s\'incline.', 'Trois étoiles. Le vieux loup gris t\'a regardée dans les yeux. C\'est un honneur.'],
    end2: ['Deux étoiles. Une belle chasse.', 'Deux étoiles. La meute te fait confiance.'],
    end1: ['Mission accomplie. Demain, on chasse mieux.', 'Terminé. Les pièges à revanches t\'attendent.'],
    final: '🐺 La meute t\'entoure et hurle à la lune. Sarah devient Cheffe de meute du Territoire. Le médaillon des Ombres et le Collier de la Meute brillent ensemble.',
    allDone: '🐺 Les dix lieux du Territoire sont explorés. Rejoue pour les trois étoiles partout, ou prends tes revanches.',
    revIntro: 'Les questions ratées sont prises dans les pièges. Réussis-les du premier coup pour les libérer.',
    revEmpty: 'Les pièges sont vides. La forêt est calme.',
    record: '🏆 Nouveau record. Plus rapide qu\'un loup lancé.'
  }
};

var DATA = { days: [
/* ---------------- JOUR 1 ---------------- */
{
  place: 'La Lisière', icon: '🌲', reward: { icon: '🐾', name: "L'Empreinte de Vesper" },
  focus: "Le Moyen Âge, repères · la France et ses mers · Deutsch : Wölfe · Berlin, die Bundesländer",
  intro: "Le médaillon des Ombres s'est mis à briller. Derrière les grilles du manoir, une louve grise t'attend à la lisière de la forêt.",
  parts: [
    { dom: 'hist',
      lect: { title: 'La tour du Loup',
        s: ["Au milieu de la forêt se dressent les ruines d'une vieille tour de pierre que tout le monde appelle la tour du Loup.", "Elle a été construite vers l'an 1100, en plein Moyen Âge, par un seigneur nommé Guilhem.", "Avant elle, il y avait ici une simple tour en bois, posée sur une butte de terre.", "Le bois brûlait trop facilement : Guilhem la fit remplacer par des murs de pierre épais de deux mètres.", "Vesper raconte que ses ancêtres vivaient déjà dans cette forêt à l'époque.", "Et que la crypte du manoir est en réalité la cave de l'ancienne tour."] ,
        qs: [
          { q: 'Pourquoi le seigneur Guilhem a-t-il remplacé la tour en bois ?', c: ['Parce que le bois brûlait trop facilement', 'Parce qu\'elle était trop petite', 'Parce que les loups la grignotaient', 'Parce que le roi l\'avait ordonné'], a: 0, r: [3], e: "Le texte dit que le bois brûlait trop facilement. Les premiers châteaux étaient en bois, puis on les a reconstruits en pierre." },
          { q: 'Quel lien le texte fait-il avec le manoir ?', c: ['La crypte du manoir est la cave de l\'ancienne tour', 'Le seigneur Guilhem a construit le beffroi', 'Agathe est née dans la tour', 'Le manoir a été construit avec les pierres du pont'], a: 0, r: [5], e: "La crypte aux échos, que tu as explorée dans le manoir, serait la cave de la tour du Loup." }
        ] },
      qs: [
        { t: 'qcm', q: 'Le Moyen Âge commence vers 476. Quel événement marque sa <b>fin</b>, en 1492 ?', c: ['Christophe Colomb arrive en Amérique', 'La prise de la Bastille', 'Le couronnement de Charlemagne', 'La construction de la tour Eiffel'], a: 0, z: 'Un grand navigateur traverse l\'océan Atlantique.', e: "En 1492, Christophe Colomb arrive en Amérique : on considère que c'est la fin du Moyen Âge, qui a duré environ mille ans." },
        { t: 'qcm', q: 'Dans quel ordre ces périodes se suivent-elles ?', c: ['Antiquité, Moyen Âge, Temps modernes', 'Moyen Âge, Antiquité, Temps modernes', 'Temps modernes, Antiquité, Moyen Âge', 'Antiquité, Temps modernes, Moyen Âge'], a: 0, z: 'Le Moyen Âge est « au milieu » : son nom le dit.', e: "Antiquité, puis Moyen Âge (476 à 1492), puis Temps modernes. « Moyen » veut dire « du milieu »." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'On surnomme souvent la France métropolitaine « l\'Hexagone ». Pourquoi ?', c: ['Sa forme ressemble à une figure à six côtés', 'Elle a six régions', 'Elle a six voisins', 'Sa capitale a six arrondissements'], a: 0, z: 'Un hexagone est une figure géométrique.', e: "Un hexagone a six côtés, et la carte de la France ressemble à cette forme." },
      { t: 'qcm', q: 'Quelle mer borde le <b>sud</b> de la France ?', c: ['La mer Méditerranée', 'La Manche', 'La mer du Nord', 'La mer Baltique'], a: 0, z: 'C\'est là que se trouvent Marseille et Nice.', e: "La Méditerranée borde le sud de la France, avec Marseille, Nice ou Montpellier." },
      { t: 'qcm', q: 'Quelle mer sépare la France de l\'Angleterre ?', c: ['La Manche', 'La Méditerranée', 'La mer Noire', 'La mer Rouge'], a: 0, z: 'Son nom est aussi celui d\'une partie d\'un vêtement.', e: "La Manche sépare la France de la Grande-Bretagne. On peut la traverser en bateau ou par le tunnel." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Die Wölfe sind zurück',
        s: ['Früher gab es in Deutschland viele Wölfe.', 'Dann waren sie mehr als hundert Jahre lang verschwunden.', 'Im Jahr 2000 kamen die ersten Wolfsbabys in der Lausitz zur Welt.', 'Die Lausitz liegt im Osten von Deutschland, nicht weit von Polen.', 'Heute leben wieder viele Wolfsrudel in Deutschland.', 'Ein Rudel ist eine Wolfsfamilie mit Eltern und Kindern.'],
        qs: [
          { q: 'Wo kamen im Jahr 2000 die ersten Wolfsbabys zur Welt?', c: ['In der Lausitz', 'In Berlin', 'Im Schwarzwald', 'An der Nordsee'], a: 0, r: [2], e: 'Der Text sagt: in der Lausitz, im Osten von Deutschland.' },
          { q: 'Was ist ein Rudel?', c: ['Eine Wolfsfamilie', 'Ein großer Wald', 'Ein Wolfsbaby', 'Ein Jäger'], a: 0, r: [5], e: 'Ein Rudel ist eine Wolfsfamilie mit Eltern und Kindern.' }
        ] },
      qs: [
        { t: 'fill', q: 'Welcher Artikel passt?', s: '___ Wolf heult in der Nacht.', c: ['Der', 'Die', 'Das'], a: 0, z: 'Ein Wolf ist ein Tier. Man sagt: ein Wolf, ... Wolf.', e: 'der Wolf, die Wölfe.' },
        { t: 'dictee', cs: true, say: 'Der Wald ist dunkel.', a: ['Der Wald ist dunkel'], z: 'Nomen schreibt man groß: der Wald.', e: '„Wald“ ist ein Nomen, also groß. „dunkel“ ist ein Adjektiv, also klein.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Wie heißt die Hauptstadt von Deutschland?', c: ['Berlin', 'München', 'Hamburg', 'Köln'], a: 0, z: 'Dort steht das Brandenburger Tor.', e: 'Berlin ist die Hauptstadt und die größte Stadt Deutschlands.' },
      { t: 'qcm', q: 'Wie viele Bundesländer hat Deutschland?', c: ['16', '13', '10', '20'], a: 0, z: 'Frankreich hat 13 Regionen, Deutschland hat etwas mehr Bundesländer.', e: 'Deutschland hat 16 Bundesländer, zum Beispiel Bayern, Sachsen oder Berlin.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 2 ---------------- */
{
  place: 'Le Vieux Chêne', icon: '🌳', reward: { icon: '🦷', name: "Le Croc d'argent" },
  focus: "Seigneurs et paysans · les fleuves de France · Deutsch : im Herbst · Nordsee, Ostsee, Zugspitze",
  intro: "Le plus vieux chêne de la forêt a vu passer mille ans d'histoire. Vesper dit qu'il se souvient de tout, mais qu'il parle lentement.",
  parts: [
    { dom: 'hist',
      lect: { title: 'Le seigneur et ses paysans',
        s: ["Autour de la tour du Loup vivaient une centaine de paysans.", "Le seigneur Guilhem leur promettait sa protection en cas d'attaque : ils pouvaient se réfugier derrière les murs.", "En échange, les paysans lui donnaient une partie de leurs récoltes.", "Plusieurs jours par an, ils devaient aussi travailler gratuitement sur ses terres : c'était la corvée.", "Certains paysans, les serfs, n'avaient même pas le droit de quitter le domaine.", "Le meunier, lui, faisait payer chaque sac de farine moulu au moulin du seigneur."],
        qs: [
          { q: 'Qu\'est-ce que la corvée ?', c: ['Un travail gratuit sur les terres du seigneur', 'Un impôt payé à l\'Église', 'Une fête au château', 'Une attaque contre le château'], a: 0, r: [3], e: "La corvée, c'était le travail gratuit que les paysans devaient au seigneur." },
          { q: 'Que recevaient les paysans en échange de leurs récoltes ?', c: ['La protection du seigneur', 'De l\'argent', 'Une maison dans la tour', 'Des chevaux'], a: 0, r: [1, 2], e: "Le seigneur promettait de les protéger : en cas d'attaque, ils se réfugiaient derrière les murs." }
        ] },
      qs: [
        { t: 'qcm', q: 'Au Moyen Âge, un <b>vassal</b> est...', c: ['un noble qui jure fidélité à un seigneur plus puissant', 'un paysan qui travaille au moulin', 'un moine qui copie des livres', 'un marchand qui voyage'], a: 0, z: 'Il reçoit une terre, le fief, en échange de sa fidélité.', e: "Le vassal jure fidélité à son seigneur (son suzerain) et reçoit en échange une terre : le fief." },
        { t: 'qcm', q: 'Les serfs étaient des paysans...', c: ['qui ne pouvaient pas quitter le domaine du seigneur', 'qui possédaient un château', 'qui étaient chevaliers', 'qui vivaient en ville'], a: 0, z: 'Relis la fin du texte sur le seigneur et ses paysans.', e: "Les serfs étaient attachés à la terre du seigneur : ils n'avaient pas le droit de partir." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Quel est le plus long fleuve de France ?', c: ['La Loire', 'La Seine', 'Le Rhône', 'La Garonne'], a: 0, z: 'Il traverse Orléans, Tours et Nantes, et ses bords sont célèbres pour leurs châteaux.', e: "La Loire mesure environ 1 000 km. Elle se jette dans l'océan Atlantique près de Nantes." },
      { t: 'qcm', q: 'Quel fleuve traverse <b>Paris</b> ?', c: ['La Seine', 'La Loire', 'Le Rhin', 'La Garonne'], a: 0, z: 'Il se jette dans la Manche au Havre.', e: "La Seine traverse Paris puis Rouen, et se jette dans la Manche au Havre." },
      { t: 'qcm', q: 'Quel fleuve forme une partie de la frontière entre la France et l\'Allemagne ?', c: ['Le Rhin', 'Le Rhône', 'La Loire', 'La Seine'], a: 0, z: 'Il passe à Strasbourg. En allemand, on dit der Rhein.', e: "Le Rhin sépare l'Alsace de l'Allemagne, près de Strasbourg." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Im Herbst',
        s: ['Im Herbst werden die Blätter gelb, rot und braun.', 'Der Wind bläst sie von den Bäumen.', 'Die Eichhörnchen sammeln Nüsse für den Winter.', 'Sarah geht mit ihrem Opa in den Wald.', 'Sie finden Pilze, Kastanien und eine große Feder.', 'Zu Hause trinken sie einen heißen Kakao.'],
        qs: [
          { q: 'Was sammeln die Eichhörnchen?', c: ['Nüsse', 'Pilze', 'Blätter', 'Federn'], a: 0, r: [2], e: 'Die Eichhörnchen sammeln Nüsse für den Winter.' },
          { q: 'Mit wem geht Sarah in den Wald?', c: ['Mit ihrem Opa', 'Mit ihrer Mama', 'Mit einem Wolf', 'Mit ihrer Lehrerin'], a: 0, r: [3], e: 'Sarah geht mit ihrem Opa in den Wald.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Schreib das Wort in der <b>Mehrzahl</b>.', pre: 'das Blatt → die', a: ['Blätter'], z: 'Aus a wird ä, und am Ende kommt -er.', e: 'das Blatt, die Blätter. Nomen schreibt man immer groß.' },
        { t: 'fill', q: 'Welcher Artikel passt?', s: '___ Eichhörnchen sammelt Nüsse.', c: ['Das', 'Der', 'Die'], a: 0, z: 'Wörter mit -chen am Ende haben immer denselben Artikel.', e: 'Alle Wörter mit -chen sind sächlich: das Eichhörnchen, das Mädchen.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Welche zwei Meere liegen im Norden von Deutschland?', c: ['Die Nordsee und die Ostsee', 'Das Mittelmeer und die Nordsee', 'Die Ostsee und das Schwarze Meer', 'Der Atlantik und das Mittelmeer'], a: 0, z: 'Ein Meer liegt im Nordwesten, das andere im Nordosten.', e: 'Die Nordsee liegt im Nordwesten, die Ostsee im Nordosten.' },
      { t: 'qcm', q: 'Wie heißt der höchste Berg Deutschlands?', c: ['Die Zugspitze', 'Der Mont Blanc', 'Der Brocken', 'Das Matterhorn'], a: 0, z: 'Er liegt in den Alpen, in Bayern.', e: 'Die Zugspitze ist fast 3 000 Meter hoch. Sie liegt in Bayern, an der Grenze zu Österreich.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 3 ---------------- */
{
  place: 'La Clairière de lune', icon: '🌕', reward: { icon: '🌙', name: 'La Pierre de lune' },
  focus: "Chevaliers et châteaux forts · les montagnes de France · Deutsch : das Cello · Rhein, Alpen",
  intro: "Les nuits de pleine lune, la meute se réunit dans la clairière. On dit qu'autrefois, les chevaliers de Guilhem y étaient adoubés.",
  parts: [
    { dom: 'hist',
      lect: { title: "L'adoubement de Bertrand",
        s: ["Bertrand était le neveu du seigneur Guilhem.", "Depuis l'âge de sept ans, il apprenait à monter à cheval, à manier l'épée et à servir son seigneur.", "D'abord page, puis écuyer, il portait les armes du chevalier qu'il servait.", "Le jour de ses dix-huit ans, une grande cérémonie eut lieu dans la clairière : l'adoubement.", "Guilhem lui remit son épée et lui donna un coup du plat de la main sur la nuque.", "Bertrand jura de protéger les faibles et d'être fidèle à son seigneur : il était devenu chevalier."],
        qs: [
          { q: 'Dans quel ordre Bertrand est-il devenu chevalier ?', c: ['Page, puis écuyer, puis chevalier', 'Écuyer, puis page, puis chevalier', 'Chevalier, puis écuyer, puis page', 'Page, puis chevalier, puis écuyer'], a: 0, r: [2, 5], e: "On commence page, puis écuyer, et l'adoubement fait de l'écuyer un chevalier." },
          { q: 'Que promet Bertrand pendant l\'adoubement ?', c: ['De protéger les faibles et d\'être fidèle', 'De construire un château', 'De partir vivre en ville', 'De devenir moine'], a: 0, r: [5], e: "Il jure de protéger les faibles et d'être fidèle à son seigneur." }
        ] },
      qs: [
        { t: 'qcm', q: 'Dans un château fort, comment s\'appelle la plus haute tour, le dernier refuge en cas d\'attaque ?', c: ['Le donjon', 'Le pont-levis', 'Les douves', 'Le chemin de ronde'], a: 0, z: 'C\'est aussi un mot de jeu vidéo : on y descend dans les « ... ».', e: "Le donjon est la tour la plus haute et la plus solide. Le seigneur y vivait souvent." },
        { t: 'qcm', q: 'Les <b>douves</b> d\'un château, ce sont...', c: ['des fossés remplis d\'eau autour des murs', 'des fentes pour tirer à l\'arc', 'des créneaux en haut des murs', 'des chambres pour les invités'], a: 0, z: 'On les traverse grâce au pont-levis.', e: "Les douves sont des fossés pleins d'eau. Le pont-levis permet de les franchir." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Quel est le plus haut sommet de France (et des Alpes) ?', c: ['Le mont Blanc', 'Le puy de Dôme', 'Le mont Ventoux', 'Le Canigou'], a: 0, z: 'Il est couvert de neige toute l\'année, d\'où son nom.', e: "Le mont Blanc mesure plus de 4 800 mètres. Il se trouve dans les Alpes, à la frontière avec l'Italie." },
      { t: 'qcm', q: 'Quelles montagnes séparent la France de l\'Espagne ?', c: ['Les Pyrénées', 'Les Alpes', 'Les Vosges', 'Le Jura'], a: 0, z: 'Elles sont au sud-ouest de la France.', e: "Les Pyrénées forment la frontière avec l'Espagne. Le petit pays d'Andorre s'y trouve." },
      { t: 'qcm', q: 'Le Massif central est connu pour ses anciens...', c: ['volcans', 'glaciers', 'déserts', 'châteaux de sable'], a: 0, z: 'Le puy de Dôme en est un.', e: "Le Massif central compte de nombreux volcans éteints, comme le puy de Dôme, près de Clermont-Ferrand." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Das Cello',
        s: ['Sarah spielt Cello.', 'Das Cello ist größer als eine Geige, deshalb sitzt man beim Spielen.', 'Es hat vier Saiten und einen langen Stachel, der auf dem Boden steht.', 'Sarah übt jeden Tag eine halbe Stunde.', 'Am liebsten spielt sie traurige und geheimnisvolle Melodien.', 'Ihre Lehrerin sagt, dass sie einen schönen, tiefen Klang hat.'],
        qs: [
          { q: 'Warum sitzt man beim Cellospielen?', c: ['Weil das Cello größer als eine Geige ist', 'Weil das Cello sehr leicht ist', 'Weil man sonst müde wird', 'Weil die Lehrerin das will'], a: 0, r: [1], e: 'Das Cello ist größer als eine Geige, deshalb sitzt man.' },
          { q: 'Welche Melodien spielt Sarah am liebsten?', c: ['Traurige und geheimnisvolle', 'Lustige und schnelle', 'Laute und wilde', 'Kurze und einfache'], a: 0, r: [4], e: 'Am liebsten spielt sie traurige und geheimnisvolle Melodien.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Setze das Verb ein (Gegenwart).', pre: 'Sarah (üben) →', post: 'jeden Tag.', a: ['übt'], z: 'Bei „sie“ oder „er“ endet das Verb auf -t.', e: 'ich übe, du übst, sie übt.' },
        { t: 'dictee', cs: true, say: 'Das Cello hat vier Saiten.', a: ['Das Cello hat vier Saiten'], z: 'Saiten (beim Instrument) schreibt man mit ai.', e: '„Saiten“ mit ai sind die Saiten eines Instruments. „Seiten“ mit ei sind die Seiten eines Buches.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Welcher große Fluss fließt durch Köln?', c: ['Der Rhein', 'Die Elbe', 'Die Donau', 'Die Spree'], a: 0, z: 'Er fließt auch an Straßburg vorbei.', e: 'Der Rhein fließt durch Köln, Bonn und Düsseldorf.' },
      { t: 'qcm', q: 'In welchem Teil von Deutschland liegen die Alpen?', c: ['Im Süden', 'Im Norden', 'Im Westen', 'Im Osten'], a: 0, z: 'Sie liegen an der Grenze zu Österreich.', e: 'Die Alpen liegen im Süden, in Bayern.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 4 ---------------- */
{
  place: 'Le Ruisseau gelé', icon: '❄️', reward: { icon: '💧', name: 'La Larme de givre' },
  focus: "L'Église, moines et cathédrales · les régions de France · Deutsch : Schwimmen im Winter · Hamburg, München",
  intro: "Au bord du ruisseau gelé, Vesper a trouvé un vieux livre enluminé, protégé par une boîte en plomb. Quelqu'un l'a caché là il y a très longtemps.",
  parts: [
    { dom: 'hist',
      lect: { title: 'Le moine copiste',
        s: ["Non loin de la tour du Loup se trouvait une abbaye où vivaient des moines.", "Frère Anselme y passait ses journées à recopier des livres à la main, lettre après lettre.", "Il écrivait avec une plume d'oie sur du parchemin, une peau d'animal très fine.", "Il décorait la première lettre de chaque page avec des couleurs et de l'or : c'est une enluminure.", "Copier un seul livre pouvait lui prendre plus d'une année.", "Le livre trouvé par Vesper au bord du ruisseau porte sa signature : « Anselme, moine ». "],
        qs: [
          { q: 'Sur quoi frère Anselme écrivait-il ?', c: ['Sur du parchemin, une peau d\'animal', 'Sur du papier d\'imprimerie', 'Sur des tablettes de cire', 'Sur des feuilles d\'arbre'], a: 0, r: [2], e: "Le parchemin est une peau d'animal très fine et préparée pour écrire." },
          { q: 'Pourquoi les livres étaient-ils si rares au Moyen Âge ?', c: ['Ils étaient copiés à la main, très lentement', 'Personne n\'aimait lire', 'Le roi les interdisait', 'Ils étaient tous brûlés'], a: 0, r: [1, 4], e: "Chaque livre était recopié à la main : un seul pouvait prendre plus d'un an. L'imprimerie n'arrive qu'à la fin du Moyen Âge." }
        ] },
      qs: [
        { t: 'qcm', q: 'Quelle célèbre cathédrale de style gothique a été commencée à Paris en 1163 ?', c: ['Notre-Dame de Paris', 'Le Sacré-Cœur', 'Le Panthéon', 'La tour Saint-Jacques'], a: 0, z: 'Elle a brûlé en 2019 puis a été restaurée.', e: "Notre-Dame de Paris a été commencée en 1163. Elle a rouvert en décembre 2024 après l'incendie de 2019." },
        { t: 'qcm', q: 'Les cathédrales gothiques sont célèbres pour leurs grandes fenêtres en verre coloré. Comment les appelle-t-on ?', c: ['Les vitraux', 'Les créneaux', 'Les mosaïques', 'Les meurtrières'], a: 0, z: 'Le mot contient le mot « vitre ».', e: "Les vitraux racontaient des histoires de la Bible à ceux qui ne savaient pas lire." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Combien de régions compte la France métropolitaine (sans l\'outre-mer) ?', c: ['13', '22', '101', '5'], a: 0, z: '101, c\'est le nombre de départements.', e: "La France métropolitaine compte 13 régions depuis 2016. Avec les 5 régions d'outre-mer, cela fait 18." },
      { t: 'qcm', q: 'Quelle est la capitale de la région Bretagne ?', c: ['Rennes', 'Brest', 'Nantes', 'Quimper'], a: 0, z: 'Nantes est la capitale d\'une région voisine.', e: "Rennes est le chef-lieu de la Bretagne. Nantes est celui des Pays de la Loire." },
      { t: 'qcm', q: 'Strasbourg est la capitale de quelle région ?', c: ['Le Grand Est', 'Les Hauts-de-France', 'La Normandie', 'L\'Occitanie'], a: 0, z: 'Elle se trouve à l\'est, au bord du Rhin.', e: "Strasbourg est le chef-lieu du Grand Est, qui touche l'Allemagne, la Suisse, le Luxembourg et la Belgique." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Schwimmen im Winter',
        s: ['Draußen ist es kalt, aber Sarah geht trotzdem schwimmen.', 'Das Schwimmbad ist warm und hell.', 'Zuerst schwimmt sie vier Bahnen Kraul.', 'Dann übt sie das Tauchen.', 'Sie holt einen roten Ring vom Boden des Beckens.', 'Nach dem Training sind ihre Haare nass, und sie setzt eine dicke Mütze auf.'],
        qs: [
          { q: 'Was holt Sarah vom Boden des Beckens?', c: ['Einen roten Ring', 'Eine Mütze', 'Einen Ball', 'Eine Brille'], a: 0, r: [4], e: 'Sie taucht und holt einen roten Ring.' },
          { q: 'Warum setzt Sarah eine dicke Mütze auf?', c: ['Weil ihre Haare nass sind und es draußen kalt ist', 'Weil sie die Mütze schön findet', 'Weil das Schwimmbad kalt ist', 'Weil die Lehrerin es sagt'], a: 0, r: [0, 5], e: 'Draußen ist es kalt und ihre Haare sind nass.' }
        ] },
      qs: [
        { t: 'fill', q: 'i, ie oder ei?', s: 'Sarah schw___mt jeden Mittwoch.', c: ['i', 'ie', 'ei'], a: 0, z: 'Hier hört man ein kurzes i.', e: 'schwimmen: kurzes i, danach zwei m.' },
        { t: 'type', cs: true, q: 'Schreib das Wort mit großem oder kleinem Anfangsbuchstaben.', s: 'Sarah holt den roten (RING).', pre: '→', a: ['Ring'], z: 'Ist es ein Nomen? Kann man „der“ davor setzen?', e: 'der Ring ist ein Nomen: Man schreibt ihn groß.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'An welchem Fluss liegt Hamburg?', c: ['An der Elbe', 'Am Rhein', 'An der Donau', 'Am Main'], a: 0, z: 'Er fließt auch durch Dresden.', e: 'Hamburg liegt an der Elbe und hat den größten Hafen Deutschlands.' },
      { t: 'qcm', q: 'München ist die Hauptstadt von welchem Bundesland?', c: ['Bayern', 'Sachsen', 'Hessen', 'Niedersachsen'], a: 0, z: 'Es ist das größte Bundesland.', e: 'München ist die Hauptstadt von Bayern.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 5 ---------------- */
{
  place: 'Les Ruines du donjon', icon: '🏚️', reward: { icon: '🛡️', name: 'Le Blason du Loup' },
  focus: "La guerre de Cent Ans, Jeanne d'Arc · les voisins de la France · Deutsch : Burg · die Nachbarländer",
  intro: "Dans les ruines du donjon, sous la mousse, un blason gravé : une tête de loup. C'était celui de la famille de Guilhem.",
  parts: [
    { dom: 'hist',
      lect: { title: "Jeanne et le siège d'Orléans",
        s: ["Pendant la guerre de Cent Ans, les rois de France et d'Angleterre se disputent le royaume.", "En 1429, la ville d'Orléans est encerclée par les Anglais depuis des mois.", "Une jeune paysanne de Lorraine, Jeanne, affirme que des voix lui ont demandé de sauver le royaume.", "Elle convainc le futur roi Charles VII de lui confier des soldats.", "Avec eux, elle libère Orléans en mai 1429.", "Quelques semaines plus tard, Charles VII est sacré roi dans la cathédrale de Reims.", "Capturée l'année suivante, Jeanne est brûlée à Rouen en 1431."],
        qs: [
          { q: 'Que fait Jeanne d\'Arc en mai 1429 ?', c: ['Elle libère Orléans', 'Elle est sacrée reine', 'Elle signe la paix', 'Elle construit un château'], a: 0, r: [4], e: "En mai 1429, Jeanne libère Orléans, encerclée par les Anglais." },
          { q: 'Où Charles VII est-il sacré roi ?', c: ['Dans la cathédrale de Reims', 'À Orléans', 'À Rouen', 'À Paris'], a: 0, r: [5], e: "Les rois de France étaient traditionnellement sacrés à Reims." }
        ] },
      qs: [
        { t: 'qcm', q: 'La guerre de Cent Ans a opposé la France à...', c: ['l\'Angleterre', 'l\'Allemagne', 'l\'Espagne', 'l\'Italie'], a: 0, z: 'Relis la première phrase du texte.', e: "La guerre de Cent Ans (1337 à 1453) a opposé les rois de France et d'Angleterre." },
        { t: 'qcm', q: 'La guerre de Cent Ans a duré de 1337 à 1453. Combien d\'années exactement ?', c: ['116 ans', '100 ans', '99 ans', '153 ans'], a: 0, z: 'Calcule 1453 − 1337.', e: "1453 − 1337 = 116. Elle a donc duré plus de cent ans, malgré son nom !" }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Lequel de ces pays n\'est <b>pas</b> un voisin de la France métropolitaine ?', c: ['Le Portugal', 'La Belgique', 'La Suisse', 'L\'Italie'], a: 0, z: 'Un pays se trouve de l\'autre côté de l\'Espagne.', e: "Le Portugal touche l'Espagne, mais pas la France." },
      { t: 'qcm', q: 'Quel très petit pays voisin se trouve au bord de la Méditerranée, près de Nice ?', c: ['Monaco', 'Andorre', 'Le Luxembourg', 'Le Liechtenstein'], a: 0, z: 'Il est célèbre pour son Grand Prix de voitures.', e: "Monaco est l'un des plus petits pays du monde, au bord de la Méditerranée." },
      { t: 'qcm', q: 'Quel pays voisin se trouve au <b>nord-est</b> de la France, entre la Belgique et l\'Allemagne ?', c: ['Le Luxembourg', 'Monaco', 'L\'Espagne', 'Andorre'], a: 0, z: 'Sa capitale porte le même nom que le pays.', e: "Le Luxembourg est un petit pays dont la capitale s'appelle aussi Luxembourg." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Die alte Burg',
        s: ['Auf einem Berg am Rhein steht eine alte Burg.', 'Früher wohnte dort ein Ritter mit seiner Familie.', 'Die Mauern waren dick, damit keine Feinde hineinkommen konnten.', 'Heute wohnt niemand mehr in der Burg.', 'Aber im Sommer kommen viele Kinder und spielen Ritter und Burgfräulein.', 'Von oben sieht man die Schiffe auf dem Fluss.'],
        qs: [
          { q: 'Warum waren die Mauern so dick?', c: ['Damit keine Feinde hineinkommen konnten', 'Damit es im Winter warm war', 'Damit die Kinder spielen konnten', 'Damit man die Schiffe sieht'], a: 0, r: [2], e: 'Die dicken Mauern schützten die Burg vor Feinden.' },
          { q: 'Was sieht man von oben?', c: ['Die Schiffe auf dem Fluss', 'Das Meer', 'Die Alpen', 'Den Wald der Wölfe'], a: 0, r: [5], e: 'Von oben sieht man die Schiffe auf dem Rhein.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Schreib das Verb in der <b>Vergangenheit</b> (Präteritum).', pre: 'Der Ritter (wohnen) →', post: 'in der Burg.', a: ['wohnte'], z: 'Bei regelmäßigen Verben hängt man -te an den Stamm: spielen → spielte.', e: 'wohnen → er wohnte. Wie spielen → er spielte.' },
        { t: 'type', cs: true, q: 'Schreib das Wort in der <b>Mehrzahl</b>.', pre: 'die Burg → die', a: ['Burgen'], z: 'Viele Nomen mit „die“ bekommen in der Mehrzahl -en.', e: 'die Burg, die Burgen.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Welches Nachbarland liegt im <b>Westen</b> von Deutschland?', c: ['Frankreich', 'Polen', 'Österreich', 'Dänemark'], a: 0, z: 'Du kennst dieses Land sehr gut.', e: 'Frankreich ist ein Nachbarland im Westen. Deutschland hat insgesamt neun Nachbarländer.' },
      { t: 'qcm', q: 'Welche Farben hat die deutsche Flagge?', c: ['Schwarz, Rot, Gold', 'Blau, Weiß, Rot', 'Rot, Weiß, Rot', 'Grün, Weiß, Rot'], a: 0, z: 'Blau, Weiß, Rot ist die französische Flagge.', e: 'Die deutsche Flagge ist schwarz, rot und gold.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 6 ---------------- */
{
  place: 'La Tranchée oubliée', icon: '🪖', reward: { icon: '📦', name: 'La Boîte en fer' },
  focus: "1914, la guerre éclate · les grandes villes · Deutsch : ein Brief · Elbe, Donau",
  intro: "Sous les fougères, un long fossé zigzague entre les arbres : une tranchée de 1914. Vesper gratte la terre au pied d'un chêne et découvre une boîte en fer rouillée, pleine de lettres. Elles sont adressées à Agathe, la violoncelliste du portrait.",
  parts: [
    { dom: 'hist',
      lect: { title: 'Première lettre de Lucien',
        s: ["« Ma chère Agathe, le 2 août 1914.", "Hier, les cloches de toutes les églises ont sonné : c'est la mobilisation générale.", "Tous les hommes en âge de se battre doivent rejoindre l'armée, et moi aussi.", "L'Allemagne et l'Autriche-Hongrie d'un côté, la France, le Royaume-Uni et la Russie de l'autre : toute l'Europe entre en guerre.", "Au village, tout le monde dit que nous serons rentrés pour Noël.", "Garde bien ton violoncelle, et joue-moi quelque chose à mon retour.", "Ton petit frère qui t'embrasse, Lucien. »"],
        qs: [
          { q: 'Qui est Lucien pour Agathe ?', c: ['Son petit frère', 'Son professeur de violoncelle', 'Son voisin', 'Son grand-père'], a: 0, r: [6], e: "Il signe « Ton petit frère qui t'embrasse »." },
          { q: 'Que croient les gens du village en août 1914 ?', c: ['Que la guerre sera finie pour Noël', 'Que la guerre durera cent ans', 'Que la guerre n\'aura pas lieu', 'Que l\'Allemagne est leur alliée'], a: 0, r: [4], e: "Tout le monde pensait à une guerre courte. Elle a duré plus de quatre ans, jusqu'en novembre 1918." }
        ] },
      qs: [
        { t: 'qcm', q: 'En quelle année commence la Première Guerre mondiale ?', c: ['1914', '1789', '1939', '1918'], a: 0, z: 'Regarde la date de la lettre de Lucien.', e: "La Première Guerre mondiale commence en 1914 et se termine en 1918." },
        { t: 'qcm', q: 'Quel événement déclenche la guerre, en juin 1914 à Sarajevo ?', c: ['L\'assassinat de l\'héritier du trône d\'Autriche-Hongrie', 'La prise de la Bastille', 'Un tremblement de terre', 'Le naufrage du Titanic'], a: 0, z: 'Il s\'agit de l\'archiduc François-Ferdinand.', e: "Le 28 juin 1914, l'archiduc François-Ferdinand est assassiné à Sarajevo. Par le jeu des alliances, toute l'Europe entre en guerre en quelques semaines." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Après Paris, quelle est la ville la plus peuplée de France ?', c: ['Marseille', 'Lyon', 'Bordeaux', 'Lille'], a: 0, z: 'C\'est un grand port de la Méditerranée.', e: "Marseille est la deuxième ville de France, devant Lyon." },
      { t: 'qcm', q: 'Lyon se trouve au confluent (là où deux cours d\'eau se rejoignent) du Rhône et de...', c: ['la Saône', 'la Seine', 'la Loire', 'la Garonne'], a: 0, z: 'Son nom ressemble à celui de la Seine, mais ce n\'est pas elle.', e: "À Lyon, la Saône se jette dans le Rhône." },
      { t: 'qcm', q: 'Quelle grande ville du sud-ouest est traversée par la Garonne ?', c: ['Bordeaux', 'Nantes', 'Strasbourg', 'Lille'], a: 0, z: 'Elle est célèbre pour ses vins.', e: "La Garonne traverse Toulouse puis Bordeaux, avant de devenir l'estuaire de la Gironde." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Ein Brief aus der Lausitz',
        s: ['Liebe Sarah,', 'ich bin Wolka, die Cousine von Vesper.', 'Ich wohne mit meinem Rudel in einem großen Wald in der Lausitz.', 'Gestern haben wir einen Fuchs gesehen, aber er ist schnell weggelaufen.', 'Im Winter liegt hier oft Schnee, und unsere Spuren sieht man überall.', 'Schreibst du mir zurück? Viele Grüße, deine Wolka'],
        qs: [
          { q: 'Wer schreibt den Brief?', c: ['Wolka, die Cousine von Vesper', 'Vesper', 'Sarahs Oma', 'Ein Fuchs'], a: 0, r: [1], e: 'Wolka ist die Cousine von Vesper.' },
          { q: 'Was sieht man im Winter überall?', c: ['Die Spuren der Wölfe', 'Viele Füchse', 'Blumen', 'Schiffe'], a: 0, r: [4], e: 'Im Schnee sieht man die Spuren überall.' }
        ] },
      qs: [
        { t: 'fill', q: 'Welches Wort passt?', s: 'Der Fuchs ist schnell ___.', c: ['weggelaufen', 'weggelauft', 'weglaufte'], a: 0, z: 'laufen ist ein unregelmäßiges Verb: ich bin gelaufen.', e: 'laufen, ich bin gelaufen, er ist weggelaufen.' },
        { t: 'dictee', cs: true, say: 'Im Winter liegt Schnee.', a: ['Im Winter liegt Schnee'], z: 'Winter und Schnee sind Nomen.', e: '„Winter“ und „Schnee“ sind Nomen und werden großgeschrieben.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Welcher Fluss fließt durch Dresden?', c: ['Die Elbe', 'Der Rhein', 'Die Mosel', 'Der Main'], a: 0, z: 'Er fließt weiter bis Hamburg.', e: 'Die Elbe fließt durch Dresden und Hamburg in die Nordsee.' },
      { t: 'qcm', q: 'Wo entspringt die Donau, also wo beginnt sie?', c: ['Im Schwarzwald', 'In den Alpen', 'An der Ostsee', 'In Berlin'], a: 0, z: 'Ein dunkler Wald im Südwesten Deutschlands.', e: 'Die Donau entspringt im Schwarzwald und fließt bis zum Schwarzen Meer.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 7 ---------------- */
{
  place: 'Le Ravin des brumes', icon: '🌫️', reward: { icon: '🏮', name: 'La Lanterne de tranchée' },
  focus: "La vie dans les tranchées, Verdun · les transports · Deutsch : Nebel · Bodensee, Berlin",
  intro: "Une brume épaisse remplit le ravin. Vesper avance lentement. Dans la boîte en fer, la deuxième lettre de Lucien est tachée de boue.",
  parts: [
    { dom: 'hist',
      lect: { title: 'Lettre de Verdun',
        s: ["« Ma chère Agathe, mars 1916.", "Je t'écris depuis une tranchée près de Verdun, où la bataille fait rage depuis février.", "Nous vivons dans la boue, avec les rats et le froid, sous le bruit des obus.", "On nous appelle les poilus, parce que nous n'avons plus le temps de nous raser.", "Le soir, un camarade joue de l'harmonica et je pense à ton violoncelle.", "J'ai fabriqué une petite bague avec un morceau de métal d'obus : elle est pour toi.", "Ton frère, Lucien. »"],
        qs: [
          { q: 'Pourquoi appelle-t-on les soldats français « les poilus » ?', c: ['Ils n\'ont plus le temps de se raser', 'Ils portent des manteaux en fourrure', 'Ils ont des chiens', 'Ils dorment sur de la paille'], a: 0, r: [3], e: "Les soldats avaient la barbe et la moustache : on les surnommait les poilus." },
          { q: 'Que fabrique Lucien pour sa sœur ?', c: ['Une petite bague en métal d\'obus', 'Un violoncelle en bois', 'Un harmonica', 'Une lanterne'], a: 0, r: [5], e: "Les soldats fabriquaient souvent des objets avec les restes d'obus : on appelle cela l'artisanat de tranchée." }
        ] },
      qs: [
        { t: 'qcm', q: 'En quelle année a eu lieu la bataille de Verdun ?', c: ['1916', '1914', '1918', '1940'], a: 0, z: 'Regarde la date de la lettre.', e: "La bataille de Verdun a duré de février à décembre 1916. C'est l'une des plus longues et terribles de la guerre." },
        { t: 'qcm', q: 'Qu\'est-ce qu\'une tranchée ?', c: ['Un long fossé creusé pour s\'abriter des tirs', 'Un pont au-dessus d\'une rivière', 'Une forteresse en pierre', 'Un train de soldats'], a: 0, z: 'Tu en as vu une dans la forêt hier.', e: "Les tranchées étaient de longs fossés où les soldats vivaient et se protégeaient, face aux tranchées ennemies." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Quel tunnel relie la France à l\'Angleterre depuis 1994 ?', c: ['Le tunnel sous la Manche', 'Le tunnel du Mont-Blanc', 'Le tunnel de Fréjus', 'Le tunnel du Gothard'], a: 0, z: 'Il passe sous une mer.', e: "Le tunnel sous la Manche, ouvert en 1994, mesure environ 50 km. Les trains y passent sous la mer." },
      { t: 'qcm', q: 'Quel train très rapide relie les grandes villes de France ?', c: ['Le TGV', 'Le métro', 'Le tramway', 'Le funiculaire'], a: 0, z: 'Ses trois lettres veulent dire « train à grande vitesse ».', e: "Le TGV (train à grande vitesse) roule à plus de 300 km/h sur certaines lignes." },
      { t: 'qcm', q: 'Le Havre et Marseille sont deux grands...', c: ['ports', 'aéroports', 'volcans', 'lacs'], a: 0, z: 'Des bateaux énormes y arrivent du monde entier.', e: "Le Havre (sur la Manche) et Marseille (sur la Méditerranée) sont les plus grands ports de France." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Nebel im Wald',
        s: ['Am Morgen ist der Wald voller Nebel.', 'Man sieht kaum die Bäume.', 'Vesper hebt die Nase und schnuppert.', 'Sie riecht einen Hasen, der sich unter einem Busch versteckt.', 'Langsam kommt die Sonne heraus, und der Nebel verschwindet.', 'Jetzt glitzern die Spinnennetze wie kleine Diamanten.'],
        qs: [
          { q: 'Was riecht Vesper?', c: ['Einen Hasen', 'Einen Fuchs', 'Einen Igel', 'Ein Reh'], a: 0, r: [3], e: 'Vesper riecht einen Hasen unter einem Busch.' },
          { q: 'Womit vergleicht der Text die Spinnennetze?', c: ['Mit kleinen Diamanten', 'Mit Sternen', 'Mit Schnee', 'Mit Perlen'], a: 0, r: [5], e: 'Die Spinnennetze glitzern wie kleine Diamanten.' }
        ] },
      qs: [
        { t: 'fill', q: 'Welcher Artikel passt?', s: 'Am Morgen ist ___ Nebel sehr dicht.', c: ['der', 'die', 'das'], a: 0, z: 'Man sagt: ein Nebel, ... Nebel.', e: 'der Nebel.' },
        { t: 'type', cs: true, q: 'Schreib das Wort in der <b>Mehrzahl</b>.', pre: 'der Baum → die', a: ['Bäume'], z: 'Aus au wird äu, und am Ende kommt -e.', e: 'der Baum, die Bäume. Wie der Raum, die Räume.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Der Bodensee liegt zwischen drei Ländern. Welche?', c: ['Deutschland, Österreich, Schweiz', 'Deutschland, Frankreich, Belgien', 'Deutschland, Polen, Tschechien', 'Deutschland, Dänemark, Niederlande'], a: 0, z: 'Es ist ein großer See im Süden, nahe den Alpen.', e: 'Der Bodensee liegt zwischen Deutschland, Österreich und der Schweiz.' },
      { t: 'qcm', q: 'In welcher Stadt steht das Brandenburger Tor?', c: ['In Berlin', 'In München', 'In Brandenburg', 'In Hamburg'], a: 0, z: 'Achtung, Falle: nicht in der Stadt mit dem gleichen Namen!', e: 'Das Brandenburger Tor steht in Berlin. Es ist ein Symbol für die deutsche Einheit.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 8 ---------------- */
{
  place: 'Le Rocher aux corbeaux', icon: '🪨', reward: { icon: '✉️', name: "La Lettre d'Agathe" },
  focus: "L'arrière : les femmes et les enfants pendant la guerre · l'outre-mer · Deutsch : Nyx · Wien, Bern",
  intro: "Sur le rocher, un corbeau garde quelque chose dans son bec. Nyx, venue du manoir, le convainc de le lâcher : c'est une lettre d'Agathe, la réponse à son frère.",
  parts: [
    { dom: 'hist',
      lect: { title: 'La réponse d\'Agathe',
        s: ["« Mon cher Lucien, juin 1917.", "Ta bague ne quitte plus mon doigt.", "Depuis que les hommes sont partis, les femmes font tourner le pays : elles labourent les champs, conduisent les tramways et fabriquent des obus dans les usines.", "Moi, je suis infirmière à l'hôpital de la ville.", "Le soir, je joue du violoncelle pour les blessés : certains pleurent, d'autres s'endorment enfin.", "Les enfants de l'école tricotent des chaussettes pour les soldats.", "Reviens-nous vite. Agathe. »"],
        qs: [
          { q: 'Quel métier Agathe fait-elle pendant la guerre ?', c: ['Infirmière', 'Conductrice de tramway', 'Soldate', 'Institutrice'], a: 0, r: [3], e: "Agathe est infirmière à l'hôpital, et elle joue du violoncelle pour les blessés." },
          { q: 'Que nous apprend la lettre sur les femmes pendant la guerre ?', c: ['Elles remplacent les hommes dans de nombreux métiers', 'Elles partent toutes au front', 'Elles ne travaillent plus du tout', 'Elles quittent la France'], a: 0, r: [2], e: "Les femmes ont travaillé dans les champs, les usines et les transports pour remplacer les hommes partis au front." }
        ] },
      qs: [
        { t: 'qcm', q: 'Comment appelait-on les femmes qui fabriquaient des obus dans les usines ?', c: ['Les munitionnettes', 'Les poilues', 'Les chevalières', 'Les marraines'], a: 0, z: 'Le mot vient de « munitions ».', e: "On les appelait les munitionnettes. Elles étaient des centaines de milliers." },
        { t: 'qcm', q: 'Quel grand pays entre en guerre aux côtés de la France en 1917 ?', c: ['Les États-Unis', 'Le Japon', 'Le Brésil', 'La Chine'], a: 0, z: 'Ses soldats traversent l\'océan Atlantique.', e: "En avril 1917, les États-Unis entrent en guerre aux côtés de la France et du Royaume-Uni." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Laquelle de ces îles est un territoire français dans la mer des Caraïbes ?', c: ['La Martinique', 'La Corse', 'La Sicile', 'Madagascar'], a: 0, z: 'Elle fait partie des Antilles, avec la Guadeloupe.', e: "La Martinique et la Guadeloupe sont des îles françaises des Antilles, dans la mer des Caraïbes." },
      { t: 'qcm', q: 'La Guyane française se trouve...', c: ['en Amérique du Sud', 'en Afrique', 'en Asie', 'en Océanie'], a: 0, z: 'Elle touche le Brésil.', e: "La Guyane est en Amérique du Sud, couverte de forêt amazonienne. Les fusées Ariane y décollent, à Kourou." },
      { t: 'qcm', q: 'Dans quel océan se trouve l\'île de La Réunion ?', c: ['L\'océan Indien', 'L\'océan Atlantique', 'L\'océan Pacifique', 'L\'océan Arctique'], a: 0, z: 'Elle est près de Madagascar.', e: "La Réunion et Mayotte sont des territoires français de l'océan Indien." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Nyx und der Rabe',
        s: ['Nyx ist eine kleine Fledermaus.', 'Am Tag schläft sie kopfüber im Glockenturm.', 'In der Nacht fliegt sie über den Wald und frisst Mücken.', 'Heute Nacht hilft sie Sarah.', 'Sie spricht mit einem alten Raben, der einen Brief im Schnabel hat.', 'Der Rabe ist zuerst böse, aber dann lässt er den Brief fallen.'],
        qs: [
          { q: 'Wie schläft Nyx am Tag?', c: ['Kopfüber im Glockenturm', 'In einem Nest', 'In Sarahs Bett', 'Unter einem Stein'], a: 0, r: [1], e: 'Fledermäuse schlafen kopfüber. Nyx schläft im Glockenturm.' },
          { q: 'Was frisst Nyx in der Nacht?', c: ['Mücken', 'Nüsse', 'Fische', 'Briefe'], a: 0, r: [2], e: 'Viele Fledermäuse fressen Mücken und andere Insekten.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Setze das Verb ein (Gegenwart).', pre: 'Die Fledermaus (fliegen) →', post: 'über den Wald.', a: ['fliegt'], z: 'Bei „sie“ endet das Verb auf -t.', e: 'ich fliege, du fliegst, sie fliegt.' },
        { t: 'dictee', cs: true, say: 'Die Fledermaus schläft am Tag.', a: ['Die Fledermaus schläft am Tag'], z: 'Fledermaus und Tag sind Nomen. schläft schreibt man mit ä.', e: '„schläft“ kommt von „schlafen“, deshalb ä.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Wie heißt die Hauptstadt von Österreich?', c: ['Wien', 'Salzburg', 'Zürich', 'Innsbruck'], a: 0, z: 'Auf Französisch sagt man Vienne.', e: 'Wien ist die Hauptstadt von Österreich. Die Donau fließt durch Wien.' },
      { t: 'qcm', q: 'In der Schweiz spricht man mehrere Sprachen. Welche gehört <b>nicht</b> dazu?', c: ['Spanisch', 'Deutsch', 'Französisch', 'Italienisch'], a: 0, z: 'Die Schweiz hat Nachbarn mit diesen Sprachen.', e: 'In der Schweiz spricht man Deutsch, Französisch, Italienisch und Rätoromanisch.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 9 ---------------- */
{
  place: 'La Colline du silence', icon: '⛰️', reward: { icon: '🕊️', name: 'La Colombe de pierre' },
  focus: "Le 11 novembre 1918, les monuments aux morts · l'Union européenne · Deutsch : Frieden · Hamburg, Bremen, Rügen",
  intro: "Au sommet de la colline, la forêt devient silencieuse. Dans la boîte, il reste une dernière lettre de Lucien. Elle date de novembre 1918.",
  parts: [
    { dom: 'hist',
      lect: { title: 'Le 11 novembre 1918',
        s: ["« Ma chère Agathe, le 11 novembre 1918.", "Ce matin, à 11 heures, les canons se sont tus d'un seul coup.", "L'armistice a été signé à l'aube, dans un wagon de train, en forêt de Compiègne.", "Les cloches sonnent partout, des soldats français et allemands se regardent sans tirer.", "Beaucoup de mes camarades ne rentreront jamais.", "Moi, je rentre à la maison. Prépare ton violoncelle : tu m'as promis un concert.", "Lucien. »"],
        qs: [
          { q: 'À quelle heure les combats s\'arrêtent-ils le 11 novembre 1918 ?', c: ['À 11 heures', 'À minuit', 'À 18 heures', 'À l\'aube'], a: 0, r: [1], e: "L'armistice a été signé à l'aube et les combats ont cessé à 11 heures." },
          { q: 'Où l\'armistice a-t-il été signé ?', c: ['Dans un wagon de train, en forêt de Compiègne', 'À Verdun', 'Dans la tour du Loup', 'À Berlin'], a: 0, r: [2], e: "Il a été signé à Rethondes, dans un wagon, en forêt de Compiègne." }
        ] },
      qs: [
        { t: 'qcm', q: 'Après la guerre, presque chaque commune de France a construit un monument pour...', c: ['honorer les soldats morts à la guerre', 'fêter la fin de l\'école', 'remercier le roi', 'décorer la place du marché'], a: 0, z: 'On y lit une longue liste de noms.', e: "Les monuments aux morts portent les noms des habitants morts à la guerre. On y fait une cérémonie chaque 11 novembre." },
        { t: 'qcm', q: 'Environ combien de soldats français sont morts pendant la Première Guerre mondiale ?', c: ['Environ 1,4 million', 'Environ 1 400', 'Environ 14 000', 'Environ 14 millions'], a: 0, z: 'C\'est plus d\'un million.', e: "Environ 1,4 million de soldats français sont morts. Partout en Europe, des millions de familles ont été touchées." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Combien de pays font partie de l\'Union européenne ?', c: ['27', '12', '50', '100'], a: 0, z: 'Depuis le départ du Royaume-Uni en 2020.', e: "L'Union européenne compte 27 pays, dont la France et l'Allemagne." },
      { t: 'qcm', q: 'Dans quelle ville française siège le Parlement européen ?', c: ['Strasbourg', 'Paris', 'Lyon', 'Marseille'], a: 0, z: 'Cette ville se trouve au bord du Rhin.', e: "Le Parlement européen siège à Strasbourg, une ville symbole de l'amitié entre la France et l'Allemagne." },
      { t: 'qcm', q: 'Quelle monnaie utilise-t-on en France et en Allemagne ?', c: ['L\'euro', 'Le franc', 'Le mark', 'La livre'], a: 0, z: 'Le franc et le mark ont disparu en 2002.', e: "Depuis 2002, l'euro a remplacé le franc français et le mark allemand." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Ein Konzert für den Frieden',
        s: ['Nach dem Krieg kam Lucien nach Hause.', 'Agathe spielte für ihn auf ihrem Cello.', 'Alle Nachbarn kamen, um zuzuhören.', 'Zuerst spielte sie ein trauriges Lied für die Soldaten, die nicht zurückgekommen waren.', 'Dann spielte sie ein fröhliches Lied, und die Kinder tanzten.', 'Lucien sagte: „Das ist das schönste Konzert meines Lebens.“'],
        qs: [
          { q: 'Für wen spielte Agathe zuerst ein trauriges Lied?', c: ['Für die Soldaten, die nicht zurückgekommen waren', 'Für die Kinder', 'Für die Nachbarn', 'Für ihren Lehrer'], a: 0, r: [3], e: 'Das traurige Lied war für die Soldaten, die nicht zurückgekommen waren.' },
          { q: 'Was machten die Kinder beim fröhlichen Lied?', c: ['Sie tanzten', 'Sie weinten', 'Sie schliefen', 'Sie sangen'], a: 0, r: [4], e: 'Beim fröhlichen Lied tanzten die Kinder.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Schreib das Verb in der <b>Vergangenheit</b> (Präteritum).', pre: 'Agathe (spielen) →', post: 'Cello.', a: ['spielte'], z: 'Regelmäßiges Verb: Stamm + -te.', e: 'spielen → sie spielte.' },
        { t: 'fill', q: 'Welches Wort ist richtig geschrieben?', s: 'Die Kinder ___ fröhlich.', c: ['tanzten', 'tantzten', 'tanzden'], a: 0, z: 'Nach n schreibt man z, nicht tz.', e: 'Nach l, n, r steht nie tz: tanzen, Herz, Holz.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Drei Bundesländer sind nur eine Stadt. Welches gehört <b>nicht</b> dazu?', c: ['München', 'Berlin', 'Hamburg', 'Bremen'], a: 0, z: 'Diese Stadt ist die Hauptstadt eines großen Bundeslandes.', e: 'Berlin, Hamburg und Bremen sind Stadtstaaten. München ist die Hauptstadt von Bayern.' },
      { t: 'qcm', q: 'Die größte deutsche Insel, Rügen, liegt in...', c: ['der Ostsee', 'der Nordsee', 'dem Bodensee', 'dem Mittelmeer'], a: 0, z: 'Das Meer im Nordosten.', e: 'Rügen liegt in der Ostsee und ist bekannt für ihre weißen Kreidefelsen.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
},
/* ---------------- JOUR 10 ---------------- */
{
  place: 'Le Cercle de la Meute', icon: '🐺', reward: { icon: '📿', name: 'Le Collier de la Meute' },
  focus: "Grand défi : mémoire et amitié franco-allemande · révision de tout le Territoire",
  intro: "Toute la meute s'est réunie en cercle. Vesper pose devant toi la boîte en fer, le livre du moine et le blason du Loup. Il reste une dernière épreuve pour devenir Cheffe de meute.",
  parts: [
    { dom: 'hist',
      lect: { title: 'La main tendue',
        s: ["Après deux guerres mondiales terribles, la France et l'Allemagne ont décidé de devenir amies.", "En 1963, le général de Gaulle et le chancelier Adenauer signent un traité d'amitié.", "La même année est créé l'Office franco-allemand pour la jeunesse, qui permet aux jeunes des deux pays de se rencontrer.", "En 1984, à Verdun, le président français François Mitterrand et le chancelier allemand Helmut Kohl se tiennent la main devant les tombes des soldats.", "Aujourd'hui, beaucoup d'enfants parlent les deux langues, comme toi.", "Vesper dit que Lucien et Agathe auraient aimé voir ça."],
        qs: [
          { q: 'Que font Mitterrand et Kohl à Verdun en 1984 ?', c: ['Ils se tiennent la main devant les tombes', 'Ils signent l\'armistice', 'Ils construisent un monument', 'Ils jouent du violoncelle'], a: 0, r: [3], e: "Ce geste, main dans la main à Verdun, est devenu un symbole de la réconciliation franco-allemande." },
          { q: 'À quoi sert l\'Office franco-allemand pour la jeunesse ?', c: ['À faire se rencontrer les jeunes des deux pays', 'À construire des tranchées', 'À fabriquer des obus', 'À choisir le roi'], a: 0, r: [2], e: "Depuis 1963, il organise des échanges, des voyages et des rencontres entre jeunes Français et Allemands." }
        ] },
      qs: [
        { t: 'qcm', q: 'Range ces événements du plus ancien au plus récent :', c: ['Jeanne d\'Arc libère Orléans, la bataille de Verdun, la main tendue de 1984', 'La bataille de Verdun, Jeanne d\'Arc libère Orléans, la main tendue de 1984', 'La main tendue de 1984, la bataille de Verdun, Jeanne d\'Arc libère Orléans', 'Jeanne d\'Arc libère Orléans, la main tendue de 1984, la bataille de Verdun'], a: 0, z: '1429, 1916, 1984.', e: "1429 (Orléans), 1916 (Verdun), 1984 (Mitterrand et Kohl)." },
        { t: 'qcm', q: 'Quel jour férié rappelle chaque année la fin de la Première Guerre mondiale ?', c: ['Le 11 novembre', 'Le 14 juillet', 'Le 1er mai', 'Le 25 décembre'], a: 0, z: 'C\'est la date de la dernière lettre de Lucien.', e: "Le 11 novembre est un jour férié. On se réunit devant les monuments aux morts." }
      ] },
    { dom: 'geo', qs: [
      { t: 'qcm', q: 'Révision : quel fleuve traverse Lyon et se jette dans la Méditerranée ?', c: ['Le Rhône', 'La Loire', 'La Seine', 'Le Rhin'], a: 0, z: 'Il prend sa source en Suisse.', e: "Le Rhône naît dans un glacier suisse, traverse Lyon et se jette dans la Méditerranée." },
      { t: 'qcm', q: 'Révision : Toulouse est la capitale de quelle région ?', c: ['L\'Occitanie', 'La Nouvelle-Aquitaine', 'La Bretagne', 'Le Grand Est'], a: 0, z: 'Bordeaux est la capitale de la région voisine.', e: "Toulouse est le chef-lieu de l'Occitanie. Bordeaux est celui de la Nouvelle-Aquitaine." },
      { t: 'qcm', q: 'Révision : quelles montagnes se trouvent à l\'est de la France, près de l\'Alsace ?', c: ['Les Vosges', 'Les Pyrénées', 'Le Massif central', 'Les Alpes'], a: 0, z: 'Elles sont proches de Strasbourg et de la Forêt-Noire.', e: "Les Vosges sont à l'est, face à la Forêt-Noire, de l'autre côté du Rhin." }
    ] },
    { dom: 'deu', lang: 'de',
      lect: { title: 'Das Rudel',
        s: ['Ein Wolfsrudel lebt wie eine Familie.', 'Die Eltern führen das Rudel und zeigen den jungen Wölfen, wie man jagt.', 'Die Wölfe heulen, um miteinander zu sprechen.', 'So wissen sie auch über große Entfernungen, wo die anderen sind.', 'Heute heult das ganze Rudel für Sarah.', 'Vesper sagt: „Du gehörst jetzt zu uns.“'],
        qs: [
          { q: 'Warum heulen die Wölfe?', c: ['Um miteinander zu sprechen', 'Weil sie traurig sind', 'Weil sie Hunger haben', 'Weil der Mond scheint'], a: 0, r: [2, 3], e: 'Wölfe heulen, um miteinander zu sprechen, auch über große Entfernungen.' },
          { q: 'Wer führt das Rudel?', c: ['Die Eltern', 'Die jungen Wölfe', 'Sarah', 'Der Fuchs'], a: 0, r: [1], e: 'Die Eltern führen das Rudel.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Schreib das Wort in der <b>Mehrzahl</b>.', pre: 'der Wolf → die', a: ['Wölfe'], z: 'Aus o wird ö, und am Ende kommt -e.', e: 'der Wolf, die Wölfe.' },
        { t: 'dictee', cs: true, say: 'Das Rudel heult in der Nacht.', a: ['Das Rudel heult in der Nacht'], z: 'heult schreibt man mit eu.', e: '„heulen“ mit eu, wie „Eule“. Rudel und Nacht sind Nomen.' }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Wiederholung: Welcher Wald liegt in Deutschland, gegenüber den Vogesen?', c: ['Der Schwarzwald', 'Der Wienerwald', 'Der Thüringer Wald', 'Der Bayerische Wald'], a: 0, z: 'Hier entspringt die Donau.', e: 'Der Schwarzwald liegt im Südwesten, auf der anderen Seite des Rheins.' },
      { t: 'qcm', q: 'Wiederholung: Wie heißt die Hauptstadt von Deutschland?', c: ['Berlin', 'Bonn', 'Frankfurt', 'Köln'], a: 0, z: 'Bonn war früher Hauptstadt, aber heute nicht mehr.', e: 'Berlin ist seit der Wiedervereinigung 1990 die Hauptstadt. Vorher war Bonn die Hauptstadt der Bundesrepublik.' }
    ] },
    { dom: 'tab', timed: true, gen: TAB10 }
  ]
}
]};
