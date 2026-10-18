/* Matteo Barbieri Photography — tutto il sito in un file: dati, pagine, contatti, cookie, animazioni.
   Ogni indirizzo (/, /live/, /interpol/ ...) è una pagina HTML vera generata da build.py; questo script la ridisegna nel browser. */
"use strict";
const S=[{"id":"elephant-brain","t":"Elephant Brain","p":"Locomotiv, Bologna · Harmonya Fest, Alchemica","d":"2025 — 2026","kind":"live","im":[["elephant-brain-00",1800,1201],["elephant-brain-01",1800,1201],["elephant-brain-02",1800,1440],["elephant-brain-03",1800,1440],["elephant-brain-10",1440,960],["elephant-brain-05",1800,1440],["elephant-brain-06",1800,1200],["elephant-brain-11",1800,1200],["elephant-brain-08",1800,1200],["elephant-brain-09",1800,1200]],"pub":[["The Festivals Backpack","https://www.festivalsbackpack.it/elephant-brain-incendiano-casolavalsenio-il-suonobuono-festival-chiude-in-bellezza/"]]},{"id":"johnny-marr","t":"Johnny Marr","p":"Estragon, Bologna","d":"08.11.2025","kind":"live","im":[["johnny-marr-00",1080,1350],["johnny-marr-01",1080,1350],["johnny-marr-02",1080,1350],["johnny-marr-07",1080,1350],["johnny-marr-04",1080,1350],["johnny-marr-05",1080,864],["johnny-marr-06",1080,1350]]},{"id":"interpol","t":"Interpol","p":"Sequoie Music Park, Bologna","d":"16.07.2026","kind":"live","im":[["interpol-00",1800,1200],["interpol-01",1200,1800],["interpol-02",1800,1200],["interpol-03",1800,1200],["interpol-04",1800,1200],["interpol-07",1800,1200],["interpol-06",1800,1200]],"pub":[["Spazio Rock","https://www.spaziorock.it/interpol-tour-2026-fotogallery/"]]},{"id":"a-perfect-circle","t":"A Perfect Circle","p":"Ferrara Summer Festival","d":"13.06.2026","kind":"live","im":[["a-perfect-circle-00",1800,1200],["a-perfect-circle-07",1800,1200],["a-perfect-circle-08",1800,1200],["a-perfect-circle-03",1200,1800],["a-perfect-circle-04",1800,1200],["a-perfect-circle-05",1800,1200],["a-perfect-circle-06",1800,1200]]},{"id":"pixies","t":"Pixies","p":"Parco della Musica, Milano","d":"14.07.2026","kind":"live","im":[["pixies-00",1800,1200],["pixies-06",1800,1200],["pixies-02",1800,1200],["pixies-03",1800,1200],["pixies-07",1800,1200],["pixies-05",1800,1200]],"pub":[["Spazio Rock","https://www.spaziorock.it/pixies-tour-2026-fotogallery/"]]},{"id":"the-zen-circus","t":"The Zen Circus","p":"Estragon, Bologna","d":"12.12.2025","kind":"live","im":[["the-zen-circus-00",1800,1200],["the-zen-circus-01",1800,1201],["the-zen-circus-02",1440,1800],["the-zen-circus-03",1800,1201],["the-zen-circus-04",1440,1800],["the-zen-circus-05",1800,1200],["the-zen-circus-07",1800,1201]],"pub":[["Booklet Magazine","https://bookletmagazine.com/zen-circus-estragon-bologna-2025-galleria-fotografica/"]]},{"id":"caparezza","t":"Caparezza","p":"Sequoie Music Park, Bologna","d":"08.07.2026","kind":"live","im":[["caparezza-00",1800,1200],["caparezza-01",1200,1800],["caparezza-02",1800,1200],["caparezza-03",1800,1200],["caparezza-04",1800,1200],["caparezza-07",1800,1200],["caparezza-06",1800,1200]],"pub":[["Spazio Rock","https://www.spaziorock.it/caparezza-tour-2026-fotogallery/"]]},{"id":"ministri","t":"Ministri","p":"Ferrara Sotto le Stelle","d":"22.07.2026","kind":"live","im":[["ministri-00",1800,1200],["ministri-01",1800,1200],["ministri-02",1200,1800],["ministri-03",1800,1200],["ministri-04",1800,1200],["ministri-05",1800,1200],["ministri-06",1800,1200]],"pub":[["Spazio Rock","https://www.spaziorock.it/ministri-tour-2026/"]]},{"id":"bambole-di-pezza","t":"Bambole di Pezza","p":"Estragon, Bologna","d":"06.05.2026","kind":"live","im":[["bambole-di-pezza-00",1200,1800],["bambole-di-pezza-01",1200,1800],["bambole-di-pezza-02",1200,1800],["bambole-di-pezza-03",1800,1200],["bambole-di-pezza-04",1800,1200],["bambole-di-pezza-05",1800,1200]]},{"id":"joan-thiele","t":"Joan Thiele","p":"Frogstock, Riolo Terme","d":"20.08.2026","kind":"live","im":[["joan-thiele-06",1800,1200],["joan-thiele-00",1800,1200],["joan-thiele-01",1200,1800],["joan-thiele-02",1800,1200],["joan-thiele-03",1200,1800],["joan-thiele-04",1200,1800],["joan-thiele-05",1800,1200]],"pub":[["The Festivals Backpack","https://www.festivalsbackpack.it/frogstock-2026-joan-thiele-recensione/"]]},{"id":"marlene-kuntz","t":"Marlene Kuntz","p":"Estragon, Bologna · Ferrara Sotto le Stelle","d":"marzo — luglio 2026","kind":"live","im":[["marlene-kuntz-00",1800,1200],["marlene-kuntz-01",1800,1200],["marlene-kuntz-02",1200,1800],["marlene-kuntz-03",1800,1200],["marlene-kuntz-04",1200,1800],["marlene-kuntz-05",1200,1800],["marlene-kuntz-07",1800,1200]],"pub":[["Spazio Rock","https://www.spaziorock.it/marlene-kuntz-tour-2026-fotograllery/"],["Booklet Magazine","https://bookletmagazine.com/marlene-kuntz-estragon-bologna-2026-galleria-fotografica/"]]},{"id":"kneecap","t":"Kneecap","p":"Sequoie Music Park, Bologna","d":"16.06.2026","kind":"live","im":[["kneecap-00",1200,1647],["kneecap-01",1800,1200],["kneecap-02",1800,1200],["kneecap-03",1800,1200],["kneecap-04",1800,1200],["kneecap-05",1800,1200]],"pub":[["Spazio Rock","https://www.spaziorock.it/kneecap-tour-2026-fotogallery/"]]},{"id":"subsonica","t":"Subsonica","p":"Caserme Rosse, Bologna · Festa Reggio","d":"giugno — settembre 2026","kind":"live","im":[["subsonica-00",1200,1800],["subsonica-01",1800,1200],["subsonica-07",1800,1200],["subsonica-03",1200,1800],["subsonica-04",1800,1200],["subsonica-05",1800,1200],["subsonica-06",1800,1200],["subsonica-08",1800,1200]],"pub":[["The Festivals Backpack","https://www.festivalsbackpack.it/subsonica-alla-festa-reggio-la-grandinata-di-bologna-si-trasforma-in-una-festa-di-famiglia/"]],"dEn":"June — September 2026"},{"id":"finley","t":"Finley","p":"Estragon, Bologna","d":"15.03.2026","kind":"live","im":[["finley-00",1200,1800],["finley-01",1800,1200],["finley-02",1800,1200],["finley-03",1800,1200],["finley-04",1800,1200],["finley-05",1800,1200],["finley-07",1800,1200]],"pub":[["Booklet Magazine","https://bookletmagazine.com/finley-estragon-bologna-2026-galleria-fotografica/"]]},{"id":"giorgio-poi","t":"Giorgio Poi","p":"Estragon, Bologna","d":"12.03.2026","kind":"live","im":[["giorgio-poi-00",1800,1440],["giorgio-poi-01",1800,1440],["giorgio-poi-02",1800,1440],["giorgio-poi-03",1800,1440],["giorgio-poi-06",1800,1200],["giorgio-poi-05",1800,1440]]},{"id":"jehnny-beth","t":"Jehnny Beth","p":"Ferrara Summer Festival","d":"13.06.2026","kind":"live","im":[["jehnny-beth-00",1800,1200],["jehnny-beth-01",1800,1200],["jehnny-beth-02",1200,1800],["jehnny-beth-03",1800,1200],["jehnny-beth-06",1800,1200],["jehnny-beth-05",1800,1200]]},{"id":"of-monsters-and-men","t":"Of Monsters and Men","p":"Sequoie Music Park, Bologna","d":"25.06.2026","kind":"live","im":[["of-monsters-and-men-00",1800,1200],["of-monsters-and-men-01",1200,1800],["of-monsters-and-men-02",1200,1800],["of-monsters-and-men-03",1800,1200],["of-monsters-and-men-04",1800,1200],["of-monsters-and-men-07",1800,1200],["of-monsters-and-men-06",1200,1800]],"pub":[["The Festivals Backpack","https://www.festivalsbackpack.it/of-monsters-and-men-the-mouse-parade-tour-2026/"]]},{"id":"vulfpeck","t":"Vulfpeck · The Fearless Flyers","p":"Parco della Musica, Milano","d":"13.07.2026","kind":"live","im":[["vulfpeck-00",1200,1800],["vulfpeck-01",1200,1800],["vulfpeck-02",1800,1200],["vulfpeck-06",1800,1200],["vulfpeck-04",1800,1200],["vulfpeck-05",1800,1200]],"pub":[["Spazio Rock","https://www.spaziorock.it/vulfpeck-tour-2026-fotogallery/"]]},{"id":"pride-of-haka","t":"Pride of Haka","p":"Set del videoclip","d":"02.2026","kind":"ritratti","im":[["pride-of-haka-00",1440,1800],["pride-of-haka-01",1800,1200],["pride-of-haka-08",1200,1800],["pride-of-haka-03",1800,1200],["pride-of-haka-04",1800,1200],["pride-of-haka-05",1800,1200],["pride-of-haka-06",1200,1800],["pride-of-haka-07",1800,1200]],"pEn":"Music video set"},{"id":"olivia-santimone","t":"Olivia Santimone","p":"Sessione promo in studio","d":"2026","kind":"ritratti","im":[["olivia-santimone-00",1800,1440],["olivia-santimone-01",1800,1440],["olivia-santimone-02",1800,1201],["olivia-santimone-03",1800,1440],["olivia-santimone-04",1800,1440],["olivia-santimone-05",1800,1175],["olivia-santimone-06",1800,1201]],"pEn":"Studio promo session"},{"id":"incisions","t":"Incisions","p":"Foto promo","d":"2026","kind":"ritratti","im":[["incisions-00",1800,1200],["incisions-01",1800,1200],["incisions-02",1200,1800],["incisions-03",1800,1200],["incisions-04",1200,1800]],"pEn":"Promo photos"},{"id":"kylie-davide-dalila","t":"Kylie, Davide e Dalila","p":"Ritratto di famiglia","d":"10.2025","kind":"privati","im":[["kylie-davide-dalila-00",1800,1201],["kylie-davide-dalila-01",1800,1201],["kylie-davide-dalila-02",1800,1201],["kylie-davide-dalila-03",1800,1201],["kylie-davide-dalila-04",1800,1201],["kylie-davide-dalila-05",1800,1201],["kylie-davide-dalila-06",1800,1201]],"pEn":"Family portrait"},{"id":"studio-olistico-kairos","t":"Studio Olistico Kairos","p":"Servizio brand · Rioveggio (BO)","d":"09.2025","kind":"brand","im":[["studio-olistico-kairos-00",1800,1201],["studio-olistico-kairos-01",1800,1201],["studio-olistico-kairos-02",1800,1201],["studio-olistico-kairos-03",1800,1440],["studio-olistico-kairos-04",1800,1440],["studio-olistico-kairos-05",1800,1440],["studio-olistico-kairos-06",1800,1440],["studio-olistico-kairos-07",1800,1201],["studio-olistico-kairos-08",1800,1201]],"pEn":"Brand shoot · Rioveggio (BO)"},{"id":"my-style-by-vero","t":"My Style by Vero","p":"Artigianato dipinto a mano · mercatino","d":"06.2025","kind":"brand","im":[["my-style-by-vero-05",1800,1200],["my-style-by-vero-00",1800,1201],["my-style-by-vero-01",1800,1201],["my-style-by-vero-02",1800,1201],["my-style-by-vero-03",1800,1201]],"pEn":"Hand-painted crafts · market"},{"id":"primavera-fresh-gin","t":"Primavera Fresh Gin","p":"Still life di prodotto","d":"11.2025","kind":"brand","im":[["primavera-fresh-gin-00",1152,1440],["primavera-fresh-gin-01",1440,960],["primavera-fresh-gin-02",1440,960],["primavera-fresh-gin-03",960,1440]],"pEn":"Product still life"},{"id":"accademia-italiana-bari","t":"Accademia Italiana · Roadshow","p":"Confindustria, Bari · Gruppo Finlogic","d":"01.10.2026","kind":"eventi","im":[["accademia-italiana-bari-00",1800,1200],["accademia-italiana-bari-01",1800,1200],["accademia-italiana-bari-02",1800,1200],["accademia-italiana-bari-03",1800,1200],["accademia-italiana-bari-04",1800,1200]]},{"id":"battesimo","t":"Battesimo di Leonardo","p":"Reportage di famiglia","d":"2026","kind":"privati","im":[["battesimo-00",1800,1200],["battesimo-01",1200,1800],["battesimo-02",1200,1800],["battesimo-03",1800,1200],["battesimo-04",1800,1200],["battesimo-05",1800,1200]],"tEn":"Leonardo's Baptism","pEn":"Family reportage"},{"id":"sherwood-skate-park","t":"Sherwood Skate Park","p":"Inaugurazione","d":"07.2026","kind":"eventi","im":[["sherwood-skate-park-00",1200,1800],["sherwood-skate-park-01",1800,1200],["sherwood-skate-park-02",1200,1800],["sherwood-skate-park-03",1800,1200],["sherwood-skate-park-04",1800,1200],["sherwood-skate-park-05",1200,1800],["sherwood-skate-park-06",1800,1200]],"pEn":"Opening"},{"id":"street-buskers","t":"Ferrara Buskers Festival","p":"Street · Ferrara","d":"2026","kind":"reportage","im":[["street-buskers-00",1200,1800],["street-buskers-01",1200,1800],["street-buskers-02",1200,1800],["street-buskers-03",1800,1200],["street-buskers-04",1200,1800],["street-buskers-05",1800,1200],["street-buskers-06",1800,1200],["street-buskers-07",1800,1200]]},{"id":"reportage","t":"Reportage","p":"Palio di Ferrara · Workshop Leila Bologna","d":"2025","kind":"reportage","im":[["corteo-storico-00",1200,1800],["corteo-storico-01",1200,1800],["corteo-storico-02",1200,1800],["corteo-storico-03",1200,1800],["corteo-storico-04",1200,1800],["corteo-storico-05",1200,1800],["corteo-storico-06",1800,1200],["sharing-before-christmas-00",1800,1440]],"pEn":"Palio di Ferrara · Leila Bologna workshop"},{"id":"viaggi","t":"Viaggi","p":"Stoccolma · Finlandia","d":"2025 — 2026","kind":"viaggi","im":[["stoccolma-00",1800,1200],["stoccolma-01",1800,1200],["stoccolma-02",1800,1200],["stoccolma-03",1800,1200],["stoccolma-04",1200,1800],["stoccolma-05",1800,1200],["stoccolma-06",1800,1200],["finlandia-00",1800,1201],["finlandia-01",1800,1440],["finlandia-02",1800,1201],["finlandia-03",1800,1440],["finlandia-04",1800,1201],["finlandia-05",1800,1201],["finlandia-06",1800,1201]],"tEn":"Travel","pEn":"Stockholm · Finland"}];
const CONTACT={email:"info@matteobarbieri.it",phone:"+39 340 494 3680",instagram:"matteobarbieriph"};

