/**
 * ===================================================================
 * VISIOREG™ — LOGIQUE APPLICATIVE & INTERACTIVE (ÉCOSYSTÈME VMS)
 * Conception & Ingénierie : SERI TAGRO ROY
 * ===================================================================
 */

// ÉTAT GLOBAL DE L'APPLICATION (EN MÉMOIRE & LOCALSTORAGE)
const AppState = {
  activeTab: 'tab-kiosk',
  selectedDocPreset: 'cni_ci',
  isScanning: false,

  // Documents modèles pour la démonstration OCR
  sampleDocuments: {
    cni_ci: {
      type: 'CNI',
      docTypeName: 'Carte Nationale d\'Identité (CNI)',
      country: 'RÉPUBLIQUE DE CÔTE D\'IVOIRE',
      flag: '🇨🇮',
      docNumber: 'CI 004829104',
      lastName: 'KOUASSI',
      firstName: 'Jean-Marc Yao',
      birthDate: '14/05/1988',
      expiryDate: '22/09/2032',
      nationality: 'Ivoirienne',
      company: 'Cabinet Audit Deloitte',
      phone: '+225 07 48 29 10 44',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
      mrz: 'IDCI004829104<<<<<<<<<<<<<<<<<<8805142M3209224CIV<<<<<<<<<<<6'
    },
    passport: {
      type: 'Passeport',
      docTypeName: 'Passeport Biométrique International',
      country: 'COMMUNAUTÉ DE L\'AFRIQUE DE L\'OUEST',
      flag: '🌐',
      docNumber: 'PA 98124018',
      lastName: 'DIALLO',
      firstName: 'Mamadou Amadou',
      birthDate: '03/11/1984',
      expiryDate: '12/08/2030',
      nationality: 'Sénégalaise',
      company: 'Banque Ouest Africaine (BOAD)',
      phone: '+221 77 654 32 10',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
      mrz: 'P<SEN<<DIALLO<<MAMADOU<<<<<<<<<<<<<<<<<<<<<<<<<PA98124018<4SEN8411036M3008125<<<<<<<<<<<<<<02'
    },
    permis: {
      type: 'Permis',
      docTypeName: 'Permis de Conduire Sécurisé',
      country: 'MINISTÈRE DES TRANSPORTS',
      flag: '🚗',
      docNumber: 'PC 77481920',
      lastName: 'TRAORE',
      firstName: 'Fatoumata Aïcha',
      birthDate: '28/01/1992',
      expiryDate: '15/03/2028',
      nationality: 'Ivoirienne',
      company: 'Société Générale CI',
      phone: '+225 05 77 48 19 20',
      photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      mrz: 'D1CIV77481920TRAORE<<FATOUMATA<<<<<<<<<<<<<<<<<'
    }
  },

  // Base des visites (Exemples initiaux représentatifs)
  visits: [
    {
      id: 'VIS-7821',
      visitor: {
        firstName: 'Aminata',
        lastName: 'BAKAYOKO',
        docType: 'CNI',
        docNumber: 'CI 009218274',
        nationality: 'Ivoirienne',
        phone: '+225 07 11 22 33 44',
        company: 'Cabinet Conseil KPMG',
        photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
      },
      host: {
        name: 'M. KOUASSI Jean',
        title: 'Directeur Général (DG)',
        dept: 'Direction Générale'
      },
      purpose: 'Signature d\'Accord Cadre',
      checkIn: '08:45',
      checkOut: null,
      duration: '56 min',
      status: 'ACTIVE_INSIDE' // ACTIVE_INSIDE, PENDING_APPROVAL, COMPLETED, REJECTED
    },
    {
      id: 'VIS-7822',
      visitor: {
        firstName: 'David',
        lastName: 'KOFFI',
        docType: 'Permis',
        docNumber: 'PC 48201948',
        nationality: 'Ivoirienne',
        phone: '+225 01 23 45 67 89',
        company: 'MTN Côte d\'Ivoire',
        photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80'
      },
      host: {
        name: 'M. KONE Ibrahim',
        title: 'Responsable DSI',
        dept: 'Informatique & Télécoms'
      },
      purpose: 'Maintenance Fibre & Serveurs',
      checkIn: '09:10',
      checkOut: null,
      duration: '31 min',
      status: 'ACTIVE_INSIDE'
    },
    {
      id: 'VIS-7823',
      visitor: {
        firstName: 'Sarah',
        lastName: 'MENSAH',
        docType: 'Passeport',
        docNumber: 'PA 11982736',
        nationality: 'Ghanéenne',
        phone: '+233 24 123 4567',
        company: 'Ecobank Transnational',
        photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
      },
      host: {
        name: 'M. DIARRA Cheick',
        title: 'Directeur Financier (DAF)',
        dept: 'Direction Financière'
      },
      purpose: 'Audit Trésorerie Trimestriel',
      checkIn: '09:25',
      checkOut: null,
      duration: '16 min',
      status: 'ACTIVE_INSIDE'
    },
    {
      id: 'VIS-7819',
      visitor: {
        firstName: 'Roland',
        lastName: 'GOUANOU',
        docType: 'CNI',
        docNumber: 'CI 001928374',
        nationality: 'Ivoirienne',
        phone: '+225 05 05 05 05 05',
        company: 'Transport & Logistique Express',
        photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80'
      },
      host: {
        name: 'Mme KOUAME Marie',
        title: 'Directrice RH',
        dept: 'Ressources Humaines'
      },
      purpose: 'Dépôt de Plis Confidentiels',
      checkIn: '08:05',
      checkOut: '08:35',
      duration: '30 min',
      status: 'COMPLETED'
    }
  ],

  // Visite en cours d'attente d'approbation par le DG
  pendingApproval: null
};

