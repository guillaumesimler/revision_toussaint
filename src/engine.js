(function () {
'use strict';
var app = document.getElementById('app');
var KEY = 'revision-' + CFG.id + '-v1';
var MEM = null;
function fresh() { return { points: 0, days: {}, missed: [], eclairBest: 0, current: null, muted: false }; }
function load() {
  var s = null;
  try { s = localStorage.getItem(KEY); } catch (e) {}
  if (!s) s = MEM;
  if (!s) return null;
  try { var o = JSON.parse(s), f = fresh(); for (var k in f) if (!(k in o)) o[k] = f[k]; return o; } catch (e) { return null; }
}
function save() { var s = JSON.stringify(S); MEM = s; try { localStorage.setItem(KEY, s); } catch (e) {} }
var S = load() || fresh();
var SECS = CFG.sections || ['ortho', 'calc', 'lect'];
function L(fr, de) { return CFG.ui === 'de' ? de : fr; }
var BACK = L('Retour à la carte', 'Zurück zur Karte'), COL = L(' : ', ': '), ECL = !CFG.noEclair, FRON = false;
var UI = {
  fr: { check: 'Valider', next: 'Suivant →', end: 'Terminer ✓', ph: 'ta réponse', notq: 'Pas tout à fait.', try_: 'Ton essai :', miss: 'Il manque quelque chose à l\'endroit marqué <b>▾</b>.', zone: 'L\'erreur se cache dans la partie <span class="zonetag">colorée</span>. Corrige-la !', whole: 'Tout le mot est à revoir : relis bien la consigne.', txt: 'La réponse se cache dans la partie <span class="zonetag">surlignée</span> du texte. Relis-la !', good: 'La bonne réponse est :', write: 'Il fallait écrire :', listen: '🔊 Écouter', slow: '🐢 Lentement', reveal: 'Pour un grand-parent : voir la dictée', dict: 'Dictée : écoute et écris ce que tu entends.', dchoix: 'La phrase est dite deux fois. Choisis celle qui est bien écrite.', listen2: '🔊 Écouter deux fois', wordz: 'L\'erreur est dans la partie <span class="zonetag">colorée</span>. Cherche la phrase qui l\'écrit autrement !', empty: 'Écris ta réponse dans la case.', fillq: 'Choisis le bon mot pour compléter la phrase :', case_: 'Attention aux <b>majuscules</b> : c\'est la seule erreur !' },
  de: { check: 'Prüfen', next: 'Weiter →', end: 'Fertig ✓', ph: 'deine Antwort', notq: 'Fast!', try_: 'Dein Versuch:', miss: 'An der Stelle <b>▾</b> fehlt etwas.', zone: 'Der Fehler steckt im <span class="zonetag">farbigen</span> Teil. Verbessere ihn!', whole: 'Das ganze Wort stimmt noch nicht. Lies die Aufgabe noch einmal.', txt: 'Die Antwort steht im <span class="zonetag">markierten</span> Teil des Textes. Lies ihn noch einmal!', good: 'Die richtige Antwort ist:', write: 'Richtig geschrieben:', listen: '🔊 Anhören', slow: '🐢 Langsam', reveal: 'Für Oma oder Opa: Diktat zeigen', dict: 'Diktat: Hör gut zu und schreib, was du hörst.', dchoix: 'Du hörst den Satz zweimal. Wähle den richtig geschriebenen Satz.', listen2: '🔊 Zweimal anhören', wordz: 'Der Fehler steckt im <span class="zonetag">farbigen</span> Teil. Such den Satz, in dem es anders steht!', empty: 'Schreib deine Antwort in das Feld.', fillq: 'Wähle das richtige Wort:', case_: 'Achte auf <b>Groß- und Kleinschreibung</b>: Das ist der einzige Fehler!' }
};
function tr(q) { return UI[(q && q.lang) === 'de' ? 'de' : 'fr']; }
var QT = null;
var RUN = null, EC = null;

/* ---------- utilitaires ---------- */
var NB = ' ';
function R(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
function fmt(n) { if (typeof n !== 'number') return String(n); return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, NB); }
function strip(s) { return String(s).replace(/<br\s*\/?>/g, ' ').replace(/<sup>(\d+)<\/sup><span>\/<\/span><sub>(\d+)<\/sub>/g, '$1/$2').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(); }
function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
function today() { try { return new Date().toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric', month: 'short' }); } catch (e) { return ''; } }
function randN(d) { return R(Math.pow(10, d - 1), Math.pow(10, d) - 1); }
function frac(n, d) { return '<span class="frac"><sup>' + n + '</sup><span>/</span><sub>' + d + '</sub></span>'; }
function dec(h) { var i = Math.floor(h / 100), r = h % 100; if (r === 0) return String(i); var s = (r < 10 ? '0' : '') + r; if (s[1] === '0') s = s[0]; return i + ',' + s; }
function big(s) { return '<span class="big">' + s + '</span>'; }

/* ---------- nombres en lettres ---------- */
var U = ['zéro', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
var T = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];
function w99(n, pl) {
  if (n < 20) return U[n];
  var t = Math.floor(n / 10), u = n % 10;
  if (t === 7 || t === 9) { var r = n - (t === 7 ? 60 : 80); if (n === 71) return 'soixante et onze'; return T[t] + '-' + U[r]; }
  if (u === 0) return t === 8 ? (pl ? 'quatre-vingts' : 'quatre-vingt') : T[t];
  if (u === 1 && t !== 8) return T[t] + ' et un';
  return T[t] + '-' + U[u];
}
function w999(n, pl) {
  var c = Math.floor(n / 100), r = n % 100, s = '';
  if (c > 0) { s = c === 1 ? 'cent' : U[c] + ' cent'; if (r === 0 && c > 1 && pl) s += 's'; }
  if (r > 0) s += (s ? ' ' : '') + w99(r, pl);
  return s;
}
function words(n) {
  if (n === 0) return 'zéro';
  var g = [Math.floor(n / 1e9) % 1000, Math.floor(n / 1e6) % 1000, Math.floor(n / 1e3) % 1000, n % 1000], s = [];
  if (g[0]) s.push(w999(g[0], true) + ' milliard' + (g[0] > 1 ? 's' : ''));
  if (g[1]) s.push(w999(g[1], true) + ' million' + (g[1] > 1 ? 's' : ''));
  if (g[2]) s.push(g[2] === 1 ? 'mille' : w999(g[2], false) + ' mille');
  if (g[3]) s.push(w999(g[3], true));
  return s.join(' ');
}
var PLACES = ['unités', 'dizaines', 'centaines', 'unités de mille', 'dizaines de mille', 'centaines de mille', 'unités de millions', 'dizaines de millions', 'centaines de millions', 'unités de milliards'];

/* ---------- générateurs de calcul ---------- */
var POSE = "Pose l'opération en alignant bien les unités, et n'oublie pas les retenues.";
var GEN = {
  place: function (d) {
    var n = randN(d), s = String(n), p = R(1, d - 1), dg = +s[s.length - 1 - p];
    return { t: 'num', q: 'Dans le nombre <b>' + fmt(n) + '</b>, quel est le chiffre des <b>' + PLACES[p] + '</b> ?', a: dg, one: true,
      z: 'Compte les rangs en partant de la droite : unités, dizaines, centaines, puis la classe des mille' + (d > 6 ? ', puis celle des millions' : '') + '.',
      e: 'Dans ' + fmt(n) + ', le chiffre des ' + PLACES[p] + ' est ' + dg + '.' };
  },
  placeM: function () { return GEN.place(R(9, 10)); },
  words: function (d, zeros) {
    var s = String(randN(d)).split(''); zeros = zeros || (Math.random() < .6 ? 1 : 0);
    for (var k = 0; k < zeros; k++) s[R(1, d - 1)] = '0';
    var n = +s.join('');
    return { t: 'num', q: 'Écris ce nombre en chiffres :<br>' + big(words(n)), a: n,
      z: "Découpe le nombre par classes (millions, mille, puis le reste) et n'oublie pas les zéros.",
      e: '« ' + words(n) + ' » s\'écrit ' + fmt(n) + '.' };
  },
  wordsM: function () { return GEN.words(R(7, 9), 2); },
  add: function (da, db) { var a = randN(da), b = randN(db); return { t: 'num', q: 'Calcule (tu peux poser l\'opération) :<br>' + big(fmt(a) + ' + ' + fmt(b)), a: a + b, z: POSE, e: fmt(a) + ' + ' + fmt(b) + ' = ' + fmt(a + b) + '.' }; },
  add3: function (d) { var a = randN(d), b = randN(d), c = randN(d); return { t: 'num', q: 'Calcule :<br>' + big(fmt(a) + ' + ' + fmt(b) + ' + ' + fmt(c)), a: a + b + c, z: POSE, e: fmt(a) + ' + ' + fmt(b) + ' + ' + fmt(c) + ' = ' + fmt(a + b + c) + '.' }; },
  sub: function (da, db) { var a = randN(da), b = randN(db); if (b > a) { var t = a; a = b; b = t; } if (a === b) a += R(11, 99); return { t: 'num', q: 'Calcule (tu peux poser l\'opération) :<br>' + big(fmt(a) + ' − ' + fmt(b)), a: a - b, z: POSE, e: fmt(a) + ' − ' + fmt(b) + ' = ' + fmt(a - b) + '. Vérifie : ' + fmt(a - b) + ' + ' + fmt(b) + ' = ' + fmt(a) + '.' }; },
  table: function (list) { var a = pick(list), b = R(2, 10); if (Math.random() < .5) { var t = a; a = b; b = t; } return { t: 'num', q: 'Table de multiplication :<br>' + big(a + ' × ' + b), a: a * b, z: 'Récite la table depuis le début si besoin.', e: a + ' × ' + b + ' = ' + a * b + '.' }; },
  x10: function () { var n = R(2, 99) * (Math.random() < .5 ? 1 : R(2, 9)), m = pick([10, 100, 1000]); return { t: 'num', q: 'Calcul mental :<br>' + big(fmt(n) + ' × ' + fmt(m)), a: n * m, z: 'Multiplier par ' + fmt(m) + ', c\'est ajouter ' + (String(m).length - 1) + ' zéro' + (m > 10 ? 's' : '') + ' à droite.', e: fmt(n) + ' × ' + fmt(m) + ' = ' + fmt(n * m) + '.' }; },
  double: function () { var n = R(13, 99); if (n % 10 === 0) n++; return { t: 'num', q: 'Quel est le <b>double</b> de ' + n + ' ?', a: 2 * n, z: 'Le double, c\'est ' + n + ' + ' + n + '.', e: 'Le double de ' + n + ' est ' + 2 * n + '.' }; },
  half: function () { var n = 2 * R(12, 250); return { t: 'num', q: 'Quelle est la <b>moitié</b> de ' + fmt(n) + ' ?', a: n / 2, z: 'Coupe en deux : moitié des centaines, puis des dizaines, puis des unités.', e: 'La moitié de ' + fmt(n) + ' est ' + fmt(n / 2) + ' car ' + fmt(n / 2) + ' + ' + fmt(n / 2) + ' = ' + fmt(n) + '.' }; },
  mul1: function (d) { var a = randN(d), b = R(3, 9); return { t: 'num', q: 'Calcule (pose l\'opération) :<br>' + big(fmt(a) + ' × ' + b), a: a * b, z: 'Multiplie chiffre par chiffre en partant des unités, sans oublier les retenues.', e: fmt(a) + ' × ' + b + ' = ' + fmt(a * b) + '.' }; },
  mul2: function (da, db) { var a = randN(da), b = randN(db); if (b % 10 === 0) b++; return { t: 'num', q: 'Calcule (pose l\'opération) :<br>' + big(fmt(a) + ' × ' + b), a: a * b, z: 'Une ligne pour les unités, une ligne pour les dizaines (avec un zéro au bout), puis additionne.', e: fmt(a) + ' × ' + b + ' = ' + fmt(a * b) + '.' }; },
  div1: function (qd) { var dv = R(3, 9), q = randN(qd || 2), n = q * dv; return { t: 'num', q: 'Calcule :<br>' + big(fmt(n) + ' ÷ ' + dv), a: q, z: 'Vérifie avec la table de ' + dv + ' : ton résultat × ' + dv + ' doit redonner ' + fmt(n) + '.', e: fmt(n) + ' ÷ ' + dv + ' = ' + fmt(q) + ' car ' + fmt(q) + ' × ' + dv + ' = ' + fmt(n) + '.' }; },
  divTable: function () { var k = R(3, 9), m = R(3, 10); return { t: 'num', q: 'Combien de fois <b>' + k + '</b> dans <b>' + k * m + '</b> ?', a: m, one: true, z: 'Récite la table de ' + k + ' jusqu\'à trouver ' + k * m + '.', e: k + ' × ' + m + ' = ' + k * m + ', donc il y a ' + m + ' fois ' + k + ' dans ' + k * m + '.' }; },
  compare: function (d) {
    var base = randN(d), set = [base], digs = String(base).split(''), g = 0;
    while (set.length < 4 && g++ < 300) { var s = digs.slice(), i = R(0, d - 1), j = R(0, d - 1), t = s[i]; s[i] = s[j]; s[j] = t; var v = +s.join(''); if (s[0] !== '0' && set.indexOf(v) < 0) set.push(v); }
    while (set.length < 4) { var w = base + R(1, 999) * (R(0, 1) ? 1 : -1); if (set.indexOf(w) < 0 && String(w).length === d) set.push(w); }
    var mx = Math.random() < .6, ans = mx ? Math.max.apply(null, set) : Math.min.apply(null, set);
    return { t: 'qcm', q: 'Quel est le <b>plus ' + (mx ? 'grand' : 'petit') + '</b> nombre ?', c: set.map(fmt), a: fmt(ans),
      z: 'Compare les chiffres un par un en partant de la gauche : le premier chiffre différent décide.', e: 'Le plus ' + (mx ? 'grand' : 'petit') + ' est ' + fmt(ans) + '.' };
  },
  compareM: function () { return GEN.compare(R(7, 9)); },
  multiple: function () {
    var k = R(3, 9), good = k * R(4, 12), o = [good], g = 0;
    while (o.length < 4 && g++ < 200) { var x = R(good - 15, good + 15); if (x > 1 && x % k !== 0 && o.indexOf(x) < 0) o.push(x); }
    return { t: 'qcm', q: 'Quel nombre est un <b>multiple de ' + k + '</b> ?', c: o.map(String), a: String(good), z: 'Récite la table de ' + k + ' : lequel de ces nombres y apparaît ?', e: good + ' = ' + k + ' × ' + good / k + ', c\'est donc un multiple de ' + k + '.' };
  },
  fracOf: function () { var den = pick([2, 3, 4, 5, 8, 10]), num = R(1, den - 1), whole = den * R(2, 9), part = whole / den; return { t: 'num', q: 'Combien font ' + frac(num, den) + ' de <b>' + whole + '</b> ?', a: part * num, z: 'Partage d\'abord ' + whole + ' en ' + den + ' parts égales, puis prends-en ' + num + '.', e: whole + ' ÷ ' + den + ' = ' + part + ', puis ' + part + ' × ' + num + ' = ' + part * num + '.' }; },
  fracCompare: function () {
    var den = pick([4, 5, 6, 8]), bigN = R(den + 1, 2 * den - 1), sm = [];
    while (sm.length < 3) { var n = R(1, den - 1); if (sm.indexOf(n) < 0) sm.push(n); }
    var c = [frac(bigN, den)].concat(sm.map(function (n) { return frac(n, den); }));
    return { t: 'qcm', q: 'Quelle fraction est <b>plus grande que 1</b> ?', c: c, a: c[0], z: 'Une fraction est plus grande que 1 quand le nombre du haut (numérateur) est plus grand que celui du bas (dénominateur).', e: bigN + '/' + den + ' est plus grande que 1 car ' + bigN + ' > ' + den + '.' };
  },
  decCompare: function () {
    var b = R(1, 9), x = R(2, 8), c = [b + ',' + x, b + ',' + (x - 1) + R(5, 9), b + ',' + (x - 1) + R(1, 9) + R(1, 9), b + ',0' + R(1, 9)];
    return { t: 'qcm', q: 'Quel est le <b>plus grand</b> nombre ?', c: c, a: c[0], z: 'Compare d\'abord les dixièmes (le premier chiffre après la virgule). Un nombre plus long n\'est pas forcément plus grand !', e: c[0] + ' est le plus grand : son chiffre des dixièmes (' + x + ') est le plus grand.' };
  },
  decAdd: function () { var A = R(11, 89) * 10, B = R(105, 499); return { t: 'num', q: 'Calcule :<br>' + big(dec(A) + ' + ' + dec(B)), a: dec(A + B), z: 'Aligne bien les virgules : dixièmes sous les dixièmes, centièmes sous les centièmes.', e: dec(A) + ' + ' + dec(B) + ' = ' + dec(A + B) + '.' }; },
  conv: function () {
    var k = R(0, 3), a, b;
    if (k === 0) { a = R(2, 9); b = R(1, 19) * 50; return { t: 'num', q: 'Convertis :<br>' + big(a + ' km ' + b + ' m = ? m'), a: a * 1000 + b, z: '1 km = 1 000 m.', e: a + ' km = ' + fmt(a * 1000) + ' m, donc ' + a + ' km ' + b + ' m = ' + fmt(a * 1000 + b) + ' m.' }; }
    if (k === 1) { a = R(1, 5); b = R(1, 9) * 100; return { t: 'num', q: 'Convertis :<br>' + big(a + ' kg ' + b + ' g = ? g'), a: a * 1000 + b, z: '1 kg = 1 000 g.', e: a + ' kg = ' + fmt(a * 1000) + ' g, donc ' + a + ' kg ' + b + ' g = ' + fmt(a * 1000 + b) + ' g.' }; }
    if (k === 2) { a = R(1, 4); b = R(1, 11) * 5; return { t: 'num', q: 'Convertis :<br>' + big(a + ' h ' + b + ' min = ? min'), a: a * 60 + b, z: '1 h = 60 min.', e: a + ' h = ' + a * 60 + ' min, donc ' + a + ' h ' + b + ' min = ' + (a * 60 + b) + ' min.' }; }
    a = R(1, 9); b = R(1, 99); return { t: 'num', q: 'Convertis :<br>' + big(a + ' m ' + b + ' cm = ? cm'), a: a * 100 + b, z: '1 m = 100 cm.', e: a + ' m = ' + a * 100 + ' cm, donc ' + a + ' m ' + b + ' cm = ' + (a * 100 + b) + ' cm.' };
  },
  tabT: function () {
    var a = R(1, 9), b = R(2, 9); if (Math.random() < .5) { var t = a; a = b; b = t; }
    return { t: 'num', q: big(a + ' × ' + b + ' = ?'), a: a * b, one: a * b < 10, z: 'Pense à la table de ' + Math.max(a, b) + ' : ' + Math.max(a, b) + ', ' + 2 * Math.max(a, b) + ', ' + 3 * Math.max(a, b) + '...', e: a + ' × ' + b + ' = ' + a * b + '.' };
  },
  mental: function () {
    var k = R(0, 4), n;
    if (k === 0) { n = 4 * R(2, 25); return { t: 'num', q: 'Calcul mental :<br>' + big(n + ' × 25'), a: n * 25, z: 'Astuce : × 25, c\'est × 100 puis ÷ 4.', e: n + ' × 25 = ' + fmt(n * 25) + ' (' + n + ' × 100 = ' + fmt(n * 100) + ', puis ÷ 4).' }; }
    if (k === 1) { n = R(12, 45); return { t: 'num', q: 'Calcul mental :<br>' + big(n + ' × 11'), a: n * 11, z: 'Astuce : × 11, c\'est × 10, puis on ajoute le nombre une fois.', e: n + ' × 11 = ' + n * 10 + ' + ' + n + ' = ' + n * 11 + '.' }; }
    if (k === 2) { n = R(12, 99) * 10; return { t: 'num', q: 'Calcul mental :<br>' + big(fmt(n) + ' ÷ 10'), a: n / 10, z: 'Diviser par 10, c\'est enlever un zéro à droite.', e: fmt(n) + ' ÷ 10 = ' + n / 10 + '.' }; }
    if (k === 3) { n = R(12, 99) * 100; return { t: 'num', q: 'Calcul mental :<br>' + big(fmt(n) + ' ÷ 100'), a: n / 100, z: 'Diviser par 100, c\'est enlever deux zéros à droite.', e: fmt(n) + ' ÷ 100 = ' + n / 100 + '.' }; }
    n = R(12, 99); return { t: 'num', q: 'Calcul mental :<br>' + big(n + ' × 1' + NB + '000'), a: n * 1000, z: 'Multiplier par 1 000, c\'est ajouter trois zéros.', e: n + ' × 1 000 = ' + fmt(n * 1000) + '.' };
  }
};

/* ---------- préparation des missions ---------- */
function clone(o) { return JSON.parse(JSON.stringify(o)); }
function prep(q, dom, id) {
  q = clone(q); q.dom = dom; q.id = id; q.tries = 0; q.done = false;
  if (q.fr && q.fr.c) { q.frm = {}; q.c.forEach(function (c, i) { q.frm[c] = q.fr.c[i]; }); }
  if (q.c) { var corr = typeof q.a === 'number' ? q.c[q.a] : q.a; q.c = shuffle(q.c); q.a = corr; }
  return q;
}
function timeLimit(d) { return CFG.timer ? Math.max(CFG.timer.min, CFG.timer.start - d * CFG.timer.step) : 0; }
function genUnique(part, i, seen) {
  var g = part.gen[i], q, k = 0;
  do { q = GEN[g[0]].apply(null, g.slice(1)); k++; } while (seen[q.q] && k < 30);
  seen[q.q] = 1; return q;
}
function buildParts(d, D) {
  var qs = [], uid = Date.now().toString(36);
  D.parts.forEach(function (P) {
    var add = function (x) { if (P.lang) x.lang = P.lang; if (P.timed) { x.limit = timeLimit(d); x.pad = true; } qs.push(x); }, seen = {};
    if (P.lect) P.lect.qs.forEach(function (q, i) { var x = prep(q, P.dom, d + '-' + P.dom + 'l' + i); x.t = 'qcm'; x.txt = { title: P.lect.title, s: P.lect.s }; if (P.lect.fr) x.txt.fr = P.lect.fr; add(x); });
    (P.qs || []).forEach(function (q, i) { add(prep(q, P.dom, d + '-' + P.dom + i)); });
    (P.gen || []).forEach(function (g, i) { add(prep(genUnique(P, i, seen), P.dom, d + '-' + P.dom + 'g' + i + '-' + uid)); });
  });
  return qs;
}
function partCount(D, dom) {
  if (!D.parts) return dom === 'ortho' ? D.ortho.length : dom === 'calc' ? (D.calc.gen || []).length + (D.calc.probs || []).length : D.lect.qs.length;
  var n = 0; D.parts.forEach(function (P) { if (P.dom === dom) n += (P.qs || []).length + (P.gen || []).length + (P.lect ? P.lect.qs.length : 0); }); return n;
}
function partTitle(D, dom) {
  if (!D.parts) return dom === 'lect' ? D.lect.title : '';
  var t = ''; D.parts.forEach(function (P) { if (P.dom === dom && P.lect) t = P.lect.title; }); return t;
}
function buildDay(d) {
  var D = DATA.days[d], qs = [], uid = Date.now().toString(36);
  if (D.parts) return buildParts(d, D);
  D.ortho.forEach(function (q, i) { qs.push(prep(q, 'ortho', d + '-o' + i)); });
  (D.calc.gen || []).forEach(function (g, i) { qs.push(prep(GEN[g[0]].apply(null, g.slice(1)), 'calc', d + '-g' + i + '-' + uid)); });
  (D.calc.probs || []).forEach(function (q, i) { qs.push(prep(q, 'calc', d + '-p' + i)); });
  D.lect.qs.forEach(function (q, i) { var x = prep(q, 'lect', d + '-l' + i); x.t = 'qcm'; x.txt = { title: D.lect.title, s: D.lect.s }; qs.push(x); });
  return qs;
}

/* ---------- vérification ---------- */
function norm(s, cs) { s = String(s); if (!cs) s = s.toLowerCase(); return s.replace(/[’`´ʼ]/g, "'").replace(/\s+/g, ' ').replace(/\s*'\s*/g, "'").replace(/[.!]+$/, '').trim(); }
function numVal(s) { s = String(s).replace(/[\s  ]/g, '').replace(',', '.'); if (!/^-?\d+(\.\d+)?$/.test(s)) return null; return parseFloat(s); }
function cleanTyped(q, val) {
  var v = norm(val, q.cs);
  if (q.pre) {
    var tail = norm(strip(q.pre), q.cs).split(/[\s→]+/).pop();
    if (tail) {
      if (tail.slice(-1) === "'") { if (v.indexOf(tail) === 0) v = v.slice(tail.length); }
      else if (v.indexOf(tail + ' ') === 0) v = v.slice(tail.length + 1);
    }
  }
  return v.trim();
}
function isPick(q) { return q.t === 'qcm' || q.t === 'fill' || q.t === 'dchoix'; }
function isRight(q, val) {
  if (isPick(q)) return val === q.a;
  if (q.t === 'num') { var a = numVal(val), b = numVal(q.a); return a !== null && Math.abs(a - b) < 1e-9; }
  var v = cleanTyped(q, val);
  return q.a.some(function (x) { return norm(x, q.cs) === v; });
}
function diffZone(inp, exp) {
  var i = 0; while (i < inp.length && i < exp.length && inp[i] === exp[i]) i++;
  var j = 0; while (j < inp.length - i && j < exp.length - i && inp[inp.length - 1 - j] === exp[exp.length - 1 - j]) j++;
  return { i: i, j: j };
}
function bestTarget(q, v) {
  var best = null, bs = -1;
  q.a.forEach(function (x) { var e = norm(x, q.cs), z = diffZone(v, e); if (z.i + z.j > bs) { bs = z.i + z.j; best = e; } });
  return best;
}
function wordDiff(a, b, cls) {
  var x = a.split(' '), y = b.split(' '), i = 0, j = 0;
  while (i < x.length && i < y.length && x[i] === y[i]) i++;
  while (j < x.length - i && j < y.length - i && x[x.length - 1 - j] === y[y.length - 1 - j]) j++;
  return x.map(function (w, k) { return k >= i && k < x.length - j ? '<mark class="' + cls + '">' + esc(w) + '</mark>' : esc(w); }).join(' ');
}
function groupMark(s, wrong) {
  var out = '', n = s.length;
  for (var k = 0; k < n; k++) { out += wrong.indexOf(k) >= 0 ? '<mark class="err">' + s[k] + '</mark>' : s[k]; var rem = n - 1 - k; if (rem > 0 && rem % 3 === 0) out += NB; }
  return '<span class="numshow">' + out + '</span>';
}
function ansText(q) {
  if (q.t === 'num') return typeof q.a === 'number' ? fmt(q.a) : q.a;
  if (q.t === 'type' || q.t === 'dictee') return q.a[0];
  return q.a;
}
function promptText(q) {
  if (q.t === 'fill') return strip(q.s);
  if (q.t === 'type') return strip((q.q || '') + ' ' + (q.s || '') + ' ' + (q.pre || '') + ' …');
  if (q.t === 'dictee' || q.t === 'dchoix') return (q.lang === 'de' ? 'Diktat : « ' : 'Dictée : « ') + q.say + ' »';
  return strip(q.q);
}

/* ---------- sons et effets ---------- */
var AC = null;
function tone(freqs, dur) {
  if (S.muted || !freqs) return; dur = dur || 0.11;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    var t = AC.currentTime;
    freqs.forEach(function (f, i) {
      var o = AC.createOscillator(), g = AC.createGain();
      o.type = CFG.sounds.type; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t + i * dur);
      g.gain.exponentialRampToValueAtTime(0.12, t + i * dur + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t + i * dur + dur * 2.2);
      o.connect(g); g.connect(AC.destination); o.start(t + i * dur); o.stop(t + i * dur + dur * 2.4);
    });
  } catch (e) {}
}
function burst(n, el) {
  var x = window.innerWidth / 2, y = window.innerHeight / 2;
  if (el && el.getBoundingClientRect) { var r = el.getBoundingClientRect(); x = r.left + r.width / 2; y = r.top + r.height / 2; }
  for (var i = 0; i < n; i++) {
    var p = document.createElement('span'); p.className = 'particle'; p.textContent = pick(CFG.particles);
    p.style.left = (x + R(-30, 30)) + 'px'; p.style.top = (y + R(-10, 10)) + 'px';
    p.style.setProperty('--dx', R(-200, 200) + 'px'); p.style.setProperty('--dy', R(-260, -60) + 'px'); p.style.setProperty('--rot', R(-60, 60) + 'deg');
    p.style.animationDelay = (i * 25) + 'ms';
    document.body.appendChild(p);
    (function (pp) { setTimeout(function () { if (pp.parentNode) pp.parentNode.removeChild(pp); }, 1800); })(p);
  }
}
var canSpeak = 'speechSynthesis' in window, SAYTOK = 0;
function stopSay() { SAYTOK++; if (canSpeak) { try { speechSynthesis.cancel(); } catch (e) {} } }
function sayTwice(text, rate, lang) {
  var tok = ++SAYTOK;
  say(text, rate, lang, function () { setTimeout(function () { if (tok === SAYTOK) say(text, rate, lang); }, 1000); });
}
function say(text, rate, lang, done) {
  try {
    var Lg = lang === 'de' ? 'de' : 'fr';
    var u = new SpeechSynthesisUtterance(text); u.lang = Lg === 'de' ? 'de-DE' : 'fr-FR'; u.rate = rate; if (done) u.onend = done;
    var v = speechSynthesis.getVoices().filter(function (v) { return new RegExp('^' + Lg, 'i').test(v.lang); })[0]; if (v) u.voice = v;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  } catch (e) {}
}

/* ---------- état global ---------- */
function daysDone() { var n = 0; for (var i = 0; i < DATA.days.length; i++) if (S.days[i] && S.days[i].done) n++; return n; }
function starsTotal() { var n = 0; for (var k in S.days) n += S.days[k].stars || 0; return n; }
function unlocked(i) { return i === 0 || !!(S.days[i - 1] && S.days[i - 1].done); }
function rank() { var n = daysDone(), cur = CFG.ranks[0]; CFG.ranks.forEach(function (r) { if (n >= r.min) cur = r; }); return cur.name; }
function starsStr(n, max) { max = max || 3; var s = ''; for (var i = 0; i < max; i++) s += i < n ? '★' : '☆'; return s; }
function stopEclair() { if (EC && EC.timer) clearInterval(EC.timer); EC = null; stopQT(); }

function topbar() {
  return '<div class="topbar"><button class="ghost brand" data-act="home"><span class="bicon">' + CFG.homeIcon + '</span><b>' + CFG.name + '</b><span class="lvl">' + CFG.level + '</span></button>' +
    '<div class="stats"><span class="stat" title="' + L('Étoiles', 'Sterne') + '">★ ' + starsTotal() + '/30</span><span class="stat" title="Points">' + CFG.icons.points + ' ' + S.points + '</span>' +
    '<button class="ghost icon" data-act="mute" title="Son">' + (S.muted ? '🔇' : '🔊') + '</button></div></div>';
}

/* ---------- carte ---------- */
function pathD(p) {
  var d = 'M' + p[0][0] + ',' + p[0][1];
  for (var i = 0; i < p.length - 1; i++) {
    var p0 = p[i - 1] || p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] || p2;
    var c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6], c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ' C' + c1[0].toFixed(1) + ',' + c1[1].toFixed(1) + ' ' + c2[0].toFixed(1) + ',' + c2[1].toFixed(1) + ' ' + p2[0] + ',' + p2[1];
  }
  return d;
}
function renderMap() {
  stopEclair(); RUN = null;
  var n = DATA.days.length, xs = CFG.mapX, pts = [], nextI = -1;
  for (var i = 0; i < n; i++) pts.push([xs[i], 60 + i * 112]);
  for (i = 0; i < n; i++) if (unlocked(i) && !(S.days[i] && S.days[i].done)) { nextI = i; break; }
  var reach = nextI < 0 ? n - 1 : nextI;
  var svg = '<svg class="map" viewBox="0 0 400 1140" role="img" aria-label="Carte des missions">';
  CFG.deco.forEach(function (d) { svg += '<text class="deco" x="' + d[0] + '" y="' + (1140 - d[1]) + '" font-size="' + d[3] + '" text-anchor="middle">' + d[2] + '</text>'; });
  svg += '<path class="trail" d="' + pathD(pts) + '"/>';
  if (reach > 0) svg += '<path class="trail done" d="' + pathD(pts.slice(0, reach + 1)) + '"/>';
  for (i = 0; i < n; i++) {
    var D = DATA.days[i], st = S.days[i], done = st && st.done, open = unlocked(i);
    var cls = done ? 'done' : open ? 'open' : 'locked';
    if (i === nextI) cls += ' next';
    svg += '<g class="node ' + cls + '" ' + (open ? 'data-act="day" data-d="' + i + '" tabindex="0"' : '') + ' transform="translate(' + pts[i][0] + ',' + pts[i][1] + ')">' +
      '<circle class="halo" r="40"/><circle class="disc" r="31"/>' +
      '<text class="nicon" y="10" text-anchor="middle">' + (open ? (done ? D.reward.icon : D.icon) : '🔒') + '</text>' +
      '<text class="nlabel" y="56" text-anchor="middle">J' + (i + 1) + ' · ' + D.place + '</text>' +
      (done ? '<text class="nstars" y="76" text-anchor="middle">' + starsStr(st.stars) + '</text>' : '') + '</g>';
  }
  svg += '</svg>';
  var miss = S.missed.length;
  var cta = nextI >= 0 ? '<button class="primary big" data-act="day" data-d="' + nextI + '">Mission ' + (nextI + 1) + COL + DATA.days[nextI].place + ' →</button>'
    : '<div class="allDone">' + CFG.lines.allDone + '</div>';
  if (S.current && S.current.mode === 'day') cta = '<button class="primary big" data-act="day" data-d="' + S.current.day + '">' + L('Reprendre la mission ', 'Weiter mit Mission ') + (S.current.day + 1) + ' →</button>';
  app.innerHTML = topbar() +
    '<div class="screen"><header class="hero"><div class="hicon">' + CFG.comp.icon + '</div><h1>' + CFG.title + '</h1><p class="tag">' + CFG.tagline + '</p>' +
    '<div class="rank">Rang' + COL + '<b>' + rank() + '</b> · ' + daysDone() + L('/10 missions', '/10 Missionen') + '</div>' + cta + '</header>' +
    '<nav class="menu"><button data-act="coll">🎁 ' + L('Collection', 'Sammlung') + '<span>' + daysDone() + '/10</span></button>' +
    '<button data-act="rev" class="' + (miss ? 'has' : '') + '">' + CFG.revIcon + ' ' + L('Revanches', 'Revanche') + '<span>' + miss + '</span></button>' +
    (ECL ? '<button data-act="eclair">⚡ Défi Éclair<span>record ' + S.eclairBest + '</span></button>' : '') +
    '<button data-act="parents">👵👴 ' + L('Grands-parents<span>bilan', 'Oma und Opa<span>Bilanz') + '</span></button></nav>' + siblingLink() +
    '<div class="mapwrap">' + svg + '</div></div>';
  setTimeout(function () { var el = document.querySelector('.node.next'); if (el && el.scrollIntoView && daysDone() > 2) el.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, 60);
}

function siblingLink() {
  return (CFG.siblings || []).map(function (b) {
  var st = null, txt = L('pas encore commencé', 'noch nicht begonnen');
  try { st = JSON.parse(localStorage.getItem(b.key) || 'null'); } catch (e) {}
  if (st && st.days) {
    var n = 0, stars = 0; for (var k in st.days) { if (st.days[k].done) n++; stars += st.days[k].stars || 0; }
    txt = n + L('/10 missions', '/10 Missionen') + ' · ★ ' + stars + '/30';
  }
  return '<a class="sibling" href="' + b.href + '"><span class="sicon">' + b.icon + '</span><span><b>' + b.label + '</b><small>' + txt + '</small></span><span class="sgo">→</span></a>';
  }).join('');
}

/* ---------- intro de mission ---------- */
function renderIntro(d) {
  var D = DATA.days[d], st = S.days[d], resume = S.current && S.current.mode === 'day' && S.current.day === d;
  app.innerHTML = topbar() + '<div class="screen"><div class="card intro">' +
    '<div class="introicon">' + D.icon + '</div><div class="kicker">Mission ' + (d + 1) + L(' sur 10', ' von 10') + '</div><h2>' + D.place + '</h2>' +
    '<p class="lead">' + D.intro + '</p>' +
    '<ul class="plan">' + SECS.map(function (k) { var t = partTitle(D, k); return '<li><span>' + CFG.icons[k] + ' ' + CFG.sec[k] + (t ? L(' : « ' + t + ' »', ': „' + t + '“') : '') + '</span><b>' + partCount(D, k) + L(' questions', ' Fragen') + '</b></li>'; }).join('') + '</ul>' +
    (CFG.timer ? '<p class="timerinfo">⏱️ Aujourd\'hui, tu as <b>' + timeLimit(d) + ' secondes</b> par calcul de tables.</p>' : '') +
    '<div class="reward"><span class="ricon">' + D.reward.icon + '</span><div><small>' + L('À gagner', 'Zu gewinnen') + '</small><br><b>' + D.reward.name + '</b></div></div>' +
    (st && st.done ? '<p class="muted center">' + L('Déjà réussie avec ', 'Schon geschafft mit ') + starsStr(st.stars) + L('. Rejoue pour gagner plus d\'étoiles !', '. Spiel noch einmal für mehr Sterne!') + '</p>' : '') +
    '<div class="rules">' + L('<b>Règle du jeu :</b> si tu te trompes, ' + CFG.comp.name + ' te montre <i>où</i> est l\'erreur. Au deuxième essai raté, la réponse s\'affiche et la question part dans tes Revanches.', '<b>Spielregel:</b> Bei einem Fehler zeigt dir ' + CFG.comp.name + ', <i>wo</i> er steckt. Beim zweiten Fehler siehst du die Antwort, und die Frage kommt in deine Revanche.') + '</div>' +
    '<div class="btns"><button class="primary big" data-act="start" data-d="' + d + '">' + (resume ? L('Reprendre', 'Weiter') : L('Commencer', 'Los geht\'s')) + '</button><button class="ghost" data-act="home">' + BACK + '</button></div>' +
    '</div></div>';
}
function startDay(d) {
  if (S.current && S.current.mode === 'day' && S.current.day === d) {
    RUN = S.current;
    while (RUN.i < RUN.qs.length && RUN.qs[RUN.i].done) RUN.i++;
    if (RUN.i >= RUN.qs.length) return finishDay();
  } else {
    RUN = { mode: 'day', day: d, qs: buildDay(d), i: 0, res: [], pts: 0, combo: 0, maxCombo: 0 };
    S.current = RUN;
  }
  setFr(false); save(); renderQ();
}

/* ---------- question ---------- */
function cur() { return RUN.qs[RUN.i]; }
var ACCENTS = ['é', 'è', 'ê', 'ë', 'à', 'â', 'ç', 'ù', 'û', 'î', 'ï', 'ô', 'œ', "'"];
var UMLAUTS = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];
function accentBar(q) { return '<div class="accents">' + ((q && q.lang === 'de') ? UMLAUTS : ACCENTS).map(function (c) { return '<button data-act="acc" data-c="' + esc(c) + '" tabindex="-1">' + c + '</button>'; }).join('') + '</div>'; }
function frt(s, tag) { return s ? '<' + (tag || 'span') + ' class="frt">' + s + '</' + (tag || 'span') + '>' : ''; }
function setFr(on) { FRON = on; app.classList.toggle('fron', on); var b = document.getElementById('frbtn'); if (b) b.textContent = on ? '🇩🇪 Nur Deutsch' : '🇫🇷 Auf Französisch'; }
function qBody(q) {
  var h = '';
  if (q.t === 'qcm') {
    h += '<div class="qtext">' + q.q + frt(q.fr && q.fr.q) + '</div><div class="choices' + (q.frm || (q.c.length > 2 && q.c.some(function (c) { return strip(c).length > 24; })) ? ' long' : '') + '">' +
      q.c.map(function (c, i) { return '<button class="choice" data-act="choice" data-i="' + i + '">' + c + frt(q.frm && q.frm[c]) + '</button>'; }).join('') + '</div><div id="actions" class="actions"></div>';
  } else if (q.t === 'dchoix') {
    h += '<div class="qtext">' + (q.q || tr(q).dchoix) + '</div><div class="sayrow">' +
      (canSpeak ? '<button data-act="say2">' + tr(q).listen2 + '</button><button data-act="sayslow">' + tr(q).slow + '</button>' : '') +
      '<button class="ghost" data-act="reveal">' + tr(q).reveal + '</button><span class="secret" id="secret">« ' + q.say + ' »</span></div>' +
      '<div class="choices long dchoix">' + q.c.map(function (c, i) { return '<button class="choice" data-act="choice" data-i="' + i + '">' + esc(c) + '</button>'; }).join('') + '</div><div id="actions" class="actions"></div>';
  } else if (q.t === 'fill') {
    h += '<div class="qtext small">' + (q.q || tr(q).fillq) + '</div>' +
      '<div class="sentence">' + q.s.replace('___', '<span class="blank" id="blank">?</span>') + '</div>' +
      '<div class="choices row">' + q.c.map(function (c, i) { return '<button class="choice" data-act="choice" data-i="' + i + '">' + c + '</button>'; }).join('') + '</div><div id="actions" class="actions"></div>';
  } else if (q.t === 'type' || q.t === 'dictee') {
    if (q.t === 'dictee') {
      h += '<div class="qtext">' + (q.q || tr(q).dict) + '</div><div class="sayrow">' +
        (canSpeak ? '<button data-act="say">' + tr(q).listen + '</button><button data-act="sayslow">' + tr(q).slow + '</button>' : '') +
        '<button class="ghost" data-act="reveal">' + tr(q).reveal + '</button><span class="secret" id="secret">« ' + q.say + ' »</span></div>';
    } else {
      h += '<div class="qtext">' + q.q + '</div>' + (q.s ? '<div class="sentence">' + q.s + '</div>' : '');
    }
    h += '<div class="typeline">' + (q.pre ? '<span class="pre">' + q.pre + '</span>' : '') +
      '<input id="inp" class="ans" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="' + tr(q).ph + '">' +
      (q.post ? '<span class="post">' + q.post + '</span>' : '') + '</div>' + accentBar(q) +
      '<div id="actions" class="actions"><button class="primary big" data-act="check">' + tr(q).check + '</button></div>';
  } else if (q.t === 'num' && q.pad) {
    h += (q.limit ? '<div class="qtimer" id="qtimer"><div class="qtbar" id="qtbar"></div><span id="qtsec">' + q.limit + ' s</span></div>' : '') +
      '<div class="qtext">' + q.q + '</div><div class="padin" id="padin">&nbsp;</div><div class="keypad qpad">' +
      ['7', '8', '9', '4', '5', '6', '1', '2', '3', 'del', '0', 'ok'].map(function (k) { return '<button class="' + (k === 'ok' ? 'primary' : '') + '" data-act="qkey" data-k="' + k + '">' + (k === 'del' ? '⌫' : k === 'ok' ? 'OK' : k) + '</button>'; }).join('') +
      '</div><div id="actions" class="actions"></div>';
  } else if (q.t === 'num') {
    h += '<div class="qtext">' + q.q + '</div><div class="typeline"><input id="inp" class="ans num" type="text" inputmode="decimal" autocomplete="off" placeholder="?">' +
      (q.unit ? '<span class="post">' + q.unit + '</span>' : '') + '</div>' +
      '<div id="actions" class="actions"><button class="primary big" data-act="check">Valider</button></div>';
  }
  return h;
}
function renderQ() {
  var q = cur(), total = RUN.qs.length, prev = RUN.qs[RUN.i - 1], newSec = !prev || prev.dom !== q.dom;
  var secN = SECS.indexOf(q.dom) + 1;
  var h = '<div class="screen qscreen"><div class="qtop"><button class="ghost icon" data-act="quit" title="' + L('Quitter', 'Beenden') + '">✕</button>' +
    '<div class="prog"><div class="bar" style="width:' + (RUN.i / total * 100) + '%"></div></div><div class="qcount">' + (RUN.i + 1) + '/' + total + '</div></div>' +
    '<div class="hud"><span class="chip">' + CFG.icons[q.dom] + ' ' + CFG.sec[q.dom] + '</span><span class="combo' + (RUN.combo >= 3 ? ' hot' : '') + '" id="combo">' + (RUN.combo >= 2 ? '🔥 ' + L('série ', 'Serie ') + RUN.combo : '') + '</span>' +
    '<span class="pts" id="pts">' + CFG.icons.points + ' ' + RUN.pts + '</span></div>';
  if (newSec && RUN.mode === 'day') h += '<div class="secbanner">' + CFG.icons[q.dom] + L(' Épreuve ', ' Aufgabe ') + secN + COL + CFG.sec[q.dom] + '</div>';
  if (RUN.mode === 'rev') h += '<div class="secbanner">' + CFG.revIcon + ' Revanche ' + (RUN.i + 1) + L(' sur ', ' von ') + total + '</div>';
  if ((q.txt && q.txt.fr) || q.fr) h += '<div class="frrow"><button class="frbtn" id="frbtn" data-act="fr">' + (FRON ? '🇩🇪 Nur Deutsch' : '🇫🇷 Auf Französisch') + '</button></div>';
  if (q.txt) h += '<div class="card textcard" id="txt"' + (q.lang ? ' lang="' + q.lang + '"' : '') + '><div class="ttitle">' + (CFG.icons.lect || CFG.icons[q.dom]) + ' ' + q.txt.title + frt(q.txt.fr && q.txt.fr.title) + '</div><p>' +
    q.txt.s.map(function (s, i) { return q.txt.fr ? '<span class="sent bil" data-s="' + i + '"><span>' + s + '</span>' + frt(q.txt.fr.s[i]) + '</span>' : '<span class="sent" data-s="' + i + '">' + s + '</span>'; }).join(' ') + '</p></div>';
  var tip = RUN.i === 0 && RUN.mode === 'day' ? pick(CFG.lines.hello) : newSec && CFG.lines.sec[q.dom] ? CFG.lines.sec[q.dom] : pick(CFG.lines.idle);
  h += '<div class="card qcard"' + (q.lang ? ' lang="' + q.lang + '"' : '') + '>' + qBody(q) + '<div class="fb" id="fb"></div></div>' +
    '<div class="comp"><div class="avatar">' + CFG.comp.icon + '</div><div class="bubble" id="bubble"><b>' + CFG.comp.name + L(' :', ':') + '</b> <span id="btext">' + tip + '</span></div></div></div>';
  app.innerHTML = h;
  window.scrollTo(0, 0);
  var inp = document.getElementById('inp');
  if (inp && window.innerWidth > 700) inp.focus();
  if (q.t === 'dictee' && canSpeak) setTimeout(function () { say(q.say, 0.85, q.lang); }, 400);
  if (q.t === 'dchoix' && canSpeak && !q.done) { var tok = ++SAYTOK; setTimeout(function () { if (tok === SAYTOK) sayTwice(q.say, 0.85, q.lang); }, 400); }
  PADBUF = '';
  if (q.limit && !q.done) startQT(q.limit);
}
/* ---------- chrono des tables ---------- */
var PADBUF = '';
function padDraw(cls) { var el = document.getElementById('padin'); if (el) { el.innerHTML = PADBUF || '&nbsp;'; el.className = 'padin ' + (cls || ''); } }
function padKey(k) {
  var q = cur(); if (!q || q.done) return;
  if (k === 'del') PADBUF = PADBUF.slice(0, -1);
  else if (k === 'ok') { if (PADBUF) { var v = PADBUF; submit(v, null); if (!cur().done) { PADBUF = ''; } } return; }
  else if (PADBUF.length < 3) PADBUF += k;
  padDraw();
}
function stopQT() { if (QT && QT.iv) clearInterval(QT.iv); QT = null; }
function startQT(sec) {
  stopQT(); QT = { left: sec * 1000, total: sec * 1000, last: Date.now(), iv: null };
  QT.iv = setInterval(tickQT, 100); tickQT();
}
function tickQT() {
  if (!QT) return;
  var now = Date.now(); if (!document.hidden) QT.left -= now - QT.last; QT.last = now;
  var b = document.getElementById('qtbar'), t = document.getElementById('qtsec'), box = document.getElementById('qtimer');
  if (!b) { stopQT(); return; }
  var f = Math.max(0, QT.left / QT.total); b.style.width = (f * 100) + '%';
  if (t) t.textContent = Math.ceil(Math.max(0, QT.left) / 1000) + ' s';
  if (box) box.classList.toggle('low', QT.left < 3000);
  if (QT.left <= 0) { stopQT(); timeUp(); }
}
function timeUp() {
  var q = cur(); if (!q || q.done) return;
  q.tries++; RUN.combo = 0; hud(); tone(CFG.sounds.wrong, 0.16); shake(document.getElementById('padin'));
  if (q.tries === 1) { bubble(pick(CFG.lines.wrong1)); fb('<b>⏱️ Temps écoulé !</b> Encore une chance : le chrono repart.' + (q.z ? '<div class="hint">' + q.z + '</div>' : ''), 'zonemsg'); PADBUF = ''; padDraw(); startQT(q.limit); }
  else { q.done = true; RUN.res.push({ dom: q.dom, r: 0, id: q.id }); showAnswer(q, '', null); addMissed(q); }
  if (RUN.mode === 'day') save();
}
function fb(html, cls) { var el = document.getElementById('fb'); if (el) el.innerHTML = '<div class="msg ' + cls + '">' + html + '</div>'; }
function bubble(t) { var b = document.getElementById('btext'); if (b) { b.innerHTML = t; var p = b.parentNode; p.classList.remove('pop'); void p.offsetWidth; p.classList.add('pop'); } }
function hud() {
  var c = document.getElementById('combo'), p = document.getElementById('pts');
  if (c) { c.textContent = RUN.combo >= 2 ? '🔥 ' + L('série ', 'Serie ') + RUN.combo : ''; c.className = 'combo' + (RUN.combo >= 3 ? ' hot' : ''); }
  if (p) p.textContent = CFG.icons.points + ' ' + RUN.pts;
}
function showNext() {
  var a = document.getElementById('actions'); if (!a) return;
  var last = RUN.i === RUN.qs.length - 1;
  stopQT();
  a.innerHTML = '<button class="primary big" id="next" data-act="next">' + (last ? tr(cur()).end : tr(cur()).next) + '</button>';
  var inp = document.getElementById('inp'); if (inp) inp.disabled = true;
  document.querySelectorAll('.qpad button').forEach(function (b) { b.disabled = true; });
  document.querySelectorAll('.accents button').forEach(function (b) { b.disabled = true; });
  setTimeout(function () { var n = document.getElementById('next'); if (n) n.focus(); }, 30);
}
function lockChoices() { document.querySelectorAll('.choice').forEach(function (b) { b.disabled = true; }); }
function markRefs(q, cls) {
  if (!q.txt || !q.r) return;
  q.r.forEach(function (i) { var s = document.querySelector('.sent[data-s="' + i + '"]'); if (s) s.classList.add(cls); });
  var first = document.querySelector('.sent.' + cls); if (first && first.scrollIntoView) first.scrollIntoView({ block: 'center', behavior: 'smooth' });
}
function submit(val, btn) {
  var q = cur(); if (q.done) return;
  var inp = document.getElementById('inp');
  if (q.t === 'num' && numVal(val) === null) { fb('Écris seulement un nombre' + (String(q.a).indexOf(',') >= 0 ? ' (avec une virgule si besoin)' : '') + '.', 'info'); return; }
  if ((q.t === 'type' || q.t === 'dictee') && !norm(val)) { fb(tr(q).empty, 'info'); return; }
  var ok = isRight(q, val);
  if (ok) {
    q.done = true; var first = q.tries === 0;
    var gain = first ? 10 + (RUN.combo >= 4 ? 5 : 0) : 5;
    RUN.pts += gain; RUN.res.push({ dom: q.dom, r: first ? 2 : 1, id: q.id });
    if (first) { RUN.combo++; RUN.maxCombo = Math.max(RUN.maxCombo, RUN.combo); } else RUN.combo = 0;
    if (btn) btn.classList.add('right');
    if (isPick(q)) lockChoices();
    if (q.t === 'fill') { var bl = document.getElementById('blank'); if (bl) { bl.textContent = q.a; bl.className = 'blank ok'; } }
    if (inp) inp.classList.add('ok');
    if (q.pad) padDraw('good');
    var extra = '';
    if (!first && q.c && q.c.length === 2) addMissed(q);
    if (RUN.mode === 'rev' && first) { S.missed = S.missed.filter(function (m) { return m.q.id !== q.id; }); extra = ' <b>' + L('Revanche gagnée !', 'Revanche gewonnen!') + '</b>'; }
    fb('<b>+' + gain + '</b> ' + (first ? '' : L('(2e essai) ', '(2. Versuch) ')) + extra + (q.e && !first ? expOf(q) : q.e && (CFG.showExp || ['ortho']).indexOf(q.dom) >= 0 ? expOf(q) : ''), 'good');
    if (q.txt) markRefs(q, 'okref');
    var line = first ? pick(CFG.lines.ok) : pick(CFG.lines.ok2);
    if (first && (RUN.combo === 5 || RUN.combo === 10)) { line = pick(CFG.lines.combo); burst(14, btn || inp); tone(CFG.sounds.win, 0.08); }
    else { burst(first ? 6 : 3, btn || inp); tone(first ? CFG.sounds.ok : CFG.sounds.ok2); }
    bubble(line); hud(); showNext();
  } else {
    q.tries++; RUN.combo = 0; hud(); tone(CFG.sounds.wrong, 0.16);
    if (q.tries === 1) { showZone(q, val, btn); if (q.limit) startQT(q.limit); }
    else { q.done = true; RUN.res.push({ dom: q.dom, r: 0, id: q.id }); showAnswer(q, val, btn); addMissed(q); }
  }
  if (RUN.mode === 'day') save();
}
function expOf(q) { return q.e ? '<div class="exp">' + q.e + frt(q.fr && q.fr.e, 'div') + '</div>' : ''; }
function shake(el) { if (!el) return; el.classList.remove('shake'); void el.offsetWidth; el.classList.add('shake'); }
function showZone(q, val, btn) {
  bubble(pick(CFG.lines.wrong1));
  if (q.t === 'dchoix') {
    if (btn) { btn.innerHTML = wordDiff(val, q.a, 'err'); btn.classList.add('wrong'); btn.disabled = true; shake(btn); }
    fb('<b>' + tr(q).notq + '</b> ' + tr(q).wordz + (q.z ? '<div class="hint">' + q.z + '</div>' : ''), 'zonemsg');
    return;
  }
  if (q.t === 'qcm' || q.t === 'fill') {
    if (btn) { btn.classList.add('wrong'); btn.disabled = true; shake(btn); }
    if (q.t === 'fill') { var bl = document.getElementById('blank'); if (bl) bl.classList.add('zone'); }
    if (q.txt) { markRefs(q, 'zone'); fb('<b>' + tr(q).notq + '</b> ' + tr(q).txt + frt(q.fr && UI.fr.txt, 'div'), 'zonemsg'); }
    else fb('<b>' + tr(q).notq + '</b> ' + (q.z || (q.lang === 'de' ? 'Lies die Frage noch einmal genau.' : 'Relis bien la question : un mot important t\'a peut-être échappé.')) + frt(q.fr && q.fr.z, 'div'), 'zonemsg');
    return;
  }
  var inp = document.getElementById('inp');
  shake(inp || document.getElementById('padin'));
  if (q.t === 'num') {
    var exp = String(q.a).replace(',', '.'), got = String(val).replace(/[\s  ]/g, '').replace(',', '.'), isInt = function (s) { return /^\d+$/.test(s); }, msg, html = '';
    if (isInt(exp) && isInt(got) && !q.one && exp.length > 1) {
      if (got.length !== exp.length) {
        html = groupMark(got, got.split('').map(function (_, k) { return k; }));
        msg = (got.length > exp.length ? 'Ton résultat a <b>trop de chiffres</b>' : 'Ton résultat n\'a <b>pas assez de chiffres</b>') + ' : vérifie l\'ordre de grandeur.' + (q.z ? '<div class="hint">' + q.z + '</div>' : '');
      } else {
        var wrong = []; for (var k = 0; k < exp.length; k++) if (got[k] !== exp[k]) wrong.push(k);
        var names = wrong.map(function (k) { return PLACES[exp.length - 1 - k]; });
        html = groupMark(got, wrong);
        msg = names.length === 1 ? 'L\'erreur est dans le chiffre des <b>' + names[0] + '</b>.' : 'Les erreurs sont dans les chiffres des <b>' + names.slice(0, -1).join('</b>, des <b>') + '</b> et des <b>' + names[names.length - 1] + '</b>.';
        if (q.z && q.dom === 'calc' && q.id && q.id.indexOf('-p') > 0) msg += '<div class="hint">' + q.z + '</div>';
      }
    } else if (!isInt(exp)) {
      msg = exp.split('.')[0] !== got.split('.')[0] ? 'La <b>partie entière</b> (avant la virgule) n\'est pas bonne.' : 'La partie entière est juste : l\'erreur est <b>après la virgule</b>.';
      if (q.z) msg += '<div class="hint">' + q.z + '</div>';
    } else msg = q.z || 'Vérifie ton calcul.';
    fb('<b>Pas tout à fait.</b> ' + (html ? '<div class="yours">Tu as écrit : ' + html + '</div>' : '') + msg, 'zonemsg');
    if (inp) { inp.select(); }
    if (q.pad) padDraw('bad');
    return;
  }
  // texte : on repère la zone fautive lettre par lettre
  var v = cleanTyped(q, val), e = bestTarget(q, v), z = diffZone(v, e);
  var mid = v.slice(z.i, v.length - z.j), shown;
  if (z.i === 0 && z.j === 0) shown = '<mark class="err">' + esc(v) + '</mark>';
  else if (!mid) shown = esc(v.slice(0, z.i)) + '<mark class="miss">▾</mark>' + esc(v.slice(z.i));
  else shown = esc(v.slice(0, z.i)) + '<mark class="err">' + esc(mid) + '</mark>' + esc(v.slice(v.length - z.j));
  var caseOnly = q.cs && q.a.some(function (x) { return norm(x) === norm(cleanTyped(q, val)); });
  var m = caseOnly ? tr(q).case_ : z.i === 0 && z.j === 0 ? tr(q).whole : !mid ? tr(q).miss : tr(q).zone;
  fb('<b>' + tr(q).notq + '</b><div class="yours">' + tr(q).try_ + ' <span class="word">' + shown + '</span></div>' + m + (q.z && !caseOnly ? '<div class="hint">' + q.z + '</div>' : ''), 'zonemsg');
  if (inp) { inp.value = v; inp.focus(); try { inp.setSelectionRange(z.i, Math.max(z.i, v.length - z.j)); } catch (er) {} }
}
function showAnswer(q, val, btn) {
  bubble(pick(CFG.lines.wrong2));
  var ans = ansText(q);
  if (isPick(q)) {
    if (btn) { btn.classList.add('wrong'); shake(btn); }
    document.querySelectorAll('.choice').forEach(function (b, i) { if (q.c[i] === q.a) { b.classList.add('reveal'); if (q.t === 'dchoix') b.innerHTML = wordDiff(q.a, val, 'good'); } });
    lockChoices();
    if (q.t === 'fill') { var bl = document.getElementById('blank'); if (bl) { bl.textContent = q.a; bl.className = 'blank reveal'; } }
    if (q.txt) markRefs(q, 'zone');
    fb(tr(q).good + ' <b>' + esc(strip(ans)) + '</b>' + frt(q.frm && q.frm[q.a], 'div') + expOf(q), 'answer');
  } else if (q.t === 'num') {
    if (q.pad) { PADBUF = String(q.a); padDraw('reveal'); }
    fb('La bonne réponse est : <b class="bigans">' + ans + '</b>' + (q.e ? '<div class="exp">' + q.e + '</div>' : ''), 'answer');
  } else {
    var v = cleanTyped(q, val), e = bestTarget(q, v), z = diffZone(v, e), mid = e.slice(z.i, e.length - z.j);
    var shown = z.i === 0 && z.j === 0 ? '<mark class="good">' + esc(e) + '</mark>' : esc(e.slice(0, z.i)) + (mid ? '<mark class="good">' + esc(mid) + '</mark>' : '') + esc(e.slice(e.length - z.j));
    fb(tr(q).write + ' <span class="word">' + (q.pre ? strip(q.pre).split('→').pop().trim() + ' ' : '') + shown + '</span>' + (q.e ? '<div class="exp">' + q.e + '</div>' : ''), 'answer');
  }
  showNext();
}
function addMissed(q) {
  if (RUN.mode !== 'day') return;
  if (S.missed.some(function (m) { return m.q.id === q.id; })) return;
  var c = clone(q); delete c.tries; delete c.done;
  S.missed.push({ q: c, day: RUN.day, date: today() });
}
function next() {
  stopQT(); stopSay();
  RUN.i++;
  if (RUN.mode === 'day') save();
  if (RUN.i >= RUN.qs.length) return RUN.mode === 'day' ? finishDay() : finishRev();
  renderQ();
}

/* ---------- fin de mission ---------- */
function finishDay() {
  var d = RUN.day, D = DATA.days[d], tot = RUN.res.length, first = RUN.res.filter(function (r) { return r.r === 2; }).length;
  var ratio = tot ? first / tot : 0, stars = ratio >= 0.85 ? 3 : ratio >= 0.6 ? 2 : 1;
  var by = {}; SECS.forEach(function (k) { var rs = RUN.res.filter(function (r) { return r.dom === k; }); by[k] = [rs.filter(function (r) { return r.r === 2; }).length, rs.length]; });
  var prev = S.days[d], isFirst = !(prev && prev.done);
  var hist = (prev && prev.hist) || []; hist.push({ date: today(), stars: stars, first: first, tot: tot, by: by });
  S.days[d] = { done: true, stars: Math.max(stars, (prev && prev.stars) || 0), hist: hist };
  var bonus = stars * 10; S.points += RUN.pts + bonus; S.current = null; save();
  var pts = RUN.pts, maxC = RUN.maxCombo; RUN = null;
  var final = d === DATA.days.length - 1 && isFirst;
  app.innerHTML = topbar() + '<div class="screen"><div class="card endcard">' +
    '<div class="kicker">Mission ' + (d + 1) + L(' terminée', ' geschafft') + '</div><h2>' + D.place + '</h2>' +
    '<div class="bigstars">' + [0, 1, 2].map(function (i) { return '<span class="st' + (i < stars ? ' on' : '') + '" style="animation-delay:' + (300 + i * 350) + 'ms">★</span>'; }).join('') + '</div>' +
    '<p class="lead center">' + pick(CFG.lines['end' + stars]) + '</p>' +
    '<div class="reward win"><span class="ricon">' + D.reward.icon + '</span><div><small>' + (isFirst ? L('Nouveau trésor débloqué !', 'Neuer Schatz!') : L('Déjà dans ta collection', 'Schon in deiner Sammlung')) + '</small><br><b>' + D.reward.name + '</b></div></div>' +
    '<table class="mini">' + SECS.map(function (k) { return '<tr><td>' + CFG.icons[k] + ' ' + CFG.sec[k] + '</td><td>' + by[k][0] + '/' + by[k][1] + '</td></tr>'; }).join('') +
    '<tr><td>🔥 ' + L('Plus longue série', 'Längste Serie') + '</td><td>' + maxC + '</td></tr><tr><td>' + CFG.icons.points + L(' Points gagnés', ' Punkte') + '</td><td>+' + pts + ' (+' + bonus + L(' bonus étoiles', ' Sternbonus') + ')</td></tr></table>' +
    '<p class="muted small center">' + L('(réponses justes du premier coup)', '(beim ersten Versuch richtig)') + '</p>' +
    (final ? '<div class="final">' + CFG.lines.final + '</div>' : '') +
    '<div class="btns"><button class="primary big" data-act="home">' + BACK + '</button>' + (ECL ? '<button data-act="eclair">⚡ Bonus : Défi Éclair</button>' : '') + '</div></div></div>';
  tone(CFG.sounds.win, 0.1);
  setTimeout(function () { burst(final ? 40 : 20, document.querySelector('.bigstars')); }, 500);
  if (final) setTimeout(function () { burst(30); }, 1400);
}

/* ---------- revanches ---------- */
function renderRevIntro() {
  var n = S.missed.length;
  app.innerHTML = topbar() + '<div class="screen"><div class="card intro center"><div class="introicon">' + CFG.revIcon + '</div><h2>' + L('Revanches', 'Revanche') + '</h2>' +
    (n ? '<p class="lead">' + CFG.lines.revIntro + '</p><p>' + L('Questions à reconquérir : <b>', 'Offene Fragen: <b>') + n + '</b></p><p class="muted small">' + L('Une revanche réussie du premier coup disparaît de la liste et rapporte des points.', 'Eine Frage, die du beim ersten Versuch löst, verschwindet von der Liste und bringt Punkte.') + '</p>' +
      '<div class="btns"><button class="primary big" data-act="revgo">' + L('Prendre ma revanche (', 'Revanche spielen (') + Math.min(n, 10) + L(' questions)', ' Fragen)') + '</button><button class="ghost" data-act="home">' + BACK + '</button></div>'
      : '<p class="lead">' + CFG.lines.revEmpty + '</p><div class="btns"><button class="primary big" data-act="home">' + BACK + '</button></div>') + '</div></div>';
}
function startRev() {
  var list = shuffle(S.missed).slice(0, 10).map(function (m) { var q = clone(m.q); q.tries = 0; q.done = false; if (q.c) q.c = shuffle(q.c); return q; });
  if (!list.length) return renderRevIntro();
  RUN = { mode: 'rev', qs: list, i: 0, res: [], pts: 0, combo: 0, maxCombo: 0 };
  renderQ();
}
function finishRev() {
  var won = RUN.res.filter(function (r) { return r.r === 2; }).length, tot = RUN.res.length;
  S.points += RUN.pts; save(); var pts = RUN.pts; RUN = null;
  app.innerHTML = topbar() + '<div class="screen"><div class="card endcard center"><div class="introicon">' + CFG.revIcon + '</div><h2>' + L('Revanches terminées', 'Revanche beendet') + '</h2>' +
    '<p class="lead">' + L(won + ' revanche' + (won > 1 ? 's' : '') + ' gagnée' + (won > 1 ? 's' : '') + ' sur ' + tot + '.', won + ' von ' + tot + ' gewonnen.') + '</p><p>' + CFG.icons.points + ' +' + pts + L(' points', ' Punkte') + '</p>' +
    '<p class="muted">' + L('Il reste ' + S.missed.length + ' question' + (S.missed.length > 1 ? 's' : '') + ' à reconquérir.', 'Noch offen: ' + S.missed.length) + '</p>' +
    '<div class="btns"><button class="primary big" data-act="home">' + BACK + '</button></div></div></div>';
  if (won) burst(16);
}

/* ---------- collection ---------- */
function renderColl() {
  var h = '<div class="screen"><div class="card"><h2 class="center">🎁 ' + CFG.collTitle + '</h2><p class="center muted">' + L('Chaque mission terminée t\'offre un trésor.', 'Jede geschaffte Mission bringt dir einen Schatz.') + '</p><div class="coll">';
  DATA.days.forEach(function (D, i) {
    var st = S.days[i], done = st && st.done;
    h += '<div class="item' + (done ? ' got' : '') + '"><div class="iicon">' + (done ? D.reward.icon : '?') + '</div><div class="iname">' + (done ? D.reward.name : 'Mission ' + (i + 1)) + '</div><div class="istars">' + (done ? starsStr(st.stars) : '') + '</div></div>';
  });
  h += '</div><p class="center">' + L('Rang actuel : <b>', 'Dein Rang: <b>') + rank() + '</b></p><div class="ranks">' + CFG.ranks.map(function (r) { return '<span class="' + (daysDone() >= r.min ? 'on' : '') + '">' + r.name + '<small>' + r.min + (L(' mission', ' Mission') + (r.min > 1 ? L('s', 'en') : '')) + '</small></span>'; }).join('') + '</div>' +
    '<div class="btns"><button class="primary" data-act="home">' + BACK + '</button></div></div></div>';
  app.innerHTML = topbar() + h;
}

/* ---------- défi éclair ---------- */
function renderEclairIntro() {
  stopEclair();
  app.innerHTML = topbar() + '<div class="screen"><div class="card intro center"><div class="introicon">⚡</div><h2>Défi Éclair</h2>' +
    '<p class="lead">60 secondes pour répondre à un maximum de ' + (CFG.level === 'CM2' ? 'multiplications et divisions' : 'tables de multiplication') + '.</p>' +
    '<p>Record : <b>' + S.eclairBest + '</b> · chaque bonne réponse rapporte 2 ' + CFG.icons.points + '</p>' +
    '<div class="btns"><button class="primary big" data-act="ecgo">C\'est parti !</button><button class="ghost" data-act="home">' + BACK + '</button></div></div></div>';
}
function eclairGo() {
  stopEclair();
  EC = { t: 60, score: 0, cur: null, buf: '', lock: false, timer: null };
  var keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', 'del', '0', 'ok'];
  app.innerHTML = topbar() + '<div class="screen"><div class="card eclair center"><div class="ectop"><span>⏳ <b id="ect">60</b> s</span><span>✔ <b id="ecs">0</b></span></div>' +
    '<div class="ectime"><div id="ecbar"></div></div><div class="ecq" id="ecq"></div><div class="ecin" id="ecin">&nbsp;</div><div class="keypad">' +
    keys.map(function (k) { return '<button class="' + (k === 'ok' ? 'primary' : '') + '" data-act="key" data-k="' + k + '">' + (k === 'del' ? '⌫' : k === 'ok' ? 'OK' : k) + '</button>'; }).join('') +
    '</div><p class="muted small">Tu peux aussi taper au clavier puis Entrée.</p></div></div>';
  ecNext();
  EC.timer = setInterval(function () {
    if (!EC) return; EC.t--;
    var el = document.getElementById('ect'), b = document.getElementById('ecbar');
    if (el) el.textContent = EC.t; if (b) b.style.width = (EC.t / 60 * 100) + '%';
    if (EC.t <= 0) ecEnd();
  }, 1000);
}
function ecNext() {
  var a = R(2, 9), b = R(2, 10);
  if (CFG.level === 'CM2' && Math.random() < 0.35) EC.cur = { q: (a * b) + ' ÷ ' + a, a: b };
  else { if (Math.random() < .5) { var t = a; a = b; b = t; } EC.cur = { q: a + ' × ' + b, a: a * b }; }
  EC.buf = ''; EC.lock = false; ecDraw();
}
function ecDraw(cls) {
  var q = document.getElementById('ecq'), i = document.getElementById('ecin'), s = document.getElementById('ecs');
  if (q) q.textContent = EC.cur.q + ' = ?'; if (i) { i.innerHTML = EC.buf || '&nbsp;'; i.className = 'ecin ' + (cls || ''); } if (s) s.textContent = EC.score;
}
function ecKey(k) {
  if (!EC || EC.t <= 0 || EC.lock) return;
  if (k === 'del') EC.buf = EC.buf.slice(0, -1);
  else if (k === 'ok') {
    if (!EC.buf) return;
    if (+EC.buf === EC.cur.a) { EC.score++; tone([CFG.sounds.ok[0], CFG.sounds.ok[2]], 0.06); ecDraw('good'); EC.lock = true; setTimeout(function () { if (EC) ecNext(); }, 180); return; }
    tone(CFG.sounds.wrong, 0.1); EC.buf = String(EC.cur.a); ecDraw('bad'); EC.lock = true; setTimeout(function () { if (EC) ecNext(); }, 900); return;
  } else if (EC.buf.length < 3) EC.buf += k;
  ecDraw();
}
function ecEnd() {
  var sc = EC.score, rec = sc > S.eclairBest; clearInterval(EC.timer); EC = null;
  if (rec) S.eclairBest = sc; S.points += sc * 2; save();
  app.innerHTML = topbar() + '<div class="screen"><div class="card endcard center"><div class="introicon">⚡</div><h2>Temps écoulé !</h2>' +
    '<p class="lead"><b>' + sc + '</b> bonne' + (sc > 1 ? 's' : '') + ' réponse' + (sc > 1 ? 's' : '') + '</p>' +
    (rec ? '<p class="final">' + CFG.lines.record + '</p>' : '<p class="muted">Record : ' + S.eclairBest + '</p>') +
    '<p>' + CFG.icons.points + ' +' + sc * 2 + ' points</p><div class="btns"><button class="primary big" data-act="ecgo">Rejouer</button><button class="ghost" data-act="home">' + BACK + '</button></div></div></div>';
  tone(CFG.sounds.win, 0.09); if (rec) burst(24);
}

/* ---------- coin des grands-parents ---------- */
function pct(a, b) { return b ? Math.round(a / b * 100) + ' %' : '-'; }
function renderParents() {
  var rows = '', agg = {}; SECS.forEach(function (k) { agg[k] = [0, 0]; });
  var cell = function (L, k) { return L.by && L.by[k] ? L.by[k] : [0, 0]; };
  DATA.days.forEach(function (D, i) {
    var st = S.days[i];
    if (!st || !st.done) { rows += '<tr class="off"><td>J' + (i + 1) + '</td><td>' + D.place + '</td><td colspan="' + (SECS.length + 2) + '">pas encore jouée</td></tr>'; return; }
    var L = st.hist[st.hist.length - 1];
    SECS.forEach(function (k) { var c = cell(L, k); agg[k][0] += c[0]; agg[k][1] += c[1]; });
    rows += '<tr><td>J' + (i + 1) + '</td><td>' + D.place + '</td><td class="stars">' + starsStr(L.stars) + '</td>' +
      SECS.map(function (k) { var c = cell(L, k); return '<td>' + c[0] + '/' + c[1] + '</td>'; }).join('') + '<td class="small">' + L.date + (st.hist.length > 1 ? '<br>(' + st.hist.length + ' essais)' : '') + '</td></tr>';
  });
  var miss = S.missed.slice().sort(function (a, b) { return a.day - b.day; }).map(function (m) {
    return '<li><span class="tagd">J' + (m.day + 1) + ' · ' + CFG.sec[m.q.dom] + '</span> ' + esc(promptText(m.q)) + ' <b>→ ' + strip(ansText(m.q)) + '</b></li>';
  }).join('');
  var plan = DATA.days.map(function (D, i) { return '<li><b>J' + (i + 1) + '</b> ' + D.focus + '</li>'; }).join('');
  app.innerHTML = topbar() + '<div class="screen"><div class="card parents"><h2>👵👴 Le coin des grands-parents</h2>' +
    '<p>' + (CFG.parentsText || 'Une mission par jour, 15 à 20 minutes : 6 questions d\'orthographe, 5 de calcul et une lecture avec ses questions. Programme de ' + CFG.level + ', première période (septembre-octobre).') + '</p>' +
    '<p><b>Le principe :</b> à la première erreur, le jeu montre <i>où</i> se trouve l\'erreur (lettres fautives, chiffre faux, phrase du texte, astuce de remplacement). À la deuxième, il donne la réponse et range la question dans les « Revanches » à rejouer plus tard.</p>' +
    '<p class="tip">Le plus utile pour vous : regarder ensemble la liste des erreurs ci-dessous, et faire expliquer la règle avec ses mots plutôt que la réponse.</p>' +
    '<h3>Résultats (réponses justes du premier coup)</h3><div class="tblwrap"><table class="res"><tr><th></th><th>Mission</th><th>Étoiles</th>' + SECS.map(function (k) { return '<th>' + CFG.icons[k] + '</th>'; }).join('') + '<th>Date</th></tr>' + rows + '</table></div>' +
    '<div class="aggs">' + SECS.map(function (k) { return '<span>' + CFG.icons[k] + ' ' + CFG.sec[k] + ' <b>' + pct(agg[k][0], agg[k][1]) + '</b></span>'; }).join('') + (ECL ? '<span>⚡ Record Éclair <b>' + S.eclairBest + '</b></span>' : '') + '</div>' +
    '<h3>Erreurs à retravailler (' + S.missed.length + ')</h3>' + (miss ? '<ul class="misslist">' + miss + '</ul>' : '<p class="muted">Aucune pour le moment.</p>') +
    '<h3>Le programme des 10 jours</h3><ul class="planlist">' + plan + '</ul>' +
    '<details class="danger"><summary>Remettre le jeu à zéro</summary><p>Efface toutes les étoiles, points, trésors et erreurs enregistrés sur cet appareil.</p><button data-act="reset">Tout effacer</button></details>' +
    '<div class="btns"><button class="primary" data-act="home">' + BACK + '</button></div></div></div>';
}

/* ---------- événements ---------- */
document.addEventListener('click', function (ev) {
  var b = ev.target.closest('[data-act]'); if (!b) return;
  var act = b.getAttribute('data-act');
  switch (act) {
    case 'home': stopQT(); if (RUN && RUN.mode === 'rev') { S.points += RUN.pts; save(); } renderMap(); break;
    case 'qkey': padKey(b.getAttribute('data-k')); break;
    case 'mute': S.muted = !S.muted; save(); b.textContent = S.muted ? '🔇' : '🔊'; break;
    case 'day': renderIntro(+b.getAttribute('data-d')); break;
    case 'start': startDay(+b.getAttribute('data-d')); break;
    case 'quit':
      if (RUN && RUN.mode === 'day') { if (confirm(L('Faire une pause ? Ta mission est gardée, tu pourras la reprendre.', 'Pause machen? Deine Mission bleibt gespeichert.'))) { stopSay(); renderMap(); } }
      else { if (RUN) { S.points += RUN.pts; save(); } renderMap(); }
      break;
    case 'choice': var q = cur(); if (!q.done) submit(q.c[+b.getAttribute('data-i')], b); break;
    case 'check': var inp = document.getElementById('inp'); if (inp) submit(inp.value, null); break;
    case 'next': next(); break;
    case 'acc':
      var i2 = document.getElementById('inp'); if (!i2 || i2.disabled) break;
      var c = b.getAttribute('data-c'), s0 = i2.selectionStart != null ? i2.selectionStart : i2.value.length, s1 = i2.selectionEnd != null ? i2.selectionEnd : s0;
      i2.value = i2.value.slice(0, s0) + c + i2.value.slice(s1); i2.focus(); try { i2.setSelectionRange(s0 + c.length, s0 + c.length); } catch (e) {}
      break;
    case 'say': say(cur().say, 0.85, cur().lang); break;
    case 'say2': sayTwice(cur().say, 0.85, cur().lang); break;
    case 'fr': setFr(!FRON); break;
    case 'sayslow': SAYTOK++; say(cur().say, 0.55, cur().lang); break;
    case 'reveal': var sc = document.getElementById('secret'); if (sc) sc.classList.toggle('show'); break;
    case 'coll': renderColl(); break;
    case 'rev': renderRevIntro(); break;
    case 'revgo': startRev(); break;
    case 'eclair': renderEclairIntro(); break;
    case 'ecgo': eclairGo(); break;
    case 'key': ecKey(b.getAttribute('data-k')); break;
    case 'parents': renderParents(); break;
    case 'reset':
      if (confirm('Tout effacer pour ' + CFG.name + ' ?') && confirm('Vraiment ? Cette action est définitive.')) { S = fresh(); save(); renderMap(); }
      break;
  }
});
document.addEventListener('keydown', function (ev) {
  if (EC) {
    if (/^[0-9]$/.test(ev.key)) { ecKey(ev.key); ev.preventDefault(); }
    else if (ev.key === 'Backspace') { ecKey('del'); ev.preventDefault(); }
    else if (ev.key === 'Enter') { ecKey('ok'); ev.preventDefault(); }
    return;
  }
  var pq = RUN && RUN.qs && RUN.qs[RUN.i];
  if (pq && pq.pad && !pq.done && document.getElementById('padin')) {
    if (/^[0-9]$/.test(ev.key)) { padKey(ev.key); ev.preventDefault(); return; }
    if (ev.key === 'Backspace') { padKey('del'); ev.preventDefault(); return; }
    if (ev.key === 'Enter') { padKey('ok'); ev.preventDefault(); return; }
  }
  if (ev.key !== 'Enter') return;
  var n = document.getElementById('next');
  if (n) { ev.preventDefault(); n.click(); return; }
  var inp = document.getElementById('inp');
  if (inp && document.activeElement === inp) { ev.preventDefault(); submit(inp.value, null); return; }
  var t = ev.target.closest && ev.target.closest('.node[data-act]'); if (t) t.dispatchEvent(new MouseEvent('click', { bubbles: true }));
});
if (canSpeak) { try { speechSynthesis.getVoices(); } catch (e) {} }
window.__TEST__ = { GEN: GEN, words: words, isRight: isRight, cleanTyped: cleanTyped, prep: prep, timeLimit: timeLimit, sections: SECS, state: function () { return S; }, run: function () { return RUN; }, expireTimer: function () { if (QT) QT.left = 1; } };
renderMap();
})();