/* ---------- contenuti scelti a mano ---------- */
// copertina della home: foto senza firma (regola: le copertine restano pulite)
const HERO={img:"hero",to:"interpol",t:"Interpol",p:"Sequoie Music Park, Bologna",d:["luglio 2026","July 2026"],
  alt:["Paul Banks degli Interpol tra il fumo sul palco del Sequoie Music Park di Bologna","Paul Banks of Interpol in the stage smoke at Sequoie Music Park, Bologna"]};
// le storie che scorrono di lato: [serie, foto]
const STORIES=[["caparezza","caparezza-02"],["pixies","pixies-06"],["of-monsters-and-men","of-monsters-and-men-00"],["subsonica","subsonica-03"],["marlene-kuntz","marlene-kuntz-01"]];
const REVEAL={to:"elephant-brain",img:"elephant-brain-00",t:["Il momento giusto dura un attimo","The right moment lasts a second"],c:"Elephant Brain, Locomotiv Club, Bologna",
  alt:["Il cantante degli Elephant Brain si lancia sul pubblico al Locomotiv di Bologna","The Elephant Brain singer dives into the crowd at Locomotiv, Bologna"]};
const SVC=[
 {img:"joan-thiele-05",lp:"fotografo-concerti-bologna",t:["Concerti e tour","Concerts and tours"],alt:["Joan Thiele canta tra i fari rossi","Joan Thiele singing between red stage lights"],
  p:["Racconto la serata come la vive il pubblico: il palco, la gente, quello che succede tra un pezzo e l'altro. Per band, locali e uffici stampa, con le gallerie pronte per comunicati e social.","I capture the night the way the crowd lives it: the stage, the people, what happens between songs. For bands, venues and press offices, with galleries ready for press releases and social media."]},
 {img:"kneecap-03",lp:"fotografo-festival",t:["Festival","Festivals"],alt:["Kneecap sul palco del Sequoie Music Park","Kneecap on stage at Sequoie Music Park"],
  p:["Una o più giornate: artisti, pubblico, allestimenti e dietro le quinte. Se serve, le prime foto arrivano mentre il festival è ancora in corso.","One or more days: artists, crowd, production and backstage. If you need them, the first photos arrive while the festival is still going."]},
 {img:"sonika-studio",lp:"foto-promozionali-band",t:["Foto promo, sale prova e studi","Promo, rehearsal rooms and studios"],alt:["La sala regia dello studio Sonika","The control room at Sonika studio"],
  p:["Ritratti per la stampa e per Spotify, copertine, set di videoclip. E gli spazi dove nasce la musica: sale prova e studi di registrazione, raccontati con la stessa luce dei concerti.","Portraits for press and Spotify, covers, music video sets. And the places where music is made: rehearsal rooms and recording studios, shot with the same light as a gig."]},
 {img:"sherwood-skate-park-03",lp:"fotografo-eventi-aziendali",t:["Eventi, aziende e famiglie","Events, companies and families"],alt:["Uno skater in volo allo Sherwood Skate Park","A skater in the air at Sherwood Skate Park"],
  p:["Convegni, inaugurazioni, prodotti, battesimi. Immagini naturali, senza far mettere in posa nessuno, anche in trasferta.","Conferences, openings, products, christenings. Natural images, nobody forced into a pose, travel included."]}];
const REVIEWS=[["Ha saputo guidarmi e aspettare il momento giusto per lo scatto, creando un'atmosfera rilassata che mi ha permesso di sentirmi completamente a mio agio davanti all'obiettivo.","Deborah Merola"],
 ["Grande professionalità, puntualità e strumentazione. Belle idee non scontate, è riuscito a dare un tocco artistico a foto professionali senza esagerare.","Marco Gambarini"]];