// ===================================================================
// INITIALISATION DE L'APPLICATION
// ===================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Charger le document CNI par défaut
  renderSampleDocPreview(AppState.sampleDocuments.cni_ci);
  
  // Remplir les formulaires et listes
  updatePendingTable();
  updateCheckoutList();
  renderMasterRegister();
  updateCounters();

  // Dessiner les graphiques
  initCharts();

  // Lancer l'effet machine à écrire du titre
  initTypewriter();

  // Initialiser le premier document dans le formulaire
  prefillFormWithDoc(AppState.sampleDocuments.cni_ci);

  // Écouteur pour fermer les modals avec la touche Echap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAuthorModal();
      closeBadgeModal();
      closeEvacuationModal();
    }
  });
});

function initTypewriter() {
  const el = document.getElementById('typewriter-title');
  if (!el) return;
  const fullText = "ARCHITECTURE GLOBALE & PROPOSITION COMMERCIALE";
  el.textContent = "";
  let i = 0;
  function step() {
    if (i < fullText.length) {
      el.textContent += fullText.charAt(i);
      i++;
      setTimeout(step, 40);
    }
  }
  setTimeout(step, 250);
}

// ===================================================================
// NAVIGATION ENTRE LES SOUS-ONGLETS DU SIMULATEUR DÉMO
// ===================================================================
function switchDemoTab(tabId) {
  document.querySelectorAll('.demo-pane').forEach(pane => pane.classList.remove('active'));
  document.querySelectorAll('.subnav-tab').forEach(btn => btn.classList.remove('active'));

  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.add('active');

  const targetBtn = document.querySelector(`.subnav-tab[data-tab="${tabId}"]`);
  if (targetBtn) targetBtn.classList.add('active');

  if (tabId === 'tab-stats') {
    setTimeout(initCharts, 100);
  }
}

function switchTab(tabId) {
  switchDemoTab(tabId);
}
function openAuthorModal() {
  const overlay = document.getElementById('author-welcome-overlay');
  if (overlay) overlay.classList.remove('hidden');
}

function closeAuthorModal() {
  const overlay = document.getElementById('author-welcome-overlay');
  if (overlay) overlay.classList.add('hidden');
}

// ===================================================================
// NAVIGATION ENTRE ONGLETS
// ===================================================================
function switchTab(tabId) {
  AppState.activeTab = tabId;

  // Masquer tous les onglets
  document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active'));

  // Activer l'onglet cible
  const targetPane = document.getElementById(tabId);
  if (targetPane) targetPane.classList.add('active');

  const targetBtn = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);
  if (targetBtn) targetBtn.classList.add('active');

  // Si on ouvre l'onglet statistiques, redessiner les graphiques pour adapter le canvas
  if (tabId === 'tab-stats') {
    setTimeout(initCharts, 100);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleNavbar() {
  const navbar = document.getElementById('main-navbar');
  const btn = document.getElementById('btn-toggle-navbar');
  const icon = document.getElementById('toggle-nav-icon');
  const text = document.getElementById('toggle-nav-text');

  if (!navbar) return;

  const isHidden = navbar.classList.toggle('navbar-hidden');
  if (isHidden) {
    if (icon) icon.textContent = '👁️‍🗨️';
    if (text) text.textContent = 'Afficher Barre';
    if (btn) btn.style.borderColor = 'var(--cyan)';
    showToast('Barre de navigation masquée (Mode Kiosque Plein Écran)', 'info');
  } else {
    if (icon) icon.textContent = '👁️';
    if (text) text.textContent = 'Masquer Barre';
    if (btn) btn.style.borderColor = 'var(--border-subtle)';
    showToast('Barre de navigation réaffichée', 'info');
  }
}

// ===================================================================
// SÉLECTEUR DE PIÈCES MODÈLES & PRÉVISUALISATION DU SCANNER
// ===================================================================
function loadSampleDoc(presetKey) {
  AppState.selectedDocPreset = presetKey;

  // Mettre à jour les boutons
  document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
  const currentBtn = event ? event.currentTarget : null;
  if (currentBtn) currentBtn.classList.add('active');

  const doc = AppState.sampleDocuments[presetKey];
  if (doc) {
    renderSampleDocPreview(doc);
    runDocumentOCR(); // Relancer automatiquement l'OCR pour l'effet "Waouh"
  }
}

function renderSampleDocPreview(doc) {
  const container = document.getElementById('doc-card-render');
  if (!container) return;

  container.innerHTML = `
    <div class="doc-header-strip">
      <div class="doc-country">${doc.flag} ${doc.country}</div>
      <div class="doc-chip">🛡️ BIOMÉTRIQUE</div>
    </div>
    <div class="doc-body-flex">
      <div class="doc-face-photo">
        <img src="${doc.photo}" alt="Portrait OCR">
      </div>
      <div class="doc-fields-mock">
        <div><span>NOM :</span> <strong>${doc.lastName}</strong></div>
        <div><span>PRÉNOMS :</span> <strong>${doc.firstName}</strong></div>
        <div><span>N° PIÈCE :</span> <strong style="color:#38bdf8;">${doc.docNumber}</strong></div>
        <div><span>NÉ LE :</span> <strong>${doc.birthDate}</strong> • <span>NAT :</span> <strong>${doc.nationality}</strong></div>
        <div><span>EXPIRE :</span> <strong style="color:#fbbf24;">${doc.expiryDate}</strong></div>
      </div>
    </div>
    <div class="doc-mrz-strip">${doc.mrz}</div>
  `;
}

// GESTION DU TÉLÉVERSEMENT D'UNE VRAIE PHOTO PAR L'UTILISATEUR
function handleCustomDocUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const imageUrl = e.target.result;
    
    // Créer un document personnalisé
    const customDoc = {
      type: 'CNI',
      docTypeName: 'Document Numérisé Personnalisé',
      country: 'DOCUMENT OFFICIEL VÉRIFIÉ',
      flag: '📄',
      docNumber: 'CI ' + Math.floor(100000000 + Math.random() * 900000000),
      lastName: 'VISITEUR',
      firstName: 'Authentifié Caméra',
      birthDate: '10/10/1990',
      expiryDate: '10/10/2035',
      nationality: 'Ivoirienne',
      company: 'Entreprise Partenaire',
      phone: '+225 07 00 00 00 00',
      photo: imageUrl,
      mrz: 'IDDOC<<<<<<<<<<<<<<<<<<<<<<<<<<<' + Math.floor(Math.random() * 9999999)
    };

    renderSampleDocPreview(customDoc);
    prefillFormWithDoc(customDoc);
    runDocumentOCR();
    showToast('📷 Image reçue du capteur optique. Lancement de l\'OCR...', 'success');
  };
  reader.readAsDataURL(file);
}

