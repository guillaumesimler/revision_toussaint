var CFG = {
  id: 'sarah3', name: 'Sarah', level: 'CM2', ui: 'de', noEclair: true,
  title: 'Über das stürmische Meer kamen die Vampire',
  tagline: 'Ein schwarzes Schiff, Menschen ohne Schatten und ein Logbuch, das tausend Jahre alt ist. Wolka braucht dich.',
  homeIcon: '🦇', revIcon: '⚓', collTitle: 'Die Seekiste',
  comp: { name: 'Wolka', icon: '🐺' },
  sections: ['les', 'ges', 'erd'],
  icons: { les: '📖', ges: '📜', erd: '🧭', points: '⚓' },
  sec: { les: 'Lesen', ges: 'Geschichte', erd: 'Erdkunde' },
  showExp: ['les', 'ges', 'erd'],
  siblings: [
    { href: 'sarah.html', key: 'revision-sarah-v1', icon: '🦇', label: 'Zurück zum Manoir des Ombres' },
    { href: 'sarah-meute.html', key: 'revision-sarah2-v1', icon: '🐺', label: 'Zurück zum Territoire de la Meute' }
  ],
  parentsText: "Une mission par jour, 15 à 20 minutes environ, entièrement en allemand : un chapitre de l'histoire avec ses questions et un petit exercice d'écriture (niveau Klasse 3), une page du journal de bord qui raconte l'histoire de l'Allemagne dans l'ordre, puis de la géographie de la côte allemande. Sarah n'a pas appris l'histoire allemande à l'école : le bouton « Auf Französisch » affiche la traduction des textes et des questions d'histoire. Il ne coûte aucun point et le jeu ne note pas son utilisation. Ce jeu est indépendant des deux autres : sa progression est enregistrée à part.",
  ranks: [{ min: 0, name: 'Schiffsjunge' }, { min: 3, name: 'Matrosin' }, { min: 6, name: 'Steuerfrau' }, { min: 10, name: 'Hüterin der Schatten' }],
  mapX: [200, 110, 270, 150, 285, 200, 105, 260, 150, 240],
  deco: [[340, 1100, '🌲', 28], [50, 1010, '🐺', 22], [355, 930, '⚓', 22], [40, 850, '🌊', 28], [350, 760, '🦭', 24], [50, 680, '⛈️', 26], [360, 590, '🌊', 30], [40, 510, '🚢', 24], [355, 420, '🌫️', 28], [45, 330, '🦇', 20], [350, 230, '🌊', 26], [60, 150, '🗼', 24], [330, 60, '🌕', 34], [90, 50, '🦇', 18]],
  particles: ['🌊', '🦇', '⚓', '✦', '🌙'],
  sounds: { type: 'sawtooth', ok: [330, 415, 494], ok2: [294, 370], wrong: [147, 139], win: [165, 220, 277, 330, 440] },
  lines: {
    hello: ['Du bist da! Nyx hat gesagt, dass du keine Angst vor der Nacht hast.', 'Schnell, Sarah! Heute Nacht sind wieder Schatten verschwunden.', 'Das Medaillon leuchtet. Das Schiff ist nicht mehr weit.'],
    idle: ['Ein Wolf bleibt ruhig, auch im Sturm.', 'Lies genau. Das Meer verzeiht keine Eile.', 'Nyx schläft kopfüber und denkt trotzdem nach.', 'Du schaffst das.', 'Riech die Antwort. Das hilft bei Wölfen.'],
    sec: { ges: 'Jetzt das Logbuch. Die Gräfin hat alles selbst gesehen.', erd: 'Erdkunde! Wir müssen die Küste kennen, wenn wir das Schiff finden wollen.' },
    ok: ['Richtig!', 'Genau. Die Wölfe sind stolz auf dich.', 'Stimmt. Sogar Nyx nickt.', 'Sehr gut!', 'Volle Fahrt voraus!', 'Perfekt.'],
    ok2: ['Gut gemacht, du hast nicht aufgegeben.', 'Beim zweiten Versuch. Das zählt auch.', 'Da ist die richtige Spur.'],
    wrong1: ['Falsche Spur. Schau dir die markierte Stelle an.', 'Fast. Lies noch einmal.', 'Noch nicht. Die Antwort ist ganz nah.'],
    wrong2: ['Hier ist die Antwort. Merk sie dir gut.', 'Nicht schlimm. Auch Seeleute verirren sich.', 'Diese Frage kommt in die Revanche.'],
    combo: ['Fünf in Folge! Das ganze Rudel heult für dich.', 'Du segelst vor dem Wind!', 'Nicht zu stoppen, wie eine Sturmflut.'],
    end3: ['Drei Sterne! Sogar die Gräfin wäre beeindruckt.', 'Drei Sterne! Nyx macht einen Salto.'],
    end2: ['Zwei Sterne. Eine gute Fahrt!', 'Zwei Sterne. Das Rudel vertraut dir.'],
    end1: ['Mission geschafft. Morgen segeln wir besser.', 'Geschafft! Die Revanche wartet auf dich.'],
    final: '🦇 Die Schatten sind zurück, und die Gräfin hat wieder einen eigenen Schatten. Der Sturm ist vorbei. Sarah ist jetzt die Hüterin der Schatten, und auf dem Meer fährt ein Schiff mit hellen Segeln.',
    allDone: '🦇 Alle zehn Orte sind geschafft. Spiel noch einmal für drei Sterne oder hol dir deine Revanche.',
    revIntro: 'Die falschen Antworten liegen noch vor Anker. Löse sie beim ersten Versuch, dann sind sie frei.',
    revEmpty: 'Der Hafen ist leer. Das Meer ist ruhig.',
    record: '🏆 Neuer Rekord!'
  }
};