const VENUES=["Estragon","Locomotiv","Covo Club","Sequoie Music Park","Ferrara Summer Festival","Ferrara Sotto le Stelle","Frogstock","Parco della Musica","Festa Reggio"];
const PUBS=[
 {o:"Spazio Rock",u:"https://www.spaziorock.it/author/matteo-barbieri/",it:"Fotogallery dei concerti",en:"Concert photo galleries",a:[
  ["2026-08-13","Dropkick Murphys","Tour 2026","https://www.spaziorock.it/dropkick-murphys-tour-2026-fotogallery/"],
  ["2026-07-31","Marlene Kuntz","Tour 2026","https://www.spaziorock.it/marlene-kuntz-tour-2026-fotograllery/"],
  ["2026-07-24","The Notwist","Tour 2026","https://www.spaziorock.it/notwist-tour-2026-fotogallery/"],
  ["2026-07-23","Ministri","Tour 2026","https://www.spaziorock.it/ministri-tour-2026/"],
  ["2026-07-18","Interpol","Tour 2026","https://www.spaziorock.it/interpol-tour-2026-fotogallery/"],
  ["2026-07-15","Pixies","Tour 2026","https://www.spaziorock.it/pixies-tour-2026-fotogallery/"],
  ["2026-07-14","Vulfpeck","Tour 2026","https://www.spaziorock.it/vulfpeck-tour-2026-fotogallery/"],
  ["2026-07-09","Caparezza","Tour 2026","https://www.spaziorock.it/caparezza-tour-2026-fotogallery/"],
  ["2026-06-17","Kneecap","Tour 2026","https://www.spaziorock.it/kneecap-tour-2026-fotogallery/"]]},
 {o:"The Festivals Backpack",u:"https://www.festivalsbackpack.it/",it:"Foto e recensioni",en:"Photos and reviews",txt:1,a:[
  ["2026-09-06","Subsonica","Festa Reggio","https://www.festivalsbackpack.it/subsonica-alla-festa-reggio-la-grandinata-di-bologna-si-trasforma-in-una-festa-di-famiglia/"],
  ["2026-08-21","Joan Thiele","Frogstock, Riolo Terme","https://www.festivalsbackpack.it/frogstock-2026-joan-thiele-recensione/"],
  ["2026-06-26","Of Monsters and Men","The Mouse Parade Tour","https://www.festivalsbackpack.it/of-monsters-and-men-the-mouse-parade-tour-2026/"],
  ["2026-06-21","Elephant Brain","Suonobuono Festival, Casola Valsenio","https://www.festivalsbackpack.it/elephant-brain-incendiano-casolavalsenio-il-suonobuono-festival-chiude-in-bellezza/"]]},
 {o:"Booklet Magazine",u:"https://bookletmagazine.com/",it:"Gallerie fotografiche",en:"Photo galleries",a:[
  ["2026-03-19","Marlene Kuntz","Estragon, Bologna","https://bookletmagazine.com/marlene-kuntz-estragon-bologna-2026-galleria-fotografica/"],
  ["2026-03-16","Tom Smith","Ferrara Sotto le Stelle","https://bookletmagazine.com/tom-smith-ferrara-sotto-le-stelle-2026-galleria-fotografica/"],
  ["2026-03-15","Finley","Estragon, Bologna","https://bookletmagazine.com/finley-estragon-bologna-2026-galleria-fotografica/"],
  ["2025-12-12","The Zen Circus","Estragon, Bologna","https://bookletmagazine.com/zen-circus-estragon-bologna-2025-galleria-fotografica/"],
  ["2025-12-07","Raein","Locomotiv Club, Bologna","https://bookletmagazine.com/raein-locomotiv-club-bologna-2025-galleria-fotografica/"],
  ["2025-11-23","Wombo","Covo Club, Bologna","https://bookletmagazine.com/wombo-bologna-covo-club-2025-galleria-fotografica/"],
  ["2025-10-18","New Candys","Covo Club, Bologna","https://bookletmagazine.com/new-candys-covo-club-bologna-2025-galleria-fotografica/"],
  ["2025-10-11","mclusky","Covo Club, Bologna","https://bookletmagazine.com/mclusky-covo-club-bologna-2025-galleria-fotografica/"],
  ["2025-10-07","L.A. Witch","Covo Club, Bologna","https://bookletmagazine.com/la-witch-covo-club-bologna-2025-galleria-fotografica/"]]}];
const STEPS=[["Mi scrivi data, luogo e tipo di lavoro. Ti rispondo con disponibilità e preventivo.","Send me the date, place and type of job. I reply with availability and a quote."],
 ["Ci accordiamo su accrediti, scaletta, momenti chiave e cosa ti serve davvero.","We agree on accreditation, schedule, key moments and what you really need."],
 ["Ricevi una selezione già editata, in alta risoluzione e nei formati per web e social.","You receive an edited selection in high resolution, plus web and social formats."]];
const LANDS=[
 {id:"fotografo-concerti-bologna",ti:"Fotografo concerti a Bologna",tiEn:"Concert photographer in Bologna",
  h:["Fotografo di concerti a Bologna","Concert photographer in Bologna"],
  d:["Fotografo concerti a Bologna per band, locali, uffici stampa e testate. Scatto sotto i palchi di Estragon, Locomotiv, Covo Club e Sequoie Music Park: Interpol, Caparezza, Kneecap, Of Monsters and Men, Johnny Marr, The Zen Circus, Marlene Kuntz, Finley, Giorgio Poi. Le mie gallerie escono su Spazio Rock, Booklet Magazine e The Festivals Backpack.","Concert photographer in Bologna for bands, venues, press offices and magazines. I shoot at Estragon, Locomotiv, Covo Club and Sequoie Music Park: Interpol, Caparezza, Kneecap, Of Monsters and Men, Johnny Marr, The Zen Circus, Marlene Kuntz, Finley, Giorgio Poi. My galleries are published by Spazio Rock, Booklet Magazine and The Festivals Backpack."],
  f:s=>s.kind==="live"&&/Bologna/.test(s.p||""),
  q:[["Quanto costa un servizio fotografico a un concerto?","Dipende da durata, luogo e uso delle foto. Mandami data, locale e cosa ti serve: ti rispondo con disponibilità e preventivo."],
     ["Lavori anche per band emergenti e piccoli locali?","Sì: date in club, release party, foto promo e set di videoclip. La selezione arriva già pronta per social, press kit e copertine."],
     ["In quanto tempo consegni le foto?","I tempi si concordano prima dell'evento. Ricevi una selezione già editata, in alta risoluzione e nei formati per web e social."],
     ["Ti sposti fuori Bologna?","Sì. Lavoro tra Bologna e Ferrara e mi sposto in tutto il Nord Italia e oltre."]]},
 {id:"fotografo-concerti-ferrara",ti:"Fotografo concerti a Ferrara",tiEn:"Concert photographer in Ferrara",
  h:["Fotografo di concerti a Ferrara","Concert photographer in Ferrara"],
  d:["Fotografo concerti e live a Ferrara, la mia città. Ho fotografato A Perfect Circle e Jehnny Beth al Ferrara Summer Festival, Ministri e Marlene Kuntz a Ferrara Sotto le Stelle, e racconto in strada il Ferrara Buskers Festival. Disponibile per band, organizzatori, uffici stampa e testate.","Concert and live photographer in Ferrara, my home town. I have shot A Perfect Circle and Jehnny Beth at Ferrara Summer Festival, Ministri and Marlene Kuntz at Ferrara Sotto le Stelle, and the Ferrara Buskers Festival on the street. Available for bands, promoters, press offices and magazines."],
  f:s=>/Ferrara/.test(s.p||"")&&(s.kind==="live"||s.id==="street-buskers"),
  q:[["Quanto costa un servizio fotografico a un concerto?","Dipende da durata, luogo e uso delle foto. Mandami data, luogo e cosa ti serve: ti rispondo con disponibilità e preventivo."],
     ["Copri anche festival di più giorni?","Sì: una o più giornate, con artisti, pubblico, allestimenti e dietro le quinte, e gallerie pronte per comunicati, sito e social."],
     ["In quanto tempo consegni le foto?","I tempi si concordano prima dell'evento. Ricevi una selezione già editata, in alta risoluzione e nei formati per web e social."],
     ["Lavori anche fuori Ferrara?","Sì. Lavoro tra Ferrara e Bologna e mi sposto in tutto il Nord Italia e oltre."]]},
 {id:"fotografo-festival",ti:"Fotografo per festival musicali",tiEn:"Music festival photographer",
  h:["Fotografo per festival musicali","Music festival photographer"],
  d:["Copertura fotografica di festival musicali: palco, pubblico, atmosfera e dietro le quinte, tutto quello che serve a raccontare l'edizione e a vendere la prossima. Ho fotografato Ferrara Summer Festival, Ferrara Sotto le Stelle, Sequoie Music Park, Frogstock, Festa Reggio e Ferrara Buskers Festival.","Photo coverage for music festivals: stage, crowd, atmosphere and behind the scenes, everything you need to tell this year's story and sell the next one. I have shot Ferrara Summer Festival, Ferrara Sotto le Stelle, Sequoie Music Park, Frogstock, Festa Reggio and Ferrara Buskers Festival."],
  f:s=>/Festival|Sotto le Stelle|Sequoie|Frogstock|Festa Reggio|Fest/.test(s.p||"")||s.id==="street-buskers",
  q:[["Cosa comprende la copertura di un festival?","Una o più giornate: artisti sul palco, pubblico, allestimenti e dietro le quinte. Le gallerie arrivano pronte per comunicati stampa, sito e social."],
     ["Puoi consegnare le foto durante il festival?","Sì, la consegna rapida si concorda prima dell'evento, così hai le foto per i social mentre il festival è ancora in corso."],
     ["Lavori anche per uffici stampa e testate?","Sì: fotografo per Spazio Rock, Booklet Magazine e The Festivals Backpack, anche con il testo della recensione."],
     ["Quanto costa?","Dipende da giornate, orari e uso delle foto. Scrivimi date e luogo e ti mando disponibilità e preventivo."]]},
 {id:"foto-promozionali-band",ti:"Foto promozionali per band e artisti",tiEn:"Promo photos for bands and artists",
  h:["Foto promozionali per band e artisti","Promo photos for bands and artists"],
  d:["Foto promo, ritratti per stampa e streaming, set di videoclip e backstage per band e artisti. Lo stesso sguardo che porto sotto i palchi, applicato alle immagini che ti servono per uscire: copertine, press kit, Spotify e social. Fotografo anche sale prova e studi di registrazione.","Promo photos, portraits for press and streaming, music video sets and backstage for bands and artists. The same eye I bring to live shows, applied to the images you need for a release: covers, press kits, Spotify and social media. I also shoot rehearsal rooms and recording studios."],
  f:s=>s.kind==="ritratti",
  q:[["Dove si fa lo shooting?","In studio, in sala prove, in esterni o sul set del videoclip: decidiamo insieme il posto giusto per il progetto."],
     ["Cosa ricevo?","Una selezione già editata, in alta risoluzione e nei formati per web, social, press kit e copertine."],
     ["Fotografi anche i concerti della band?","Sì: copertura live di date e release party, così hai foto promo e live con lo stesso stile."],
     ["Quanto costa?","Dipende da durata, luogo e numero di foto. Scrivimi cosa ti serve e ti mando un preventivo."]]},
 {id:"fotografo-eventi-aziendali",ti:"Fotografo per eventi aziendali e brand",tiEn:"Corporate event and brand photographer",
  h:["Fotografo per eventi aziendali e brand","Corporate event and brand photographer"],
  d:["Lo stesso sguardo dei concerti applicato a convegni, roadshow, workshop, inaugurazioni, brand e prodotti. Immagini naturali, senza pose forzate, per comunicati, sito e social. Tra Ferrara e Bologna, con trasferte in tutta Italia.","The same eye I bring to concerts, applied to conferences, roadshows, workshops, openings, brands and products. Natural, unstaged images for press releases, websites and social media. Based between Ferrara and Bologna, travelling across Italy."],
  f:s=>s.kind==="eventi"||s.kind==="brand",
  q:[["Che tipo di eventi fotografi?","Convegni, roadshow, workshop, inaugurazioni ed eventi aziendali, oltre a servizi brand e still life di prodotto."],
     ["Ti sposti fuori regione?","Sì, ad esempio per il roadshow di Accademia Italiana e Gruppo Finlogic in Confindustria a Bari."],
     ["Cosa ricevo?","Una selezione già editata, in alta risoluzione e nei formati per web e social, con tempi concordati prima dell'evento."],
     ["Quanto costa?","Dipende da durata, luogo e uso delle foto. Scrivimi data e tipo di evento e ti mando disponibilità e preventivo."]]}];