// ===================================================================
// MOTEUR D'EXTRACTION OCR AVEC SCANNER LASER ANIMÉ
// ===================================================================
function runDocumentOCR() {
  if (AppState.isScanning) return;
  AppState.isScanning = true;

  const laser = document.getElementById('laser-scanner');
  const btnScan = document.getElementById('btn-trigger-scan');
  const btnText = document.getElementById('scan-btn-text');
  const ocrStatus = document.getElementById('ocr-badge-status');
  const detectionBoxes = document.getElementById('ocr-detection-boxes');

  // Activer le laser
  if (laser) laser.classList.add('scanning');
  if (btnScan) btnScan.disabled = true;
  if (btnText) btnText.textContent = 'Extraction OCR en cours...';
  if (ocrStatus) {
    ocrStatus.textContent = '⚡ Analyse par vision en cours...';
    ocrStatus.style.borderColor = '#06b6d4';
    ocrStatus.style.color = '#38bdf8';
  }

  // Jouer un bip sonore subtil de début de scan
  playBeepSound(800, 100);

  // Simuler le temps de traitement de l'IA (1.5 seconde)
  setTimeout(() => {
    if (laser) laser.classList.remove('scanning');
    if (btnScan) btnScan.disabled = false;
    if (btnText) btnText.textContent = 'Lancer l\'Extraction OCR Instantanée';
    if (ocrStatus) {
      ocrStatus.textContent = '✅ Extraction Réussie (100%)';
      ocrStatus.style.borderColor = '#10b981';
      ocrStatus.style.color = '#34d399';
    }

    // Récupérer le document actuel
    const currentDoc = AppState.sampleDocuments[AppState.selectedDocPreset] || AppState.sampleDocuments.cni_ci;
    prefillFormWithDoc(currentDoc);

    // Jouer un son de validation
    playBeepSound(1200, 150);

    showToast('✨ OCR Terminé : 7 champs extraits en 1.64s avec 99.8% de confiance !', 'success');
    AppState.isScanning = false;
  }, 1600);
}

function resetScanner() {
  const ocrStatus = document.getElementById('ocr-badge-status');
  if (ocrStatus) {
    ocrStatus.textContent = 'Prêt pour numérisation';
    ocrStatus.style.borderColor = 'rgba(16, 185, 129, 0.3)';
    ocrStatus.style.color = '#34d399';
  }
  showToast('Scanner réinitialisé.', 'info');
}

// PRÉ-REMPLISSAGE DU FORMULAIRE D'ACCUEIL AVEC EFFET VISUEL
function prefillFormWithDoc(doc) {
  const fields = [
    { id: 'v-lastname', val: doc.lastName },
    { id: 'v-firstname', val: doc.firstName },
    { id: 'v-doctype', val: doc.type },
    { id: 'v-docnumber', val: doc.docNumber },
    { id: 'v-nationality', val: doc.nationality },
    { id: 'v-birthdate', val: doc.birthDate },
    { id: 'v-expirydate', val: doc.expiryDate },
    { id: 'v-phone', val: doc.phone },
    { id: 'v-company', val: doc.company }
  ];

  fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (el) {
      el.value = f.val;
      el.classList.add('auto-filled');
      setTimeout(() => el.classList.remove('auto-filled'), 1800);
    }
  });

  // Mettre à jour la photo
  const photoEl = document.getElementById('form-visitor-photo');
  if (photoEl && doc.photo) {
    photoEl.src = doc.photo;
  }
}

