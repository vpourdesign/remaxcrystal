/*  ═══════════════════════════════════════════════
    RE/MAX Crystal — Outil de jumelage courtier
    courtiers.js — données + UI modale
    ═══════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ──── BROKER DATABASE ──── */
  const courtiers = [
    /* listings: nombre de propriétés actives par ville (à mettre à jour par RE/MAX Crystal) */
    { nom:"Mehdi Jamal", titre:"Propriétaire Dirigeant d'agence", tel:"514-578-6611", email:"mehdi@remaxcrystal.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Sainte-Thérèse","Lorraine","Rosemère","Boisbriand","Bois-des-Filion"], types:["résidentiel","commercial"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé","terrain","commercial","plex"], listings:{"Blainville":18,"Sainte-Thérèse":12,"Lorraine":6,"Rosemère":5,"Boisbriand":8,"Bois-des-Filion":3} },
    { nom:"Denis Gauthier", titre:"Directeur général associé", tel:"514-349-9414", email:"denis@remaxcrystal.com", photo:"https://ucarecdn.com/b412a76b-2b62-4487-96de-06385b4142be/-/scale_crop/400x400/center/", villes:["Sainte-Thérèse","Blainville","Rosemère","Boisbriand"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé","plex"], listings:{"Sainte-Thérèse":22,"Blainville":9,"Rosemère":7,"Boisbriand":5} },
    { nom:"Manon Francoeur", titre:"Directrice", tel:"514-717-4137", email:"manon@remaxcrystal.com", photo:"https://ucarecdn.com/e61dadf5-765a-4888-bea2-6888e7c563ad/-/scale_crop/400x400/center/", villes:["Blainville","Sainte-Thérèse","Rosemère"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé"], listings:{"Blainville":14,"Sainte-Thérèse":8,"Rosemère":6} },
    { nom:"Jad Abou Rjeily", titre:"Courtier immobilier résidentiel", tel:"438-773-6545", email:"jad.ar@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Sainte-Thérèse"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé"], listings:{"Blainville":11,"Sainte-Thérèse":7} },
    { nom:"Khalid Adnane", titre:"Courtier immobilier résidentiel", tel:"514-617-8382", email:"k.adnane@kadnane.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Lorraine","Rosemère"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé","terrain"], listings:{"Blainville":8,"Lorraine":4,"Rosemère":3} },
    { nom:"Valérie Allaire", titre:"Courtier immobilier résidentiel", tel:"514-774-9727", email:"valerie.allaire@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Sainte-Thérèse","Blainville","Boisbriand"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé"], listings:{"Sainte-Thérèse":15,"Blainville":6,"Boisbriand":4} },
    { nom:"Parisa Ansari", titre:"Courtier immobilier résidentiel et commercial", tel:"514-298-7274", email:"pansari.immo@gmail.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Sainte-Thérèse","Boisbriand","Rosemère"], types:["résidentiel","commercial"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","commercial","plex","terrain"], listings:{"Blainville":12,"Sainte-Thérèse":8,"Boisbriand":5,"Rosemère":3} },
    { nom:"Kassandra Archambault", titre:"Courtier immobilier résidentiel", tel:"514-243-5155", email:"k.archambault@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Rosemère","Lorraine"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé"], listings:{"Blainville":9,"Rosemère":7,"Lorraine":5} },
    { nom:"Chantal Auger", titre:"Courtier immobilier", tel:"514-730-2221", email:"chantal.auger@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Boisbriand","Sainte-Thérèse","Blainville"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé","plex"], listings:{"Boisbriand":16,"Sainte-Thérèse":10,"Blainville":4} },
    { nom:"Alex Aviles", titre:"Courtier immobilier résidentiel", tel:"514-293-8663", email:"info@alexaviles.ca", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Sainte-Thérèse","Boisbriand","Bois-des-Filion"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé"], listings:{"Sainte-Thérèse":13,"Boisbriand":9,"Bois-des-Filion":6} },
    { nom:"Jean-Philippe Barrette", titre:"Courtier immobilier résidentiel", tel:"514-947-4188", email:"jean-philippe.barrette@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Sainte-Thérèse","Rosemère","Blainville"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé","terrain"], listings:{"Sainte-Thérèse":11,"Rosemère":8,"Blainville":5} },
    { nom:"Maxime Beaulac", titre:"Courtier immobilier résidentiel et commercial", tel:"514-219-3383", email:"max@fredetmax.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Sainte-Thérèse","Lorraine","Boisbriand"], types:["résidentiel","commercial"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","commercial","plex","terrain","jumelé"], listings:{"Blainville":21,"Sainte-Thérèse":14,"Lorraine":7,"Boisbriand":6} },
    { nom:"Anthony Bichara", titre:"Courtier immobilier résidentiel et commercial", tel:"450-472-7220", email:"abichara@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Sainte-Thérèse","Blainville","Rosemère","Lorraine"], types:["résidentiel","commercial"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","commercial","plex","jumelé"], listings:{"Sainte-Thérèse":17,"Blainville":10,"Rosemère":6,"Lorraine":4} },
    { nom:"Nicolas Boudreau", titre:"Courtier immobilier résidentiel et commercial", tel:"450-430-4207", email:"nicolas.boudreau@live.ca", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Boisbriand","Bois-des-Filion","Sainte-Thérèse"], types:["résidentiel","commercial"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","commercial","terrain","plex"], listings:{"Blainville":15,"Boisbriand":11,"Bois-des-Filion":8,"Sainte-Thérèse":6} },
    { nom:"Audrey Cloutier", titre:"Courtier immobilier résidentiel et commercial", tel:"450-806-9786", email:"acloutier@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Lorraine","Rosemère","Sainte-Thérèse"], types:["résidentiel","commercial"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","commercial","jumelé","plex","terrain"], listings:{"Blainville":19,"Lorraine":12,"Rosemère":9,"Sainte-Thérèse":7} },
    { nom:"Sandrine Charbonneau", titre:"Courtier immobilier résidentiel", tel:"514-476-9074", email:"scharbonneau@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Sainte-Thérèse","Boisbriand","Bois-des-Filion"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé"], listings:{"Sainte-Thérèse":14,"Boisbriand":8,"Bois-des-Filion":5} },
    { nom:"Gabriel Courteau", titre:"Courtier immobilier résidentiel et commercial", tel:"438-406-7144", email:"gabriel.courteau@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Lorraine","Rosemère"], types:["résidentiel","commercial"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","commercial","terrain","jumelé"], listings:{"Blainville":10,"Lorraine":8,"Rosemère":6} },
    { nom:"Maxime Cyr", titre:"Courtier immobilier résidentiel et commercial", tel:"438-497-3243", email:"maxime@equipeforbesteam.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Sainte-Thérèse","Boisbriand","Blainville","Bois-des-Filion"], types:["résidentiel","commercial"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","commercial","plex"], listings:{"Sainte-Thérèse":16,"Boisbriand":12,"Blainville":7,"Bois-des-Filion":4} },
    { nom:"Stéphane Darveau", titre:"Courtier immobilier agréé", tel:"514-793-8699", email:"stephane@darveauleduc.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Sainte-Thérèse","Lorraine","Rosemère","Boisbriand"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé","terrain","plex"], listings:{"Blainville":13,"Sainte-Thérèse":9,"Lorraine":5,"Rosemère":4,"Boisbriand":3} },
    { nom:"Francis Daudelin", titre:"Courtier immobilier résidentiel", tel:"514-817-4197", email:"francis.daudelin@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Sainte-Thérèse","Rosemère","Boisbriand"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé"], listings:{"Sainte-Thérèse":10,"Rosemère":6,"Boisbriand":4} },
    { nom:"Benoît De Césaré", titre:"Courtier immobilier", tel:"514-804-8336", email:"ben@benavendu.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Sainte-Thérèse","Lorraine"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé","plex"], listings:{"Blainville":16,"Sainte-Thérèse":7,"Lorraine":5} },
    { nom:"Sophie Coulombe", titre:"Courtier immobilier résidentiel et commercial", tel:"514-243-6443", email:"info@sophiecoulombe.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Boisbriand","Bois-des-Filion"], types:["résidentiel","commercial"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","commercial","terrain"], listings:{"Blainville":11,"Boisbriand":7,"Bois-des-Filion":9} },
    { nom:"Ernso Cléus", titre:"Courtier immobilier résidentiel et commercial", tel:"514-360-8543", email:"immocleus@gmail.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Sainte-Thérèse","Blainville","Boisbriand","Bois-des-Filion"], types:["résidentiel","commercial"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","commercial","plex","jumelé"], listings:{"Sainte-Thérèse":13,"Blainville":8,"Boisbriand":6,"Bois-des-Filion":4} },
    { nom:"Alain Brunelle", titre:"Courtier immobilier", tel:"514-972-4207", email:"alainbrunelle@alainbrunelle.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Rosemère","Lorraine"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé","terrain","plex"], listings:{"Blainville":7,"Rosemère":10,"Lorraine":8} },
    { nom:"Habib Boumerhi", titre:"Courtier immobilier résidentiel", tel:"514-294-4036", email:"habib.boumerhi@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Sainte-Thérèse","Boisbriand"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé"], listings:{"Blainville":6,"Sainte-Thérèse":4,"Boisbriand":3} },
    { nom:"Daniel Constantin", titre:"Courtier immobilier résidentiel", tel:"514-887-4625", email:"danielconstantin@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Sainte-Thérèse","Rosemère","Lorraine","Blainville"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé","terrain"], listings:{"Sainte-Thérèse":12,"Rosemère":9,"Lorraine":6,"Blainville":5} },
    { nom:"Kristel Angel", titre:"Courtier immobilier résidentiel", tel:"514-796-7993", email:"kristel.angel@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Bois-des-Filion","Boisbriand"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["condo","jumelé","unifamiliale"], listings:{"Blainville":8,"Bois-des-Filion":11,"Boisbriand":5} },
    { nom:"Sara Auclair", titre:"Courtier immobilier", tel:"514-241-2075", email:"saraauclair@videotron.ca", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Sainte-Thérèse"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé"], listings:{"Blainville":5,"Sainte-Thérèse":7} },
    { nom:"Allan Bonilla", titre:"Courtier immobilier résidentiel", tel:"514-952-0085", email:"allan.bonilla@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Blainville","Boisbriand","Bois-des-Filion"], types:["résidentiel"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","jumelé"], listings:{"Blainville":4,"Boisbriand":6,"Bois-des-Filion":3} },
    { nom:"Nikolae Bouchard", titre:"Courtier immobilier résidentiel et commercial", tel:"514-953-2247", email:"nbouchard@remax-quebec.com", photo:"https://ucarecdn.com/e6afd6fe-bf71-42f1-a4ac-f092bc1ca7c1/-/scale_crop/400x400/center/", villes:["Sainte-Thérèse","Lorraine","Rosemère","Blainville"], types:["résidentiel","commercial"], transaction:["achat","vente"], proprietes:["unifamiliale","condo","commercial","plex","terrain"], listings:{"Sainte-Thérèse":15,"Lorraine":10,"Rosemère":8,"Blainville":6} },
  ];

  /* ──── LABELS ──── */
  const villeLabels = ["Blainville","Sainte-Thérèse","Lorraine","Rosemère","Boisbriand","Bois-des-Filion","Saint-Eustache","Oka","Deux-Montagnes","Mirabel","Pointe-Calumet","Sainte-Marthe-sur-le-Lac","Saint-Janvier","Ste-Anne-des-Plaines","Sainte-Sophie"];
  const transactionLabels = [
    { id:"achat", label:"Acheter", icon:'<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
    { id:"vente", label:"Vendre", icon:'<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' },
  ];
  const typeLabels = [
    { id:"résidentiel", label:"Résidentiel", icon:'<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>' },
    { id:"commercial", label:"Commercial", icon:'<svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2"/><path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3"/></svg>' },
  ];
  const proprieteLabels = [
    { id:"unifamiliale", label:"Maison unifamiliale" },
    { id:"condo", label:"Condo / Appartement" },
    { id:"jumelé", label:"Jumelé / Cottage" },
    { id:"plex", label:"Plex (2-5 logements)" },
    { id:"terrain", label:"Terrain" },
    { id:"commercial", label:"Commercial / Industriel" },
  ];

  /* ──── STATE ──── */
  let step = 0;
  let filters = { ville: null, transaction: null, type: null, propriete: null };

  /* ──── MATCHING ENGINE ──── */
  function matchCourtiers() {
    let results = [...courtiers];
    if (filters.ville) results = results.filter(c => c.villes.includes(filters.ville));
    if (filters.transaction) results = results.filter(c => c.transaction.includes(filters.transaction));
    if (filters.type) results = results.filter(c => c.types.includes(filters.type));
    if (filters.propriete) results = results.filter(c => c.proprietes.includes(filters.propriete));

    // Score: weighted by active listings in chosen city + other factors
    results = results.map(c => {
      let score = 0;
      const cityListings = (c.listings && filters.ville) ? (c.listings[filters.ville] || 0) : 0;

      // Primary factor: active listings in the chosen city (0-25 pts)
      score += cityListings;

      // Bonus: primary city match (+3)
      if (filters.ville && c.villes[0] === filters.ville) score += 3;

      // Bonus: versatility résidentiel + commercial (+1)
      if (c.types.includes('commercial') && c.types.includes('résidentiel')) score += 1;

      // Bonus: broad property expertise (+1)
      if (c.proprietes.length > 4) score += 1;

      return { ...c, score, cityListings };
    });

    results.sort((a, b) => b.score - a.score);
    return results.slice(0, 6);
  }

  /* ──── RENDER STEPS ──── */
  function renderStep() {
    const body = document.getElementById('cm-body');
    const progress = document.getElementById('cm-progress');
    const back = document.getElementById('cm-back');

    // Progress dots
    progress.innerHTML = [0,1,2,3,4].map(i =>
      `<span class="cm-dot${i === step ? ' active' : ''}${i < step ? ' done' : ''}"></span>`
    ).join('');

    back.style.display = step > 0 && step < 4 ? 'flex' : 'none';

    if (step === 0) renderVille(body);
    else if (step === 1) renderTransaction(body);
    else if (step === 2) renderType(body);
    else if (step === 3) renderPropriete(body);
    else if (step === 4) renderResults(body);
  }

  function renderVille(body) {
    body.innerHTML = `
      <div class="cm-step-title">Dans quelle ville cherchez-vous ?</div>
      <div class="cm-step-sub">Sélectionnez la ville où vous souhaitez acheter ou vendre.</div>
      <div class="cm-options cm-grid-cities">
        ${villeLabels.map(v => `
          <button class="cm-option cm-option-city" data-value="${v}">
            <span>${v}</span>
          </button>
        `).join('')}
      </div>`;
    body.querySelectorAll('.cm-option').forEach(btn => {
      btn.addEventListener('click', () => { filters.ville = btn.dataset.value; step = 1; renderStep(); });
    });
  }

  function renderTransaction(body) {
    body.innerHTML = `
      <div class="cm-step-title">Que souhaitez-vous faire ?</div>
      <div class="cm-step-sub">Nous trouverons le courtier idéal pour votre projet.</div>
      <div class="cm-options cm-grid-2">
        ${transactionLabels.map(t => `
          <button class="cm-option cm-option-lg" data-value="${t.id}">
            ${t.icon}
            <span>${t.label}</span>
          </button>
        `).join('')}
      </div>`;
    body.querySelectorAll('.cm-option').forEach(btn => {
      btn.addEventListener('click', () => { filters.transaction = btn.dataset.value; step = 2; renderStep(); });
    });
  }

  function renderType(body) {
    body.innerHTML = `
      <div class="cm-step-title">Quel type de propriété ?</div>
      <div class="cm-step-sub">Résidentiel ou commercial — nous avons des experts pour chaque marché.</div>
      <div class="cm-options cm-grid-2">
        ${typeLabels.map(t => `
          <button class="cm-option cm-option-lg" data-value="${t.id}">
            ${t.icon}
            <span>${t.label}</span>
          </button>
        `).join('')}
      </div>`;
    body.querySelectorAll('.cm-option').forEach(btn => {
      btn.addEventListener('click', () => { filters.type = btn.dataset.value; step = 3; renderStep(); });
    });
  }

  function renderPropriete(body) {
    const items = filters.type === 'commercial'
      ? proprieteLabels.filter(p => ['commercial','terrain','plex'].includes(p.id))
      : proprieteLabels.filter(p => p.id !== 'commercial');

    body.innerHTML = `
      <div class="cm-step-title">Plus précisément ?</div>
      <div class="cm-step-sub">Quel type de propriété vous intéresse à ${filters.ville} ?</div>
      <div class="cm-options cm-grid-2">
        ${items.map(p => `
          <button class="cm-option" data-value="${p.id}">
            <span>${p.label}</span>
          </button>
        `).join('')}
      </div>`;
    body.querySelectorAll('.cm-option').forEach(btn => {
      btn.addEventListener('click', () => { filters.propriete = btn.dataset.value; step = 4; renderStep(); });
    });
  }

  function renderResults(body) {
    const results = matchCourtiers();
    const transLabel = filters.transaction === 'achat' ? 'acheter' : 'vendre';
    const propLabel = proprieteLabels.find(p => p.id === filters.propriete)?.label || '';

    if (results.length === 0) {
      body.innerHTML = `
        <div class="cm-step-title">Aucun résultat</div>
        <div class="cm-step-sub">Aucun courtier ne correspond exactement à vos critères. Contactez-nous directement au <strong>450-430-4207</strong>.</div>
        <button class="cm-restart" onclick="document.getElementById('cm-back').click()">← Modifier mes critères</button>`;
      return;
    }

    body.innerHTML = `
      <div class="cm-results-header">
        <div class="cm-step-title">Vos courtiers recommandés</div>
        <div class="cm-step-sub">${results.length} courtier${results.length > 1 ? 's' : ''} spécialisé${results.length > 1 ? 's' : ''} pour <strong>${transLabel}</strong> un(e) <strong>${propLabel.toLowerCase()}</strong> à <strong>${filters.ville}</strong></div>
      </div>
      <div class="cm-results-grid">
        ${results.map((c, i) => `
          <div class="cm-broker-card" style="animation-delay: ${i * 0.06}s">
            <div class="cm-broker-avatar">
              <div class="cm-broker-initials">${c.nom.split(' ').map(n=>n[0]).join('')}</div>
            </div>
            <div class="cm-broker-info">
              <div class="cm-broker-name">${c.nom}</div>
              <div class="cm-broker-title">${c.titre}</div>
              ${c.cityListings ? `<div class="cm-broker-listings"><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg> ${c.cityListings} propriétés actives à ${filters.ville}</div>` : ''}
            </div>
            <div class="cm-broker-actions">
              <a href="tel:${c.tel.replace(/[^0-9+]/g,'')}" class="cm-btn-call" title="Appeler">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                ${c.tel}
              </a>
              <a href="mailto:${c.email}" class="cm-btn-email" title="Courriel">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                Courriel
              </a>
            </div>
          </div>
        `).join('')}
      </div>
      <button class="cm-restart">
        <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>
        Recommencer
      </button>`;

    body.querySelector('.cm-restart').addEventListener('click', () => {
      filters = { ville: null, transaction: null, type: null, propriete: null };
      step = 0;
      renderStep();
    });
  }

  /* ──── CREATE MODAL ──── */
  function createModal() {
    if (document.getElementById('courtier-modal')) return;

    const modal = document.createElement('div');
    modal.id = 'courtier-modal';
    modal.className = 'cm-overlay';
    modal.innerHTML = `
      <div class="cm-modal">
        <div class="cm-header">
          <div class="cm-header-left">
            <button class="cm-back" id="cm-back">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            </button>
            <span class="cm-header-title">Trouver votre courtier</span>
          </div>
          <button class="cm-close" id="cm-close">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="cm-progress" id="cm-progress"></div>
        <div class="cm-body" id="cm-body"></div>
      </div>`;

    document.body.appendChild(modal);

    // Inject styles
    const style = document.createElement('style');
    style.textContent = `
      .cm-overlay {
        position: fixed; inset: 0; z-index: 9999;
        background: rgba(20,30,45,0.6);
        backdrop-filter: blur(8px);
        display: flex; align-items: center; justify-content: center;
        opacity: 0; pointer-events: none;
        transition: opacity 0.35s cubic-bezier(0.16,1,0.3,1);
        padding: 20px;
      }
      .cm-overlay.open { opacity: 1; pointer-events: auto; }
      .cm-overlay.open .cm-modal {
        transform: translateY(0); opacity: 1;
      }
      .cm-modal {
        background: #faf9f6;
        border-radius: 16px;
        width: min(95vw, 640px);
        max-height: 85vh;
        overflow: hidden;
        display: flex; flex-direction: column;
        box-shadow: 0 4px 16px rgba(26,35,50,0.12), 0 24px 64px rgba(26,35,50,0.18);
        transform: translateY(24px); opacity: 0;
        transition: transform 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s;
      }
      .cm-header {
        display: flex; align-items: center; justify-content: space-between;
        padding: 18px 24px;
        border-bottom: 1px solid #e2e5eb;
        background: white;
      }
      .cm-header-left { display: flex; align-items: center; gap: 12px; }
      .cm-header-title {
        font-family: 'Outfit', sans-serif;
        font-size: 0.88rem; font-weight: 600;
        color: #1a1f2b; letter-spacing: -0.01em;
      }
      .cm-close, .cm-back {
        width: 36px; height: 36px; border-radius: 8px;
        border: 1px solid #e2e5eb; background: white;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; color: #6b7385;
        transition: background 0.2s, color 0.2s, border-color 0.2s;
      }
      .cm-close:hover, .cm-back:hover {
        background: #f0f1f3; color: #1a1f2b; border-color: #d0d3da;
      }
      .cm-progress {
        display: flex; gap: 6px; justify-content: center;
        padding: 16px 24px 0;
      }
      .cm-dot {
        width: 8px; height: 8px; border-radius: 50%;
        background: #e2e5eb;
        transition: background 0.3s, transform 0.3s;
      }
      .cm-dot.active { background: #3578c4; transform: scale(1.3); }
      .cm-dot.done { background: #2daa6e; }
      .cm-body {
        padding: 24px;
        overflow-y: auto;
        flex: 1;
      }
      .cm-step-title {
        font-family: 'Cormorant Garamond', serif;
        font-size: clamp(1.4rem, 2.5vw, 1.8rem);
        font-weight: 500; color: #1a1f2b;
        line-height: 1.15; letter-spacing: -0.02em;
        margin-block-end: 6px;
      }
      .cm-step-sub {
        font-size: 0.85rem; color: #6b7385;
        line-height: 1.6; margin-block-end: 24px;
      }
      .cm-step-sub strong { color: #1a1f2b; font-weight: 600; }
      .cm-options { display: grid; gap: 10px; }
      .cm-grid-cities {
        grid-template-columns: repeat(3, 1fr);
        max-height: 340px;
        overflow-y: auto;
        padding-right: 4px;
      }
      .cm-grid-cities::-webkit-scrollbar { width: 4px; }
      .cm-grid-cities::-webkit-scrollbar-track { background: transparent; }
      .cm-grid-cities::-webkit-scrollbar-thumb { background: #d0d3da; border-radius: 4px; }
      .cm-grid-3 { grid-template-columns: repeat(3, 1fr); }
      .cm-grid-2 { grid-template-columns: repeat(2, 1fr); }
      .cm-option-city {
        padding: 14px 12px !important;
        flex-direction: row !important;
        gap: 0 !important;
      }
      .cm-option {
        display: flex; flex-direction: column;
        align-items: center; gap: 8px;
        padding: 20px 16px;
        background: white; border: 1px solid #e2e5eb;
        border-radius: 12px; cursor: pointer;
        font-family: 'Outfit', sans-serif;
        font-size: 0.85rem; font-weight: 500;
        color: #3d4555;
        transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1), background 0.3s;
      }
      .cm-option:hover {
        border-color: #3578c4;
        box-shadow: 0 2px 8px rgba(53,120,196,0.12);
        transform: translateY(-2px);
        background: #f0f6fc;
      }
      .cm-option svg { color: #3578c4; }
      .cm-option-lg { padding: 28px 20px; gap: 10px; font-size: 0.92rem; }
      .cm-results-header { margin-block-end: 20px; }
      .cm-results-grid { display: flex; flex-direction: column; gap: 10px; margin-block-end: 20px; }
      .cm-broker-card {
        display: grid;
        grid-template-columns: 48px 1fr auto;
        gap: 14px; align-items: center;
        padding: 16px 18px;
        background: white; border: 1px solid #e2e5eb;
        border-radius: 12px;
        animation: cmSlideUp 0.4s cubic-bezier(0.16,1,0.3,1) backwards;
        transition: box-shadow 0.3s, border-color 0.3s;
      }
      .cm-broker-card:hover {
        border-color: #3578c4;
        box-shadow: 0 2px 12px rgba(53,120,196,0.1);
      }
      @keyframes cmSlideUp {
        from { opacity: 0; transform: translateY(12px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .cm-broker-avatar {
        width: 48px; height: 48px; border-radius: 10px;
        background: linear-gradient(135deg, #1e3350, #3578c4);
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
      }
      .cm-broker-initials {
        font-family: 'Outfit', sans-serif;
        font-size: 0.82rem; font-weight: 700;
        color: white; letter-spacing: 0.02em;
      }
      .cm-broker-name {
        font-family: 'Outfit', sans-serif;
        font-size: 0.9rem; font-weight: 600;
        color: #1a1f2b;
      }
      .cm-broker-title {
        font-size: 0.72rem; color: #6b7385;
        margin-top: 1px;
      }
      .cm-broker-listings {
        display: inline-flex; align-items: center; gap: 4px;
        font-size: 0.68rem; font-weight: 600;
        color: #2daa6e; margin-top: 4px;
      }
      .cm-broker-listings svg { color: #2daa6e; }
      .cm-broker-tags { display: flex; gap: 4px; margin-top: 4px; flex-wrap: wrap; }
      .cm-tag {
        font-size: 0.62rem; font-weight: 600;
        padding: 2px 7px; border-radius: 4px;
        background: rgba(53,120,196,0.08); color: #3578c4;
        letter-spacing: 0.02em;
      }
      .cm-broker-actions {
        display: flex; flex-direction: column; gap: 6px;
        align-items: flex-end;
      }
      .cm-btn-call, .cm-btn-email {
        display: inline-flex; align-items: center; gap: 6px;
        font-family: 'Outfit', sans-serif;
        font-size: 0.72rem; font-weight: 600;
        padding: 5px 10px; border-radius: 6px;
        transition: background 0.2s, color 0.2s;
        text-decoration: none;
      }
      .cm-btn-call {
        background: #1e3350; color: white;
      }
      .cm-btn-call:hover { background: #3578c4; }
      .cm-btn-email {
        background: #f0f1f3; color: #3d4555;
      }
      .cm-btn-email:hover { background: #e2e5eb; }
      .cm-restart {
        display: inline-flex; align-items: center; gap: 6px;
        font-family: 'Outfit', sans-serif;
        font-size: 0.82rem; font-weight: 500;
        color: #6b7385; background: none;
        border: 1px solid #e2e5eb; border-radius: 8px;
        padding: 10px 18px; cursor: pointer;
        transition: color 0.2s, border-color 0.2s;
        margin-top: 4px;
      }
      .cm-restart:hover { color: #3578c4; border-color: #3578c4; }

      @media (max-width: 500px) {
        .cm-grid-3 { grid-template-columns: repeat(2, 1fr); }
        .cm-grid-2 { grid-template-columns: 1fr; }
        .cm-broker-card { grid-template-columns: 40px 1fr; }
        .cm-broker-actions { grid-column: 1 / -1; flex-direction: row; }
        .cm-body { padding: 16px; }
      }
    `;
    document.head.appendChild(style);

    // Events
    document.getElementById('cm-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.getElementById('cm-back').addEventListener('click', () => {
      if (step > 0) { step--; renderStep(); }
    });

    renderStep();
  }

  function openModal() {
    createModal();
    filters = { ville: null, transaction: null, type: null, propriete: null };
    step = 0;
    renderStep();
    requestAnimationFrame(() => {
      document.getElementById('courtier-modal').classList.add('open');
    });
  }

  function closeModal() {
    const m = document.getElementById('courtier-modal');
    if (m) m.classList.remove('open');
  }

  /* ──── BIND BUTTONS ──── */
  function bindButtons() {
    document.querySelectorAll('a[href="#contact"], .topbar-cta, [data-courtier-modal]').forEach(btn => {
      // Only bind "Parler à un courtier" and "Nous joindre" buttons
      const text = btn.textContent.trim().toLowerCase();
      if (text.includes('courtier') || text.includes('nous joindre')) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          openModal();
        });
      }
    });
  }

  // Init on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bindButtons);
  } else {
    bindButtons();
  }

  // Expose globally
  window.openCourtierModal = openModal;

})();