const SERV=[
 {lp:"foto-promozionali-band",k:["Band e artisti","Bands and artists"],t:["Live, promo e tour","Live, promo and touring"],d:["Racconto il concerto come lo vive chi è sotto il palco, e costruisco le immagini che servono alla band dopo.","I capture the show the way the crowd lives it, and deliver the images the band needs afterwards."],li:[["Copertura live di date e release party","Live coverage of tour dates and release parties"],["Foto promo e ritratti per stampa e streaming","Promo photos and portraits for press and streaming"],["Set di videoclip, backstage, sale prova e studi","Music video sets, backstage, rehearsal rooms and studios"],["Selezione pronta per social, press kit e copertine","Edited selection ready for social media, press kits and covers"]]},
 {lp:"fotografo-festival",k:["Festival, club e uffici stampa","Festivals, venues and press offices"],t:["Copertura completa dell'evento","Full event coverage"],d:["Palco, pubblico, atmosfera: tutto quello che serve a raccontare l'edizione e a vendere la prossima.","Stage, crowd and atmosphere: everything you need to tell this year's story and sell the next one."],li:[["Copertura di una o più giornate","Single-day or multi-day coverage"],["Artisti, pubblico, allestimenti e dietro le quinte","Artists, audience, production and behind the scenes"],["Gallerie per comunicati, sito e social","Galleries for press releases, website and social media"],["Consegna rapida concordata prima dell'evento","Fast delivery agreed before the event"]]},
 {lp:"fotografo-concerti-bologna",k:["Testate e magazine","Magazines and media"],t:["Live report e reportage","Live reports and reportage"],d:["Fotografo concerti e festival per Spazio Rock, Booklet Magazine e The Festivals Backpack, anche con il testo.","I shoot concerts and festivals for Spazio Rock, Booklet Magazine and The Festivals Backpack, and can write the review too."],li:[["Gallerie live per articoli e recensioni","Live galleries for articles and reviews"],["Reportage su festival e territorio","Reportage on festivals and local scenes"],["Foto più articolo, quando serve","Photos plus article, when needed"]]},
 {lp:"fotografo-eventi-aziendali",k:["Aziende, brand e privati","Companies, brands and private clients"],t:["Eventi, prodotto e momenti importanti","Events, products and milestones"],d:["Lo stesso sguardo dei concerti applicato a eventi aziendali, brand, prodotti e famiglie.","The same eye I bring to concerts, applied to corporate events, brands, products and families."],li:[["Convegni, roadshow e workshop","Conferences, roadshows and workshops"],["Ritratti e immagini per brand e attività","Portraits and imagery for brands and businesses"],["Still life di prodotto","Product still life"],["Battesimi, ritratti di famiglia e con animali","Christenings, family and pet portraits"]]}];
const KINDS={live:["Live","Live"],ritratti:["Ritratti","Portraits"],brand:["Brand e prodotto","Brand and product"],eventi:["Eventi e corporate","Events and corporate"],reportage:["Reportage e street","Reportage and street"],privati:["Privati e famiglie","Private and family"],viaggi:["Viaggi","Travel"]};
const LAV=["brand","eventi","reportage","privati","viaggi"];

/* ---------- strumenti ---------- */
let LANG=(()=>{try{const q=new URLSearchParams(location.search).get("lang");if(q==="en"||q==="it")return q;const v=localStorage.getItem("lang");if(v)return v}catch(e){}return /^it\b/i.test(navigator.language||"it")?"it":"en"})();
const T=(it,en)=>LANG==="en"?en:it;
const L2=a=>T(a[0],a[1]);
const F=(s,k)=>(LANG==="en"&&s[k+"En"])||s[k];
const K=k=>L2(KINDS[k]);
const $=id=>document.getElementById(id);
const el=(t,a={},...k)=>{const e=document.createElement(t);for(const[x,y]of Object.entries(a)){if(x==="class")e.className=y;else if(x.startsWith("on"))e.addEventListener(x.slice(2),y);else e.setAttribute(x,y)}k.forEach(c=>c!=null&&e.append(c));return e};
const U=id=>id?"/"+id+"/":"/";
const pad=n=>String(n).padStart(2,"0");
const ext={target:"_blank",rel:"noopener"};
const WA=t=>"https://wa.me/"+CONTACT.phone.replace(/\D/g,"")+"?text="+encodeURIComponent(t);
const ROUTE=()=>location.pathname.replace(/^\/+|\/+$/g,"").split("/")[0]||"";
const byId=id=>S.find(s=>s.id===id);
const lines=(...t)=>t.map(x=>el("span",{class:"line"},el("span",{},x)));
const PRE=navigator.webdriver===true;              // prerender di build.py: niente animazioni
const MOTION=!PRE&&!matchMedia("(prefers-reduced-motion: reduce)").matches;
function setLang(l){try{localStorage.setItem("lang",l)}catch(e){}track("lingua",{nuova:l});const u=new URL(location.href);u.searchParams.delete("lang");location.replace(u.pathname+u.hash)}

/* ---------- testata, menu, contatti in fondo ---------- */
const NAV=[["live","Live","Live"],["ritratti","Ritratti","Portraits"],["lavori","Lavori","Commissions"],["pubblicazioni","Pubblicazioni","Press"],["servizi","Servizi","Services"],["contatti","Contatti","Contact"]];
function langBtn(){return el("button",{class:"lang",type:"button","aria-label":T("Switch to English","Passa all'italiano"),onclick:()=>setLang(LANG==="it"?"en":"it")},...(LANG==="it"?[el("b",{},"IT")," / EN"]:["IT / ",el("b",{},"EN")]))}
function chrome(here){
  document.documentElement.lang=LANG;
  const nav=$("nav");nav.innerHTML="";nav.setAttribute("aria-label",T("Sezioni","Sections"));
  NAV.forEach(([h,i,e])=>nav.append(el("a",{href:U(h),...(h===here?{"aria-current":"page"}:{})},T(i,e))));
  nav.append(langBtn());
  const mb=$("menuBtn");mb.innerHTML="";mb.append(T("Menu","Menu"),el("span",{"aria-hidden":"true"}));
  mb.onclick=()=>openSheet(true);
  const sh=$("sheet");sh.innerHTML="";
  sh.append(el("div",{class:"hd"},el("a",{class:"logo",href:"/"},"MATTEO",el("i",{"aria-hidden":"true"}),"BARBIERI"),el("button",{type:"button",onclick:()=>openSheet(false)},T("Chiudi","Close"))),
    el("nav",{"aria-label":T("Sezioni","Sections")},...NAV.map(([h,i,e])=>el("a",{href:U(h)},T(i,e)))),
    el("div",{class:"ft"},el("a",{href:"mailto:"+CONTACT.email},CONTACT.email),langBtn()));
  sh.classList.add("g");
  const fab=$("fab");fab.setAttribute("aria-label",T("Contatto rapido","Quick contact"));
  const m=fab.querySelector('[data-k="mail"]');m.href="mailto:"+CONTACT.email+"?subject="+encodeURIComponent(T("Richiesta servizio fotografico","Photography enquiry"));m.setAttribute("aria-label",T("Scrivimi una email","Send me an email"));
  fab.querySelector('[data-k="wa"]').href=WA(T("Ciao Matteo, ti scrivo dal tuo sito: vorrei sapere disponibilità e preventivo per un servizio fotografico.","Hi Matteo, I found you through your website: I would like to ask about availability and a quote for a photo shoot."));
  contatti();
  $("lb").setAttribute("aria-label",T("Foto a schermo intero","Full screen photo"));
  $("lbX").textContent=T("Chiudi","Close");
  $("lbP").setAttribute("aria-label",T("Foto precedente","Previous photo"));$("lbN").setAttribute("aria-label",T("Foto successiva","Next photo"));
}
let sheetLast=null;
function openSheet(o){const sh=$("sheet");
  if(o){sheetLast=document.activeElement;sh.hidden=false;document.body.style.overflow="hidden";lenis&&lenis.stop();
    if(MOTION&&window.gsap){gsap.fromTo(sh,{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:.7,ease:"power4.inOut"});gsap.from(sh.querySelectorAll("nav a"),{yPercent:60,opacity:0,stagger:.05,duration:.7,delay:.25,ease:"power3.out"})}
    sh.querySelector("nav a").focus()}
  else{sh.hidden=true;document.body.style.overflow="";lenis&&lenis.start();sheetLast&&sheetLast.focus()}}
addEventListener("keydown",e=>{if(e.key==="Escape"&&!$("sheet").hidden)openSheet(false)});