// ===================================================================
// SOUMISSION DU FORMULAIRE D'ACCUEIL (ENREGISTREMENT & VALIDATION DG)
// ===================================================================
function handleVisitorSubmit(event) {
  event.preventDefault();

  const newVisitCode = 'VIS-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const timeStr = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');

  const hostSelect = document.getElementById('v-host');
  const hostName = hostSelect ? hostSelect.options[hostSelect.selectedIndex].text : 'Direction Générale';

  const newVisit = {
    id: newVisitCode,
    visitor: {
      firstName: document.getElementById('v-firstname').value,
      lastName: document.getElementById('v-lastname').value,
      docType: document.getElementById('v-doctype').value,
      docNumber: document.getElementById('v-docnumber').value,
      nationality: document.getElementById('v-nationality').value,
      phone: document.getElementById('v-phone').value,
      company: document.getElementById('v-company').value || 'Visiteur Indépendant',
      photo: document.getElementById('form-visitor-photo').src
    },
    host: {
      name: hostName.split('—')[0].trim(),
      title: hostName.includes('(') ? hostName.split('(')[1].replace(')', '') : 'Collaborateur',
      dept: 'Direction'
    },
    purpose: document.getElementById('v-purpose').value,
    checkIn: timeStr,
    checkOut: null,
    duration: 'En attente',
    status: 'PENDING_APPROVAL'
  };

  // Enregistrer dans la liste globale
  AppState.visits.unshift(newVisit);
  AppState.pendingApproval = newVisit;

  // Mettre à jour les interfaces
  updatePendingTable();
  renderMasterRegister();
  updateCounters();

  // Mettre à jour le simulateur smartphone du DG
  updatePhoneNotification(newVisit);

  // Ouvrir le modal du Badge Visiteur
  openBadgeModal(newVisit);

  // Jouer alerte sonore
  playBeepSound(900, 200);

  showToast(`⚡ Visiteur ${newVisit.visitor.lastName} enregistré ! Notification transmise à ${newVisit.host.name}.`, 'success');
}

// ===================================================================
// SIMULATEUR SMARTPHONE COLLABORATEUR / DG
// ===================================================================
function updatePhoneNotification(visit) {
  const photoEl = document.getElementById('phone-v-photo');
  const nameEl = document.getElementById('phone-v-name');
  const compEl = document.getElementById('phone-v-company');
  const purposeEl = document.getElementById('phone-v-purpose');
  const feedbackEl = document.getElementById('phone-response-log');
  const actionsEl = document.querySelector('.chat-quick-actions');

  if (photoEl) photoEl.src = visit.visitor.photo;
  if (nameEl) nameEl.textContent = `M. ${visit.visitor.lastName} ${visit.visitor.firstName}`;
  if (compEl) compEl.textContent = visit.visitor.company;
  if (purposeEl) purposeEl.textContent = `« ${visit.purpose} »`;

  if (feedbackEl) feedbackEl.classList.add('hidden');
  if (actionsEl) actionsEl.style.display = 'flex';

  // Alerte pastille sur l'onglet
  const pendingBadge = document.getElementById('pending-badge-count');
  if (pendingBadge) {
    pendingBadge.textContent = '1 NOUVEAU';
    pendingBadge.style.display = 'inline-block';
  }
}

function respondToVisit(decision) {
  const visit = AppState.pendingApproval || AppState.visits.find(v => v.status === 'PENDING_APPROVAL');
  if (!visit) {
    showToast('Aucune visite en attente d\'approbation.', 'info');
    return;
  }

  const feedbackEl = document.getElementById('phone-response-log');
  const actionsEl = document.querySelector('.chat-quick-actions');

  if (actionsEl) actionsEl.style.display = 'none';

  if (decision === 'APPROVED') {
    visit.status = 'ACTIVE_INSIDE';
    visit.duration = '1 min';

    if (feedbackEl) {
      feedbackEl.innerHTML = `✅ <strong>VOUS AVEZ ACCEPTÉ L'ACCÈS</strong><br>L'agent d'accueil est notifié. Le visiteur monte dans votre bureau.`;
      feedbackEl.className = 'chat-bubble status-feedback text-success';
      feedbackEl.classList.remove('hidden');
    }
    showToast(`✅ Visite acceptée par la Direction ! Le visiteur ${visit.visitor.lastName} a été autorisé à entrer.`, 'success');
  } else if (decision === 'DELAYED') {
    if (feedbackEl) {
      feedbackEl.innerHTML = `⏳ <strong>CONSIGNE DE PATIENCE TRANSMISE</strong><br>L'accueil invite le visiteur à patienter 5 minutes au salon d'accueil.`;
      feedbackEl.className = 'chat-bubble status-feedback';
      feedbackEl.style.color = '#fbbf24';
      feedbackEl.classList.remove('hidden');
    }
    showToast(`⏳ Consigne envoyée : Faire patienter au salon d'accueil.`, 'info');
  } else if (decision === 'REJECTED') {
    visit.status = 'REJECTED';
    visit.checkOut = 'Non admis';
    visit.duration = '0 min';

    if (feedbackEl) {
      feedbackEl.innerHTML = `❌ <strong>VISITE REFUSÉE</strong><br>L'accueil informe diplomatiquement le visiteur de convenir d'un autre rendez-vous.`;
      feedbackEl.className = 'chat-bubble status-feedback';
      feedbackEl.style.color = '#f87171';
      feedbackEl.classList.remove('hidden');
    }
    showToast(`❌ Visite refusée par la Direction.`, 'danger');
  }

  // Mettre à jour toutes les listes
  updatePendingTable();
  updateCheckoutList();
  renderMasterRegister();
  updateCounters();
}