var DATA = { days: [
/* ---------------- TAG 1 ---------------- */
{
  place: 'Der Brief aus der Lausitz', icon: '✉️', reward: { icon: '✉️', name: 'Wolkas Brief' },
  focus: "Lecture : la lettre de Wolka · Histoire : les Vikings et Haithabu · Géographie : les Länder de la côte",
  intro: 'Du hast Wolka geantwortet, und heute kommt ihre Antwort. Das Medaillon der Schatten leuchtet so hell wie noch nie. Nyx liest über deine Schulter mit. Dann lässt eine Möwe ein altes Buch vor Wolka fallen: ein Logbuch.',
  parts: [
    { dom: 'les', lang: 'de',
      lect: { title: 'Wolkas zweiter Brief',
        s: ['Liebe Sarah, danke für deinen Brief.', 'Hier stimmt etwas nicht.', 'Eine Möwe hat uns erzählt, dass nachts ein schwarzes Schiff vor der Küste fährt.', 'Es hat keine Lichter, und im Sturm macht es kein Geräusch.', 'In den Dörfern am Meer haben manche Menschen plötzlich keinen Schatten mehr.', 'Sie sind grau und sehr müde.', 'Du bist die Herrin der Schatten. Bitte komm schnell! Deine Wolka'],
        qs: [
          { q: 'Was erzählt die Möwe?', c: ['Ein schwarzes Schiff fährt nachts vor der Küste', 'Der Sturm ist vorbei', 'Die Wölfe sind am Meer', 'Das Medaillon ist weg'], a: 0, r: [2], e: 'Die Möwe hat von einem schwarzen Schiff erzählt.' },
          { q: 'Was ist mit den Menschen in den Dörfern passiert?', c: ['Sie haben keinen Schatten mehr', 'Sie sind weggezogen', 'Sie haben Fieber', 'Sie sind Fischer geworden'], a: 0, r: [4, 5], e: 'Sie haben keinen Schatten mehr. Darum sind sie grau und müde.' }
        ] },
      qs: [
        { t: 'dictee', cs: true, say: 'Das Schiff fährt in der Nacht.', a: ['Das Schiff fährt in der Nacht'], z: 'Schiff und Nacht sind Nomen. fährt schreibt man mit ä und h.', e: '„fährt“ kommt von „fahren“: ä und h. Schiff und Nacht schreibt man groß.' },
        { t: 'fill', q: 'Welcher Artikel passt?', s: '___ Möwe fliegt über das Meer.', c: ['Die', 'Der', 'Das'], a: 0, z: 'Man sagt: eine Möwe.', e: 'die Möwe, die Möwen.' }
      ] },
    { dom: 'ges', lang: 'de',
      lect: { title: 'Logbuch: Die Wikinger',
        fr: { title: 'Journal de bord : les Vikings', s: ["Que celui qui trouve ce livre lise mon histoire.", "Je m'appelle Ilsabe, je suis comtesse et j'ai plus de mille ans.", "Vers l'an 900, je vivais à Haithabu, un grand port dans le nord de l'Allemagne d'aujourd'hui.", "Là-bas vivaient des Vikings venus du Nord.", "Ils étaient bons marins et construisaient des bateaux longs et rapides.", "Ils n'étaient pas seulement des guerriers : beaucoup étaient aussi des marchands."] },
        s: ['Wer dieses Buch findet, soll meine Geschichte lesen.', 'Ich heiße Ilsabe, ich bin eine Gräfin und mehr als tausend Jahre alt.', 'Um das Jahr 900 lebte ich in Haithabu, einem großen Hafen im Norden des heutigen Deutschlands.', 'Dort wohnten Wikinger aus dem Norden.', 'Sie waren gute Seeleute und bauten lange, schnelle Schiffe.', 'Sie waren nicht nur Krieger: Viele waren auch Händler.'],
        qs: [
          { q: 'Was war Haithabu?', c: ['Ein großer Hafen', 'Eine Insel im Süden', 'Ein Wikingerkönig', 'Ein Schiff'], a: 0, r: [2], e: 'Haithabu war ein großer Hafen der Wikinger.', fr: { q: "Qu'était Haithabu ?", c: ['Un grand port', 'Une île du sud', 'Un roi viking', 'Un bateau'], e: 'Haithabu était un grand port viking.' } },
          { q: 'Was waren viele Wikinger außerdem?', c: ['Händler', 'Lehrer', 'Bäcker', 'Könige'], a: 0, r: [5], e: 'Viele Wikinger waren auch Händler.', fr: { q: 'Que faisaient beaucoup de Vikings, en plus de la guerre ?', c: ['Ils étaient marchands', 'Ils étaient professeurs', 'Ils étaient boulangers', 'Ils étaient rois'], e: 'Beaucoup de Vikings étaient aussi des marchands.' } }
        ] },
      qs: [
        { t: 'qcm', q: 'Woher kamen die Wikinger?', c: ['Aus Skandinavien, im Norden', 'Aus Italien', 'Aus Spanien', 'Aus Afrika'], a: 0, z: 'Dänemark, Schweden und Norwegen liegen dort.', e: 'Die Wikinger kamen aus Skandinavien: aus Dänemark, Schweden und Norwegen.', fr: { q: "D'où venaient les Vikings ?", c: ['De Scandinavie, au nord', "D'Italie", "D'Espagne", "D'Afrique"], z: 'Le Danemark, la Suède et la Norvège se trouvent là-bas.', e: 'Les Vikings venaient de Scandinavie : Danemark, Suède et Norvège.' } }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Welche zwei Meere liegen im Norden von Deutschland?', c: ['Die Nordsee und die Ostsee', 'Das Mittelmeer und die Nordsee', 'Der Atlantik und die Ostsee', 'Das Schwarze Meer und die Ostsee'], a: 0, z: 'Das erste Meer liegt im Nordwesten, das zweite im Nordosten.', e: 'Die Nordsee liegt im Nordwesten, die Ostsee im Nordosten.' },
      { t: 'qcm', q: 'Welches Bundesland liegt ganz im Norden, zwischen Nordsee und Ostsee?', c: ['Schleswig-Holstein', 'Bayern', 'Hessen', 'Sachsen'], a: 0, z: 'Es grenzt an Dänemark.', e: 'Schleswig-Holstein liegt zwischen den beiden Meeren. Haithabu lag dort.' },
      { t: 'qcm', q: 'In der Lausitz wohnt Wolka. Wo liegt die Lausitz?', c: ['Im Osten von Deutschland', 'Im Westen von Deutschland', 'An der Nordsee', 'In den Alpen'], a: 0, z: 'Nicht weit von Polen.', e: 'Die Lausitz liegt im Osten, nahe der Grenze zu Polen.' }
    ] }
  ]
},
/* ---------------- TAG 2 ---------------- */
{
  place: 'Die Elbe hinunter', icon: '🛶', reward: { icon: '🪶', name: 'Die Möwenfeder' },
  focus: "Lecture : Nyx soupçonnée · Histoire : la cogue et les débuts de la Hanse · Géographie : l'Elbe",
  intro: 'Wolka, Nyx und du steigt auf einen alten Lastkahn. Die Elbe bringt euch nach Norden. Ein Fischer schaut Nyx sehr böse an.',
  parts: [
    { dom: 'les', lang: 'de',
      lect: { title: 'Nyx hat ein Problem',
        s: ['Der Fischer zeigt mit dem Finger auf Nyx.', '„Eine Fledermaus!“, ruft er. „Sie ist bestimmt ein Vampir!“', 'Nyx hängt kopfüber an der Lampe und seufzt.', '„Ich fresse Mücken“, sagt sie. „Sehe ich wie eine Gräfin aus?“', 'Du erklärst dem Fischer, dass Fledermäuse nützliche Tiere sind.', 'Er glaubt dir nicht ganz, aber er gibt euch einen Korb mit Äpfeln.'],
        qs: [
          { q: 'Was glaubt der Fischer?', c: ['Dass Nyx ein Vampir ist', 'Dass Sarah ein Wolf ist', 'Dass der Kahn sinkt', 'Dass es regnen wird'], a: 0, r: [1], e: 'Der Fischer ruft, dass Nyx bestimmt ein Vampir ist.' },
          { q: 'Was frisst Nyx?', c: ['Mücken', 'Äpfel', 'Fische', 'Blumen'], a: 0, r: [3], e: 'Nyx sagt: „Ich fresse Mücken.“' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Schreib das Wort in der <b>Mehrzahl</b>.', pre: 'der Apfel → die', a: ['Äpfel'], z: 'Aus A wird Ä. Am Ende kommt nichts dazu.', e: 'der Apfel, die Äpfel.' },
        { t: 'type', cs: true, q: 'Setze das Verb ein (Gegenwart).', pre: 'Nyx (hängen) →', post: 'an der Lampe.', a: ['hängt'], z: 'Bei „sie“ endet das Verb auf -t.', e: 'ich hänge, du hängst, sie hängt.' }
      ] },
    { dom: 'ges', lang: 'de',
      lect: { title: 'Logbuch: Die Kogge',
        fr: { title: 'Journal de bord : la cogue', s: ["Je me souviens bien des années vers 1250.", "Les marchands avaient un nouveau bateau : la cogue.", "C'était un navire large en bois, avec un seul mât et une grande voile.", "Une cogue transportait beaucoup de marchandises, mais elle allait lentement.", "Les marchands de nombreuses villes ont décidé de s'entraider contre les pirates.", "C'est ainsi qu'est née une grande alliance : la Hanse."] },
        s: ['An die Jahre um 1250 erinnere ich mich gut.', 'Die Kaufleute hatten ein neues Schiff: die Kogge.', 'Sie war ein breites Schiff aus Holz, mit einem Mast und einem großen Segel.', 'Eine Kogge konnte viele Waren tragen, aber sie war langsam.', 'Die Kaufleute vieler Städte beschlossen, sich gegenseitig gegen Piraten zu helfen.', 'So entstand ein großer Bund: die Hanse.'],
        qs: [
          { q: 'Wie viele Masten hatte eine Kogge?', c: ['Einen', 'Zwei', 'Drei', 'Keinen'], a: 0, r: [2], e: 'Die Kogge hatte einen Mast und ein großes Segel.', fr: { q: 'Combien de mâts avait une cogue ?', c: ['Un', 'Deux', 'Trois', 'Aucun'], e: 'La cogue avait un seul mât et une grande voile.' } },
          { q: 'Gegen wen halfen sich die Kaufleute?', c: ['Gegen Piraten', 'Gegen die Wikinger', 'Für ein Fest', 'Für den Kaiser'], a: 0, r: [4], e: 'Sie halfen sich gegen Piraten. So entstand die Hanse.', fr: { q: "Contre qui les marchands s'entraidaient-ils ?", c: ['Contre les pirates', 'Contre les Vikings', 'Pour une fête', "Pour l'empereur"], e: "Ils s'entraidaient contre les pirates. C'est ainsi qu'est née la Hanse." } }
        ] },
      qs: [
        { t: 'qcm', q: 'Was war die Hanse?', c: ['Ein Bund von Kaufleuten und Städten', 'Eine Burg am Rhein', 'Ein König im Norden', 'Eine Krankheit'], a: 0, z: 'Das steht am Ende des Textes.', e: 'Die Hanse war ein Bund von Kaufleuten und Städten rund um Nordsee und Ostsee.', fr: { q: "Qu'était la Hanse ?", c: ['Une alliance de marchands et de villes', 'Un château sur le Rhin', 'Un roi du Nord', 'Une maladie'], z: 'La réponse est à la fin du texte.', e: 'La Hanse était une alliance de marchands et de villes autour de la mer du Nord et de la Baltique.' } }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'In welche Richtung fließt die Elbe durch Deutschland?', c: ['Nach Norden, zur Nordsee', 'Nach Süden, zu den Alpen', 'Nach Westen, zum Rhein', 'Nach Osten, nach Polen'], a: 0, z: 'Sie fließt zu einem Meer.', e: 'Die Elbe fließt nach Nordwesten und mündet in die Nordsee.' },
      { t: 'qcm', q: 'Welche Stadt liegt an der Elbe?', c: ['Dresden', 'Köln', 'München', 'Frankfurt'], a: 0, z: 'Köln liegt am Rhein, München an der Isar, Frankfurt am Main.', e: 'Dresden und Hamburg liegen an der Elbe.' },
      { t: 'qcm', q: 'Wo beginnt die Elbe?', c: ['In Tschechien', 'In Frankreich', 'In den Alpen', 'An der Ostsee'], a: 0, z: 'In einem Nachbarland, östlich von Bayern und südlich von Sachsen.', e: 'Die Elbe entspringt im Riesengebirge in Tschechien.' }
    ] }
  ]
},
/* ---------------- TAG 3 ---------------- */
{
  place: 'Der Hamburger Hafen', icon: '🏗️', reward: { icon: '🧂', name: 'Das Salz der Hanse' },
  focus: "Lecture : l'homme sans ombre · Histoire : le commerce de la Hanse · Géographie : Hambourg",
  intro: 'Hamburg! Überall Kräne, Schiffe und Möwen. Aber auf einem Steg sitzt ein alter Seemann in der Sonne, und unter ihm ist kein Schatten.',
  parts: [
    { dom: 'les', lang: 'de',
      lect: { title: 'Der Mann ohne Schatten',
        s: ['Der alte Seemann heißt Hinnerk.', 'Er sitzt in der Sonne, aber sein Schatten ist weg.', '„Es war vor drei Nächten“, erzählt er leise.', '„Ein kalter Wind kam vom Meer, und mein Schatten löste sich von meinen Füßen.“', '„Er glitt über das Wasser zu einem schwarzen Schiff.“', 'Seitdem ist Hinnerk immer müde und friert.', 'Dein Medaillon wird plötzlich warm in deiner Hand.'],
        qs: [
          { q: 'Wohin ist der Schatten von Hinnerk verschwunden?', c: ['Zu einem schwarzen Schiff', 'In den Keller', 'In den Wald', 'In die Sonne'], a: 0, r: [4], e: 'Der Schatten glitt über das Wasser zu einem schwarzen Schiff.' },
          { q: 'Wie fühlt sich Hinnerk seitdem?', c: ['Er ist müde und friert', 'Er ist fröhlich', 'Er hat Hunger', 'Er ist wütend'], a: 0, r: [5], e: 'Seitdem ist Hinnerk immer müde und friert.' }
        ] },
      qs: [
        { t: 'fill', q: 'Welches Wort ist richtig geschrieben?', s: 'Der alte Seemann ___ in der Sonne.', c: ['sitzt', 'sizt', 'sitst'], a: 0, z: 'sitzen schreibt man mit tz.', e: 'Nach einem kurzen Vokal schreibt man tz: sitzen, Katze, Platz.' },
        { t: 'dictee', cs: true, say: 'Der Wind kommt vom Meer.', a: ['Der Wind kommt vom Meer'], z: 'Meer schreibt man mit zwei e, und kommt mit zwei m.', e: '„Meer“ mit ee. „mehr“ mit h bedeutet etwas anderes: mehr Äpfel.' }
      ] },
    { dom: 'ges', lang: 'de',
      lect: { title: 'Logbuch: Salz und Hering',
        fr: { title: 'Journal de bord : le sel et le hareng', s: ["Pendant trois cents ans, la Hanse a été très puissante.", "Environ deux cents villes en faisaient partie, comme Hambourg, Brême et Lübeck.", "Les cogues transportaient du sel, du hareng, des fourrures et du drap.", "Le sel était très cher, car il permettait de conserver le poisson.", "Hambourg porte aujourd'hui encore le nom de « ville hanséatique ».", "Moi, je voyageais de nuit et je regardais les bateaux depuis le port."] },
        s: ['Dreihundert Jahre lang war die Hanse sehr mächtig.', 'Etwa zweihundert Städte gehörten dazu, zum Beispiel Hamburg, Bremen und Lübeck.', 'Die Koggen brachten Salz, Hering, Pelze und Stoffe.', 'Salz war sehr teuer, denn damit konnte man Fisch haltbar machen.', 'Hamburg heißt noch heute „Hansestadt“.', 'Ich reiste nachts und schaute vom Hafen aus den Schiffen zu.'],
        qs: [
          { q: 'Warum war Salz so wichtig?', c: ['Damit konnte man Fisch haltbar machen', 'Damit konnte man Schiffe bauen', 'Es war sehr süß', 'Es machte die Segel stark'], a: 0, r: [3], e: 'Mit Salz wurde Fisch haltbar. Es gab noch keine Kühlschränke.', fr: { q: 'Pourquoi le sel était-il si important ?', c: ['Il permettait de conserver le poisson', 'Il permettait de construire des bateaux', 'Il était très sucré', 'Il rendait les voiles solides'], e: "Le sel permettait de conserver le poisson. Il n'y avait pas encore de réfrigérateurs." } },
          { q: 'Welche Stadt gehörte zur Hanse?', c: ['Lübeck', 'München', 'Paris', 'Wien'], a: 0, r: [1], e: 'Hamburg, Bremen und Lübeck gehörten zur Hanse.', fr: { q: 'Quelle ville faisait partie de la Hanse ?', c: ['Lübeck', 'Munich', 'Paris', 'Vienne'], e: 'Hambourg, Brême et Lübeck faisaient partie de la Hanse.' } }
        ] },
      qs: [
        { t: 'qcm', q: 'Was bedeutet das HH auf Hamburger Autos?', c: ['Hansestadt Hamburg', 'Hoher Hafen', 'Haus Hamburg', 'Hallo Hamburg'], a: 0, z: 'Das Wort steht im Text.', e: 'HH bedeutet Hansestadt Hamburg. Auch HB für Bremen und HL für Lübeck erinnern an die Hanse.', fr: { q: 'Que signifie le HH sur les plaques des voitures de Hambourg ?', c: ['Ville hanséatique de Hambourg', 'Haut port', 'Maison de Hambourg', 'Bonjour Hambourg'], z: 'Le mot se trouve dans le texte.', e: "HH veut dire Hansestadt Hamburg. HB pour Brême et HL pour Lübeck rappellent aussi la Hanse." } }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Hamburg ist zugleich eine Stadt und...', c: ['ein Bundesland', 'ein Land wie Österreich', 'eine Insel', 'ein Berg'], a: 0, z: 'Bremen und Berlin sind das auch.', e: 'Hamburg ist ein Stadtstaat, also Stadt und Bundesland zugleich.' },
      { t: 'qcm', q: 'Was steht in der Speicherstadt in Hamburg?', c: ['Alte Lagerhäuser aus rotem Backstein', 'Eine große Burg', 'Ein Vulkan', 'Der Kölner Dom'], a: 0, z: 'Speicher sind Häuser für Waren.', e: 'In den alten Backsteinhäusern der Speicherstadt lagerte man Kaffee, Tee und Gewürze.' },
      { t: 'qcm', q: 'Hamburg ist die...', c: ['zweitgrößte Stadt Deutschlands', 'größte Stadt der Welt', 'Hauptstadt von Deutschland', 'kleinste Stadt Deutschlands'], a: 0, z: 'Nur Berlin ist größer.', e: 'Nach Berlin ist Hamburg die zweitgrößte Stadt Deutschlands.' }
    ] }
  ]
},
/* ---------------- TAG 4 ---------------- */
{
  place: 'Das Wattenmeer', icon: '🦭', reward: { icon: '🐚', name: 'Die Wattmuschel' },
  focus: "Lecture : les traces dans le Watt · Histoire : la peste noire, vers 1350 · Géographie : marée et Wattenmeer",
  intro: 'Das Meer ist weg! Bei Ebbe läuft ihr über den nassen Meeresboden. Vesper hätte diesen Geruch geliebt. Mitten im Watt sieht Wolka seltsame Spuren.',
  parts: [
    { dom: 'les', lang: 'de',
      lect: { title: 'Spuren im Schlick',
        s: ['Bei Ebbe zieht sich das Meer weit zurück.', 'Wolka schnuppert und bleibt stehen.', 'Im Schlick sind Fußspuren von vielen Menschen.', 'Sie führen vom Wasser zum Dorf und wieder zurück.', 'Die Spuren riechen nach kaltem Meer und altem Holz.', 'Ein Seehund schaut euch neugierig an.', '„Schnell zurück“, sagt Wolka. „Die Flut kommt.“'],
        qs: [
          { q: 'Wohin führen die Spuren?', c: ['Vom Wasser zum Dorf und zurück', 'In den Wald', 'Nur ins Meer', 'Zu einem Berg'], a: 0, r: [3], e: 'Die Spuren führen vom Wasser zum Dorf und wieder zurück.' },
          { q: 'Warum will Wolka schnell zurück?', c: ['Weil die Flut kommt', 'Weil sie Hunger hat', 'Weil der Seehund böse ist', 'Weil es schneit'], a: 0, r: [6], e: 'Wolka sagt: Die Flut kommt.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Schreib das Wort in der <b>Mehrzahl</b>.', pre: 'die Spur → die', a: ['Spuren'], z: 'Viele Nomen mit „die“ bekommen -en.', e: 'die Spur, die Spuren.' },
        { t: 'type', cs: true, q: 'Schreib das Verb in der <b>Vergangenheit</b> (Präteritum).', pre: 'Wolka (schnuppern) →', post: 'im Schlick.', a: ['schnupperte'], z: 'Regelmäßiges Verb: Stamm + -te.', e: 'schnuppern → sie schnupperte.' }
      ] },
    { dom: 'ges', lang: 'de',
      lect: { title: 'Logbuch: Der Schwarze Tod',
        fr: { title: 'Journal de bord : la peste noire', s: ["Vers 1350, une terrible maladie est arrivée en Europe : la peste.", "On l'appelait la mort noire.", "Elle arrivait avec les bateaux, car les puces des rats transmettaient le microbe.", "À cette époque, personne ne le savait.", "Environ un habitant sur trois en Europe en est mort.", "Les gens avaient peur et, sans aucune raison, accusaient d'autres personnes, surtout les Juifs.", "À cette époque, la peur était plus forte que la raison."] },
        s: ['Um 1350 kam eine schreckliche Krankheit nach Europa: die Pest.', 'Man nannte sie den Schwarzen Tod.', 'Sie kam mit den Schiffen, denn die Flöhe der Ratten übertrugen die Krankheit.', 'Das wusste damals niemand.', 'Etwa jeder dritte Mensch in Europa starb daran.', 'Die Menschen hatten Angst und gaben ohne Grund anderen die Schuld, vor allem den Juden.', 'Die Angst war damals stärker als der Verstand.'],
        qs: [
          { q: 'Wie kam die Pest nach Europa?', c: ['Mit den Schiffen', 'Mit dem Wind', 'Mit den Vögeln', 'Mit dem Regen'], a: 0, r: [2], e: 'Sie kam mit den Schiffen. Ratten und ihre Flöhe waren an Bord.', fr: { q: 'Comment la peste est-elle arrivée en Europe ?', c: ['Avec les bateaux', 'Avec le vent', 'Avec les oiseaux', 'Avec la pluie'], e: 'Elle est arrivée avec les bateaux. Les rats et leurs puces étaient à bord.' } },
          { q: 'Wem gaben die Menschen die Schuld?', c: ['Vor allem den Juden', 'Den Tieren im Wald', 'Dem König', 'Dem Wetter'], a: 0, r: [5], e: 'Die Menschen hatten Angst und gaben ohne Grund vor allem den Juden die Schuld. Das war sehr ungerecht.', fr: { q: 'Qui les gens accusaient-ils ?', c: ['Surtout les Juifs', 'Les animaux de la forêt', 'Le roi', 'Le temps'], e: 'Les gens avaient peur et accusaient sans raison surtout les Juifs. C\'était très injuste.' } }
        ] },
      qs: [
        { t: 'qcm', q: 'Wie viele Menschen in Europa starben ungefähr an der Pest?', c: ['Jeder dritte', 'Jeder hundertste', 'Niemand', 'Alle'], a: 0, z: 'Lies den Satz mit dem Wort „dritte“.', e: 'Etwa ein Drittel der Menschen in Europa starb um 1350 an der Pest.', fr: { q: "Combien de personnes en Europe sont mortes de la peste, environ ?", c: ['Une sur trois', 'Une sur cent', 'Personne', 'Tout le monde'], z: 'Le mot allemand « dritte » veut dire « troisième ».', e: "Environ un tiers des habitants de l'Europe est mort de la peste vers 1350." } }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Wie heißt es, wenn das Meer sich zurückzieht?', c: ['Ebbe', 'Flut', 'Welle', 'Sturm'], a: 0, z: 'Das Gegenteil von Flut.', e: 'Bei Ebbe zieht sich das Meer zurück, bei Flut kommt es wieder.' },
      { t: 'qcm', q: 'Wie lange dauert es ungefähr von Ebbe bis Flut?', c: ['Etwa sechs Stunden', 'Eine Minute', 'Eine Woche', 'Einen Monat'], a: 0, z: 'Zweimal am Tag kommt die Flut.', e: 'Etwa alle sechs Stunden wechseln sich Ebbe und Flut ab.' },
      { t: 'qcm', q: 'Welches Tier lebt im Wattenmeer?', c: ['Der Seehund', 'Der Braunbär', 'Das Kamel', 'Die Gämse'], a: 0, z: 'Du hast es gerade im Text getroffen.', e: 'Seehunde liegen auf den Sandbänken des Wattenmeers. Es ist ein Weltnaturerbe.' }
    ] }
  ]
},
/* ---------------- TAG 5 ---------------- */
{
  place: 'Helgoland', icon: '🪨', reward: { icon: '🏴‍☠️', name: 'Störtebekers Münze' },
  focus: "Lecture : le navire aperçu · Histoire : Störtebeker, 1401 · Géographie : les îles de la mer du Nord",
  intro: 'Mit der Fähre fahrt ihr nach Helgoland, zur roten Felseninsel mitten in der Nordsee. Ein Sturm zieht auf. Von hier oben sieht man weit über das Meer.',
  parts: [
    { dom: 'les', lang: 'de',
      lect: { title: 'Die Nachtkogge',
        s: ['Der Wind heult um die roten Felsen.', 'Du stehst ganz oben und hältst deine Mütze fest.', 'Da zeigt Nyx mit dem Flügel auf das Meer.', 'Zwischen den hohen Wellen fährt eine alte, schwarze Kogge.', 'Das Segel ist zerrissen, aber das Schiff fährt schnell gegen den Wind.', 'Am Heck steht eine große Frau in einem langen Mantel.', 'Sie hebt den Kopf und schaut genau zu dir hinauf.'],
        qs: [
          { q: 'Was ist seltsam an dem Schiff?', c: ['Es fährt schnell gegen den Wind', 'Es ist ganz neu', 'Es hat einen Motor', 'Es ist aus Glas'], a: 0, r: [4], e: 'Das Segel ist zerrissen, und trotzdem fährt das Schiff schnell gegen den Wind.' },
          { q: 'Wer steht am Heck?', c: ['Eine große Frau im Mantel', 'Ein alter Seemann', 'Ein Wolf', 'Ein kleines Kind'], a: 0, r: [5], e: 'Am Heck steht eine große Frau in einem langen Mantel.' }
        ] },
      qs: [
        { t: 'dictee', cs: true, say: 'Die Wellen sind sehr hoch.', a: ['Die Wellen sind sehr hoch'], z: 'Wellen hat zwei l. sehr schreibt man mit h.', e: '„Wellen“ ist ein Nomen, also groß, mit ll. „sehr“ und „hoch“ schreibt man klein.' },
        { t: 'fill', q: 'Welches Wort passt?', s: 'Du hältst ___ Mütze fest.', c: ['deine', 'dein', 'deinen'], a: 0, z: 'Mütze ist weiblich: die Mütze.', e: 'die Mütze, also: deine Mütze.' }
      ] },
    { dom: 'ges', lang: 'de',
      lect: { title: 'Logbuch: Klaus Störtebeker',
        fr: { title: 'Journal de bord : Klaus Störtebeker', s: ["Vers 1400, un pirate était célèbre sur la mer du Nord et la Baltique : Klaus Störtebeker.", "Avec ses hommes, il attaquait les cogues de la Hanse.", "Selon la légende, il partageait le butin à parts égales.", "C'est pourquoi ses hommes s'appelaient les Likedeeler, « ceux qui partagent à égalité ».", "En 1401, les bateaux de Hambourg l'ont capturé près d'Héligoland.", "Il a été exécuté à Hambourg.", "Je l'ai vu une fois : il riait même dans la tempête."] },
        s: ['Um 1400 war ein Pirat auf Nordsee und Ostsee berühmt: Klaus Störtebeker.', 'Mit seinen Männern überfiel er die Koggen der Hanse.', 'Die Legende sagt, dass er die Beute gerecht teilte.', 'Darum hießen seine Männer Likedeeler, das heißt „Gleichteiler“.', '1401 nahmen ihn Schiffe aus Hamburg bei Helgoland gefangen.', 'Er wurde in Hamburg hingerichtet.', 'Ich sah ihn einmal: Er lachte sogar im Sturm.'],
        qs: [
          { q: 'Was bedeutet das Wort Likedeeler?', c: ['Gleichteiler', 'Seeräuber', 'Schiffsbauer', 'Sturmfahrer'], a: 0, r: [3], e: 'Die Likedeeler teilten die Beute gleich auf.', fr: { q: 'Que veut dire le mot Likedeeler ?', c: ['Ceux qui partagent à égalité', 'Les pirates', 'Les constructeurs de bateaux', 'Ceux qui naviguent dans la tempête'], e: 'Les Likedeeler partageaient le butin à parts égales.' } },
          { q: 'Wo wurde Störtebeker gefangen genommen?', c: ['Bei Helgoland', 'In Berlin', 'Auf Rügen', 'In Köln'], a: 0, r: [4], e: 'Hamburger Schiffe fingen ihn 1401 bei Helgoland.', fr: { q: 'Où Störtebeker a-t-il été capturé ?', c: ["Près d'Héligoland", 'À Berlin', 'À Rügen', 'À Cologne'], e: "Des bateaux de Hambourg l'ont capturé en 1401 près d'Héligoland." } }
        ] },
      qs: [
        { t: 'qcm', q: 'Wen griff Störtebeker an?', c: ['Die Koggen der Hanse', 'Die Burgen am Rhein', 'Die Wikinger', 'Die Stadt Paris'], a: 0, z: 'Das sind die Schiffe der Kaufleute.', e: 'Störtebeker überfiel die Handelsschiffe der Hanse.', fr: { q: 'Qui Störtebeker attaquait-il ?', c: ['Les cogues de la Hanse', 'Les châteaux du Rhin', 'Les Vikings', 'La ville de Paris'], z: 'Ce sont les bateaux des marchands.', e: 'Störtebeker attaquait les navires de commerce de la Hanse.' } }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'In welchem Meer liegt Helgoland?', c: ['In der Nordsee', 'In der Ostsee', 'Im Bodensee', 'Im Mittelmeer'], a: 0, z: 'Das steht in der Einleitung.', e: 'Helgoland liegt mitten in der Nordsee.' },
      { t: 'qcm', q: 'Welche Farbe haben die Felsen von Helgoland?', c: ['Rot', 'Weiß', 'Schwarz', 'Grün'], a: 0, z: 'Die Kreidefelsen von Rügen sind weiß, diese nicht.', e: 'Die Felsen von Helgoland sind aus rotem Sandstein. Der bekannteste heißt Lange Anna.' },
      { t: 'qcm', q: 'Welche Insel ist die größte deutsche Insel in der Nordsee?', c: ['Sylt', 'Rügen', 'Usedom', 'Mainau'], a: 0, z: 'Rügen und Usedom liegen in der Ostsee.', e: 'Sylt ist die größte Nordseeinsel Deutschlands. Sie gehört zu Schleswig-Holstein.' }
    ] }
  ]
},
/* ---------------- TAG 6 ---------------- */
{
  place: 'Der Deich von Bremerhaven', icon: '🌊', reward: { icon: '🧳', name: 'Der Koffer der Auswanderer' },
  focus: "Lecture : la tempête sur la digue · Histoire : les émigrants vers l'Amérique · Géographie : Brême, la Weser, les digues",
  intro: 'Die Sturmflut drückt gegen den Deich. Die ganze Stadt hilft mit Sandsäcken. Auf dem Deich steht plötzlich die Frau im Mantel.',
  parts: [
    { dom: 'les', lang: 'de',
      lect: { title: 'Die Frau auf dem Deich',
        s: ['Du trägst Sandsäcke, bis deine Arme wehtun.', 'Wolka gräbt mit den Pfoten.', 'Dann siehst du die Frau im Mantel.', 'Sie hilft auch, und sie ist sehr stark.', 'Als ein Blitz über den Himmel zuckt, fällt Licht auf den Deich.', 'Alle Menschen haben einen Schatten, nur sie nicht.', 'Sie schaut dein Medaillon an und sagt leise: „Das gehört dir nicht allein.“', 'Dann ist sie verschwunden.'],
        qs: [
          { q: 'Was merkst du beim Blitz?', c: ['Die Frau hat keinen Schatten', 'Die Frau ist Hinnerk', 'Der Deich ist kaputt', 'Wolka ist weg'], a: 0, r: [5], e: 'Alle haben einen Schatten, nur die Frau nicht.' },
          { q: 'Was sagt die Frau?', c: ['„Das gehört dir nicht allein.“', '„Geh nach Hause.“', '„Ich habe Hunger.“', '„Wo ist mein Schiff?“'], a: 0, r: [6], e: 'Sie schaut das Medaillon an und sagt: „Das gehört dir nicht allein.“' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Schreib das Wort in der <b>Mehrzahl</b>.', pre: 'der Sack → die', a: ['Säcke'], z: 'Aus a wird ä, und am Ende kommt -e.', e: 'der Sack, die Säcke.' },
        { t: 'fill', q: 'Welches Wort ist richtig geschrieben?', s: 'Ein ___ zuckt über den Himmel.', c: ['Blitz', 'Blits', 'Bliz'], a: 0, z: 'Nach einem kurzen Vokal schreibt man tz.', e: 'der Blitz, mit tz. Wie sitzen und Katze.' }
      ] },
    { dom: 'ges', lang: 'de',
      lect: { title: 'Logbuch: Die Auswanderer',
        fr: { title: 'Journal de bord : les émigrants', s: ["Vers 1850, beaucoup d'Allemands ont quitté leur pays.", "Ils étaient pauvres et n'avaient pas de travail ou de terre.", "À Bremerhaven, ils montaient sur de grands bateaux pour l'Amérique.", "Des millions de personnes sont parties ainsi.", "En bateau à voiles, le voyage jusqu'à New York durait environ six semaines.", "Beaucoup n'ont jamais revu leur famille.", "Moi, je restais sur le quai, et personne ne me disait au revoir."] },
        s: ['Um 1850 verließen viele Deutsche ihre Heimat.', 'Sie waren arm und hatten keine Arbeit oder kein Land.', 'In Bremerhaven stiegen sie auf große Schiffe nach Amerika.', 'Millionen Menschen gingen auf diese Reise.', 'Mit dem Segelschiff dauerte die Fahrt nach New York etwa sechs Wochen.', 'Viele sahen ihre Familie nie wieder.', 'Ich blieb am Kai stehen, und niemand sagte mir auf Wiedersehen.'],
        qs: [
          { q: 'Warum gingen viele Deutsche nach Amerika?', c: ['Sie waren arm', 'Sie wollten Urlaub machen', 'Sie mochten das Meer', 'Der Kaiser schickte sie'], a: 0, r: [1], e: 'Sie waren arm und hatten keine Arbeit oder kein Land.', fr: { q: "Pourquoi beaucoup d'Allemands sont-ils partis en Amérique ?", c: ['Ils étaient pauvres', 'Ils voulaient partir en vacances', "Ils aimaient la mer", "L'empereur les y envoyait"], e: "Ils étaient pauvres et n'avaient pas de travail ou de terre." } },
          { q: 'Wie lange dauerte die Fahrt mit dem Segelschiff?', c: ['Etwa sechs Wochen', 'Zwei Tage', 'Ein Jahr', 'Sechs Stunden'], a: 0, r: [4], e: 'Die Fahrt dauerte etwa sechs Wochen.', fr: { q: 'Combien de temps durait le voyage en bateau à voiles ?', c: ['Environ six semaines', 'Deux jours', 'Un an', 'Six heures'], e: 'Le voyage durait environ six semaines.' } }
        ] },
      qs: [
        { t: 'qcm', q: 'Was fühlt die Gräfin am Ende des Textes?', c: ['Sie ist einsam', 'Sie ist fröhlich', 'Sie ist müde vom Tanzen', 'Sie hat Hunger'], a: 0, z: 'Niemand sagt ihr auf Wiedersehen.', e: 'Niemand sagt ihr auf Wiedersehen: Die Gräfin ist einsam.', fr: { q: 'Que ressent la comtesse à la fin du texte ?', c: ['Elle se sent seule', 'Elle est joyeuse', 'Elle est fatiguée de danser', 'Elle a faim'], z: 'Personne ne lui dit au revoir.', e: 'Personne ne lui dit au revoir : la comtesse se sent seule.' } }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Wozu dient ein Deich?', c: ['Er schützt das Land vor dem Meer', 'Er ist eine Straße für Schiffe', 'Er macht den Wind stärker', 'Er ist ein Berg zum Skifahren'], a: 0, z: 'Heute hat er die Stadt vor der Sturmflut gerettet.', e: 'Der Deich ist ein hoher Wall aus Erde und Gras. Er schützt das Land vor dem Wasser.' },
      { t: 'qcm', q: 'An welchem Fluss liegen Bremen und Bremerhaven?', c: ['An der Weser', 'An der Donau', 'Am Rhein', 'An der Isar'], a: 0, z: 'Sein Name beginnt mit W.', e: 'Die Weser fließt durch Bremen und mündet bei Bremerhaven in die Nordsee.' },
      { t: 'qcm', q: 'Das Bundesland Bremen ist das kleinste Bundesland. Es besteht aus...', c: ['zwei Städten: Bremen und Bremerhaven', 'einer Insel', 'nur einem Hafen', 'zehn großen Städten'], a: 0, z: 'Eine der Städte hat den Namen des Bundeslandes im Namen.', e: 'Zum Bundesland Bremen gehören die Städte Bremen und Bremerhaven.' }
    ] }
  ]
},
/* ---------------- TAG 7 ---------------- */
{
  place: 'Der Nord-Ostsee-Kanal', icon: '⚓', reward: { icon: '🫙', name: 'Das Schattenglas' },
  focus: "Lecture : Nyx prouve son innocence · Histoire : l'Empire et le canal, 1895 · Géographie : Kiel et le Schleswig-Holstein",
  intro: 'Die Nachtkogge fährt durch den Kanal zur Ostsee. Ihr fahrt mit einem Lotsenboot hinterher. Nyx hat eine Idee, und diesmal ist sie gar nicht müde.',
  parts: [
    { dom: 'les', lang: 'de',
      lect: { title: 'Nyx an Bord',
        s: ['In der Schleuse muss die Nachtkogge warten.', 'Nyx fliegt lautlos auf das Deck.', 'Nach zehn Minuten kommt sie zurück und hält ein kleines Glas in den Krallen.', 'In dem Glas bewegt sich etwas Dunkles.', '„Das ist der Schatten von Hinnerk“, sagt Nyx stolz.', 'Sie öffnet das Glas, und der Schatten fliegt nach Süden.', 'Am nächsten Tag steht in der Zeitung, dass eine Fledermaus Hamburg gerettet hat.'],
        qs: [
          { q: 'Was hält Nyx in den Krallen?', c: ['Ein kleines Glas', 'Einen Brief', 'Einen Fisch', 'Eine Münze'], a: 0, r: [2], e: 'Nyx bringt ein kleines Glas zurück.' },
          { q: 'Was steht am nächsten Tag in der Zeitung?', c: ['Eine Fledermaus hat Hamburg gerettet', 'Ein Wolf ist im Hafen', 'Die Elbe ist trocken', 'Das Schiff ist gesunken'], a: 0, r: [6], e: 'Nyx ist jetzt eine Heldin. Der Fischer sollte Zeitung lesen.' }
        ] },
      qs: [
        { t: 'dictee', cs: true, say: 'Die Fledermaus fliegt lautlos.', a: ['Die Fledermaus fliegt lautlos'], z: 'fliegt schreibt man mit ie, und Fledermaus ist ein Nomen.', e: '„fliegen“ schreibt man mit ie. „lautlos“ ist ein Adjektiv, also klein.' },
        { t: 'type', cs: true, q: 'Schreib das Verb in der <b>Vergangenheit</b> (Präteritum).', pre: 'Nyx (fliegen) →', post: 'auf das Deck.', a: ['flog'], z: 'fliegen ist unregelmäßig. Das ie wird zu o.', e: 'fliegen → sie flog. Wie ziehen → sie zog.' }
      ] },
    { dom: 'ges', lang: 'de',
      lect: { title: 'Logbuch: Der Kaiser und der Kanal',
        fr: { title: "Journal de bord : l'empereur et le canal", s: ["En 1871, de nombreux petits États allemands sont devenus un seul pays : l'Empire allemand.", "Son chef était un empereur, le Kaiser.", "Beaucoup de nouvelles usines et de chemins de fer ont vu le jour.", "En 1895, un grand canal a été ouvert entre la mer du Nord et la Baltique.", "Avant, les bateaux devaient contourner tout le Danemark.", "J'ai été l'une des premières à le traverser de nuit, sans payer."] },
        s: ['Im Jahr 1871 wurden viele kleine deutsche Staaten zu einem Land: dem Deutschen Reich.', 'An seiner Spitze stand ein Kaiser.', 'Es entstanden viele neue Fabriken und Eisenbahnen.', '1895 wurde ein großer Kanal zwischen Nordsee und Ostsee eröffnet.', 'Vorher mussten die Schiffe um ganz Dänemark herumfahren.', 'Ich fuhr als eine der Ersten nachts hindurch, ohne zu bezahlen.'],
        qs: [
          { q: 'Was geschah 1871?', c: ['Viele kleine Staaten wurden ein Land', 'Der Kanal wurde gebaut', 'Die Hanse begann', 'Die Wikinger kamen'], a: 0, r: [0], e: '1871 entstand das Deutsche Reich aus vielen kleinen Staaten.', fr: { q: "Que s'est-il passé en 1871 ?", c: ['De nombreux petits États sont devenus un seul pays', 'Le canal a été construit', 'La Hanse a commencé', 'Les Vikings sont arrivés'], e: "En 1871, l'Empire allemand est né de nombreux petits États." } },
          { q: 'Warum war der Kanal so nützlich?', c: ['Die Schiffe mussten nicht mehr um Dänemark fahren', 'Man konnte dort baden', 'Er brachte Wasser nach Berlin', 'Er schützte vor Piraten'], a: 0, r: [4], e: 'Die Schiffe sparen den langen Weg um Dänemark.', fr: { q: 'Pourquoi le canal était-il si utile ?', c: ['Les bateaux ne devaient plus contourner le Danemark', "On pouvait s'y baigner", "Il apportait de l'eau à Berlin", 'Il protégeait des pirates'], e: 'Les bateaux évitent le long détour par le Danemark.' } }
        ] },
      qs: [
        { t: 'qcm', q: 'Welches Meer verbindet der Kanal mit der Nordsee?', c: ['Die Ostsee', 'Das Mittelmeer', 'Den Atlantik', 'Das Schwarze Meer'], a: 0, z: 'Der Name steht im Wort Nord-Ostsee-Kanal.', e: 'Der Nord-Ostsee-Kanal verbindet die Nordsee mit der Ostsee.', fr: { q: 'Quelle mer le canal relie-t-il à la mer du Nord ?', c: ['La mer Baltique', 'La Méditerranée', "L'Atlantique", 'La mer Noire'], z: 'Le nom se trouve dans le mot Nord-Ostsee-Kanal.', e: 'Le canal relie la mer du Nord à la mer Baltique, qui se dit Ostsee en allemand.' } }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Wie heißt die Hauptstadt von Schleswig-Holstein?', c: ['Kiel', 'Hamburg', 'Bremen', 'Hannover'], a: 0, z: 'Sie liegt an der Ostsee, am Ende des Kanals.', e: 'Kiel ist die Hauptstadt von Schleswig-Holstein.' },
      { t: 'qcm', q: 'Wozu dient eine Schleuse?', c: ['Sie hebt oder senkt Schiffe zwischen zwei Wasserhöhen', 'Sie repariert Segel', 'Sie zeigt den Weg bei Nacht', 'Sie fängt Fische'], a: 0, z: 'Die Tore gehen zu, dann ändert sich die Wasserhöhe.', e: 'In der Schleuse steigt oder sinkt das Wasser, bis das Schiff weiterfahren kann.' },
      { t: 'qcm', q: 'Welches Land liegt nördlich von Schleswig-Holstein?', c: ['Dänemark', 'Polen', 'Österreich', 'Frankreich'], a: 0, z: 'Die Wikinger kamen auch von dort.', e: 'Dänemark ist der nördliche Nachbar Deutschlands.' }
    ] }
  ]
},
/* ---------------- TAG 8 ---------------- */
{
  place: 'Lübeck', icon: '🏰', reward: { icon: '🗝️', name: 'Der Schlüssel des Speichers' },
  focus: "Lecture : le grenier aux ombres · Histoire : l'Allemagne divisée et le Mur, 1961 · Géographie : Lübeck et la Baltique",
  intro: 'Durch das Holstentor kommt ihr nach Lübeck, in die alte Königin der Hanse. Das Medaillon zieht dich zu einem Speicher am Fluss. Es riecht nach Marzipan und nach Meer.',
  parts: [
    { dom: 'les', lang: 'de',
      lect: { title: 'Der Speicher der Schatten',
        s: ['Die Tür des Speichers ist nicht verschlossen.', 'Drinnen stehen hunderte Gläser in langen Regalen.', 'In jedem Glas bewegt sich ein Schatten.', 'Du findest auch einen Tisch mit einer alten Karte.', 'Darauf ist ein Weg eingezeichnet: von hier bis zu deinem Manoir.', 'Unter der Karte liegt ein Zettel: „Nicht für uns. Nur für die Reise. Bald sind unsere eigenen wieder da.“', 'Wolka knurrt leise. „Sie sammeln die Schatten nur auf Zeit“, sagt sie.'],
        qs: [
          { q: 'Was steht in den Regalen?', c: ['Hunderte Gläser mit Schatten', 'Alte Bücher', 'Marzipan', 'Karten'], a: 0, r: [1, 2], e: 'In langen Regalen stehen Gläser, und in jedem bewegt sich ein Schatten.' },
          { q: 'Wohin führt der Weg auf der Karte?', c: ['Zu deinem Manoir', 'Nach Amerika', 'Nach Hamburg', 'Nach Wien'], a: 0, r: [4], e: 'Der Weg führt von Lübeck bis zum Manoir.' }
        ] },
      qs: [
        { t: 'type', cs: true, q: 'Schreib das Wort in der <b>Mehrzahl</b>.', pre: 'das Glas → die', a: ['Gläser'], z: 'Aus a wird ä, und am Ende kommt -er.', e: 'das Glas, die Gläser.' },
        { t: 'fill', q: 'Welcher Artikel passt?', s: 'Wolka öffnet ___ Tür.', c: ['die', 'der', 'das'], a: 0, z: 'Man sagt: eine Tür.', e: 'die Tür. Hier ist das Wort im Akkusativ, aber „die“ bleibt „die“.' }
      ] },
    { dom: 'ges', lang: 'de',
      lect: { title: 'Logbuch: Die Mauer',
        fr: { title: 'Journal de bord : le Mur', s: ["Après la Seconde Guerre mondiale, l'Allemagne a été coupée en deux en 1949.", "À l'ouest, la République fédérale ; à l'est, la RDA.", "Lübeck était à l'ouest, juste à côté de la frontière.", "En 1961, la RDA a construit un mur à travers Berlin.", "Du jour au lendemain, des familles ont été séparées.", "Sur la Baltique, j'ai vu des bateaux de gardes-frontières chercher des gens qui fuyaient.", "Je sais ce que cela veut dire, ne pas pouvoir rentrer chez soi."] },
        s: ['Nach dem Zweiten Weltkrieg wurde Deutschland 1949 in zwei Staaten geteilt.', 'Im Westen lag die Bundesrepublik, im Osten die DDR.', 'Lübeck lag im Westen, direkt an der Grenze.', '1961 baute die DDR eine Mauer quer durch Berlin.', 'Von einem Tag auf den anderen wurden Familien getrennt.', 'Auf der Ostsee sah ich Grenzboote, die Menschen auf der Flucht suchten.', 'Ich weiß, was es heißt, nicht nach Hause zu können.'],
        qs: [
          { q: 'Was baute die DDR 1961?', c: ['Eine Mauer durch Berlin', 'Einen Kanal', 'Einen Dom', 'Einen Hafen'], a: 0, r: [3], e: '1961 baute die DDR die Berliner Mauer.', fr: { q: "Qu'a construit la RDA en 1961 ?", c: ['Un mur à travers Berlin', 'Un canal', 'Une cathédrale', 'Un port'], e: 'En 1961, la RDA a construit le mur de Berlin.' } },
          { q: 'Was passierte mit vielen Familien?', c: ['Sie wurden getrennt', 'Sie zogen ans Meer', 'Sie gingen nach Amerika', 'Sie bauten Schiffe'], a: 0, r: [4], e: 'Von einem Tag auf den anderen wurden Familien getrennt.', fr: { q: 'Que s\'est-il passé pour beaucoup de familles ?', c: ['Elles ont été séparées', 'Elles sont parties à la mer', 'Elles sont parties en Amérique', 'Elles ont construit des bateaux'], e: 'Du jour au lendemain, des familles ont été séparées.' } }
        ] },
      qs: [
        { t: 'qcm', q: 'In welchem Teil von Deutschland lag die DDR?', c: ['Im Osten', 'Im Westen', 'Im Süden', 'Im Norden'], a: 0, z: 'Das steht im zweiten Satz.', e: 'Die DDR lag im Osten, die Bundesrepublik im Westen.', fr: { q: "Dans quelle partie de l'Allemagne se trouvait la RDA ?", c: ["À l'est", "À l'ouest", 'Au sud', 'Au nord'], z: 'La réponse est dans la deuxième phrase.', e: "La RDA se trouvait à l'est, la République fédérale à l'ouest." } }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Wofür ist Lübeck besonders bekannt?', c: ['Für Marzipan und das Holstentor', 'Für den höchsten Berg', 'Für Vulkane', 'Für seine Wüste'], a: 0, z: 'Es riecht in der Einleitung süß.', e: 'Lübeck ist berühmt für sein Marzipan und das Holstentor.' },
      { t: 'qcm', q: 'In welchem Bundesland liegt Lübeck?', c: ['Schleswig-Holstein', 'Bayern', 'Sachsen', 'Thüringen'], a: 0, z: 'Es ist auch das Land von Kiel.', e: 'Lübeck liegt in Schleswig-Holstein.' },
      { t: 'qcm', q: 'Was stimmt für die Ostsee?', c: ['Ebbe und Flut sind dort kaum zu sehen', 'Sie liegt in Bayern', 'Sie ist ein Fluss', 'Sie ist größer als der Atlantik'], a: 0, z: 'Ein Watt wie an der Nordsee gibt es dort nicht.', e: 'An der Ostsee sind Ebbe und Flut sehr schwach. Darum gibt es dort kein Watt.' }
    ] }
  ]
},
/* ---------------- TAG 9 ---------------- */
{
  place: 'Wismar', icon: '🎬', reward: { icon: '🎻', name: 'Agathes Cello' },
  focus: "Lecture : le secret du médaillon · Histoire : la chute du Mur, 1989 · Géographie : Mecklembourg-Poméranie-Occidentale",
  intro: 'In Wismar wurde vor hundert Jahren ein berühmter Vampirfilm gedreht. Nyx findet das lustig. Du nicht: Eine alte Seite des Logbuchs erklärt endlich alles.',
  parts: [
    { dom: 'les', lang: 'de',
      lect: { title: 'Das Geheimnis des Medaillons',
        s: ['Auf einer alten Seite steht eine Zeichnung deines Medaillons.', 'Vor langer Zeit hatte ein Herr des Manoirs Angst vor den Vampiren.', 'Darum sperrte er ihre Schatten in das Medaillon ein.', 'Ohne Schatten mussten sie ruhelos über das Meer fahren.', 'Als du das Medaillon gefunden hast, sind die Schatten darin aufgewacht.', 'Deshalb kam die Nachtkogge zurück.', '„Sie wollte nie etwas Böses“, sagt Wolka leise. „Sie will nur ihren Schatten zurück.“', 'Nyx bringt aus dem Manoir das Cello von Agathe.'],
        qs: [
          { q: 'Wer sperrte die Schatten der Vampire ein?', c: ['Ein Herr des Manoirs', 'Lucien', 'Agathe', 'Störtebeker'], a: 0, r: [1, 2], e: 'Ein Herr des Manoirs hatte Angst und sperrte sie in das Medaillon ein.' },
          { q: 'Warum kam die Nachtkogge zurück?', c: ['Weil die Schatten im Medaillon aufgewacht sind', 'Weil sie Gold sucht', 'Weil ein Sturm sie brachte', 'Weil sie Marzipan mag'], a: 0, r: [4, 5], e: 'Als Sarah das Medaillon fand, wachten die Schatten auf. Deshalb kam das Schiff.' }
        ] },
      qs: [
        { t: 'dictee', cs: true, say: 'Agathes Cello hat einen tiefen Klang.', a: ['Agathes Cello hat einen tiefen Klang'], z: 'tiefen schreibt man mit ie. Agathes, Cello und Klang schreibt man groß.', e: '„Klang“ ist ein Nomen. „tief“ ist ein Adjektiv mit ie.' },
        { t: 'fill', q: 'Welches Wort passt?', s: 'Er hatte Angst, ___ sperrte er die Schatten ein.', c: ['darum', 'weil', 'wenn'], a: 0, z: 'Es zeigt die Folge: Er hatte Angst, also...', e: '„darum“ zeigt die Folge. Mit „weil“ hieße es: Weil er Angst hatte, ...' }
      ] },
    { dom: 'ges', lang: 'de',
      lect: { title: 'Logbuch: Der Fall der Mauer',
        fr: { title: 'Journal de bord : la chute du Mur', s: ["En 1989, les gens de la RDA ne voulaient plus se taire.", "À Leipzig et dans d'autres villes, ils manifestaient pacifiquement chaque lundi, des bougies à la main.", "Le 9 novembre 1989, la frontière s'est soudain ouverte.", "À Berlin, des gens ont traversé le Mur, ont pleuré et se sont embrassés.", "Les familles se sont retrouvées après vingt-huit ans.", "Une ville sans violence et un mur qui tombe : cette nuit-là, moi, j'ai repris espoir."] },
        s: ['Im Jahr 1989 wollten die Menschen in der DDR nicht mehr schweigen.', 'In Leipzig und anderen Städten demonstrierten sie jeden Montag friedlich, mit Kerzen in der Hand.', 'Am 9. November 1989 öffnete sich plötzlich die Grenze.', 'In Berlin gingen Menschen durch die Mauer, sie weinten und umarmten sich.', 'Familien sahen sich nach achtundzwanzig Jahren wieder.', 'Eine Stadt ohne Gewalt und eine Mauer, die fällt: In dieser Nacht bekam ich wieder Hoffnung.'],
        qs: [
          { q: 'Wie demonstrierten die Menschen in Leipzig?', c: ['Friedlich, mit Kerzen', 'Mit Waffen', 'Mit Schiffen', 'Gar nicht'], a: 0, r: [1], e: 'Sie demonstrierten friedlich mit Kerzen in der Hand.', fr: { q: 'Comment les gens manifestaient-ils à Leipzig ?', c: ['Pacifiquement, avec des bougies', 'Avec des armes', 'Avec des bateaux', 'Ils ne manifestaient pas'], e: 'Ils manifestaient pacifiquement, des bougies à la main.' } },
          { q: 'Wann öffnete sich die Grenze?', c: ['Am 9. November 1989', 'Am 14. Juli 1789', 'Am 11. November 1918', 'Am 3. Oktober 1961'], a: 0, r: [2], e: 'Die Grenze öffnete sich am 9. November 1989.', fr: { q: "Quand la frontière s'est-elle ouverte ?", c: ['Le 9 novembre 1989', 'Le 14 juillet 1789', 'Le 11 novembre 1918', 'Le 3 octobre 1961'], e: "La frontière s'est ouverte le 9 novembre 1989." } }
        ] },
      qs: [
        { t: 'qcm', q: 'Wie lange stand die Berliner Mauer?', c: ['28 Jahre', '100 Jahre', '10 Jahre', '4 Jahre'], a: 0, z: 'Rechne: 1989 minus 1961.', e: '1989 − 1961 = 28. Die Mauer stand 28 Jahre.', fr: { q: 'Combien de temps le mur de Berlin est-il resté debout ?', c: ['28 ans', '100 ans', '10 ans', '4 ans'], z: 'Calcule : 1989 moins 1961.', e: '1989 − 1961 = 28. Le Mur est resté debout 28 ans.' } }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'In welchem Bundesland liegt Wismar?', c: ['In Mecklenburg-Vorpommern', 'In Bayern', 'In Hessen', 'Im Saarland'], a: 0, z: 'Es ist das Bundesland mit Rügen und Rostock.', e: 'Wismar, Rostock und Rügen liegen in Mecklenburg-Vorpommern.' },
      { t: 'qcm', q: 'Wie heißt die Hauptstadt von Mecklenburg-Vorpommern?', c: ['Schwerin', 'Rostock', 'Berlin', 'Dresden'], a: 0, z: 'Achtung: nicht die größte Stadt des Landes.', e: 'Schwerin ist die Hauptstadt, auch wenn Rostock größer ist.' },
      { t: 'qcm', q: 'Die Altstadt von Wismar ist berühmt für ihre Häuser aus...', c: ['rotem Backstein', 'Marmor', 'Glas', 'Holz aus Afrika'], a: 0, z: 'Du kennst sie schon aus der Hamburger Speicherstadt.', e: 'Viele Hansestädte im Norden bauten mit rotem Backstein.' }
    ] }
  ]
},
/* ---------------- TAG 10 ---------------- */
{
  place: 'Die Kreidefelsen von Rügen', icon: '🌕', reward: { icon: '🌑', name: 'Der Schatten der Gräfin' },
  focus: "Lecture : le dernier concert · Histoire : l'unité, 3 octobre 1990, et révision · Géographie : Rügen et révision",
  intro: 'Vollmond über den weißen Felsen. Die Nachtkogge liegt in der Bucht, und der letzte Sturm beginnt. Du setzt dich auf einen Stein und nimmst das Cello. Wolka und Nyx bleiben bei dir.',
  parts: [
    { dom: 'les', lang: 'de',
      lect: { title: 'Das letzte Konzert',
        s: ['Du spielst die Melodie von Agathe, zuerst leise und dann immer lauter.', 'Der Sturm wird still.', 'Das Medaillon öffnet sich, und dunkle Schatten fliegen hinaus.', 'Am Strand steht die Gräfin Ilsabe, und zum ersten Mal seit tausend Jahren hat sie einen Schatten.', 'Dann öffnen sich alle Gläser in Lübeck, und die Schatten fliegen nach Hause.', 'Die Gräfin kommt zu dir und reicht dir die Hand.', 'Du denkst an Verdun, an Lucien und Agathe, und du nimmst die Hand der Gräfin.'],
        qs: [
          { q: 'Was passiert, als Sarah spielt?', c: ['Der Sturm wird still, und das Medaillon öffnet sich', 'Die Felsen fallen ins Meer', 'Das Cello geht kaputt', 'Die Kogge sinkt'], a: 0, r: [1, 2], e: 'Der Sturm wird still, und das Medaillon öffnet sich.' },
          { q: 'Was macht Sarah am Ende?', c: ['Sie nimmt die Hand der Gräfin', 'Sie läuft weg', 'Sie wirft das Medaillon ins Meer', 'Sie schläft ein'], a: 0, r: [6], e: 'Sarah nimmt die Hand der Gräfin, wie Mitterrand und Kohl in Verdun.' }
        ] },
      qs: [
        { t: 'dictee', cs: true, say: 'Die Schatten fliegen nach Hause.', a: ['Die Schatten fliegen nach Hause'], z: 'Schatten und Hause schreibt man groß. fliegen schreibt man mit ie.', e: '„nach Hause“: Hause ist hier ein Nomen und wird großgeschrieben.' },
        { t: 'type', cs: true, q: 'Schreib das Verb in der <b>Vergangenheit</b> (Präteritum).', pre: 'Sarah (spielen) →', post: 'Cello.', a: ['spielte'], z: 'Regelmäßiges Verb: Stamm + -te.', e: 'spielen → sie spielte.' }
      ] },
    { dom: 'ges', lang: 'de',
      lect: { title: 'Logbuch: Die Einheit',
        fr: { title: "Journal de bord : l'unité", s: ["Voici la dernière page, et cette fois je l'écris le cœur joyeux.", "Le 3 octobre 1990, les deux États allemands sont redevenus un seul pays.", "Depuis, ce jour est la fête nationale allemande : le Tag der Deutschen Einheit.", "Berlin est de nouveau la capitale.", "Les Vikings, la Hanse, le Mur : j'ai tout vu, et j'ai appris une chose.", "Ceux qu'on sépare par peur peuvent se retrouver.", "Merci, Sarah. Comtesse Ilsabe."] },
        s: ['Dies ist die letzte Seite, und diesmal schreibe ich sie mit frohem Herzen.', 'Am 3. Oktober 1990 wurden die beiden deutschen Staaten wieder ein Land.', 'Seitdem ist dieser Tag der deutsche Nationalfeiertag: der Tag der Deutschen Einheit.', 'Berlin ist wieder die Hauptstadt.', 'Wikinger, Hanse, Mauer: Ich habe alles gesehen und eines gelernt.', 'Wenn die Angst Menschen trennt, können sie sich wiederfinden.', 'Danke, Sarah. Gräfin Ilsabe.'],
        qs: [
          { q: 'Was feiert man am 3. Oktober in Deutschland?', c: ['Den Tag der Deutschen Einheit', 'Das Ende der Hanse', 'Den Bau des Kanals', 'Das neue Jahr'], a: 0, r: [2], e: 'Der 3. Oktober ist der Tag der Deutschen Einheit, der Nationalfeiertag.', fr: { q: 'Que fête-t-on le 3 octobre en Allemagne ?', c: ["Le jour de l'Unité allemande", 'La fin de la Hanse', 'La construction du canal', 'Le Nouvel An'], e: "Le 3 octobre est le jour de l'Unité allemande, la fête nationale." } },
          { q: 'Was hat die Gräfin gelernt?', c: ['Wenn die Angst Menschen trennt, können sie sich wiederfinden', 'Dass Schiffe schneller werden', 'Dass die Nacht lang ist', 'Dass Marzipan süß ist'], a: 0, r: [5], e: 'Sie hat gelernt, dass Getrennte sich wiederfinden können.', fr: { q: "Qu'a appris la comtesse ?", c: ["Ceux qu'on sépare par peur peuvent se retrouver", 'Que les bateaux vont de plus en plus vite', 'Que la nuit est longue', 'Que le massepain est sucré'], e: 'Elle a appris que ceux qui sont séparés peuvent se retrouver.' } }
        ] },
      qs: [
        { t: 'qcm', q: 'Wiederholung: Bring in die richtige Reihenfolge, vom ältesten bis zum neuesten.', c: ['Wikinger, Hanse, Kaiser, Mauer', 'Hanse, Wikinger, Mauer, Kaiser', 'Kaiser, Wikinger, Hanse, Mauer', 'Mauer, Kaiser, Hanse, Wikinger'], a: 0, z: 'Das Logbuch erzählt in der richtigen Reihenfolge.', e: 'Um 900 Wikinger, ab etwa 1250 Hanse, 1871 Kaiser, 1961 Mauer.', fr: { q: 'Révision : remets dans le bon ordre, du plus ancien au plus récent.', c: ['Vikings, Hanse, empereur, Mur', 'Hanse, Vikings, Mur, empereur', 'Empereur, Vikings, Hanse, Mur', 'Mur, empereur, Hanse, Vikings'], z: 'Le journal de bord raconte tout dans le bon ordre.', e: "Vers 900 les Vikings, à partir de 1250 environ la Hanse, 1871 l'empereur, 1961 le Mur." } }
      ] },
    { dom: 'erd', lang: 'de', qs: [
      { t: 'qcm', q: 'Rügen ist...', c: ['die größte deutsche Insel', 'die kleinste deutsche Stadt', 'ein Fluss in Bayern', 'ein Berg in den Alpen'], a: 0, z: 'Sie liegt in der Ostsee.', e: 'Rügen ist die größte Insel Deutschlands.' },
      { t: 'qcm', q: 'Woraus bestehen die weißen Felsen von Rügen?', c: ['Aus Kreide', 'Aus Salz', 'Aus Marmor', 'Aus Schnee'], a: 0, z: 'In der Schule schreibt man manchmal damit.', e: 'Die Kreidefelsen sind berühmt. Der bekannteste heißt Königsstuhl.' },
      { t: 'qcm', q: 'Wiederholung: Welche Stadt liegt nicht an der Küste von Nordsee oder Ostsee?', c: ['München', 'Kiel', 'Wismar', 'Bremerhaven'], a: 0, z: 'Diese Stadt liegt im Süden, nahe den Alpen.', e: 'München liegt in Bayern, weit weg vom Meer.' }
    ] }
  ]
}
]};