function contatti(){
  const c=$("contatti");c.innerHTML="";
  const tickers=[0,1].map(()=>el("div",{class:"tt"},...VENUES.map(v=>el("span",{},v))));
  c.append(
    el("div",{class:"g"},
      el("h2",{},...lines(T("Scrivimi","Get in touch"))),
      el("div",{class:"cg"},
        el("div",{},
          el("p",{class:"lead"},T("Dimmi data, luogo e che lavoro hai in mente: ti rispondo con disponibilità e preventivo. Per le cose urgenti c'è WhatsApp.","Tell me the date, the place and what you have in mind: I'll reply with availability and a quote. For anything urgent, use WhatsApp.")),
          el("dl",{},
            el("div",{},el("dt",{},"Email"),el("dd",{},el("a",{href:"mailto:"+CONTACT.email},CONTACT.email))),
            el("div",{},el("dt",{},T("Telefono e WhatsApp","Phone and WhatsApp")),el("dd",{},el("a",{href:"https://wa.me/"+CONTACT.phone.replace(/\D/g,""),...ext},CONTACT.phone))),
            el("div",{},el("dt",{},"Instagram"),el("dd",{},el("a",{href:"https://instagram.com/"+CONTACT.instagram,...ext},"@"+CONTACT.instagram))))),
        reqForm())),
    el("div",{class:"ticker","aria-hidden":"true"},...tickers),
    el("div",{class:"foot g"},
      el("a",{class:"big",href:"/","aria-label":"Matteo Barbieri"},"MATTEO",el("i",{}),"BARBIERI"),
      el("div",{class:"links"},el("span",{},T("Fotografo a Ferrara e Bologna","Photographer in Ferrara and Bologna, Italy")),
        el("span",{},...[["pubblicazioni","Pubblicazioni","Press"],["servizi","Servizi","Services"],["privacy","Privacy","Privacy"]].flatMap(([h,i,e],j)=>[j?" · ":"",el("a",{href:U(h)},T(i,e))])," · ",el("button",{type:"button",onclick:()=>consentUI(true)},"Cookie"))),
      el("div",{class:"lp"},...LANDS.flatMap((x,i)=>[i?" · ":"",el("a",{href:U(x.id)},T(x.ti,x.tiEn))]))));
}
function reqForm(){
  const f=el("form",{class:"fm",novalidate:""});
  const tipi=[["Concerto / tour","Concert / tour"],["Festival","Festival"],["Promo band","Band promo"],["Evento aziendale","Corporate event"],["Brand / prodotto","Brand / product"],["Privato / famiglia","Private / family"],["Altro","Other"]];
  const msg=el("span",{class:"msg",role:"status","aria-live":"polite"});
  f.append(
    el("label",{},T("Nome o band","Name or band"),el("input",{name:"nome",required:"",autocomplete:"name"})),
    el("label",{},"Email",el("input",{name:"email",type:"email",required:"",autocomplete:"email"})),
    el("div",{class:"w"},el("label",{},T("Tipo di lavoro","Type of job")),el("div",{class:"chips",role:"radiogroup","aria-label":T("Tipo di lavoro","Type of job")},...tipi.map((t,i)=>el("label",{},el("input",{type:"radio",name:"tipo",value:t[0],...(i===0?{checked:""}:{})}),el("span",{},L2(t)))))),
    el("label",{},T("Data","Date"),el("input",{name:"data",type:"date"})),
    el("label",{},T("Luogo","Location"),el("input",{name:"luogo",placeholder:T("Città o locale","City or venue")})),
    el("label",{class:"w"},T("Messaggio","Message"),el("textarea",{name:"messaggio",placeholder:T("Raccontami l'evento: artisti, orari, cosa ti serve.","Tell me about the event: artists, times, what you need.")})),
    el("label",{class:"w"},T("Telefono (facoltativo)","Phone (optional)"),el("input",{name:"telefono",type:"tel",autocomplete:"tel"})),
    el("input",{type:"text",name:"_honey",class:"hp",tabindex:"-1",autocomplete:"off","aria-hidden":"true"}),
    el("div",{class:"w send"},el("button",{class:"btn",type:"submit"},T("Invia richiesta","Send request")),el("button",{class:"btn o",type:"button",onclick:()=>waSend(f)},T("Scrivimi su WhatsApp","Message me on WhatsApp")),msg),
    el("p",{class:"w fm-note"},T("Uso i dati solo per risponderti. ","I only use your data to reply to you. "),el("a",{href:U("privacy")},T("Informativa privacy","Privacy policy"))));
  f.addEventListener("submit",async e=>{
    e.preventDefault();const b=f.querySelector("button");const fd=new FormData(f);
    if(!fd.get("nome")||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fd.get("email")||"")){msg.textContent=T("Inserisci nome ed email valida.","Please enter your name and a valid email.");return}
    const o=Object.fromEntries(fd.entries());if(LANG==="en")o.lingua="English";
    o._subject="Richiesta dal portfolio: "+o.tipo+(o.data?" · "+o.data:"")+(LANG==="en"?" (EN)":"");o._template="table";o._captcha="false";o._replyto=o.email;
    b.disabled=true;msg.textContent=T("Invio in corso…","Sending…");
    try{const r=await fetch("https://formsubmit.co/ajax/55916b2bba5982119ef02fcf55c73fa2",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)});
      const j=await r.json().catch(()=>({}));
      if(r.ok&&String(j.success)!=="false"){track("generate_lead",{tipo:o.tipo});f.reset();msg.textContent=T("Grazie, richiesta inviata. Ti rispondo presto.","Thanks, your request has been sent. I'll get back to you soon.")}else throw 0}
    catch(_){const body=encodeURIComponent(Object.entries(o).filter(([k])=>!k.startsWith("_")).map(([k,v])=>k+": "+v).join("\n"));
      msg.innerHTML="";msg.append(T("Invio non riuscito. ","Sending failed. "),el("a",{href:"mailto:"+CONTACT.email+"?subject="+encodeURIComponent(o._subject)+"&body="+body},T("Mandala via email","Send it by email")))}
    b.disabled=false});
  return f;
}
function waSend(f){const fd=new FormData(f);const g=k=>(fd.get(k)||"").toString().trim();
  const ls=[T("Ciao Matteo, ti scrivo dal tuo sito.","Hi Matteo, I'm writing from your website."),"",
    T("Nome: ","Name: ")+g("nome"),T("Tipo di lavoro: ","Type of job: ")+g("tipo"),g("data")&&T("Data: ","Date: ")+g("data"),g("luogo")&&T("Luogo: ","Location: ")+g("luogo"),g("email")&&"Email: "+g("email"),"",g("messaggio")].filter((x,i,a)=>x!==""||a[i-1]!=="");
  track("contact",{method:"whatsapp_form",tipo:g("tipo")});window.open(WA(ls.filter(x=>x!==false).join("\n").trim()),"_blank","noopener")}