// ===================================================================
// GESTION DU MODAL BADGE VISITEUR PHYSIQUE (AVEC QR CODE VECTORIEL)
// ===================================================================
function openBadgeModal(visit) {
  const modal = document.getElementById('badge-modal');
  if (!modal) return;

  document.getElementById('badge-visitor-name').textContent = `M. ${visit.visitor.lastName} ${visit.visitor.firstName}`;
  document.getElementById('badge-visitor-company').textContent = visit.visitor.company;
  document.getElementById('badge-visitor-host').textContent = visit.host.name;
  document.getElementById('badge-checkin-time').textContent = visit.checkIn;
  document.getElementById('badge-visitor-code').textContent = visit.id;
  document.getElementById('badge-visitor-photo').src = visit.visitor.photo;

  // Générer le QR Code vectoriel SVG
  generateSvgQRCode(document.getElementById('badge-qr-render'), `VISIOREG:${visit.id}:${visit.visitor.docNumber}`);

  modal.classList.remove('hidden');
}

function closeBadgeModal() {
  const modal = document.getElementById('badge-modal');
  if (modal) modal.classList.add('hidden');
}

function printBadge() {
  window.print();
}

function simulateWhatsAppSend() {
  showToast('📲 Badge Numérique transmis avec succès sur le WhatsApp du visiteur !', 'success');
}

// GÉNÉRATEUR VECTORIEL DE FAUX QR CODE SVG RÉALISTE
function generateSvgQRCode(container, payloadText) {
  if (!container) return;
  // Générer un QR Code SVG net et élégant
  container.innerHTML = `
    <svg width="110" height="110" viewBox="0 0 100 100" style="background:#fff; padding:6px; border-radius:6px;">
      <!-- Coins de positionnement OACI -->
      <rect x="0" y="0" width="28" height="28" fill="#0f172a" rx="4"/>
      <rect x="4" y="4" width="20" height="20" fill="#fff" rx="2"/>
      <rect x="8" y="8" width="12" height="12" fill="#0f172a" rx="2"/>

      <rect x="72" y="0" width="28" height="28" fill="#0f172a" rx="4"/>
      <rect x="76" y="4" width="20" height="20" fill="#fff" rx="2"/>
      <rect x="80" y="8" width="12" height="12" fill="#0f172a" rx="2"/>

      <rect x="0" y="72" width="28" height="28" fill="#0f172a" rx="4"/>
      <rect x="4" y="76" width="20" height="20" fill="#fff" rx="2"/>
      <rect x="8" y="80" width="12" height="12" fill="#0f172a" rx="2"/>

      <!-- Modules de données chiffrées -->
      <rect x="34" y="6" width="6" height="6" fill="#0f172a"/>
      <rect x="44" y="6" width="6" height="6" fill="#0f172a"/>
      <rect x="56" y="6" width="6" height="6" fill="#0f172a"/>
      <rect x="34" y="16" width="6" height="6" fill="#0f172a"/>
      <rect x="48" y="16" width="6" height="6" fill="#0f172a"/>
      <rect x="60" y="16" width="6" height="6" fill="#0f172a"/>

      <rect x="6" y="34" width="6" height="6" fill="#0f172a"/>
      <rect x="18" y="34" width="6" height="6" fill="#0f172a"/>
      <rect x="34" y="34" width="6" height="6" fill="#0f172a"/>
      <rect x="44" y="34" width="6" height="6" fill="#0f172a"/>
      <rect x="54" y="34" width="6" height="6" fill="#0f172a"/>
      <rect x="64" y="34" width="6" height="6" fill="#0f172a"/>
      <rect x="78" y="34" width="6" height="6" fill="#0f172a"/>

      <rect x="14" y="44" width="6" height="6" fill="#0f172a"/>
      <rect x="24" y="44" width="6" height="6" fill="#0f172a"/>
      <rect x="40" y="44" width="6" height="6" fill="#0f172a"/>
      <rect x="60" y="44" width="6" height="6" fill="#0f172a"/>
      <rect x="84" y="44" width="6" height="6" fill="#0f172a"/>

      <rect x="34" y="54" width="6" height="6" fill="#0f172a"/>
      <rect x="48" y="54" width="6" height="6" fill="#0f172a"/>
      <rect x="66" y="54" width="6" height="6" fill="#0f172a"/>
      <rect x="80" y="54" width="6" height="6" fill="#0f172a"/>

      <rect x="34" y="74" width="6" height="6" fill="#0f172a"/>
      <rect x="46" y="74" width="6" height="6" fill="#0f172a"/>
      <rect x="60" y="74" width="6" height="6" fill="#0f172a"/>
      <rect x="72" y="74" width="6" height="6" fill="#0f172a"/>
      <rect x="84" y="74" width="6" height="6" fill="#0f172a"/>

      <rect x="40" y="86" width="6" height="6" fill="#0f172a"/>
      <rect x="52" y="86" width="6" height="6" fill="#0f172a"/>
      <rect x="68" y="86" width="6" height="6" fill="#0f172a"/>
      <rect x="80" y="86" width="6" height="6" fill="#0f172a"/>
    </svg>
  `;
}