/* ---------- pagine ---------- */
function home(){
  const v=el("div",{class:"home-v"});
  const live=S.filter(s=>s.kind==="live");
  v.append(
    el("section",{class:"cover","aria-label":T("Copertina","Cover")},
      el("div",{class:"ph"},el("img",{src:"f/"+HERO.img+".jpg",srcset:"t/"+HERO.img+".jpg 900w, f/"+HERO.img+".jpg 1800w",sizes:"100vw",alt:L2(HERO.alt),fetchpriority:"high"})),
      el("div",{class:"tx g"},
        el("h1",{},...lines(T("Fotografo","Concert"),T("di concerti","photographer")),el("span",{class:"sr"},T(" a Ferrara e Bologna"," in Ferrara and Bologna, Italy"))),
        el("div",{class:"side"},el("b",{},HERO.t),HERO.p+", "+L2(HERO.d),el("br"),el("a",{href:"#indice","data-scroll":""},T("Guarda i live","See the shows"))))),
    el("section",{class:"statement g"},
      el("p",{id:"stm"},T("Fotografo i concerti come li vive chi è sotto il palco: il sudore, la luce che cambia, il pubblico che canta. Lavoro per band, locali, festival e testate, e porto lo stesso sguardo negli eventi e nei ritratti.","I photograph concerts the way the crowd lives them: the sweat, the shifting light, people singing along. I work for bands, venues, festivals and magazines, and bring the same eye to events and portraits.")),
      el("div",{class:"meta"},...PUBS.map(p=>el("a",{href:U("pubblicazioni")},el("b",{},p.o),T(p.it,p.en))))),
    el("section",{class:"indice g",id:"indice"},
      el("div",{class:"ihead"},el("h2",{},"Live"),el("p",{},T("Ogni serie si apre a schermo intero.","Each series opens full screen."))),
      el("ul",{class:"rows",id:"rows"},...live.map((s,i)=>el("li",{},el("a",{href:U(s.id),draggable:"false","data-i":i},
        el("img",{class:"th",src:"t/"+s.im[0][0]+".jpg",alt:"",loading:"lazy"}),el("span",{class:"n"},F(s,"t")),el("span",{class:"v"},F(s,"p")),el("span",{class:"d"},F(s,"d")))))),
      el("p",{class:"also"},T("Anche:","Also:"),el("a",{href:U("ritratti")},T("Ritratti e foto promo","Portraits and promo")),el("a",{href:U("lavori")},T("Lavori per aziende e privati","Commissions")),el("a",{href:U("pubblicazioni")},T("Pubblicazioni","Press")))),
    el("section",{class:"storie",id:"storie"},
      el("div",{class:"hd g"},el("h2",{},T("Le storie","Stories")),el("p",{},T("Scorri: cinque concerti raccontati per intero","Scroll: five shows told from start to finish"))),
      el("div",{class:"pin"},el("div",{class:"track g",id:"track"},...STORIES.map(([id,img])=>{const s=byId(id);const pub=s.pub&&s.pub.length?T(", per ",", for ")+s.pub[0][0]:"";
        return el("a",{class:"story",href:U(id),draggable:"false"},el("div",{class:"ph"},el("img",{src:"f/"+img+".jpg",alt:F(s,"t")+", "+F(s,"p"),loading:"lazy"})),
          el("div",{class:"cap"},el("h3",{},F(s,"t")),el("p",{},el("b",{},F(s,"p")),el("br"),F(s,"d")+pub)))})))),
    el("section",{class:"reveal","aria-label":REVEAL.c},
      el("div",{class:"stick"},el("a",{class:"frame",id:"frame",href:U(REVEAL.to),draggable:"false"},el("img",{src:"f/"+REVEAL.img+".jpg",alt:L2(REVEAL.alt),loading:"lazy"})),
        el("p",{class:"over",id:"over"},L2(REVEAL.t),el("small",{},REVEAL.c)))),
    el("section",{class:"servizi g",id:"servizi"},el("h2",{},T("Cosa posso fare per te","What I can do for you")),
      el("div",{id:"svs"},...SVC.map((x,i)=>{const d=el("div",{class:"acc","aria-expanded":i===0?"true":"false"});
        d.append(el("button",{type:"button","aria-controls":"sv"+i,onclick:()=>{const o=d.getAttribute("aria-expanded")==="true";document.querySelectorAll(".acc").forEach(y=>y.setAttribute("aria-expanded","false"));d.setAttribute("aria-expanded",o?"false":"true");setTimeout(()=>window.ScrollTrigger&&ScrollTrigger.refresh(),750)}},el("h3",{},L2(x.t)),el("span",{class:"pl","aria-hidden":"true"},"+")),
          el("div",{class:"body",id:"sv"+i},el("div",{class:"in"},el("div",{class:"grid"},el("img",{src:"f/"+x.img+".jpg",alt:L2(x.alt),loading:"lazy"}),
            el("div",{},el("p",{},L2(x.p)),el("a",{class:"go",href:"#contatti","data-scroll":""},T("Chiedi disponibilità","Check availability")),el("a",{class:"go",href:U(x.lp)},T("Esempi","Examples")))))));return d}))),
    el("section",{class:"voci g","aria-label":T("Recensioni","Reviews")},el("h2",{class:"vh"},T("Dicono di me","What clients say")),
      el("div",{class:"q"},...REVIEWS.map(([q,n])=>el("figure",{},el("blockquote",{lang:"it"},q),el("figcaption",{},n+T(", 5 stelle su Google",", 5 stars on Google")))))));
  return v;
}
function fsBlock(title,list,eager,h1){
  const w=el("section",{class:"sec"});
  const n=list.reduce((a,s)=>a+s.im.length,0);
  w.append(el("div",{class:"ihead"},el(h1?"h1":"h2",{},title),el("p",{},list.length+" "+T("serie","series")+" · "+n+" "+T("fotografie","photographs"))));
  const f=el("div",{class:"fs"});
  list.forEach((s,i)=>{const c=s.im[0];const por=c[2]>c[1];
    f.append(el("a",{href:U(s.id),draggable:"false"},
      el("img",{src:"f/"+c[0]+".jpg",alt:F(s,"t")+(s.p?", "+F(s,"p"):""),loading:eager&&i<2?"eager":"lazy",decoding:"async",style:"object-position:"+(s.pos||(por?"50% 20%":"50% 45%"))}),
      el("div",{class:"tx"},el("b",{class:F(s,"t").length>16?"l":""},F(s,"t")),el("span",{},el("i",{},pad(i+1)+" / "+pad(list.length)),[F(s,"p"),F(s,"d")].filter(Boolean).join(" — ")))))});
  w.append(f);return w;
}
function listPage(kind){
  const v=el("div",{class:"g"});
  if(kind==="lavori")LAV.forEach((k,j)=>v.append(fsBlock(K(k),S.filter(s=>s.kind===k),j===0,j===0)));
  else v.append(fsBlock(K(kind),S.filter(s=>s.kind===kind),true,true));
  v.firstChild.style.marginTop="clamp(24px,5vw,64px)";
  return v;
}
function series(s){
  const v=el("article",{class:"g"});
  const pub=s.pub&&s.pub.length?el("div",{class:"pub"},T("Pubblicato su","Published in"),...s.pub.map(([o,u])=>el("a",{href:u,...ext},o))):null;
  v.append(el("header",{class:"ph-h"},el("h1",{},F(s,"t")),el("div",{class:"meta"},s.p?el("span",{class:"p"},F(s,"p")):null,el("span",{},F(s,"d")+" · "+s.im.length+" "+T("foto","photos")),pub)));
  const seq=el("div",{class:"seq"});const ims=s.im;const tt=F(s,"t");const por=x=>x&&x[2]>x[1];let k=0;
  while(k<ims.length){
    const a=ims[k],b=ims[k+1];
    if(por(a)&&por(b)&&k>0){
      const f=el("figure",{class:"pair"});
      [a,b].forEach((x,j)=>{const i=k+j;f.append(el("button",{type:"button","aria-label":T("Ingrandisci foto ","Enlarge photo ")+(i+1),onclick:()=>openLB(s,i)},el("img",{src:"f/"+x[0]+".jpg",alt:tt+", "+T("foto","photo")+" "+(i+1),loading:"lazy",width:x[1],height:x[2]})))});
      seq.append(f);k+=2;
    }else{
      const i=k;
      seq.append(el("figure",{class:por(a)?"p":"l"},el("img",{src:"f/"+a[0]+".jpg",alt:tt+", "+T("foto","photo")+" "+(i+1),loading:i<2?"eager":"lazy",width:a[1],height:a[2],onclick:()=>openLB(s,i)}),el("figcaption",{},pad(i+1)+" / "+pad(ims.length))));k+=1;
    }
  }
  v.append(seq);
  const grp=S.filter(x=>x.kind===s.kind||(LAV.includes(x.kind)&&LAV.includes(s.kind)));const gi=grp.indexOf(s);
  const prev=grp[(gi-1+grp.length)%grp.length],next=grp[(gi+1)%grp.length];
  v.append(el("nav",{class:"s-nav","aria-label":T("Altre serie","More series")},
    el("a",{href:U(prev.id)},el("span",{class:"small"},T("Precedente","Previous")),el("b",{},F(prev,"t"))),
    el("a",{href:U(next.id)},el("span",{class:"small"},T("Successiva","Next")),el("b",{},F(next,"t")))));
  v.append(el("a",{class:"back small",href:U(s.kind==="live"||s.kind==="ritratti"?s.kind:"lavori")},T("Tutte le serie","All series")));
  return v;
}
const steps=()=>el("div",{class:"steps"},...STEPS.map((x,i)=>el("div",{},el("b",{},pad(i+1)),el("span",{},L2(x)))));
function landing(L){
  const v=el("div",{class:"g"});
  // niente titolone in alto (scelta di Matteo): il titolo H1 sta sulle domande frequenti
  v.append(el("header",{class:"ph-h txt"},el("p",{class:"lead-l"},L2(L.d))));
  v.append(fsBlock(T("Esempi","Examples"),S.filter(L.f),true));
  v.append(steps());
  if(LANG==="it")v.append(el("section",{class:"faq"},el("h1",{},L.h[0]+": domande frequenti"),...L.q.map(([q,a])=>el("details",{},el("summary",{},q),el("p",{},a)))));
  v.append(el("p",{class:"more"},T("Vedi anche: ","See also: "),...LANDS.filter(x=>x!==L).flatMap((x,i)=>[i?" · ":"",el("a",{href:U(x.id)},T(x.ti,x.tiEn))])," · ",el("a",{href:U("pubblicazioni")},T("Pubblicazioni","Press"))));
  return v;
}
const fmtD=d=>{const[y,m,g]=d.split("-");return g+"."+m+"."+y};
function pubblicazioni(){
  const v=el("div",{class:"g"});const n=PUBS.reduce((a,p)=>a+p.a.length,0);
  v.append(el("header",{class:"ph-h"},el("h1",{},T("Pubblicazioni","Press")),el("p",{},T(
    n+" gallerie e articoli usciti su testate musicali dal 2025 a oggi. Fotografo per Spazio Rock, Booklet Magazine e The Festivals Backpack, a volte anche con il testo; le mie foto dei Vulfpeck sono state ricondivise dalla band.",
    n+" galleries and articles published by Italian music magazines since 2025. I shoot for Spazio Rock, Booklet Magazine and The Festivals Backpack, sometimes writing the review too; my Vulfpeck photos were reshared by the band."))));
  PUBS.forEach(p=>v.append(el("section",{class:"outlet"},el("h2",{},p.o,el("a",{href:p.u,...ext},T(p.it,p.en))),
    el("ul",{class:"plist"},...p.a.map(([d,t,w,u])=>el("li",{},el("a",{href:u,...ext},el("time",{datetime:d},fmtD(d)),el("b",{},t+" — "+w),el("span",{},p.txt?T("Foto e testo","Photos and text"):T("Foto","Photos")))))))));
  return v;
}
function info(){
  const v=el("div",{class:"g"});
  const pic=(byId("johnny-marr")||S[0]).im[1];
  v.append(el("header",{class:"ph-h"},el("h1",{},"Matteo Barbieri"),el("p",{},T("Fotografo di concerti, festival e reportage. Ferrara e Bologna.","Concert, festival and reportage photographer. Ferrara and Bologna, Italy."))));
  const facts=el("dl",{class:"facts"},
    el("div",{},el("dt",{},T("Lavoro","Work")),el("dd",{},T("Live music e festival · Reportage urbani e sociali · Promo band e ritratti editoriali · Lifestyle, pet e family · Brand ed eventi","Live music and festivals · Urban and social reportage · Band promo and editorial portraits · Lifestyle, pets and family · Brands and events"))),
    el("div",{},el("dt",{},T("Pubblicazioni","Press")),el("dd",{},el("a",{href:U("pubblicazioni")},"Spazio Rock · Booklet Magazine · The Festivals Backpack"))),
    el("div",{},el("dt",{},"Base"),el("dd",{},T("Ferrara e Bologna. Nord Italia e oltre.","Ferrara and Bologna, Italy. Available across Northern Italy and abroad."))),
    el("div",{},el("dt",{},"Email"),el("dd",{},el("a",{href:"mailto:"+CONTACT.email},CONTACT.email),el("button",{class:"copy",type:"button",onclick:e=>copy(CONTACT.email,e.target)},T("Copia","Copy")))),
    el("div",{},el("dt",{},T("Telefono","Phone")),el("dd",{},el("a",{href:"https://wa.me/"+CONTACT.phone.replace(/\D/g,""),...ext},CONTACT.phone+" · WhatsApp"),el("button",{class:"copy",type:"button",onclick:e=>copy(CONTACT.phone,e.target)},T("Copia","Copy")))),
    el("div",{},el("dt",{},"Instagram"),el("dd",{},el("a",{href:"https://instagram.com/"+CONTACT.instagram,...ext},"@"+CONTACT.instagram))));
  v.append(el("section",{class:"info"},
    el("div",{},
      el("p",{},T("Fotografo specializzato nel racconto di eventi live, festival e realtà urbane. Con un approccio naturale e spontaneo realizzo contenuti visivi per band, artisti e organizzazioni culturali.","Photographer specialising in live music, festivals and urban stories. With a natural, unstaged approach I create images for bands, artists and cultural organisations.")),
      el("p",{},T("Lavoro principalmente tra Ferrara, Bologna e il Veneto, e pubblico con Spazio Rock, Booklet Magazine e The Festivals Backpack.","I work mainly between Ferrara, Bologna and the Veneto region, and my work appears in Spazio Rock, Booklet Magazine and The Festivals Backpack. Touring bands and international management are welcome: I answer in English.")),
      facts),
    el("figure",{},el("img",{src:"f/"+pic[0]+".jpg",alt:T("Johnny Marr con la chitarra in controluce","Johnny Marr with his guitar, backlit"),loading:"lazy"}),el("figcaption",{},"Johnny Marr — Estragon, Bologna — 08.11.2025"))));
  return v;
}
function servizi(){
  const v=el("div",{class:"g"});
  v.append(el("header",{class:"ph-h"},el("h1",{},T("Servizi","Services")),el("p",{},T("Fotografia live, reportage e ritratto per band, festival, testate, aziende e privati. Lavoro tra Ferrara, Bologna e il Nord Italia e mi sposto dove serve.","Live, reportage and portrait photography for bands, festivals, magazines, companies and private clients. Based between Ferrara and Bologna, I travel wherever the job is."))));
  v.append(el("div",{class:"cosa",style:"margin-top:0"},el("div",{class:"grid4"},...SERV.map(s=>el("div",{class:"it"},el("span",{class:"k"},L2(s.k)),el("h3",{},L2(s.t)),el("p",{},L2(s.d)),el("ul",{},...s.li.map(x=>el("li",{},L2(x)))),
    el("a",{class:"go",href:U(s.lp)},T("Esempi e dettagli","Examples and details")),el("a",{class:"go",href:"#contatti","data-scroll":""},T("Chiedi un preventivo","Ask for a quote")))))));
  v.append(steps());
  v.append(el("dl",{class:"cred"},el("h2",{},T("Pubblicato e scattato per","Published in and shot for")),
    el("dt",{},T("Testate","Magazines")),el("dd",{},el("a",{href:U("pubblicazioni")},"Spazio Rock · Booklet Magazine · The Festivals Backpack")),
    el("dt",{},T("Palchi","Venues")),el("dd",{},"Estragon · Locomotiv · Covo Club · DumBO · Sequoie Music Park · Ferrara Sotto le Stelle · Ferrara Summer Festival · Parco della Musica, Milano · Beky Bay · Teatro Comunale di Ferrara · EuropAuditorium"),
    el("dt",{},T("Band e artisti","Bands and artists")),el("dd",{},"Pride of Haka · Olivia Santimone · Incisions"),
    el("dt",{},T("Studi e sale prova","Studios and rehearsal rooms")),el("dd",{},"Sonika"),
    el("dt",{},T("Aziende e brand","Companies and brands")),el("dd",{},"Gruppo Finlogic · Accademia Italiana · Studio Olistico Kairos · My Style by Vero · Primavera Fresh Gin")));
  return v;
}
async function copy(t,b){const o=b.textContent;try{await navigator.clipboard.writeText(t);b.textContent=T("Copiato","Copied")}catch(e){b.textContent=T("Seleziona e copia","Select and copy")}setTimeout(()=>b.textContent=o,1800)}
function privacy(){
  const v=el("div",{class:"g"});const H=t=>el("h2",{},t),P=t=>el("p",{},t);
  v.append(el("header",{class:"ph-h"},el("h1",{},T("Privacy e cookie","Privacy and cookies")),el("p",{},T("Informativa ai sensi degli artt. 13-14 del Regolamento UE 2016/679 (GDPR) e delle Linee guida cookie del Garante privacy (10 giugno 2021). Ultimo aggiornamento: 18 ottobre 2026.","Information under Articles 13-14 of EU Regulation 2016/679 (GDPR) and the Italian Data Protection Authority cookie guidelines (10 June 2021). Last updated: 18 October 2026."))));
  const td=(...c)=>el("tr",{},...c.map(x=>el("td",{},x)));
  v.append(el("div",{class:"pv-b"},
    H(T("Titolare del trattamento","Data controller")),P(T("Matteo Barbieri, fotografo, Ferrara (FE), Italia. Contatto per ogni richiesta sulla privacy: ","Matteo Barbieri, photographer, Ferrara, Italy. Contact for any privacy request: ")),
    el("p",{},el("a",{href:"mailto:"+CONTACT.email},CONTACT.email)),
    H(T("Quali dati e perché","What data and why")),
    el("ul",{},
      el("li",{},el("b",{},T("Navigazione. ","Browsing. ")),T("Il sito è ospitato da GitHub Pages (GitHub Inc., USA), che per sicurezza registra nei log del server l'indirizzo IP dei visitatori. Base giuridica: legittimo interesse al funzionamento e alla sicurezza del sito.","The site is hosted on GitHub Pages (GitHub Inc., USA), which logs visitors' IP addresses for security. Legal basis: legitimate interest in running and securing the site.")),
      el("li",{},el("b",{},T("Modulo di richiesta. ","Request form. ")),T("Nome, email, telefono facoltativo, data, luogo e messaggio servono solo a rispondere e preparare un preventivo. Il modulo è inoltrato alla mia casella tramite il servizio FormSubmit (formsubmit.co). Base giuridica: misure precontrattuali richieste da te (art. 6.1.b GDPR). Conservo i messaggi per il tempo necessario a gestire la richiesta e l'eventuale incarico, e comunque non oltre 24 mesi salvo obblighi fiscali.","Name, email, optional phone, date, place and message are used only to reply and prepare a quote. The form is delivered to my inbox through the FormSubmit service (formsubmit.co). Legal basis: pre-contractual steps you request (Art. 6.1.b GDPR). Messages are kept as long as needed for the request and any job, and no longer than 24 months unless tax rules require otherwise.")),
      el("li",{},el("b",{},T("Statistiche (solo con consenso). ","Statistics (only with consent). ")),T("Se accetti, uso Google Analytics 4 (Google Ireland Ltd / Google LLC) per contare visite, pagine viste, clic sui pulsanti di contatto e invio del modulo. Indirizzo IP non memorizzato da GA4, segnali pubblicitari e Google Signals disattivati, conservazione dei dati 2 mesi. I dati possono essere trasferiti negli USA: Google aderisce all'EU-U.S. Data Privacy Framework. Base giuridica: consenso (art. 6.1.a GDPR), revocabile in ogni momento.","If you accept, I use Google Analytics 4 (Google Ireland Ltd / Google LLC) to count visits, page views, clicks on contact buttons and form submissions. GA4 does not store IP addresses, advertising features and Google Signals are off, data retention is 2 months. Data may be transferred to the USA: Google is certified under the EU-U.S. Data Privacy Framework. Legal basis: consent (Art. 6.1.a GDPR), which you can withdraw at any time.")),
      el("li",{},el("b",{},"WhatsApp, Instagram, email. "),T("Sono semplici link: nessun dato passa a Meta o ad altri finché non li apri tu. Da quel momento valgono le informative di quei servizi.","These are plain links: no data reaches Meta or others until you open them. From then on, those services' own policies apply."))),
    H(T("Cookie e memorizzazione nel browser","Cookies and browser storage")),
    el("table",{class:"ckt"},el("thead",{},el("tr",{},...[["Nome","Name"],["Tipo","Type"],["Scopo","Purpose"],["Durata","Duration"]].map(x=>el("th",{},L2(x))))),
      el("tbody",{},
        td("mb_consent",T("Tecnico, localStorage","Technical, localStorage"),T("Ricorda la tua scelta sui cookie","Remembers your cookie choice"),T("6 mesi","6 months")),
        td("lang",T("Tecnico, localStorage","Technical, localStorage"),T("Ricorda la lingua IT/EN","Remembers IT/EN language"),T("Fino a cancellazione","Until cleared")),
        td("mb_intro",T("Tecnico, sessionStorage","Technical, sessionStorage"),T("Mostra l'animazione di apertura una volta sola","Shows the opening animation only once"),T("Fino alla chiusura del browser","Until the browser closes")),
        td("_ga",T("Statistico di terza parte (Google), solo con consenso","Third-party statistics (Google), consent only"),T("Distingue i visitatori in forma anonima","Distinguishes visitors anonymously"),T("2 anni","2 years")),
        td("_ga_S2FGT9EMC4",T("Statistico di terza parte (Google), solo con consenso","Third-party statistics (Google), consent only"),T("Mantiene lo stato della sessione","Keeps session state"),T("2 anni","2 years")))),
    P(T("Caratteri tipografici e librerie sono ospitati su questo sito, senza collegamenti a Google Fonts o ad altri server esterni. Prima del tuo consenso non viene caricato nessuno strumento di Google Analytics. Chiudere il banner con la X equivale a rifiutare. La scelta viene richiesta di nuovo dopo 6 mesi.","Fonts and scripts are hosted on this site, with no calls to Google Fonts or other external servers. No Google Analytics code is loaded before your consent. Closing the banner with the X counts as a rejection. You will be asked again after 6 months.")),
    el("p",{},el("button",{type:"button",class:"btn",onclick:()=>consentUI(true)},T("Modifica le preferenze cookie","Change cookie preferences"))),
    H(T("I tuoi diritti","Your rights")),
    P(T("Puoi chiedere in ogni momento accesso, rettifica, cancellazione, limitazione, portabilità dei tuoi dati e opporti al trattamento (artt. 15-22 GDPR), scrivendo all'email sopra. Hai anche diritto di proporre reclamo al Garante per la protezione dei dati personali (garanteprivacy.it).","You can request access, correction, deletion, restriction, portability, or object to processing at any time (Arts. 15-22 GDPR) by writing to the email above. You may also lodge a complaint with the Italian Data Protection Authority (garanteprivacy.it).")),
    P(T("I dati non sono usati per decisioni automatizzate né venduti o ceduti a terzi per fini commerciali.","Data is not used for automated decision-making, nor sold or passed on to third parties for marketing."))));
  return v;
}