// ===================================================================
// BORNE CHECK-OUT (SORTIES) & CLÔTURE DE VISITE
// ===================================================================
function updateCheckoutList() {
  const container = document.getElementById('inside-visitors-list');
  const countBadge = document.getElementById('checkout-count-badge');
  if (!container) return;

  const insideVisitors = AppState.visits.filter(v => v.status === 'ACTIVE_INSIDE');
  if (countBadge) countBadge.textContent = `${insideVisitors.length} personnes dans le bâtiment`;

  if (insideVisitors.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:30px; color:#64748b;">Aucun visiteur actuellement dans les locaux.</div>`;
    return;
  }

  container.innerHTML = insideVisitors.map(v => `
    <div class="inside-visitor-row">
      <div class="inside-v-left">
        <img class="inside-v-photo" src="${v.visitor.photo}" alt="${v.visitor.lastName}">
        <div>
          <div class="inside-v-name">M. ${v.visitor.lastName} ${v.visitor.firstName}</div>
          <div class="inside-v-meta">${v.visitor.company} • Hôte : ${v.host.name}</div>
          <span class="inside-v-time-badge">Entré à ${v.checkIn} (${v.duration})</span>
        </div>
      </div>
      <button class="btn-checkout-direct" onclick="checkoutVisit('${v.id}')">
        <span>Enregistrer Sortie ➔</span>
      </button>
    </div>
  `).join('');
}

function checkoutVisit(visitId) {
  const visit = AppState.visits.find(v => v.id === visitId);
  if (!visit) return;

  const now = new Date();
  const timeStr = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');

  visit.status = 'COMPLETED';
  visit.checkOut = timeStr;
  visit.duration = '42 min (Clôturé)';

  updateCheckoutList();
  renderMasterRegister();
  updateCounters();

  playBeepSound(1000, 100);
  showToast(`📟 Sortie enregistrée pour ${visit.visitor.lastName} à ${timeStr}. Visite clôturée.`, 'info');
}

function handleManualCheckout() {
  const input = document.getElementById('manual-checkout-code');
  if (!input || !input.value.trim()) return;

  const code = input.value.trim().toUpperCase();
  const visit = AppState.visits.find(v => v.id === code && v.status === 'ACTIVE_INSIDE');

  if (visit) {
    checkoutVisit(visit.id);
    input.value = '';
  } else {
    showToast(`Code ${code} non trouvé parmi les personnes actuellement dans les locaux.`, 'danger');
  }
}

// ===================================================================
// REGISTRE CENTRALISÉ & PISTE D'AUDIT
// ===================================================================
function renderMasterRegister(filterType = 'ALL', searchQuery = '') {
  const tbody = document.getElementById('master-register-tbody');
  if (!tbody) return;

  let filtered = AppState.visits;

  // Filtrage par statut
  if (filterType === 'ACTIVE') {
    filtered = filtered.filter(v => v.status === 'ACTIVE_INSIDE');
  } else if (filterType === 'COMPLETED') {
    filtered = filtered.filter(v => v.status === 'COMPLETED');
  } else if (filterType === 'REJECTED') {
    filtered = filtered.filter(v => v.status === 'REJECTED');
  }

  // Filtrage par texte de recherche
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(v => 
      v.visitor.lastName.toLowerCase().includes(q) ||
      v.visitor.firstName.toLowerCase().includes(q) ||
      v.visitor.docNumber.toLowerCase().includes(q) ||
      v.visitor.company.toLowerCase().includes(q) ||
      v.host.name.toLowerCase().includes(q) ||
      v.id.toLowerCase().includes(q)
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding:30px; color:#64748b;">Aucune visite ne correspond aux critères de recherche.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(v => {
    let statusPill = '';
    if (v.status === 'ACTIVE_INSIDE') {
      statusPill = `<span class="status-pill-table inside">● Présent</span>`;
    } else if (v.status === 'COMPLETED') {
      statusPill = `<span class="status-pill-table completed">✓ Sorti</span>`;
    } else if (v.status === 'PENDING_APPROVAL') {
      statusPill = `<span class="status-pill-table pending">⏳ En attente DG</span>`;
    } else if (v.status === 'REJECTED') {
      statusPill = `<span class="status-pill-table rejected">✕ Refusé</span>`;
    }

    return `
      <tr>
        <td><strong style="font-family:var(--font-mono); color:var(--cyan);">${v.id}</strong></td>
        <td>
          <div style="display:flex; align-items:center; gap:8px;">
            <img src="${v.visitor.photo}" style="width:30px; height:36px; border-radius:4px; object-fit:cover;" alt="Photo">
            <div>
              <strong>${v.visitor.lastName}</strong> ${v.visitor.firstName}
              <div style="font-size:0.7rem; color:#94a3b8;">${v.visitor.phone}</div>
            </div>
          </div>
        </td>
        <td>
          <span style="font-size:0.74rem; background:rgba(255,255,255,0.05); padding:2px 6px; border-radius:4px;">${v.visitor.docType}</span>
          <div style="font-family:var(--font-mono); font-size:0.72rem; color:#67e8f9;">${v.visitor.docNumber}</div>
        </td>
        <td>${v.visitor.company}</td>
        <td>
          <strong>${v.host.name}</strong>
          <div style="font-size:0.7rem; color:#94a3b8;">${v.purpose}</div>
        </td>
        <td><strong>${v.checkIn}</strong></td>
        <td>${v.checkOut || '<span style="color:#64748b;">—</span>'}</td>
        <td><small>${v.duration}</small></td>
        <td>${statusPill}</td>
        <td>
          <button class="btn-secondary" style="padding:4px 8px; font-size:0.72rem;" onclick="openBadgeModalFromId('${v.id}')">Badge 🔲</button>
        </td>
      </tr>
    `;
  }).join('');
}

function openBadgeModalFromId(visitId) {
  const visit = AppState.visits.find(v => v.id === visitId);
  if (visit) openBadgeModal(visit);
}