/* ---------- statistiche e consenso (Garante 2021: niente tracciamento prima del consenso, X = rifiuto, scelta ricordata 6 mesi) ---------- */
const GA_ID="G-S2FGT9EMC4",CK_VER=1,CK_DAYS=180;
const ck=()=>{try{const o=JSON.parse(localStorage.getItem("mb_consent")||"null");if(o&&o.ver===CK_VER&&Date.now()-o.t<CK_DAYS*864e5)return o}catch(e){}return null};
let gaOn=false;
function gaLoad(){if(gaOn||PRE)return;gaOn=true;window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};
  gtag("consent","default",{ad_storage:"denied",ad_user_data:"denied",ad_personalization:"denied",analytics_storage:"granted"});
  gtag("js",new Date());gtag("config",GA_ID,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false});
  const sc=document.createElement("script");sc.async=true;sc.src="https://www.googletagmanager.com/gtag/js?id="+GA_ID;document.head.append(sc)}
function gaOff(){try{document.cookie.split(";").map(c=>c.split("=")[0].trim()).filter(n=>/^_ga/.test(n)).forEach(n=>{const d=location.hostname.replace(/^www\./,"");["",";domain=."+d,";domain="+d].forEach(x=>document.cookie=n+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"+x)})}catch(e){}if(gaOn)window["ga-disable-"+GA_ID]=true}
function track(n,p){if(!gaOn)return;try{gtag("event",n,Object.assign({lingua:LANG},p||{}))}catch(e){}}
const pv=()=>({page_title:document.title,page_location:location.origin+location.pathname,page_path:location.pathname});
function consentUI(force){const box=$("ck");box.innerHTML="";
  box.append(el("button",{type:"button",class:"ckx","aria-label":T("Chiudi e rifiuta","Close and reject"),onclick:()=>setConsent("no")},"×"),
    el("b",{id:"ckH"},T("Cookie e statistiche","Cookies and statistics")),
    el("p",{id:"ckT"},T("Questo sito usa solo cookie tecnici necessari. Con il tuo consenso attivo anche Google Analytics, per sapere in forma statistica quali pagine e foto vengono viste: niente pubblicità né profilazione. Puoi cambiare idea quando vuoi dal link «Cookie» in fondo alla pagina. ","This site only uses necessary technical storage. With your consent I also enable Google Analytics, to see in aggregate which pages and photos are viewed: no advertising or profiling. You can change your mind anytime via the «Cookie» link at the bottom of the page. "),
      el("a",{href:U("privacy")},T("Informativa privacy e cookie","Privacy and cookie policy"))),
    el("div",{},el("button",{type:"button",class:"btn o",onclick:()=>setConsent("no")},T("Rifiuta","Reject")),el("button",{type:"button",class:"btn",onclick:()=>setConsent("yes")},T("Accetta","Accept"))));
  box.hidden=PRE||!(force||!ck())}
function setConsent(v){try{localStorage.setItem("mb_consent",JSON.stringify({v,t:Date.now(),ver:CK_VER}))}catch(e){}
  $("ck").hidden=true;if(v==="yes"){window["ga-disable-"+GA_ID]=false;gaLoad();track("page_view",pv())}else gaOff()}
document.addEventListener("click",e=>{const a=e.target.closest&&e.target.closest("a");if(!a)return;const u=a.getAttribute("href")||"";
  if(u.startsWith("mailto:"))track("contact",{method:"email"});else if(u.includes("wa.me"))track("contact",{method:"whatsapp"});else if(u.includes("instagram.com"))track("contact",{method:"instagram"})});

/* ---------- foto a schermo intero ---------- */
let LB=null,LI=0,lastF=null;
function openLB(s,i){LB=s;LI=i;lastF=document.activeElement;$("lb").hidden=false;document.body.style.overflow="hidden";lenis&&lenis.stop();showLB();$("lbX").focus()}
function showLB(){const x=LB.im[LI];const img=$("lbImg");img.src="f/"+x[0]+".jpg";img.alt=F(LB,"t")+", "+T("foto","photo")+" "+(LI+1);$("lbC").textContent=F(LB,"t")+" — "+pad(LI+1)+" / "+pad(LB.im.length)}
function closeLB(){$("lb").hidden=true;document.body.style.overflow="";lenis&&lenis.start();lastF&&lastF.focus()}
const stepLB=n=>{LI=(LI+n+LB.im.length)%LB.im.length;showLB()};
$("lbX").onclick=closeLB;$("lbP").onclick=()=>stepLB(-1);$("lbN").onclick=()=>stepLB(1);$("lbImg").onclick=closeLB;
addEventListener("keydown",e=>{if($("lb").hidden)return;if(e.key==="Escape")closeLB();if(e.key==="ArrowRight")stepLB(1);if(e.key==="ArrowLeft")stepLB(-1)});
{let tx=null;const lb=$("lb");lb.addEventListener("touchstart",e=>{tx=e.touches[0].clientX},{passive:true});lb.addEventListener("touchend",e=>{if(tx==null)return;const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)stepLB(d<0?1:-1);tx=null})}

/* foto: niente tasto destro, niente trascinamento (anche dei link, che lasciavano l'immagine attaccata al puntatore) */
document.addEventListener("contextmenu",e=>{if(e.target.tagName==="IMG")e.preventDefault()});
document.addEventListener("dragstart",e=>{if(e.target.closest&&e.target.closest("img,a"))e.preventDefault()});

/* ---------- pagina corrente ---------- */
(()=>{const h=location.hash.slice(1);if(h&&!ROUTE()&&/^[a-z0-9-]+$/.test(h)&&!["indice","storie","servizi","contatti"].includes(h))location.replace("/"+(h==="info"?"contatti":h==="press"?"pubblicazioni":h==="cookie"?"privacy":h)+"/")})();
const app=$("app");
function render(){
  const h=ROUTE();const ser=byId(h),ld=LANDS.find(x=>x.id===h);
  let v,here="",ti=null;
  if(h==="contatti"){v=info();here="contatti";ti=T("Contatti e preventivi","Contact and quotes")}
  else if(h==="servizi"){v=servizi();here="servizi";ti=T("Servizi fotografici per band, festival e aziende","Photography services")}
  else if(h==="pubblicazioni"){v=pubblicazioni();here="pubblicazioni";ti=T("Pubblicazioni","Press")}
  else if(h==="privacy"){v=privacy();ti=T("Privacy e cookie","Privacy and cookies")}
  else if(h==="ritratti"||h==="lavori"||h==="live"){v=listPage(h);here=h;ti={live:T("Fotografia live e concerti","Live music photography"),ritratti:T("Ritratti e foto promo","Portraits and promo"),lavori:T("Lavori per brand, eventi e privati","Commissions")}[h]}
  else if(ser){v=series(ser);here=(ser.kind==="live"||ser.kind==="ritratti")?ser.kind:"lavori";ti=F(ser,"t")+(ser.kind==="live"?" live":ser.kind==="ritratti"?T(" — foto promo"," — promo photos"):"")+(ser.p?" — "+F(ser,"p"):"")}
  else if(ld){v=landing(ld);here="servizi";ti=T(ld.ti,ld.tiEn)}
  else v=home();
  document.body.classList.toggle("home",!!v.classList.contains("home-v"));
  app.innerHTML="";app.append(v);
  document.title=ti?ti+" | Matteo Barbieri Photography":T("Matteo Barbieri Photography — fotografo di concerti, Ferrara e Bologna","Matteo Barbieri Photography — concert photographer, Ferrara and Bologna, Italy");
  chrome(here);
}
consentUI();
render();
if(ck()?.v==="yes"){gaLoad();track("page_view",pv())}

/* ---------- movimento ---------- */
let lenis=null;
const top_=$("top"),isHome=document.body.classList.contains("home");
function headerState(){top_.classList.toggle("clear",isHome&&scrollY<innerHeight*.9)}
headerState();addEventListener("scroll",headerState,{passive:true});
// il pulsante contatto rapido sparisce quando si vedono già i contatti
if("IntersectionObserver"in window)new IntersectionObserver(es=>es.forEach(x=>$("fab").classList.toggle("off",x.isIntersecting)),{rootMargin:"0px 0px -30% 0px"}).observe($("contatti"));

function intro(){const pre=$("pre");
  try{sessionStorage.setItem("mb_intro","1")}catch(e){}
  if(!document.documentElement.classList.contains("intro"))return gsap.timeline();
  return gsap.timeline({onComplete:()=>document.documentElement.classList.remove("intro")})
    .fromTo("#preBar",{scaleY:0},{scaleY:1,duration:.7,ease:"power3.inOut"})
    .to(pre,{yPercent:-100,duration:.9,ease:"power4.inOut"},"+=.15");
}
if(!MOTION||!window.gsap||!window.ScrollTrigger){document.documentElement.classList.remove("intro")}
else{
  gsap.registerPlugin(ScrollTrigger);
  if(window.Lenis){lenis=new Lenis({lerp:.09});lenis.on("scroll",ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}
  document.addEventListener("click",e=>{const a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;const t=document.querySelector(a.getAttribute("href"));if(t){e.preventDefault();openSheet&&!$("sheet").hidden&&openSheet(false);lenis?lenis.scrollTo(t,{duration:1.4}):t.scrollIntoView({behavior:"smooth"})}});
  const up=(t,o={})=>gsap.from(t,Object.assign({y:50,opacity:0,duration:1.05,ease:"power4.out",scrollTrigger:{trigger:t,start:"top 88%"}},o));

  if(isHome){
    const tl=intro();
    tl.from(".cover .ph img",{scale:1.18,duration:2.2,ease:"power3.out"},tl.duration()?"-=.6":0)
      .from(".cover h1 .line>span",{yPercent:110,duration:1.1,stagger:.12,ease:"power4.out"},"<.3")
      .from(".cover .side, #top",{opacity:0,y:16,duration:.8,stagger:.08,ease:"power2.out"},"<.5");
    gsap.to(".cover .ph img",{yPercent:14,ease:"none",scrollTrigger:{trigger:".cover",start:"top top",end:"bottom top",scrub:true}});
    // frase che si accende parola per parola
    const stm=$("stm");stm.innerHTML=stm.textContent.split(" ").map(w=>`<span class="w">${w}</span>`).join(" ");
    gsap.fromTo("#stm .w",{color:"#CFCCC7"},{color:"#121212",stagger:.05,ease:"none",scrollTrigger:{trigger:"#stm",start:"top 78%",end:"bottom 45%",scrub:true}});
    gsap.from(".statement .meta>*",{y:28,opacity:0,stagger:.09,duration:.9,ease:"power3.out",scrollTrigger:{trigger:".statement .meta",start:"top 88%"}});
    document.querySelectorAll(".ihead h2,.storie h2,.servizi h2,.vh").forEach(h=>up(h,{y:60}));
    gsap.from("#rows li",{y:40,opacity:0,stagger:.05,duration:.9,ease:"power3.out",scrollTrigger:{trigger:"#rows",start:"top 82%"}});

    // anteprima che segue il cursore sui nomi dei live
    if(matchMedia("(hover:hover) and (pointer:fine)").matches){
      const fl=$("float"),fi=$("floatImg"),rows=[...document.querySelectorAll("#rows a")];let cur=-1,mx=0,my=0;
      const xTo=gsap.quickTo(fl,"x",{duration:.55,ease:"power3"}),yTo=gsap.quickTo(fl,"y",{duration:.55,ease:"power3"});
      const show=i=>{if(i===cur)return;cur=i;if(i<0){gsap.to(fl,{opacity:0,scale:.85,duration:.3,ease:"power2.in",overwrite:"auto"});return}
        fi.src="f/"+S.filter(s=>s.kind==="live")[i].im[0][0]+".jpg";gsap.to(fl,{opacity:1,scale:1,duration:.45,ease:"power3.out",overwrite:"auto"})};
      const pick=()=>{const t=document.elementFromPoint(mx,my);const a=t&&t.closest&&t.closest("#rows a");show(a?rows.indexOf(a):-1)};
      addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;xTo(mx);yTo(my);pick()},{passive:true});
      lenis&&lenis.on("scroll",pick);
      ["mousedown","blur","mouseleave"].forEach(n=>(n==="mouseleave"?document.documentElement:window).addEventListener(n,()=>show(-1)));
      document.addEventListener("visibilitychange",()=>show(-1));
    }

    // storie bloccate che scorrono di lato
    const track=$("track"),dist=()=>Math.max(0,track.scrollWidth-innerWidth);
    gsap.to(track,{x:()=>-dist(),ease:"none",scrollTrigger:{trigger:".storie .pin",start:"top top",end:()=>"+="+dist(),pin:true,scrub:1,invalidateOnRefresh:true}});
    gsap.utils.toArray(".story .ph img").forEach(img=>gsap.to(img,{xPercent:-12,ease:"none",scrollTrigger:{trigger:".storie .pin",start:"top top",end:()=>"+="+dist(),scrub:true}}));

    // foto che si apre fino a riempire lo schermo
    gsap.timeline({scrollTrigger:{trigger:".reveal",start:"top top",end:"bottom bottom",scrub:true}})
      .to("#frame",{clipPath:"inset(0% 0% 0% 0% round 0px)",ease:"power2.inOut",duration:1})
      .to("#frame img",{scale:1,ease:"power2.out",duration:1},0)
      .to("#over",{opacity:1,duration:.35},.65);

    gsap.from(".acc",{y:40,opacity:0,stagger:.08,duration:.9,ease:"power3.out",scrollTrigger:{trigger:"#svs",start:"top 85%"}});
    gsap.from(".voci figure",{y:60,opacity:0,stagger:.15,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:".voci",start:"top 80%"}});
  }else{
    document.documentElement.classList.remove("intro");
    gsap.from(".ph-h>*",{y:40,opacity:0,duration:1,stagger:.1,ease:"power4.out",delay:.05});
    gsap.utils.toArray(".fs a").forEach(a=>gsap.fromTo(a.querySelector("img"),{yPercent:-6,scale:1.12},{yPercent:6,ease:"none",scrollTrigger:{trigger:a,start:"top bottom",end:"bottom top",scrub:true}}));
    gsap.utils.toArray(".sec>.ihead h1,.sec>.ihead h2,.faq h1,.steps,.cred,.outlet,.cosa .it,.seq figure").forEach(t=>up(t));
  }
  // in fondo, uguale per tutte le pagine
  up(".contatti h2 .line>span",{yPercent:110,y:0,opacity:1,duration:1.2});
  gsap.from(".contatti .cg>*",{y:40,opacity:0,stagger:.1,duration:1,ease:"power3.out",scrollTrigger:{trigger:".contatti .cg",start:"top 85%"}});
  gsap.from(".foot .big",{yPercent:60,opacity:0,duration:1.3,ease:"power4.out",scrollTrigger:{trigger:".foot",start:"top 95%"}});
  addEventListener("load",()=>ScrollTrigger.refresh());
}