function filterRegisterTable() {
  const searchInput = document.getElementById('register-search');
  const query = searchInput ? searchInput.value : '';
  const activePill = document.querySelector('.filter-pill.active');
  const filterType = activePill ? activePill.textContent.trim() : 'ALL';

  let type = 'ALL';
  if (filterType.includes('Présents')) type = 'ACTIVE';
  else if (filterType.includes('Sortis')) type = 'COMPLETED';
  else if (filterType.includes('Refusés')) type = 'REJECTED';

  renderMasterRegister(type, query);
}

function setRegisterFilter(type, button) {
  document.querySelectorAll('.filter-pill').forEach(btn => btn.classList.remove('active'));
  if (button) button.classList.add('active');

  const searchInput = document.getElementById('register-search');
  const query = searchInput ? searchInput.value : '';
  renderMasterRegister(type, query);
}

// EXPORT DU REGISTRE AU FORMAT CSV OFFICIEL
function exportRegisterToCSV() {
  let csv = "Code;Nom;Prenoms;TypePiece;NumeroPiece;Nationalite;Telephone;Entreprise;Hote;Motif;Entree;Sortie;Statut\n";

  AppState.visits.forEach(v => {
    csv += `"${v.id}";"${v.visitor.lastName}";"${v.visitor.firstName}";"${v.visitor.docType}";"${v.visitor.docNumber}";"${v.visitor.nationality}";"${v.visitor.phone}";"${v.visitor.company}";"${v.host.name}";"${v.purpose}";"${v.checkIn}";"${v.checkOut || ''}";"${v.status}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Registre_Visiteurs_VISIOREG_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  showToast('📥 Fichier CSV généré et téléchargé avec succès !', 'success');
}

// ===================================================================
// PROTOCOLE D'ÉVACUATION INCENDIE (SÉCURITÉ HSE)
// ===================================================================
function triggerEvacuationModal() {
  const modal = document.getElementById('evacuation-modal');
  const tbody = document.getElementById('evacuation-tbody');
  const timeSpan = document.getElementById('evac-timestamp');

  const now = new Date();
  if (timeSpan) {
    timeSpan.textContent = now.toLocaleDateString('fr-FR') + ' à ' + now.toLocaleTimeString('fr-FR');
  }

  const insideVisitors = AppState.visits.filter(v => v.status === 'ACTIVE_INSIDE');

  if (tbody) {
    if (insideVisitors.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:20px; color:#10b981;">Aucune personne extérieure n'est actuellement signalée dans le bâtiment.</td></tr>`;
    } else {
      tbody.innerHTML = insideVisitors.map(v => `
        <tr>
          <td><strong>M. ${v.visitor.lastName} ${v.visitor.firstName}</strong></td>
          <td><strong style="color:#ef4444;">${v.visitor.phone}</strong></td>
          <td>${v.visitor.company}</td>
          <td>${v.host.name}</td>
          <td>${v.checkIn}</td>
          <td>${v.visitor.docNumber}</td>
        </tr>
      `).join('');
    }
  }

  if (modal) modal.classList.remove('hidden');
  playBeepSound(600, 300);
}

function closeEvacuationModal() {
  const modal = document.getElementById('evacuation-modal');
  if (modal) modal.classList.add('hidden');
}

// ===================================================================
// TABLEAU DES DEMANDES EN ATTENTE
// ===================================================================
function updatePendingTable() {
  const tbody = document.getElementById('pending-visits-tbody');
  if (!tbody) return;

  const pending = AppState.visits.filter(v => v.status === 'PENDING_APPROVAL');

  if (pending.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:24px; color:#64748b;">Aucune demande d'accès en attente d'approbation.</td></tr>`;
    return;
  }

  tbody.innerHTML = pending.map(v => `
    <tr>
      <td><strong>${v.checkIn}</strong></td>
      <td>
        <div style="display:flex; align-items:center; gap:8px;">
          <img src="${v.visitor.photo}" style="width:28px; height:34px; border-radius:4px; object-fit:cover;" alt="">
          <strong>${v.visitor.lastName} ${v.visitor.firstName}</strong>
        </div>
      </td>
      <td>${v.visitor.docType} (${v.visitor.docNumber})</td>
      <td><strong>${v.host.name}</strong></td>
      <td>${v.purpose}</td>
      <td><span class="status-pill-table pending">En attente DG</span></td>
      <td>
        <button class="btn-primary" style="padding:4px 10px; font-size:0.75rem;" onclick="respondToVisit('APPROVED')">Autoriser Directement</button>
      </td>
    </tr>
  `).join('');
}

// ===================================================================
// MISE À JOUR DES COMPTEURS & KPIS GLOBAUX
// ===================================================================
function updateCounters() {
  const inside = AppState.visits.filter(v => v.status === 'ACTIVE_INSIDE').length;
  const pending = AppState.visits.filter(v => v.status === 'PENDING_APPROVAL').length;
  const total = AppState.visits.length;

  const activeVisitorsNav = document.getElementById('active-visitors-count');
  if (activeVisitorsNav) activeVisitorsNav.textContent = `${inside} présents`;

  const kpiInside = document.getElementById('kpi-inside-count');
  if (kpiInside) kpiInside.textContent = inside;

  const kpiToday = document.getElementById('kpi-today-count');
  if (kpiToday) kpiToday.textContent = total + 14; // Base journalière

  const pendingBadge = document.getElementById('pending-badge-count');
  if (pendingBadge) {
    pendingBadge.textContent = pending;
    pendingBadge.style.display = pending > 0 ? 'inline-block' : 'none';
  }
}

function selectProposalPlan(planKey) {
  showToast(`Vous avez sélectionné la ${planKey === 'PRO' ? 'Version Professionnelle ⭐' : planKey === 'STANDARD' ? 'Version Standard' : 'Version Entreprise'}. Un bon de commande a été préparé pour signature.`, 'success');
}

// ===================================================================
// CHARTS & GRAPHIQUES ANALYTIQUES (CANVAS PUR SANS DÉPENDANCE LOURDE)
// ===================================================================
function initCharts() {
  drawHourlyChart();
  drawDepartmentChart();
}

function drawHourlyChart() {
  const canvas = document.getElementById('chart-hourly');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.parentElement.clientWidth;
  const h = canvas.height = 200;

  ctx.clearRect(0, 0, w, h);

  const hours = ['08h', '09h', '10h', '11h', '12h', '13h', '14h', '15h', '16h', '17h'];
  const data = [4, 12, 19, 14, 6, 8, 22, 16, 9, 3];
  const maxVal = 25;

  const padLeft = 40;
  const padBottom = 30;
  const chartW = w - padLeft - 20;
  const chartH = h - padBottom - 20;

  // Grille horizontale
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 1;
  for (let i = 0; i <= 4; i++) {
    const y = 20 + (chartH / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padLeft, y);
    ctx.lineTo(w - 20, y);
    ctx.stroke();

    ctx.fillStyle = '#64748b';
    ctx.font = '10px "Plus Jakarta Sans"';
    ctx.fillText(Math.round(maxVal - (maxVal / 4) * i), 10, y + 4);
  }

  // Tracer la courbe
  const stepX = chartW / (hours.length - 1);
  const points = data.map((val, idx) => ({
    x: padLeft + idx * stepX,
    y: 20 + chartH - (val / maxVal) * chartH
  }));

  // Gradient de remplissage sous la courbe
  const grad = ctx.createLinearGradient(0, 20, 0, h - padBottom);
  grad.addColorStop(0, 'rgba(6, 182, 212, 0.35)');
  grad.addColorStop(1, 'rgba(6, 182, 212, 0.0)');

  ctx.beginPath();
  ctx.moveTo(points[0].x, h - padBottom);
  points.forEach(p => ctx.lineTo(p.x, p.y));
  ctx.lineTo(points[points.length - 1].x, h - padBottom);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // Ligne principale cyan
  ctx.beginPath();
  points.forEach((p, idx) => {
    if (idx === 0) ctx.moveTo(p.x, p.y);
    else ctx.lineTo(p.x, p.y);
  });
  ctx.strokeStyle = '#06b6d4';
  ctx.lineWidth = 3;
  ctx.stroke();

  // Points et étiquettes X
  points.forEach((p, idx) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.strokeStyle = '#06b6d4';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#94a3b8';
    ctx.font = '10px "Plus Jakarta Sans"';
    ctx.fillText(hours[idx], p.x - 10, h - 10);
  });
}

function drawDepartmentChart() {
  const canvas = document.getElementById('chart-departments');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const w = canvas.width = canvas.parentElement.clientWidth;
  const h = canvas.height = 200;

  ctx.clearRect(0, 0, w, h);

  const depts = [
    { name: 'Direction Générale (DG)', val: 38, color: '#38bdf8' },
    { name: 'Ressources Humaines (DRH)', val: 24, color: '#10b981' },
    { name: 'Direction Financière (DAF)', val: 18, color: '#f59e0b' },
    { name: 'DSI / Systèmes d\'Info', val: 12, color: '#818cf8' },
    { name: 'Services Juridiques & Achats', val: 8, color: '#ec4899' }
  ];

  const barH = 20;
  const gap = 12;
  const startY = 15;
  const maxW = w - 180;

  depts.forEach((d, i) => {
    const y = startY + i * (barH + gap);

    // Libellé
    ctx.fillStyle = '#f1f5f9';
    ctx.font = '11px "Plus Jakarta Sans"';
    ctx.fillText(d.name, 10, y + 14);

    // Barre de fond
    const barX = 140;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.beginPath();
    ctx.roundRect(barX, y, maxW, barH, 4);
    ctx.fill();

    // Barre colorée proportionnelle
    const fillW = (d.val / 40) * maxW;
    ctx.fillStyle = d.color;
    ctx.beginPath();
    ctx.roundRect(barX, y, fillW, barH, 4);
    ctx.fill();

    // Pourcentage
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 10px "JetBrains Mono"';
    ctx.fillText(`${d.val}%`, barX + fillW + 8, y + 14);
  });
}

// ===================================================================
// UTILITAIRES : SONS SYNTHÉTIQUES & TOAST NOTIFICATION
// ===================================================================
function playBeepSound(freq = 800, duration = 120) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration / 1000);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration / 1000);
  } catch (e) {
    // Audio context may be restricted by browser policy before user interaction
  }
}

function showToast(message, type = 'info') {
  const toast = document.getElementById('app-toast');
  const msgEl = document.getElementById('toast-message');
  const iconEl = document.getElementById('toast-icon');

  if (!toast || !msgEl) return;

  msgEl.textContent = message;

  if (type === 'success') {
    iconEl.textContent = '✅';
    toast.style.borderColor = '#10b981';
  } else if (type === 'danger') {
    iconEl.textContent = '❌';
    toast.style.borderColor = '#ef4444';
  } else {
    iconEl.textContent = '⚡';
    toast.style.borderColor = 'var(--cyan)';
  }

  toast.classList.remove('hidden');

  setTimeout(() => {
    toast.classList.add('hidden');
  }, 4000);
}
