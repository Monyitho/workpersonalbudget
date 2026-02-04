
// ========== DIALOG HELPERS (senza async) ==========

function mostraDialogInput(titolo, placeholder, callback) {
  var modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(5px)';
  
  var dialog = document.createElement('div');
  dialog.style.cssText = 'background:var(--card);border-radius:20px;padding:30px;max-width:450px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.4);animation:slideIn 0.3s ease';
  
  dialog.innerHTML = '<h3 style="margin-bottom:20px;color:var(--text);font-size:1.3em;text-align:center">' + titolo + '</h3>' +
    '<input type="text" id="dialogInput" style="width:100%;padding:16px;border:2px solid var(--border);border-radius:12px;font-size:1.1em;margin-bottom:20px;background:var(--bg);color:var(--text);font-family:inherit" placeholder="' + placeholder + '">' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
    '<button id="btnAnn" style="padding:14px;border:2px solid var(--border);background:transparent;color:var(--text);border-radius:12px;font-weight:700;cursor:pointer;transition:all 0.3s">Annulla</button>' +
    '<button id="btnOk" style="padding:14px;border:none;background:linear-gradient(135deg,#a1a1aa,#71717a);color:#fff;border-radius:12px;font-weight:700;cursor:pointer;box-shadow:0 4px 15px rgba(102,126,234,0.4);transition:all 0.3s">Conferma</button>' +
    '</div>';
  
  modal.appendChild(dialog);
  document.body.appendChild(modal);
  
  var input = document.getElementById('dialogInput');
  input.focus();
  
  var btnOk = document.getElementById('btnOk');
  var btnAnn = document.getElementById('btnAnn');
  
  btnOk.onmouseover = function() { this.style.transform = 'scale(1.05)'; };
  btnOk.onmouseout = function() { this.style.transform = 'scale(1)'; };
  btnAnn.onmouseover = function() { this.style.background = 'var(--border)'; };
  btnAnn.onmouseout = function() { this.style.background = 'transparent'; };
  
  btnOk.onclick = function() {
    var val = input.value;
    document.body.removeChild(modal);
    callback(val);
  };
  
  btnAnn.onclick = function() {
    document.body.removeChild(modal);
    callback(null);
  };
  
  input.onkeypress = function(e) {
    if (e.key === 'Enter') {
      var val = input.value;
      document.body.removeChild(modal);
      callback(val);
    }
  };
}
// Helper per conferma eliminazione (rosso)
function mostraDialogConfermaElimina(messaggio, callback) {
  var modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.7);z-index:10001;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(5px)';
  
  var dialog = document.createElement('div');
  dialog.style.cssText = 'background:var(--card);border-radius:20px;padding:30px;max-width:400px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.4)';
  
  dialog.innerHTML = '<h3 style="margin-bottom:15px;color:var(--danger);font-size:1.4em;text-align:center">⚠️ Conferma Eliminazione</h3>' +
    '<p style="margin-bottom:25px;color:var(--text);text-align:center;line-height:1.6">' + messaggio + '</p>' +
    '<p style="margin-bottom:25px;color:#7f8c8d;text-align:center;font-size:0.9em">Questa azione non può essere annullata</p>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
    '<button id="btnAnnElim" style="padding:14px;border:2px solid var(--border);background:var(--bg);color:var(--text);border-radius:12px;font-weight:700;cursor:pointer;transition:all 0.3s">✖️ Annulla</button>' +
    '<button id="btnConfElim" style="padding:14px;border:none;background:linear-gradient(135deg,#e74c3c,#c0392b);color:#fff;border-radius:12px;font-weight:700;cursor:pointer;box-shadow:0 4px 15px rgba(231,76,60,0.4);transition:all 0.3s">🗑️ Elimina</button>' +
    '</div>';
  
  modal.appendChild(dialog);
  document.body.appendChild(modal);
  
  var btnConf = document.getElementById('btnConfElim');
  var btnAnn = document.getElementById('btnAnnElim');
  
  btnConf.onmouseover = function() { this.style.transform = 'scale(1.05)'; this.style.boxShadow = '0 6px 20px rgba(231,76,60,0.6)'; };
  btnConf.onmouseout = function() { this.style.transform = 'scale(1)'; this.style.boxShadow = '0 4px 15px rgba(231,76,60,0.4)'; };
  btnAnn.onmouseover = function() { this.style.background = 'var(--border)'; };
  btnAnn.onmouseout = function() { this.style.background = 'var(--bg)'; };
  
  btnConf.onclick = function() {
    document.body.removeChild(modal);
    callback(true);
  };
  
  btnAnn.onclick = function() {
    document.body.removeChild(modal);
    callback(false);
  };
}

// Helper per conferma generica (blu)
function mostraDialogConferma(messaggio, callback) {
  var modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(5px)';
  
  var dialog = document.createElement('div');
  dialog.style.cssText = 'background:var(--card);border-radius:20px;padding:30px;max-width:400px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.4)';
  
  dialog.innerHTML = '<h3 style="margin-bottom:20px;color:var(--text);font-size:1.3em;text-align:center">❓ Conferma</h3>' +
    '<p style="margin-bottom:25px;color:var(--text);text-align:center;line-height:1.6">' + messaggio + '</p>' +
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">' +
    '<button id="btnNo" style="padding:14px;border:2px solid var(--border);background:transparent;color:var(--text);border-radius:12px;font-weight:700;cursor:pointer;transition:all 0.3s">No</button>' +
    '<button id="btnYes" style="padding:14px;border:none;background:linear-gradient(135deg,#a1a1aa,#71717a);color:#fff;border-radius:12px;font-weight:700;cursor:pointer;box-shadow:0 4px 15px rgba(102,126,234,0.4);transition:all 0.3s">Sì</button>' +
    '</div>';
  
  modal.appendChild(dialog);
  document.body.appendChild(modal);
  
  var btnYes = document.getElementById('btnYes');
  var btnNo = document.getElementById('btnNo');
  
  btnYes.onmouseover = function() { this.style.transform = 'scale(1.05)'; };
  btnYes.onmouseout = function() { this.style.transform = 'scale(1)'; };
  btnNo.onmouseover = function() { this.style.background = 'var(--border)'; };
  btnNo.onmouseout = function() { this.style.background = 'transparent'; };
  
  btnYes.onclick = function() {
    document.body.removeChild(modal);
    callback(true);
  };
  
  btnNo.onclick = function() {
    document.body.removeChild(modal);
    callback(false);
  };
}



// PASSWORD - FUNZIONA PERFETTAMENTE
var PASSWORD = 'Ciasteczkka24?';
var attempts = 0;
var maxAttempts = 3;

// Verifica se già loggato o password ricordata
if (sessionStorage.getItem('budgetAuth') === 'true' || localStorage.getItem('deviceKey') === 'authorized') {
  document.getElementById('loginScreen').style.display = 'none';
  sessionStorage.setItem('budgetAuth', 'true');
}

function handleLogin(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  
  var input = document.getElementById('loginPassword');
  var errorDiv = document.getElementById('loginError');
  var errorMsg = document.getElementById('errorMsg');
  var pwd = input.value;
  
  // Validazione base
  if (!pwd || pwd.trim() === '') {
    errorMsg.textContent = 'Inserisci la password';
    errorDiv.style.display = 'block';
    return false;
  }
  
  if (pwd === PASSWORD) {
    // Password corretta!
    sessionStorage.setItem('budgetAuth', 'true');
    
    // Salva password se richiesto
    var rememberCheckbox = document.getElementById('rememberDevice');
    if (rememberCheckbox && rememberCheckbox.checked) {
      localStorage.setItem('deviceKey', 'authorized');
    }
    
    // Animazione di successo
    document.getElementById('loginScreen').style.animation = 'fadeOut 0.5s ease-out';
    
    setTimeout(function() {
      document.getElementById('loginScreen').style.display = 'none';
    }, 500);
    
  } else {
    attempts++;
    
    if (attempts >= maxAttempts) {
      errorMsg.textContent = 'Troppi tentativi! Ricarica la pagina.';
      input.disabled = true;
      var submitBtn = document.querySelector('button[type="button"]');
      if (submitBtn) submitBtn.disabled = true;
    } else {
      errorMsg.textContent = 'Password errata! Tentativo ' + attempts + ' di ' + maxAttempts;
    }
    
    errorDiv.style.display = 'block';
    input.value = '';
    input.focus();
    
    input.style.animation = 'shake 0.5s';
    setTimeout(function() {
      input.style.animation = '';
    }, 500);
    
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
  }
  
  return false;
}

// ========== MAIN APPLICATION ==========

var DB = {
  // ========== CONFIG UNIVERSAL ==========
  config: {
    setupCompleted: false,       // Setup wizard completato?
    mode: null,                   // 'solo' o 'couple'
    userName: '',                 // Nome utente (es. "Michal")
    partnerName: '',              // Nome partner (es. "Matilde")
    ticketRestaurant: {           // Chi ha i buoni pasto
      user: false,                // L'utente ha i buoni?
      partner: false              // Il partner ha i buoni?
    }
  },
  
  categorie: {
    income: ['Stipendio', 'Buoni Pasto', 'Altro'],
    expense: [
      'Affitto',
      'Altro',
      'Amazon',
      'Apple',
      'Autostrada',
      'Benzina',
      'Bombola',
      'Cofidis',
      'Farmacia',
      'Findomestic',
      'Fastweb Internet',
      'Shopping',
      'Assicurazioni Auto',
      'Luce',
      'Palestra',
      'Parrucchiere',
      'PayPal',
      'Prelievo',
      'Prozis',
      'Regali',
      'Spesa Supermercato',
      'Spesa Casa',
      'Spesa Altro',
      'Telefono',
      'Trasporti',
      'Uscite Locali',
      'Uscite Ristoranti',
      'Uscite Altro'
    ]
  },
  categorieClassificazione: {
    // Necessità (65%)
    'Affitto': 'necessita',
    'Luce': 'necessita',
    'Fastweb Internet': 'necessita',
    'Telefono': 'necessita',
    'Spesa Supermercato': 'necessita',
    'Spesa Casa': 'necessita',
    'Spesa Altro': 'necessita',
    'Benzina': 'necessita',
    'Autostrada': 'necessita',
    'Trasporti': 'necessita',
    'Assicurazioni Auto': 'necessita',
    'Bombola': 'necessita',
    'Cofidis': 'necessita',
    'Findomestic': 'necessita',
    'Farmacia': 'necessita',
    
    // Desideri (20%)
    'Amazon': 'desideri',
    'Apple': 'desideri',
    'Shopping': 'desideri',
    'Palestra': 'desideri',
    'Parrucchiere': 'desideri',
    'PayPal': 'desideri',
    'Prozis': 'desideri',
    'Regali': 'desideri',
    'Uscite Locali': 'desideri',
    'Uscite Ristoranti': 'desideri',
    'Uscite Altro': 'desideri',
    'Prelievo': 'desideri',
    'Altro': 'desideri'
  },
  transazioni: [],
  theme: 'auto',
  dataInizioTracking: null,
  speseCondivise: [], // Array per tracciare spese condivise
  budgetGoals: {}, // Obiettivi personalizzati: { categoria: budgetMensile }
  longTermGoals: [], // Obiettivi long-term multi-mese
  obiettivi: [], // Obiettivi investimento con progress tracking

  // NUOVO - Pagamenti Ricorrenti (abbonamenti, bollette, prestiti)
  ricorrenti: [
    // Struttura esempio:
    // { id: Date.now(), nome: 'Netflix', tipo: 'abbonamento', importo: 15.99,
    //   giorno: 15, categoria: 'Uscite Altro', metodo: 'webank', attivo: true,
    //   icona: '🎬', colore: '#e50914', note: '' }
  ],

  // NUOVO - Multi-account system
  conti: {
    webank: 0,
    revolut: 0,
    paypal: 0,
    buoni_pasto: {
      saldo: 0,              // numero buoni disponibili
      valoreUnitario: 10.50  // valore di ogni buono
    },
    contanti: 0
  },
  
  // NUOVO - Impostazioni buoni pasto
  impostazioniBuoni: {
    valoreUnitario: 10.50,
    quantitaMensile: 12,
    giornoAccredito: 1
  },
  
  // NUOVO - Sistema conti dinamico
  contiPersonalizzati: [
    { id: 'webank', nome: 'WeBank', icona: '💳', principale: true },
    { id: 'revolut', nome: 'Revolut', icona: '🌐', principale: false },
    { id: 'paypal', nome: 'PayPal', icona: '💰', principale: false },
    { id: 'contanti', nome: 'Contanti', icona: '💵', principale: false }
  ]
};

var anno = new Date().getFullYear();
var mese = new Date().getMonth();
var lineChart, monthlyExpenseChart, balanceChart, compareChart;
var finanzeLineChart, savingsTrendChart; // Grafici per sezione finanze
var currentSection = 'dash';
var sections = ['dash', 'trans', 'finanze', 'obiettivi', 'calendario', 'cats', 'settings'];
var calendarYear = new Date().getFullYear();
var calendarMonth = new Date().getMonth();
var soundsEnabled = localStorage.getItem('soundsEnabled') === 'true';
var biometricEnabled = localStorage.getItem('biometricEnabled') === 'true';
var isAuthenticated = false;
var pinValue = '';
var mostraTutteTransazioni = false; // Mostra tutte o solo mensili
var ordinamentoTransazioni = 'recenti'; // recenti, vecchie, a-z, z-a, importo-alto, importo-basso
var annoTabelle = new Date().getFullYear(); // Anno per le tabelle riepilogo

// ========== WIZARD SETUP UNIVERSAL ==========
function mostraWizardSetup() {
  var wizard = document.createElement('div');
  wizard.id = 'setupWizard';
  wizard.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,#0a0e27 0%,#16213e 100%);z-index:10000;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;padding:20px;overflow-y:auto';

  wizard.innerHTML = `
    <div style="text-align:center;max-width:500px;width:100%;background:rgba(255,255,255,0.05);backdrop-filter:blur(10px);border:3px solid rgba(78,236,163,0.3);border-radius:24px;padding:40px 30px;box-shadow:0 20px 60px rgba(0,0,0,0.6);max-height:90vh;overflow-y:auto">
      <div style="font-size:4em;margin-bottom:20px;filter:drop-shadow(0 0 15px rgba(78,236,163,0.5))">🧙‍♂️</div>
      <h2 style="font-size:2em;margin-bottom:10px;font-weight:900;color:#4ecca3;text-shadow:0 0 15px rgba(78,236,163,0.3)">Benvenuto!</h2>
      <p style="font-size:1em;color:#d1d4dc;margin-bottom:35px">Configura Budget Manager</p>

      <div id="wizardSteps">
        <!-- Step 1: Modalità -->
        <div id="step1" class="wizard-step">
          <div style="font-size:1.2em;font-weight:800;color:#e5e4e2;margin-bottom:20px;text-align:left">1️⃣ Come userai l'app?</div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:25px">
            <div class="mode-btn" data-mode="solo" style="padding:20px;background:rgba(255,255,255,0.05);border:3px solid rgba(78,236,163,0.3);border-radius:15px;cursor:pointer;transition:all 0.3s;text-align:center" onclick="selezionaModalita('solo', this)">
              <div style="font-size:3em;margin-bottom:10px">👤</div>
              <div style="font-weight:800;color:#e5e4e2;margin-bottom:5px">Solo</div>
              <div style="font-size:0.85em;color:#999">Finanze personali</div>
            </div>
            <div class="mode-btn" data-mode="couple" style="padding:20px;background:rgba(255,255,255,0.05);border:3px solid rgba(78,236,163,0.3);border-radius:15px;cursor:pointer;transition:all 0.3s;text-align:center" onclick="selezionaModalita('couple', this)">
              <div style="font-size:3em;margin-bottom:10px">👥</div>
              <div style="font-weight:800;color:#e5e4e2;margin-bottom:5px">Coppia</div>
              <div style="font-size:0.85em;color:#999">Spese condivise</div>
            </div>
          </div>
          <button id="nextToStep2" disabled style="width:100%;padding:15px;background:rgba(78,236,163,0.3);border:none;border-radius:12px;color:#fff;font-weight:800;font-size:1.1em;cursor:not-allowed" onclick="vaiAStep2()">Continua →</button>
        </div>

        <!-- Step 2: Nomi -->
        <div id="step2" class="wizard-step" style="display:none">
          <div style="font-size:1.2em;font-weight:800;color:#e5e4e2;margin-bottom:20px;text-align:left">2️⃣ Imposta i tuoi dettagli</div>

          <div style="margin-bottom:20px;text-align:left">
            <label style="font-size:0.9em;font-weight:700;color:#999;margin-bottom:8px;display:block">Il tuo nome</label>
            <input type="text" id="userNameInput" placeholder="Es. Michal" style="width:100%;padding:14px;background:rgba(255,255,255,0.05);border:2px solid rgba(78,236,163,0.3);border-radius:12px;color:#fff;font-size:1em;font-family:'Red Hat Display',sans-serif;font-weight:600">
          </div>

          <div id="partnerNameGroup" style="margin-bottom:20px;text-align:left;display:none">
            <label style="font-size:0.9em;font-weight:700;color:#999;margin-bottom:8px;display:block">Nome partner</label>
            <input type="text" id="partnerNameInput" placeholder="Es. Matilde" style="width:100%;padding:14px;background:rgba(255,255,255,0.05);border:2px solid rgba(78,236,163,0.3);border-radius:12px;color:#fff;font-size:1em;font-family:'Red Hat Display',sans-serif;font-weight:600">
          </div>

          <button style="width:100%;padding:15px;background:rgba(128,128,128,0.3);border:none;border-radius:12px;color:#fff;font-weight:800;font-size:1.1em;margin-bottom:10px" onclick="tornAStep1()">← Indietro</button>
          <button id="nextToStep3" style="width:100%;padding:15px;background:linear-gradient(135deg,#4ecca3,#3cb371);border:none;border-radius:12px;color:#fff;font-weight:800;font-size:1.1em;cursor:pointer" onclick="vaiAStep2b()">Continua →</button>
        </div>

        <!-- Step 2b: Debito Iniziale (solo coppia) -->
        <div id="step2b" class="wizard-step" style="display:none">
          <div style="font-size:1.2em;font-weight:800;color:#e5e4e2;margin-bottom:15px;text-align:center">💰 Debito Iniziale</div>
          <div style="font-size:0.85em;color:#999;margin-bottom:20px;text-align:center;line-height:1.5">C'è un debito pregresso tra voi?<br>Imposta chi deve a chi e quanto</div>

          <div style="background:rgba(231,76,60,0.1);border:2px solid rgba(231,76,60,0.3);border-radius:14px;padding:20px;margin-bottom:20px">
            <div style="display:flex;flex-direction:column;gap:15px">
              <!-- Chi deve -->
              <div style="text-align:center">
                <label style="font-size:0.85em;font-weight:700;color:#e74c3c;margin-bottom:8px;display:block;text-align:center">Chi deve saldare?</label>
                <select id="wizardDebitore" style="width:100%;max-width:280px;margin:0 auto;display:block;padding:12px;background:rgba(0,0,0,0.4);border:2px solid rgba(231,76,60,0.4);border-radius:10px;color:#fff;font-size:1em;font-family:inherit;text-align:center;text-align-last:center">
                  <option value="">Nessun debito</option>
                  <option value="user" id="wizardDebitoreUser">Tu</option>
                  <option value="partner" id="wizardDebitorePartner">Partner</option>
                </select>
              </div>

              <!-- Importo debito -->
              <div id="wizardDebitoImportoGroup" style="display:none;text-align:center">
                <label style="font-size:0.85em;font-weight:700;color:#e74c3c;margin-bottom:8px;display:block;text-align:center">Importo da saldare</label>
                <div style="display:flex;align-items:center;justify-content:center;gap:10px;max-width:200px;margin:0 auto">
                  <span style="font-size:1.3em;color:#e74c3c;font-weight:800">€</span>
                  <input type="number" id="wizardDebitoImporto" value="0" min="0" step="0.01" style="flex:1;padding:12px;background:rgba(0,0,0,0.4);border:2px solid rgba(231,76,60,0.4);border-radius:10px;color:#fff;font-size:1.2em;font-weight:700;font-family:inherit;text-align:center">
                </div>
              </div>
            </div>
          </div>

          <div style="font-size:0.8em;color:#888;margin-bottom:20px;text-align:center">💡 Potrai sempre modificarlo dalle Impostazioni → Condiviso</div>

          <button style="width:100%;padding:15px;background:rgba(128,128,128,0.3);border:none;border-radius:12px;color:#fff;font-weight:800;font-size:1.1em;margin-bottom:10px" onclick="tornAStep2()">← Indietro</button>
          <button style="width:100%;padding:15px;background:linear-gradient(135deg,#4ecca3,#3cb371);border:none;border-radius:12px;color:#fff;font-weight:800;font-size:1.1em;cursor:pointer" onclick="vaiAStep3()">Continua →</button>
        </div>

        <!-- Step 3: Buoni Pasto -->
        <div id="step3" class="wizard-step" style="display:none">
          <div style="font-size:1.2em;font-weight:800;color:#e5e4e2;margin-bottom:20px;text-align:left">🎟️ Buoni Pasto</div>
          <div style="font-size:0.9em;color:#999;margin-bottom:20px;text-align:left;line-height:1.6">Chi riceve i buoni pasto?</div>

          <div id="ticketOptions" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px">
            <!-- Riempito dinamicamente -->
          </div>

          <!-- Sezione quantità buoni -->
          <div id="wizardBuoniQuantita" style="display:none;background:rgba(255,152,0,0.1);border:2px solid rgba(255,152,0,0.3);border-radius:14px;padding:18px;margin-bottom:25px">
            <div style="font-size:0.95em;font-weight:700;color:#ff9800;margin-bottom:12px;text-align:center">Quanti buoni hai attualmente?</div>
            <div style="display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:15px">
              <span style="font-size:1.2em;color:#ff9800">N°</span>
              <input type="number" id="wizardNumBuoni" value="0" min="0" style="width:100px;padding:12px 16px;background:rgba(0,0,0,0.4);border:2px solid rgba(255,152,0,0.4);border-radius:10px;color:#fff;font-size:1.3em;font-weight:800;text-align:center;font-family:inherit">
              <span style="font-size:0.9em;color:#999">buoni</span>
            </div>
            <div style="font-size:0.95em;font-weight:700;color:#ff9800;margin-bottom:12px;text-align:center">Quanto vale ogni buono?</div>
            <div style="display:flex;align-items:center;justify-content:center;gap:12px">
              <span style="font-size:1.2em;color:#ff9800">€</span>
              <input type="number" id="wizardValoreBuono" value="10.50" min="0" step="0.01" style="width:100px;padding:12px 16px;background:rgba(0,0,0,0.4);border:2px solid rgba(255,152,0,0.4);border-radius:10px;color:#fff;font-size:1.3em;font-weight:800;text-align:center;font-family:inherit">
              <span style="font-size:0.9em;color:#999">cad.</span>
            </div>
          </div>

          <button style="width:100%;padding:15px;background:rgba(128,128,128,0.3);border:none;border-radius:12px;color:#fff;font-weight:800;font-size:1.1em;margin-bottom:10px" onclick="tornAStep2b()">← Indietro</button>
          <button style="width:100%;padding:15px;background:linear-gradient(135deg,#4ecca3,#3cb371);border:none;border-radius:12px;color:#fff;font-weight:800;font-size:1.1em;cursor:pointer" onclick="vaiAStep4()">Continua →</button>
        </div>

        <!-- Step 4: Configurazione Conti (redesigned) -->
        <div id="step4" class="wizard-step" style="display:none">
          <div style="font-size:1.2em;font-weight:800;color:#e5e4e2;margin-bottom:15px;text-align:left">💳 I tuoi Conti</div>
          <div style="font-size:0.85em;color:#999;margin-bottom:20px;text-align:left;line-height:1.5">Aggiungi i conti che utilizzi</div>

          <!-- Lista conti aggiunti -->
          <div id="wizardContiAggiunti" style="margin-bottom:20px">
            <!-- Popolato dinamicamente -->
          </div>

          <!-- Form per aggiungere nuovo conto -->
          <div id="wizardFormNuovoConto" style="background:rgba(78,236,163,0.08);border:2px solid rgba(78,236,163,0.3);border-radius:14px;padding:18px;margin-bottom:20px">
            <div style="font-size:0.95em;font-weight:700;color:#4ecca3;margin-bottom:15px;text-align:center">➕ Aggiungi Conto</div>

            <div style="display:flex;flex-direction:column;gap:12px">
              <!-- Tipo conto -->
              <div>
                <label style="font-size:0.8em;color:#999;margin-bottom:6px;display:block">Tipo di conto</label>
                <select id="wizardTipoConto" onchange="wizardCambiaIconaConto()" style="width:100%;padding:12px;background:rgba(0,0,0,0.4);border:2px solid rgba(78,236,163,0.3);border-radius:10px;color:#fff;font-size:1em;font-family:inherit">
                  <option value="custom">✏️ Personalizzato</option>
                  <option value="webank">💳 WeBank</option>
                  <option value="revolut">🌐 Revolut</option>
                  <option value="n26">🏦 N26</option>
                  <option value="hype">💎 Hype</option>
                  <option value="paypal">💰 PayPal</option>
                  <option value="satispay">🔴 Satispay</option>
                  <option value="contanti">💵 Contanti</option>
                  <option value="postepay">📮 PostePay</option>
                  <option value="intesa">🟢 Intesa</option>
                  <option value="unicredit">🔵 UniCredit</option>
                </select>
              </div>

              <!-- Nome personalizzato (solo se custom) -->
              <div id="wizardNomeContoGroup">
                <label style="font-size:0.8em;color:#999;margin-bottom:6px;display:block">Nome conto</label>
                <input type="text" id="wizardNomeConto" placeholder="Es. Conto Principale" style="width:100%;padding:12px;background:rgba(0,0,0,0.4);border:2px solid rgba(78,236,163,0.3);border-radius:10px;color:#fff;font-size:1em;font-family:inherit">
              </div>

              <!-- Icona (solo se custom) -->
              <div id="wizardIconaContoGroup">
                <label style="font-size:0.8em;color:#999;margin-bottom:6px;display:block">Icona</label>
                <select id="wizardIconaConto" style="width:100%;padding:12px;background:rgba(0,0,0,0.4);border:2px solid rgba(78,236,163,0.3);border-radius:10px;color:#fff;font-size:1em;font-family:inherit">
                  <option value="💳">💳 Carta</option>
                  <option value="🏦">🏦 Banca</option>
                  <option value="💰">💰 Soldi</option>
                  <option value="💵">💵 Contanti</option>
                  <option value="🌐">🌐 Online</option>
                  <option value="💎">💎 Premium</option>
                  <option value="🔴">🔴 Rosso</option>
                  <option value="🟢">🟢 Verde</option>
                  <option value="🔵">🔵 Blu</option>
                  <option value="📮">📮 Posta</option>
                </select>
              </div>

              <!-- Saldo iniziale -->
              <div>
                <label style="font-size:0.8em;color:#999;margin-bottom:6px;display:block">Saldo attuale</label>
                <div style="display:flex;align-items:center;gap:8px">
                  <span style="font-size:1.3em;color:#4ecca3;font-weight:800">€</span>
                  <input type="number" id="wizardSaldoConto" value="0" step="0.01" style="flex:1;padding:12px;background:rgba(0,0,0,0.4);border:2px solid rgba(78,236,163,0.3);border-radius:10px;color:#fff;font-size:1.1em;font-weight:700;font-family:inherit">
                </div>
              </div>

              <button onclick="wizardAggiungiConto()" style="width:100%;padding:14px;background:linear-gradient(135deg,#4ecca3,#3cb371);border:none;border-radius:10px;color:#fff;font-weight:800;font-size:1em;cursor:pointer;margin-top:5px">+ Aggiungi questo conto</button>
            </div>
          </div>

          <button style="width:100%;padding:15px;background:rgba(128,128,128,0.3);border:none;border-radius:12px;color:#fff;font-weight:800;font-size:1.1em;margin-bottom:10px" onclick="tornAStep3()">← Indietro</button>
          <button id="btnCompletaSetup" style="width:100%;padding:15px;background:linear-gradient(135deg,#4ecca3,#3cb371);border:none;border-radius:12px;color:#fff;font-weight:800;font-size:1.1em;cursor:pointer;box-shadow:0 4px 20px rgba(78,236,163,0.4)" onclick="completaSetup()">✓ Inizia ad usare l'app!</button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(wizard);

  // Event listener per mostrare/nascondere importo debito
  setTimeout(function() {
    var debitoreSelect = document.getElementById('wizardDebitore');
    if (debitoreSelect) {
      debitoreSelect.addEventListener('change', function() {
        var importoGroup = document.getElementById('wizardDebitoImportoGroup');
        if (this.value) {
          importoGroup.style.display = 'block';
        } else {
          importoGroup.style.display = 'none';
        }
      });
    }
  }, 100);
}

var wizardMode = null;
var wizardUserName = '';
var wizardPartnerName = '';
var wizardTicketUser = false;
var wizardTicketPartner = false;
var wizardContiAggiunti = []; // Lista conti aggiunti nel wizard
var wizardDebitoIniziale = { debitore: '', importo: 0 };

function selezionaModalita(mode, el) {
  wizardMode = mode;

  // Aggiorna UI
  var btns = document.querySelectorAll('.mode-btn');
  btns.forEach(function(btn) {
    btn.style.background = 'rgba(255,255,255,0.05)';
    btn.style.borderColor = 'rgba(78,236,163,0.3)';
  });

  el.style.background = 'rgba(78,236,163,0.1)';
  el.style.borderColor = '#4ecca3';

  // Abilita bottone continua
  var nextBtn = document.getElementById('nextToStep2');
  nextBtn.disabled = false;
  nextBtn.style.background = 'linear-gradient(135deg,#4ecca3,#3cb371)';
  nextBtn.style.cursor = 'pointer';
}

function vaiAStep2() {
  if (!wizardMode) return;

  document.getElementById('step1').style.display = 'none';
  document.getElementById('step2').style.display = 'block';

  // Mostra campo partner solo se modalità coppia
  if (wizardMode === 'couple') {
    document.getElementById('partnerNameGroup').style.display = 'block';
  } else {
    document.getElementById('partnerNameGroup').style.display = 'none';
  }
}

function tornAStep1() {
  document.getElementById('step2').style.display = 'none';
  document.getElementById('step1').style.display = 'block';
}

// Step 2 → Step 2b (debito) o Step 3 (buoni)
function vaiAStep2b() {
  var userName = document.getElementById('userNameInput').value.trim();

  if (!userName) {
    mostraToast('⚠️ Inserisci il tuo nome', 'warning');
    return;
  }

  wizardUserName = userName;

  if (wizardMode === 'couple') {
    var partnerName = document.getElementById('partnerNameInput').value.trim();
    if (!partnerName) {
      mostraToast('⚠️ Inserisci il nome del partner', 'warning');
      return;
    }
    wizardPartnerName = partnerName;

    // Aggiorna nomi nel select del debito
    var debitoreUser = document.getElementById('wizardDebitoreUser');
    var debitorePartner = document.getElementById('wizardDebitorePartner');
    if (debitoreUser) debitoreUser.textContent = wizardUserName;
    if (debitorePartner) debitorePartner.textContent = wizardPartnerName;

    // Mostra step debito
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step2b').style.display = 'block';
  } else {
    // Salta direttamente a step 3 se solo
    vaiAStep3();
  }
}

function tornAStep2() {
  document.getElementById('step2b').style.display = 'none';
  document.getElementById('step3').style.display = 'none';
  document.getElementById('step2').style.display = 'block';
}

function tornAStep2b() {
  document.getElementById('step3').style.display = 'none';
  if (wizardMode === 'couple') {
    document.getElementById('step2b').style.display = 'block';
  } else {
    document.getElementById('step2').style.display = 'block';
  }
}

function vaiAStep3() {
  // Salva debito se in coppia
  if (wizardMode === 'couple') {
    var debitoreSelect = document.getElementById('wizardDebitore');
    var importoInput = document.getElementById('wizardDebitoImporto');
    if (debitoreSelect && importoInput) {
      wizardDebitoIniziale.debitore = debitoreSelect.value;
      wizardDebitoIniziale.importo = parseFloat(importoInput.value) || 0;
    }
    document.getElementById('step2b').style.display = 'none';
  } else {
    document.getElementById('step2').style.display = 'none';
  }

  document.getElementById('step3').style.display = 'block';

  // Riempie opzioni buoni pasto
  var ticketOptions = document.getElementById('ticketOptions');
  ticketOptions.innerHTML = '';

  if (wizardMode === 'solo') {
    ticketOptions.innerHTML = `
      <div class="ticket-btn" data-ticket="user" style="padding:15px;background:rgba(255,255,255,0.05);border:2px solid rgba(243,156,18,0.3);border-radius:12px;cursor:pointer;text-align:center;grid-column:1/3" onclick="toggleTicket('user', this)">
        <div style="font-weight:800;color:#e5e4e2">🎫 Ho i Buoni</div>
      </div>
      <div class="ticket-btn" data-ticket="none" style="padding:15px;background:rgba(255,255,255,0.05);border:2px solid rgba(243,156,18,0.3);border-radius:12px;cursor:pointer;text-align:center;grid-column:1/3" onclick="toggleTicket('none', this)">
        <div style="font-weight:800;color:#e5e4e2">Non ho i Buoni</div>
      </div>
    `;
  } else {
    ticketOptions.innerHTML = `
      <div class="ticket-btn" data-ticket="user" style="padding:15px;background:rgba(255,255,255,0.05);border:2px solid rgba(243,156,18,0.3);border-radius:12px;cursor:pointer;text-align:center" onclick="toggleTicket('user', this)">
        <div style="font-weight:800;color:#e5e4e2;font-size:0.9em">${wizardUserName}</div>
      </div>
      <div class="ticket-btn" data-ticket="partner" style="padding:15px;background:rgba(255,255,255,0.05);border:2px solid rgba(243,156,18,0.3);border-radius:12px;cursor:pointer;text-align:center" onclick="toggleTicket('partner', this)">
        <div style="font-weight:800;color:#e5e4e2;font-size:0.9em">${wizardPartnerName}</div>
      </div>
      <div class="ticket-btn" data-ticket="both" style="padding:15px;background:rgba(255,255,255,0.05);border:2px solid rgba(243,156,18,0.3);border-radius:12px;cursor:pointer;text-align:center" onclick="toggleTicket('both', this)">
        <div style="font-weight:800;color:#e5e4e2;font-size:0.9em">Entrambi</div>
      </div>
      <div class="ticket-btn" data-ticket="none" style="padding:15px;background:rgba(255,255,255,0.05);border:2px solid rgba(243,156,18,0.3);border-radius:12px;cursor:pointer;text-align:center" onclick="toggleTicket('none', this)">
        <div style="font-size:0.9em;color:#e5e4e2">Nessuno</div>
      </div>
    `;
  }
}

function tornAStep2() {
  document.getElementById('step3').style.display = 'none';
  document.getElementById('step2').style.display = 'block';
}

function toggleTicket(type, el) {
  // Reset tutti
  var btns = document.querySelectorAll('.ticket-btn');
  btns.forEach(function(btn) {
    btn.style.background = 'rgba(255,255,255,0.05)';
    btn.style.borderColor = 'rgba(243,156,18,0.3)';
  });

  // Attiva quello selezionato
  el.style.background = 'rgba(243,156,18,0.15)';
  el.style.borderColor = '#f39c12';

  // Aggiorna variabili
  wizardTicketUser = (type === 'user' || type === 'both');
  wizardTicketPartner = (type === 'partner' || type === 'both');

  // Mostra/nascondi input quantità buoni
  var quantitaDiv = document.getElementById('wizardBuoniQuantita');
  if (quantitaDiv) {
    if (type === 'none') {
      quantitaDiv.style.display = 'none';
    } else {
      quantitaDiv.style.display = 'block';
    }
  }
}

// ========== STEP 4: CONTI (NUOVO DESIGN) ==========
var wizardContiPredefiniti = {
  webank: { nome: 'WeBank', icona: '💳' },
  revolut: { nome: 'Revolut', icona: '🌐' },
  n26: { nome: 'N26', icona: '🏦' },
  hype: { nome: 'Hype', icona: '💎' },
  paypal: { nome: 'PayPal', icona: '💰' },
  satispay: { nome: 'Satispay', icona: '🔴' },
  contanti: { nome: 'Contanti', icona: '💵' },
  postepay: { nome: 'PostePay', icona: '📮' },
  intesa: { nome: 'Intesa', icona: '🟢' },
  unicredit: { nome: 'UniCredit', icona: '🔵' }
};

function vaiAStep4() {
  document.getElementById('step3').style.display = 'none';
  document.getElementById('step4').style.display = 'block';
  aggiornaListaContiWizard();
  wizardCambiaIconaConto(); // Inizializza visibilità campi
}

function tornAStep3() {
  document.getElementById('step4').style.display = 'none';
  document.getElementById('step3').style.display = 'block';
}

function wizardCambiaIconaConto() {
  var tipoSelect = document.getElementById('wizardTipoConto');
  var nomeGroup = document.getElementById('wizardNomeContoGroup');
  var iconaGroup = document.getElementById('wizardIconaContoGroup');
  var nomeInput = document.getElementById('wizardNomeConto');

  if (!tipoSelect) return;

  var tipo = tipoSelect.value;
  if (tipo === 'custom') {
    nomeGroup.style.display = 'block';
    iconaGroup.style.display = 'block';
    nomeInput.value = '';
  } else {
    nomeGroup.style.display = 'none';
    iconaGroup.style.display = 'none';
    // Imposta nome dal predefinito
    if (wizardContiPredefiniti[tipo]) {
      nomeInput.value = wizardContiPredefiniti[tipo].nome;
    }
  }
}

function wizardAggiungiConto() {
  var tipoSelect = document.getElementById('wizardTipoConto');
  var nomeInput = document.getElementById('wizardNomeConto');
  var iconaSelect = document.getElementById('wizardIconaConto');
  var saldoInput = document.getElementById('wizardSaldoConto');

  var tipo = tipoSelect.value;
  var nome, icona;

  if (tipo === 'custom') {
    nome = nomeInput.value.trim();
    icona = iconaSelect.value;
    if (!nome) {
      mostraToast('⚠️ Inserisci il nome del conto', 'warning');
      return;
    }
  } else {
    nome = wizardContiPredefiniti[tipo].nome;
    icona = wizardContiPredefiniti[tipo].icona;
  }

  var saldo = parseFloat(saldoInput.value) || 0;

  // Genera ID unico
  var id = tipo === 'custom' ? 'custom_' + Date.now() : tipo;

  // Controlla se esiste già
  var esistente = wizardContiAggiunti.find(function(c) { return c.id === id; });
  if (esistente) {
    mostraToast('⚠️ Questo conto esiste già', 'warning');
    return;
  }

  // Aggiungi alla lista
  wizardContiAggiunti.push({
    id: id,
    nome: nome,
    icona: icona,
    saldo: saldo,
    custom: tipo === 'custom'
  });

  // Reset form
  tipoSelect.value = 'custom';
  nomeInput.value = '';
  saldoInput.value = '0';
  wizardCambiaIconaConto();

  // Aggiorna lista visuale
  aggiornaListaContiWizard();

  mostraToast('✅ ' + nome + ' aggiunto!', 'success');
}

function wizardRimuoviConto(index) {
  wizardContiAggiunti.splice(index, 1);
  aggiornaListaContiWizard();
}

function aggiornaListaContiWizard() {
  var container = document.getElementById('wizardContiAggiunti');
  if (!container) return;

  if (wizardContiAggiunti.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:20px;color:#888;font-size:0.9em">Nessun conto aggiunto ancora.<br>Usa il form sotto per aggiungere i tuoi conti.</div>';
    return;
  }

  var html = '';
  wizardContiAggiunti.forEach(function(conto, index) {
    html += '<div style="background:rgba(78,236,163,0.08);border:2px solid rgba(78,236,163,0.3);border-radius:12px;padding:14px;margin-bottom:10px;display:flex;align-items:center;justify-content:space-between">';
    html += '<div style="display:flex;align-items:center;gap:12px">';
    html += '<span style="font-size:1.5em">' + conto.icona + '</span>';
    html += '<div>';
    html += '<div style="font-weight:700;color:#e5e4e2">' + conto.nome + '</div>';
    html += '<div style="font-size:0.85em;color:#4ecca3;font-weight:700">€ ' + conto.saldo.toFixed(2) + '</div>';
    html += '</div>';
    html += '</div>';
    html += '<button onclick="wizardRimuoviConto(' + index + ')" style="background:rgba(231,76,60,0.2);border:none;color:#e74c3c;padding:8px 12px;border-radius:8px;cursor:pointer;font-size:1em">✕</button>';
    html += '</div>';
  });

  container.innerHTML = html;
}

function completaSetup() {
  // Salva configurazione
  DB.config = {
    setupCompleted: true,
    mode: wizardMode,
    userName: wizardUserName,
    partnerName: wizardPartnerName,
    ticketRestaurant: {
      user: wizardTicketUser,
      partner: wizardTicketPartner
    }
  };

  // Salva debito iniziale se in coppia (UNIFICATO in DB.splitwise.saldoIniziale)
  if (wizardMode === 'couple' && wizardDebitoIniziale.debitore && wizardDebitoIniziale.importo > 0) {
    if (!DB.splitwise) DB.splitwise = { saldo: 0 };
    // Se user deve, il saldo è negativo (tu devi al partner)
    // Se partner deve, il saldo è positivo (partner deve a te)
    if (wizardDebitoIniziale.debitore === 'user') {
      // Tu devi saldare al partner = saldo negativo
      DB.splitwise.saldoIniziale = -wizardDebitoIniziale.importo;
    } else {
      // Partner deve saldare a te = saldo positivo
      DB.splitwise.saldoIniziale = wizardDebitoIniziale.importo;
    }
  }

  // Salva conti dal wizard (nuovo sistema)
  if (wizardContiAggiunti.length > 0) {
    if (!DB.contiPersonalizzati) DB.contiPersonalizzati = [];
    if (!DB.saldiIniziali) DB.saldiIniziali = {};

    // Pulisci vecchi conti e usa quelli del wizard
    DB.contiPersonalizzati = [];

    wizardContiAggiunti.forEach(function(conto, index) {
      DB.contiPersonalizzati.push({
        id: conto.id,
        nome: conto.nome,
        icona: conto.icona,
        principale: index === 0 // Il primo è principale
      });

      DB.saldiIniziali[conto.id] = conto.saldo;
    });
  }

  // Salva quantità iniziale buoni pasto se qualcuno ha i buoni
  if (wizardTicketUser || wizardTicketPartner) {
    var numBuoniInput = document.getElementById('wizardNumBuoni');
    var numBuoni = numBuoniInput ? (parseInt(numBuoniInput.value) || 0) : 0;
    var valoreBuonoInput = document.getElementById('wizardValoreBuono');
    var valoreBuono = valoreBuonoInput ? (parseFloat(valoreBuonoInput.value) || 10.50) : 10.50;

    if (!DB.saldiIniziali) DB.saldiIniziali = {};
    DB.saldiIniziali.buoni_pasto = numBuoni;

    if (!DB.conti) DB.conti = {};
    if (!DB.conti.buoni_pasto) {
      DB.conti.buoni_pasto = { saldo: numBuoni, valoreUnitario: valoreBuono };
    } else {
      DB.conti.buoni_pasto.saldo = numBuoni;
      DB.conti.buoni_pasto.valoreUnitario = valoreBuono;
    }
  }

  salvaDB();

  // Se modalità solo + nessun buono → rimuovi buoni dal DB
  if (wizardMode === 'solo' && !wizardTicketUser) {
    if (DB.conti) DB.conti.buoni_pasto = null;
    if (DB.saldiIniziali) DB.saldiIniziali.buoni_pasto = 0;
    salvaDB();
  }

  // Nascondi card impostazioni buoni se nessuno ha buoni
  aggiornaVisibilitaBuoniSettings();

  // Rimuovi wizard
  var wizard = document.getElementById('setupWizard');
  if (wizard) {
    wizard.remove();
  }

  mostraToast('✅ Setup completato! Benvenuto in Budget Manager', 'success');

  // Aggiorna UI
  aggiorna();
  aggiornaVisibilitaCampiModalita();
  if (typeof aggiornaListaConti === 'function') aggiornaListaConti();

  // Scroll in cima dopo completamento wizard
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== AGGIORNA TESTI DINAMICI ==========
function aggiornaVisibilitaBuoniSettings() {
  if (!DB.config || !DB.config.setupCompleted) return;
  
  var card = document.getElementById('impostazioniBuoniCard');
  if (!card) return;
  
  var hasTicketsUser = DB.config.ticketRestaurant && DB.config.ticketRestaurant.user;
  var hasTicketsPartner = DB.config.ticketRestaurant && DB.config.ticketRestaurant.partner;
  
  // Nascondi se nessuno ha buoni
  if (!hasTicketsUser && !hasTicketsPartner) {
    card.style.display = 'none';
  } else {
    card.style.display = 'block';
  }
}

function aggiornaTestiDinamici() {
  if (!DB.config || !DB.config.setupCompleted) return;
  
  try {
    var userName = DB.config.userName || 'Utente';
    var partnerName = DB.config.partnerName || 'Partner';
    var mode = DB.config.mode || 'solo';
    
    // ========== FORM TRANSAZIONI ==========
    
    // 1. Toggle "Chi ha pagato" - Nomi reali
    var whoPaidGroup = document.getElementById('chiHaPagatoGroup');
    if (whoPaidGroup) {
      if (mode === 'couple') {
        whoPaidGroup.style.display = 'block';
        var userNameSpan = document.getElementById('whoPaidUserName');
        var partnerNameSpan = document.getElementById('whoPaidPartnerName');
        if (userNameSpan) userNameSpan.textContent = userName;
        if (partnerNameSpan) partnerNameSpan.textContent = partnerName;
      } else {
        whoPaidGroup.style.display = 'none';
      }
    }
    
    // 2. Tipo transazione "Spesa Partner" → Nome reale
    var tipoSelects = document.querySelectorAll('#ttipo');
    tipoSelects.forEach(function(select) {
      var partnerOption = select.querySelector('option[value="partner_payment"]');
      if (partnerOption && mode === 'couple') {
        partnerOption.textContent = '👥 Spesa ' + partnerName;
        partnerOption.style.display = 'block';
      } else if (partnerOption && mode === 'solo') {
        partnerOption.style.display = 'none'; // Nascondi in modalità solo
      }
    });
    
    // 2. Checkbox "Include Anticipo per Partner" → Nome reale
    var anticipoCheckboxGroups = document.querySelectorAll('#anticipoPartnerCheckboxGroup');
    anticipoCheckboxGroups.forEach(function(group) {
      if (mode === 'couple') {
        var label = group.querySelector('div[style*="font-size:1.05em"]');
        if (label) {
          label.innerHTML = '💰 Include Anticipo per ' + partnerName;
        }
        var desc = group.querySelector('div[style*="font-size:0.85em"]');
        if (desc) {
          desc.textContent = 'Ho anticipato una parte della spesa per ' + partnerName;
        }
        group.style.display = 'block';
      } else {
        group.style.display = 'none'; // Nascondi in modalità solo
      }
    });
  
  // 3. Sezione Anticipo Partner → Testi dinamici
  var anticipoSections = document.querySelectorAll('#anticipoPartnerSection');
  anticipoSections.forEach(function(section) {
    var label = section.querySelector('label[style*="font-size:0.9em"]');
    if (label) {
      label.textContent = 'Quanto hai anticipato per ' + partnerName + '?';
    }
  });
  
  // 4. Pagamento Misto - "Partner paga la differenza" → Nome reale
  var pagataDaPartner = document.getElementById('pagataDaPartner');
  if (pagataDaPartner) {
    var partnerLabel = pagataDaPartner.querySelector('div[style*="font-weight:600"]');
    if (partnerLabel) {
      partnerLabel.innerHTML = '👤 ' + partnerName + ' paga la differenza';
    }
    
    // Mostra/nascondi in base alla modalità
    if (mode === 'solo') {
      pagataDaPartner.style.display = 'none';
    } else {
      pagataDaPartner.style.display = 'flex';
    }
  }
  
  // 5. Nascondi checkbox "Condiviso" se modalità Solo
  var condivisoCheckboxGroup = document.getElementById('condivisoCheckboxGroup');
  if (condivisoCheckboxGroup) {
    if (mode === 'solo') {
      condivisoCheckboxGroup.style.display = 'none';
    } else {
      condivisoCheckboxGroup.style.display = 'block';
    }
  }
  
  // ========== SEZIONE CONDIVISO ==========
  
  // 6. Nasconde navigazione "Condiviso" se modalità Solo
  var navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(function(item) {
    var icon = item.querySelector('.nav-icon');
    if (icon && icon.textContent.trim() === '🤝') {
      if (mode === 'solo') {
        item.style.display = 'none';
      } else {
        item.style.display = 'flex';
      }
    }
  });
  
  // 7. Titolo sezione Condiviso con nomi reali
  var condivisoTitle = document.querySelector('#finanze h2');
  if (condivisoTitle && mode === 'couple') {
    condivisoTitle.textContent = '🤝 Condiviso: ' + userName + ' & ' + partnerName;
  }
  
  // ========== PAGAMENTO MISTO BIDIREZIONALE ==========
  
  // 8. Aggiorna testi Pagamento Misto in base a chi ha i buoni
  // RIMOSSO: aggiornaTestiPagamentoMisto(); 
  // Questa funzione viene chiamata solo quando necessario da selezionaChiHaPagato()
  
  } catch (error) {
    console.error('[aggiornaTestiDinamici] Errore:', error);
    // Non bloccare l'app, continua
  }
}

// ========== AGGIORNA TESTI PAGAMENTO MISTO ==========
function aggiornaTestiPagamentoMisto() {
  if (!DB.config || !DB.config.setupCompleted || DB.config.mode === 'solo') return;
  
  // Questa funzione verrà chiamata quando si seleziona "Chi ha pagato"
  // per aggiornare dinamicamente il testo della checkbox Pagamento Misto
}

// ========== CHI HA PAGATO (COUPLE MODE) ==========
var chiHaPagato = 'user'; // default

function selezionaChiHaPagato(who, el) {
  console.log('>>> FUNZIONE CHIAMATA! who:', who);
  alert('Funzione chiamata! who: ' + who);
  chiHaPagato = who;
  document.getElementById('tchiHaPagato').value = who;

  // Aggiorna UI
  var btns = document.querySelectorAll('.who-paid-btn');
  btns.forEach(function(btn) {
    btn.style.background = 'rgba(255,255,255,0.05)';
    btn.style.borderColor = 'rgba(78,236,163,0.3)';
  });

  el.style.background = 'rgba(78,236,163,0.1)';
  el.style.borderColor = '#4ecca3';

  // NUOVO: Nascondi metodo di pagamento se paga il partner (non riguarda i miei conti)
  var metodoPagamentoGroup = document.getElementById('metodoPagamentoGroup');
  var tmetodoSelect = document.getElementById('tmetodo');

  console.log('[CHI HA PAGATO] who:', who, 'metodoPagamentoGroup:', metodoPagamentoGroup ? 'FOUND' : 'NULL');

  alert('metodoPagamentoGroup trovato: ' + (metodoPagamentoGroup ? 'SI' : 'NO'));

  if (who === 'partner') {
    // Partner paga - nascondi metodo di pagamento
    if (metodoPagamentoGroup) {
      metodoPagamentoGroup.style.display = 'none';
      alert('Display impostato a NONE');
    }
    if (tmetodoSelect) tmetodoSelect.removeAttribute('required');
  } else {
    // Io pago - mostra metodo di pagamento
    if (metodoPagamentoGroup) {
      metodoPagamentoGroup.style.display = 'block';
    }
    if (tmetodoSelect) tmetodoSelect.setAttribute('required', '');
  }

  // IMPORTANTE: Aggiorna testi dinamici checkbox Pagamento Misto
  aggiornaCheckboxPagamentoMistoDinamico();

  alert('Dopo aggiornaCheckboxPagamentoMistoDinamico - display: ' + (metodoPagamentoGroup ? metodoPagamentoGroup.style.display : 'N/A'));
}

function aggiornaCheckboxPagamentoMistoDinamico() {
  if (!DB.config || !DB.config.setupCompleted || DB.config.mode === 'solo') return;
  
  var userName = DB.config.userName || 'Utente';
  var partnerName = DB.config.partnerName || 'Partner';
  var hasTicketsUser = DB.config.ticketRestaurant.user;
  var hasTicketsPartner = DB.config.ticketRestaurant.partner;
  
  // Trova checkbox pagamento misto
  var checkboxDiv = document.querySelector('#pagamentoMistoCheckboxGroup');
  if (!checkboxDiv) return;
  
  // Trova il metodo di pagamento selezionato
  var metodoSelect = document.getElementById('tmetodo');
  var metodo = metodoSelect ? metodoSelect.value : 'webank';
  
  // Logica:
  // Se chiHaPagato = 'user' E user ha buoni E metodo = buoni_pasto
  //    → "🎫 Pagamento Misto (Buoni + Cash)"
  // Se chiHaPagato = 'partner' E user ha buoni E metodo = buoni_pasto
  //    → "🎫 [userName] ha usato Buoni"
  
  var labelDiv = checkboxDiv.querySelector('div[style*="font-size:1em"]');
  var descDiv = checkboxDiv.querySelector('div[style*="font-size:0.8em"]');
  
  if (!labelDiv || !descDiv) return;
  
  if (metodo === 'buoni_pasto') {
    // Determina chi ha i buoni
    var hasTickets = (chiHaPagato === 'user' && hasTicketsUser) || (chiHaPagato === 'partner' && hasTicketsPartner);
    var otherHasTickets = (chiHaPagato === 'user' && hasTicketsPartner) || (chiHaPagato === 'partner' && hasTicketsUser);
    
    if (chiHaPagato === 'user' && hasTicketsUser) {
      // L'utente paga con i suoi buoni
      labelDiv.textContent = '💳 Pagamento Misto (Buoni + Cash)';
      descDiv.textContent = 'Usa buoni + altro metodo (es: 1 buono + €1.50 carta)';
    } else if (chiHaPagato === 'partner' && hasTicketsPartner) {
      // Il partner paga con i suoi buoni
      labelDiv.textContent = '💳 Pagamento Misto (Buoni + Cash)';
      descDiv.textContent = 'Usa buoni + altro metodo';
    } else if (chiHaPagato === 'user' && hasTicketsPartner) {
      // L'utente sta registrando, ma il partner ha i buoni
      labelDiv.textContent = '🎫 ' + partnerName + ' ha usato Buoni';
      descDiv.textContent = partnerName + ' ha usato i suoi buoni, tu hai pagato la differenza';
    } else if (chiHaPagato === 'partner' && hasTicketsUser) {
      // Il partner sta registrando, ma l'utente ha i buoni
      labelDiv.textContent = '🎫 ' + userName + ' ha usato Buoni';
      descDiv.textContent = userName + ' ha usato i suoi buoni, tu hai pagato la differenza';
    }
    
    checkboxDiv.style.display = 'block';
  } else {
    checkboxDiv.style.display = 'none';
  }
  
  // Aggiorna anche label della sezione mista
  aggiornaLabelPagamentoMistoSection();
}

function aggiornaLabelPagamentoMistoSection() {
  if (!DB.config || !DB.config.setupCompleted || DB.config.mode === 'solo') return;
  
  var userName = DB.config.userName || 'Utente';
  var partnerName = DB.config.partnerName || 'Partner';
  var hasTicketsUser = DB.config.ticketRestaurant.user;
  var hasTicketsPartner = DB.config.ticketRestaurant.partner;
  
  // Trova il radio "Partner paga la differenza"
  var pagataDaPartner = document.getElementById('pagataDaPartner');
  if (!pagataDaPartner) return;
  
  var partnerLabel = pagataDaPartner.querySelector('div[style*="font-weight:600"]');
  if (!partnerLabel) return;
  
  // Determina chi è "l'altro"
  var otherName = chiHaPagato === 'user' ? partnerName : userName;
  
  partnerLabel.innerHTML = '👤 ' + otherName + ' paga la differenza';
}

// ========== SCHERMATA BLOCCO PIN (6 CIFRE) DARK ==========
function mostraSchermataBlocco() {
  var overlay = document.createElement('div');
  overlay.id = 'biometricOverlay';
  overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:linear-gradient(135deg,#0a0e27 0%,#16213e 100%);z-index:10000;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;padding:20px';
  
  overlay.innerHTML = `
    <div style="text-align:center;max-width:400px;width:100%;background:rgba(255,255,255,0.05);backdrop-filter:blur(10px);border:3px solid rgba(255,215,0,0.3);border-radius:24px;padding:50px 40px;box-shadow:0 20px 60px rgba(0,0,0,0.6)">
      <div style="font-size:4em;margin-bottom:20px;filter:drop-shadow(0 0 15px rgba(255,215,0,0.5))">🔒</div>
      <h2 style="font-size:1.8em;margin-bottom:10px;font-weight:900;color:#e5e4e2;text-shadow:0 0 15px rgba(255,215,0,0.3)">Budget Manager Pro</h2>
      <p style="font-size:0.95em;color:#d1d4dc;margin-bottom:35px">Inserisci il tuo PIN</p>
      
      <!-- Display PIN dots (6 cifre) -->
      <div id="pinDisplay" style="display:flex;justify-content:center;gap:12px;margin-bottom:40px">
        <div class="pin-dot"></div>
        <div class="pin-dot"></div>
        <div class="pin-dot"></div>
        <div class="pin-dot"></div>
        <div class="pin-dot"></div>
        <div class="pin-dot"></div>
      </div>
      
      <!-- Numeric keypad -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:18px;max-width:300px;margin:0 auto">
        <button class="pin-btn" onmousedown="handlePinClick(event, '1')" ontouchstart="handlePinClick(event, '1')">1</button>
        <button class="pin-btn" onmousedown="handlePinClick(event, '2')" ontouchstart="handlePinClick(event, '2')">2</button>
        <button class="pin-btn" onmousedown="handlePinClick(event, '3')" ontouchstart="handlePinClick(event, '3')">3</button>
        <button class="pin-btn" onmousedown="handlePinClick(event, '4')" ontouchstart="handlePinClick(event, '4')">4</button>
        <button class="pin-btn" onmousedown="handlePinClick(event, '5')" ontouchstart="handlePinClick(event, '5')">5</button>
        <button class="pin-btn" onmousedown="handlePinClick(event, '6')" ontouchstart="handlePinClick(event, '6')">6</button>
        <button class="pin-btn" onmousedown="handlePinClick(event, '7')" ontouchstart="handlePinClick(event, '7')">7</button>
        <button class="pin-btn" onmousedown="handlePinClick(event, '8')" ontouchstart="handlePinClick(event, '8')">8</button>
        <button class="pin-btn" onmousedown="handlePinClick(event, '9')" ontouchstart="handlePinClick(event, '9')">9</button>
        <div style="width:75px;height:75px"></div>
        <button class="pin-btn" onmousedown="handlePinClick(event, '0')" ontouchstart="handlePinClick(event, '0')">0</button>
        <button class="pin-btn pin-delete" onmousedown="handlePinClick(event, 'delete')" ontouchstart="handlePinClick(event, 'delete')">⌫</button>
      </div>
    </div>
  `;
  
  // Aggiungi stili per i pulsanti PIN - DARK STYLE
  var style = document.createElement('style');
  style.textContent = `
    .pin-dot {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      border: 2px solid rgba(255,215,0,0.4);
      background: transparent;
      transition: all 0.15s ease-out;
    }
    .pin-dot.filled {
      background: #e5e4e2;
      border-color: #e5e4e2;
      box-shadow: 0 0 20px rgba(255,215,0,0.7);
      transform: scale(1.15);
    }
    .pin-btn {
      background: rgba(255,215,0,0.1);
      border: 2px solid rgba(255,215,0,0.3);
      color: #e5e4e2;
      font-size: 1.9em;
      font-weight: 700;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.08s ease-out, background 0.08s ease-out, border-color 0.08s ease-out;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      box-shadow: 0 4px 20px rgba(0,0,0,0.4);
      width: 75px;
      height: 75px;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      touch-action: manipulation;
      position: relative;
    }
    .pin-btn:active {
      transform: scale(0.85);
      background: rgba(255,215,0,0.25);
      border-color: rgba(255,215,0,0.6);
    }
    .pin-btn.pressed {
      transform: scale(0.85);
      background: rgba(255,215,0,0.25);
      border-color: rgba(255,215,0,0.6);
    }
    .pin-delete {
      background: rgba(242,54,69,0.15);
      border-color: rgba(242,54,69,0.4);
      color: #f23645;
      font-size: 1.6em;
    }
    @media (max-width: 400px) {
      .pin-btn {
        width: 65px;
        height: 65px;
        font-size: 1.6em;
      }
      .pin-delete {
        font-size: 1.4em;
      }
    }
  `;
  document.head.appendChild(style);
  
  document.body.appendChild(overlay);
  pinValue = '';
}

// Gestione click/touch ottimizzata
var lastPinAction = 0;

function handlePinClick(event, value) {
  // Previeni doppia esecuzione (touch genera anche mouse event)
  var now = Date.now();
  if (now - lastPinAction < 200) {
    event.preventDefault();
    return;
  }
  lastPinAction = now;
  
  event.preventDefault();
  event.stopPropagation();
  
  var btn = event.currentTarget;
  
  // Feedback visivo immediato
  btn.classList.add('pressed');
  
  // Vibrazione tattile su iPhone (se supportato)
  if (navigator.vibrate) {
    navigator.vibrate(5);
  }
  
  // Esegui immediatamente l'azione
  if (value === 'delete') {
    cancellaPinDigit();
  } else {
    aggiungiPinDigit(value);
  }
  
  // Rimuovi effetto pressed dopo animazione
  setTimeout(function() {
    btn.classList.remove('pressed');
  }, 100);
}

function aggiungiPinDigit(digit) {
  if (pinValue.length < 6) {
    pinValue += digit;
    aggiornaPinDisplay();
    playSound('click');
    
    // Verifica automaticamente quando raggiunge 6 cifre
    if (pinValue.length === 6) {
      setTimeout(verificaPin, 300);
    }
  }
}

function cancellaPinDigit() {
  if (pinValue.length > 0) {
    pinValue = pinValue.slice(0, -1);
    aggiornaPinDisplay();
    playSound('click');
  }
}

function aggiornaPinDisplay() {
  var dots = document.querySelectorAll('.pin-dot');
  dots.forEach(function(dot, index) {
    if (index < pinValue.length) {
      dot.classList.add('filled');
    } else {
      dot.classList.remove('filled');
    }
  });
}

function verificaPin() {
  var savedPin = localStorage.getItem('appPin') || '123456';
  
  if (pinValue === savedPin) {
    isAuthenticated = true;
    rimuoviSchermataBlocco();
    mostraToast('✅ Autenticazione riuscita!', 'success');
    playSound('success');
  } else {
    // PIN errato - shake animation
    var display = document.getElementById('pinDisplay');
    if (display) {
      display.style.animation = 'shake 0.5s';
      setTimeout(function() {
        display.style.animation = '';
      }, 500);
    }
    mostraToast('❌ PIN errato!', 'danger');
    playSound('error');
    pinValue = '';
    aggiornaPinDisplay();
  }
}

// Aggiungi animazione shake
var shakeStyle = document.createElement('style');
shakeStyle.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
    20%, 40%, 60%, 80% { transform: translateX(10px); }
  }
`;
document.head.appendChild(shakeStyle);

function rimuoviSchermataBlocco() {
  var overlay = document.getElementById('biometricOverlay');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.5s';
    setTimeout(function() {
      overlay.remove();
    }, 500);
  }
}


// ========== SUONI FEEDBACK ==========
function playSound(type) {
  if (!soundsEnabled) return;
  
  var freq = {success: 800, error: 300, click: 600};
  var audioContext = new (window.AudioContext || window.webkitAudioContext)();
  var oscillator = audioContext.createOscillator();
  var gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = freq[type] || 600;
  oscillator.type = 'sine';
  
  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.1);
}

function toggleSound() {
  soundsEnabled = document.getElementById('soundToggle').checked;
  localStorage.setItem('soundsEnabled', soundsEnabled);
  playSound('click');
  
  var slider = document.getElementById('soundSlider');
  if (soundsEnabled) {
    slider.style.transform = 'translateX(26px)';
    slider.parentElement.style.background = '#27ae60';
  } else {
    slider.style.transform = 'translateX(0)';
    slider.parentElement.style.background = '#ccc';
  }
}

function aggiornaToggleSound() {
  document.getElementById('soundToggle').checked = soundsEnabled;
  var slider = document.getElementById('soundSlider');
  if (soundsEnabled) {
    slider.style.transform = 'translateX(26px)';
    slider.parentElement.style.background = '#27ae60';
  } else {
    slider.style.transform = 'translateX(0)';
    slider.parentElement.style.background = '#ccc';
  }
}

function toggleBiometric() {
  biometricEnabled = document.getElementById('biometricToggle').checked;
  localStorage.setItem('biometricEnabled', biometricEnabled);
  
  var slider = document.getElementById('biometricSlider');
  if (biometricEnabled) {
    slider.style.transform = 'translateX(26px)';
    slider.parentElement.style.background = '#27ae60';
    mostraToast('🔐 Blocco PIN attivato!', 'success');
    playSound('success');
  } else {
    slider.style.transform = 'translateX(0)';
    slider.parentElement.style.background = 'rgba(255,255,255,0.3)';
    isAuthenticated = false;
    mostraToast('🔓 Blocco PIN disattivato', 'warning');
  }
}

function aggiornaToggleBiometric() {
  var toggle = document.getElementById('biometricToggle');
  var slider = document.getElementById('biometricSlider');
  if (!toggle || !slider) return;
  
  toggle.checked = biometricEnabled;
  if (biometricEnabled) {
    slider.style.transform = 'translateX(26px)';
    slider.parentElement.style.background = '#27ae60';
  } else {
    slider.style.transform = 'translateX(0)';
    slider.parentElement.style.background = 'rgba(255,255,255,0.3)';
  }
}

function cambiaPassword() {
  var vecchioPin = localStorage.getItem('appPin') || '123456';
  var input = prompt('🔑 Inserisci il PIN attuale (6 cifre):\n\n(PIN predefinito: 123456)');
  
  if (input !== vecchioPin) {
    mostraToast('❌ PIN errato!', 'danger');
    return;
  }
  
  var nuovoPin = prompt('🔐 Inserisci il NUOVO PIN (6 cifre):');
  
  if (!nuovoPin || nuovoPin.length !== 6 || !/^\d{6}$/.test(nuovoPin)) {
    mostraToast('⚠️ Il PIN deve essere di 6 cifre!', 'warning');
    return;
  }
  
  var conferma = prompt('🔐 Conferma il NUOVO PIN (6 cifre):');
  
  if (nuovoPin !== conferma) {
    mostraToast('❌ I PIN non coincidono!', 'danger');
    return;
  }
  
  localStorage.setItem('appPin', nuovoPin);
  mostraToast('✅ PIN cambiato con successo!', 'success');
  playSound('success');
}

function testaBiometric() {
  isAuthenticated = false;
  mostraSchermataBlocco();
}

// ========== FUNZIONE ARROTONDAMENTO SPLITWISE ==========
function splitAmount(amount) {
  // Divide per 2 e arrotonda come Splitwise (0.5 va verso l'alto)
  return Math.round((amount / 2) * 100) / 100;
}

// ========== CARICAMENTO E SALVATAGGIO ==========
function carica() {
  try {
    var s = localStorage.getItem('budgetDBPro');
    if (s) {
      DB = JSON.parse(s);
      if (!DB.theme) DB.theme = 'auto';
      if (!DB.categorie) DB.categorie = { income: ['Stipendio'], expense: ['Spesa'] };
      if (!DB.transazioni) DB.transazioni = [];
      if (!DB.dataInizioTracking) DB.dataInizioTracking = null;
      if (!DB.budgetGoals) DB.budgetGoals = {};
      if (!DB.longTermGoals) DB.longTermGoals = [];
      
      // IMPORTANTE: Inizializza DB.conti se mancante
      if (!DB.conti) {
        console.warn('[INIT] DB.conti mancante, inizializzo...');
        DB.conti = {
          webank: 0,
          revolut: 0,
          paypal: 0,
          buoni_pasto: {
            saldo: 0,
            valoreUnitario: 10.50
          },
          contanti: 0
        };
      }
      
      // Assicura che tutti i conti esistano
      if (!DB.conti.webank && DB.conti.webank !== 0) DB.conti.webank = 0;
      if (!DB.conti.revolut && DB.conti.revolut !== 0) DB.conti.revolut = 0;
      if (!DB.conti.paypal && DB.conti.paypal !== 0) DB.conti.paypal = 0;
      if (!DB.conti.contanti && DB.conti.contanti !== 0) DB.conti.contanti = 0;
      if (!DB.conti.buoni_pasto) {
        DB.conti.buoni_pasto = { saldo: 0, valoreUnitario: 10.50 };
      }
      
      // Inizializza contiPersonalizzati se mancante
      if (!DB.contiPersonalizzati) {
        DB.contiPersonalizzati = [];
      }

      // Inizializza saldiIniziali se mancante
      if (!DB.saldiIniziali) {
        DB.saldiIniziali = {};
      }

      // MIGRAZIONE: Unifica DB.condiviso.debitoIniziale in DB.splitwise.saldoIniziale
      if (DB.condiviso && DB.condiviso.debitoIniziale !== undefined) {
        if (!DB.splitwise) DB.splitwise = { saldo: 0 };
        // Se non è già stato impostato tramite impostazioni, usa il valore del wizard
        if (DB.splitwise.saldoIniziale === undefined || DB.splitwise.saldoIniziale === 0) {
          DB.splitwise.saldoIniziale = DB.condiviso.debitoIniziale;
        }
        // Rimuovi la vecchia variabile per evitare confusione
        delete DB.condiviso.debitoIniziale;
        console.log('[MIGRAZIONE] Debito iniziale migrato da DB.condiviso a DB.splitwise');
      }

      if (!DB.categorieClassificazione) {
        // Inizializza classificazione per utenti esistenti
        DB.categorieClassificazione = {
          'Affitto': 'necessita',
          'Luce': 'necessita',
          'Fastweb Internet': 'necessita',
          'Telefono': 'necessita',
          'Spesa Supermercato': 'necessita',
          'Spesa Casa': 'necessita',
          'Spesa Altro': 'necessita',
          'Benzina': 'necessita',
          'Autostrada': 'necessita',
          'Trasporti': 'necessita',
          'Assicurazioni Auto': 'necessita',
          'Bombola': 'necessita',
          'Cofidis': 'necessita',
          'Findomestic': 'necessita',
          'Farmacia': 'necessita',
          'Amazon': 'desideri',
          'Apple': 'desideri',
          'Shopping': 'desideri',
          'Palestra': 'desideri',
          'Parrucchiere': 'desideri',
          'PayPal': 'desideri',
          'Prozis': 'desideri',
          'Regali': 'desideri',
          'Uscite Locali': 'desideri',
          'Uscite Ristoranti': 'desideri',
          'Uscite Altro': 'desideri',
          'Prelievo': 'desideri',
          'Altro': 'desideri'
        };
      }
      
      // NUOVO: Inizializza config se mancante
      if (!DB.config) {
        DB.config = {
          setupCompleted: false,
          mode: null,
          userName: '',
          partnerName: '',
          ticketRestaurant: {
            user: false,
            partner: false
          }
        };
      }
      
      // Backward compatibility: se ha già dati, impostiamo defaults
      if (!DB.config.setupCompleted && DB.transazioni && DB.transazioni.length > 0) {
        DB.config = {
          setupCompleted: true,
          mode: 'couple',
          userName: 'Michal',
          partnerName: 'Matilde',
          ticketRestaurant: {
            user: true,   // Michal ha i buoni
            partner: false
          }
        };
        salvaDB();
      }
    }
  } catch (e) {
    // Errore caricamento dati
  }
}

function salvaDB() {
  try {
    localStorage.setItem('budgetDBPro', JSON.stringify(DB));
    // Clear memo cache quando cambiano i dati
    if (typeof clearMemoCache === 'function') {
      clearMemoCache();
    }
  } catch (e) {
    mostraToast('❌ Errore durante il salvataggio', 'danger');
  }
}

// ========== TOAST NOTIFICATIONS ==========
// ========== TOAST NOTIFICATIONS MIGLIORATE ==========
function mostraToast(messaggio, tipo) {
  tipo = tipo || 'success';
  
  // Crea container se non esiste
  var container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  
  var icons = {
    success: '✅',
    error: '❌',
    danger: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };
  
  var toast = document.createElement('div');
  toast.className = 'toast ' + tipo;
  toast.innerHTML = '<div class="toast-icon">' + (icons[tipo] || icons.success) + '</div>' +
                    '<div class="toast-message">' + messaggio + '</div>';
  
  container.appendChild(toast);
  
  // Haptic feedback su iOS
  if (window.navigator && window.navigator.vibrate) {
    window.navigator.vibrate(tipo === 'success' ? 50 : 100);
  }
  
  setTimeout(function() {
    if (toast.parentNode) {
      container.removeChild(toast);
    }
  }, 3000);
}

// ========== LOADING OVERLAY ==========
function mostraLoading() {
  var overlay = document.createElement('div');
  overlay.id = 'loading-overlay';
  overlay.className = 'loading-overlay';
  overlay.innerHTML = '<div class="spinner"></div>';
  document.body.appendChild(overlay);
  return overlay;
}

function nascondiLoading() {
  var overlay = document.getElementById('loading-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    setTimeout(function() {
      if (overlay.parentNode) {
        document.body.removeChild(overlay);
      }
    }, 300);
  }
}

// ========== SUCCESS ANIMATION ==========
function mostraSuccessAnimation(callback) {
  var modal = document.getElementById('modal');
  if (!modal) return;
  
  modal.classList.add('active');
  var html = '<div class="modal-content" style="text-align:center;padding:40px">';
  html += '<div class="success-checkmark">';
  html += '<div class="check-icon">';
  html += '<span class="icon-line line-tip"></span>';
  html += '<span class="icon-line line-long"></span>';
  html += '</div></div>';
  html += '<h3 style="color:var(--income);margin-top:20px">Salvato con successo!</h3>';
  html += '</div>';
  
  modal.querySelector('.modal-content').innerHTML = html;
  
  setTimeout(function() {
    chiudiModal();
    if (callback) callback();
  }, 1500);
}

// ========== SHAKE ANIMATION FOR ERRORS ==========
function shakeElement(elementId) {
  var el = document.getElementById(elementId);
  if (el) {
    el.style.animation = 'shake 0.5s';
    setTimeout(function() {
      el.style.animation = '';
    }, 500);
  }
}

// ========== GESTIONE TEMA ==========
function applyTheme() {
  // FORZA SEMPRE DARK MODE (Platino Luxury)
  document.body.classList.add('dark');
  DB.theme = 'dark';
  
  if (lineChart || compareChart) {
    setTimeout(function() { aggiorna(); }, 100);
  }
}

// ========== NAVIGAZIONE ==========
function vaiOggi() {
  var oggi = new Date();
  anno = oggi.getFullYear();
  mese = oggi.getMonth();
  
  document.getElementById('year').value = anno;
  document.getElementById('month').value = mese;
  aggiornaDisplayAnnoMese();
  
  aggiorna();
  if (currentSection === 'trans') mostraTrans();
  if (currentSection === 'analysis') mostraAnalisi();
  
  mostraToast('📅 Tornato a oggi!', 'info');
}

// Nuove funzioni per frecce anno/mese
function cambiaAnno(direzione) {
  anno += direzione;
  document.getElementById('year').value = anno;
  aggiornaDisplayAnnoMese();
  aggiorna();
}

function cambiaMese(direzione) {
  mese += direzione;
  if (mese > 11) {
    mese = 0;
    anno++;
  } else if (mese < 0) {
    mese = 11;
    anno--;
  }
  document.getElementById('year').value = anno;
  document.getElementById('month').value = mese;
  aggiornaDisplayAnnoMese();
  aggiorna();
}

function aggiornaDisplayAnnoMese() {
  var mesiNomi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                  'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  
  var yearDisplay = document.getElementById('yearDisplay');
  var monthDisplay = document.getElementById('monthDisplay');
  
  if (yearDisplay) yearDisplay.textContent = anno;
  if (monthDisplay) monthDisplay.textContent = mesiNomi[mese];
}

// Funzione per aggiornare lo stile dei bottoni "Oggi"
function aggiornaBottoniOggi() {
  var oggi = new Date();
  var meseCurrent = oggi.getMonth();
  var annoCurrent = oggi.getFullYear();
  var isOggi = (anno === annoCurrent && mese === meseCurrent);
  
  var bottoni = ['oggiDashboard', 'oggiFinanze', 'oggiObiettivi', 'oggiCondiviso', 'oggiMovimenti'];
  
  bottoni.forEach(function(id) {
    var btn = document.getElementById(id);
    if (btn) {
      if (isOggi) {
        // Stile viola quando siamo sul mese corrente
        btn.style.background = 'linear-gradient(135deg,#a1a1aa,#71717a)';
        btn.style.color = '#fff';
        btn.style.border = 'none';
        btn.style.boxShadow = '0 4px 12px rgba(102,126,234,0.4)';
      } else {
        // Stile outline quando NON siamo sul mese corrente
        btn.style.background = 'var(--card)';
        btn.style.color = '#a1a1aa';
        btn.style.border = '2px solid #a1a1aa';
        btn.style.boxShadow = 'none';
      }
    }
  });
}


function vai(sec, elem) {
  document.querySelectorAll('.section').forEach(function(s) {
    s.classList.remove('active');
  });
  document.querySelectorAll('.nav-item').forEach(function(n) {
    n.classList.remove('active');
  });
  document.getElementById(sec).classList.add('active');
  if (elem) elem.classList.add('active');
  
  currentSection = sec;
  
  if (sec === 'dash') {
    aggiorna();
    inizializzaDistribSelettori();
    aggiornaDistribuzione();
  }
  if (sec === 'condiviso') mostraCondiviso();
  if (sec === 'settings') {
    aggiornaProfiloDisplay(); // Aggiorna display modalità coppia/singolo
    aggiornaVisibilitaBuoniSettings();
    nascondiOpzioniBuoniPasto(); // Aggiorna visibilità buoni
    inizializzaConfigurazioneIniziale(); // Inizializza sezione configurazione iniziale
  }
  if (sec === 'finanze') {
    // Inizializzazione completa sezione Finanze
    // Trova l'ultimo anno con transazioni
    var anniConDati = [];
    DB.transazioni.forEach(function(t) {
      var annoTrans = new Date(t.data).getFullYear();
      if (anniConDati.indexOf(annoTrans) === -1) {
        anniConDati.push(annoTrans);
      }
    });
    anniConDati.sort(function(a, b) { return b - a; }); // Dal più recente
    
    // Usa l'anno più recente con dati, o anno corrente se non ci sono dati
    annoTabelle = anniConDati.length > 0 ? anniConDati[0] : anno;
    
    console.log('Finanze aperta - annoTabelle impostato a:', annoTabelle, 'anni disponibili:', anniConDati);
    
    // Usa setTimeout per assicurarsi che il DOM sia pronto
    setTimeout(function() {
      try {
        aggiornaFinanzeDateHeader(); // AGGIUNTO: Mostra data
      } catch (e) {
        console.error('Errore aggiornaFinanzeDateHeader:', e);
      }
      
      try {
        aggiornaRisparmio();
      } catch (e) {
        console.error('Errore aggiornaRisparmio:', e);
      }
      
      try {
        mostraAnalisi();
      } catch (e) {
        console.error('Errore mostraAnalisi:', e);
      }
      
      try {
        calcolaPrevisioni();
      } catch (e) {
        console.error('Errore calcolaPrevisioni:', e);
      }
      
      try {
        inizializzaSelettoriConfronto();
      } catch (e) {
        console.error('Errore inizializzaSelettoriConfronto:', e);
      }
      
      try {
        popolaTabelleMensili();
      } catch (e) {
        console.error('Errore popolaTabelleMensili:', e);
      }
      
      try {
        console.log('[TAB] Inizializzo Evoluzione Patrimonio...');
        inizializzaEvoluzione();
      } catch (e) {
        console.error('Errore inizializzaEvoluzione:', e);
      }
    }, 50);
  }
  if (sec === 'obiettivi') { aggiornaObiettiviDateHeader(); mostraObiettivi(); }
  if (sec === 'trans') {
    aggFilterCats();
    aggiornaFilterMetodi(); // Popola dropdown metodi di pagamento
    aggiornaFiltroPartnerName(); // Aggiorna nome partner nel filtro
    aggiornaMovimentiMese();
    mostraTrans();
  }
  if (sec === 'cats') mostraCats();
  if (sec === 'settings') { mostraDataTracking(); aggiornaToggleSound(); aggiornaToggleBiometric(); }
  if (sec === 'ricorrenti') mostraRicorrenti();

  aggiornaWidget();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
}

// ========== SEZIONE CONDIVISO ==========

var condivisoAnno = new Date().getFullYear();
var condivisoMese = new Date().getMonth();
var condivisoTab = 'mensile';
var condivisoTrendChart, condivisoEvoluzioneChart, condivisoTopCategorieChart;
var condivisoExpanded = false;

function toggleCondiviso() {
  condivisoExpanded = !condivisoExpanded;
  var content = document.getElementById('condivisoContent');
  var icon = document.getElementById('condivisoToggleIcon');
  
  if (condivisoExpanded) {
    content.style.display = 'block';
    icon.textContent = '▲';
    icon.style.transform = 'rotate(180deg)';
  } else {
    content.style.display = 'none';
    icon.textContent = '▼';
    icon.style.transform = 'rotate(0deg)';
  }
  
  playSound('click');
}

function mostraCondiviso() {
  // Sincronizza con data globale
  condivisoAnno = anno;
  condivisoMese = mese;
  aggiornaCondivisoMeseDisplay();
  aggiornaCondivisoBilancioCumulativo();
  mostraTabCondiviso(condivisoTab);
}

// Aggiorna il widget del bilancio cumulativo nella sezione Condiviso
function aggiornaCondivisoBilancioCumulativo() {
  var tuePagate = 0, suePagate = 0;
  var virtualRecoveryTu = 0, virtualRecoveryPartner = 0;
  var prestiti = 0, anticipiPartner = 0;

  DB.transazioni.forEach(function(t) {
    var imp = parseFloat(t.importo) || 0;
    var chiHaPagato = t.chiHaPagato || 'user';

    if (t.anticipoPartner && t.anticipoPartner > 0) {
      if (chiHaPagato === 'user') {
        anticipiPartner += parseFloat(t.anticipoPartner);
      } else {
        anticipiPartner -= parseFloat(t.anticipoPartner);
      }
    }

    if (t.tipo === 'expense' && t.condiviso && !t.virtualRecovery) {
      if (chiHaPagato === 'partner') {
        suePagate += imp;
      } else {
        tuePagate += imp;
      }
    } else if (t.tipo === 'expense' && t.virtualRecovery) {
      if (chiHaPagato === 'user') {
        virtualRecoveryTu += imp;
      } else {
        virtualRecoveryPartner += imp;
      }
    } else if (t.tipo === 'partner_payment') {
      if (t.virtualRecovery) {
        virtualRecoveryPartner += imp;
      } else if (t.condiviso) {
        suePagate += imp;
      } else {
        prestiti += imp;
      }
    } else if (t.tipo === 'income' && t.rimborsoPartner) {
      virtualRecoveryPartner += imp;
    }
  });

  var saldoIniziale = (DB.splitwise && DB.splitwise.saldoIniziale) ? parseFloat(DB.splitwise.saldoIniziale) : 0;
  var daRecuperare = (tuePagate - suePagate) / 2 - prestiti + virtualRecoveryTu - virtualRecoveryPartner + anticipiPartner + saldoIniziale;
  daRecuperare = Math.round(daRecuperare * 100) / 100;

  var card = document.getElementById('condivisoBilancioCumulativoCard');
  var label = document.getElementById('condivisoBilancioLabel');
  var valore = document.getElementById('condivisoBilancioValore');
  var expl = document.getElementById('condivisoBilancioExpl');

  if (!card) return;

  valore.textContent = formatEuro(Math.abs(daRecuperare));

  if (daRecuperare > 0.01) {
    card.style.background = 'linear-gradient(135deg, rgba(48, 209, 88, 0.15), rgba(52, 199, 89, 0.08))';
    card.style.borderLeft = '4px solid var(--income)';
    label.textContent = '💰 Da Recuperare';
    label.style.color = 'var(--income)';
    valore.style.color = 'var(--income)';
    expl.textContent = 'Lei ti deve dall\'inizio';
  } else if (daRecuperare < -0.01) {
    card.style.background = 'linear-gradient(135deg, rgba(255, 69, 58, 0.15), rgba(255, 59, 48, 0.08))';
    card.style.borderLeft = '4px solid var(--expense)';
    label.textContent = '💸 Da Rimborsare';
    label.style.color = 'var(--expense)';
    valore.style.color = 'var(--expense)';
    expl.textContent = 'Tu le devi dall\'inizio';
  } else {
    card.style.background = 'var(--card)';
    card.style.borderLeft = '4px solid var(--text-muted)';
    label.textContent = '✅ In Pareggio';
    label.style.color = 'var(--text-secondary)';
    valore.style.color = 'var(--text)';
    expl.textContent = 'Bilancio in pareggio';
  }
}

function mostraTabCondiviso(tab) {
  condivisoTab = tab;
  
  // Aggiorna tab attivi
  document.getElementById('tabMensile').style.opacity = tab === 'mensile' ? '1' : '0.6';
  document.getElementById('tabAnnuale').style.opacity = tab === 'annuale' ? '1' : '0.6';
  document.getElementById('tabTotale').style.opacity = tab === 'totale' ? '1' : '0.6';
  
  // Mostra/nascondi viste
  document.getElementById('condivisoMensile').style.display = tab === 'mensile' ? 'block' : 'none';
  document.getElementById('condivisoAnnuale').style.display = tab === 'annuale' ? 'block' : 'none';
  document.getElementById('condivisoTotale').style.display = tab === 'totale' ? 'block' : 'none';
  
  if (tab === 'mensile') aggiornaCondivisoMensile();
  if (tab === 'annuale') aggiornaCondivisoAnnuale();
  if (tab === 'totale') aggiornaCondivisoTotale();
  
  playSound('click');
}

function aggiornaCondivisoMensile() {
  var mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  document.getElementById('condivisoMeseCorrente').textContent = mesiNomi[condivisoMese] + ' ' + condivisoAnno;
  
  var tue = 0, sue = 0, tueCount = 0, sueCount = 0;
  var categorie = {};
  var anticipiPartnerMese = 0; // NUOVO: Anticipi del mese
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === condivisoAnno && d.getMonth() === condivisoMese) {
      var imp = parseFloat(t.importo) || 0;
      var chiHaPagato = t.chiHaPagato || 'user';

      // Somma anticipi del mese
      if (t.anticipoPartner && t.anticipoPartner > 0) {
        if (chiHaPagato === 'user') {
          anticipiPartnerMese += parseFloat(t.anticipoPartner);
        } else {
          anticipiPartnerMese -= parseFloat(t.anticipoPartner);
        }
      }

      if (t.tipo === 'expense' && t.condiviso && !t.virtualRecovery) {
        // Spesa condivisa - controlla chi ha pagato
        if (chiHaPagato === 'partner') {
          sue += imp;
          sueCount++;
        } else {
          tue += imp;
          tueCount++;
        }
        categorie[t.categoria] = (categorie[t.categoria] || 0) + imp;
      } else if (t.tipo === 'partner_payment' && t.condiviso && !t.virtualRecovery) {
        // BACKWARD COMPAT: vecchio sistema
        sue += imp;
        sueCount++;
        categorie[t.categoria] = (categorie[t.categoria] || 0) + imp;
      }
    }
  });
  
  var tot = tue + sue;
  // MODIFICATO: AGGIUNGI anticipi partner
  var daRec = (tue - sue) / 2 + anticipiPartnerMese;
  
  document.getElementById('condivisoTueMese').textContent = formatEuro(tue);
  document.getElementById('condivisoTueTransMese').textContent = tueCount + ' transazioni';
  document.getElementById('condivisoSueMese').textContent = formatEuro(sue);
  document.getElementById('condivisoSueTransMese').textContent = sueCount + ' transazioni';
  document.getElementById('condivisoTotaleMese').textContent = formatEuro(tot);
  document.getElementById('condivisoQuotaMese').textContent = formatEuro(tot / 2);
  document.getElementById('condivisoDaRecMese').textContent = formatEuro(Math.abs(daRec));
  
  var card = document.getElementById('condivisoDaRecMeseCard');
  var label = document.getElementById('condivisoDaRecLabel');
  var expl = document.getElementById('condivisoDaRecExpl');
  
  if (daRec > 0.01) {
    card.style.background = 'rgba(48, 209, 88, 0.12)';
    card.style.borderLeft = '3px solid #30d158';
    document.getElementById('condivisoDaRecMese').style.color = '#30d158';
    label.textContent = '💰 Partner Ti Deve';
    label.style.color = '#30d158';
    expl.textContent = '+' + formatEuro(daRec) + ' in più pagato da te';
    expl.style.color = '#8e8e93';
  } else if (daRec < -0.01) {
    card.style.background = 'rgba(255, 69, 58, 0.12)';
    card.style.borderLeft = '3px solid #ff453a';
    document.getElementById('condivisoDaRecMese').style.color = '#ff453a';
    label.textContent = '💸 Tu Le Devi';
    label.style.color = '#ff453a';
    expl.textContent = '+' + formatEuro(Math.abs(daRec)) + ' in più pagato da lei';
    expl.style.color = '#8e8e93';
  } else {
    card.style.background = 'rgba(142, 142, 147, 0.12)';
    card.style.borderLeft = '3px solid #8e8e93';
    document.getElementById('condivisoDaRecMese').style.color = '#fff';
    label.textContent = '✅ Pari';
    label.style.color = '#c7c7cc';
    expl.textContent = 'Bilancio in pareggio questo mese';
    expl.style.color = '#8e8e93';
  }
  
  // Top Categorie
  var sorted = Object.entries(categorie).sort(function(a,b) { return b[1] - a[1]; }).slice(0, 10);
  var html = '';
  var meseAnnoStr = condivisoAnno + '-' + condivisoMese;
  if (sorted.length === 0) {
    html = '<p style="text-align:center;color:#8e8e93;padding:15px">Nessuna spesa condivisa questo mese</p>';
  } else {
    sorted.forEach(function(item, idx) {
      var perc = (item[1] / tot * 100).toFixed(1);
      var catEscaped = item[0].replace(/'/g, "\\'");
      html += '<div onclick="apriModalCategoriaDettaglio(\'' + catEscaped + '\', true, \'' + meseAnnoStr + '\')" style="margin-bottom:8px;cursor:pointer;padding:8px;border-radius:8px;transition:background 0.2s" onmouseover="this.style.background=\'rgba(191,90,242,0.1)\'" onmouseout="this.style.background=\'\'">';
      html += '<div style="display:flex;justify-content:space-between;margin-bottom:4px">';
      html += '<span style="font-weight:600;color:#fff;font-size:0.85em">' + (idx + 1) + '. ' + item[0] + '</span>';
      html += '<span style="font-weight:700;color:#bf5af2;font-size:0.85em">€' + item[1].toFixed(0) + ' (' + perc + '%)</span>';
      html += '</div>';
      html += '<div style="background:rgba(255,255,255,0.1);height:6px;border-radius:3px;overflow:hidden">';
      html += '<div style="background:#bf5af2;height:100%;width:' + perc + '%"></div>';
      html += '</div>';
      html += '</div>';
    });
  }
  document.getElementById('condivisoTopCategorieMese').innerHTML = html;
}

function aggiornaCondivisoAnnuale() {
  document.getElementById('condivisoAnnoCorrente').textContent = condivisoAnno;
  
  var tue = 0, sue = 0;
  var anticipiPartnerAnno = 0; // NUOVO: Anticipi dell'anno
  var perMese = [];
  for (var m = 0; m < 12; m++) {
    perMese[m] = { tue: 0, sue: 0, daRec: 0, anticipi: 0 };
  }
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === condivisoAnno) {
      var imp = parseFloat(t.importo) || 0;
      var m = d.getMonth();
      var chiHaPagato = t.chiHaPagato || 'user';

      // Somma anticipi per anno e per mese
      if (t.anticipoPartner && t.anticipoPartner > 0) {
        var anticipo = parseFloat(t.anticipoPartner);
        if (chiHaPagato === 'user') {
          anticipiPartnerAnno += anticipo;
          perMese[m].anticipi += anticipo;
        } else {
          anticipiPartnerAnno -= anticipo;
          perMese[m].anticipi -= anticipo;
        }
      }

      if (t.tipo === 'expense' && t.condiviso && !t.virtualRecovery) {
        // Spesa condivisa - controlla chi ha pagato
        if (chiHaPagato === 'partner') {
          sue += imp;
          perMese[m].sue += imp;
        } else {
          tue += imp;
          perMese[m].tue += imp;
        }
      } else if (t.tipo === 'partner_payment' && t.condiviso && !t.virtualRecovery) {
        // BACKWARD COMPAT: vecchio sistema
        sue += imp;
        perMese[m].sue += imp;
      }
    }
  });
  
  // MODIFICATO: AGGIUNGI anticipi per mese e totale anno
  perMese.forEach(function(m) { m.daRec = (m.tue - m.sue) / 2 + m.anticipi; });
  var daRecAnno = (tue - sue) / 2 + anticipiPartnerAnno;
  
  document.getElementById('condivisoTueAnno').textContent = formatEuro(tue);
  document.getElementById('condivisoTueMediaAnno').textContent = formatEuro(tue / 12);
  document.getElementById('condivisoSueAnno').textContent = formatEuro(sue);
  document.getElementById('condivisoSueMediaAnno').textContent = formatEuro(sue / 12);
  document.getElementById('condivisoDaRecAnno').textContent = formatEuro(Math.abs(daRecAnno));
  
  // Grafico Trend
  var isDark = document.body.classList.contains('dark');
  if (condivisoTrendChart) condivisoTrendChart.destroy();
  var ctx = document.getElementById('condivisoTrendChart').getContext('2d');
  condivisoTrendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'],
      datasets: [
        {
          label: 'Tue Condivise',
          data: perMese.map(function(m) { return m.tue; }),
          borderColor: '#2196f3',
          backgroundColor: 'rgba(33,150,243,0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 3
        },
        {
          label: 'Sue Condivise',
          data: perMese.map(function(m) { return m.sue; }),
          borderColor: '#9c27b0',
          backgroundColor: 'rgba(156,39,176,0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true, position: 'top' },
        tooltip: {
          callbacks: {
            label: function(ctx) { return ctx.dataset.label + ': €' + ctx.parsed.y.toFixed(0); }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { callback: function(v) { return '€' + v; }, color: isDark ? '#999' : '#666' },
          grid: { color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }
        },
        x: { ticks: { color: isDark ? '#999' : '#666' }, grid: { display: false } }
      }
    }
  });
  
  // Storico Mensile con design a card
  var mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  var html = '<div style="display:grid;gap:12px">';
  
  var hasData = false;
  perMese.forEach(function(m, idx) {
    if (m.tue > 0 || m.sue > 0) {
      hasData = true;
      var color = m.daRec > 0 ? '#27ae60' : (m.daRec < 0 ? '#e74c3c' : '#9e9e9e');
      var bgGradient = m.daRec > 0 
        ? 'linear-gradient(135deg, #e8f5e9, #c8e6c9)'
        : (m.daRec < 0 ? 'linear-gradient(135deg, #ffebee, #ffcdd2)' : 'linear-gradient(135deg, #f5f5f5, #e0e0e0)');
      var icon = m.daRec > 0 ? '💰' : (m.daRec < 0 ? '💸' : '✅');
      var label = m.daRec > 0 ? 'Partner ti deve' : (m.daRec < 0 ? 'Tu devi a Partner' : 'Pari');
      
      html += '<div style="background:' + bgGradient + ';border-radius:12px;padding:16px;border:2px solid ' + color + '">';
      
      // Header con mese e icona
      html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">';
      html += '<h4 style="margin:0;font-size:1.1em;color:#333">' + mesiNomi[idx] + '</h4>';
      html += '<span style="font-size:1.5em">' + icon + '</span>';
      html += '</div>';
      
      // Spese una sopra l'altra
      html += '<div style="display:grid;grid-template-columns:1fr;gap:8px;margin-bottom:12px">';
      
      html += '<div style="background:rgba(255,255,255,0.7);padding:10px;border-radius:8px;text-align:center">';
      html += '<div style="font-size:0.75em;color:#1976d2;font-weight:600;margin-bottom:4px">💳 Tu</div>';
      html += '<div style="font-size:1.2em;font-weight:800;color:#1565c0">€' + m.tue.toFixed(0) + '</div>';
      html += '</div>';
      
      html += '<div style="background:rgba(255,255,255,0.7);padding:10px;border-radius:8px;text-align:center">';
      html += '<div style="font-size:0.75em;color:#7b1fa2;font-weight:600;margin-bottom:4px">👤 Partner</div>';
      html += '<div style="font-size:1.2em;font-weight:800;color:#6a1b9a">€' + m.sue.toFixed(0) + '</div>';
      html += '</div>';
      
      html += '</div>';
      
      // Risultato
      html += '<div style="text-align:center;padding:10px;background:rgba(255,255,255,0.8);border-radius:8px">';
      html += '<div style="font-size:0.75em;color:#666;font-weight:600;margin-bottom:4px">' + label + '</div>';
      html += '<div style="font-size:1.4em;font-weight:900;color:' + color + '">';
      html += (m.daRec > 0 ? '+' : '') + '€' + Math.abs(m.daRec).toFixed(0);
      html += '</div>';
      html += '</div>';
      
      html += '</div>';
    }
  });
  
  if (!hasData) {
    html += '<div style="text-align:center;padding:40px;color:#999;font-size:1.1em">📭 Nessuna spesa condivisa quest\'anno</div>';
  }
  
  html += '</div>';
  document.getElementById('condivisoStoricoAnno').innerHTML = html;
}

function aggiornaCondivisoTotale() {
  var tue = 0, sue = 0;
  var prima = null, ultima = null;
  var perMese = {};
  var categorie = {};
  var virtualRecoveryTu = 0, virtualRecoveryPartner = 0;
  var prestiti = 0;
  var anticipiPartner = 0; // NUOVO: Totale anticipi per il partner
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    var imp = parseFloat(t.importo) || 0;
    var chiHaPagato = t.chiHaPagato || 'user';

    // NUOVO: Somma gli anticipi partner
    if (t.anticipoPartner && t.anticipoPartner > 0) {
      if (chiHaPagato === 'user') {
        anticipiPartner += parseFloat(t.anticipoPartner);
      } else {
        anticipiPartner -= parseFloat(t.anticipoPartner);
      }
    }

    if (t.tipo === 'expense' && t.condiviso && !t.virtualRecovery) {
      // Spesa condivisa - controlla chi ha pagato
      if (chiHaPagato === 'partner') {
        // Partner ha pagato questa spesa condivisa
        sue += imp;
        if (!prima || d < prima) prima = d;
        if (!ultima || d > ultima) ultima = d;
        var key = d.getFullYear() + '-' + (d.getMonth() + 1);
        perMese[key] = perMese[key] || { tue: 0, sue: 0 };
        perMese[key].sue += imp;
      } else {
        // Utente ha pagato questa spesa condivisa
        tue += imp;
        if (!prima || d < prima) prima = d;
        if (!ultima || d > ultima) ultima = d;
        var key = d.getFullYear() + '-' + (d.getMonth() + 1);
        perMese[key] = perMese[key] || { tue: 0, sue: 0 };
        perMese[key].tue += imp;
      }
      categorie[t.categoria] = (categorie[t.categoria] || 0) + imp;
    } else if (t.tipo === 'expense' && t.virtualRecovery) {
      if (chiHaPagato === 'user') {
        virtualRecoveryTu += imp;
      } else {
        virtualRecoveryPartner += imp;
      }
    } else if (t.tipo === 'partner_payment' && t.condiviso && !t.virtualRecovery) {
      // BACKWARD COMPAT: vecchio sistema partner_payment
      sue += imp;
      if (!prima || d < prima) prima = d;
      if (!ultima || d > ultima) ultima = d;
      var key = d.getFullYear() + '-' + (d.getMonth() + 1);
      perMese[key] = perMese[key] || { tue: 0, sue: 0 };
      perMese[key].sue += imp;
      categorie[t.categoria] = (categorie[t.categoria] || 0) + imp;
    } else if (t.tipo === 'partner_payment' && t.virtualRecovery) {
      virtualRecoveryPartner += imp;
    } else if (t.tipo === 'partner_payment' && !t.condiviso) {
      prestiti += imp;
    } else if (t.tipo === 'income' && t.rimborsoPartner) {
      // Rimborso dal partner tramite entrata - RIDUCE suo debito
      virtualRecoveryPartner += imp;
    }
  });

  var tot = tue + sue;
  var daRecBase = (tue - sue) / 2;

  // SALDO INIZIALE: Debito pre-esistente del partner (prima dell'inizio tracking)
  var saldoIniziale = (DB.splitwise && DB.splitwise.saldoIniziale) ? parseFloat(DB.splitwise.saldoIniziale) : 0;

  // CALCOLO FINALE: base + anticipi + saldo iniziale - prestiti + virtual recovery
  var daRecReale = daRecBase - prestiti + virtualRecoveryTu - virtualRecoveryPartner + anticipiPartner + saldoIniziale;

  console.log('[CONDIVISO] Anticipi partner totali: €' + anticipiPartner.toFixed(2));
  console.log('[CONDIVISO] Saldo iniziale (pre-tracking): €' + saldoIniziale.toFixed(2));
  console.log('[CONDIVISO] Saldo da recuperare: €' + daRecReale.toFixed(2));
  
  var mesiNomi = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
  if (prima) {
    var txt = mesiNomi[prima.getMonth()] + ' ' + prima.getFullYear();
    if (ultima && (ultima.getTime() !== prima.getTime())) {
      txt += ' - ' + mesiNomi[ultima.getMonth()] + ' ' + ultima.getFullYear();
    }
    document.getElementById('condivisoPeriodoTotale').textContent = '(' + txt + ')';
  }
  
  document.getElementById('condivisoTueTotale').textContent = formatEuro(tue);
  document.getElementById('condivisoSueTotale').textContent = formatEuro(sue);
  document.getElementById('condivisoTotaleTotale').textContent = formatEuro(tot);
  document.getElementById('condivisoQuotaTotale').textContent = formatEuro(tot / 2);
  document.getElementById('condivisoDaRecTotale').textContent = formatEuro(Math.abs(daRecReale));
  
  var expl = document.getElementById('condivisoDaRecTotaleExpl');
  if (daRecReale > 0.01) {
    document.getElementById('condivisoDaRecTotale').style.color = '#fff';
    expl.textContent = 'Lei ti deve dall\'inizio';
  } else if (daRecReale < -0.01) {
    document.getElementById('condivisoDaRecTotale').style.color = '#fff';
    expl.textContent = 'Tu le devi dall\'inizio';
  } else {
    document.getElementById('condivisoDaRecTotale').style.color = '#fff';
    expl.textContent = 'Bilancio in pareggio';
  }
  
  // Grafico Evoluzione
  var sorted = Object.keys(perMese).sort();
  var cumulativo = [];
  var cum = 0;
  sorted.forEach(function(key) {
    cum += (perMese[key].tue - perMese[key].sue) / 2;
    cumulativo.push({ mese: key, val: cum });
  });
  
  var isDark = document.body.classList.contains('dark');
  if (condivisoEvoluzioneChart) condivisoEvoluzioneChart.destroy();
  var ctx = document.getElementById('condivisoEvoluzioneChart').getContext('2d');
  condivisoEvoluzioneChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: cumulativo.map(function(c) { return c.mese; }),
      datasets: [{
        label: 'Da Recuperare Cumulativo',
        data: cumulativo.map(function(c) { return c.val; }),
        borderColor: '#a1a1aa',
        backgroundColor: 'rgba(102,126,234,0.2)',
        fill: true,
        tension: 0.4,
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) { return 'Saldo: €' + ctx.parsed.y.toFixed(2); }
          }
        }
      },
      scales: {
        y: {
          ticks: { callback: function(v) { return '€' + v; }, color: isDark ? '#999' : '#666' },
          grid: { color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }
        },
        x: { ticks: { color: isDark ? '#999' : '#666' }, grid: { display: false } }
      }
    }
  });
  
  // Top Categorie
  var sortedCat = Object.entries(categorie).sort(function(a,b) { return b[1] - a[1]; }).slice(0, 15);
  var colors = sortedCat.map(function(c, i) {
    var intensity = 1 - (i / sortedCat.length * 0.6);
    return 'rgba(' + Math.round(102*intensity+153*(1-intensity)) + ',' + Math.round(126*intensity+100*(1-intensity)) + ',234,0.8)';
  });
  
  if (condivisoTopCategorieChart) condivisoTopCategorieChart.destroy();
  var ctx2 = document.getElementById('condivisoTopCategorieChart').getContext('2d');
  condivisoTopCategorieChart = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: sortedCat.map(function(c) { return c[0]; }),
      datasets: [{
        data: sortedCat.map(function(c) { return c[1]; }),
        backgroundColor: colors,
        borderColor: colors.map(function(c) { return c.replace('0.8)', '1)'); }),
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(ctx) { 
              var perc = ((ctx.parsed.x / tot) * 100).toFixed(1);
              return ' €' + ctx.parsed.x.toFixed(0) + ' (' + perc + '%)';
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: { callback: function(v) { return '€' + (v >= 1000 ? (v/1000).toFixed(1) + 'k' : v); }, color: isDark ? '#999' : '#666' },
          grid: { color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }
        },
        y: { ticks: { color: isDark ? '#eee' : '#2c3e50' }, grid: { display: false } }
      }
    }
  });
  
  // Storico Completo con design timeline visivo
  var html = '<div style="position:relative;padding-left:50px">';
  
  // Linea timeline verticale
  html += '<div style="position:absolute;left:24px;top:30px;bottom:30px;width:4px;background:linear-gradient(180deg,#a1a1aa,#71717a);border-radius:2px;opacity:0.3"></div>';
  
  sorted.forEach(function(key, idx) {
    var m = perMese[key];
    var daRecMese = (m.tue - m.sue) / 2;
    var cumVal = cumulativo[idx].val;
    
    var colorMese = daRecMese > 0 ? '#27ae60' : (daRecMese < 0 ? '#e74c3c' : '#9e9e9e');
    var colorCum = cumVal > 0 ? '#27ae60' : (cumVal < 0 ? '#e74c3c' : '#9e9e9e');
    var iconMese = daRecMese > 0 ? '💰' : (daRecMese < 0 ? '💸' : '✅');
    var bgCard = '#fff';
    
    html += '<div style="position:relative;margin-bottom:20px;background:' + bgCard + ';border-radius:14px;padding:18px;border:3px solid ' + colorCum + ';box-shadow:0 4px 12px rgba(0,0,0,0.1);transition:all 0.3s" onmouseover="this.style.transform=\'translateX(5px)\';this.style.boxShadow=\'0 6px 20px rgba(0,0,0,0.15)\'" onmouseout="this.style.transform=\'\';this.style.boxShadow=\'0 4px 12px rgba(0,0,0,0.1)\'">';
    
    // Punto sulla timeline
    html += '<div style="position:absolute;left:-42px;top:24px;width:30px;height:30px;background:' + colorCum + ';border-radius:50%;border:5px solid #fff;box-shadow:0 2px 10px rgba(0,0,0,0.2);display:flex;align-items:center;justify-content:center;font-size:0.8em;font-weight:900;color:#fff">' + (idx + 1) + '</div>';
    
    // Header: Data e icona
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">';
    html += '<div>';
    html += '<h4 style="margin:0;font-size:1.15em;color:#a1a1aa;font-weight:800">' + key + '</h4>';
    html += '<div style="font-size:0.75em;color:#999;margin-top:3px">Progressione #' + (idx + 1) + '</div>';
    html += '</div>';
    html += '<span style="font-size:2em">' + iconMese + '</span>';
    html += '</div>';
    
    // Spese del mese in grid
    html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:14px">';
    
    html += '<div style="background:linear-gradient(135deg,#e3f2fd,#bbdefb);padding:12px;border-radius:10px;text-align:center;border:2px solid #2196f3">';
    html += '<div style="font-size:0.7em;color:#1976d2;margin-bottom:4px;font-weight:700">💳 TU</div>';
    html += '<div style="font-size:1.1em;font-weight:900;color:#1565c0">€' + m.tue.toFixed(0) + '</div>';
    html += '</div>';
    
    html += '<div style="background:linear-gradient(135deg,#f3e5f5,#e1bee7);padding:12px;border-radius:10px;text-align:center;border:2px solid #9c27b0">';
    html += '<div style="font-size:0.7em;color:#7b1fa2;margin-bottom:4px;font-weight:700">👤 LEI</div>';
    html += '<div style="font-size:1.1em;font-weight:900;color:#6a1b9a">€' + m.sue.toFixed(0) + '</div>';
    html += '</div>';
    
    var deltaBg = daRecMese > 0 ? 'linear-gradient(135deg,#e8f5e9,#c8e6c9)' : (daRecMese < 0 ? 'linear-gradient(135deg,#ffebee,#ffcdd2)' : 'linear-gradient(135deg,#f5f5f5,#e0e0e0)');
    var deltaBorder = daRecMese > 0 ? '#4caf50' : (daRecMese < 0 ? '#f44336' : '#9e9e9e');
    html += '<div style="background:' + deltaBg + ';padding:12px;border-radius:10px;text-align:center;border:2px solid ' + deltaBorder + '">';
    html += '<div style="font-size:0.7em;color:' + colorMese + ';margin-bottom:4px;font-weight:700">📊 DELTA</div>';
    html += '<div style="font-size:1.1em;font-weight:900;color:' + colorMese + '">' + (daRecMese > 0 ? '+' : '') + '€' + Math.abs(daRecMese).toFixed(0) + '</div>';
    html += '</div>';
    
    html += '</div>';
    
    // Cumulativo in grande evidenza
    var cumBg = cumVal > 0 ? 'linear-gradient(135deg,#a1a1aa,#71717a)' : (cumVal < 0 ? 'linear-gradient(135deg,#e74c3c,#c0392b)' : 'linear-gradient(135deg,#95a5a6,#7f8c8d)');
    html += '<div style="background:' + cumBg + ';padding:16px;border-radius:12px;text-align:center;box-shadow:0 4px 12px rgba(102,126,234,0.4)">';
    html += '<div style="font-size:0.75em;color:#fff;opacity:0.95;margin-bottom:6px;font-weight:700;letter-spacing:0.5px">💰 TOTALE PROGRESSIVO</div>';
    html += '<div style="font-size:1.8em;font-weight:900;color:#fff;text-shadow:0 2px 4px rgba(0,0,0,0.2)">' + (cumVal > 0 ? '+' : '') + '€' + Math.abs(cumVal).toFixed(0) + '</div>';
    html += '<div style="font-size:0.75em;color:#fff;margin-top:6px;opacity:0.9">' + (cumVal > 0 ? '✅ Lei ti deve dall\'inizio' : (cumVal < 0 ? '⚠️ Tu le devi dall\'inizio' : '✅ In pareggio')) + '</div>';
    html += '</div>';
    
    html += '</div>';
  });
  
  html += '</div>';
  
  // Legenda
  html += '<div style="margin-top:20px;padding:16px;background:linear-gradient(135deg,rgba(102,126,234,0.05),rgba(118,75,162,0.05));border-radius:12px;border:2px solid rgba(102,126,234,0.2)">';
  html += '<div style="font-weight:800;margin-bottom:8px;color:#a1a1aa">📖 Legenda:</div>';
  html += '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px;font-size:0.85em">';
  html += '<div>💰 = Lei ti deve questo mese</div>';
  html += '<div>💸 = Tu le devi questo mese</div>';
  html += '<div style="color:#27ae60;font-weight:600">● Verde = Saldo a tuo favore</div>';
  html += '<div style="color:#e74c3c;font-weight:600">● Rosso = Saldo a suo favore</div>';
  html += '</div>';
  html += '</div>';
  
  document.getElementById('condivisoStoricoCompleto').innerHTML = html;
}

function cambiaCondivisoMese(delta) {
  condivisoMese += delta;
  if (condivisoMese < 0) { condivisoMese = 11; condivisoAnno--; }
  if (condivisoMese > 11) { condivisoMese = 0; condivisoAnno++; }
  
  // Sincronizza con data globale
  anno = condivisoAnno;
  mese = condivisoMese;
  
  aggiornaCondivisoMensile();
  aggiornaCondivisoMeseDisplay();
  aggiornaBottoniOggi();
  playSound('click');
}

function vaiOggiCondiviso() {
  var oggi = new Date();
  condivisoAnno = oggi.getFullYear();
  condivisoMese = oggi.getMonth();
  
  // Sincronizza con data globale
  anno = condivisoAnno;
  mese = condivisoMese;
  
  aggiornaCondivisoMensile();
  aggiornaCondivisoMeseDisplay();
  aggiornaBottoniOggi();
  playSound('click');
}

function aggiornaCondivisoMeseDisplay() {
  var mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  var elem = document.getElementById('condivisoMeseDisplay');
  if (elem) {
    elem.textContent = mesiNomi[condivisoMese] + ' ' + condivisoAnno;
  }
}

function toggleCondiviso() {
  var content = document.getElementById('condivisoContent');
  var icon = document.getElementById('condivisoToggleIcon');
  
  if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    // Chiudi
    content.style.maxHeight = '0px';
    icon.style.transform = 'rotate(-90deg)';
  } else {
    // Apri
    content.style.maxHeight = content.scrollHeight + 'px';
    icon.style.transform = 'rotate(0deg)';
  }
  playSound('click');
}


// ========== GESTIONE ANNI ==========
function aggAnni() {
  var sel = document.getElementById('year');
  sel.innerHTML = '';
  for (var y = 2020; y <= 2099; y++) {
    var o = document.createElement('option');
    o.value = y;
    o.textContent = y;
    if (y === anno) o.selected = true;
    sel.appendChild(o);
  }
}

// ========== DASHBOARD PRINCIPALE ==========
function aggiorna() {
  var yearSelect = document.getElementById('year');
  var monthSelect = document.getElementById('month');
  
  if (!yearSelect || !monthSelect) {
    // Elementi non ancora disponibili, ritenta dopo
    setTimeout(aggiorna, 100);
    return;
  }
  
  anno = parseInt(yearSelect.value);
  mese = parseInt(monthSelect.value);
  
  // Sincronizza Condiviso con data globale
  condivisoAnno = anno;
  condivisoMese = mese;
  
  // Se siamo nella sezione Condiviso, aggiorna subito
  if (currentSection === 'condiviso') {
    aggiornaCondivisoMensile();
  }
  
  // INIZIA DAL PATRIMONIO ATTUALE (tutti i conti)
  var pat = calcolaPatrimonioTotale();
  var ent = 0, usc = 0, partnerPaid = 0;
  var dist = {};
  var trend = { 
    entrate: [0,0,0,0,0,0,0,0,0,0,0,0], 
    uscite: [0,0,0,0,0,0,0,0,0,0,0,0] 
  };
  
  // NON MODIFICARE pat - è già corretto dal saldo reale dei conti
  // Calcola solo ent/usc per il mese corrente
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    var imp = parseFloat(t.importo) || 0;
    
    if (t.tipo === 'income') {
      if (d.getFullYear() === anno) {
        trend.entrate[d.getMonth()] += imp;
        if (d.getMonth() === mese) ent += imp;
      }
    } else if (t.tipo === 'partner_payment') {
      // Lei paga - NON influenza patrimonio, entrate o uscite
      // Popola solo dist per le statistiche categorie (SOLO spese condivise, no prestiti)
      if (d.getFullYear() === anno && d.getMonth() === mese && t.condiviso && !t.virtualRecovery) {
        partnerPaid += imp;
        // Conta la tua metà delle spese condivise
        var importoDaContare = splitAmount(imp);
        dist[t.categoria] = (dist[t.categoria] || 0) + importoDaContare;
      }
    } else if (t.tipo === 'expense') {
      // Spesa normale o condivisa
      if (d.getFullYear() === anno) {
        // Trend: esclude recuperi virtuali
        if (!t.virtualRecovery) {
          trend.uscite[d.getMonth()] += imp;
        }
        if (d.getMonth() === mese) {
          // STATISTICHE: Esclude recuperi virtuali
          if (!t.virtualRecovery) {
            // Se condiviso, conta solo la tua metà
            if (t.condiviso) {
              var tuaMetà = splitAmount(imp);
              dist[t.categoria] = (dist[t.categoria] || 0) + tuaMetà;
            } else {
              // Non condiviso: conta tutto
              dist[t.categoria] = (dist[t.categoria] || 0) + imp;
            }
          }
        }
      }
    }
  });
  
  document.getElementById('pat').textContent = formatEuro(pat);
  document.getElementById('ent').textContent = formatEuro(ent);
  
  // DASHBOARD: Calcola le uscite REALI dal conto (soldi fisicamente usciti)
  var usciteReali = 0;
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese && t.tipo === 'expense' && !t.virtualRecovery) {
      usciteReali += parseFloat(t.importo) || 0;
    }
  });
  
  document.getElementById('usc').textContent = formatEuro(usciteReali);
  var saldo = ent - usciteReali;
  document.getElementById('saldo').textContent = formatEuro(saldo);
  
  // FINANZE: Calcola COSTO REALE (spese effettive: tue spese + tua metà condivise + debiti virtuali)
  var usciteEffettive = 0;
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese) {
      var imp = parseFloat(t.importo) || 0;
      var chiHaPagato = t.chiHaPagato || 'user';

      if (t.tipo === 'expense') {
        if (t.virtualRecovery) {
          // Recupero virtuale: se TU dai al partner = è una TUA spesa (hai "consumato" quel valore)
          if (chiHaPagato === 'user') {
            usciteEffettive += imp;
          }
        } else if (t.condiviso) {
          // Spesa condivisa: conta solo la tua metà
          usciteEffettive += splitAmount(imp);
        } else {
          // Spesa non condivisa: conta tutto
          usciteEffettive += imp;
        }
      } else if (t.tipo === 'partner_payment' && t.condiviso && !t.virtualRecovery) {
        // Partner ha pagato spesa condivisa: la TUA metà è una TUA spesa
        usciteEffettive += splitAmount(imp);
      }
    }
  });
  
  // Usa usciteEffettive per le STATISTICHE e Finanze
  usc = usciteEffettive;
  
  // Calcola spese condivise e quanto ha pagato lei - TUTTI I MESI (non solo quello corrente)
  var speseCondivise = 0;
  var leiHaPagatoCondiviso = 0;
  var leiHaPagatoNonCondiviso = 0; // Prestiti
  var recuperiVirtualiTuPaghi = 0; // Tu dai virtualmente a lei (AUMENTA suo debito)
  var recuperiVirtualiLeiPaga = 0; // Lei ti dà virtualmente (RIDUCE suo debito)
  var anticipiPartnerTotali = 0; // NUOVO: Anticipi per il partner
  
  var userName = DB.config && DB.config.userName ? DB.config.userName : 'Michal';
  var partnerName = DB.config && DB.config.partnerName ? DB.config.partnerName : 'Matilde';
  
  DB.transazioni.forEach(function(t) {
    // RIMUOVO IL FILTRO PER MESE - considera TUTTE le transazioni
    
    // NUOVO: Gestione con chiHaPagato
    if (t.tipo === 'expense') {
      if (t.condiviso && !t.virtualRecovery) {
        // Spesa condivisa
        var importoTotale = t.importoOriginale || t.importo;
        speseCondivise += parseFloat(importoTotale) || 0;
        
        // Chi ha pagato?
        var chiHaPagato = t.chiHaPagato || 'user';
        
        if (chiHaPagato === 'partner') {
          // Partner ha pagato questa spesa condivisa
          leiHaPagatoCondiviso += parseFloat(importoTotale) || 0;
        }
        
        // PAGAMENTO MISTO: Se partner ha pagato differenza
        if (t.pagamentoMisto && t.metodiPagamento) {
          t.metodiPagamento.forEach(function(metodo) {
            if (metodo.pagatoDa === 'partner') {
              // Partner ha pagato questa parte
              leiHaPagatoCondiviso += parseFloat(metodo.importo) || 0;
            }
          });
        }
      } else if (t.virtualRecovery) {
        // Recupero virtuale
        var chiHaPagato = t.chiHaPagato || 'user';
        if (chiHaPagato === 'user') {
          // Tu le dai virtualmente - AUMENTA suo debito
          recuperiVirtualiTuPaghi += parseFloat(t.importo) || 0;
        } else {
          // Lei ti dà virtualmente - RIDUCE suo debito
          recuperiVirtualiLeiPaga += parseFloat(t.importo) || 0;
        }
      }
      
      // ANTICIPO: Chi ha anticipato per chi?
      if (t.anticipoPartner && t.anticipoPartner > 0) {
        var chiHaPagato = t.chiHaPagato || 'user';
        if (chiHaPagato === 'user') {
          // Tu hai anticipato per lei - AUMENTA suo debito
          anticipiPartnerTotali += parseFloat(t.anticipoPartner);
        } else {
          // Lei ha anticipato per te - RIDUCE suo debito
          anticipiPartnerTotali -= parseFloat(t.anticipoPartner);
        }
      }
    } else if (t.tipo === 'partner_payment') {
      // BACKWARD COMPATIBILITY: vecchio sistema
      var imp = parseFloat(t.importo) || 0;
      if (t.virtualRecovery) {
        recuperiVirtualiLeiPaga += imp;
      } else if (t.condiviso) {
        leiHaPagatoCondiviso += imp;
      } else {
        leiHaPagatoNonCondiviso += imp;
      }
    } else if (t.tipo === 'income' && t.rimborsoPartner) {
      // NUOVO: Rimborso dal partner - RIDUCE suo debito
      var imp = parseFloat(t.importo) || 0;
      recuperiVirtualiLeiPaga += imp;
    }
  });

  // SALDO INIZIALE: Debito pre-esistente del partner (prima dell'inizio tracking)
  var saldoInizialePartner = (DB.splitwise && DB.splitwise.saldoIniziale) ? parseFloat(DB.splitwise.saldoIniziale) : 0;

  // Da recuperare = metà spese totali - tutto ciò che lei ha pagato (perché quando lei paga, TU le devi la TUA metà)
  // Formula: (tutte le spese / 2) - (spese pagate da lei) - (prestiti) + (virtual tu) - (virtual lei) + (anticipi) + (saldo iniziale)
  var daRecuperare = splitAmount(speseCondivise) - leiHaPagatoCondiviso - leiHaPagatoNonCondiviso + recuperiVirtualiTuPaghi - recuperiVirtualiLeiPaga + anticipiPartnerTotali + saldoInizialePartner;

  console.log('[DASHBOARD] Spese condivise totali: €' + speseCondivise.toFixed(2));
  console.log('[DASHBOARD] Partner ha pagato (condiviso): €' + leiHaPagatoCondiviso.toFixed(2));
  console.log('[DASHBOARD] Anticipi netti: €' + anticipiPartnerTotali.toFixed(2));
  console.log('[DASHBOARD] Saldo iniziale partner: €' + saldoInizialePartner.toFixed(2));
  console.log('[DASHBOARD] Saldo da recuperare: €' + daRecuperare.toFixed(2));
  
  // Arrotonda il risultato finale a 2 decimali
  daRecuperare = Math.round(daRecuperare * 100) / 100;
  
  var leiHaPagatoTotale = leiHaPagatoCondiviso + leiHaPagatoNonCondiviso;
  
  // Aggiorna le metriche condivise
  if (document.getElementById('leiHaPagato')) {
    document.getElementById('leiHaPagato').textContent = formatEuro(leiHaPagatoTotale);
  }
  if (document.getElementById('speseCondivise')) {
    var totaleCondiviso = speseCondivise + leiHaPagatoCondiviso;
    document.getElementById('speseCondivise').textContent = formatEuro(totaleCondiviso);
  }
  if (document.getElementById('daRecuperare')) {
    // Mostra sempre il valore assoluto con il segno nel testo
    var valoreMostrato = Math.abs(daRecuperare);
    document.getElementById('daRecuperare').textContent = formatEuro(valoreMostrato);
    
    var colorRecuperare = '#f39c12'; // Default giallo
    var labelText = '✅ Pari';
    var labelIcon = '✅';
    
    if (daRecuperare > 0.01) {
      // Lei ti deve soldi
      colorRecuperare = '#27ae60'; // Verde
      labelText = '💰 Da Recuperare';
      labelIcon = '💰';
    } else if (daRecuperare < -0.01) {
      // Tu le devi soldi
      colorRecuperare = '#e74c3c'; // Rosso
      labelText = '💸 Da Rimborsare';
      labelIcon = '💸';
    }
    
    // NON cambiare colore cifra - resta bianco per contrasto su sfondo colorato
    // document.getElementById('daRecuperare').style.color = colorRecuperare;
    
    // Aggiorna anche l'etichetta vecchia (se esiste)
    if (document.getElementById('daRecuperareLabel')) {
      document.getElementById('daRecuperareLabel').textContent = labelText;
      document.getElementById('daRecuperareLabel').style.color = colorRecuperare;
    }
    
    // Aggiorna etichetta Bilancio Cumulativo
    if (document.getElementById('daRecuperareCumulativoLabel')) {
      document.getElementById('daRecuperareCumulativoLabel').textContent = labelIcon + ' ' + (daRecuperare > 0.01 ? 'Da Recuperare TOTALE' : daRecuperare < -0.01 ? 'Da Rimborsare TOTALE' : 'In Pareggio');
    }
    
    // Aggiorna sfondo card cumulativo
    if (document.getElementById('daRecuperareCumulativoCard')) {
      var cardCumulativo = document.getElementById('daRecuperareCumulativoCard');
      if (daRecuperare > 0.01) {
        cardCumulativo.style.background = 'linear-gradient(135deg,#27ae60,#229954)';
      } else if (daRecuperare < -0.01) {
        cardCumulativo.style.background = 'linear-gradient(135deg,#e74c3c,#c0392b)';
      } else {
        cardCumulativo.style.background = 'linear-gradient(135deg,#95a5a6,#7f8c8d)';
      }
    }
  }
  
  // ========== CALCOLA METRICHE CONDIVISE MENSILI ==========
  var tueSpeseCondiviseMese = 0;
  var sueSpeseCondiviseMese = 0;
  var tueSpeseCondiviseCount = 0;
  var sueSpeseCondiviseCount = 0;
  var virtualRecoveryTuMese = 0;
  var virtualRecoveryPartnerMese = 0;
  var prestitiMese = 0;
  var anticipiMese = 0;

  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese) {
      var imp = parseFloat(t.importo) || 0;
      var chiHaPagatoTrans = t.chiHaPagato || 'user';

      // Spese condivise - distingui in base a chi ha pagato
      if (t.tipo === 'expense' && t.condiviso && !t.virtualRecovery) {
        if (chiHaPagatoTrans === 'partner') {
          // Partner ha pagato questa spesa condivisa
          sueSpeseCondiviseMese += imp;
          sueSpeseCondiviseCount++;
        } else {
          // Utente ha pagato questa spesa condivisa
          tueSpeseCondiviseMese += imp;
          tueSpeseCondiviseCount++;
        }
      } else if (t.tipo === 'expense' && t.virtualRecovery) {
        virtualRecoveryTuMese += imp;
      } else if (t.tipo === 'partner_payment' && t.condiviso && !t.virtualRecovery) {
        sueSpeseCondiviseMese += imp;
        sueSpeseCondiviseCount++;
      } else if (t.tipo === 'partner_payment' && t.virtualRecovery) {
        virtualRecoveryPartnerMese += imp;
      } else if (t.tipo === 'partner_payment' && !t.condiviso) {
        prestitiMese += imp;
      } else if (t.tipo === 'income' && t.rimborsoPartner) {
        virtualRecoveryPartnerMese += imp;
      }
      // Anticipi
      if (t.anticipoPartner && t.anticipoPartner > 0) {
        if (chiHaPagatoTrans === 'user') {
          anticipiMese += parseFloat(t.anticipoPartner);
        } else {
          anticipiMese -= parseFloat(t.anticipoPartner);
        }
      }
    }
  });

  var totaleCondivisoMese = tueSpeseCondiviseMese + sueSpeseCondiviseMese;
  // Calcolo completo: base + virtual recovery + anticipi - prestiti
  var daRecuperareMese = (tueSpeseCondiviseMese - sueSpeseCondiviseMese) / 2 - prestitiMese + virtualRecoveryTuMese - virtualRecoveryPartnerMese + anticipiMese;
  
  // Aggiorna UI metriche mensili
  var mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  
  if (document.getElementById('sharedMonth')) {
    document.getElementById('sharedMonth').textContent = mesiNomi[mese] + ' ' + anno;
  }
  
  if (document.getElementById('tueSpeseCondiviseMese')) {
    document.getElementById('tueSpeseCondiviseMese').textContent = formatEuro(tueSpeseCondiviseMese);
  }
  if (document.getElementById('tueSpeseCondiviseCount')) {
    document.getElementById('tueSpeseCondiviseCount').textContent = tueSpeseCondiviseCount + ' transazioni';
  }
  
  if (document.getElementById('sueSpeseCondiviseMese')) {
    document.getElementById('sueSpeseCondiviseMese').textContent = formatEuro(sueSpeseCondiviseMese);
  }
  if (document.getElementById('sueSpeseCondiviseCount')) {
    document.getElementById('sueSpeseCondiviseCount').textContent = sueSpeseCondiviseCount + ' transazioni';
  }
  
  if (document.getElementById('totaleCondivisoMese')) {
    document.getElementById('totaleCondivisoMese').textContent = formatEuro(totaleCondivisoMese);
  }
  
  if (document.getElementById('daRecuperareMese')) {
    var valoreMese = Math.abs(daRecuperareMese);
    document.getElementById('daRecuperareMese').textContent = formatEuro(valoreMese);
    
    var cardMese = document.getElementById('daRecuperareMeseCard');
    var labelMese = document.getElementById('daRecuperareMeseLabel');
    var explMese = document.getElementById('daRecuperareMeseExpl');
    
    if (daRecuperareMese > 0.01) {
      // Lei ti deve questo mese
      cardMese.style.background = 'linear-gradient(135deg,#e8f5e9,#c8e6c9)';
      cardMese.style.borderColor = '#4caf50';
      document.getElementById('daRecuperareMese').style.color = '#2e7d32';
      labelMese.textContent = '💰 Da Recuperare Mese';
      labelMese.style.color = '#2e7d32';
      explMese.textContent = 'Lei ti deve per questo mese';
      explMese.style.color = '#2e7d32';
    } else if (daRecuperareMese < -0.01) {
      // Tu le devi questo mese
      cardMese.style.background = 'linear-gradient(135deg,#ffebee,#ffcdd2)';
      cardMese.style.borderColor = '#f44336';
      document.getElementById('daRecuperareMese').style.color = '#c62828';
      labelMese.textContent = '💸 Da Rimborsare Mese';
      labelMese.style.color = '#c62828';
      explMese.textContent = 'Tu le devi per questo mese';
      explMese.style.color = '#c62828';
    } else {
      // Pari questo mese
      cardMese.style.background = 'linear-gradient(135deg,#f5f5f5,#e0e0e0)';
      cardMese.style.borderColor = '#9e9e9e';
      document.getElementById('daRecuperareMese').style.color = '#616161';
      labelMese.textContent = '✅ Pari Questo Mese';
      labelMese.style.color = '#616161';
      explMese.textContent = 'Bilancio in pareggio';
      explMese.style.color = '#616161';
    }
  }
  
  if (document.getElementById('daRecuperarePeriodo')) {
    // Calcola periodo tracking
    var primaData = null;
    DB.transazioni.forEach(function(t) {
      if (t.tipo === 'expense' && t.condiviso || t.tipo === 'partner_payment' && t.condiviso) {
        var d = new Date(t.data);
        if (!primaData || d < primaData) primaData = d;
      }
    });
    
    if (primaData) {
      var mesePrima = mesiNomi[primaData.getMonth()];
      var annoPrima = primaData.getFullYear();
      document.getElementById('daRecuperarePeriodo').textContent = 'Da ' + mesePrima + ' ' + annoPrima;
    }
  }
  
  // TUTTE LE SPESE - SEZIONE RIMOSSA DALLA DASHBOARD
  /*
  var allExpenses = Object.entries(dist).sort(function(a,b) { return b[1] - a[1]; });
  var topHtml = '';
  if (allExpenses.length === 0) {
    topHtml = '<div class="empty">✨ Nessuna spesa registrata questo mese</div>';
  } else {
    var totalSpese = allExpenses.reduce(function(sum, item) { return sum + item[1]; }, 0);
    topHtml += '<div style="max-height:400px;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;padding:4px">';
    allExpenses.forEach(function(item) {
      var cat = item[0];
      var amount = item[1];
      var percent = totalSpese > 0 ? (amount / totalSpese * 100) : 0;
      topHtml += '<div class="top-expense" style="margin-bottom:16px;box-shadow:0 3px 10px rgba(0,0,0,0.1)">';
      topHtml += '<div class="info"><div class="name">' + cat + '</div>';
      topHtml += '<div class="percent">' + percent.toFixed(1) + '% del totale</div>';
      topHtml += '<div class="progress-bar" style="margin-top:8px"><div class="progress-fill" style="width:' + Math.min(percent, 100) + '%"></div></div></div>';
      topHtml += '<div class="amount">' + formatEuro(amount) + '</div></div>';
    });
    topHtml += '</div><div style="height:2px;background:linear-gradient(to right,transparent,var(--border),transparent);margin:20px 0"></div>';
    topHtml += '<div class="metrics" style="margin-top:15px">';
    topHtml += '<div class="metric"><h4>📊 Categorie</h4><div class="val" style="color:var(--income)">' + allExpenses.length + '</div></div>';
    topHtml += '<div class="metric"><h4>💰 Totale</h4><div class="val" style="color:var(--expense)">' + formatEuro(totalSpese) + '</div></div>';
    topHtml += '</div>';
  }
  if (document.getElementById('topExpenses')) {
    document.getElementById('topExpenses').innerHTML = topHtml;
  }
  */
  
  // ========== CALENDAR HEATMAP ==========
  generaCalendarHeatmap(mese, anno);
  
  // ========== GRAFICO SPESE VS ENTRATE ULTIMI 6 MESI ==========
  generaGraficoConfronto6Mesi();
  
  
  // Aggiorna anche le altre sezioni se sono attive
  if (currentSection === 'finanze') { aggiornaFinanzeDateHeader(); aggiornaRisparmio(); mostraAnalisi(); calcolaPrevisioni(); aggiornaEvoluzione(); }
  if (currentSection === 'trans') mostraTrans();
  if (currentSection === 'calendario') mostraCalendario();
  if (currentSection === 'obiettivi') { aggiornaObiettiviDateHeader(); aggiornaInvestimenti(); } // Aggiorna investimenti quando sei nella sezione obiettivi
  
  // Mostra alert nella dashboard
  mostraAlertDashboard();
  
  aggiornaLiquidita();
  aggiornaComposizioneConti(); // NUOVO - Aggiorna composizione conti dettagliata
  aggiornaWidget();
  
  // Aggiorna breakdown entrate (se visibile)
  if (document.getElementById('breakdownEntrateContent') && document.getElementById('breakdownEntrateContent').style.maxHeight !== '0px') {
    aggiornaBreakdownEntrate();
  }
  
  // Aggiorna widget obiettivi in dashboard
  aggiornaWidgetObiettivi();
  
  // Aggiorna stile bottoni "Oggi"
  aggiornaBottoniOggi();
  
  // NUOVO - Aggiorna visibilità campi in base a modalità
  aggiornaVisibilitaCampiModalita();
}

// ========== AGGIORNA FINANZE (nuovi select) ==========
function aggiornaFinanze() {
  try {
    var yearSelect = document.getElementById('yearFinanze');
    var monthSelect = document.getElementById('monthFinanze');
    
    if (!yearSelect || !monthSelect) return;
    
    var selectedYear = parseInt(yearSelect.value);
    var selectedMonth = parseInt(monthSelect.value);
    
    // Verifica valori validi
    if (isNaN(selectedYear) || isNaN(selectedMonth)) return;
    
    // Crea data e aggiorna vista solo se siamo nella sezione finanze
    if (currentSection === 'finanze') {
      var dataTarget = new Date(selectedYear, selectedMonth, 1);
      patrimonioMeseSelezionato = dataTarget;
      
      if (typeof aggiornaVistaPatrimonioStorico === 'function') {
        aggiornaVistaPatrimonioStorico();
      }
    }
  } catch(e) {
    console.error('Errore in aggiornaFinanze:', e);
  }
}

// ========== LIQUIDITÀ (CONTO vs CONTANTI) ==========
function aggiornaLiquidita() {
  var liquiditaConto = 0;
  var liquiditaContanti = 0;
  
  DB.transazioni.forEach(function(t) {
    var imp = parseFloat(t.importo) || 0;
    var metodo = t.metodo || 'carta';
    
    if (t.tipo === 'income') {
      // Entrata
      if (metodo === 'contanti') {
        liquiditaContanti += imp;
      } else {
        liquiditaConto += imp;
      }
    } else if (t.tipo === 'expense' && !t.virtualRecovery) {
      // Uscita (esclude recuperi virtuali)
      if (metodo === 'contanti') {
        liquiditaContanti -= imp;
      } else {
        liquiditaConto -= imp;
      }
    }
    // partner_payment non influenza la liquidità personale
  });
  
  var liquiditaTotale = liquiditaConto + liquiditaContanti;
  
  // Aggiorna widget
  if (document.getElementById('liquiditaConto')) {
    document.getElementById('liquiditaConto').textContent = formatEuro(liquiditaConto);
  }
  if (document.getElementById('liquiditaContanti')) {
    document.getElementById('liquiditaContanti').textContent = formatEuro(liquiditaContanti);
  }
  // Il totale è già aggiornato in "pat" dalla funzione aggiorna()
  // Non serve aggiornare liquiditaTotale perché usiamo "pat"
}

// ========== ANALISI UNIFICATA ==========
function mostraAnalisi() {
  console.log('=== mostraAnalisi() chiamata ===', { anno: anno, mese: mese, annoTabelle: annoTabelle });
  
  // Verifica che la sezione finanze sia visibile
  var finanzeSection = document.getElementById('finanze');
  if (finanzeSection) {
    console.log('Sezione finanze display:', finanzeSection.style.display, 'visibile:', finanzeSection.offsetParent !== null);
  } else {
    console.error('Sezione finanze non trovata!');
  }
  
  // Verifica che Chart.js sia caricato
  if (typeof Chart === 'undefined') {
    console.error('ERRORE: Chart.js non è caricato!');
    return;
  }
  
  // Verifica che gli elementi chiave esistano
  var spendingYear = document.getElementById('spendingYear');
  var analysisMese = document.getElementById('analysisMese');
  
  if (!spendingYear || !analysisMese) {
    console.error('ERRORE: Elementi analisi non trovati nel DOM!', {
      spendingYear: !!spendingYear,
      analysisMese: !!analysisMese
    });
    return;
  }
  
  var mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  
  // USA annoTabelle per Finanze (permette di cambiare anno)
  var annoCorrente = annoTabelle || anno;
  
  // Aggiorna i riferimenti all'anno
  spendingYear.textContent = annoCorrente;
  analysisMese.textContent = mesiNomi[mese] + ' ' + annoCorrente;
  
  var totaleAnnoSpese = 0;
  var totaleAnnoEntrate = 0;
  var spesePerMese = [0,0,0,0,0,0,0,0,0,0,0,0];
  var entratePerMese = [0,0,0,0,0,0,0,0,0,0,0,0];
  var categorieAnno = {};
  
  // Calcola totali anno
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === annoCorrente) {
      var imp = parseFloat(t.importo) || 0;
      var m = d.getMonth();
      
      if (t.tipo === 'expense' && !t.virtualRecovery) {
        // Se condiviso, conta solo la tua metà
        var importoEffettivo = t.condiviso ? splitAmount(imp) : imp;
        totaleAnnoSpese += importoEffettivo;
        spesePerMese[m] += importoEffettivo;
        categorieAnno[t.categoria] = (categorieAnno[t.categoria] || 0) + importoEffettivo;
      } else if (t.tipo === 'partner_payment' && t.condiviso && !t.virtualRecovery) {
        // Spesa di lei condivisa - conta solo la tua metà
        var importoDaContare = splitAmount(imp);
        totaleAnnoSpese += importoDaContare;
        spesePerMese[m] += importoDaContare;
        categorieAnno[t.categoria] = (categorieAnno[t.categoria] || 0) + importoDaContare;
      } else if (t.tipo === 'income') {
        totaleAnnoEntrate += imp;
        entratePerMese[m] += imp;
      }
    }
  });
  
  console.log('Dati calcolati mostraAnalisi:', {
    anno: anno,
    annoCorrente: annoCorrente,
    annoTabelle: annoTabelle,
    totaleAnnoSpese: totaleAnnoSpese,
    totaleAnnoEntrate: totaleAnnoEntrate,
    spesePerMese: spesePerMese,
    entratePerMese: entratePerMese,
    numTransazioni: DB.transazioni.length
  });
  
  // Aggiorna riepilogo anno
  document.getElementById('totalYearExpense').textContent = formatEuro(totaleAnnoSpese);
  document.getElementById('totalYearIncome').textContent = formatEuro(totaleAnnoEntrate);
  document.getElementById('avgMonthExpense').textContent = 'Media: ' + formatEuro(totaleAnnoSpese / 12) + '/mese';
  document.getElementById('avgMonthIncome').textContent = 'Media: ' + formatEuro(totaleAnnoEntrate / 12) + '/mese';
  
  // Calcola e aggiorna riepilogo mese corrente
  var speseMeseCorrente = spesePerMese[mese] || 0;
  var entrateMeseCorrente = entratePerMese[mese] || 0;
  
  if (document.getElementById('currentMonthExpense')) {
    document.getElementById('currentMonthExpense').textContent = formatEuro(speseMeseCorrente);
  }
  if (document.getElementById('currentMonthIncome')) {
    document.getElementById('currentMonthIncome').textContent = formatEuro(entrateMeseCorrente);
  }
  
  // Grafico confronto mensile spese
  var monthlyExpenseElement = document.getElementById('monthlyExpenseChart');
  if (!monthlyExpenseElement) {
    console.error('ERRORE: Canvas monthlyExpenseChart non trovato nel DOM!');
    console.log('Verifica: elemento finanze visibile?', document.getElementById('finanze'));
    return;
  }
  
  console.log('monthlyExpenseChart trovato, dati:', {
    spesePerMese: spesePerMese,
    sommaSpese: spesePerMese.reduce(function(a,b){return a+b}, 0)
  });
  
  var isDark = document.body.classList.contains('dark');
  if (monthlyExpenseChart) monthlyExpenseChart.destroy();
  var ctx = monthlyExpenseElement.getContext('2d');
  monthlyExpenseChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'],
      datasets: [{
        label: 'Spese Mensili',
        data: spesePerMese,
        backgroundColor: 'rgba(230,126,34,0.7)',
        borderColor: '#e67e22',
        borderWidth: 2,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: function(context) {
              return 'Spese: €' + context.parsed.y.toFixed(2);
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) { return '€' + value; },
            color: isDark ? '#999' : '#666'
          },
          grid: {
            color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
          }
        },
        x: {
          ticks: { color: isDark ? '#999' : '#666' },
          grid: { display: false }
        }
      }
    }
  });
  console.log('Grafico Confronto Spese Mensili creato con successo');
  
  // GRAFICO TREND ANNUALE ENTRATE VS USCITE (Line Chart)
  var ctxLineElement = document.getElementById('finanzeLineChart');
  if (!ctxLineElement) {
    console.error('ERRORE: Canvas finanzeLineChart non trovato nel DOM!');
    console.log('Verifica: elemento finanze visibile?', document.getElementById('finanze'));
    return;
  }
  
  console.log('finanzeLineChart trovato, dati:', {
    entratePerMese: entratePerMese,
    spesePerMese: spesePerMese,
    sommaEntrate: entratePerMese.reduce(function(a,b){return a+b}, 0),
    sommaSpese: spesePerMese.reduce(function(a,b){return a+b}, 0)
  });
  
  if (finanzeLineChart) finanzeLineChart.destroy();
  var ctxLine = ctxLineElement.getContext('2d');
  finanzeLineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
      labels: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'],
      datasets: [
        {
          label: 'Entrate',
          data: entratePerMese,
          borderColor: '#27ae60',
          backgroundColor: 'rgba(39,174,96,0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 4,
          pointHoverRadius: 6
        },
        {
          label: 'Uscite',
          data: spesePerMese,
          borderColor: '#e67e22',
          backgroundColor: 'rgba(230,126,34,0.1)',
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointRadius: 4,
          pointHoverRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index'
      },
      plugins: {
        legend: {
          position: 'top',
          labels: { 
            boxWidth: 12, 
            font: { size: 11, weight: '600' },
            padding: 10,
            color: isDark ? '#eee' : '#2c3e50'
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': €' + context.parsed.y.toFixed(2);
            }
          }
        }
      },
      scales: {
        y: { 
          beginAtZero: true,
          ticks: {
            callback: function(value) { return '€' + value; },
            color: isDark ? '#999' : '#666'
          },
          grid: {
            color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
          }
        },
        x: {
          ticks: { color: isDark ? '#999' : '#666' },
          grid: {
            color: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
          }
        }
      }
    }
  });
  console.log('Grafico Trend Annuale creato con successo');
  
  // GRAFICO TENDENZA RISPARMIO - mostra % risparmiato mese per mese
  var percentualiRisparmio = [];
  for (var m = 0; m < 12; m++) {
    if (entratePerMese[m] > 0) {
      var risparmiatoMese = entratePerMese[m] - spesePerMese[m];
      var percRisp = (risparmiatoMese / entratePerMese[m]) * 100;
      percentualiRisparmio.push(percRisp);
    } else {
      percentualiRisparmio.push(0);
    }
  }
  
  // TENDENZA RISPARMIO MENSILE - Custom Visualization
  var container = document.getElementById('savingsTrendCustom');
  if (!container) {
    console.error('ERRORE: Container savingsTrendCustom non trovato!');
  } else {
    var html = '';
    var mesiNomi = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
    
    console.log('Popolamento Tendenza Risparmio:', {
      entratePerMese: entratePerMese,
      spesePerMese: spesePerMese,
      percentualiRisparmio: percentualiRisparmio
    });
    
    var hasDati = entratePerMese.some(function(e) { return e > 0; }) || 
                   spesePerMese.some(function(s) { return s > 0; });
    
    if (!hasDati) {
      html = '<div style="text-align:center;padding:30px;color:#7f8c8d">📊 Nessun dato disponibile per l\'anno ' + annoCorrente + '</div>';
    } else {
      for (var m = 0; m < 12; m++) {
      var percRisp = percentualiRisparmio[m];
      var meseNome = mesiNomi[m];
      
      // Calcola importo risparmiato
      var risparmiato = entratePerMese[m] - spesePerMese[m];
      var importoText = risparmiato !== 0 ? formatEuro(Math.abs(risparmiato)) : '€0';
      
      // Determina colore e icona in base alla percentuale
      var color, bgColor, icon, status;
      if (percRisp >= 15) {
        color = '#27ae60';
        bgColor = 'rgba(39,174,96,0.1)';
        icon = '✅';
        status = 'Ottimo';
      } else if (percRisp >= 10) {
        color = '#f39c12';
        bgColor = 'rgba(243,156,18,0.1)';
        icon = '⚠️';
        status = 'Sufficiente';
      } else if (percRisp > 0) {
        color = '#e74c3c';
        bgColor = 'rgba(231,76,60,0.1)';
        icon = '❌';
        status = 'Basso';
      } else if (risparmiato < 0) {
        // Caso in perdita (spese > entrate)
        color = '#e74c3c';
        bgColor = 'rgba(231,76,60,0.15)';
        icon = '🔴';
        status = 'In Perdita';
      } else {
        color = '#95a5a6';
        bgColor = 'rgba(149,165,166,0.1)';
        icon = '⚪';
        status = 'N/D';
      }
      
      html += '<div style="padding:12px;background:' + bgColor + ';border-radius:10px;border:2px solid ' + color + ';text-align:center">';
      html += '<div style="font-size:0.85em;font-weight:700;color:' + color + ';margin-bottom:6px">' + meseNome + '</div>';
      html += '<div style="font-size:1.5em;margin-bottom:4px">' + icon + '</div>';
      
      // Importo risparmiato
      html += '<div style="font-size:1.1em;font-weight:800;color:' + color + ';margin-bottom:2px">' + (risparmiato < 0 ? '-' : '') + importoText + '</div>';
      
      // Percentuale
      html += '<div style="font-size:1em;font-weight:700;color:' + color + ';opacity:0.8;margin-bottom:4px">' + percRisp.toFixed(1) + '%</div>';
      
      html += '<div style="font-size:0.7em;opacity:0.8;color:' + color + '">' + status + '</div>';
      html += '</div>';
    }
    }  // Chiude il for loop e l'if hasDati
    
    container.innerHTML = html;
    console.log('Tendenza Risparmio HTML impostato, lunghezza:', html.length);
  }
  
  // Forza resize dei grafici (fix per canvas dimensioni 0x0)
  setTimeout(function() {
    if (monthlyExpenseChart) {
      monthlyExpenseChart.resize();
      console.log('monthlyExpenseChart resized');
    }
    if (finanzeLineChart) {
      finanzeLineChart.resize();
      console.log('finanzeLineChart resized');
    }
  }, 100);
  
  console.log('=== mostraAnalisi() completata ===');
  
  // Fine della funzione mostraAnalisi - rimosse sezioni non necessarie
}

// ========== SELETTORE PERIODO ==========
function mostraAlertDashboard() {
  var container = document.getElementById('dashboardAlerts');
  if (!container) return;
  
  var alerts = [];
  
  // Calcola spese del mese corrente per categoria
  var speseCategoria = {};
  var entrateMese = 0;
  var speseMese = 0;
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese) {
      var imp = parseFloat(t.importo) || 0;
      if (t.tipo === 'income') {
        entrateMese += imp;
      } else if (t.tipo === 'expense') {
        speseMese += imp;
        speseCategoria[t.categoria] = (speseCategoria[t.categoria] || 0) + imp;
      }
    }
  });
  
  // A. ALERT CRITICI (rossi)
  // Budget sforato >100%
  Object.keys(DB.budgetGoals).forEach(function(cat) {
    var budget = DB.budgetGoals[cat];
    var speso = speseCategoria[cat] || 0;
    var perc = budget > 0 ? (speso / budget * 100) : 0;
    
    if (perc > 100) {
      alerts.push({
        type: 'critical',
        icon: '❌',
        message: '<strong>' + cat + '</strong>: budget sforato al ' + perc.toFixed(0) + '% (' + formatEuro(speso) + ' / ' + formatEuro(budget) + ')',
        action: 'obiettivi'
      });
    }
  });
  
  // Obiettivo risparmio 15% a rischio
  if (entrateMese > 0) {
    var risparmiato = entrateMese - speseMese;
    var percRisparmio = (risparmiato / entrateMese) * 100;
    
    if (percRisparmio < 10) {
      alerts.push({
        type: 'critical',
        icon: '❌',
        message: 'Risparmi critici: solo <strong>' + percRisparmio.toFixed(1) + '%</strong> (obiettivo 15%)',
        action: 'finanze'
      });
    }
  }
  
  // B. WARNING (gialli)
  // Budget quasi sforato >90%
  Object.keys(DB.budgetGoals).forEach(function(cat) {
    var budget = DB.budgetGoals[cat];
    var speso = speseCategoria[cat] || 0;
    var perc = budget > 0 ? (speso / budget * 100) : 0;
    
    if (perc > 90 && perc <= 100) {
      var rimanente = budget - speso;
      alerts.push({
        type: 'warning',
        icon: '⚠️',
        message: '<strong>' + cat + '</strong>: budget al ' + perc.toFixed(0) + '% (rimangono ' + formatEuro(rimanente) + ')',
        action: 'obiettivi'
      });
    }
  });
  
  // Sotto obiettivo risparmio 15%
  if (entrateMese > 0) {
    var risparmiato = entrateMese - speseMese;
    var percRisparmio = (risparmiato / entrateMese) * 100;
    var obiettivo = entrateMese * 0.15;
    var mancanti = obiettivo - risparmiato;
    
    if (percRisparmio >= 10 && percRisparmio < 15 && mancanti > 0) {
      alerts.push({
        type: 'warning',
        icon: '⚠️',
        message: 'Risparmi sotto obiettivo: <strong>' + percRisparmio.toFixed(1) + '%</strong> (mancano ' + formatEuro(mancanti) + ' per 15%)',
        action: 'finanze'
      });
    }
  }
  
  // C. INFO (blu)
  var now = new Date();
  if (now.getDate() === 1 && anno === now.getFullYear() && mese === now.getMonth()) {
    alerts.push({
      type: 'info',
      icon: 'ℹ️',
      message: 'Nuovo mese iniziato! Controlla i tuoi obiettivi',
      action: 'obiettivi'
    });
  }
  
  // D. SUCCESS (verdi)
  // Tutti obiettivi raggiunti
  var tuttiRaggiunti = Object.keys(DB.budgetGoals).length > 0;
  Object.keys(DB.budgetGoals).forEach(function(cat) {
    var budget = DB.budgetGoals[cat];
    var speso = speseCategoria[cat] || 0;
    if (speso > budget) tuttiRaggiunti = false;
  });
  
  if (tuttiRaggiunti && Object.keys(DB.budgetGoals).length > 0) {
    alerts.push({
      type: 'success',
      icon: '✅',
      message: 'Fantastico! Tutti gli obiettivi budget rispettati questo mese!',
      action: 'obiettivi'
    });
  }
  
  // Risparmi sopra 15%
  if (entrateMese > 0) {
    var risparmiato = entrateMese - speseMese;
    var percRisparmio = (risparmiato / entrateMese) * 100;
    
    if (percRisparmio >= 15) {
      alerts.push({
        type: 'success',
        icon: '✅',
        message: 'Ottimo lavoro! Hai risparmiato il <strong>' + percRisparmio.toFixed(1) + '%</strong> questo mese (obiettivo: 15%)',
        action: 'finanze'
      });
    }
  }
  
  // Mostra alert
  if (alerts.length === 0) {
    container.innerHTML = '';
    return;
  }
  
  var html = '<div class="card" style="margin-bottom:15px">';
  html += '<h3 style="margin-bottom:12px;font-size:1.1em;color:var(--text)">🔔 Notifiche</h3>';
  
  alerts.forEach(function(alert) {
    var color, bgColor, borderColor;
    
    if (alert.type === 'critical') {
      color = '#e74c3c';
      bgColor = 'rgba(231,76,60,0.1)';
      borderColor = '#e74c3c';
    } else if (alert.type === 'warning') {
      color = '#f39c12';
      bgColor = 'rgba(243,156,18,0.1)';
      borderColor = '#f39c12';
    } else if (alert.type === 'info') {
      color = '#3498db';
      bgColor = 'rgba(52,152,219,0.1)';
      borderColor = '#3498db';
    } else if (alert.type === 'success') {
      color = '#27ae60';
      bgColor = 'rgba(39,174,96,0.1)';
      borderColor = '#27ae60';
    }
    
    html += '<div style="padding:12px;margin-bottom:8px;background:' + bgColor + ';border-left:4px solid ' + borderColor + ';border-radius:8px;cursor:pointer" onclick="vai(\'' + alert.action + '\')">';
    html += '<div style="display:flex;align-items:center;gap:10px">';
    html += '<span style="font-size:1.3em">' + alert.icon + '</span>';
    html += '<div style="flex:1;font-size:0.9em;color:' + color + ';font-weight:600">' + alert.message + '</div>';
    html += '<span style="color:' + color + ';opacity:0.5;font-size:0.9em">→</span>';
    html += '</div>';
    html += '</div>';
  });
  
  html += '</div>';
  
  container.innerHTML = html;
}

function cambiaPatrimonioMese(offset) {
  mese += offset;
  
  if (mese < 0) {
    mese = 11;
    anno--;
  } else if (mese > 11) {
    mese = 0;
    anno++;
  }
  
  document.getElementById('year').value = anno;
  document.getElementById('month').value = mese;
  aggiorna();
  aggiornaBottoniOggi();
  
  // Aggiorna anche la distribuzione se siamo nella dashboard
  if (currentSection === 'dash') {
    inizializzaDistribSelettori();
    aggiornaDistribuzione();
  }
}

// ========== DISTRIBUZIONE SPESE ==========
var distribMode = 'mese'; // 'mese', 'anno', 'custom'

function cambiaDistribTab(mode) {
  distribMode = mode;
  
  // Aggiorna stile tab
  document.getElementById('distribTabMese').style.background = mode === 'mese' ? 'linear-gradient(135deg,#a1a1aa,#71717a)' : 'var(--card)';
  document.getElementById('distribTabMese').style.color = mode === 'mese' ? '#fff' : 'var(--text)';
  document.getElementById('distribTabMese').style.border = mode === 'mese' ? 'none' : '2px solid var(--border)';
  
  document.getElementById('distribTabAnno').style.background = mode === 'anno' ? 'linear-gradient(135deg,#a1a1aa,#71717a)' : 'var(--card)';
  document.getElementById('distribTabAnno').style.color = mode === 'anno' ? '#fff' : 'var(--text)';
  document.getElementById('distribTabAnno').style.border = mode === 'anno' ? 'none' : '2px solid var(--border)';
  
  document.getElementById('distribTabCustom').style.background = mode === 'custom' ? 'linear-gradient(135deg,#a1a1aa,#71717a)' : 'var(--card)';
  document.getElementById('distribTabCustom').style.color = mode === 'custom' ? '#fff' : 'var(--text)';
  document.getElementById('distribTabCustom').style.border = mode === 'custom' ? 'none' : '2px solid var(--border)';
  
  // Mostra/nascondi selettori
  document.getElementById('distribPeriodoMese').style.display = mode === 'mese' ? 'block' : 'none';
  document.getElementById('distribPeriodoAnno').style.display = mode === 'anno' ? 'block' : 'none';
  document.getElementById('distribPeriodoCustom').style.display = mode === 'custom' ? 'block' : 'none';
  
  aggiornaDistribuzione();
}

function setDistribQuick(type) {
  var oggi = new Date();
  var dateFrom, dateTo;
  
  if (type === 'thisMonth') {
    dateFrom = new Date(oggi.getFullYear(), oggi.getMonth(), 1);
    dateTo = new Date(oggi.getFullYear(), oggi.getMonth() + 1, 0);
  } else if (type === 'last3') {
    dateFrom = new Date(oggi.getFullYear(), oggi.getMonth() - 2, 1);
    dateTo = new Date(oggi.getFullYear(), oggi.getMonth() + 1, 0);
  } else if (type === 'last6') {
    dateFrom = new Date(oggi.getFullYear(), oggi.getMonth() - 5, 1);
    dateTo = new Date(oggi.getFullYear(), oggi.getMonth() + 1, 0);
  } else if (type === 'thisYear') {
    dateFrom = new Date(oggi.getFullYear(), 0, 1);
    dateTo = new Date(oggi.getFullYear(), 11, 31);
  }
  
  // Passa a tab custom
  cambiaDistribTab('custom');
  
  // Imposta date
  document.getElementById('distribDateFrom').value = dateFrom.toISOString().split('T')[0];
  document.getElementById('distribDateTo').value = dateTo.toISOString().split('T')[0];
  
  aggiornaDistribuzione();
}

function inizializzaDistribSelettori() {
  var mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  
  // USA IL MESE GLOBALE invece del mese corrente
  var meseSelezionato = anno + '-' + String(mese).padStart(2, '0');
  
  // Popola selettore mesi
  var meseSelect = document.getElementById('distribMeseSelect');
  if (!meseSelect) return;
  
  meseSelect.innerHTML = '';
  
  // Trova tutti i mesi con transazioni
  var mesiConTransazioni = {};
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    var key = d.getFullYear() + '-' + String(d.getMonth()).padStart(2, '0');
    mesiConTransazioni[key] = {
      anno: d.getFullYear(),
      mese: d.getMonth()
    };
  });
  
  // IMPORTANTE: Aggiungi sempre il mese selezionato anche se vuoto
  if (!mesiConTransazioni[meseSelezionato]) {
    mesiConTransazioni[meseSelezionato] = {
      anno: anno,
      mese: mese
    };
  }
  
  // Ordina e crea options
  var mesiArray = Object.keys(mesiConTransazioni).sort().reverse();
  mesiArray.forEach(function(key) {
    var info = mesiConTransazioni[key];
    var option = document.createElement('option');
    option.value = key;
    option.textContent = mesiNomi[info.mese] + ' ' + info.anno;
    meseSelect.appendChild(option);
  });
  
  // SELEZIONA IL MESE DALLA QUICK BAR
  meseSelect.value = meseSelezionato;
  
  // Popola selettore anni
  var annoSelect = document.getElementById('distribAnnoSelect');
  if (!annoSelect) return;
  
  annoSelect.innerHTML = '';
  
  var anniSet = new Set();
  DB.transazioni.forEach(function(t) {
    anniSet.add(new Date(t.data).getFullYear());
  });
  
  // Aggiungi anno corrente
  anniSet.add(anno);
  
  Array.from(anniSet).sort().reverse().forEach(function(a) {
    var option = document.createElement('option');
    option.value = a;
    option.textContent = a;
    annoSelect.appendChild(option);
  });
  
  annoSelect.value = anno;
  
  // Imposta date custom al mese selezionato dalla quick bar
  var primoGiorno = new Date(anno, mese, 1);
  var ultimoGiorno = new Date(anno, mese + 1, 0);
  if (document.getElementById('distribDateFrom')) {
    document.getElementById('distribDateFrom').value = primoGiorno.toISOString().split('T')[0];
  }
  if (document.getElementById('distribDateTo')) {
    document.getElementById('distribDateTo').value = ultimoGiorno.toISOString().split('T')[0];
  }
}

function aggiornaDistribuzione() {
  var dateFrom, dateTo, periodoDesc;
  var mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  
  // Determina periodo basato su mode
  if (distribMode === 'mese') {
    var meseVal = document.getElementById('distribMeseSelect').value;
    if (!meseVal) return;
    
    var parts = meseVal.split('-');
    var y = parseInt(parts[0]);
    var m = parseInt(parts[1]);
    
    dateFrom = new Date(y, m, 1);
    dateTo = new Date(y, m + 1, 0);
    periodoDesc = mesiNomi[m] + ' ' + y;
  } else if (distribMode === 'anno') {
    var annoVal = parseInt(document.getElementById('distribAnnoSelect').value);
    dateFrom = new Date(annoVal, 0, 1);
    dateTo = new Date(annoVal, 11, 31);
    periodoDesc = 'Anno ' + annoVal;
  } else if (distribMode === 'custom') {
    var fromStr = document.getElementById('distribDateFrom').value;
    var toStr = document.getElementById('distribDateTo').value;
    
    if (!fromStr || !toStr) return;
    
    dateFrom = new Date(fromStr);
    dateTo = new Date(toStr);
    
    periodoDesc = dateFrom.toLocaleDateString('it-IT') + ' - ' + dateTo.toLocaleDateString('it-IT');
  }
  
  document.getElementById('distribPeriodoDesc').textContent = periodoDesc;
  
  // Calcola distribuzione per il periodo
  var distribuzione = {};
  var totaleSpese = 0;
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d >= dateFrom && d <= dateTo) {
      var imp = parseFloat(t.importo) || 0;
      
      // Includi le TUE spese (expense)
      if (t.tipo === 'expense' && !t.virtualRecovery) {
        var importoEffettivo = t.condiviso ? splitAmount(imp) : imp;
        distribuzione[t.categoria] = (distribuzione[t.categoria] || 0) + importoEffettivo;
        totaleSpese += importoEffettivo;
      }
      // Includi anche le spese LEI (partner_payment) SE condivise
      else if (t.tipo === 'partner_payment' && t.condiviso && !t.virtualRecovery) {
        var tuaMetà = splitAmount(imp);
        distribuzione[t.categoria] = (distribuzione[t.categoria] || 0) + tuaMetà;
        totaleSpese += tuaMetà;
      }
    }
  });
  
  // Aggiorna grafico
  aggiornaGraficoDistribuzione(distribuzione, totaleSpese);
  
  // Aggiorna insights
  aggiornaDistribInsights(distribuzione, totaleSpese, dateFrom, dateTo);
}

function aggiornaGraficoDistribuzione(distribuzione, totaleSpese) {
  var entries = Object.entries(distribuzione).sort(function(a, b) {
    return b[1] - a[1];
  });
  
  // Mappa categorie → icone e colori
  var categoryIcons = {
    'Spesa Supermercato': { icon: '🛒', color: 'linear-gradient(135deg, #a1a1aa, #71717a)' },
    'Supermercato': { icon: '🛒', color: 'linear-gradient(135deg, #a1a1aa, #71717a)' },
    'Spesa Lavoro': { icon: '💼', color: 'linear-gradient(135deg, #5fc3e4, #3a7bd5)' },
    'Spesa Casa': { icon: '🏡', color: 'linear-gradient(135deg, #fa709a, #fee140)' },
    'Luce': { icon: '💡', color: 'linear-gradient(135deg, #30cfd0, #330867)' },
    'Gas': { icon: '🔥', color: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    'Acqua': { icon: '💧', color: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    'Affitto': { icon: '🏠', color: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
    'Trasporti': { icon: '🚗', color: 'linear-gradient(135deg, #fa709a, #fee140)' },
    'Benzina': { icon: '⛽', color: 'linear-gradient(135deg, #30cfd0, #330867)' },
    'Parcheggio': { icon: '🅿️', color: 'linear-gradient(135deg, #a8edea, #fed6e3)' },
    'Ristorante': { icon: '🍽️', color: 'linear-gradient(135deg, #a1a1aa, #71717a)' },
    'Ristorazione': { icon: '🍕', color: 'linear-gradient(135deg, #5fc3e4, #3a7bd5)' },
    'Svago': { icon: '🎮', color: 'linear-gradient(135deg, #fa709a, #fee140)' },
    'Salute': { icon: '⚕️', color: 'linear-gradient(135deg, #30cfd0, #330867)' },
    'Farmacia': { icon: '💊', color: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    'Abbigliamento': { icon: '👕', color: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    'Telefono': { icon: '📱', color: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
    'Internet': { icon: '🌐', color: 'linear-gradient(135deg, #fa709a, #fee140)' },
    'Fastweb Internet': { icon: '🌐', color: 'linear-gradient(135deg, #fa709a, #fee140)' },
    'Finanziamenti': { icon: '💰', color: 'linear-gradient(135deg, #30cfd0, #330867)' },
    'Cofidis': { icon: '🏦', color: 'linear-gradient(135deg, #a8edea, #fed6e3)' },
    'Debiti': { icon: '📊', color: 'linear-gradient(135deg, #a1a1aa, #71717a)' },
    'Regali': { icon: '🎁', color: 'linear-gradient(135deg, #5fc3e4, #3a7bd5)' },
    'Palestra': { icon: '💪', color: 'linear-gradient(135deg, #fa709a, #fee140)' },
    'Abbonamenti': { icon: '📺', color: 'linear-gradient(135deg, #30cfd0, #330867)' },
    'Prozis': { icon: '💪', color: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    'Amazon': { icon: '📦', color: 'linear-gradient(135deg, #4facfe, #00f2fe)' },
    'PayPal': { icon: '💳', color: 'linear-gradient(135deg, #43e97b, #38f9d7)' },
    'Autostrada': { icon: '🛣️', color: 'linear-gradient(135deg, #fa709a, #fee140)' },
    'Parrucchiere': { icon: '💇', color: 'linear-gradient(135deg, #30cfd0, #330867)' },
    'Uscite Altro': { icon: '📌', color: 'linear-gradient(135deg, #a8edea, #fed6e3)' },
    'Altro': { icon: '📦', color: 'linear-gradient(135deg, #a1a1aa, #71717a)' }
  };
  
  var defaultIcons = [
    { icon: '💼', color: 'linear-gradient(135deg, #a1a1aa, #71717a)' },
    { icon: '💡', color: 'linear-gradient(135deg, #5fc3e4, #3a7bd5)' },
    { icon: '💰', color: 'linear-gradient(135deg, #fa709a, #fee140)' },
    { icon: '📊', color: 'linear-gradient(135deg, #30cfd0, #330867)' },
    { icon: '🎯', color: 'linear-gradient(135deg, #f093fb, #f5576c)' },
    { icon: '🛍️', color: 'linear-gradient(135deg, #4facfe, #00f2fe)' }
  ];
  
  var html = '<div style="background:var(--card);border-radius:15px;padding:5px;">';
  
  if (entries.length === 0) {
    html += '<div style="text-align:center;padding:40px;color:#7f8c8d">📊 Nessuna spesa nel periodo selezionato</div>';
  } else {
    entries.forEach(function(entry, index) {
      var categoria = entry[0];
      var value = entry[1];
      var percent = totaleSpese > 0 ? ((value / totaleSpese) * 100).toFixed(1) : 0;
      var barWidth = percent;
      
      var iconData = categoryIcons[categoria] || defaultIcons[index % defaultIcons.length];
      
      var valueText = value >= 1000 ? '€' + (value/1000).toFixed(1) + 'k' : '€' + value.toFixed(0);
      
      html += '<div data-categoria="' + categoria + '" onclick="apriModalCategoriaDettaglio(\'' + categoria.replace(/'/g, "\\'") + '\')" style="display:flex;align-items:center;padding:10px 8px;border-bottom:1px solid var(--border);cursor:pointer;transition:background 0.2s" onmouseover="this.style.background=\'rgba(102,126,234,0.05)\'" onmouseout="this.style.background=\'\';">';
      
      // Icona
      html += '<div class="categoria-icona" style="width:38px;height:38px;border-radius:10px;background:' + iconData.color + ';display:flex;align-items:center;justify-content:center;font-size:1.1em;margin-right:12px;flex-shrink:0;">';
      html += iconData.icon;
      html += '</div>';
      
      // Contenuto (categoria + barra)
      html += '<div style="flex:1;min-width:0;">';
      html += '<div style="color:var(--text);font-size:0.9em;font-weight:700;margin-bottom:5px;">' + categoria + '</div>';
      html += '<div style="background:rgba(102,126,234,0.1);height:6px;border-radius:3px;overflow:hidden;">';
      html += '<div style="background:' + iconData.color + ';height:100%;width:' + barWidth + '%;border-radius:3px;transition:width 0.5s ease;"></div>';
      html += '</div>';
      html += '</div>';
      
      // Importo e percentuale
      html += '<div style="text-align:right;margin-left:12px;">';
      html += '<div style="color:var(--text);font-size:1em;font-weight:800;white-space:nowrap;">' + valueText + '</div>';
      html += '<div style="color:var(--expense);font-size:0.75em;margin-top:2px;">' + percent + '%</div>';
      html += '</div>';
      
      html += '</div>';
    });
  }
  
  html += '</div>';
  
  // Inserisci HTML nel container
  var container = document.getElementById('distribChart');
  if (container) {
    container.innerHTML = html;
  }
  
  console.log('Grafico Distribuzione Dashboard creato con successo (HTML scroll)');
}

// ========== MODAL DETTAGLIO CATEGORIA (REMOVED - SEE LATER) ==========

function chiudiModalCategoriaDettaglio() {
  document.getElementById('modalCategoriaDettaglio').classList.remove('active');
}

function aggiornaDistribInsights(distribuzione, totaleSpese, dateFrom, dateTo) {
  var html = '';
  var container = document.getElementById('distribInsightsContent');
  if (!container) return;
  
  if (totaleSpese === 0) {
    html = '<div style="text-align:center;color:#7f8c8d">📊 Nessuna spesa nel periodo selezionato</div>';
  } else {
    // Top 3 categorie
    var entries = Object.entries(distribuzione).sort(function(a, b) {
      return b[1] - a[1];
    });
    
    html += '<div style="font-weight:700;margin-bottom:8px">🏆 Top 3 Categorie:</div>';
    for (var i = 0; i < Math.min(3, entries.length); i++) {
      var cat = entries[i][0];
      var val = entries[i][1];
      var percent = ((val / totaleSpese) * 100).toFixed(1);
      var emoji = i === 0 ? '🥇' : i === 1 ? '🥈' : '🥉';
      html += '<div style="margin-bottom:4px">' + emoji + ' ' + cat + ': <strong>€' + val.toFixed(2) + '</strong> (' + percent + '%)</div>';
    }
    
    // Media giornaliera
    var giorni = Math.ceil((dateTo - dateFrom) / (1000 * 60 * 60 * 24)) + 1;
    var mediaGiornaliera = totaleSpese / giorni;
    html += '<div style="margin-top:12px;padding-top:12px;border-top:2px solid rgba(21,101,192,0.2)">📊 <strong>Media giornaliera:</strong> €' + mediaGiornaliera.toFixed(2) + '</div>';
    html += '<div style="margin-top:4px">💰 <strong>Totale speso:</strong> €' + totaleSpese.toFixed(2) + '</div>';
  }
  
  container.innerHTML = html;
}

// ========== TRANSAZIONI ==========
function cambiaFinanzeMese(offset) {
  console.log('[FINANZE] Cambio mese, offset:', offset);
  mese += offset;
  
  if (mese < 0) {
    mese = 11;
    anno--;
  } else if (mese > 11) {
    mese = 0;
    anno++;
  }
  
  console.log('[FINANZE] Nuovo mese/anno:', mese, anno);
  
  // ⭐️ SINCRONIZZA evoluzione con mese corrente
  evoMeseCorrente = mese;
  evoAnnoCorrente = anno;
  
  // Aggiorna anche annoTabelle per coerenza
  annoTabelle = anno;
  
  document.getElementById('year').value = anno;
  document.getElementById('month').value = mese;
  
  // Aggiorna tutte le sezioni
  aggiornaFinanzeDateHeader();
  aggiornaRisparmio();
  mostraAnalisi();
  calcolaPrevisioni();
  popolaTabelleMensili();
  aggiornaEvoluzione(); // ⭐️ Ora aggiorna anche il grafico evoluzione
  aggiornaBottoniOggi();
  
  console.log('[FINANZE] Aggiornamento completato');
}

// NUOVA FUNZIONE: Aggiorna header data in Finanze
function aggiornaFinanzeDateHeader() {
  var mesiNomi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                   'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  var header = document.getElementById('finanzeDateHeader');
  if (header) {
    header.textContent = mesiNomi[mese] + ' ' + anno;
  }
}

function cambiaObiettiviMese(offset) {
  mese += offset;
  
  if (mese < 0) {
    mese = 11;
    anno--;
  } else if (mese > 11) {
    mese = 0;
    anno++;
  }
  
  document.getElementById('year').value = anno;
  document.getElementById('month').value = mese;
  
  aggiornaObiettiviDateHeader(); // AGGIUNTO: Aggiorna header data
  mostraObiettivi();
  aggiornaBottoniOggi();
}

// NUOVA FUNZIONE: Aggiorna header data in Obiettivi
function aggiornaObiettiviDateHeader() {
  var mesiNomi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                   'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  var header = document.getElementById('obiettiviDateHeader');
  if (header) {
    header.textContent = mesiNomi[mese] + ' ' + anno;
  }
}

// ========== SEZIONE OBIETTIVI ==========
function mostraObiettivi() {
  var mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  
  // Aggiorna titolo mese
  if (document.getElementById('obiettiviMese')) {
    document.getElementById('obiettiviMese').textContent = mesiNomi[mese] + ' ' + anno;
  }
  
  // Mostra long-term goals
  mostraLongTermGoals();
  
  // Mostra riepilogo obiettivi
  mostraRiepilogoObiettivi();
  
  // Mostra obiettivi individuali
  mostraBudgetGoals();
}

// ========== LONG-TERM GOALS ==========
function mostraLongTermGoals() {
  var container = document.getElementById('longTermGoals');
  if (!container) return;

  if (!DB.longTermGoals || DB.longTermGoals.length === 0) {
    var html = '<div style="text-align:center;padding:50px 30px;background:linear-gradient(135deg, rgba(155,89,182,0.1) 0%, rgba(142,68,173,0.05) 100%);border-radius:16px;border:2px dashed rgba(155,89,182,0.3)">';
    html += '<div style="font-size:4em;margin-bottom:15px;filter:grayscale(0.3)">🎯</div>';
    html += '<div style="font-size:1.3em;font-weight:800;color:var(--text);margin-bottom:10px">Nessun obiettivo attivo</div>';
    html += '<p style="color:#a1a1aa;margin-bottom:0;font-size:0.95em;line-height:1.5">Crea obiettivi su più mesi per raggiungere<br>traguardi importanti!</p>';
    html += '</div>';
    container.innerHTML = html;
    return;
  }
  
  var html = '';
  var oggi = new Date();
  
  DB.longTermGoals.forEach(function(goal, idx) {
    var dataInizio = new Date(goal.dataInizio);
    var dataFine = new Date(goal.dataFine);
    var isScaduto = oggi > dataFine;
    var progressPerc = 0;
    var speso = 0;
    var target = 0;
    var rimanente = 0;
    
    // Calcola progress in base al tipo
    if (goal.tipo === 'risparmio') {
      var totaleSalvato = 0;
      DB.transazioni.forEach(function(t) {
        var d = new Date(t.data);
        if (d >= dataInizio && d <= dataFine) {
          var imp = parseFloat(t.importo) || 0;
          if (t.tipo === 'income' && !t.rimborsoPartner) {
            totaleSalvato += imp;
          } else if (t.tipo === 'expense' && !t.virtualRecovery) {
            // Per spese condivise, sottrai solo la metà
            if (t.condiviso) {
              totaleSalvato -= imp / 2;
            } else {
              totaleSalvato -= imp;
            }
          }
        }
      });

      speso = totaleSalvato;
      target = goal.target;
      rimanente = target - speso;
      progressPerc = target > 0 ? (speso / target * 100) : 0;
      
    } else if (goal.tipo === 'riduzione') {
      var mediaBase = goal.mediaBase || 0;
      var speseCategoria = 0;
      var mesiContati = {};
      
      DB.transazioni.forEach(function(t) {
        var d = new Date(t.data);
        if (d >= dataInizio && d <= dataFine && t.tipo === 'expense' && t.categoria === goal.categoria) {
          speseCategoria += parseFloat(t.importo) || 0;
          var meseKey = d.getFullYear() + '-' + d.getMonth();
          mesiContati[meseKey] = true;
        }
      });
      
      var numMesi = Object.keys(mesiContati).length || 1;
      var mediaAttuale = speseCategoria / numMesi;
      var riduzioneEffettiva = mediaBase > 0 ? ((mediaBase - mediaAttuale) / mediaBase * 100) : 0;
      
      speso = riduzioneEffettiva;
      target = goal.targetPercent;
      rimanente = target - speso;
      progressPerc = target > 0 ? (riduzioneEffettiva / target * 100) : 0;
      
    } else if (goal.tipo === 'budget_multi') {
      var speseCategoria = 0;
      DB.transazioni.forEach(function(t) {
        var d = new Date(t.data);
        if (d >= dataInizio && d <= dataFine && t.tipo === 'expense' && t.categoria === goal.categoria) {
          speseCategoria += parseFloat(t.importo) || 0;
        }
      });
      
      speso = speseCategoria;
      target = goal.target;
      rimanente = target - speso;
      progressPerc = target > 0 ? (speso / target * 100) : 0;
    }
    
    // Determina colori e stato (come obiettivi mensili)
    var colore, bgGradient, emoji, stato;
    if (isScaduto) {
      colore = '#95a5a6';
      bgGradient = 'linear-gradient(135deg, #ecf0f1, #bdc3c7)';
      emoji = '⏰';
      stato = 'Scaduto';
    } else if (progressPerc <= 75) {
      colore = '#27ae60';
      bgGradient = 'linear-gradient(135deg, #e8f5e9, #c8e6c9)';
      emoji = '✅';
      stato = 'Ottimo!';
    } else if (progressPerc <= 90) {
      colore = '#f39c12';
      bgGradient = 'linear-gradient(135deg, #fff3e0, #ffe0b2)';
      emoji = '⚠️';
      stato = 'Attenzione';
    } else if (progressPerc <= 100) {
      colore = '#e67e22';
      bgGradient = 'linear-gradient(135deg, #fff3e0, #ffcc80)';
      emoji = '⚠️';
      stato = 'Vicino al limite';
    } else {
      colore = '#e74c3c';
      bgGradient = 'linear-gradient(135deg, #ffebee, #ffcdd2)';
      emoji = '❌';
      stato = 'Obiettivo superato!';
    }
    
    // Calcola giorni rimanenti
    var giorniTotali = Math.ceil((dataFine - dataInizio) / (1000 * 60 * 60 * 24));
    var giorniPassati = Math.ceil((oggi - dataInizio) / (1000 * 60 * 60 * 24));
    var giorniRimasti = Math.max(0, Math.ceil((dataFine - oggi) / (1000 * 60 * 60 * 24)));
    var tempoPerc = giorniTotali > 0 ? Math.min((giorniPassati / giorniTotali) * 100, 100) : 0;

    // Tipo icon
    var tipoIcon = goal.tipo === 'risparmio' ? '💰' : (goal.tipo === 'riduzione' ? '📉' : '🎯');
    var tipoColor = goal.tipo === 'risparmio' ? '#27ae60' : (goal.tipo === 'riduzione' ? '#e74c3c' : '#9b59b6');

    // Card moderna
    html += '<div style="margin-bottom:18px;background:var(--card);border-radius:16px;overflow:hidden;box-shadow:0 4px 15px rgba(0,0,0,0.08);border:1px solid var(--border)">';

    // Header colorato
    html += '<div style="background:linear-gradient(135deg, ' + tipoColor + ' 0%, ' + tipoColor + 'cc 100%);padding:18px 16px;position:relative;overflow:hidden">';
    html += '<div style="position:absolute;top:-20px;right:-20px;font-size:5em;opacity:0.15">' + tipoIcon + '</div>';
    html += '<div style="display:flex;justify-content:space-between;align-items:flex-start;position:relative;z-index:1">';
    html += '<div style="flex:1">';
    html += '<div style="font-size:1.15em;font-weight:800;color:#fff;margin-bottom:6px;text-shadow:0 1px 2px rgba(0,0,0,0.2)">' + (goal.nome || 'Obiettivo') + '</div>';

    // Info periodo con date complete
    var mesiNomi = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
    var dataInizioStr = dataInizio.getDate() + ' ' + mesiNomi[dataInizio.getMonth()] + ' ' + dataInizio.getFullYear();
    var dataFineStr = dataFine.getDate() + ' ' + mesiNomi[dataFine.getMonth()] + ' ' + dataFine.getFullYear();
    html += '<div style="font-size:0.85em;color:rgba(255,255,255,0.9);display:flex;align-items:center;gap:6px">';
    html += '<span>📅 ' + dataInizioStr + '</span>';
    html += '<span style="color:rgba(255,255,255,0.6)">→</span>';
    html += '<span>🏁 ' + dataFineStr + '</span>';
    html += '</div>';
    html += '</div>';

    // Delete button
    html += '<button onclick="eliminaLongTermGoal(' + idx + ')" style="background:rgba(255,255,255,0.2);color:#fff;border:none;padding:10px 12px;border-radius:10px;cursor:pointer;font-size:1em;transition:all 0.2s" onmouseover="this.style.background=\'rgba(255,255,255,0.3)\'" onmouseout="this.style.background=\'rgba(255,255,255,0.2)\'">🗑️</button>';
    html += '</div>';

    // Status badge
    html += '<div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap">';
    html += '<span style="background:rgba(255,255,255,0.25);color:#fff;padding:5px 12px;border-radius:20px;font-size:0.8em;font-weight:700">' + emoji + ' ' + stato + '</span>';
    if (!isScaduto && giorniRimasti > 0) {
      html += '<span style="background:rgba(255,255,255,0.15);color:rgba(255,255,255,0.9);padding:5px 12px;border-radius:20px;font-size:0.8em;font-weight:600">⏱️ ' + giorniRimasti + ' giorni rimasti</span>';
    }
    html += '</div>';
    html += '</div>';
    
    // Body content
    html += '<div style="padding:16px">';

    // Stats grid
    html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:16px">';

    if (goal.tipo === 'risparmio') {
      // Risparmiato
      html += '<div style="text-align:center;padding:12px 8px;background:linear-gradient(135deg, rgba(39,174,96,0.1) 0%, rgba(39,174,96,0.05) 100%);border-radius:12px;border:1px solid rgba(39,174,96,0.2)">';
      html += '<div style="font-size:0.75em;color:#27ae60;font-weight:600;margin-bottom:4px">💵 Risparmiato</div>';
      html += '<div style="font-size:1.2em;font-weight:800;color:#27ae60">' + formatEuro(speso) + '</div>';
      html += '</div>';
      // Obiettivo
      html += '<div style="text-align:center;padding:12px 8px;background:linear-gradient(135deg, rgba(33,150,243,0.1) 0%, rgba(33,150,243,0.05) 100%);border-radius:12px;border:1px solid rgba(33,150,243,0.2)">';
      html += '<div style="font-size:0.75em;color:#1976d2;font-weight:600;margin-bottom:4px">🎯 Obiettivo</div>';
      html += '<div style="font-size:1.2em;font-weight:800;color:#1976d2">' + formatEuro(target) + '</div>';
      html += '</div>';
      // Mancante
      html += '<div style="text-align:center;padding:12px 8px;background:linear-gradient(135deg, rgba(255,152,0,0.1) 0%, rgba(255,152,0,0.05) 100%);border-radius:12px;border:1px solid rgba(255,152,0,0.2)">';
      html += '<div style="font-size:0.75em;color:#e65100;font-weight:600;margin-bottom:4px">💰 Mancante</div>';
      html += '<div style="font-size:1.2em;font-weight:800;color:' + (rimanente >= 0 ? '#e65100' : '#e74c3c') + '">' + formatEuro(Math.abs(rimanente)) + '</div>';
      html += '</div>';
    } else if (goal.tipo === 'riduzione') {
      // Riduzione attuale
      html += '<div style="text-align:center;padding:12px 8px;background:linear-gradient(135deg, rgba(39,174,96,0.1) 0%, rgba(39,174,96,0.05) 100%);border-radius:12px;border:1px solid rgba(39,174,96,0.2)">';
      html += '<div style="font-size:0.75em;color:#27ae60;font-weight:600;margin-bottom:4px">📉 Riduzione</div>';
      html += '<div style="font-size:1.2em;font-weight:800;color:#27ae60">' + speso.toFixed(1) + '%</div>';
      html += '</div>';
      // Obiettivo
      html += '<div style="text-align:center;padding:12px 8px;background:linear-gradient(135deg, rgba(33,150,243,0.1) 0%, rgba(33,150,243,0.05) 100%);border-radius:12px;border:1px solid rgba(33,150,243,0.2)">';
      html += '<div style="font-size:0.75em;color:#1976d2;font-weight:600;margin-bottom:4px">🎯 Target</div>';
      html += '<div style="font-size:1.2em;font-weight:800;color:#1976d2">' + target + '%</div>';
      html += '</div>';
      // Categoria
      html += '<div style="text-align:center;padding:12px 8px;background:linear-gradient(135deg, rgba(155,89,182,0.1) 0%, rgba(155,89,182,0.05) 100%);border-radius:12px;border:1px solid rgba(155,89,182,0.2)">';
      html += '<div style="font-size:0.75em;color:#9b59b6;font-weight:600;margin-bottom:4px">📂 Categoria</div>';
      html += '<div style="font-size:0.9em;font-weight:700;color:#9b59b6;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + goal.categoria + '</div>';
      html += '</div>';
    } else if (goal.tipo === 'budget_multi') {
      // Speso
      html += '<div style="text-align:center;padding:12px 8px;background:linear-gradient(135deg, rgba(231,76,60,0.1) 0%, rgba(231,76,60,0.05) 100%);border-radius:12px;border:1px solid rgba(231,76,60,0.2)">';
      html += '<div style="font-size:0.75em;color:#e74c3c;font-weight:600;margin-bottom:4px">💸 Speso</div>';
      html += '<div style="font-size:1.2em;font-weight:800;color:#e74c3c">' + formatEuro(speso) + '</div>';
      html += '</div>';
      // Budget
      html += '<div style="text-align:center;padding:12px 8px;background:linear-gradient(135deg, rgba(33,150,243,0.1) 0%, rgba(33,150,243,0.05) 100%);border-radius:12px;border:1px solid rgba(33,150,243,0.2)">';
      html += '<div style="font-size:0.75em;color:#1976d2;font-weight:600;margin-bottom:4px">🎯 Budget</div>';
      html += '<div style="font-size:1.2em;font-weight:800;color:#1976d2">' + formatEuro(target) + '</div>';
      html += '</div>';
      // Rimanente
      html += '<div style="text-align:center;padding:12px 8px;background:linear-gradient(135deg, rgba(39,174,96,0.1) 0%, rgba(39,174,96,0.05) 100%);border-radius:12px;border:1px solid rgba(39,174,96,0.2)">';
      html += '<div style="font-size:0.75em;color:#27ae60;font-weight:600;margin-bottom:4px">✅ Rimanente</div>';
      html += '<div style="font-size:1.2em;font-weight:800;color:' + (rimanente >= 0 ? '#27ae60' : '#e74c3c') + '">' + formatEuro(Math.abs(rimanente)) + '</div>';
      html += '</div>';
    }

    html += '</div>';

    // Progress section
    html += '<div style="background:var(--bg);padding:14px;border-radius:12px">';

    // Label e percentuale
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">';
    html += '<span style="font-size:0.85em;font-weight:600;color:var(--text)">Progresso</span>';
    html += '<span style="font-size:1em;font-weight:800;color:' + colore + '">' + progressPerc.toFixed(1) + '%</span>';
    html += '</div>';

    // Barra progresso moderna
    html += '<div style="background:var(--border);height:10px;border-radius:5px;overflow:hidden;position:relative">';
    html += '<div style="background:linear-gradient(90deg, ' + colore + ' 0%, ' + colore + 'dd 100%);height:100%;width:' + Math.min(progressPerc, 100) + '%;transition:width 0.5s ease;border-radius:5px"></div>';
    html += '</div>';

    // Barra tempo (se non scaduto)
    if (!isScaduto && tempoPerc > 0) {
      html += '<div style="margin-top:10px">';
      html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">';
      html += '<span style="font-size:0.8em;color:#a1a1aa">Tempo trascorso</span>';
      html += '<span style="font-size:0.8em;color:#a1a1aa">' + tempoPerc.toFixed(0) + '%</span>';
      html += '</div>';
      html += '<div style="background:var(--border);height:4px;border-radius:2px;overflow:hidden">';
      html += '<div style="background:#a1a1aa;height:100%;width:' + tempoPerc + '%;transition:width 0.5s ease;border-radius:2px"></div>';
      html += '</div>';
      html += '</div>';
    }

    html += '</div>';
    html += '</div>';
    html += '</div>';
  });
  
  container.innerHTML = html;
}

function aggiungiObiettivoLongTerm() {
  var modal = document.getElementById('modal');
  modal.classList.add('active');
  
  var html = '';
  html += '<div class="modal-header">';
  html += '<h3 style="display:flex;align-items:center;gap:10px"><span style="font-size:1.4em">🏆</span> Nuovo Obiettivo Long-Term</h3>';
  html += '<button class="close-btn" onclick="chiudiModal()">×</button>';
  html += '</div>';
  html += '<div style="padding:25px">';
  html += '<p style="font-size:1em;color:#7f8c8d;margin-bottom:25px;text-align:center">Scegli il tipo di obiettivo che vuoi creare</p>';
  
  html += '<div style="display:grid;gap:15px;margin-bottom:25px">';
  
  // Tipo 1: Risparmio Totale
  html += '<div onclick="creaLongTermGoal(\'risparmio\')" style="padding:20px;background:linear-gradient(135deg,#27ae60,#229954);border-radius:14px;cursor:pointer;transition:all 0.3s;color:#fff;box-shadow:0 4px 15px rgba(39,174,96,0.3);position:relative;overflow:hidden" onmouseover="this.style.transform=\'translateY(-3px)\';this.style.boxShadow=\'0 8px 25px rgba(39,174,96,0.4)\'" onmouseout="this.style.transform=\'translateY(0)\';this.style.boxShadow=\'0 4px 15px rgba(39,174,96,0.3)\'">';
  html += '<div style="position:absolute;top:-20px;right:-20px;font-size:6em;opacity:0.1">💰</div>';
  html += '<div style="position:relative;z-index:1">';
  html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">';
  html += '<span style="font-size:2.5em">💰</span>';
  html += '<div style="font-weight:800;font-size:1.3em">Risparmio Totale</div>';
  html += '</div>';
  html += '<div style="font-size:0.95em;opacity:0.95;line-height:1.4;padding-left:10px">Esempio: "Risparmia €5000 entro Giugno 2025"</div>';
  html += '</div>';
  html += '</div>';
  
  // Tipo 2: Riduzione Spesa
  html += '<div onclick="creaLongTermGoal(\'riduzione\')" style="padding:20px;background:linear-gradient(135deg,#3498db,#2980b9);border-radius:14px;cursor:pointer;transition:all 0.3s;color:#fff;box-shadow:0 4px 15px rgba(52,152,219,0.3);position:relative;overflow:hidden" onmouseover="this.style.transform=\'translateY(-3px)\';this.style.boxShadow=\'0 8px 25px rgba(52,152,219,0.4)\'" onmouseout="this.style.transform=\'translateY(0)\';this.style.boxShadow=\'0 4px 15px rgba(52,152,219,0.3)\'">';
  html += '<div style="position:absolute;top:-20px;right:-20px;font-size:6em;opacity:0.1">📉</div>';
  html += '<div style="position:relative;z-index:1">';
  html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">';
  html += '<span style="font-size:2.5em">📉</span>';
  html += '<div style="font-weight:800;font-size:1.3em">Riduzione Spesa</div>';
  html += '</div>';
  html += '<div style="font-size:0.95em;opacity:0.95;line-height:1.4;padding-left:10px">Esempio: "Riduci Uscite Ristoranti del 20%"</div>';
  html += '</div>';
  html += '</div>';
  
  // Tipo 3: Budget Multi-Mese
  html += '<div onclick="creaLongTermGoal(\'budget_multi\')" style="padding:20px;background:linear-gradient(135deg,#9b59b6,#8e44ad);border-radius:14px;cursor:pointer;transition:all 0.3s;color:#fff;box-shadow:0 4px 15px rgba(155,89,182,0.3);position:relative;overflow:hidden" onmouseover="this.style.transform=\'translateY(-3px)\';this.style.boxShadow=\'0 8px 25px rgba(155,89,182,0.4)\'" onmouseout="this.style.transform=\'translateY(0)\';this.style.boxShadow=\'0 4px 15px rgba(155,89,182,0.3)\'">';
  html += '<div style="position:absolute;top:-20px;right:-20px;font-size:6em;opacity:0.1">🎯</div>';
  html += '<div style="position:relative;z-index:1">';
  html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:8px">';
  html += '<span style="font-size:2.5em">🎯</span>';
  html += '<div style="font-weight:800;font-size:1.3em">Budget Multi-Mese</div>';
  html += '</div>';
  html += '<div style="font-size:0.95em;opacity:0.95;line-height:1.4;padding-left:10px">Esempio: "Max €600 per Palestra in 3 mesi"</div>';
  html += '</div>';
  html += '</div>';
  
  html += '</div>';
  html += '<button class="btn" onclick="chiudiModal()" style="width:100%;background:#95a5a6;padding:14px;font-size:1.05em">✖ Annulla</button>';
  html += '</div>';
  
  var content = modal.querySelector('.modal-content');
  content.innerHTML = html;
}

function creaLongTermGoal(tipo) {
  chiudiModal();

  var modal = document.getElementById('modal');
  var oggi = new Date();
  var dataOggi = oggi.toISOString().split('T')[0];

  if (tipo === 'risparmio') {
    // Modal per Risparmio Totale - DESIGN MIGLIORATO
    modal.classList.add('active');
    var html = '';

    // Header con gradiente
    html += '<div class="modal-header" style="background:linear-gradient(135deg, #27ae60 0%, #1e8449 100%);padding:25px;border-radius:16px 16px 0 0;position:relative;overflow:hidden">';
    html += '<div style="position:absolute;top:-30px;right:-30px;font-size:8em;opacity:0.1;transform:rotate(15deg)">💰</div>';
    html += '<h3 style="display:flex;align-items:center;gap:12px;margin:0;color:#fff;font-size:1.4em;position:relative;z-index:1">';
    html += '<span style="font-size:1.3em">💰</span> Obiettivo Risparmio';
    html += '</h3>';
    html += '<div style="color:rgba(255,255,255,0.85);font-size:0.9em;margin-top:8px;position:relative;z-index:1">Definisci quanto vuoi risparmiare e in che periodo</div>';
    html += '<button class="close-btn" onclick="chiudiModal()" style="position:absolute;top:15px;right:15px;background:rgba(255,255,255,0.2);color:#fff;border:none;width:36px;height:36px;border-radius:50%;font-size:1.5em;cursor:pointer;z-index:2">×</button>';
    html += '</div>';

    html += '<div style="padding:25px;background:var(--card)">';

    // Nome obiettivo
    html += '<div style="margin-bottom:20px">';
    html += '<label style="display:block;font-weight:700;margin-bottom:10px;color:var(--text);font-size:0.95em">📝 Nome obiettivo</label>';
    html += '<input type="text" id="ltgNome" placeholder="Es: Fondo Vacanze, Nuova Auto..." style="width:100%;padding:14px;border:2px solid var(--border);border-radius:12px;font-size:1em;background:var(--bg);color:var(--text);font-weight:600" onfocus="this.style.borderColor=\'#27ae60\';this.style.boxShadow=\'0 0 15px rgba(39,174,96,0.2)\'" onblur="this.style.borderColor=\'var(--border)\';this.style.boxShadow=\'none\'">';
    html += '</div>';

    // Target importo
    html += '<div style="margin-bottom:20px">';
    html += '<label style="display:block;font-weight:700;margin-bottom:10px;color:var(--text);font-size:0.95em">💰 Importo da risparmiare</label>';
    html += '<div style="position:relative">';
    html += '<span style="position:absolute;left:14px;top:14px;font-size:1.1em;color:#27ae60;font-weight:800">€</span>';
    html += '<input type="number" id="ltgTarget" placeholder="5000" style="width:100%;padding:14px 14px 14px 40px;border:2px solid var(--border);border-radius:12px;font-size:1.1em;background:var(--bg);color:var(--text);font-weight:700" onfocus="this.style.borderColor=\'#27ae60\';this.style.boxShadow=\'0 0 15px rgba(39,174,96,0.2)\'" onblur="this.style.borderColor=\'var(--border)\';this.style.boxShadow=\'none\'">';
    html += '</div>';
    html += '</div>';

    // Date Container - Grid 2 colonne
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:25px">';

    // Data inizio
    html += '<div>';
    html += '<label style="display:block;font-weight:700;margin-bottom:10px;color:var(--text);font-size:0.95em">📅 Data inizio</label>';
    html += '<input type="date" id="ltgDataInizio" value="' + dataOggi + '" style="width:100%;padding:14px;border:2px solid var(--border);border-radius:12px;font-size:1em;background:var(--bg);color:var(--text);font-weight:600" onfocus="this.style.borderColor=\'#27ae60\'" onblur="this.style.borderColor=\'var(--border)\'">';
    html += '</div>';

    // Data fine
    html += '<div>';
    html += '<label style="display:block;font-weight:700;margin-bottom:10px;color:var(--text);font-size:0.95em">🏁 Data fine</label>';
    html += '<input type="date" id="ltgDataFine" style="width:100%;padding:14px;border:2px solid var(--border);border-radius:12px;font-size:1em;background:var(--bg);color:var(--text);font-weight:600" onfocus="this.style.borderColor=\'#27ae60\'" onblur="this.style.borderColor=\'var(--border)\'">';
    html += '</div>';

    html += '</div>';

    // Buttons
    html += '<div style="display:flex;gap:12px">';
    html += '<button class="btn" onclick="chiudiModal()" style="flex:1;background:var(--bg);color:var(--text);border:2px solid var(--border);padding:16px;font-weight:700;font-size:1em;border-radius:12px">Annulla</button>';
    html += '<button class="btn" onclick="salvaRisparmioGoal()" style="flex:2;background:linear-gradient(135deg, #27ae60, #1e8449);padding:16px;font-weight:800;font-size:1.05em;border:none;box-shadow:0 4px 15px rgba(39,174,96,0.4);border-radius:12px">✅ Crea Obiettivo</button>';
    html += '</div>';

    html += '</div>';

    var content = modal.querySelector('.modal-content');
    content.innerHTML = html;
    
  } else if (tipo === 'riduzione') {
    // Modal per Riduzione Spesa - STILE MODERNO CON SELECT
    modal.classList.add('active');
    var html = '';
    html += '<div class="modal-header" style="background:linear-gradient(135deg,#e74c3c,#c0392b);color:#fff;padding:20px;border-radius:16px 16px 0 0">';
    html += '<h3 style="display:flex;align-items:center;gap:10px;margin:0;font-size:1.3em"><span style="font-size:1.2em">📉</span> Obiettivo Riduzione Spesa</h3>';
    html += '<button class="close-btn" onclick="chiudiModal()" style="background:rgba(255,255,255,0.2);color:#fff;border:none;width:32px;height:32px;border-radius:50%;font-size:1.5em;cursor:pointer;display:flex;align-items:center;justify-content:center">×</button>';
    html += '</div>';
    html += '<div style="padding:20px;background:var(--card)">';
    
    // Categoria da ridurre - SELECT NATIVO
    html += '<div style="margin-bottom:18px">';
    html += '<label style="display:block;font-weight:700;margin-bottom:8px;color:var(--text);font-size:0.95em">📂 Categoria da ridurre</label>';
    html += '<select id="ltgCategoria" style="width:100%;padding:12px;border:2px solid var(--border);border-radius:10px;font-size:1em;background:var(--bg);color:var(--text);font-weight:600" onfocus="this.style.borderColor=\'#e74c3c\'" onblur="this.style.borderColor=\'var(--border)\'">';
    html += '<option value="">Seleziona categoria...</option>';
    DB.categorie.expense.sort().forEach(function(cat) {
      html += '<option value="' + cat + '">' + cat + '</option>';
    });
    html += '</select>';
    html += '</div>';
    
    // Percentuale riduzione
    html += '<div style="margin-bottom:18px">';
    html += '<label style="display:block;font-weight:700;margin-bottom:8px;color:var(--text);font-size:0.95em">📉 Riduzione desiderata</label>';
    html += '<div style="position:relative">';
    html += '<input type="number" id="ltgPercent" placeholder="20" style="width:100%;padding:12px 40px 12px 12px;border:2px solid var(--border);border-radius:10px;font-size:1em;background:var(--bg);color:var(--text);font-weight:600" onfocus="this.style.borderColor=\'#e74c3c\'" onblur="this.style.borderColor=\'var(--border)\'">';
    html += '<span style="position:absolute;right:12px;top:12px;font-size:1em;color:#e74c3c;font-weight:700">%</span>';
    html += '</div>';
    html += '</div>';
    
    // Media base
    html += '<div style="margin-bottom:18px">';
    html += '<label style="display:block;font-weight:700;margin-bottom:8px;color:var(--text);font-size:0.95em">💰 Spesa media mensile attuale</label>';
    html += '<div style="position:relative">';
    html += '<span style="position:absolute;left:12px;top:12px;font-size:1em;color:#e74c3c;font-weight:700">€</span>';
    html += '<input type="number" id="ltgMediaBase" placeholder="200" style="width:100%;padding:12px 12px 12px 40px;border:2px solid var(--border);border-radius:10px;font-size:1em;background:var(--bg);color:var(--text);font-weight:600" onfocus="this.style.borderColor=\'#e74c3c\'" onblur="this.style.borderColor=\'var(--border)\'">';
    html += '</div>';
    html += '</div>';
    
    // Date Container - Grid 2 colonne
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px">';

    // Data inizio
    html += '<div>';
    html += '<label style="display:block;font-weight:700;margin-bottom:8px;color:var(--text);font-size:0.95em">📅 Data inizio</label>';
    html += '<input type="date" id="ltgDataInizio" value="' + dataOggi + '" style="width:100%;padding:12px;border:2px solid var(--border);border-radius:10px;font-size:1em;background:var(--bg);color:var(--text);font-weight:600" onfocus="this.style.borderColor=\'#e74c3c\'" onblur="this.style.borderColor=\'var(--border)\'">';
    html += '</div>';

    // Data fine
    html += '<div>';
    html += '<label style="display:block;font-weight:700;margin-bottom:8px;color:var(--text);font-size:0.95em">🏁 Data fine</label>';
    html += '<input type="date" id="ltgDataFine" style="width:100%;padding:12px;border:2px solid var(--border);border-radius:10px;font-size:1em;background:var(--bg);color:var(--text);font-weight:600" onfocus="this.style.borderColor=\'#e74c3c\'" onblur="this.style.borderColor=\'var(--border)\'">';
    html += '</div>';

    html += '</div>';

    html += '<div style="display:flex;gap:10px">';
    html += '<button class="btn" onclick="chiudiModal()" style="flex:1;background:var(--bg);color:var(--text);border:2px solid var(--border);padding:14px;border-radius:12px;font-weight:700;font-size:1em">Annulla</button>';
    html += '<button class="btn" onclick="salvaRiduzioneGoal()" style="flex:2;background:linear-gradient(135deg,#e74c3c,#c0392b);padding:14px;border-radius:12px;border:none;color:#fff;font-weight:700;font-size:1em;box-shadow:0 4px 12px rgba(231,76,60,0.3)">✅ Crea Obiettivo</button>';
    html += '</div>';
    html += '</div>';

    var content = modal.querySelector('.modal-content');
    content.innerHTML = html;

  } else if (tipo === 'budget_multi') {
    // Modal per Budget Multi-Mese - STILE MODERNO
    modal.classList.add('active');
    var html = '';

    // Header migliorato
    html += '<div class="modal-header" style="background:linear-gradient(135deg,#9b59b6,#8e44ad);color:#fff;padding:25px;border-radius:16px 16px 0 0;position:relative;overflow:hidden">';
    html += '<div style="position:absolute;top:-30px;right:-30px;font-size:8em;opacity:0.1;transform:rotate(15deg)">🎯</div>';
    html += '<h3 style="display:flex;align-items:center;gap:10px;margin:0;font-size:1.3em;position:relative;z-index:1"><span style="font-size:1.2em">🎯</span> Budget Multi-Mese</h3>';
    html += '<div style="color:rgba(255,255,255,0.85);font-size:0.9em;margin-top:8px;position:relative;z-index:1">Limita la spesa totale in una categoria per un periodo</div>';
    html += '<button class="close-btn" onclick="chiudiModal()" style="position:absolute;top:15px;right:15px;background:rgba(255,255,255,0.2);color:#fff;border:none;width:36px;height:36px;border-radius:50%;font-size:1.5em;cursor:pointer;z-index:2">×</button>';
    html += '</div>';

    html += '<div style="padding:20px;background:var(--card)">';

    // Categoria
    html += '<div style="margin-bottom:18px">';
    html += '<label style="display:block;font-weight:700;margin-bottom:8px;color:var(--text);font-size:0.95em">📂 Categoria</label>';
    html += '<select id="ltgCategoria" style="width:100%;padding:12px;border:2px solid var(--border);border-radius:12px;font-size:1em;background:var(--bg);color:var(--text);font-weight:600" onfocus="this.style.borderColor=\'#9b59b6\'" onblur="this.style.borderColor=\'var(--border)\'">';
    html += '<option value="">Seleziona categoria...</option>';
    DB.categorie.expense.sort().forEach(function(cat) {
      html += '<option value="' + cat + '">' + cat + '</option>';
    });
    html += '</select>';
    html += '</div>';

    // Budget totale
    html += '<div style="margin-bottom:18px">';
    html += '<label style="display:block;font-weight:700;margin-bottom:8px;color:var(--text);font-size:0.95em">💰 Budget totale massimo</label>';
    html += '<div style="position:relative">';
    html += '<span style="position:absolute;left:14px;top:12px;font-size:1.1em;color:#9b59b6;font-weight:800">€</span>';
    html += '<input type="number" id="ltgTarget" placeholder="600" style="width:100%;padding:12px 12px 12px 40px;border:2px solid var(--border);border-radius:12px;font-size:1.1em;background:var(--bg);color:var(--text);font-weight:700" onfocus="this.style.borderColor=\'#9b59b6\'" onblur="this.style.borderColor=\'var(--border)\'">';
    html += '</div>';
    html += '<div style="font-size:0.85em;color:#7f8c8d;margin-top:6px;padding-left:4px">💡 Somma totale per tutti i mesi del periodo</div>';
    html += '</div>';

    // Date Container - Grid 2 colonne
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px">';

    // Data inizio
    html += '<div>';
    html += '<label style="display:block;font-weight:700;margin-bottom:8px;color:var(--text);font-size:0.95em">📅 Data inizio</label>';
    html += '<input type="date" id="ltgDataInizio" value="' + dataOggi + '" style="width:100%;padding:12px;border:2px solid var(--border);border-radius:12px;font-size:1em;background:var(--bg);color:var(--text);font-weight:600" onfocus="this.style.borderColor=\'#9b59b6\'" onblur="this.style.borderColor=\'var(--border)\'">';
    html += '</div>';

    // Data fine
    html += '<div>';
    html += '<label style="display:block;font-weight:700;margin-bottom:8px;color:var(--text);font-size:0.95em">🏁 Data fine</label>';
    html += '<input type="date" id="ltgDataFine" style="width:100%;padding:12px;border:2px solid var(--border);border-radius:12px;font-size:1em;background:var(--bg);color:var(--text);font-weight:600" onfocus="this.style.borderColor=\'#9b59b6\'" onblur="this.style.borderColor=\'var(--border)\'">';
    html += '</div>';

    html += '</div>';

    html += '<div style="display:flex;gap:10px">';
    html += '<button class="btn" onclick="chiudiModal()" style="flex:1;background:var(--bg);color:var(--text);border:2px solid var(--border);padding:14px;border-radius:12px;font-weight:700;font-size:1em">Annulla</button>';
    html += '<button class="btn" onclick="salvaBudgetMultiGoal()" style="flex:2;background:linear-gradient(135deg,#9b59b6,#8e44ad);padding:14px;border-radius:12px;border:none;color:#fff;font-weight:700;font-size:1em;box-shadow:0 4px 12px rgba(155,89,182,0.3)">✅ Crea Obiettivo</button>';
    html += '</div>';
    html += '</div>';

    var content = modal.querySelector('.modal-content');
    content.innerHTML = html;
  }
}

// Funzioni di salvataggio per Long-Term Goals
function salvaRisparmioGoal() {
  var nome = document.getElementById('ltgNome').value.trim();
  var target = parseFloat(document.getElementById('ltgTarget').value);
  var dataInizio = document.getElementById('ltgDataInizio').value;
  var dataFine = document.getElementById('ltgDataFine').value;

  if (!nome) {
    mostraToast('⚠️ Inserisci un nome per l\'obiettivo!', 'warning');
    return;
  }

  if (!target || target <= 0) {
    mostraToast('⚠️ Importo non valido!', 'warning');
    return;
  }

  if (!dataInizio) {
    mostraToast('⚠️ Seleziona una data di inizio!', 'warning');
    return;
  }

  if (!dataFine) {
    mostraToast('⚠️ Seleziona una data di fine!', 'warning');
    return;
  }

  if (new Date(dataInizio) >= new Date(dataFine)) {
    mostraToast('⚠️ La data di fine deve essere dopo quella di inizio!', 'warning');
    return;
  }

  DB.longTermGoals.push({
    tipo: 'risparmio',
    nome: nome,
    target: target,
    dataInizio: dataInizio,
    dataFine: dataFine
  });
  
  salvaDB();
  chiudiModal();
  mostraObiettivi();
  mostraToast('✅ Obiettivo risparmio creato!', 'success');
  playSound('success');
}

// Funzione rimossa - ora usa select nativo nella modal

function salvaRiduzioneGoal() {
  var categoria = document.getElementById('ltgCategoria').value;
  var targetPercent = parseFloat(document.getElementById('ltgPercent').value);
  var mediaBase = parseFloat(document.getElementById('ltgMediaBase').value);
  var dataInizio = document.getElementById('ltgDataInizio').value;
  var dataFine = document.getElementById('ltgDataFine').value;

  if (!categoria) {
    mostraToast('⚠️ Seleziona una categoria!', 'warning');
    return;
  }

  if (!targetPercent || targetPercent <= 0) {
    mostraToast('⚠️ Percentuale non valida!', 'warning');
    return;
  }

  if (!mediaBase || mediaBase <= 0) {
    mostraToast('⚠️ Importo non valido!', 'warning');
    return;
  }

  if (!dataInizio) {
    mostraToast('⚠️ Seleziona una data di inizio!', 'warning');
    return;
  }

  if (!dataFine) {
    mostraToast('⚠️ Seleziona una data di fine!', 'warning');
    return;
  }

  if (new Date(dataInizio) >= new Date(dataFine)) {
    mostraToast('⚠️ La data di fine deve essere dopo quella di inizio!', 'warning');
    return;
  }

  DB.longTermGoals.push({
    tipo: 'riduzione',
    nome: 'Riduci ' + categoria + ' del ' + targetPercent + '%',
    categoria: categoria,
    targetPercent: targetPercent,
    mediaBase: mediaBase,
    dataInizio: dataInizio,
    dataFine: dataFine
  });
  
  salvaDB();
  chiudiModal();
  mostraObiettivi();
  mostraToast('✅ Obiettivo riduzione creato!', 'success');
  playSound('success');
}

function salvaBudgetMultiGoal() {
  var categoria = document.getElementById('ltgCategoria').value;
  var target = parseFloat(document.getElementById('ltgTarget').value);
  var dataInizio = document.getElementById('ltgDataInizio').value;
  var dataFine = document.getElementById('ltgDataFine').value;

  if (!categoria) {
    mostraToast('⚠️ Seleziona una categoria!', 'warning');
    return;
  }

  if (!target || target <= 0) {
    mostraToast('⚠️ Importo non valido!', 'warning');
    return;
  }

  if (!dataInizio) {
    mostraToast('⚠️ Seleziona una data di inizio!', 'warning');
    return;
  }

  if (!dataFine) {
    mostraToast('⚠️ Seleziona una data di fine!', 'warning');
    return;
  }

  if (new Date(dataInizio) >= new Date(dataFine)) {
    mostraToast('⚠️ La data di fine deve essere dopo quella di inizio!', 'warning');
    return;
  }

  DB.longTermGoals.push({
    tipo: 'budget_multi',
    nome: 'Max ' + formatEuro(target) + ' per ' + categoria,
    categoria: categoria,
    target: target,
    dataInizio: dataInizio,
    dataFine: dataFine
  });
  
  salvaDB();
  chiudiModal();
  mostraObiettivi();
  mostraToast('✅ Obiettivo budget multi-mese creato!', 'success');
  playSound('success');
}

function eliminaLongTermGoal(idx) {
  var goal = DB.longTermGoals[idx];
  
  mostraConferma({
    icon: '🗑️',
    title: 'Elimina Obiettivo',
    message: 'Vuoi davvero eliminare l\'obiettivo "' + goal.nome + '"?',
    confirmText: '🗑️ Elimina',
    danger: true
  }).then(function(confirmed) {
    if (!confirmed) return;
    
    DB.longTermGoals.splice(idx, 1);
    salvaDB();
    mostraObiettivi();
    mostraToast('✅ Obiettivo eliminato!', 'success');
  });
}

function mostraRiepilogoObiettivi() {
  var container = document.getElementById('obiettiviRiepilogo');
  if (!container) return;
  
  // Calcola spese del mese corrente per categoria
  var speseCategoria = {};
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese && t.tipo === 'expense') {
      var imp = parseFloat(t.importo) || 0;
      speseCategoria[t.categoria] = (speseCategoria[t.categoria] || 0) + imp;
    }
  });
  
  var totaleObiettivi = 0;
  var totaleSpeso = 0;
  var obiettiviRaggiunto = 0;
  
  Object.keys(DB.budgetGoals).forEach(function(cat) {
    totaleObiettivi++;
    var budget = DB.budgetGoals[cat];
    var speso = speseCategoria[cat] || 0;
    totaleSpeso += speso;
    
    if (speso <= budget) {
      obiettiviRaggiunto++;
    }
  });
  
  var totBudget = Object.values(DB.budgetGoals).reduce(function(a, b) { return a + b; }, 0);
  var percentualeGlobale = totBudget > 0 ? (totaleSpeso / totBudget * 100) : 0;
  
  var html = '';
  
  if (totaleObiettivi === 0) {
    html = '<div style="text-align:center;padding:30px;background:var(--bg);border-radius:10px">';
    html += '<div style="font-size:2em;margin-bottom:10px">🎯</div>';
    html += '<p style="color:#7f8c8d">Nessun obiettivo impostato per questo mese</p>';
    html += '</div>';
  } else {
    html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:15px">';
    
    // Obiettivi Totali
    html += '<div style="background:linear-gradient(135deg,#a1a1aa,#71717a);padding:20px;border-radius:12px;text-align:center;color:#fff;box-shadow:0 4px 12px rgba(102,126,234,0.3)">';
    html += '<div style="font-size:0.85em;opacity:0.9;margin-bottom:5px">Obiettivi Attivi</div>';
    html += '<div style="font-size:2.5em;font-weight:800;margin-bottom:5px">' + totaleObiettivi + '</div>';
    html += '<div style="font-size:0.8em;opacity:0.8">categorie monitorate</div>';
    html += '</div>';
    
    // Obiettivi Raggiunti
    var percRagg = totaleObiettivi > 0 ? (obiettiviRaggiunto / totaleObiettivi * 100) : 0;
    var coloreRagg = percRagg >= 80 ? '#27ae60' : percRagg >= 50 ? '#f39c12' : '#e74c3c';
    html += '<div style="background:linear-gradient(135deg,' + coloreRagg + ',rgba(' + (percRagg >= 80 ? '39,174,96' : percRagg >= 50 ? '243,156,18' : '231,76,60') + ',0.8));padding:20px;border-radius:12px;text-align:center;color:#fff;box-shadow:0 4px 12px rgba(0,0,0,0.2)">';
    html += '<div style="font-size:0.85em;opacity:0.9;margin-bottom:5px">Obiettivi Raggiunti</div>';
    html += '<div style="font-size:2.5em;font-weight:800;margin-bottom:5px">' + obiettiviRaggiunto + '/' + totaleObiettivi + '</div>';
    html += '<div style="font-size:0.8em;opacity:0.8">' + percRagg.toFixed(0) + '% completati</div>';
    html += '</div>';
    
    // Budget Utilizzato
    var coloreGlob = percentualeGlobale > 100 ? '#e74c3c' : percentualeGlobale > 90 ? '#f39c12' : '#27ae60';
    html += '<div style="background:linear-gradient(135deg,' + coloreGlob + ',rgba(' + (percentualeGlobale > 100 ? '231,76,60' : percentualeGlobale > 90 ? '243,156,18' : '39,174,96') + ',0.8));padding:20px;border-radius:12px;text-align:center;color:#fff;box-shadow:0 4px 12px rgba(0,0,0,0.2)">';
    html += '<div style="font-size:0.85em;opacity:0.9;margin-bottom:5px">Budget Utilizzato</div>';
    html += '<div style="font-size:2.5em;font-weight:800;margin-bottom:5px">' + percentualeGlobale.toFixed(0) + '%</div>';
    html += '<div style="font-size:0.8em;opacity:0.8">' + formatEuro(totaleSpeso) + ' / ' + formatEuro(totBudget) + '</div>';
    html += '</div>';
    
    html += '</div>';
  }
  
  container.innerHTML = html;
}

// ========== OBIETTIVI PERSONALIZZATI ==========
function mostraBudgetGoals() {
  var container = document.getElementById('budgetGoals');
  if (!container) return;
  
  // Calcola spese del mese corrente per categoria
  var speseCategoria = {};
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese && t.tipo === 'expense') {
      var imp = parseFloat(t.importo) || 0;
      speseCategoria[t.categoria] = (speseCategoria[t.categoria] || 0) + imp;
    }
  });
  
  var html = '';
  var hasGoals = false;
  
  Object.keys(DB.budgetGoals).sort().forEach(function(categoria) {
    hasGoals = true;
    var budget = DB.budgetGoals[categoria];
    var speso = speseCategoria[categoria] || 0;
    var rimanente = budget - speso;
    var percentuale = budget > 0 ? (speso / budget * 100) : 0;
    
    var colore, bgGradient, emoji, stato;
    if (percentuale <= 75) {
      colore = '#27ae60';
      bgGradient = 'linear-gradient(135deg, #e8f5e9, #c8e6c9)';
      emoji = '✅';
      stato = 'Ottimo!';
    } else if (percentuale <= 90) {
      colore = '#f39c12';
      bgGradient = 'linear-gradient(135deg, #fff3e0, #ffe0b2)';
      emoji = '⚠️';
      stato = 'Attenzione';
    } else if (percentuale <= 100) {
      colore = '#e67e22';
      bgGradient = 'linear-gradient(135deg, #fff3e0, #ffcc80)';
      emoji = '⚠️';
      stato = 'Vicino al limite';
    } else {
      colore = '#e74c3c';
      bgGradient = 'linear-gradient(135deg, #ffebee, #ffcdd2)';
      emoji = '❌';
      stato = 'Budget superato!';
    }
    
    html += '<div style="margin-bottom:15px;padding:16px;background:' + bgGradient + ';border-radius:12px;border-left:5px solid ' + colore + ';box-shadow:0 2px 8px rgba(0,0,0,0.1)">';
    
    // Header
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">';
    html += '<div>';
    html += '<div style="font-size:1.1em;font-weight:800;color:#2c3e50">' + categoria + '</div>';
    html += '<div style="font-size:0.8em;color:#7f8c8d;margin-top:2px">' + emoji + ' ' + stato + '</div>';
    html += '</div>';
    html += '<div style="display:flex;gap:6px">';
    html += '<button onclick="editObiettivo(\'' + categoria + '\')" style="background:#3498db;color:#fff;border:none;padding:8px 12px;border-radius:8px;cursor:pointer;font-size:0.9em;font-weight:600;box-shadow:0 2px 4px rgba(52,152,219,0.3)">✏️ Modifica</button>';
    html += '<button onclick="eliminaObiettivo(\'' + categoria + '\')" style="background:#e74c3c;color:#fff;border:none;padding:8px 12px;border-radius:8px;cursor:pointer;font-size:0.9em;font-weight:600;box-shadow:0 2px 4px rgba(231,76,60,0.3)">🗑️</button>';
    html += '</div>';
    html += '</div>';
    
    // Importi
    html += '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:12px">';
    html += '<div style="text-align:center;padding:8px;background:rgba(255,255,255,0.7);border-radius:8px">';
    html += '<div style="font-size:0.75em;color:#7f8c8d;margin-bottom:3px">Speso</div>';
    html += '<div style="font-size:1.1em;font-weight:800;color:' + colore + '">' + formatEuro(speso) + '</div>';
    html += '</div>';
    html += '<div style="text-align:center;padding:8px;background:rgba(255,255,255,0.7);border-radius:8px">';
    html += '<div style="font-size:0.75em;color:#7f8c8d;margin-bottom:3px">Budget</div>';
    html += '<div style="font-size:1.1em;font-weight:800;color:#2c3e50">' + formatEuro(budget) + '</div>';
    html += '</div>';
    html += '<div style="text-align:center;padding:8px;background:rgba(255,255,255,0.7);border-radius:8px">';
    html += '<div style="font-size:0.75em;color:#7f8c8d;margin-bottom:3px">Rimanente</div>';
    html += '<div style="font-size:1.1em;font-weight:800;color:' + (rimanente >= 0 ? '#27ae60' : '#e74c3c') + '">' + formatEuro(Math.abs(rimanente)) + '</div>';
    html += '</div>';
    html += '</div>';
    
    // Barra progresso
    html += '<div style="background:rgba(255,255,255,0.5);height:12px;border-radius:6px;overflow:hidden;box-shadow:inset 0 1px 3px rgba(0,0,0,0.1)">';
    html += '<div style="background:' + colore + ';height:100%;width:' + Math.min(percentuale, 100) + '%;transition:width 0.5s ease;box-shadow:0 0 10px rgba(' + (percentuale > 100 ? '231,76,60' : '39,174,96') + ',0.5)"></div>';
    html += '</div>';
    
    // Percentuale
    html += '<div style="text-align:right;font-size:0.85em;color:' + colore + ';font-weight:700;margin-top:6px">';
    html += percentuale.toFixed(1) + '% utilizzato';
    html += '</div>';
    
    html += '</div>';
  });
  
  if (!hasGoals) {
    html = '<div style="text-align:center;padding:40px;background:linear-gradient(135deg,#f5f7fa,#c3cfe2);border-radius:12px">';
    html += '<div style="font-size:3em;margin-bottom:10px">🎯</div>';
    html += '<div style="font-size:1.2em;font-weight:700;color:#2c3e50;margin-bottom:8px">Nessun obiettivo impostato</div>';
    html += '<p style="color:#7f8c8d;margin-bottom:15px">Imposta budget mensili per tenere sotto controllo le tue spese!</p>';
    html += '</div>';
  }
  
  container.innerHTML = html;
}

function aggiungiObiettivo() {
  var modal = document.getElementById('modal');
  modal.classList.add('active');
  
  // Costruisci le opzioni del select
  var optionsHTML = '<option value="">-- Seleziona categoria --</option>';
  DB.categorie.expense.sort().forEach(function(cat) {
    var disabled = DB.budgetGoals[cat] ? ' disabled' : '';
    var label = DB.budgetGoals[cat] ? cat + ' (già impostato)' : cat;
    optionsHTML += '<option value="' + cat + '"' + disabled + '>' + label + '</option>';
  });
  
  // Costruisci tutto l'HTML in una volta
  var html = '';
  html += '<div class="modal-header"><h3>🎯 Aggiungi Obiettivo Budget</h3><button class="close-btn" onclick="chiudiModal()">×</button></div>';
  html += '<div style="padding:20px">';
  html += '<p style="font-size:0.9em;color:#7f8c8d;margin-bottom:15px">Imposta un budget mensile per una categoria di spesa e monitora i tuoi progressi</p>';
  
  html += '<div style="margin-bottom:15px">';
  html += '<label style="display:block;font-weight:700;margin-bottom:8px;color:var(--text)">📂 Categoria</label>';
  html += '<select id="goalCategory" style="width:100%;padding:12px;border:2px solid var(--border);border-radius:10px;font-size:1em;background:var(--bg);color:var(--text)">';
  html += optionsHTML;
  html += '</select>';
  html += '</div>';
  
  html += '<div style="margin-bottom:20px">';
  html += '<label style="display:block;font-weight:700;margin-bottom:8px;color:var(--text)">💰 Budget Mensile (€)</label>';
  html += '<input type="number" id="goalAmount" placeholder="es. 200" step="0.01" min="0.01" style="width:100%;padding:12px;border:2px solid var(--border);border-radius:10px;font-size:1em;background:var(--bg);color:var(--text)">';
  html += '</div>';
  
  html += '<div style="background:linear-gradient(135deg,#a1a1aa,#71717a);padding:15px;border-radius:10px;margin-bottom:20px">';
  html += '<div style="font-size:0.85em;color:#fff;line-height:1.6">';
  html += '<strong>💡 Suggerimenti:</strong><br>';
  html += '• Necessità: budget realistici per spese fisse<br>';
  html += '• Desideri: obiettivi sfidanti per risparmiare<br>';
  html += '• Monitora i progressi con le barre colorate';
  html += '</div>';
  html += '</div>';
  
  html += '<div style="display:flex;gap:10px">';
  html += '<button class="btn" onclick="salvaObiettivo()" style="flex:1;background:var(--income);font-size:1em;padding:14px">✅ Aggiungi Obiettivo</button>';
  html += '<button class="btn btn-danger" onclick="chiudiModal()" style="flex:1;font-size:1em;padding:14px">Annulla</button>';
  html += '</div>';
  
  html += '</div>';
  
  var content = modal.querySelector('.modal-content');
  content.innerHTML = html;
}

function salvaObiettivo() {
  var categoria = document.getElementById('goalCategory').value;
  var budget = parseFloat(document.getElementById('goalAmount').value);
  
  if (!categoria) {
    mostraToast('⚠️ Seleziona una categoria!', 'warning');
    return;
  }
  
  if (!budget || budget <= 0) {
    mostraToast('⚠️ Inserisci un importo valido!', 'warning');
    return;
  }
  
  DB.budgetGoals[categoria] = budget;
  salvaDB();
  chiudiModal();
  mostraBudgetGoals();
  mostraToast('✅ Obiettivo aggiunto per ' + categoria + '!', 'success');
  playSound('success');
}

function editObiettivo(categoria) {
  var modal = document.getElementById('modal');
  modal.classList.add('active');
  
  var budgetAttuale = DB.budgetGoals[categoria];
  
  // Costruisci tutto l'HTML in una volta
  var html = '';
  html += '<div class="modal-header"><h3>✏️ Modifica Obiettivo</h3><button class="close-btn" onclick="chiudiModal()">×</button></div>';
  html += '<div style="padding:20px">';
  
  html += '<div style="margin-bottom:15px">';
  html += '<label style="display:block;font-weight:700;margin-bottom:8px;color:var(--text)">📂 Categoria</label>';
  html += '<input type="text" value="' + categoria + '" disabled style="width:100%;padding:12px;border:2px solid var(--border);border-radius:10px;font-size:1em;background:var(--bg);color:#7f8c8d">';
  html += '</div>';
  
  html += '<div style="margin-bottom:20px">';
  html += '<label style="display:block;font-weight:700;margin-bottom:8px;color:var(--text)">💰 Budget Mensile (€)</label>';
  html += '<input type="number" id="goalEditAmount" value="' + budgetAttuale + '" step="0.01" min="0.01" style="width:100%;padding:12px;border:2px solid var(--border);border-radius:10px;font-size:1em;background:var(--bg);color:var(--text)">';
  html += '</div>';
  
  html += '<div style="display:flex;gap:10px">';
  html += '<button class="btn" onclick="salvaEditObiettivo(\'' + categoria + '\')" style="flex:1;background:#3498db;font-size:1em;padding:14px">✅ Salva Modifiche</button>';
  html += '<button class="btn btn-danger" onclick="chiudiModal()" style="flex:1;font-size:1em;padding:14px">Annulla</button>';
  html += '</div>';
  
  html += '</div>';
  
  var content = modal.querySelector('.modal-content');
  content.innerHTML = html;
}

function salvaEditObiettivo(categoria) {
  var nuovoBudget = parseFloat(document.getElementById('goalEditAmount').value);
  
  if (!nuovoBudget || nuovoBudget <= 0) {
    mostraToast('⚠️ Importo non valido!', 'warning');
    return;
  }
  
  DB.budgetGoals[categoria] = nuovoBudget;
  salvaDB();
  chiudiModal();
  mostraBudgetGoals();
  mostraToast('✅ Obiettivo aggiornato!', 'success');
  playSound('success');
}

function eliminaObiettivo(categoria) {
  mostraConferma({
    icon: '🗑️',
    title: 'Elimina Obiettivo',
    message: 'Vuoi davvero eliminare l\'obiettivo per "' + categoria + '"?',
    confirmText: '🗑️ Elimina',
    danger: true
  }).then(function(confirmed) {
    if (!confirmed) return;
    
    delete DB.budgetGoals[categoria];
    salvaDB();
    mostraBudgetGoals();
    mostraToast('✅ Obiettivo eliminato!', 'success');
  });
}

// ========== TRANSAZIONI ==========
function nuovaTrans() {
  // PRIMA: Reset completo di tutti i campi
  resetCampiModal();

  document.getElementById('modal').classList.add('active');
  // Reset scroll della modal-content all'apertura
  var modalContent = document.querySelector('#modal .modal-content');
  if (modalContent) {
    modalContent.scrollTop = 0;
  }
  document.getElementById('tid').value = '';
  document.getElementById('tdata').value = new Date().toISOString().split('T')[0];

  // Imposta l'orario corrente
  var now = new Date();
  var hours = String(now.getHours()).padStart(2, '0');
  var minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('tora').value = hours + ':' + minutes;

  document.getElementById('ttipo').value = 'expense';
  aggCatSel();
  document.getElementById('timp').value = '';
  document.getElementById('tnote').value = '';

  // Reset metodo di pagamento al default
  var tmetodo = document.getElementById('tmetodo');
  if (tmetodo) {
    tmetodo.value = 'webank';
  }

  // Reset Chi ha pagato (default: user)
  chiHaPagato = 'user';
  var chiHaPagatoInput = document.getElementById('tchiHaPagato');
  if (chiHaPagatoInput) {
    chiHaPagatoInput.value = 'user';
  }
  // Reset visual toggle
  var userBtn = document.querySelector('.who-paid-btn[data-who="user"]');
  var partnerBtn = document.querySelector('.who-paid-btn[data-who="partner"]');
  if (userBtn && partnerBtn) {
    userBtn.style.background = 'rgba(78,236,163,0.1)';
    userBtn.style.borderColor = '#4ecca3';
    partnerBtn.style.background = 'rgba(255,255,255,0.05)';
    partnerBtn.style.borderColor = 'rgba(78,236,163,0.3)';
  }

  // Reset checkbox condiviso
  var checkboxCondiviso = document.getElementById('tcondiviso');
  if (checkboxCondiviso) {
    checkboxCondiviso.checked = false;
  }

  // Reset checkbox virtual recovery
  var checkboxVirtual = document.getElementById('tvirtual');
  if (checkboxVirtual) {
    checkboxVirtual.checked = false;
  }

  // Reset anticipo partner
  var checkboxAnticipo = document.getElementById('tAnticipoPartner');
  if (checkboxAnticipo) {
    checkboxAnticipo.checked = false;
    document.getElementById('anticipoPartnerSection').style.display = 'none';
    document.getElementById('tAnticipoImporto').value = '0';
  }
  aggiornaVisualCheckboxAnticipo();

  // Reset pagamento misto
  var pagamentoMistoCheckbox = document.getElementById('tpagamentoMisto');
  var pagamentoMistoSection = document.getElementById('pagamentoMistoSection');
  var mistoCheckbox = document.getElementById('mistoCheckbox');
  var mistoCheckIcon = document.getElementById('mistoCheckIcon');
  if (pagamentoMistoCheckbox) {
    pagamentoMistoCheckbox.checked = false;
  }
  if (pagamentoMistoSection) {
    pagamentoMistoSection.style.display = 'none';
  }
  if (mistoCheckbox) {
    mistoCheckbox.style.background = '#fff';
    mistoCheckbox.style.borderColor = '#ff9800';
  }
  if (mistoCheckIcon) {
    mistoCheckIcon.style.display = 'none';
  }
  // Reset chi ha pagato la differenza (IMPORTANTE!)
  pagataDifferenzaDa = 'io';

  // Reset visual custom checkboxes
  aggiornaVisualCheckbox();
  aggiornaVisualCheckboxVirtual();

  // NUOVO: Aggiorna testi dinamici basati su config
  aggiornaTestiDinamiciForm();
  aggiornaVisibilitaCampiModalita();
}

// ========== FUNZIONI AGGIORNAMENTO TESTI DINAMICI ==========
function aggiornaTestiDinamiciForm() {
  if (!DB.config || !DB.config.setupCompleted) return;
  
  var userName = DB.config.userName || 'Utente';
  var partnerName = DB.config.partnerName || 'Partner';
  var mode = DB.config.mode;
  
  // 1. Aggiorna "Chi ha pagato" buttons
  var userNameSpan = document.getElementById('whoPaidUserName');
  var partnerNameSpan = document.getElementById('whoPaidPartnerName');
  if (userNameSpan) userNameSpan.textContent = userName;
  if (partnerNameSpan && mode === 'couple') partnerNameSpan.textContent = partnerName;
  
  // 2. Aggiorna testo "Anticipo Partner"
  aggiornaTestiAnticipo();
  
  // 3. Aggiorna testo "Pagamento Misto"
  aggiornaTestiPagamentoMisto();
}

function aggiornaVisibilitaCampiModalita() {
  if (!DB.config || !DB.config.setupCompleted) return;
  
  var mode = DB.config.mode;
  var chiHaPagatoGroup = document.getElementById('chiHaPagatoGroup');
  var anticipoGroup = document.getElementById('anticipoPartnerCheckboxGroup');
  
  if (mode === 'solo') {
    // Modalità SOLO: nascondi chi ha pagato e anticipo
    if (chiHaPagatoGroup) chiHaPagatoGroup.style.display = 'none';
    if (anticipoGroup) anticipoGroup.style.display = 'none';
    
    // NUOVO - Nascondi nav item "Condiviso"
    var navCondiviso = document.getElementById('navCondiviso');
    if (navCondiviso) navCondiviso.style.display = 'none';
    
  } else if (mode === 'couple') {
    // Modalità COPPIA: mostra chi ha pagato
    if (chiHaPagatoGroup) chiHaPagatoGroup.style.display = 'block';
    // Anticipo appare solo se user ha pagato (gestito in selezionaChiHaPagato)
    
    // NUOVO - Mostra nav item "Condiviso"
    var navCondiviso = document.getElementById('navCondiviso');
    if (navCondiviso) navCondiviso.style.display = 'block';
  }
}

function aggiornaTestiAnticipo() {
  if (!DB.config || !DB.config.setupCompleted) return;
  if (DB.config.mode === 'solo') return; // Non applicabile in modalità solo
  
  var partnerName = DB.config.partnerName || 'Partner';
  var chiHaPagato = document.getElementById('tchiHaPagato').value;
  
  // Trova l'elemento con il testo dell'anticipo
  var anticipoToggle = document.getElementById('anticipoPartnerToggle');
  if (anticipoToggle) {
    var textDiv = anticipoToggle.querySelector('div[style*="font-size:1.05em"]');
    var descDiv = anticipoToggle.querySelector('div[style*="font-size:0.85em"]');
    
    if (chiHaPagato === 'user') {
      // Io ho pagato → Include anticipo per [Partner]
      if (textDiv) textDiv.innerHTML = `💰 Include Anticipo per ${partnerName}`;
      if (descDiv) descDiv.textContent = `Ho anticipato una parte della spesa per ${partnerName}`;
    } else {
      // Partner ha pagato → Include anticipo per Me
      var userName = DB.config.userName || 'me';
      if (textDiv) textDiv.innerHTML = `💰 Include Anticipo per ${userName}`;
      if (descDiv) descDiv.textContent = `${partnerName} ha anticipato una parte per me`;
    }
  }
  
  // Aggiorna anche i testi nella sezione anticipo
  var labelAnticipo = document.querySelector('#anticipoPartnerSection label');
  if (labelAnticipo && chiHaPagato === 'user') {
    var partnerName = DB.config.partnerName || 'il partner';
    labelAnticipo.textContent = `Quanto hai anticipato per ${partnerName}?`;
  } else if (labelAnticipo && chiHaPagato === 'partner') {
    var userName = DB.config.userName || 'te';
    labelAnticipo.textContent = `Quanto ha anticipato ${DB.config.partnerName} per ${userName}?`;
  }
}

function aggiornaTestiPagamentoMisto() {
  if (!DB.config || !DB.config.setupCompleted) return;
  
  var chiHaPagato = document.getElementById('tchiHaPagato') ? document.getElementById('tchiHaPagato').value : 'user';
  var userName = DB.config.userName || 'Utente';
  var partnerName = DB.config.partnerName || 'Partner';
  var hasTicketsUser = DB.config.ticketRestaurant ? DB.config.ticketRestaurant.user : false;
  var hasTicketsPartner = DB.config.ticketRestaurant ? DB.config.ticketRestaurant.partner : false;
  
  // Determina chi ha i buoni e chi paga
  var pagatore = chiHaPagato === 'user' ? userName : partnerName;
  var hasTickets = chiHaPagato === 'user' ? hasTicketsUser : hasTicketsPartner;
  
  // Trova checkbox pagamento misto
  var mistoToggle = document.querySelector('#pagamentoMistoCheckboxGroup > div');
  if (mistoToggle) {
    var textDiv = mistoToggle.querySelector('div[style*="font-size:1em"]');
    var descDiv = mistoToggle.querySelector('div[style*="font-size:0.8em"]');
    
    if (hasTickets && chiHaPagato === 'user') {
      // Io ho i buoni e ho pagato
      if (textDiv) textDiv.innerHTML = '🎫 Pagamento Misto (Buoni + Cash)';
      if (descDiv) descDiv.textContent = 'Usa buoni + altro metodo';
    } else if (hasTicketsUser && chiHaPagato === 'partner' && DB.config.mode === 'couple') {
      // Partner ha pagato ma io ho i buoni
      if (textDiv) textDiv.innerHTML = `🎫 ${userName} ha usato Buoni`;
      if (descDiv) descDiv.textContent = `${userName} ha pagato con buoni + ${partnerName} ha messo differenza`;
    } else if (hasTicketsPartner && chiHaPagato === 'user' && DB.config.mode === 'couple') {
      // Io ho pagato ma partner ha i buoni
      if (textDiv) textDiv.innerHTML = `🎫 ${partnerName} ha usato Buoni`;
      if (descDiv) descDiv.textContent = `${partnerName} ha pagato con buoni + io ho messo differenza`;
    } else {
      // Default
      if (textDiv) textDiv.innerHTML = '💳 Pagamento Misto';
      if (descDiv) descDiv.textContent = 'Usa buoni + altro metodo';
    }
  }
  
  // Aggiorna label "Differenza pagata da"
  aggiornaLabelDifferenzaPagata();
}

function aggiornaLabelDifferenzaPagata() {
  if (!DB.config || !DB.config.setupCompleted) return;
  if (DB.config.mode === 'solo') return;
  
  var chiHaPagato = document.getElementById('tchiHaPagato') ? document.getElementById('tchiHaPagato').value : 'user';
  var userName = DB.config.userName || 'Utente';
  var partnerName = DB.config.partnerName || 'Partner';
  
  // Testo "Il mio conto" / "Partner ha pagato"
  var radioIoText = document.querySelector('#pagataDaIo div[style*="font-weight:600"]');
  var radioPartnerText = document.getElementById('partnerPagaDifferenzaText');
  
  if (chiHaPagato === 'user') {
    // Io sto registrando, io ho pagato con buoni
    if (radioIoText) radioIoText.textContent = 'Il mio conto';
    if (radioPartnerText) radioPartnerText.textContent = `👤 ${partnerName} paga la differenza`;
  } else {
    // Partner ha pagato con buoni, io sto registrando
    if (radioIoText) radioIoText.textContent = `${partnerName} ha usato suo conto`;
    if (radioPartnerText) radioPartnerText.textContent = `Io (${userName}) pago la differenza`;
  }
}

function selezionaChiHaPagato(who, el) {
  chiHaPagato = who;
  
  var chiHaPagatoInput = document.getElementById('tchiHaPagato');
  if (chiHaPagatoInput) {
    chiHaPagatoInput.value = who;
  }
  
  // Aggiorna UI toggle
  var userBtn = document.querySelector('.who-paid-btn[data-who="user"]');
  var partnerBtn = document.querySelector('.who-paid-btn[data-who="partner"]');
  
  if (userBtn && partnerBtn) {
    userBtn.style.background = 'rgba(255,255,255,0.05)';
    userBtn.style.borderColor = 'rgba(78,236,163,0.3)';
    partnerBtn.style.background = 'rgba(255,255,255,0.05)';
    partnerBtn.style.borderColor = 'rgba(78,236,163,0.3)';
    
    el.style.background = 'rgba(78,236,163,0.1)';
    el.style.borderColor = '#4ecca3';
  }
  
  // NUOVO - Mostra anticipo per ENTRAMBI (modalità coppia)
  var anticipoGroup = document.getElementById('anticipoPartnerCheckboxGroup');
  if (anticipoGroup && DB.config && DB.config.mode === 'couple') {
    anticipoGroup.style.display = 'block';
    
    // Reset anticipo se cambio chi ha pagato
    var checkboxAnticipo = document.getElementById('tAnticipoPartner');
    if (checkboxAnticipo) {
      checkboxAnticipo.checked = false;
      document.getElementById('anticipoPartnerSection').style.display = 'none';
      aggiornaVisualCheckboxAnticipo();
    }
  }
  
  // Aggiorna testi dinamici
  aggiornaTestiAnticipo();
  aggiornaTestiPagamentoMisto();

  // Aggiorna visibilità checkbox pagamento misto
  aggiornaVisibilitaPagamentoMisto();

  // NUOVO: Nascondi metodo di pagamento se paga il partner (non riguarda i miei conti)
  var metodoPagamentoGroup = document.getElementById('metodoPagamentoGroup');
  var tmetodoSelect = document.getElementById('tmetodo');

  if (who === 'partner') {
    // Partner paga - nascondi metodo di pagamento
    if (metodoPagamentoGroup) metodoPagamentoGroup.style.display = 'none';
    if (tmetodoSelect) tmetodoSelect.removeAttribute('required');
  } else {
    // Io pago - mostra metodo di pagamento
    if (metodoPagamentoGroup) metodoPagamentoGroup.style.display = 'block';
    if (tmetodoSelect) tmetodoSelect.setAttribute('required', '');
  }

  playSound('click');
}

function aggiornaVisibilitaPagamentoMisto() {
  if (!DB.config || !DB.config.setupCompleted) return;
  
  var chiHaPagato = document.getElementById('tchiHaPagato') ? document.getElementById('tchiHaPagato').value : 'user';
  var hasTicketsUser = DB.config.ticketRestaurant ? DB.config.ticketRestaurant.user : false;
  var hasTicketsPartner = DB.config.ticketRestaurant ? DB.config.ticketRestaurant.partner : false;
  var metodoPagamento = document.getElementById('tmetodo') ? document.getElementById('tmetodo').value : 'webank';
  
  var mistoCheckboxGroup = document.getElementById('pagamentoMistoCheckboxGroup');
  
  // Mostra checkbox solo se:
  // 1. Qualcuno ha i buoni
  // 2. Metodo pagamento = buoni_pasto
  var shouldShow = (hasTicketsUser || hasTicketsPartner) && metodoPagamento === 'buoni_pasto';
  
  if (mistoCheckboxGroup) {
    mistoCheckboxGroup.style.display = shouldShow ? 'block' : 'none';
  }
}

function toggleCondivisoCustom() {
  var checkbox = document.getElementById('tcondiviso');
  if (!checkbox) return;
  
  checkbox.checked = !checkbox.checked;
  aggiornaVisualCheckbox();
  
  // Ricalcola se pagamento misto è attivo
  var pagamentoMisto = document.getElementById('tpagamentoMisto');
  if (pagamentoMisto && pagamentoMisto.checked) {
    aggiornaCalcoloCondivisoMisto();
  }
  
  playSound('click');
}

function aggiornaVisualCheckbox() {
  var checkbox = document.getElementById('tcondiviso');
  var checkIcon = document.getElementById('checkIcon');
  var customCheckbox = document.getElementById('customCheckbox');
  
  if (!checkbox || !checkIcon || !customCheckbox) return;
  
  // Sempre attivo e cliccabile
  customCheckbox.style.opacity = '1';
  customCheckbox.style.cursor = 'pointer';
  
  if (checkbox.checked) {
    checkIcon.style.display = 'block';
    customCheckbox.style.background = 'var(--income)';
    customCheckbox.style.borderColor = 'var(--income)';
    checkIcon.style.color = '#fff';
  } else {
    checkIcon.style.display = 'none';
    customCheckbox.style.background = '#fff';
    customCheckbox.style.borderColor = 'var(--income)';
  }
}

function toggleRecuperoVirtuale() {
  var checkbox = document.getElementById('tvirtual');
  if (!checkbox) return;
  
  checkbox.checked = !checkbox.checked;
  aggiornaVisualCheckboxVirtual();
}

function aggiornaVisualCheckboxVirtual() {
  var checkbox = document.getElementById('tvirtual');
  var checkIcon = document.getElementById('virtualCheckIcon');
  var customCheckbox = document.getElementById('virtualCheckbox');
  
  if (!checkbox || !checkIcon || !customCheckbox) return;
  
  if (checkbox.checked) {
    checkIcon.style.display = 'block';
    customCheckbox.style.background = '#9b59b6';
    customCheckbox.style.borderColor = '#9b59b6';
    checkIcon.style.color = '#fff';
  } else {
    checkIcon.style.display = 'none';
    customCheckbox.style.background = '#fff';
    customCheckbox.style.borderColor = '#9b59b6';
  }
}

// ========== FUNZIONI ANTICIPO PARTNER ==========
function toggleAnticipoPartner() {
  var checkbox = document.getElementById('tAnticipoPartner');
  if (!checkbox) return;
  
  checkbox.checked = !checkbox.checked;
  aggiornaVisualCheckboxAnticipo();
  
  var section = document.getElementById('anticipoPartnerSection');
  if (checkbox.checked) {
    section.style.display = 'block';
    calcolaAnticipoPartner();
  } else {
    section.style.display = 'none';
    document.getElementById('tAnticipoImporto').value = '0';
  }
  
  playSound('click');
}

function aggiornaVisualCheckboxAnticipo() {
  var checkbox = document.getElementById('tAnticipoPartner');
  var checkIcon = document.getElementById('anticipoCheckIcon');
  var customCheckbox = document.getElementById('anticipoCheckbox');
  var toggle = document.getElementById('anticipoPartnerToggle');
  
  if (!checkbox || !checkIcon || !customCheckbox) return;
  
  if (checkbox.checked) {
    checkIcon.style.display = 'block';
    customCheckbox.style.background = '#a1a1aa';
    customCheckbox.style.borderColor = '#a1a1aa';
    checkIcon.style.color = '#fff';
    if (toggle) {
      toggle.style.background = 'rgba(255,140,0,0.2)';
      toggle.style.borderColor = 'rgba(255,140,0,0.6)';
    }
  } else {
    checkIcon.style.display = 'none';
    customCheckbox.style.background = '#fff';
    customCheckbox.style.borderColor = '#a1a1aa';
    if (toggle) {
      toggle.style.background = 'rgba(255,140,0,0.1)';
      toggle.style.borderColor = 'rgba(161,161,170,0.3)';
    }
  }
}

function calcolaAnticipoPartner() {
  var importoTotale = parseFloat(document.getElementById('timp').value) || 0;
  var anticipoPartner = parseFloat(document.getElementById('tAnticipoImporto').value) || 0;
  
  // Validazione: anticipo non può essere maggiore del totale
  if (anticipoPartner > importoTotale) {
    anticipoPartner = importoTotale;
    document.getElementById('tAnticipoImporto').value = importoTotale.toFixed(2);
  }
  
  var spesaEffettiva = importoTotale - anticipoPartner;
  
  // Aggiorna i display
  document.getElementById('anticipoTotalePagato').textContent = '€' + importoTotale.toFixed(2);
  document.getElementById('anticipoImportoPartner').textContent = '-€' + anticipoPartner.toFixed(2);
  document.getElementById('anticipoSpesaEffettiva').textContent = '€' + spesaEffettiva.toFixed(2);
}

// ========== RIMBORSO DAL PARTNER (per entrate) ==========
function toggleRimborsoPartner() {
  var checkbox = document.getElementById('tRimborsoPartner');
  if (!checkbox) return;

  checkbox.checked = !checkbox.checked;
  aggiornaVisualCheckboxRimborso();
  playSound('click');
}

function aggiornaVisualCheckboxRimborso() {
  var checkbox = document.getElementById('tRimborsoPartner');
  var checkIcon = document.getElementById('rimborsoCheckIcon');
  var customCheckbox = document.getElementById('rimborsoCheckbox');
  var toggle = document.getElementById('rimborsoPartnerToggle');

  if (!checkbox || !checkIcon || !customCheckbox) return;

  if (checkbox.checked) {
    checkIcon.style.display = 'block';
    customCheckbox.style.background = '#9b59b6';
    customCheckbox.style.borderColor = '#9b59b6';
    checkIcon.style.color = '#fff';
    if (toggle) {
      toggle.style.background = 'rgba(155,89,182,0.2)';
      toggle.style.borderColor = '#9b59b6';
    }
  } else {
    checkIcon.style.display = 'none';
    customCheckbox.style.background = '#fff';
    customCheckbox.style.borderColor = '#9b59b6';
    if (toggle) {
      toggle.style.background = 'rgba(155,89,182,0.1)';
      toggle.style.borderColor = 'rgba(155,89,182,0.3)';
    }
  }
}

function aggCatSel() {
  var tipoSelect = document.getElementById('ttipo');
  var sel = document.getElementById('tcat');
  
  if (!tipoSelect || !sel) {
    console.error('[aggCatSel] Elementi del form non trovati');
    return;
  }
  
  var tipo = tipoSelect.value;
  sel.innerHTML = '';
  
  // Safety check: verifica che DB e DB.categorie esistano
  if (!DB || !DB.categorie) {
    console.error('[aggCatSel] DB o DB.categorie non inizializzato', DB);
    // Inizializza categorie di default se mancano
    if (!DB.categorie) {
      DB.categorie = {
        income: ['Stipendio', 'Bonus', 'Altro'],
        expense: ['Spesa', 'Ristoranti', 'Trasporti', 'Casa', 'Svago', 'Altro']
      };
    }
  }
  
  // Safety check: verifica che il tipo esista
  if (!DB.categorie[tipo]) {
    console.error('[aggCatSel] Categoria tipo non trovata:', tipo, 'Disponibili:', Object.keys(DB.categorie));
    return;
  }
  
  // Per "Spesa Partner" usa le categorie expense
  var catType = tipo === 'partner_payment' ? 'expense' : tipo;
  
  if (!DB.categorie[catType]) {
    console.error('[aggCatSel] Categoria catType non trovata:', catType);
    return;
  }
  
  DB.categorie[catType].forEach(function(cat) {
    var o = document.createElement('option');
    o.value = cat;
    o.textContent = cat;
    sel.appendChild(o);
  });
  
  // NUOVO - Mostra/nascondi destinazione e metodo in base al tipo
  var destGroup = document.getElementById('destinazioneGroup');
  var dettagliBuoniGroup = document.getElementById('dettagliBuoniGroup');
  var metodoPagamentoGroup = document.getElementById('metodoPagamentoGroup');
  var pagamentoMistoGroup = document.getElementById('pagamentoMistoCheckboxGroup');
  
  var tmetodoSelect = document.getElementById('tmetodo');

  if (tipo === 'income') {
    // ENTRATA - mostra destinazione, nascondi metodo
    if (destGroup) destGroup.style.display = 'block';
    if (metodoPagamentoGroup) metodoPagamentoGroup.style.display = 'none';
    if (pagamentoMistoGroup) pagamentoMistoGroup.style.display = 'none';

    // Rimuove required da tmetodo nascosto per evitare errore form
    if (tmetodoSelect) tmetodoSelect.removeAttribute('required');
    
    // NUOVO - Nascondi "Chi ha pagato" per entrate
    var chiHaPagatoGroup = document.getElementById('chiHaPagatoGroup');
    if (chiHaPagatoGroup) chiHaPagatoGroup.style.display = 'none';
    
    // NUOVO - Nascondi anche "Spesa Condivisa" e "Anticipo Partner" per entrate
    var condivisoGroup = document.getElementById('condivisoCheckboxGroup');
    if (condivisoGroup) condivisoGroup.style.display = 'none';

    var anticipoGroup = document.getElementById('anticipoPartnerCheckboxGroup');
    if (anticipoGroup) anticipoGroup.style.display = 'none';

    var virtualRecoveryGroupEl = document.getElementById('virtualRecoveryGroup');
    if (virtualRecoveryGroupEl) virtualRecoveryGroupEl.style.display = 'none';

    // NUOVO - Mostra "Rimborso dal partner" per entrate (solo modalità coppia)
    var rimborsoGroup = document.getElementById('rimborsoPartnerGroup');
    if (rimborsoGroup) {
      if (DB.config && DB.config.mode === 'couple') {
        rimborsoGroup.style.display = 'block';
        // Aggiorna nome partner nel testo
        var nomeSpan = document.getElementById('rimborsoPartnerNome');
        if (nomeSpan && DB.config.partnerName) {
          nomeSpan.textContent = DB.config.partnerName;
        }
      } else {
        rimborsoGroup.style.display = 'none';
      }
    }

    // NUOVO - Auto-seleziona conto principale
    var tdest = document.getElementById('tdestinazione');
    if (tdest && DB.contiPersonalizzati) {
      var principale = DB.contiPersonalizzati.find(function(c) { return c.principale; });
      if (principale) {
        tdest.value = principale.id;
      }
    }

    checkDestinazioneSelezionata(); // Check se è buoni
  } else if (tipo === 'partner_payment') {
    // SPESA PARTNER - nascondi tutto (non tocca i tuoi conti)
    if (destGroup) destGroup.style.display = 'none';
    if (dettagliBuoniGroup) dettagliBuoniGroup.style.display = 'none';
    if (metodoPagamentoGroup) metodoPagamentoGroup.style.display = 'none';
    if (pagamentoMistoGroup) pagamentoMistoGroup.style.display = 'none';

    // Rimuove required da tmetodo nascosto per evitare errore form
    if (tmetodoSelect) tmetodoSelect.removeAttribute('required');
    
    // Riabilita importo
    var timpInput = document.getElementById('timp');
    if (timpInput) {
      timpInput.readOnly = false;
      timpInput.style.background = '';
    }
    
    // Riabilita categoria
    var categoriaSelect = document.getElementById('tcat');
    if (categoriaSelect) {
      categoriaSelect.disabled = false;
      categoriaSelect.style.opacity = '1';
      categoriaSelect.style.cursor = '';
      categoriaSelect.style.background = '';
    }
  } else {
    // USCITA - mostra metodo, nascondi destinazione
    if (destGroup) destGroup.style.display = 'none';
    if (dettagliBuoniGroup) dettagliBuoniGroup.style.display = 'none';
    if (metodoPagamentoGroup) metodoPagamentoGroup.style.display = 'block';

    // Nascondi rimborso partner per uscite
    var rimborsoGroupUscite = document.getElementById('rimborsoPartnerGroup');
    if (rimborsoGroupUscite) rimborsoGroupUscite.style.display = 'none';

    // Ripristina required su tmetodo visibile
    if (tmetodoSelect) tmetodoSelect.setAttribute('required', '');
    
    // NUOVO - Mostra "Chi ha pagato" per uscite (solo modalità coppia)
    if (DB.config && DB.config.mode === 'couple') {
      var chiHaPagatoGroup = document.getElementById('chiHaPagatoGroup');
      if (chiHaPagatoGroup) chiHaPagatoGroup.style.display = 'block';
    }
    
    // Mostra pagamento misto solo se ha senso (gestito da aggiornaVisibilitaPagamentoMisto)
    aggiornaVisibilitaPagamentoMisto();
    
    // NUOVO - Mostra "Spesa Condivisa" e "Recupero Virtuale" per uscite (solo se modalità coppia)
    if (DB.config && DB.config.mode === 'couple') {
      var condivisoGroup = document.getElementById('condivisoCheckboxGroup');
      if (condivisoGroup) condivisoGroup.style.display = 'block';

      var virtualRecoveryGroupEl = document.getElementById('virtualRecoveryGroup');
      if (virtualRecoveryGroupEl) virtualRecoveryGroupEl.style.display = 'block';
    }
    
    // NUOVO - Mostra anticipo partner per uscite (SEMPRE se modalità coppia)
    var anticipoPartnerGroup = document.getElementById('anticipoPartnerCheckboxGroup');
    if (anticipoPartnerGroup && DB.config && DB.config.mode === 'couple') {
      anticipoPartnerGroup.style.display = 'block';
    } else if (anticipoPartnerGroup) {
      anticipoPartnerGroup.style.display = 'none';
    }

    // Riabilita importo per uscite
    var timpInput = document.getElementById('timp');
    if (timpInput) {
      timpInput.readOnly = false;
      timpInput.style.background = '';
    }
    
    // Riabilita categoria se era disabilitata
    var categoriaSelect = document.getElementById('tcat');
    if (categoriaSelect) {
      categoriaSelect.disabled = false;
      categoriaSelect.style.opacity = '1';
      categoriaSelect.style.cursor = '';
      categoriaSelect.style.background = '';
    }
  }
  
  // Nascondi anticipo partner per income e partner_payment
  if (tipo !== 'expense') {
    var anticipoPartnerGroup = document.getElementById('anticipoPartnerCheckboxGroup');
    if (anticipoPartnerGroup) anticipoPartnerGroup.style.display = 'none';
  }
  
  // Aggiorna visual checkbox senza forzare checked/disabled
  aggiornaVisualCheckbox();
}

function chiudiModal() {
  document.getElementById('modal').classList.remove('active');
  // Reset scroll della modal-content quando si chiude
  var modalContent = document.querySelector('#modal .modal-content');
  if (modalContent) {
    modalContent.scrollTop = 0;
  }
}

// ========== MODAL CONFERMA PERSONALIZZATO ==========
var confirmCallback = null;

function mostraConferma(options) {
  return new Promise(function(resolve) {
    var modal = document.getElementById('confirmModal');
    var icon = document.getElementById('confirmIcon');
    var title = document.getElementById('confirmTitle');
    var message = document.getElementById('confirmMessage');
    var confirmBtn = document.getElementById('confirmButton');
    
    // Imposta contenuto
    icon.textContent = options.icon || '⚠️';
    title.textContent = options.title || 'Conferma azione';
    message.textContent = options.message || 'Sei sicuro di voler procedere?';
    confirmBtn.textContent = options.confirmText || '✓ Conferma';
    
    // Cambia colore bottone se necessario
    confirmBtn.className = 'confirm-btn';
    if (options.danger !== false) {
      confirmBtn.classList.add('confirm-btn-confirm');
    } else {
      confirmBtn.classList.add('confirm-btn-primary');
    }
    
    // Mostra modal
    modal.classList.add('active');
    
    // Salva callback
    confirmCallback = resolve;
    
    playSound('click');
  });
}

function chiudiConferma(result) {
  var modal = document.getElementById('confirmModal');
  modal.classList.remove('active');
  
  if (confirmCallback) {
    confirmCallback(result);
    confirmCallback = null;
  }
  
  playSound(result ? 'success' : 'click');
}

function salva(e) {
  console.log('[SALVA] Funzione chiamata!', e);
  
  if (e) {
    e.preventDefault();
    console.log('[SALVA] preventDefault chiamato');
  }
  
  try {
    var id = document.getElementById('tid').value;
    var dataTransazione = document.getElementById('tdata').value;

    console.log('[SALVA] ID letto da tid:', id);
    console.log('[SALVA] ID inizia con id:?', id.startsWith('id:'));
    console.log('[SALVA] ID inizia con idx:?', id.startsWith('idx:'));
    console.log('[SALVA] Data:', dataTransazione);
    
    var condiviso = document.getElementById('tcondiviso') ? document.getElementById('tcondiviso').checked : false;
    var virtualRecovery = document.getElementById('tvirtual') ? document.getElementById('tvirtual').checked : false;
  
  // ========== GESTIONE ANTICIPO PARTNER ==========
  var anticipoPartner = 0;
  var importoOriginale = parseFloat(document.getElementById('timp').value);
  var anticipoPartnerCheckbox = document.getElementById('tAnticipoPartner');
  
  if (anticipoPartnerCheckbox && anticipoPartnerCheckbox.checked) {
    anticipoPartner = parseFloat(document.getElementById('tAnticipoImporto').value) || 0;
  }
  
  // Calcola importo effettivo (spesa reale dell'utente)
  var importoEffettivo = importoOriginale - anticipoPartner;
  
  var t = {
    data: dataTransazione,
    ora: document.getElementById('tora').value,
    tipo: document.getElementById('ttipo').value,
    categoria: document.getElementById('tcat').value,
    importo: importoEffettivo, // ⚠️ SALVA SOLO LA SPESA EFFETTIVA
    note: document.getElementById('tnote').value.trim(),
    condiviso: condiviso,
    virtualRecovery: virtualRecovery,
    
    // NUOVI CAMPI
    anticipoPartner: anticipoPartner,
    importoOriginale: importoOriginale
  };
  
  // NUOVO - Salva "chi ha pagato" se modalità coppia
  if (DB.config && DB.config.mode === 'couple') {
    var chiHaPagatoInput = document.getElementById('tchiHaPagato');
    if (chiHaPagatoInput) {
      t.chiHaPagato = chiHaPagatoInput.value; // 'user' o 'partner'
    }
  }

  // NUOVO - Gestione Rimborso dal Partner (per entrate)
  var rimborsoCheckbox = document.getElementById('tRimborsoPartner');
  if (t.tipo === 'income' && rimborsoCheckbox && rimborsoCheckbox.checked) {
    t.rimborsoPartner = true;
    // Aggiungi nota automatica
    var partnerNameRimborso = DB.config && DB.config.partnerName ? DB.config.partnerName : 'Partner';
    var notaRimborso = '💰 Rimborso da ' + partnerNameRimborso + ' (riduce il suo debito)';
    if (t.note) {
      t.note = notaRimborso + '\n' + t.note;
    } else {
      t.note = notaRimborso;
    }
  }

  // Aggiungi nota automatica se c'è anticipo
  if (anticipoPartner > 0) {
    var partnerName = DB.config && DB.config.partnerName ? DB.config.partnerName : 'il partner';
    var notaAnticipo = '💰 Include €' + anticipoPartner.toFixed(2) + ' anticipati per ' + partnerName;
    if (t.note) {
      t.note += '\n' + notaAnticipo;
    } else {
      t.note = notaAnticipo;
    }
  }
  
  // NUOVO - Gestione pagamento misto per uscite
  var pagamentoMisto = document.getElementById('tpagamentoMisto');
  if (t.tipo === 'expense' && pagamentoMisto && pagamentoMisto.checked) {
    t.pagamentoMisto = true;
    t.metodiPagamento = [];
    
    var quantitaBuoni = parseInt(document.getElementById('tmistoQuantitaBuoni').value) || 0;
    var valoreUnitario = DB.conti.buoni_pasto ? DB.conti.buoni_pasto.valoreUnitario : 10.50;
    var valoreBuoni = quantitaBuoni * valoreUnitario;
    var differenza = parseFloat(document.getElementById('tmistoDifferenza').value) || 0;
    
    // Aggiungi buoni
    if (quantitaBuoni > 0) {
      t.metodiPagamento.push({
        tipo: 'buoni_pasto',
        quantita: quantitaBuoni,
        importo: valoreBuoni
      });
    }
    
    // Aggiungi differenza
    if (differenza > 0) {
      if (pagataDifferenzaDa === 'io') {
        var metodoDiff = document.getElementById('tmistoMetodoDifferenza').value;
        t.metodiPagamento.push({
          tipo: metodoDiff,
          importo: differenza,
          pagatoDa: 'user' // Sempre l'utente principale
        });
      } else if (pagataDifferenzaDa === 'partner') {
        // Partner ha pagato la differenza
        t.metodiPagamento.push({
          tipo: 'partner',
          importo: differenza,
          pagatoDa: 'partner'
        });
        
        // CALCOLO RECUPERO VIRTUALE automatico
        // Se è condiviso, calcola quanto recuperare
        if (t.condiviso) {
          var quotaUtente = (valoreBuoni + differenza) / 2; // Metà del totale
          var recupero = quotaUtente - differenza; // Partner ha pagato differenza, tu devi recuperare
          
          // Aggiungi al saldo condiviso
          if (!DB.splitwise) {
            DB.splitwise = { saldo: 0 };
          }
          DB.splitwise.saldo = (DB.splitwise.saldo || 0) + recupero;
          
          console.log('[PAGAMENTO MISTO] Partner ha pagato differenza: €' + differenza.toFixed(2));
          console.log('[PAGAMENTO MISTO] Recupero virtuale: €' + recupero.toFixed(2));
        }
      }
    }
  } else {
    // Pagamento singolo normale
    t.metodo = document.getElementById('tmetodo') ? document.getElementById('tmetodo').value : 'carta';
    // Retrocompatibilità: carta -> webank
    if (t.metodo === 'carta') t.metodo = 'webank';
  }
  
  // NUOVO - Gestione destinazione per entrate
  if (t.tipo === 'income') {
    var tdest = document.getElementById('tdestinazione');
    if (tdest) {
      t.destinazione = tdest.value;
      
      // Se destinazione è buoni, salva dettagli
      if (t.destinazione === 'buoni_pasto') {
        var tbuoniQta = document.getElementById('tbuoniQuantita');
        var tbuoniVal = document.getElementById('tbuoniValore');
        if (tbuoniQta && tbuoniVal) {
          t.dettagliBuoni = {
            quantita: parseInt(tbuoniQta.value),
            valoreUnitario: parseFloat(tbuoniVal.value)
          };
        }
      }
    } else {
      // Default a webank per retrocompatibilità
      t.destinazione = 'webank';
    }
  }
  
  if (id === '') {
    // Nuova transazione
    t.id = Date.now();
    DB.transazioni.push(t);
  } else {
    // Modifica transazione esistente
    var idx = -1;

    // Gestisci formato "id:xxx" o "idx:xxx"
    console.log('[SALVA] Parsing ID...', id);
    if (id.startsWith('id:')) {
      var realId = id.substring(3);
      console.log('[SALVA] Formato id: - cercando ID reale:', realId);
      idx = DB.transazioni.findIndex(function(tr) { return tr.id == realId; });
      console.log('[SALVA] Indice trovato:', idx);
    } else if (id.startsWith('idx:')) {
      idx = parseInt(id.substring(4));
      console.log('[SALVA] Formato idx: - usando indice diretto:', idx);
      // Verifica che l'indice sia valido
      if (idx < 0 || idx >= DB.transazioni.length) {
        console.error('[SALVA] Indice non valido! Range: 0-' + (DB.transazioni.length - 1));
        idx = -1;
      }
    } else {
      // Fallback: prova come ID diretto (retrocompatibilità)
      console.log('[SALVA] Formato legacy - cercando come ID diretto');
      idx = DB.transazioni.findIndex(function(tr) { return tr.id == id; });
    }

    console.log('[SALVA] Indice finale per aggiornamento:', idx);

    if (idx !== -1) {
      // Mantieni o genera ID
      var oldTrans = DB.transazioni[idx];
      console.log('[SALVA] Transazione esistente:', oldTrans);
      t.id = oldTrans.id || Date.now();
      DB.transazioni[idx] = t;
      console.log('[SALVA] Transazione aggiornata all\'indice:', idx, 'Nuova:', t);
    } else {
      console.error('[SALVA] Transazione non trovata per id:', id);
      mostraToast('❌ Errore: transazione non trovata', 'error');
      return false;
    }
  }
  
  // ========== AGGIORNA SALDO CONDIVISO SE C'È ANTICIPO ==========
  if (anticipoPartner > 0) {
    if (!DB.splitwise) {
      DB.splitwise = { saldo: 0 };
    }
    
    // AGGIUNGI l'anticipo al saldo
    // Hai anticipato soldi per il partner, quindi il partner TI DEVE di più (o tu devi di meno)
    DB.splitwise.saldo = (DB.splitwise.saldo || 0) + anticipoPartner;
    
    console.log('[ANTICIPO PARTNER] Hai anticipato €' + anticipoPartner.toFixed(2) + ' per il partner');
    console.log('[ANTICIPO PARTNER] Saldo condiviso aggiornato: €' + DB.splitwise.saldo.toFixed(2));
    console.log('[ANTICIPO PARTNER] Il partner ti deve €' + anticipoPartner.toFixed(2) + ' IN PIÙ (o tu devi IN MENO)');
  }
  
  salvaDB();
  chiudiModal();
  
  // Passa automaticamente all'anno e mese della transazione appena salvata
  var dataObj = new Date(dataTransazione);
  var annoTrans = dataObj.getFullYear();
  var meseTrans = dataObj.getMonth();
  
  // Aggiorna i selettori
  document.getElementById('year').value = annoTrans;
  document.getElementById('month').value = meseTrans;
  anno = annoTrans;
  mese = meseTrans;
  
  // Aggiorna tutte le sezioni
  aggiorna();
  mostraTrans();

  // IMPORTANTE: Aggiorna SEMPRE la sezione Condiviso (anche se non visibile)
  // perché il saldo potrebbe essere cambiato con anticipi o transazioni condivise
  if (typeof mostraCondiviso === 'function') {
    mostraCondiviso();
  }

  // NUOVO: Dopo il salvataggio, vai alla sezione Movimenti per mostrare la transazione
  vai('trans');

  // Scrolla alla transazione appena salvata
  setTimeout(function() {
    var transElement = document.querySelector('[data-trans-id="' + t.id + '"]');
    if (transElement) {
      transElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Evidenzia brevemente la transazione
      transElement.style.transition = 'box-shadow 0.3s ease';
      transElement.style.boxShadow = '0 0 20px rgba(78, 204, 163, 0.8)';
      setTimeout(function() {
        transElement.style.boxShadow = '';
      }, 2000);
    }
  }, 100);

  // Toast con info anticipo
  if (anticipoPartner > 0) {
    mostraToast('✅ Salvata! Hai anticipato €' + anticipoPartner.toFixed(2) + ' - Saldo condiviso aggiornato', 'success');
  } else {
    mostraToast('✅ Transazione salvata!', 'success');
  }
  playSound('success');
  
  console.log('[SALVA] Completato con successo!');
  return false; // Previene submit del form
  
  } catch (error) {
    console.error('[SALVA] ERRORE:', error);
    mostraToast('❌ Errore nel salvataggio: ' + error.message, 'error');
    return false;
  }
}

function aggFilterCats() {
  var sel = document.getElementById('filterCat');
  var filterType = document.getElementById('filterType').value;
  
  sel.innerHTML = '<option value="all">Tutte</option>';
  
  var cats = [];
  
  // Se è selezionato un tipo specifico, mostra solo quelle categorie
  if (filterType === 'income') {
    cats = DB.categorie.income;
  } else if (filterType === 'expense') {
    cats = DB.categorie.expense;
  } else if (filterType === 'partner_payment') {
    cats = DB.categorie.expense; // Partner usa le stesse categorie di expense
  } else {
    // 'all' - mostra tutte
    cats = [].concat(DB.categorie.income, DB.categorie.expense);
  }
  
  var uniqueCats = Array.from(new Set(cats)).sort();
  
  uniqueCats.forEach(function(cat) {
    var o = document.createElement('option');
    o.value = cat;
    o.textContent = cat;
    sel.appendChild(o);
  });
}

// ========== POPOLA FILTRO METODI DI PAGAMENTO ==========
function aggiornaFilterMetodi() {
  var sel = document.getElementById('filterMetodo');
  if (!sel) return;

  // Salva il valore corrente per ripristinarlo
  var valoreCorrente = sel.value;

  sel.innerHTML = '<option value="all">Tutti i conti</option>';

  // Aggiungi contanti
  var optContanti = document.createElement('option');
  optContanti.value = 'contanti';
  optContanti.textContent = '💵 Contanti';
  sel.appendChild(optContanti);

  // Aggiungi buoni pasto
  var optBuoni = document.createElement('option');
  optBuoni.value = 'buoni_pasto';
  optBuoni.textContent = '🎟️ Buoni Pasto';
  sel.appendChild(optBuoni);

  // Aggiungi conti predefiniti
  var contiPredefiniti = [
    { id: 'webank', nome: 'WeBank', icona: '💳' },
    { id: 'revolut', nome: 'Revolut', icona: '🌐' },
    { id: 'paypal', nome: 'PayPal', icona: '💰' }
  ];

  contiPredefiniti.forEach(function(conto) {
    var opt = document.createElement('option');
    opt.value = conto.id;
    opt.textContent = conto.icona + ' ' + conto.nome;
    sel.appendChild(opt);
  });

  // Aggiungi conti personalizzati
  if (DB.contiPersonalizzati && DB.contiPersonalizzati.length > 0) {
    DB.contiPersonalizzati.forEach(function(conto) {
      var opt = document.createElement('option');
      opt.value = conto.id;
      opt.textContent = conto.icona + ' ' + conto.nome;
      sel.appendChild(opt);
    });
  }

  // Ripristina il valore se esisteva
  if (valoreCorrente) {
    sel.value = valoreCorrente;
    // Se il valore non esiste più, torna a 'all'
    if (sel.value !== valoreCorrente) {
      sel.value = 'all';
    }
  }
}

// ========== AGGIORNA NOME PARTNER NEI FILTRI ==========
function aggiornaFiltroPartnerName() {
  var filterTypePartner = document.getElementById('filterTypePartner');
  if (filterTypePartner && DB.config && DB.config.partnerName) {
    filterTypePartner.textContent = '👥 Spesa ' + DB.config.partnerName;
  }
}

// ========== PERFORMANCE OTTIMIZZAZIONI ==========
var searchTimeout;
function ricercaDebounced() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(function() {
    mostraTrans();
  }, 300);
}

// Throttle per scroll events
function throttle(func, delay) {
  var lastCall = 0;
  return function() {
    var now = Date.now();
    if (now - lastCall < delay) return;
    lastCall = now;
    return func.apply(this, arguments);
  };
}

// Lazy loading per grafici pesanti
var graficiCaricati = {};
function caricaGraficoSeVisibile(graficoId, generaFunc) {
  var el = document.getElementById(graficoId);
  if (!el) return;
  
  var rect = el.getBoundingClientRect();
  var isVisible = rect.top < window.innerHeight && rect.bottom > 0;
  
  if (isVisible && !graficiCaricati[graficoId]) {
    graficiCaricati[graficoId] = true;
    generaFunc();
  }
}

// Memoization per calcoli ripetuti
var memoCache = {};
function memoize(func, key) {
  if (memoCache[key]) {
    return memoCache[key];
  }
  var result = func();
  memoCache[key] = result;
  return result;
}

function clearMemoCache() {
  memoCache = {};
}

// ========== GESTURE MOBILE ==========
var swipeState = {
  startX: 0,
  startY: 0,
  currentX: 0,
  isDragging: false,
  element: null,
  transId: null,
  threshold: 100 // pixel per attivare delete
};

function initSwipeGestures() {
  // Ottieni tutti gli elementi trans-item ogni volta che mostriamo le transazioni
  setTimeout(function() {
    var items = document.querySelectorAll('.trans-item');
    items.forEach(function(item) {
      // Rimuovi listener esistenti
      item.replaceWith(item.cloneNode(true));
    });
    
    // Ri-aggiungi listener puliti
    items = document.querySelectorAll('.trans-item');
    items.forEach(function(item, index) {
      aggiungiSwipeToDelete(item, index);
    });
  }, 100);
}

function aggiungiSwipeToDelete(elemento, transId) {
  elemento.addEventListener('touchstart', handleTouchStart, { passive: true });
  elemento.addEventListener('touchmove', handleTouchMove, { passive: false });
  elemento.addEventListener('touchend', handleTouchEnd, { passive: true });
}

function handleTouchStart(e) {
  // Ignora touch su pulsanti
  if (e.target.closest('.trans-actions') || e.target.closest('button')) {
    return;
  }
  
  swipeState.startX = e.touches[0].clientX;
  swipeState.startY = e.touches[0].clientY;
  swipeState.isDragging = false;
  swipeState.element = e.currentTarget;
  
  // Trova l'indice della transazione
  var items = Array.from(document.querySelectorAll('.trans-item'));
  swipeState.transId = items.indexOf(swipeState.element);
}

function handleTouchMove(e) {
  if (!swipeState.element) return;
  
  swipeState.currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
  
  var diffX = swipeState.currentX - swipeState.startX;
  var diffY = currentY - swipeState.startY;
  
  // Swipe orizzontale > verticale
  if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
    swipeState.isDragging = true;
    e.preventDefault(); // Previeni scroll
    
    // Solo swipe left (negativo)
    if (diffX < 0) {
      swipeState.element.classList.add('swiping');
      swipeState.element.style.setProperty('--swipe-offset', diffX + 'px');
      
      // Mostra indicatore delete se oltre threshold
      if (Math.abs(diffX) > swipeState.threshold) {
        swipeState.element.classList.add('show-delete');
      } else {
        swipeState.element.classList.remove('show-delete');
      }
    }
  }
}

function handleTouchEnd(e) {
  if (!swipeState.element || !swipeState.isDragging) {
    resetSwipe();
    return;
  }
  
  var diffX = swipeState.currentX - swipeState.startX;
  
  // Se swipe oltre threshold, elimina
  if (diffX < -swipeState.threshold) {
    // Animazione delete
    swipeState.element.classList.add('swipe-delete');
    swipeState.element.classList.remove('swiping');
    
    // Haptic feedback
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50);
    }
    
    // Elimina dopo animazione
    setTimeout(function() {
      eliminaTrans(swipeState.transId);
    }, 300);
  } else {
    // Reset position
    swipeState.element.classList.remove('swiping', 'show-delete');
    swipeState.element.style.setProperty('--swipe-offset', '0px');
  }
  
  resetSwipe();
}

function resetSwipe() {
  swipeState.startX = 0;
  swipeState.currentX = 0;
  swipeState.isDragging = false;
  swipeState.element = null;
  swipeState.transId = null;
}

// ========== PULL TO REFRESH ==========
var pullState = {
  startY: 0,
  pulling: false,
  threshold: 80
};

function initPullToRefresh() {
  // DISABILITATO: Pull-to-refresh troppo invasivo su mobile
  return; // Exit early
  
  /* CODICE ORIGINALE COMMENTATO
  var main = document.body;
  
  main.addEventListener('touchstart', function(e) {
    if (window.scrollY === 0) {
      pullState.startY = e.touches[0].pageY;
      pullState.pulling = true;
    }
  }, { passive: true });
  
  main.addEventListener('touchmove', function(e) {
    if (!pullState.pulling) return;
    
    var currentY = e.touches[0].pageY;
    var diff = currentY - pullState.startY;
    
    if (diff > 10 && window.scrollY === 0) {
      // Mostra indicatore (optional)
      if (diff > pullState.threshold) {
        // Visual feedback
        main.style.paddingTop = Math.min(diff * 0.5, 60) + 'px';
      }
    }
  }, { passive: true });
  
  main.addEventListener('touchend', function() {
    if (!pullState.pulling) return;
    
    var paddingTop = parseInt(main.style.paddingTop) || 0;
    
    if (paddingTop > 40) {
      // Trigger refresh
      mostraToast('🔄 Aggiornamento...', 'info');
      
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate([50, 100, 50]);
      }
      
      setTimeout(function() {
        aggiorna();
        main.style.paddingTop = '0';
        // mostraToast('✅ Aggiornato!', 'success'); // Rimosso: troppo invasivo
      }, 500);
    } else {
      main.style.paddingTop = '0';
    }
    
    pullState.pulling = false;
    pullState.startY = 0;
  }, { passive: true });
  */
}

// Navigazione mesi per Movimenti
function cambiaMovimentiMese(delta) {
  mese += delta;
  if (mese < 0) { mese = 11; anno--; }
  if (mese > 11) { mese = 0; anno++; }
  aggiornaMovimentiMese();
  mostraTrans();
  aggiornaBottoniOggi();
  playSound('click');
}

function vaiOggiMovimenti() {
  var oggi = new Date();
  anno = oggi.getFullYear();
  mese = oggi.getMonth();
  aggiornaMovimentiMese();
  mostraTrans();
  aggiornaBottoniOggi();
  playSound('click');
}

function aggiornaMovimentiMese() {
  var mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  var elem = document.getElementById('movimentiMeseCorrente');
  if (elem) {
    elem.textContent = mesiNomi[mese] + ' ' + anno;
  }
}

function mostraTrans() {
  var search = document.getElementById('searchTrans').value.toLowerCase();
  var filterType = document.getElementById('filterType').value;
  var filterCat = document.getElementById('filterCat').value;
  var filterMetodo = document.getElementById('filterMetodo') ? document.getElementById('filterMetodo').value : 'all';
  var mostraTutte = document.getElementById('showAllTransactions').checked;
  
  // Ricerca avanzata
  var dateFrom = document.getElementById('searchDateFrom').value;
  var dateTo = document.getElementById('searchDateTo').value;
  var amountMin = document.getElementById('searchAmountMin').value;
  var amountMax = document.getElementById('searchAmountMax').value;
  
  // Converti date in oggetti Date per confronto corretto
  var dateFromObj = dateFrom ? new Date(dateFrom + 'T00:00:00') : null;
  var dateToObj = dateTo ? new Date(dateTo + 'T23:59:59') : null;
  
  console.log('Filtri ricerca:', {
    dateFrom: dateFrom,
    dateTo: dateTo,
    dateFromObj: dateFromObj,
    dateToObj: dateToObj,
    mostraTutte: mostraTutte
  });
  
  var listaConIndici = DB.transazioni.map(function(t, i) {
    return {
      id: t.id, // IMPORTANTE: copiare l'ID per la modifica
      data: t.data,
      ora: t.ora || '00:00',
      tipo: t.tipo,
      categoria: t.categoria,
      importo: t.importo,
      note: t.note,
      condiviso: t.condiviso || false,
      virtualRecovery: t.virtualRecovery || false,
      metodo: t.metodo || 'carta',
      destinazione: t.destinazione, // Per le entrate
      dettagliBuoni: t.dettagliBuoni, // Per i buoni pasto
      anticipoPartner: t.anticipoPartner || 0,
      importoOriginale: t.importoOriginale || t.importo,
      chiHaPagato: t.chiHaPagato || 'user',
      pagamentoMisto: t.pagamentoMisto || false,
      metodiPagamento: t.metodiPagamento || [],
      indiceOriginale: i
    };
  });
  
  var listaFiltrata = listaConIndici.filter(function(t) {
    var dataTransazione = new Date(t.data + 'T12:00:00'); // Usa mezzogiorno per evitare problemi timezone
    
    // Se NON c'è ricerca avanzata per date, usa il filtro mensile standard
    if (!dateFrom && !dateTo && !mostraTutte) {
      // Mostra solo transazioni del mese corrente
      if (dataTransazione.getFullYear() !== anno || dataTransazione.getMonth() !== mese) {
        return false;
      }
    }
    
    // Filtri avanzati per data (hanno priorità sul filtro mensile)
    if (dateFromObj) {
      if (dataTransazione < dateFromObj) {
        console.log('Transazione esclusa (prima di dateFrom):', t.data, dataTransazione, '<', dateFromObj);
        return false;
      }
    }
    if (dateToObj) {
      if (dataTransazione > dateToObj) {
        console.log('Transazione esclusa (dopo dateTo):', t.data, dataTransazione, '>', dateToObj);
        return false;
      }
    }
    
    if (filterType !== 'all' && t.tipo !== filterType) return false;
    if (filterCat !== 'all' && t.categoria !== filterCat) return false;
    if (filterMetodo !== 'all' && t.metodo !== filterMetodo) return false;
    
    // Filtri importo
    if (amountMin && t.importo < parseFloat(amountMin)) return false;
    if (amountMax && t.importo > parseFloat(amountMax)) return false;
    
    if (search) {
      var matchCat = t.categoria.toLowerCase().indexOf(search) > -1;
      var matchNote = (t.note || '').toLowerCase().indexOf(search) > -1;
      var matchAmount = t.importo.toString().indexOf(search) > -1;
      // Ricerca per "condiviso" o "condivisa" - trova tutte le transazioni condivise
      var matchCondiviso = (search === 'condiviso' || search === 'condivisa' || search === 'condivise') && t.condiviso === true;
      if (!matchCat && !matchNote && !matchAmount && !matchCondiviso) return false;
    }
    
    return true;
  });
  
  // Ordinamento basato su ordinamentoTransazioni
  listaFiltrata.sort(function(a, b) {
    switch(ordinamentoTransazioni) {
      case 'recenti':
        var dateTimeA = new Date(a.data + ' ' + a.ora);
        var dateTimeB = new Date(b.data + ' ' + b.ora);
        return dateTimeB - dateTimeA;
      
      case 'ultime-inserite':
        // Ordina per indice originale (ultime inserite = indice più alto)
        // Debug: verifica che gli indici siano corretti
        if (a.indiceOriginale === undefined || b.indiceOriginale === undefined) {
          console.warn('⚠️ Attenzione: indiceOriginale mancante!', a, b);
        }
        return b.indiceOriginale - a.indiceOriginale;
      
      case 'vecchie':
        var dateTimeA = new Date(a.data + ' ' + a.ora);
        var dateTimeB = new Date(b.data + ' ' + b.ora);
        return dateTimeA - dateTimeB;
      
      case 'a-z':
        var catA = a.categoria.toLowerCase();
        var catB = b.categoria.toLowerCase();
        if (catA < catB) return -1;
        if (catA > catB) return 1;
        return 0;
      
      case 'z-a':
        var catA = a.categoria.toLowerCase();
        var catB = b.categoria.toLowerCase();
        if (catA > catB) return -1;
        if (catA < catB) return 1;
        return 0;
      
      case 'importo-alto':
        return parseFloat(b.importo) - parseFloat(a.importo);
      
      case 'importo-basso':
        return parseFloat(a.importo) - parseFloat(b.importo);
      
      default:
        var dateTimeA = new Date(a.data + ' ' + a.ora);
        var dateTimeB = new Date(b.data + ' ' + b.ora);
        return dateTimeB - dateTimeA;
    }
  });
  
  var total = 0;
  listaFiltrata.forEach(function(t) {
    var imp = parseFloat(t.importo) || 0;
    // I recuperi virtuali NON modificano il totale (non intaccano patrimonio)
    if (t.tipo === 'income') total += imp;
    else if (t.tipo === 'expense' && !t.virtualRecovery) total -= imp;
    // 'partner' e 'virtualRecovery' non modificano il totale
  });
  
  document.getElementById('statsCount').textContent = listaFiltrata.length;
  document.getElementById('statsTotal').textContent = formatEuro(total);
  
  var container = document.getElementById('transList');
  container.innerHTML = '';

  if (listaFiltrata.length === 0) {
    container.innerHTML = '<div class="empty">🔍 Nessuna transazione trovata</div>';
  } else {
    // ========== RAGGRUPPAMENTO PER GIORNO (stile Bilance) ==========
    var gruppiPerGiorno = {};
    listaFiltrata.forEach(function(t) {
      var dataKey = t.data; // formato YYYY-MM-DD
      if (!gruppiPerGiorno[dataKey]) {
        gruppiPerGiorno[dataKey] = [];
      }
      gruppiPerGiorno[dataKey].push(t);
    });

    // Ordina le date (più recenti prima)
    var dateOrdinate = Object.keys(gruppiPerGiorno).sort(function(a, b) {
      return new Date(b) - new Date(a);
    });

    dateOrdinate.forEach(function(dataKey) {
      var transazioniGiorno = gruppiPerGiorno[dataKey];
      var dataObj = new Date(dataKey + 'T12:00:00');

      // Calcola totale giornaliero
      var totaleGiorno = 0;
      var entrateGiorno = 0;
      var usciteGiorno = 0;
      transazioniGiorno.forEach(function(t) {
        var imp = parseFloat(t.importo) || 0;
        if (t.tipo === 'income') {
          entrateGiorno += imp;
          totaleGiorno += imp;
        } else if (t.tipo === 'expense' && !t.virtualRecovery) {
          usciteGiorno += imp;
          totaleGiorno -= imp;
        }
      });

      // Crea header giornaliero
      var headerGiorno = document.createElement('div');
      headerGiorno.className = 'trans-day-header';
      var giornoSettimana = dataObj.toLocaleDateString('it-IT', { weekday: 'long' });
      var giornoMese = dataObj.toLocaleDateString('it-IT', { day: 'numeric', month: 'long' });
      giornoSettimana = giornoSettimana.charAt(0).toUpperCase() + giornoSettimana.slice(1);

      var totaleClass = totaleGiorno >= 0 ? 'positive' : 'negative';
      var totaleSign = totaleGiorno >= 0 ? '+' : '';

      headerGiorno.innerHTML = '<div class="day-info"><span class="day-name">' + giornoSettimana + '</span><span class="day-date">' + giornoMese + '</span></div>' +
        '<div class="day-totals">' +
        (entrateGiorno > 0 ? '<span class="day-income">+€' + entrateGiorno.toFixed(2) + '</span>' : '') +
        (usciteGiorno > 0 ? '<span class="day-expense">-€' + usciteGiorno.toFixed(2) + '</span>' : '') +
        '</div>';

      container.appendChild(headerGiorno);

      // Renderizza transazioni del giorno
      transazioniGiorno.forEach(function(t) {
      var icon = '📉';
      if (t.tipo === 'income') icon = '📈';
      else if (t.tipo === 'partner_payment') icon = '👥';
      var cls = '';
      if (t.tipo === 'income') cls = ' income';
      else if (t.tipo === 'partner_payment') cls = ' partner_payment';
      var date = new Date(t.data).toLocaleDateString('it-IT', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });

      var div = document.createElement('div');
      var isPartnerPaid = (t.chiHaPagato === 'partner' || t.tipo === 'partner_payment');
      div.className = 'trans-item' + cls + (isPartnerPaid ? ' partner' : '') + (t.condiviso ? ' condiviso' : '');
      div.setAttribute('data-trans-id', t.id || t.indiceOriginale);
      div.setAttribute('data-trans-idx', t.indiceOriginale);

      // ========== BORDI COLORATI PER TRANSAZIONI CONDIVISE ==========
      // Magenta/Fucsia = partner ha pagato + condiviso
      // Viola = partner ha pagato (non condiviso)
      // Rosso = utente ha pagato (condiviso)

      if (isPartnerPaid) {
        if (t.condiviso) {
          // Partner ha pagato + condiviso - MAGENTA/FUCSIA
          div.style.background = 'linear-gradient(135deg, rgba(233, 30, 99, 0.15) 0%, rgba(194, 24, 91, 0.08) 100%)';
          div.style.borderLeft = '4px solid #e91e63';
        } else {
          // Partner ha pagato (non condiviso) - viola
          div.style.background = 'linear-gradient(135deg, rgba(155, 89, 182, 0.15) 0%, rgba(142, 68, 173, 0.08) 100%)';
          div.style.borderLeft = '4px solid #9b59b6';
        }
      } else if (t.condiviso && !t.virtualRecovery) {
        // Utente ha pagato + condiviso (non recupero virtuale) - rosso
        div.style.background = 'linear-gradient(135deg, rgba(231, 76, 60, 0.12) 0%, rgba(192, 57, 43, 0.06) 100%)';
        div.style.borderLeft = '4px solid #e74c3c';
      } else if (t.virtualRecovery) {
        // Recupero virtuale - se utente paga rosso, se partner paga viola
        if (isPartnerPaid) {
          div.style.background = 'linear-gradient(135deg, rgba(155, 89, 182, 0.15) 0%, rgba(142, 68, 173, 0.08) 100%)';
          div.style.borderLeft = '4px solid #9b59b6';
        } else {
          div.style.background = 'linear-gradient(135deg, rgba(231, 76, 60, 0.12) 0%, rgba(192, 57, 43, 0.06) 100%)';
          div.style.borderLeft = '4px solid #e74c3c';
        }
      }

      // Colore distintivo per transazioni con buoni pasto (priorità più bassa)
      if (!t.condiviso && !t.virtualRecovery && !isPartnerPaid) {
        if (t.metodo === 'buoni_pasto' || t.destinazione === 'buoni_pasto') {
          div.style.background = 'linear-gradient(135deg, rgba(243, 156, 18, 0.15) 0%, rgba(230, 126, 34, 0.08) 100%)';
          div.style.borderLeft = '4px solid #f39c12';
        }

        // Colore distintivo per pagamento misto (con buoni)
        if (t.pagamentoMisto && t.metodiPagamento && t.metodiPagamento.some(function(m) { return m.tipo === 'buoni_pasto'; })) {
          div.style.background = 'linear-gradient(135deg, rgba(243, 156, 18, 0.12) 0%, rgba(230, 126, 34, 0.06) 100%)';
          div.style.borderLeft = '4px solid #e67e22';
        }
      }
      
      var badges = '';
      if (t.condiviso) {
        badges = '<span class="condiviso-badge">👥</span>';
      }
      if (t.virtualRecovery) {
        badges = '<span class="condiviso-badge" style="background:#9b59b6">💝</span>';
      }

      var amountColor = t.tipo === 'income' ? 'var(--income)' : 'var(--expense)';

      var header = document.createElement('div');
      header.className = 'trans-header';
      header.innerHTML = '<div class="trans-info"><span class="trans-cat">' + icon + ' ' + t.categoria + '</span></div><div class="trans-right">' + badges + '<span class="trans-amount" style="color:' + amountColor + '">€' + t.importo.toFixed(2) + '</span></div>';
      
      var details = document.createElement('div');
      details.className = 'trans-details';
      // Determina metodo/destinazione in base al tipo di transazione
      var metodoPagamento;
      // Mappa dei nomi conti con icone
      var nomiConti = {
        'webank': '💳 WeBank',
        'revolut': '🌐 Revolut',
        'paypal': '💰 PayPal',
        'contanti': '💵 Contanti',
        'buoni_pasto': '🎟️ Buoni Pasto',
        'carta': '💳 Carta'
      };
      // Aggiungi conti personalizzati
      if (DB.contiPersonalizzati) {
        DB.contiPersonalizzati.forEach(function(c) {
          nomiConti[c.id] = c.icona + ' ' + c.nome;
        });
      }
      if (t.tipo === 'income') {
        // Per le entrate, mostra la destinazione
        var dest = t.destinazione || t.metodo || 'webank';
        metodoPagamento = nomiConti[dest] || ('💳 ' + dest);
      } else {
        // Per le uscite, mostra il metodo di pagamento
        if (t.pagamentoMisto && t.metodiPagamento && t.metodiPagamento.length > 0) {
          // Pagamento misto - mostra icona distintiva
          var hasBuoni = t.metodiPagamento.some(function(m) { return m.tipo === 'buoni_pasto'; });
          metodoPagamento = hasBuoni ? '🎫 Pagamento Misto' : '💳 Pagamento Misto';
        } else {
          metodoPagamento = nomiConti[t.metodo] || ('💳 ' + (t.metodo || 'Carta'));
        }
      }
      var detailsHTML = '📅 ' + date + ' ⏰ ' + t.ora + ' ' + metodoPagamento;
      
      // NUOVO - Mostra "Chi ha pagato" (modalità coppia)
      if (DB.config && DB.config.mode === 'couple' && t.tipo === 'expense') {
        var userName = DB.config.userName || 'Utente';
        var partnerName = DB.config.partnerName || 'Partner';
        var pagatore = t.chiHaPagato === 'partner' ? partnerName : userName;
        detailsHTML += '<br>👤 <strong>' + pagatore + '</strong> ha pagato';
      }
      
      // Mostra indice quando ordini per "ultime inserite"
      if (ordinamentoTransazioni === 'ultime-inserite') {
        detailsHTML += ' <span style="background:#a1a1aa;color:#fff;padding:2px 8px;border-radius:12px;font-size:0.75em;font-weight:700;margin-left:8px">#' + (t.indiceOriginale + 1) + '</span>';
      }
      
      if (t.note) detailsHTML += '<br>📝 ' + t.note;
      
      // ========== BADGE PAGAMENTO MISTO ==========
      if (t.pagamentoMisto && t.metodiPagamento && t.metodiPagamento.length > 0) {
        detailsHTML += '<div style="background:rgba(243,156,18,0.15);border-radius:8px;padding:12px;margin-top:10px;border:2px solid rgba(243,156,18,0.4)">';
        detailsHTML += '<div style="font-weight:700;color:#f39c12;margin-bottom:8px;font-size:0.95em;">🎫 Pagamento Misto</div>';
        
        t.metodiPagamento.forEach(function(metodo) {
          var icona = '💳';
          var descrizione = '';
          
          if (metodo.tipo === 'buoni_pasto') {
            icona = '🎫';
            descrizione = metodo.quantita + ' buoni (' + formatEuro(metodo.importo) + ')';
          } else if (metodo.tipo === 'partner') {
            icona = '👤';
            var partnerName = DB.config && DB.config.partnerName ? DB.config.partnerName : 'Partner';
            descrizione = partnerName + ' ha pagato ' + formatEuro(metodo.importo);
          } else {
            var nomiMetodi = {
              'webank': '💳 WeBank',
              'revolut': '🌐 Revolut',
              'paypal': '💰 PayPal',
              'contanti': '💵 Contanti'
            };
            descrizione = (nomiMetodi[metodo.tipo] || metodo.tipo) + ' ' + formatEuro(metodo.importo);
          }
          
          detailsHTML += '<div style="display:flex;align-items:center;gap:8px;padding:6px 0;font-size:0.9em;">';
          detailsHTML += '<span style="font-size:1.2em;">' + icona + '</span>';
          detailsHTML += '<span style="color:#ccc;">' + descrizione + '</span>';
          detailsHTML += '</div>';
        });
        
        detailsHTML += '</div>';
      }
      
      // ========== BADGE ANTICIPO PARTNER ==========
      if (t.anticipoPartner && t.anticipoPartner > 0) {
        var partnerName = DB.config && DB.config.partnerName ? DB.config.partnerName : 'partner';
        detailsHTML += '<div style="background:rgba(229,228,226,0.15);border-radius:8px;padding:10px;margin-top:10px;border:1px solid rgba(192,192,192,0.3)">';
        detailsHTML += '<div style="display:flex;align-items:center;gap:8px;font-size:0.9em;">';
        detailsHTML += '<span style="font-size:1.2em;">💰</span>';
        detailsHTML += '<span style="color:#cccccc;">Include <strong style="color:#e5e4e2;">€' + t.anticipoPartner.toFixed(2) + '</strong> anticipati per ' + partnerName + '</span>';
        detailsHTML += '</div>';
        detailsHTML += '<div style="font-size:0.8em;color:#999999;margin-top:5px;margin-left:28px;">';
        detailsHTML += 'Totale pagato: €' + t.importoOriginale.toFixed(2);
        detailsHTML += '</div>';
        detailsHTML += '</div>';
      }
      
      details.innerHTML = detailsHTML;
      
      var actions = document.createElement('div');
      actions.className = 'trans-actions';
      
      var btnMod = document.createElement('button');
      btnMod.className = 'btn-edit';
      btnMod.textContent = '✏️ Modifica';
      btnMod.setAttribute('data-trans-id', t.indiceOriginale);
      btnMod.setAttribute('data-action', 'edit');
      
      var btnDel = document.createElement('button');
      btnDel.className = 'btn-danger';
      btnDel.textContent = '🗑️ Elimina';
      btnDel.setAttribute('data-trans-id', t.indiceOriginale);
      btnDel.setAttribute('data-action', 'delete');
      
      actions.appendChild(btnMod);
      actions.appendChild(btnDel);
      
      div.appendChild(header);
      div.appendChild(details);
      div.appendChild(actions);
      
      container.appendChild(div);
    }); // fine transazioniGiorno.forEach
    }); // fine dateOrdinate.forEach
  }

  // Event delegation per pulsanti transazioni
  // Rimuovi listener esistenti
  var oldContainer = container.cloneNode(false);
  while (container.firstChild) {
    oldContainer.appendChild(container.firstChild);
  }
  container.parentNode.replaceChild(oldContainer, container);
  container = oldContainer;
  
  // Aggiungi nuovo listener con delegation
  container.addEventListener('click', function(e) {
    // Prima controlla se è un click su un pulsante
    var btn = e.target.closest('button[data-action]');
    if (btn) {
      e.preventDefault();
      e.stopPropagation();
      var transId = parseInt(btn.getAttribute('data-trans-id'));
      var action = btn.getAttribute('data-action');
      if (action === 'edit') {
        modifica(transId);
      } else if (action === 'delete') {
        eliminaTrans(transId);
      }
      return;
    }

    // Altrimenti controlla se è un click sulla transazione per espanderla
    var transItem = e.target.closest('.trans-item');
    if (transItem) {
      // Chiudi tutte le altre transazioni
      container.querySelectorAll('.trans-item.expanded').forEach(function(item) {
        if (item !== transItem) {
          item.classList.remove('expanded');
        }
      });
      // Toggle questa transazione
      transItem.classList.toggle('expanded');
      playSound('click');
    }
  }, true);
  
  // Inizializza gesture swipe su mobile
  if ('ontouchstart' in window) {
    initSwipeGestures();
  }
}

// RESET COMPLETO dei campi del modal per evitare dati residui
function resetCampiModal() {
  // Reset campi base
  var tid = document.getElementById('tid');
  var tdata = document.getElementById('tdata');
  var tora = document.getElementById('tora');
  var ttipo = document.getElementById('ttipo');
  var tcat = document.getElementById('tcat');
  var timp = document.getElementById('timp');
  var tnote = document.getElementById('tnote');
  var tmetodo = document.getElementById('tmetodo');
  var tdestinazione = document.getElementById('tdestinazione');
  var tcondiviso = document.getElementById('tcondiviso');
  var tvirtual = document.getElementById('tvirtual');

  if (tid) tid.value = '';
  if (tdata) tdata.value = new Date().toISOString().split('T')[0];
  if (tora) tora.value = '00:00';
  if (ttipo) ttipo.value = 'expense';
  if (tcat) tcat.value = '';
  if (timp) timp.value = '';
  if (tnote) tnote.value = '';
  if (tmetodo) tmetodo.value = 'webank';
  if (tdestinazione) tdestinazione.value = 'webank';
  if (tcondiviso) tcondiviso.checked = false;
  if (tvirtual) tvirtual.checked = false;

  // Reset sezione pagamento misto
  var tpagamentoMisto = document.getElementById('tpagamentoMisto');
  var pagamentoMistoSection = document.getElementById('pagamentoMistoSection');
  var tmistoQuantitaBuoni = document.getElementById('tmistoQuantitaBuoni');
  var tmistoDifferenza = document.getElementById('tmistoDifferenza');

  if (tpagamentoMisto) tpagamentoMisto.checked = false;
  if (pagamentoMistoSection) pagamentoMistoSection.style.display = 'none';
  if (tmistoQuantitaBuoni) tmistoQuantitaBuoni.value = '0';
  if (tmistoDifferenza) tmistoDifferenza.value = '0';
  // Reset chi ha pagato la differenza
  pagataDifferenzaDa = 'io';

  // Reset sezione anticipo partner
  var tAnticipoPartner = document.getElementById('tAnticipoPartner');
  var tAnticipoImporto = document.getElementById('tAnticipoImporto');
  var anticipoPartnerSection = document.getElementById('anticipoPartnerSection');

  if (tAnticipoPartner) tAnticipoPartner.checked = false;
  if (tAnticipoImporto) tAnticipoImporto.value = '0';
  if (anticipoPartnerSection) anticipoPartnerSection.style.display = 'none';

  // Reset sezione buoni pasto (per entrate)
  var tbuoniQuantita = document.getElementById('tbuoniQuantita');
  var tbuoniValore = document.getElementById('tbuoniValore');
  var buoniDettagliSection = document.getElementById('buoniDettagliSection');

  if (tbuoniQuantita) tbuoniQuantita.value = '';
  if (tbuoniValore) tbuoniValore.value = '';
  if (buoniDettagliSection) buoniDettagliSection.style.display = 'none';

  // Reset rimborso partner
  var tRimborsoPartner = document.getElementById('tRimborsoPartner');
  if (tRimborsoPartner) tRimborsoPartner.checked = false;

  // Aggiorna visualizzazione checkbox
  if (typeof aggiornaVisualCheckbox === 'function') aggiornaVisualCheckbox();
  if (typeof aggiornaVisualCheckboxVirtual === 'function') aggiornaVisualCheckboxVirtual();
  if (typeof aggiornaVisualCheckboxAnticipo === 'function') aggiornaVisualCheckboxAnticipo();
  if (typeof aggiornaVisualCheckboxRimborso === 'function') aggiornaVisualCheckboxRimborso();

  console.log('🔄 Campi modal resettati');
}

function modifica(id) {
  console.log('🔧 MODIFICA CHIAMATA - Indice array:', id, 'Tipo:', typeof id);
  console.log('🔧 Totale transazioni in DB:', DB.transazioni.length);

  // Verifica che id sia un numero valido
  if (id === undefined || id === null || isNaN(id)) {
    console.error('❌ ID non valido:', id);
    mostraToast('❌ ID transazione non valido', 'danger');
    return;
  }

  // Verifica che l'indice sia nel range
  if (id < 0 || id >= DB.transazioni.length) {
    console.error('❌ Indice fuori range:', id, '(max:', DB.transazioni.length - 1, ')');
    mostraToast('❌ Transazione non trovata (indice ' + id + ')', 'danger');
    return;
  }

  var t = DB.transazioni[id];
  console.log('🔧 Transazione trovata:', t);
  if (!t) {
    console.error('❌ Transazione non trovata per indice:', id);
    mostraToast('❌ Transazione non trovata', 'danger');
    return;
  }

  console.log('🔧 Aprendo modal...');
  var modalEl = document.getElementById('modal');

  // RESET COMPLETO dei campi prima di caricare nuovi valori
  resetCampiModal();

  modalEl.classList.add('active');

  // Scroll in cima al modal
  var modalContent = modalEl.querySelector('.modal-content');
  if (modalContent) {
    modalContent.scrollTop = 0;
  }
  // Scroll anche il modal stesso
  modalEl.scrollTop = 0;
  // FIX: Se la transazione non ha ID (vecchia), usa l'indice con prefisso
  // Formato: "id:123456789" per ID reale, "idx:5" per indice array
  console.log('[MODIFICA] Transazione:', t, 'ha ID?', t.id, 'indice array:', id);
  if (t.id) {
    document.getElementById('tid').value = 'id:' + t.id;
    console.log('[MODIFICA] Salvato tid con prefisso id:', 'id:' + t.id);
  } else {
    document.getElementById('tid').value = 'idx:' + id;
    console.log('[MODIFICA] Salvato tid con prefisso idx:', 'idx:' + id);
  }
  document.getElementById('tdata').value = t.data;
  document.getElementById('tora').value = t.ora || '00:00';
  document.getElementById('ttipo').value = t.tipo;
  aggCatSel();
  document.getElementById('tcat').value = t.categoria;
  
  // IMPORTANTE: Se c'è anticipo, carica importo originale
  if (t.anticipoPartner && t.anticipoPartner > 0) {
    document.getElementById('timp').value = t.importoOriginale || t.importo;
  } else {
    document.getElementById('timp').value = t.importo;
  }
  
  document.getElementById('tnote').value = t.note || '';
  if (document.getElementById('tmetodo')) {
    document.getElementById('tmetodo').value = t.metodo || 'carta';
  }
  
  // NUOVO - Carica destinazione per entrate
  if (t.tipo === 'income' && document.getElementById('tdestinazione')) {
    document.getElementById('tdestinazione').value = t.destinazione || 'webank';
    checkDestinazioneSelezionata(); // Mostra dettagli buoni se necessario
    
    // Se è buoni pasto, carica i dettagli
    if (t.destinazione === 'buoni_pasto' && t.dettagliBuoni) {
      var tbuoniQta = document.getElementById('tbuoniQuantita');
      var tbuoniVal = document.getElementById('tbuoniValore');
      if (tbuoniQta) tbuoniQta.value = t.dettagliBuoni.quantita;
      if (tbuoniVal) tbuoniVal.value = t.dettagliBuoni.valoreUnitario;
    }
  }
  
  if (document.getElementById('tcondiviso')) {
    document.getElementById('tcondiviso').checked = t.condiviso || false;
    aggiornaVisualCheckbox();
  }
  if (document.getElementById('tvirtual')) {
    document.getElementById('tvirtual').checked = t.virtualRecovery || false;
    aggiornaVisualCheckboxVirtual();
  }
  
  // ========== CARICA ANTICIPO PARTNER ==========
  var anticipoCheckbox = document.getElementById('tAnticipoPartner');
  if (anticipoCheckbox && t.anticipoPartner && t.anticipoPartner > 0) {
    anticipoCheckbox.checked = true;
    document.getElementById('tAnticipoImporto').value = t.anticipoPartner;
    document.getElementById('anticipoPartnerSection').style.display = 'block';
    aggiornaVisualCheckboxAnticipo();
    calcolaAnticipoPartner();
  } else if (anticipoCheckbox) {
    anticipoCheckbox.checked = false;
    document.getElementById('tAnticipoImporto').value = '0';
    document.getElementById('anticipoPartnerSection').style.display = 'none';
    aggiornaVisualCheckboxAnticipo();
  }

  // ========== CARICA PAGAMENTO MISTO ==========
  var pagamentoMistoCheckbox = document.getElementById('tpagamentoMisto');
  var pagamentoMistoSection = document.getElementById('pagamentoMistoSection');
  var mistoCheckbox = document.getElementById('mistoCheckbox');
  var mistoCheckIcon = document.getElementById('mistoCheckIcon');

  if (pagamentoMistoCheckbox && t.pagamentoMisto && t.metodiPagamento && t.metodiPagamento.length > 0) {
    pagamentoMistoCheckbox.checked = true;
    if (pagamentoMistoSection) pagamentoMistoSection.style.display = 'block';
    // Aggiorna visual checkbox misto
    if (mistoCheckbox) {
      mistoCheckbox.style.background = '#ff9800';
      mistoCheckbox.style.borderColor = '#ff9800';
    }
    if (mistoCheckIcon) mistoCheckIcon.style.display = 'block';

    // Carica quantità buoni e differenza
    var buoniMetodo = t.metodiPagamento.find(function(m) { return m.tipo === 'buoni_pasto'; });
    var altroMetodo = t.metodiPagamento.find(function(m) { return m.tipo !== 'buoni_pasto' && m.tipo !== 'partner'; });
    var partnerMetodo = t.metodiPagamento.find(function(m) { return m.tipo === 'partner'; });

    if (buoniMetodo) {
      var tmistoQta = document.getElementById('tmistoQuantitaBuoni');
      if (tmistoQta) tmistoQta.value = buoniMetodo.quantita || 0;
    }

    // Salva il metodo alternativo come metodoPagamentoPrecedente per il ripristino
    if (altroMetodo && altroMetodo.tipo) {
      metodoPagamentoPrecedente = altroMetodo.tipo;
    } else {
      metodoPagamentoPrecedente = 'webank';
    }

    // Calcola differenza (da altro metodo o partner)
    var differenza = 0;
    if (altroMetodo) differenza = altroMetodo.importo || 0;
    if (partnerMetodo) differenza = partnerMetodo.importo || 0;
    var tmistoDiff = document.getElementById('tmistoDifferenza');
    if (tmistoDiff) tmistoDiff.value = differenza;

    // Aggiorna anche il metodo differenza nel dropdown
    if (altroMetodo && document.getElementById('tmistoMetodoDifferenza')) {
      document.getElementById('tmistoMetodoDifferenza').value = altroMetodo.tipo;
    }

    // Aggiorna visualizzazione checkbox pagamento misto
    if (typeof aggiornaVisualCheckboxMisto === 'function') aggiornaVisualCheckboxMisto();
    if (typeof aggiornaPagamentoMisto === 'function') aggiornaPagamentoMisto();
  } else if (pagamentoMistoCheckbox) {
    pagamentoMistoCheckbox.checked = false;
    if (pagamentoMistoSection) pagamentoMistoSection.style.display = 'none';
    // Reset visual checkbox misto
    if (mistoCheckbox) {
      mistoCheckbox.style.background = '#fff';
      mistoCheckbox.style.borderColor = '#ff9800';
    }
    if (mistoCheckIcon) mistoCheckIcon.style.display = 'none';
  }

  console.log('✅ Modal aperta con successo');
}

function eliminaTrans(id) {
  console.log('🗑️ ELIMINA CHIAMATA - ID:', id);
  console.log('🗑️ Totale transazioni:', DB.transazioni.length);
  
  if (id < 0 || id >= DB.transazioni.length) {
    console.error('❌ ID non valido:', id, 'Max:', DB.transazioni.length - 1);
    mostraToast('❌ Errore: transazione non valida', 'danger');
    return;
  }
  
  var t = DB.transazioni[id];
  console.log('🗑️ Transazione da eliminare:', t);
  var descrizione = t.categoria + ' - €' + t.importo.toFixed(2);
  
  mostraConferma({
    icon: '🗑️',
    title: 'Elimina Transazione',
    message: 'Vuoi davvero eliminare questa transazione?\n\n' + descrizione + '\n\nQuesta azione non può essere annullata.',
    confirmText: '🗑️ Elimina',
    danger: true
  }).then(function(confirmed) {
    console.log('🗑️ Conferma ricevuta:', confirmed);
    if (!confirmed) {
      console.log('🗑️ Eliminazione annullata');
      return;
    }
    
    console.log('🗑️ Eliminando transazione ID:', id);
    // ELIMINA usando l'indice corretto
    DB.transazioni.splice(id, 1);
    salvaDB();
    mostraTrans();
    aggiorna();
    mostraAnalisi(); // Aggiorna anche la sezione analisi
    
    // IMPORTANTE: Aggiorna anche Condiviso (potrebbero esserci anticipi o transazioni condivise)
    if (typeof mostraCondiviso === 'function') {
      mostraCondiviso();
    }
    
    mostraToast('✅ Transazione eliminata', 'success');
    console.log('✅ Transazione eliminata con successo');
  });
}

// ========== CATEGORIE ==========
function mostraCats() {
  // Mostra categorie entrate
  var containerIn = document.getElementById('catIn');
  var htmlIn = '';
  
  DB.categorie.income.sort().forEach(function(cat, i) {
    htmlIn += '<div class="cat-item income">';
    htmlIn += '<strong>' + cat + '</strong>';
    htmlIn += '<div class="cat-actions">';
    htmlIn += '<button class="btn-edit" style="padding:10px 14px;border:none;border-radius:10px;cursor:pointer;font-weight:700;font-size:1em" onclick="editCat(\'income\',' + i + ')">✏️</button>';
    htmlIn += '<button class="btn-danger" style="padding:10px 14px;border:none;border-radius:10px;cursor:pointer;font-weight:700;font-size:1em" onclick="elimCat(\'income\',' + i + ')">🗑️</button>';
    htmlIn += '</div>';
    htmlIn += '</div>';
  });
  
  containerIn.innerHTML = htmlIn;
  
  // Mostra categorie uscite divise per tipo
  var categorieNecessita = [];
  var categorieDesideri = [];
  
  DB.categorie.expense.forEach(function(cat) {
    var tipo = DB.categorieClassificazione[cat] || 'desideri';
    if (tipo === 'necessita') {
      categorieNecessita.push(cat);
    } else {
      categorieDesideri.push(cat);
    }
  });
  
  // Necessità
  var containerNec = document.getElementById('catNecessita');
  var htmlNec = '';
  
  if (categorieNecessita.length === 0) {
    htmlNec = '<p style="font-size:0.9em;color:#7f8c8d;padding:10px;background:var(--bg);border-radius:10px">Nessuna categoria classificata come Necessità</p>';
  } else {
    categorieNecessita.sort().forEach(function(cat) {
      var idx = DB.categorie.expense.indexOf(cat);
      htmlNec += '<div class="cat-item expense" style="display:flex;align-items:center;gap:8px;border-left-color:#e67e22;padding:12px 10px;margin-bottom:8px">';
      htmlNec += '<strong style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:0.9em;font-weight:700">' + cat + '</strong>';
      htmlNec += '<div class="cat-actions" style="display:flex;gap:5px;flex-shrink:0">';
      htmlNec += '<button class="btn-edit" style="padding:9px;border:none;border-radius:8px;cursor:pointer;font-weight:700;font-size:0.95em;width:38px;height:38px;display:flex;align-items:center;justify-content:center" onclick="editCat(\'expense\',' + idx + ')">✏️</button>';
      htmlNec += '<button class="btn-danger" style="padding:9px;border:none;border-radius:8px;cursor:pointer;font-weight:700;font-size:0.95em;width:38px;height:38px;display:flex;align-items:center;justify-content:center" onclick="elimCat(\'expense\',' + idx + ')">🗑️</button>';
      htmlNec += '<button onclick="cambiaClassificazione(\'' + cat + '\', \'desideri\')" style="background:#9b59b6;color:#fff;border:none;padding:8px 12px;border-radius:8px;font-size:0.7em;cursor:pointer;font-weight:700;white-space:nowrap;width:85px;flex-shrink:0;display:flex;align-items:center;justify-content:center">→ Desi</button>';
      htmlNec += '</div>';
      htmlNec += '</div>';
    });
  }
  
  containerNec.innerHTML = htmlNec;
  
  // Desideri
  var containerDes = document.getElementById('catDesideri');
  var htmlDes = '';
  
  if (categorieDesideri.length === 0) {
    htmlDes = '<p style="font-size:0.9em;color:#7f8c8d;padding:10px;background:var(--bg);border-radius:10px">Nessuna categoria classificata come Desideri</p>';
  } else {
    categorieDesideri.sort().forEach(function(cat) {
      var idx = DB.categorie.expense.indexOf(cat);
      htmlDes += '<div class="cat-item expense" style="display:flex;align-items:center;gap:8px;border-left-color:#9b59b6;padding:12px 10px;margin-bottom:8px">';
      htmlDes += '<strong style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:0.9em;font-weight:700">' + cat + '</strong>';
      htmlDes += '<div class="cat-actions" style="display:flex;gap:5px;flex-shrink:0">';
      htmlDes += '<button class="btn-edit" style="padding:9px;border:none;border-radius:8px;cursor:pointer;font-weight:700;font-size:0.95em;width:38px;height:38px;display:flex;align-items:center;justify-content:center" onclick="editCat(\'expense\',' + idx + ')">✏️</button>';
      htmlDes += '<button class="btn-danger" style="padding:9px;border:none;border-radius:8px;cursor:pointer;font-weight:700;font-size:0.95em;width:38px;height:38px;display:flex;align-items:center;justify-content:center" onclick="elimCat(\'expense\',' + idx + ')">🗑️</button>';
      htmlDes += '<button onclick="cambiaClassificazione(\'' + cat + '\', \'necessita\')" style="background:#e67e22;color:#fff;border:none;padding:8px 12px;border-radius:8px;font-size:0.7em;cursor:pointer;font-weight:700;white-space:nowrap;width:85px;flex-shrink:0;display:flex;align-items:center;justify-content:center">→ Necc</button>';
      htmlDes += '</div>';
      htmlDes += '</div>';
    });
  }
  
  containerDes.innerHTML = htmlDes;
}

async function aggCatConClassificazione() {
  mostraDialogInput('📝 Nome della nuova categoria di uscita:', 'Es: Spesa Casa', function(name) {
    // Debug
    
    if (!name || !name.trim()) {
      return;
    }
    
    name = name.trim();
    
    if (DB.categorie.expense.indexOf(name) > -1) {
      mostraToast('⚠️ Categoria già esistente!', 'warning');
      return;
    }
    
    
    // Dialog classificazione
    var modal = document.createElement('div');
    modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:10001;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(5px)';
    
    var dialog = document.createElement('div');
    dialog.style.cssText = 'background:var(--card);border-radius:20px;padding:30px;max-width:420px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.4)';
    
    dialog.innerHTML = '<h3 style="margin-bottom:15px;color:var(--text);font-size:1.4em;text-align:center">🏷️ Classifica "' + name + '"</h3>' +
      '<p style="margin-bottom:25px;color:#7f8c8d;text-align:center;line-height:1.6;font-size:0.95em">Dividi le spese in <strong style="color:var(--income)">Necessità (65%)</strong> e <strong style="color:var(--expense)">Desideri (20%)</strong></p>' +
      '<div style="display:grid;gap:14px">' +
      '<button id="btnNecessita" style="padding:20px;border:none;background:linear-gradient(135deg,#27ae60,#2ecc71);color:#fff;border-radius:16px;font-weight:700;font-size:1.1em;cursor:pointer;box-shadow:0 6px 20px rgba(39,174,96,0.4)">' +
      '<div style="font-size:1.3em;margin-bottom:5px">✅ Necessità (65%)</div>' +
      '<div style="font-size:0.85em;font-weight:400;opacity:0.95">Affitto, cibo, bollette...</div>' +
      '</button>' +
      '<button id="btnDesideri" style="padding:20px;border:none;background:linear-gradient(135deg,#e67e22,#f39c12);color:#fff;border-radius:16px;font-weight:700;font-size:1.1em;cursor:pointer;box-shadow:0 6px 20px rgba(230,126,34,0.4)">' +
      '<div style="font-size:1.3em;margin-bottom:5px">🎁 Desideri (20%)</div>' +
      '<div style="font-size:0.85em;font-weight:400;opacity:0.95">Shopping, uscite, hobby...</div>' +
      '</button>' +
      '</div>';
    
    modal.appendChild(dialog);
    document.body.appendChild(modal);
    
    document.getElementById('btnNecessita').onclick = function() {
      document.body.removeChild(modal);
      
      DB.categorieClassificazione[name] = 'necessita';
      DB.categorie.expense.push(name);
      DB.categorie.expense.sort();
      
      salvaDB();
      
      mostraCats();
      
      mostraToast('✅ Categoria "' + name + '" aggiunta come Necessità!', 'success');
    };
    
    document.getElementById('btnDesideri').onclick = function() {
      document.body.removeChild(modal);
      
      DB.categorieClassificazione[name] = 'desideri';
      DB.categorie.expense.push(name);
      DB.categorie.expense.sort();
      
      salvaDB();
      
      mostraCats();
      
      mostraToast('✅ Categoria "' + name + '" aggiunta come Desiderio!', 'success');
    };
  });
}

function mostraClassificazioneCategorie() {
  // Funzione rimossa - ora integrata in mostraCats()
}

function cambiaClassificazione(categoria, nuovoTipo) {
  DB.categorieClassificazione[categoria] = nuovoTipo;
  salvaDB();
  mostraCats();
  
  // Aggiorna finanze se siamo in quella sezione
  if (currentSection === 'finanze') {
    aggiornaRisparmio();
  }
  
  var nomeNuovoTipo = nuovoTipo === 'necessita' ? 'Necessità' : 'Desideri';
  mostraToast('✅ "' + categoria + '" spostata in ' + nomeNuovoTipo, 'success');
  playSound('success');
}

function aggCat(tipo) {
  var tipoTesto = tipo === 'income' ? 'entrata' : 'uscita';
  
  mostraDialogInput('📝 Nome della nuova categoria di ' + tipoTesto + ':', 'Inserisci nome...', function(name) {
    
    if (!name || !name.trim()) {
      return;
    }
    
    name = name.trim();
    
    if (DB.categorie[tipo].indexOf(name) > -1) {
      mostraToast('⚠️ Categoria già esistente!', 'warning');
      return;
    }
    
    // Se è expense, chiedi classificazione
    if (tipo === 'expense') {
      
      var modal = document.createElement('div');
      modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.6);z-index:10001;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(5px)';
      
      var dialog = document.createElement('div');
      dialog.style.cssText = 'background:var(--card);border-radius:20px;padding:30px;max-width:420px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,0.4)';
      
      dialog.innerHTML = '<h3 style="margin-bottom:15px;color:var(--text);font-size:1.4em;text-align:center">🏷️ Classifica "' + name + '"</h3>' +
        '<p style="margin-bottom:25px;color:#7f8c8d;text-align:center;line-height:1.6;font-size:0.95em">Dividi le spese in <strong style="color:var(--income)">Necessità (65%)</strong> e <strong style="color:var(--expense)">Desideri (20%)</strong></p>' +
        '<div style="display:grid;gap:14px">' +
        '<button id="btnNec" style="padding:20px;border:none;background:linear-gradient(135deg,#27ae60,#2ecc71);color:#fff;border-radius:16px;font-weight:700;font-size:1.1em;cursor:pointer;box-shadow:0 6px 20px rgba(39,174,96,0.4)">' +
        '<div style="font-size:1.3em;margin-bottom:5px">✅ Necessità (65%)</div>' +
        '<div style="font-size:0.85em;font-weight:400;opacity:0.95">Affitto, cibo, bollette...</div>' +
        '</button>' +
        '<button id="btnDes" style="padding:20px;border:none;background:linear-gradient(135deg,#e67e22,#f39c12);color:#fff;border-radius:16px;font-weight:700;font-size:1.1em;cursor:pointer;box-shadow:0 6px 20px rgba(230,126,34,0.4)">' +
        '<div style="font-size:1.3em;margin-bottom:5px">🎁 Desideri (20%)</div>' +
        '<div style="font-size:0.85em;font-weight:400;opacity:0.95">Shopping, uscite, hobby...</div>' +
        '</button>' +
        '</div>';
      
      modal.appendChild(dialog);
      document.body.appendChild(modal);
      
      document.getElementById('btnNec').onclick = function() {
        document.body.removeChild(modal);
        DB.categorieClassificazione[name] = 'necessita';
        DB.categorie[tipo].push(name);
        DB.categorie[tipo].sort();
        salvaDB();
        mostraCats();
        mostraToast('✅ Categoria aggiunta!', 'success');
      };
      
      document.getElementById('btnDes').onclick = function() {
        document.body.removeChild(modal);
        DB.categorieClassificazione[name] = 'desideri';
        DB.categorie[tipo].push(name);
        DB.categorie[tipo].sort();
        salvaDB();
        mostraCats();
        mostraToast('✅ Categoria aggiunta!', 'success');
      };
    } else {
      // Income - nessuna classificazione
      DB.categorie[tipo].push(name);
      DB.categorie[tipo].sort();
      salvaDB();
      mostraCats();
      mostraToast('✅ Categoria aggiunta!', 'success');
    }
  });
}

function editCat(tipo, idx) {
  var oldName = DB.categorie[tipo][idx];
  var newName = prompt('✏️ Nuovo nome per "' + oldName + '":', oldName);
  
  if (!newName || !newName.trim() || newName.trim() === oldName) return;
  
  newName = newName.trim();
  
  if (DB.categorie[tipo].indexOf(newName) > -1) {
    mostraToast('⚠️ Nome già esistente!', 'warning');
    return;
  }
  
  // Aggiorna transazioni
  DB.transazioni.forEach(function(t) {
    if (t.tipo === tipo && t.categoria === oldName) {
      t.categoria = newName;
    }
  });
  
  // Se è expense, mantieni la classificazione
  if (tipo === 'expense' && DB.categorieClassificazione[oldName]) {
    DB.categorieClassificazione[newName] = DB.categorieClassificazione[oldName];
    delete DB.categorieClassificazione[oldName];
  }
  
  DB.categorie[tipo][idx] = newName;
  DB.categorie[tipo].sort();
  salvaDB();
  mostraCats();
  mostraToast('✅ Categoria rinominata!', 'success');
}

function elimCat(tipo, idx) {
  var cat = DB.categorie[tipo][idx];
  
  // Verifica se la categoria è in uso
  var used = DB.transazioni.some(function(t) {
    // Per le categorie expense, controlla sia expense che partner_payment
    if (tipo === 'expense') {
      return (t.tipo === 'expense' || t.tipo === 'partner_payment') && t.categoria === cat;
    }
    return t.tipo === tipo && t.categoria === cat;
  });
  
  if (used) {
    mostraToast('⚠️ Categoria in uso nelle transazioni!', 'warning');
    playSound('error');
    return;
  }
  
  mostraConferma({
    icon: '🗑️',
    title: 'Elimina Categoria',
    message: 'Vuoi davvero eliminare la categoria "' + cat + '"?\n\nQuesta azione non può essere annullata.',
    confirmText: '🗑️ Elimina',
    danger: true
  }).then(function(confirmed) {
    if (!confirmed) return;
    
    DB.categorie[tipo].splice(idx, 1);
    
    // Rimuovi anche la classificazione se esiste
    if (tipo === 'expense' && DB.categorieClassificazione[cat]) {
      delete DB.categorieClassificazione[cat];
    }
    
    salvaDB();
    mostraCats();
    mostraToast('✅ Categoria eliminata!', 'success');
  });
}

// ========== EXPORT/IMPORT ==========
function mostraCSV() {
  if (!DB.transazioni || DB.transazioni.length === 0) {
    mostraToast('⚠️ Nessuna transazione da esportare!', 'warning');
    return;
  }
  
  var csv = 'Data,Ora,Tipo,Categoria,Importo,Note\n';
  
  DB.transazioni.slice().sort(function(a, b) {
    var dateTimeA = new Date(a.data + ' ' + (a.ora || '00:00'));
    var dateTimeB = new Date(b.data + ' ' + (b.ora || '00:00'));
    return dateTimeA - dateTimeB;
  }).forEach(function(t) {
    var tipo = t.tipo === 'income' ? 'Entrata' : 'Uscita';
    var note = (t.note || '').replace(/"/g, '""');
    var ora = t.ora || '00:00';
    csv += t.data + ',' + ora + ',' + tipo + ',' + t.categoria + ',' + t.importo.toFixed(2) + ',"' + note + '"\n';
  });
  
  var modal = document.getElementById('modal');
  modal.classList.add('active');
  
  var content = modal.querySelector('.modal-content');
  content.innerHTML = '<div class="modal-header"><h3>📊 Esporta CSV</h3><button class="close-btn" onclick="chiudiModal()">×</button></div>';
  content.innerHTML += '<div class="info-box">Copia questi dati e incollali in Excel o Google Sheets</div>';
  content.innerHTML += '<textarea readonly style="width:100%;height:300px;padding:12px;font-family:monospace;font-size:0.9em;border:2px solid var(--border);border-radius:10px;background:var(--bg);color:var(--text)">' + csv + '</textarea>';
  content.innerHTML += '<button class="btn" onclick="copiaCSV()">📋 Copia negli Appunti</button>';
  content.innerHTML += '<button class="btn btn-danger" onclick="chiudiModal()">Chiudi</button>';
  
  window.tempCSV = csv;
}

function copiaCSV() {
  var textarea = document.createElement('textarea');
  textarea.value = window.tempCSV;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  
  try {
    document.execCommand('copy');
    mostraToast('✅ Dati copiati negli appunti!', 'success');
  } catch (e) {
    mostraToast('❌ Impossibile copiare automaticamente', 'danger');
  }
  
  document.body.removeChild(textarea);
}

function esporta() {
  try {
    var txt = JSON.stringify(DB, null, 2);
    var blob = new Blob([txt], {type: 'application/json'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'budget_backup_' + new Date().toISOString().split('T')[0] + '.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    mostraToast('✅ Backup esportato!', 'success');
  } catch (e) {
    mostraToast('❌ Errore durante l\'esportazione', 'danger');
  }
}

function importa(e) {
  var file = e.target.files[0];
  if (!file) return;

  var reader = new FileReader();
  reader.onload = function(evt) {
    try {
      var imported = JSON.parse(evt.target.result);

      if (!imported.categorie || !imported.transazioni) {
        mostraToast('❌ File non valido!', 'danger');
        return;
      }

      // Prima domanda: cosa vuoi fare?
      mostraSceltaImport(imported);
    } catch (e) {
      mostraToast('❌ File non valido!', 'danger');
    }
  };
  reader.readAsText(file);

  e.target.value = '';
}

function mostraSceltaImport(imported) {
  // Crea modal per la scelta
  var modal = document.createElement('div');
  modal.id = 'importChoiceModal';
  modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);z-index:20000;display:flex;align-items:center;justify-content:center;padding:20px';

  modal.innerHTML = `
    <div style="background:var(--card);border-radius:16px;max-width:400px;width:100%;padding:25px;text-align:center">
      <div style="font-size:2.5em;margin-bottom:15px">📥</div>
      <h3 style="margin-bottom:10px;color:var(--text)">Importa Dati</h3>
      <p style="color:#888;margin-bottom:25px;font-size:0.9em;line-height:1.5">
        Come vuoi procedere con l'importazione?
      </p>

      <div style="display:flex;flex-direction:column;gap:12px">
        <button onclick="eseguiImport('preserva')" style="width:100%;padding:16px;background:linear-gradient(135deg,#4ecca3,#3cb371);border:none;border-radius:12px;color:#fff;font-weight:700;font-size:1em;cursor:pointer">
          ✅ Mantieni i saldi iniziali dei conti<br>
          <span style="font-size:0.8em;opacity:0.9">Importa transazioni, conserva configurazione conti</span>
        </button>

        <button onclick="eseguiImport('sostituisci')" style="width:100%;padding:16px;background:linear-gradient(135deg,#e74c3c,#c0392b);border:none;border-radius:12px;color:#fff;font-weight:700;font-size:1em;cursor:pointer">
          🔄 Sostituisci tutto completamente<br>
          <span style="font-size:0.8em;opacity:0.9">Cancella tutto e usa solo i dati importati</span>
        </button>

        <button onclick="chiudiSceltaImport()" style="width:100%;padding:14px;background:rgba(128,128,128,0.2);border:2px solid rgba(128,128,128,0.3);border-radius:12px;color:#888;font-weight:600;font-size:0.95em;cursor:pointer">
          ❌ Annulla
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Salva i dati importati per uso successivo
  window._importedData = imported;
}

function chiudiSceltaImport() {
  var modal = document.getElementById('importChoiceModal');
  if (modal) modal.remove();
  window._importedData = null;
}

function eseguiImport(modalita) {
  var imported = window._importedData;
  if (!imported) return;

  chiudiSceltaImport();

  if (modalita === 'preserva') {
    // PRESERVA configurazioni importanti prima dell'import
    var saldiInizialiBackup = DB.saldiIniziali ? JSON.parse(JSON.stringify(DB.saldiIniziali)) : null;
    var contiPersonalizzatiBackup = DB.contiPersonalizzati ? JSON.parse(JSON.stringify(DB.contiPersonalizzati)) : null;
    var configBackup = DB.config ? JSON.parse(JSON.stringify(DB.config)) : null;
    var contiBackup = DB.conti ? JSON.parse(JSON.stringify(DB.conti)) : null;

    // Importa i nuovi dati
    DB = imported;
    if (!DB.theme) DB.theme = 'auto';

    // RIPRISTINA le configurazioni preservate
    if (saldiInizialiBackup && Object.keys(saldiInizialiBackup).length > 0) {
      DB.saldiIniziali = saldiInizialiBackup;
    }
    if (contiPersonalizzatiBackup && contiPersonalizzatiBackup.length > 0) {
      DB.contiPersonalizzati = contiPersonalizzatiBackup;
    }
    if (configBackup && configBackup.setupCompleted) {
      DB.config = Object.assign({}, imported.config || {}, configBackup);
    }
    // Preserva TUTTI i saldi dei conti (non solo buoni_pasto)
    if (contiBackup) {
      if (!DB.conti) DB.conti = {};
      Object.keys(contiBackup).forEach(function(key) {
        DB.conti[key] = contiBackup[key];
      });
    }

    salvaDB();
    mostraToast('✅ Importazione completata! Saldi iniziali mantenuti.', 'success');
  } else {
    // SOSTITUISCI TUTTO
    DB = imported;
    if (!DB.theme) DB.theme = 'auto';
    salvaDB();
    mostraToast('✅ Tutti i dati sono stati sostituiti!', 'success');
  }

  setTimeout(function() { location.reload(); }, 1500);
}

function reset() {
  mostraConferma({
    icon: '⚠️',
    title: 'ELIMINA TUTTI I DATI',
    message: 'ATTENZIONE: Questa azione eliminerà TUTTI i dati in modo IRREVERSIBILE!\n\nSei ASSOLUTAMENTE SICURO di voler procedere?',
    confirmText: '🗑️ ELIMINA TUTTO',
    danger: true
  }).then(function(confirmed) {
    if (!confirmed) return;
    
    // Seconda conferma
    mostraConferma({
      icon: '🚨',
      title: 'ULTIMA CONFERMA',
      message: 'I dati non potranno essere recuperati!\n\nConfermi l\'eliminazione definitiva?',
      confirmText: '🗑️ SÌ, ELIMINA',
      danger: true
    }).then(function(doubleConfirm) {
      if (!doubleConfirm) return;
      
      localStorage.removeItem('budgetDBPro');
      mostraToast('✅ Dati eliminati. Ricarico...', 'success');
      setTimeout(function() { location.reload(); }, 1500);
    });
  });
}

// ========== GESTIONE DATA TRACKING ==========
function salvaDataTracking() {
  var data = document.getElementById('trackingDateInput').value;
  if (!data) {
    mostraToast('⚠️ Seleziona una data!', 'warning');
    return;
  }
  
  DB.dataInizioTracking = data;
  salvaDB();
  mostraDataTracking();
  mostraToast('✅ Data inizio salvata!', 'success');
}

function resetDataTracking() {
  mostraConferma({
    icon: '🔄',
    title: 'Reimposta Data Tracking',
    message: 'Vuoi reimpostare la data di inizio tracking?',
    confirmText: '🔄 Reimposta',
    danger: false
  }).then(function(confirmed) {
    if (!confirmed) return;
    
    DB.dataInizioTracking = null;
    document.getElementById('trackingDateInput').value = '';
    salvaDB();
    mostraDataTracking();
    mostraToast('✅ Data reimpostata!', 'success');
  });
}

// ========== SALDO INIZIALE SPLITWISE ==========
function inizializzaConfigurazioneIniziale() {
  // Mostra/nascondi card saldo Splitwise in base alla modalità coppia
  var saldoCard = document.getElementById('saldoSplitwiseCard');
  if (saldoCard) {
    if (DB.config && DB.config.mode === 'couple') {
      saldoCard.style.display = 'block';

      // Aggiorna nome partner nei testi
      var partnerName = DB.config.partnerName || 'Partner';
      var titoloEl = document.getElementById('saldoSplitwiseTitolo');
      var partnerNameEl = document.getElementById('partnerNameSaldo');

      if (titoloEl) titoloEl.textContent = 'Saldo con ' + partnerName;
      if (partnerNameEl) partnerNameEl.textContent = partnerName;

      // Carica valore esistente
      caricaSaldoSplitwiseIniziale();
    } else {
      saldoCard.style.display = 'none';
    }
  }
}

function caricaSaldoSplitwiseIniziale() {
  var input = document.getElementById('saldoSplitwiseIniziale');
  if (input && DB.splitwise && DB.splitwise.saldoIniziale !== undefined) {
    var saldo = DB.splitwise.saldoIniziale;
    input.value = Math.abs(saldo);

    // Seleziona il bottone corretto in base al segno
    if (saldo > 0) {
      impostaSaldoSplitwise('positivo');
    } else if (saldo < 0) {
      impostaSaldoSplitwise('negativo');
    }

    aggiornaPreviewSaldoSplitwise();
  }
  // Aggiorna vista compatta/form
  aggiornaVistaDebitoIniziale();
}

function aggiornaPreviewSaldoSplitwise() {
  var input = document.getElementById('saldoSplitwiseIniziale');
  var preview = document.getElementById('saldoSplitwisePreview');
  var partnerName = DB.config && DB.config.partnerName ? DB.config.partnerName : 'Partner';

  if (!input || !preview) return;

  var valore = Math.abs(parseFloat(input.value)) || 0;

  if (valore === 0) {
    preview.style.background = 'rgba(155,89,182,0.1)';
    preview.style.borderColor = 'rgba(155,89,182,0.3)';
    preview.style.color = '#a1a1aa';
    preview.innerHTML = 'Inserisci l\'importo del debito pre-esistente';
  } else {
    // Controlla se è positivo o negativo in base ai bottoni
    var btnMiDeve = document.getElementById('btnMiDeve');
    var isPositivo = btnMiDeve && btnMiDeve.classList.contains('selected');

    if (isPositivo) {
      preview.style.background = 'linear-gradient(135deg, rgba(78,236,163,0.15) 0%, rgba(78,236,163,0.05) 100%)';
      preview.style.borderColor = '#4ecca3';
      preview.style.color = '#4ecca3';
      preview.innerHTML = '📥 <strong>' + partnerName + '</strong> ti deve <strong>€' + valore.toFixed(2) + '</strong>';
    } else {
      preview.style.background = 'linear-gradient(135deg, rgba(231,76,60,0.15) 0%, rgba(231,76,60,0.05) 100%)';
      preview.style.borderColor = '#e74c3c';
      preview.style.color = '#e74c3c';
      preview.innerHTML = '📤 Devi a <strong>' + partnerName + '</strong> <strong>€' + valore.toFixed(2) + '</strong>';
    }
  }
}

function impostaSaldoSplitwise(tipo) {
  var btnMiDeve = document.getElementById('btnMiDeve');
  var btnDevoIo = document.getElementById('btnDevoIo');

  if (!btnMiDeve || !btnDevoIo) return;

  if (tipo === 'positivo') {
    // Mi deve (positivo)
    btnMiDeve.classList.add('selected');
    btnMiDeve.style.background = 'linear-gradient(180deg, rgba(78,236,163,0.3) 0%, rgba(78,236,163,0.15) 100%)';
    btnMiDeve.style.boxShadow = '0 4px 15px rgba(78,236,163,0.3)';

    btnDevoIo.classList.remove('selected');
    btnDevoIo.style.background = 'linear-gradient(180deg, rgba(231,76,60,0.15) 0%, rgba(231,76,60,0.05) 100%)';
    btnDevoIo.style.boxShadow = 'none';
  } else {
    // Devo io (negativo)
    btnDevoIo.classList.add('selected');
    btnDevoIo.style.background = 'linear-gradient(180deg, rgba(231,76,60,0.3) 0%, rgba(231,76,60,0.15) 100%)';
    btnDevoIo.style.boxShadow = '0 4px 15px rgba(231,76,60,0.3)';

    btnMiDeve.classList.remove('selected');
    btnMiDeve.style.background = 'linear-gradient(180deg, rgba(78,236,163,0.15) 0%, rgba(78,236,163,0.05) 100%)';
    btnMiDeve.style.boxShadow = 'none';
  }

  aggiornaPreviewSaldoSplitwise();
  playSound('click');
}

// Toggle sezione dettagli debito iniziale
function toggleDettagliDebito() {
  var content = document.getElementById('dettagliDebitoContent');
  var icon = document.getElementById('iconDettagliDebito');
  if (!content || !icon) return;

  if (content.style.display === 'none') {
    content.style.display = 'block';
    icon.textContent = '▲';
  } else {
    content.style.display = 'none';
    icon.textContent = '▼';
  }
  playSound('click');
}

function salvaSaldoSplitwiseIniziale() {
  var input = document.getElementById('saldoSplitwiseIniziale');
  var btnMiDeve = document.getElementById('btnMiDeve');
  var dataInput = document.getElementById('dataDebitoIniziale');
  var notaInput = document.getElementById('notaDebitoIniziale');

  if (!input) return;

  var valore = Math.abs(parseFloat(input.value)) || 0;
  var isPositivo = btnMiDeve && btnMiDeve.classList.contains('selected');

  // Se non è stato selezionato nessun bottone e il valore è > 0, chiedi
  if (valore > 0 && !btnMiDeve.classList.contains('selected') && !document.getElementById('btnDevoIo').classList.contains('selected')) {
    mostraToast('⚠️ Seleziona se ti deve o se devi tu!', 'warning');
    return;
  }

  // Applica il segno
  var saldoFinale = isPositivo ? valore : -valore;

  // Salva nel DB
  if (!DB.splitwise) DB.splitwise = { saldo: 0 };

  // Salva lo storico prima di modificare
  var vecchioSaldo = DB.splitwise.saldoIniziale || 0;
  if (vecchioSaldo !== saldoFinale) {
    if (!DB.splitwise.storicoDebito) DB.splitwise.storicoDebito = [];

    var partnerName = DB.config && DB.config.partnerName ? DB.config.partnerName : 'Partner';
    DB.splitwise.storicoDebito.push({
      data: new Date().toISOString(),
      vecchioValore: vecchioSaldo,
      nuovoValore: saldoFinale,
      dataRiferimento: dataInput ? dataInput.value : null,
      nota: notaInput ? notaInput.value.trim() : null
    });

    // Mantieni solo le ultime 20 modifiche
    if (DB.splitwise.storicoDebito.length > 20) {
      DB.splitwise.storicoDebito = DB.splitwise.storicoDebito.slice(-20);
    }
  }

  DB.splitwise.saldoIniziale = saldoFinale;

  // Salva anche data e nota correnti
  DB.splitwise.dataRiferimento = dataInput ? dataInput.value : null;
  DB.splitwise.notaDebito = notaInput ? notaInput.value.trim() : null;

  salvaDB();

  var partnerName = DB.config && DB.config.partnerName ? DB.config.partnerName : 'Partner';
  if (saldoFinale > 0) {
    mostraToast('✅ Salvato! ' + partnerName + ' ti deve €' + valore.toFixed(2), 'success');
  } else if (saldoFinale < 0) {
    mostraToast('✅ Salvato! Devi €' + valore.toFixed(2) + ' a ' + partnerName, 'success');
  } else {
    mostraToast('✅ Saldo iniziale azzerato', 'success');
  }

  playSound('success');

  // Aggiorna sezione condiviso se presente
  if (typeof mostraCondiviso === 'function') mostraCondiviso();

  // Aggiorna visualizzazione debito
  aggiornaVistaDebitoIniziale();
  aggiornaStoricoDebito();
}

function aggiornaVistaDebitoIniziale() {
  var saldoIniziale = (DB.splitwise && DB.splitwise.saldoIniziale) ? DB.splitwise.saldoIniziale : 0;
  var debitoGiaImpostato = document.getElementById('debitoGiaImpostato');
  var debitoFormInput = document.getElementById('debitoFormInput');
  var debitoDisplay = document.getElementById('debitoAttualeDisplay');
  var partnerName = DB.config && DB.config.partnerName ? DB.config.partnerName : 'Partner';

  if (saldoIniziale !== 0 && debitoGiaImpostato && debitoFormInput) {
    // Mostra vista compatta
    debitoGiaImpostato.style.display = 'block';
    debitoFormInput.style.display = 'none';

    var valore = Math.abs(saldoIniziale);
    var htmlContent = '';

    if (saldoIniziale > 0) {
      debitoDisplay.style.background = 'linear-gradient(135deg, rgba(78,236,163,0.15) 0%, rgba(78,236,163,0.05) 100%)';
      debitoDisplay.style.borderColor = '#4ecca3';
      debitoDisplay.style.color = '#4ecca3';
      htmlContent = '📥 <strong>' + partnerName + '</strong> ti deve <strong>' + formatEuro(valore) + '</strong>';
    } else {
      debitoDisplay.style.background = 'linear-gradient(135deg, rgba(231,76,60,0.15) 0%, rgba(231,76,60,0.05) 100%)';
      debitoDisplay.style.borderColor = '#e74c3c';
      debitoDisplay.style.color = '#e74c3c';
      htmlContent = '📤 Devi a <strong>' + partnerName + '</strong> <strong>' + formatEuro(valore) + '</strong>';
    }

    // Aggiungi data e nota se presenti
    var dettagli = [];
    if (DB.splitwise && DB.splitwise.dataRiferimento) {
      var dataRef = new Date(DB.splitwise.dataRiferimento);
      dettagli.push('📅 ' + dataRef.toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' }));
    }
    if (DB.splitwise && DB.splitwise.notaDebito) {
      dettagli.push('📝 ' + DB.splitwise.notaDebito);
    }

    if (dettagli.length > 0) {
      htmlContent += '<div style="font-size:0.75em;margin-top:8px;color:#888;font-weight:400">' + dettagli.join(' • ') + '</div>';
    }

    debitoDisplay.innerHTML = htmlContent;
  } else if (debitoGiaImpostato && debitoFormInput) {
    // Mostra form
    debitoGiaImpostato.style.display = 'none';
    debitoFormInput.style.display = 'block';
  }

  // Aggiorna anche lo storico
  aggiornaStoricoDebito();
}

function modificaDebitoIniziale() {
  var debitoGiaImpostato = document.getElementById('debitoGiaImpostato');
  var debitoFormInput = document.getElementById('debitoFormInput');

  if (debitoGiaImpostato && debitoFormInput) {
    debitoGiaImpostato.style.display = 'none';
    debitoFormInput.style.display = 'block';

    // Precompila con valore attuale
    var saldoIniziale = (DB.splitwise && DB.splitwise.saldoIniziale) ? DB.splitwise.saldoIniziale : 0;
    var input = document.getElementById('saldoSplitwiseIniziale');
    if (input) input.value = Math.abs(saldoIniziale);

    // Seleziona il bottone giusto
    if (saldoIniziale > 0) {
      impostaSaldoSplitwise('positivo');
    } else if (saldoIniziale < 0) {
      impostaSaldoSplitwise('negativo');
    }

    // Precompila data e nota se esistono
    var dataInput = document.getElementById('dataDebitoIniziale');
    var notaInput = document.getElementById('notaDebitoIniziale');
    if (dataInput && DB.splitwise && DB.splitwise.dataRiferimento) {
      dataInput.value = DB.splitwise.dataRiferimento;
    }
    if (notaInput && DB.splitwise && DB.splitwise.notaDebito) {
      notaInput.value = DB.splitwise.notaDebito;
    }

    // Mostra dettagli se ci sono dati
    if ((DB.splitwise && DB.splitwise.dataRiferimento) || (DB.splitwise && DB.splitwise.notaDebito)) {
      var content = document.getElementById('dettagliDebitoContent');
      var icon = document.getElementById('iconDettagliDebito');
      if (content) content.style.display = 'block';
      if (icon) icon.textContent = '▲';
    }

    aggiornaPreviewSaldoSplitwise();
  }
  playSound('click');
}

// Aggiorna visualizzazione storico modifiche debito
function aggiornaStoricoDebito() {
  var container = document.getElementById('storicoDebitoContainer');
  var list = document.getElementById('storicoDebitoList');
  if (!container || !list) return;

  if (!DB.splitwise || !DB.splitwise.storicoDebito || DB.splitwise.storicoDebito.length === 0) {
    container.style.display = 'none';
    return;
  }

  container.style.display = 'block';
  var partnerName = DB.config && DB.config.partnerName ? DB.config.partnerName : 'Partner';

  var html = '';
  // Mostra le modifiche in ordine cronologico inverso (più recenti prima)
  var storico = DB.splitwise.storicoDebito.slice().reverse();

  storico.forEach(function(mod, index) {
    var dataModifica = new Date(mod.data);
    var dataStr = dataModifica.toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: 'numeric' });
    var oraStr = dataModifica.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });

    var vecchioStr = mod.vecchioValore === 0 ? 'Nessun debito' :
                     mod.vecchioValore > 0 ? partnerName + ' ti doveva €' + Math.abs(mod.vecchioValore).toFixed(2) :
                     'Dovevi €' + Math.abs(mod.vecchioValore).toFixed(2) + ' a ' + partnerName;

    var nuovoStr = mod.nuovoValore === 0 ? 'Nessun debito' :
                   mod.nuovoValore > 0 ? partnerName + ' ti deve €' + Math.abs(mod.nuovoValore).toFixed(2) :
                   'Devi €' + Math.abs(mod.nuovoValore).toFixed(2) + ' a ' + partnerName;

    html += '<div style="padding:10px;background:' + (index === 0 ? 'rgba(155,89,182,0.1)' : 'rgba(255,255,255,0.03)') + ';border-radius:8px;margin-bottom:8px;border-left:3px solid ' + (index === 0 ? '#9b59b6' : 'rgba(155,89,182,0.3)') + '">';
    html += '<div style="color:#888;font-size:0.85em;margin-bottom:4px">' + dataStr + ' ' + oraStr + '</div>';
    html += '<div style="display:flex;align-items:center;gap:6px">';
    html += '<span style="color:#888;text-decoration:line-through">' + vecchioStr + '</span>';
    html += '<span style="color:#9b59b6">→</span>';
    html += '<span style="color:var(--text);font-weight:600">' + nuovoStr + '</span>';
    html += '</div>';
    if (mod.nota) {
      html += '<div style="color:#9b59b6;font-size:0.85em;margin-top:4px;font-style:italic">📝 ' + mod.nota + '</div>';
    }
    html += '</div>';
  });

  list.innerHTML = html;
}

function resetDebitoIniziale() {
  if (!confirm('Sei sicuro di voler azzerare il debito iniziale?')) return;

  if (!DB.splitwise) DB.splitwise = { saldo: 0 };
  DB.splitwise.saldoIniziale = 0;

  // Reset input
  var input = document.getElementById('saldoSplitwiseIniziale');
  if (input) input.value = 0;

  // Deseleziona bottoni
  var btnMiDeve = document.getElementById('btnMiDeve');
  var btnDevoIo = document.getElementById('btnDevoIo');
  if (btnMiDeve) btnMiDeve.classList.remove('selected');
  if (btnDevoIo) btnDevoIo.classList.remove('selected');

  salvaDB();
  aggiornaVistaDebitoIniziale();
  aggiornaPreviewSaldoSplitwise();
  if (typeof mostraCondiviso === 'function') mostraCondiviso();

  mostraToast('✅ Debito iniziale azzerato', 'success');
  playSound('success');
}

function mostraDataTracking() {
  var displayElement = document.getElementById('trackingDateDisplay');
  var daysElement = document.getElementById('trackingDays');
  var inputElement = document.getElementById('trackingDateInput');
  
  if (DB.dataInizioTracking) {
    var dataInizio = new Date(DB.dataInizioTracking);
    var oggi = new Date();
    var diffTime = Math.abs(oggi - dataInizio);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    var dataFormattata = dataInizio.toLocaleDateString('it-IT', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
    
    displayElement.textContent = dataFormattata;
    
    if (diffDays === 0) {
      daysElement.textContent = 'Iniziato oggi! 🎉';
    } else if (diffDays === 1) {
      daysElement.textContent = '1 giorno di tracking';
    } else if (diffDays < 30) {
      daysElement.textContent = diffDays + ' giorni di tracking';
    } else if (diffDays < 365) {
      var mesi = Math.floor(diffDays / 30);
      var giorniRestanti = diffDays % 30;
      daysElement.textContent = mesi + ' ' + (mesi === 1 ? 'mese' : 'mesi') + 
        (giorniRestanti > 0 ? ' e ' + giorniRestanti + ' giorni' : '') + ' di tracking';
    } else {
      var anni = Math.floor(diffDays / 365);
      var giorniRestanti = diffDays % 365;
      daysElement.textContent = anni + ' ' + (anni === 1 ? 'anno' : 'anni') + 
        (giorniRestanti > 0 ? ' e ' + giorniRestanti + ' giorni' : '') + ' di tracking 🏆';
    }
    
    inputElement.value = DB.dataInizioTracking;
  } else {
    displayElement.textContent = 'Non impostata';
    daysElement.textContent = 'Imposta una data per iniziare';
    inputElement.value = '';
  }
}

// ========== TRACKING DATE DASHBOARD WIDGET ==========
function aggiornaTrackingDateWidget() {
  var widget = document.getElementById('trackingDateWidget');
  var displayEl = document.getElementById('trackingDateDisplay');
  var daysEl = document.getElementById('trackingDaysDisplay');

  if (!widget) return;

  if (DB.dataInizioTracking) {
    widget.style.display = 'block';

    var dataInizio = new Date(DB.dataInizioTracking);
    var oggi = new Date();
    var diffTime = Math.abs(oggi - dataInizio);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    var dataFormattata = dataInizio.toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    displayEl.textContent = dataFormattata;

    if (diffDays === 0) {
      daysEl.textContent = 'Iniziato oggi! 🎉';
    } else if (diffDays === 1) {
      daysEl.textContent = '1 giorno di tracking';
    } else if (diffDays < 30) {
      daysEl.textContent = diffDays + ' giorni di tracking';
    } else if (diffDays < 365) {
      var mesi = Math.floor(diffDays / 30);
      var giorniRestanti = diffDays % 30;
      daysEl.textContent = mesi + ' ' + (mesi === 1 ? 'mese' : 'mesi') +
        (giorniRestanti > 0 ? ' e ' + giorniRestanti + ' giorni' : '') + ' di tracking';
    } else {
      var anni = Math.floor(diffDays / 365);
      var giorniRestanti = diffDays % 365;
      daysEl.textContent = anni + ' ' + (anni === 1 ? 'anno' : 'anni') +
        (giorniRestanti > 0 ? ' e ' + giorniRestanti + ' giorni' : '') + ' di tracking 🏆';
    }
  } else {
    // Se non c'è data, mostra comunque il widget ma con prompt per impostarla
    widget.style.display = 'block';
    displayEl.textContent = 'Tocca per impostare';
    daysEl.textContent = 'Da quando tieni traccia delle spese?';
  }
}

function apriModificaDataTracking() {
  var modal = document.getElementById('modal');
  modal.classList.add('active');

  var dataCorrente = DB.dataInizioTracking || '';

  var html = '';
  html += '<div class="modal-header" style="background:linear-gradient(135deg, #ffd700 0%, #ffa500 100%);padding:25px;border-radius:16px 16px 0 0">';
  html += '<h3 style="display:flex;align-items:center;gap:12px;margin:0;color:#000;font-size:1.3em">';
  html += '<span style="font-size:1.4em">📊</span> Data Inizio Tracking';
  html += '</h3>';
  html += '<button class="close-btn" onclick="chiudiModal()" style="background:rgba(0,0,0,0.1);color:#000;border:none;width:36px;height:36px;border-radius:50%;font-size:1.5em;cursor:pointer">×</button>';
  html += '</div>';

  html += '<div style="padding:25px">';

  html += '<div style="background:linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,165,0,0.05) 100%);padding:18px;border-radius:12px;margin-bottom:20px;border:2px solid rgba(255,215,0,0.3)">';
  html += '<div style="display:flex;align-items:center;gap:12px">';
  html += '<span style="font-size:2em">💡</span>';
  html += '<div style="font-size:0.9em;color:var(--text);line-height:1.5">';
  html += 'Imposta la data da quando hai iniziato a tracciare le tue spese. Questo ti aiuterà a vedere i tuoi progressi nel tempo!';
  html += '</div>';
  html += '</div>';
  html += '</div>';

  html += '<div style="margin-bottom:25px">';
  html += '<label style="display:block;font-weight:700;margin-bottom:10px;color:var(--text);font-size:1em">📅 Data Inizio Tracking</label>';
  html += '<input type="date" id="trackingDateModalInput" value="' + dataCorrente + '" style="width:100%;padding:16px;border:2px solid rgba(255,215,0,0.5);border-radius:12px;font-size:1.1em;background:var(--bg);color:var(--text);font-weight:600" onfocus="this.style.borderColor=\'#ffd700\';this.style.boxShadow=\'0 0 15px rgba(255,215,0,0.3)\'" onblur="this.style.borderColor=\'rgba(255,215,0,0.5)\';this.style.boxShadow=\'none\'">';
  html += '</div>';

  html += '<div style="display:flex;gap:12px">';
  html += '<button class="btn" onclick="salvaDataTrackingModal()" style="flex:2;background:linear-gradient(135deg, #ffd700, #ffa500);color:#000;padding:16px;font-weight:800;font-size:1.05em;border:none;box-shadow:0 4px 15px rgba(255,215,0,0.4)">💾 Salva</button>';
  if (dataCorrente) {
    html += '<button class="btn btn-danger" onclick="rimuoviDataTrackingModal()" style="flex:1;padding:16px">🗑️</button>';
  }
  html += '</div>';

  html += '</div>';

  var content = modal.querySelector('.modal-content');
  content.innerHTML = html;
  playSound('click');
}

function salvaDataTrackingModal() {
  var input = document.getElementById('trackingDateModalInput');
  var data = input.value;

  if (!data) {
    mostraToast('⚠️ Seleziona una data!', 'warning');
    return;
  }

  DB.dataInizioTracking = data;
  salvaDB();

  chiudiModal();
  aggiornaTrackingDateWidget();
  mostraDataTracking(); // Aggiorna anche settings se presente
  mostraToast('✅ Data inizio tracking salvata!', 'success');
  playSound('success');
}

function rimuoviDataTrackingModal() {
  mostraConferma({
    icon: '🗑️',
    title: 'Rimuovi Data',
    message: 'Vuoi rimuovere la data di inizio tracking?',
    confirmText: 'Rimuovi',
    cancelText: 'Annulla',
    callback: function(confirmed) {
      if (!confirmed) return;

      DB.dataInizioTracking = null;
      salvaDB();
      chiudiModal();
      aggiornaTrackingDateWidget();
      mostraDataTracking();
      mostraToast('✅ Data rimossa', 'success');
    }
  });
}

// ========== UTILITY ==========
function formatEuro(val) {
  return '€' + val.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// ========== WIDGET RIASSUNTIVO ==========
function aggiornaWidget() {
  var saldo = 0;
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese) {
      var imp = parseFloat(t.importo) || 0;
      if (t.tipo === 'income') saldo += imp;
      else if (t.tipo === 'expense') saldo -= imp;
    }
  });

  // Widget + sempre visibile per nuova transazione
  var widget = document.getElementById('widgetFloat');
  if (widget) widget.style.display = 'block';

  // Aggiorna widget ricorrenti
  aggiornaWidgetRicorrenti();
}

// ========== TABELLE RIEPILOGO MENSILI ==========
function popolaTabelleMensili() {
  console.log('[TABELLE] === INIZIO POPOLAMENTO ===');
  console.log('[TABELLE] annoTabelle:', annoTabelle);
  
  // Verifica che gli elementi esistano
  var tableYear = document.getElementById('tableYear');
  var incomeBody = document.getElementById('incomeTableBody');
  var expenseBody = document.getElementById('expenseTableBody');
  var savingsBody = document.getElementById('savingsTableBody');
  
  console.log('[TABELLE] Elementi DOM:', {
    tableYear: !!tableYear,
    incomeBody: !!incomeBody,
    expenseBody: !!expenseBody,
    savingsBody: !!savingsBody
  });
  
  if (!tableYear || !incomeBody || !expenseBody || !savingsBody) {
    console.error('[TABELLE] ERRORE: Elementi DOM mancanti!');
    return;
  }
  
  if (!DB || !DB.transazioni) {
    console.error('[TABELLE] ERRORE: DB non disponibile!');
    return;
  }
  
  console.log('[TABELLE] DB OK, transazioni:', DB.transazioni.length);
  
  var mesiNomi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                  'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  var mesiIcone = ['❄️', '🌨️', '🌸', '🌷', '🌺', '☀️', '🏖️', '🌞', '🍂', '🎃', '🍁', '🎄'];
  
  // Aggiorna display anno
  document.getElementById('tableYear').textContent = annoTabelle;
  document.getElementById('tableYear2').textContent = annoTabelle;
  document.getElementById('tableYear3').textContent = annoTabelle;
  
  // Calcola dati per ogni mese
  var datiMensili = [];
  var totaleEntrate = 0;
  var totaleUscite = 0;
  var totaleRisparmi = 0;
  
  for (var m = 0; m < 12; m++) {
    var entrate = 0;
    // Usa calcolaSpeseMese per il costo reale (include spese condivise divise e recuperi virtuali)
    var uscite = calcolaSpeseMese(annoTabelle, m);

    DB.transazioni.forEach(function(t) {
      var d = new Date(t.data);
      if (d.getFullYear() === annoTabelle && d.getMonth() === m) {
        var imp = parseFloat(t.importo) || 0;
        if (t.tipo === 'income') {
          entrate += imp;
        }
      }
    });
    
    var saldo = entrate - uscite;
    
    datiMensili.push({
      mese: m,
      nome: mesiNomi[m],
      icona: mesiIcone[m],
      entrate: entrate,
      uscite: uscite,
      saldo: saldo
    });
    
    totaleEntrate += entrate;
    totaleUscite += uscite;
    totaleRisparmi += saldo;
  }
  
  // Popola tabella entrate
  var incomeBody = document.getElementById('incomeTableBody');
  incomeBody.innerHTML = '';
  datiMensili.forEach(function(dato) {
    var tr = document.createElement('tr');
    var meseCorrente = (annoTabelle === new Date().getFullYear() && dato.mese === new Date().getMonth());
    if (meseCorrente) tr.classList.add('current-month');
    
    tr.innerHTML = '<td><span class="month-name"><span class="month-icon">' + dato.icona + '</span>' + dato.nome + '</span></td>' +
                   '<td class="amount-positive">' + formatEuro(dato.entrate) + '</td>';
    incomeBody.appendChild(tr);
  });
  document.getElementById('incomeTotalYear').textContent = formatEuro(totaleEntrate);
  
  // Popola tabella uscite
  var expenseBody = document.getElementById('expenseTableBody');
  expenseBody.innerHTML = '';
  datiMensili.forEach(function(dato) {
    var tr = document.createElement('tr');
    var meseCorrente = (annoTabelle === new Date().getFullYear() && dato.mese === new Date().getMonth());
    if (meseCorrente) tr.classList.add('current-month');
    
    tr.innerHTML = '<td><span class="month-name"><span class="month-icon">' + dato.icona + '</span>' + dato.nome + '</span></td>' +
                   '<td class="amount-negative">' + formatEuro(dato.uscite) + '</td>';
    expenseBody.appendChild(tr);
  });
  document.getElementById('expenseTotalYear').textContent = formatEuro(totaleUscite);
  
  // Popola tabella risparmi
  var savingsBody = document.getElementById('savingsTableBody');
  savingsBody.innerHTML = '';
  datiMensili.forEach(function(dato) {
    var tr = document.createElement('tr');
    var meseCorrente = (annoTabelle === new Date().getFullYear() && dato.mese === new Date().getMonth());
    if (meseCorrente) tr.classList.add('current-month');
    
    var colorClass = dato.saldo > 0 ? 'amount-positive' : (dato.saldo < 0 ? 'amount-negative' : 'amount-neutral');
    tr.innerHTML = '<td><span class="month-name"><span class="month-icon">' + dato.icona + '</span>' + dato.nome + '</span></td>' +
                   '<td class="' + colorClass + '">' + (dato.saldo >= 0 ? '+' : '') + formatEuro(dato.saldo) + '</td>';
    savingsBody.appendChild(tr);
  });
  
  var saldoColorClass = totaleRisparmi > 0 ? 'savings' : (totaleRisparmi < 0 ? 'expense' : 'income');
  var savingsTotalEl = document.getElementById('savingsTotalYear');
  savingsTotalEl.textContent = (totaleRisparmi >= 0 ? '+' : '') + formatEuro(totaleRisparmi);
  savingsTotalEl.className = 'table-footer-value ' + saldoColorClass;
  
  console.log('[TABELLE] Totali:', {
    entrate: formatEuro(totaleEntrate),
    uscite: formatEuro(totaleUscite),
    risparmi: formatEuro(totaleRisparmi)
  });
  console.log('[TABELLE] === POPOLAMENTO COMPLETATO ===');
}

function cambiaAnnoTabelle(delta) {
  annoTabelle += delta;
  console.log('Anno cambiato a:', annoTabelle);
  
  if (typeof popolaTabelleMensili === 'function') {
    popolaTabelleMensili();
  }
  
  if (typeof mostraAnalisi === 'function') {
    mostraAnalisi();
  }
  
  if (typeof playSound === 'function') {
    playSound('click');
  }
}

function toggleTabelle() {
  var content = document.getElementById('tabelleContent');
  var icon = document.getElementById('tabelleIcon');
  
  if (!content || !icon) {
    return;
  }
  
  if (content.style.display === 'none' || content.style.display === '') {
    content.style.display = 'block';
    icon.textContent = '▼';
    icon.style.transform = 'rotate(0deg)';
    
    // Popola le tabelle quando vengono aperte
    if (typeof popolaTabelleMensili === 'function') {
      popolaTabelleMensili();
    }
  } else {
    content.style.display = 'none';
    icon.textContent = '▶';
    icon.style.transform = 'rotate(0deg)';
  }
  
  if (typeof playSound === 'function') {
    playSound('click');
  }
}

// ========== CALENDAR HEATMAP COMPATTO OTTIMIZZATO ==========
function generaCalendarHeatmap(mese, anno) {
  var container = document.getElementById('calendarHeatmap');
  if (!container) return;
  
  var numGiorni = new Date(anno, mese + 1, 0).getDate();
  
  // Calcola spese per ogni giorno
  var speseGiornaliere = {};
  var totaleSpese = 0;
  var giorniConSpese = 0;
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese && t.tipo === 'expense' && !t.virtualRecovery) {
      var giorno = d.getDate();
      var imp = parseFloat(t.importo);
      speseGiornaliere[giorno] = (speseGiornaliere[giorno] || 0) + imp;
      totaleSpese += imp;
    }
  });
  
  // Trova max per scala colori
  var valori = Object.values(speseGiornaliere);
  var maxSpesa = valori.length > 0 ? Math.max.apply(Math, valori) : 0;
  giorniConSpese = valori.filter(function(v) { return v > 0; }).length;
  var mediaGiornaliera = totaleSpese / numGiorni;
  var giorniSenzaSpese = numGiorni - giorniConSpese;
  
  // Funzione per determinare il livello di intensità (1-5)
  function getLevel(amount, max) {
    if (!amount || amount === 0) return 0;
    if (max === 0) return 1;
    
    var intensity = amount / max;
    if (intensity <= 0.2) return 1; // Verde - Minimo
    if (intensity <= 0.4) return 2; // Giallo - Basso
    if (intensity <= 0.6) return 3; // Arancione - Medio
    if (intensity <= 0.8) return 4; // Rosso chiaro - Alto
    return 5; // Rosso scuro - Massimo
  }
  
  var html = '<div class="heatmap-compact">';
  
  var oggi = new Date();
  for (var giorno = 1; giorno <= numGiorni; giorno++) {
    var spesa = speseGiornaliere[giorno] || 0;
    var hasExpense = spesa > 0;
    var level = getLevel(spesa, maxSpesa);
    
    var isToday = oggi.getDate() === giorno && 
                  oggi.getMonth() === mese && 
                  oggi.getFullYear() === anno;
    
    // Classi CSS
    var classes = 'heatmap-compact-day';
    if (isToday) classes += ' today';
    if (!hasExpense) {
      classes += ' no-expense';
    } else {
      classes += ' has-expense level-' + level;
    }
    
    // Tooltip con data-amount
    var tooltipText = hasExpense ? '€' + spesa.toFixed(2) : 'Nessuna spesa';
    
    html += '<div class="' + classes + '" ' +
            'data-amount="' + tooltipText + '" ' +
            'onclick="mostraTransazioniGiorno(' + anno + ',' + mese + ',' + giorno + ')" ' +
            'title="Giorno ' + giorno + ': ' + tooltipText + (hasExpense ? ' - Click per dettagli' : '') + '">' +
            giorno +
            '</div>';
  }
  
  html += '</div>';
  
  // Legenda MIGLIORATA con descrizioni chiare
  html += '<div class="heatmap-compact-legend">';
  
  html += '<div class="heatmap-legend-item">';
  html += '<div class="heatmap-compact-legend-box" style="background:var(--bg);border:2px dashed #ddd"></div>';
  html += '<span style="font-weight:600">Nessuna spesa</span>';
  html += '</div>';
  
  html += '<div class="heatmap-legend-item">';
  html += '<div class="heatmap-compact-legend-box" style="background:linear-gradient(135deg,#52c41a,#73d13d)"></div>';
  html += '<span>Minimo</span>';
  html += '</div>';
  
  html += '<div class="heatmap-legend-item">';
  html += '<div class="heatmap-compact-legend-box" style="background:linear-gradient(135deg,#fadb14,#ffc53d)"></div>';
  html += '<span>Basso</span>';
  html += '</div>';
  
  html += '<div class="heatmap-legend-item">';
  html += '<div class="heatmap-compact-legend-box" style="background:linear-gradient(135deg,#fa8c16,#ff9c6e)"></div>';
  html += '<span>Medio</span>';
  html += '</div>';
  
  html += '<div class="heatmap-legend-item">';
  html += '<div class="heatmap-compact-legend-box" style="background:linear-gradient(135deg,#f5222d,#ff4d4f)"></div>';
  html += '<span>Alto</span>';
  html += '</div>';
  
  html += '<div class="heatmap-legend-item">';
  html += '<div class="heatmap-compact-legend-box" style="background:linear-gradient(135deg,#a8071a,#cf1322)"></div>';
  html += '<span>Massimo</span>';
  html += '</div>';
  
  html += '</div>';
  
  // Mini statistiche (4 in una riga)
  html += '<div class="heatmap-stats">';
  
  html += '<div class="heatmap-stat">';
  html += '<div class="heatmap-stat-label">💰 Totale</div>';
  html += '<div class="heatmap-stat-value">€' + totaleSpese.toFixed(0) + '</div>';
  html += '</div>';
  
  html += '<div class="heatmap-stat">';
  html += '<div class="heatmap-stat-label">📊 Media/Giorno</div>';
  html += '<div class="heatmap-stat-value">€' + mediaGiornaliera.toFixed(0) + '</div>';
  html += '</div>';
  
  html += '<div class="heatmap-stat">';
  html += '<div class="heatmap-stat-label">🔥 Max Giorno</div>';
  html += '<div class="heatmap-stat-value">€' + (maxSpesa || 0).toFixed(0) + '</div>';
  html += '</div>';
  
  html += '<div class="heatmap-stat">';
  html += '<div class="heatmap-stat-label">✅ Giorni OK</div>';
  html += '<div class="heatmap-stat-value" style="color:#52c41a">' + giorniSenzaSpese + '</div>';
  html += '</div>';
  
  html += '</div>';
  
  container.innerHTML = html;
}

// ========== DRILL-DOWN TRANSAZIONI GIORNO ==========
function mostraTransazioniGiorno(anno, mese, giorno) {
  playSound('click');
  
  // Crea data string nel formato YYYY-MM-DD
  var meseStr = String(mese + 1).padStart(2, '0');  // mese è 0-indexed
  var giornoStr = String(giorno).padStart(2, '0');
  var dataStr = anno + '-' + meseStr + '-' + giornoStr;
  
  var trans = DB.transazioni.filter(function(t) {
    return t.data.startsWith(dataStr) && t.tipo === 'expense' && !t.virtualRecovery;
  });
  
  if (trans.length === 0) {
    mostraToast('📭 Nessuna spesa in questo giorno', 'info');
    return;
  }
  
  var modal = document.getElementById('modal');
  modal.classList.add('active');
  
  var nomiMesi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno',
                  'Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  
  var html = '<div class="modal-header">';
  html += '<h3>📅 ' + giorno + ' ' + nomiMesi[mese] + ' ' + anno + '</h3>';
  html += '<button class="close-btn" onclick="chiudiModal()">×</button>';
  html += '</div>';
  html += '<div style="padding:20px;max-height:500px;overflow-y:auto">';
  
  var totale = 0;
  trans.forEach(function(t) {
    totale += parseFloat(t.importo);
    var nota = t.note || '';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;padding:14px;background:var(--bg);border-radius:10px;margin-bottom:10px;border-left:4px solid var(--expense);transition:all 0.2s" onmouseover="this.style.transform=\'translateX(4px)\'" onmouseout="this.style.transform=\'\'">';
    html += '<div style="flex:1">';
    html += '<div style="font-weight:700;font-size:1.1em;margin-bottom:4px">' + t.categoria + '</div>';
    if (nota) {
      html += '<div style="font-size:0.85em;opacity:0.7">💬 ' + nota + '</div>';
    }
    html += '</div>';
    html += '<div style="font-size:1.4em;font-weight:800;color:var(--expense)">€' + t.importo.toFixed(2) + '</div>';
    html += '</div>';
  });
  
  html += '<div style="margin-top:20px;padding:20px;background:linear-gradient(135deg,var(--expense),#d35400);color:#fff;border-radius:12px;text-align:center;box-shadow:0 4px 12px rgba(230,126,34,0.3)">';
  html += '<div style="font-size:0.95em;opacity:0.95;margin-bottom:8px">💰 Totale Giorno</div>';
  html += '<div style="font-size:2.5em;font-weight:800">€' + totale.toFixed(2) + '</div>';
  html += '<div style="font-size:0.9em;opacity:0.9;margin-top:8px">' + trans.length + ' transazion' + (trans.length === 1 ? 'e' : 'i') + '</div>';
  html += '</div>';
  html += '</div>';
  
  modal.querySelector('.modal-content').innerHTML = html;
}

// ========== GRAFICO CONFRONTO 6 MESI ==========
function generaGraficoConfronto6Mesi() {
  var ctx = document.getElementById('compareChart');
  if (!ctx) return;
  
  var oggi = new Date();
  var mesi = [];
  var entrate = [];
  var uscite = [];
  var saldi = [];
  
  // Calcola ultimi 6 mesi
  for (var i = 5; i >= 0; i--) {
    var data = new Date(oggi.getFullYear(), oggi.getMonth() - i, 1);
    var mese = data.getMonth();
    var anno = data.getFullYear();
    
    var nomiMesi = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];
    mesi.push(nomiMesi[mese]);
    
    var entratasMese = 0;
    var usciteMese = 0;
    
    DB.transazioni.forEach(function(t) {
      var d = new Date(t.data);
      if (d.getFullYear() === anno && d.getMonth() === mese) {
        var importo = parseFloat(t.importo) || 0;
        if (t.tipo === 'income') {
          entratasMese += importo;
        } else if (t.tipo === 'expense' && !t.virtualRecovery) {
          usciteMese += importo;
        }
      }
    });
    
    entrate.push(entratasMese);
    uscite.push(usciteMese);
    saldi.push(entratasMese - usciteMese);
  }
  
  var isDark = document.body.classList.contains('dark');
  
  if (compareChart) compareChart.destroy();
  compareChart = new Chart(ctx.getContext('2d'), {
    type: 'bar',
    data: {
      labels: mesi,
      datasets: [
        {
          label: 'Entrate',
          data: entrate,
          backgroundColor: 'rgba(39, 174, 96, 0.8)',
          borderColor: '#27ae60',
          borderWidth: 2,
          borderRadius: 6,
          barPercentage: 0.7
        },
        {
          label: 'Uscite',
          data: uscite,
          backgroundColor: 'rgba(231, 76, 60, 0.8)',
          borderColor: '#e74c3c',
          borderWidth: 2,
          borderRadius: 6,
          barPercentage: 0.7
        },
        {
          label: 'Saldo',
          data: saldi,
          type: 'line',
          borderColor: '#a1a1aa',
          backgroundColor: 'rgba(102, 126, 234, 0.1)',
          borderWidth: 3,
          pointRadius: 6,
          pointHoverRadius: 8,
          pointBackgroundColor: '#a1a1aa',
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          tension: 0.4,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 10,
          top: 5,
          bottom: 0
        }
      },
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: isDark ? '#eee' : '#2c3e50',
            font: { size: 11, weight: '700' },
            padding: 10,
            usePointStyle: true,
            boxWidth: 12,
            boxHeight: 12
          }
        },
        tooltip: {
          backgroundColor: isDark ? 'rgba(44,62,80,0.95)' : 'rgba(255,255,255,0.95)',
          titleColor: isDark ? '#fff' : '#2c3e50',
          bodyColor: isDark ? '#fff' : '#2c3e50',
          borderColor: isDark ? '#34495e' : '#e0e0e0',
          borderWidth: 1,
          padding: 12,
          titleFont: { size: 13, weight: '700' },
          bodyFont: { size: 12, weight: '600' },
          displayColors: true,
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': €' + context.parsed.y.toFixed(0);
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) { 
              if (value >= 1000) return '€' + (value/1000).toFixed(1) + 'k';
              return '€' + value; 
            },
            color: isDark ? '#999' : '#666',
            font: { size: 9, weight: '600' },
            padding: 8,
            maxTicksLimit: 6,
            autoSkip: true
          },
          grid: {
            color: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)',
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: isDark ? '#eee' : '#2c3e50',
            font: { size: 11, weight: '700' },
            padding: 8
          },
          grid: {
            display: false
          }
        }
      }
    }
  });
}

// ========== COMPARAZIONI PERIODI ==========
function confrontaMesi() {
  var oggi = new Date();
  var meseCorrente = oggi.getMonth();
  var annoCorrente = oggi.getFullYear();
  
  var meseScorso = meseCorrente === 0 ? 11 : meseCorrente - 1;
  var annoScorso = meseCorrente === 0 ? annoCorrente - 1 : annoCorrente;
  
  var speseCorrente = calcolaSpeseMese(annoCorrente, meseCorrente);
  var entrateCorrente = calcolaEntrateMese(annoCorrente, meseCorrente);
  var saldoCorrente = entrateCorrente - speseCorrente;
  
  var speseScorso = calcolaSpeseMese(annoScorso, meseScorso);
  var entrateScorso = calcolaEntrateMese(annoScorso, meseScorso);
  var saldoScorso = entrateScorso - speseScorso;
  
  var diffSpese = speseCorrente - speseScorso;
  var percDiffSpese = speseScorso > 0 ? ((diffSpese / speseScorso) * 100).toFixed(1) : 0;
  
  var diffEntrate = entrateCorrente - entrateScorso;
  var percDiffEntrate = entrateScorso > 0 ? ((diffEntrate / entrateScorso) * 100).toFixed(1) : 0;
  
  var diffSaldo = saldoCorrente - saldoScorso;
  var percDiffSaldo = Math.abs(saldoScorso) > 0 ? ((diffSaldo / Math.abs(saldoScorso)) * 100).toFixed(1) : 0;
  
  var nomiMesi = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
  
  var html = '<div style="background:var(--card);padding:20px;border-radius:16px;margin-top:15px;box-shadow:0 4px 12px rgba(0,0,0,0.08)">';
  
  // Header confronto
  html += '<div style="text-align:center;margin-bottom:20px">';
  html += '<h4 style="font-size:1.2em;margin-bottom:8px">📅 Confronto Mensile</h4>';
  html += '<div style="font-size:0.9em;opacity:0.7">' + nomiMesi[meseScorso] + ' ' + annoScorso + ' vs ' + nomiMesi[meseCorrente] + ' ' + annoCorrente + '</div>';
  html += '</div>';
  
  // Grid comparazioni
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin-bottom:20px">';
  
  // Uscite
  html += '<div style="text-align:center;padding:15px;background:var(--bg);border-radius:12px">';
  html += '<div style="font-size:0.8em;opacity:0.7;margin-bottom:8px">💸 Uscite</div>';
  html += '<div style="font-size:1.1em;font-weight:600;color:var(--expense);margin-bottom:4px">€' + speseScorso.toFixed(0) + '</div>';
  html += '<div style="font-size:0.75em;opacity:0.6">Scorso</div>';
  html += '</div>';
  
  html += '<div style="text-align:center;padding:15px;background:var(--bg);border-radius:12px">';
  html += '<div style="font-size:0.8em;opacity:0.7;margin-bottom:8px">💰 Entrate</div>';
  html += '<div style="font-size:1.1em;font-weight:600;color:var(--income);margin-bottom:4px">€' + entrateScorso.toFixed(0) + '</div>';
  html += '<div style="font-size:0.75em;opacity:0.6">Scorso</div>';
  html += '</div>';
  
  html += '<div style="text-align:center;padding:15px;background:var(--bg);border-radius:12px">';
  html += '<div style="font-size:0.8em;opacity:0.7;margin-bottom:8px">📊 Saldo</div>';
  html += '<div style="font-size:1.1em;font-weight:600;color:' + (saldoScorso >= 0 ? 'var(--income)' : 'var(--expense)') + ';margin-bottom:4px">€' + saldoScorso.toFixed(0) + '</div>';
  html += '<div style="font-size:0.75em;opacity:0.6">Scorso</div>';
  html += '</div>';
  
  html += '</div>';
  
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:15px;margin-bottom:20px">';
  
  html += '<div style="text-align:center;padding:15px;background:var(--bg);border-radius:12px">';
  html += '<div style="font-size:0.8em;opacity:0.7;margin-bottom:8px">💸 Uscite</div>';
  html += '<div style="font-size:1.4em;font-weight:800;color:var(--expense);margin-bottom:4px">€' + speseCorrente.toFixed(0) + '</div>';
  html += '<div style="font-size:0.75em;opacity:0.6">Corrente</div>';
  html += '</div>';
  
  html += '<div style="text-align:center;padding:15px;background:var(--bg);border-radius:12px">';
  html += '<div style="font-size:0.8em;opacity:0.7;margin-bottom:8px">💰 Entrate</div>';
  html += '<div style="font-size:1.4em;font-weight:800;color:var(--income);margin-bottom:4px">€' + entrateCorrente.toFixed(0) + '</div>';
  html += '<div style="font-size:0.75em;opacity:0.6">Corrente</div>';
  html += '</div>';
  
  html += '<div style="text-align:center;padding:15px;background:var(--bg);border-radius:12px">';
  html += '<div style="font-size:0.8em;opacity:0.7;margin-bottom:8px">📊 Saldo</div>';
  html += '<div style="font-size:1.4em;font-weight:800;color:' + (saldoCorrente >= 0 ? 'var(--income)' : 'var(--expense)') + ';margin-bottom:4px">€' + saldoCorrente.toFixed(0) + '</div>';
  html += '<div style="font-size:0.75em;opacity:0.6">Corrente</div>';
  html += '</div>';
  
  html += '</div>';
  
  // Variazioni
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px">';
  
  html += '<div style="padding:12px;background:' + (diffSpese > 0 ? '#ffe5e5' : '#e5f7e5') + ';border-radius:10px;text-align:center">';
  html += '<div style="font-size:0.75em;opacity:0.8;margin-bottom:4px">Δ Uscite</div>';
  html += '<div style="font-size:1.2em;font-weight:700;color:' + (diffSpese > 0 ? '#e74c3c' : '#27ae60') + '">';
  html += (diffSpese > 0 ? '+' : '') + '€' + diffSpese.toFixed(0);
  html += '</div>';
  html += '<div style="font-size:0.7em;opacity:0.7;margin-top:2px">' + (diffSpese > 0 ? '+' : '') + percDiffSpese + '%</div>';
  html += '</div>';
  
  html += '<div style="padding:12px;background:' + (diffEntrate >= 0 ? '#e5f7e5' : '#ffe5e5') + ';border-radius:10px;text-align:center">';
  html += '<div style="font-size:0.75em;opacity:0.8;margin-bottom:4px">Δ Entrate</div>';
  html += '<div style="font-size:1.2em;font-weight:700;color:' + (diffEntrate >= 0 ? '#27ae60' : '#e74c3c') + '">';
  html += (diffEntrate > 0 ? '+' : '') + '€' + diffEntrate.toFixed(0);
  html += '</div>';
  html += '<div style="font-size:0.7em;opacity:0.7;margin-top:2px">' + (diffEntrate > 0 ? '+' : '') + percDiffEntrate + '%</div>';
  html += '</div>';
  
  html += '<div style="padding:12px;background:' + (diffSaldo >= 0 ? '#e5f7e5' : '#ffe5e5') + ';border-radius:10px;text-align:center">';
  html += '<div style="font-size:0.75em;opacity:0.8;margin-bottom:4px">Δ Saldo</div>';
  html += '<div style="font-size:1.2em;font-weight:700;color:' + (diffSaldo >= 0 ? '#27ae60' : '#e74c3c') + '">';
  html += (diffSaldo > 0 ? '+' : '') + '€' + diffSaldo.toFixed(0);
  html += '</div>';
  html += '<div style="font-size:0.7em;opacity:0.7;margin-top:2px">' + (diffSaldo > 0 ? '+' : '') + percDiffSaldo + '%</div>';
  html += '</div>';
  
  html += '</div>';
  html += '</div>';
  
  document.getElementById('confrontoResult').innerHTML = html;
  
  // Scroll smooth
  document.getElementById('confrontoResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function confrontaAnni() {
  var annoCorrente = new Date().getFullYear();
  var annoScorso = annoCorrente - 1;
  
  var speseCorrente = calcolaSpeseAnno(annoCorrente);
  var entrateCorrente = calcolaEntrateAnno(annoCorrente);
  var saldoCorrente = entrateCorrente - speseCorrente;
  
  var speseScorso = calcolaSpeseAnno(annoScorso);
  var entrateScorso = calcolaEntrateAnno(annoScorso);
  var saldoScorso = entrateScorso - speseScorso;
  
  var diffSpese = speseCorrente - speseScorso;
  var percDiffSpese = speseScorso > 0 ? ((diffSpese / speseScorso) * 100).toFixed(1) : 0;
  
  var diffEntrate = entrateCorrente - entrateScorso;
  var percDiffEntrate = entrateScorso > 0 ? ((diffEntrate / entrateScorso) * 100).toFixed(1) : 0;
  
  var diffSaldo = saldoCorrente - saldoScorso;
  var percDiffSaldo = Math.abs(saldoScorso) > 0 ? ((diffSaldo / Math.abs(saldoScorso)) * 100).toFixed(1) : 0;
  
  var html = '<div style="background:var(--card);padding:20px;border-radius:16px;margin-top:15px;box-shadow:0 4px 12px rgba(0,0,0,0.08)">';
  
  html += '<div style="text-align:center;margin-bottom:20px">';
  html += '<h4 style="font-size:1.2em;margin-bottom:8px">📆 Confronto Annuale</h4>';
  html += '<div style="font-size:0.9em;opacity:0.7">Anno ' + annoScorso + ' vs Anno ' + annoCorrente + '</div>';
  html += '</div>';
  
  html += '<div style="display:grid;grid-template-columns:1fr;gap:12px;margin-bottom:20px">';
  
  // Anno scorso
  html += '<div style="text-align:center;padding:16px;background:linear-gradient(135deg,#ecf0f1,#bdc3c7);border-radius:12px">';
  html += '<div style="font-size:1em;font-weight:700;margin-bottom:12px;opacity:0.8">' + annoScorso + '</div>';
  html += '<div style="margin-bottom:8px">';
  html += '<div style="font-size:0.7em;opacity:0.7">Uscite</div>';
  html += '<div style="font-size:1.2em;font-weight:700;color:#e74c3c">€' + speseScorso.toFixed(0) + '</div>';
  html += '</div>';
  html += '<div style="margin-bottom:8px">';
  html += '<div style="font-size:0.7em;opacity:0.7">Entrate</div>';
  html += '<div style="font-size:1.2em;font-weight:700;color:#27ae60">€' + entrateScorso.toFixed(0) + '</div>';
  html += '</div>';
  html += '<div>';
  html += '<div style="font-size:0.7em;opacity:0.7">Saldo</div>';
  html += '<div style="font-size:1.2em;font-weight:700;color:' + (saldoScorso >= 0 ? '#27ae60' : '#e74c3c') + '">€' + saldoScorso.toFixed(0) + '</div>';
  html += '</div>';
  html += '</div>';
  
  // Anno corrente
  html += '<div style="text-align:center;padding:16px;background:linear-gradient(135deg,#a1a1aa,#71717a);color:#fff;border-radius:12px;box-shadow:0 6px 20px rgba(102,126,234,0.4)">';
  html += '<div style="font-size:1em;font-weight:700;margin-bottom:12px">' + annoCorrente + ' ⭐</div>';
  html += '<div style="margin-bottom:8px">';
  html += '<div style="font-size:0.7em;opacity:0.9">Uscite</div>';
  html += '<div style="font-size:1.3em;font-weight:800">€' + speseCorrente.toFixed(0) + '</div>';
  html += '</div>';
  html += '<div style="margin-bottom:8px">';
  html += '<div style="font-size:0.7em;opacity:0.9">Entrate</div>';
  html += '<div style="font-size:1.3em;font-weight:800">€' + entrateCorrente.toFixed(0) + '</div>';
  html += '</div>';
  html += '<div>';
  html += '<div style="font-size:0.7em;opacity:0.9">Saldo</div>';
  html += '<div style="font-size:1.3em;font-weight:800">€' + saldoCorrente.toFixed(0) + '</div>';
  html += '</div>';
  html += '</div>';
  
  html += '</div>';
  
  // Variazioni annuali - una sopra l'altra
  html += '<div style="display:grid;grid-template-columns:1fr;gap:10px">';
  
  html += '<div style="padding:12px;background:' + (diffSpese > 0 ? '#ffe5e5' : '#e5f7e5') + ';border-radius:12px;text-align:center">';
  html += '<div style="font-size:0.7em;opacity:0.8;margin-bottom:4px">📉 Δ Uscite</div>';
  html += '<div style="font-size:1.3em;font-weight:800;color:' + (diffSpese > 0 ? '#e74c3c' : '#27ae60') + '">';
  html += (diffSpese > 0 ? '+' : '') + '€' + diffSpese.toFixed(0);
  html += '</div>';
  html += '<div style="font-size:0.7em;opacity:0.7;margin-top:3px;font-weight:600">' + (diffSpese > 0 ? '+' : '') + percDiffSpese + '%</div>';
  html += '</div>';
  
  html += '<div style="padding:12px;background:' + (diffEntrate >= 0 ? '#e5f7e5' : '#ffe5e5') + ';border-radius:12px;text-align:center">';
  html += '<div style="font-size:0.7em;opacity:0.8;margin-bottom:4px">📈 Δ Entrate</div>';
  html += '<div style="font-size:1.3em;font-weight:800;color:' + (diffEntrate >= 0 ? '#27ae60' : '#e74c3c') + '">';
  html += (diffEntrate > 0 ? '+' : '') + '€' + diffEntrate.toFixed(0);
  html += '</div>';
  html += '<div style="font-size:0.7em;opacity:0.7;margin-top:3px;font-weight:600">' + (diffEntrate > 0 ? '+' : '') + percDiffEntrate + '%</div>';
  html += '</div>';
  
  html += '<div style="padding:12px;background:' + (diffSaldo >= 0 ? '#e5f7e5' : '#ffe5e5') + ';border-radius:12px;text-align:center">';
  html += '<div style="font-size:0.7em;opacity:0.8;margin-bottom:4px">💰 Δ Saldo</div>';
  html += '<div style="font-size:1.3em;font-weight:800;color:' + (diffSaldo >= 0 ? '#27ae60' : '#e74c3c') + '">';
  html += (diffSaldo > 0 ? '+' : '') + '€' + diffSaldo.toFixed(0);
  html += '</div>';
  html += '<div style="font-size:0.7em;opacity:0.7;margin-top:3px;font-weight:600">' + (diffSaldo > 0 ? '+' : '') + percDiffSaldo + '%</div>';
  html += '</div>';
  
  html += '</div>';
  html += '</div>';
  
  document.getElementById('confrontoResult').innerHTML = html;
  document.getElementById('confrontoResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Helper functions
// COSTO REALE: include spese + tua metà condivise + recuperi virtuali (debiti)
function calcolaSpeseMese(anno, mese) {
  var totale = 0;
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() !== anno || d.getMonth() !== mese) return;

    var imp = parseFloat(t.importo) || 0;
    var chiHaPagato = t.chiHaPagato || 'user';

    if (t.tipo === 'expense') {
      if (t.virtualRecovery) {
        // Recupero virtuale: se TU dai al partner = TUA spesa (hai "consumato" quel valore)
        if (chiHaPagato === 'user') {
          totale += imp;
        }
      } else if (t.condiviso) {
        // Spesa condivisa: conta solo la TUA metà
        totale += imp / 2;
      } else {
        // Spesa non condivisa: conta tutto
        totale += imp;
      }
    } else if (t.tipo === 'partner_payment' && t.condiviso && !t.virtualRecovery) {
      // Partner ha pagato spesa condivisa: la TUA metà è una TUA spesa!
      totale += imp / 2;
    }
  });
  return totale;
}

function calcolaEntrateMese(anno, mese) {
  return DB.transazioni
    .filter(function(t) {
      var d = new Date(t.data);
      return d.getFullYear() === anno && d.getMonth() === mese && t.tipo === 'income';
    })
    .reduce(function(sum, t) { return sum + parseFloat(t.importo); }, 0);
}

// COSTO REALE ANNUALE: include spese + tua metà condivise + recuperi virtuali
function calcolaSpeseAnno(anno) {
  var totale = 0;
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() !== anno) return;

    var imp = parseFloat(t.importo) || 0;
    var chiHaPagato = t.chiHaPagato || 'user';

    if (t.tipo === 'expense') {
      if (t.virtualRecovery) {
        // Recupero virtuale: se TU dai al partner = TUA spesa
        if (chiHaPagato === 'user') {
          totale += imp;
        }
      } else if (t.condiviso) {
        totale += imp / 2; // Solo la TUA metà
      } else {
        totale += imp;
      }
    } else if (t.tipo === 'partner_payment' && t.condiviso && !t.virtualRecovery) {
      totale += imp / 2; // La TUA metà delle spese del partner
    }
  });
  return totale;
}

function calcolaEntrateAnno(anno) {
  return DB.transazioni
    .filter(function(t) {
      return new Date(t.data).getFullYear() === anno && t.tipo === 'income';
    })
    .reduce(function(sum, t) { return sum + parseFloat(t.importo); }, 0);
}

// ========== NUOVE FUNZIONI CONFRONTO PERSONALIZZATO ==========

// Inizializza i selettori di anno per il confronto
function inizializzaSelettoriConfronto() {
  // Verifica che gli elementi esistano
  var confrontoAnno1 = document.getElementById('confrontoAnno1');
  var confrontoAnno2 = document.getElementById('confrontoAnno2');
  var confrontoAnnoA = document.getElementById('confrontoAnnoA');
  var confrontoAnnoB = document.getElementById('confrontoAnnoB');
  
  if (!confrontoAnno1 || !confrontoAnno2 || !confrontoAnnoA || !confrontoAnnoB) {
    console.warn('Selettori confronto non trovati nel DOM');
    return;
  }
  
  var anniDisponibili = [];
  DB.transazioni.forEach(function(t) {
    var anno = new Date(t.data).getFullYear();
    if (anniDisponibili.indexOf(anno) === -1) {
      anniDisponibili.push(anno);
    }
  });
  anniDisponibili.sort(function(a, b) { return b - a; }); // Dal più recente
  
  // Popola selettori mesi
  var selettori = ['confrontoAnno1', 'confrontoAnno2', 'confrontoAnnoA', 'confrontoAnnoB'];
  selettori.forEach(function(id) {
    var select = document.getElementById(id);
    if (select) {
      select.innerHTML = '';
      anniDisponibili.forEach(function(anno) {
        var option = document.createElement('option');
        option.value = anno;
        option.textContent = anno;
        select.appendChild(option);
      });
      // Imposta valori di default
      if (id === 'confrontoAnno1' || id === 'confrontoAnnoA') {
        select.value = anniDisponibili[0]; // Anno corrente
      } else if (anniDisponibili.length > 1) {
        select.value = anniDisponibili[1]; // Anno scorso
      }
    }
  });
  
  // Imposta mesi di default
  var oggi = new Date();
  var meseCorrente = oggi.getMonth();
  var meseScorso = meseCorrente === 0 ? 11 : meseCorrente - 1;
  
  var confrontoMese1 = document.getElementById('confrontoMese1');
  var confrontoMese2 = document.getElementById('confrontoMese2');
  
  if (confrontoMese1) {
    confrontoMese1.value = meseScorso;
  }
  if (confrontoMese2) {
    confrontoMese2.value = meseCorrente;
  }
}

// Mostra/Nascondi tab confronto
function mostraTabConfronto(tipo) {
  var tabMesi = document.getElementById('tabMesi');
  var tabAnni = document.getElementById('tabAnni');
  var uiMesi = document.getElementById('confrontoMesiUI');
  var uiAnni = document.getElementById('confrontoAnniUI');
  var result = document.getElementById('confrontoResult');
  
  // Safety check
  if (!tabMesi || !tabAnni || !uiMesi || !uiAnni || !result) {
    console.error('Elementi confronto non trovati');
    return;
  }
  
  if (tipo === 'mesi') {
    tabMesi.style.opacity = '1';
    tabAnni.style.opacity = '0.6';
    uiMesi.style.display = 'block';
    uiAnni.style.display = 'none';
  } else {
    tabMesi.style.opacity = '0.6';
    tabAnni.style.opacity = '1';
    uiMesi.style.display = 'none';
    uiAnni.style.display = 'block';
  }
  
  result.innerHTML = ''; // Pulisci risultato
  playSound('click');
}

// Confronto mesi personalizzato
function confrontaMesiPersonalizzato() {
  var elem1 = document.getElementById('confrontoMese1');
  var elem2 = document.getElementById('confrontoAnno1');
  var elem3 = document.getElementById('confrontoMese2');
  var elem4 = document.getElementById('confrontoAnno2');
  var result = document.getElementById('confrontoResult');
  
  if (!elem1 || !elem2 || !elem3 || !elem4 || !result) {
    mostraToast('⚠️ Errore: elementi del confronto non trovati', 'error');
    return;
  }
  
  var mese1 = parseInt(elem1.value);
  var anno1 = parseInt(elem2.value);
  var mese2 = parseInt(elem3.value);
  var anno2 = parseInt(elem4.value);
  
  var spese1 = calcolaSpeseMese(anno1, mese1);
  var entrate1 = calcolaEntrateMese(anno1, mese1);
  var saldo1 = entrate1 - spese1;
  
  var spese2 = calcolaSpeseMese(anno2, mese2);
  var entrate2 = calcolaEntrateMese(anno2, mese2);
  var saldo2 = entrate2 - spese2;
  
  var diffSpese = spese2 - spese1;
  var percDiffSpese = spese1 > 0 ? ((diffSpese / spese1) * 100).toFixed(1) : 0;
  
  var diffEntrate = entrate2 - entrate1;
  var percDiffEntrate = entrate1 > 0 ? ((diffEntrate / entrate1) * 100).toFixed(1) : 0;
  
  var diffSaldo = saldo2 - saldo1;
  var percDiffSaldo = Math.abs(saldo1) > 0 ? ((diffSaldo / Math.abs(saldo1)) * 100).toFixed(1) : 0;
  
  var nomiMesi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  
  var html = '<div style="margin-top:20px">';
  
  // Header con titolo e vs
  html += '<div style="text-align:center;margin-bottom:20px">';
  html += '<div style="font-size:1.3em;font-weight:800;color:var(--text);margin-bottom:8px">📊 Confronto Periodi</div>';
  html += '<div style="display:flex;align-items:center;justify-content:center;gap:12px;font-size:1.1em;font-weight:700">';
  html += '<span style="color:#a1a1aa">' + nomiMesi[mese1] + ' ' + anno1 + '</span>';
  html += '<span style="color:var(--text);opacity:0.5">⚡</span>';
  html += '<span style="color:#27ae60">' + nomiMesi[mese2] + ' ' + anno2 + '</span>';
  html += '</div>';
  html += '</div>';
  
  // Card comparativa stile dashboard
  html += '<div style="background:var(--card);border-radius:16px;padding:20px;box-shadow:0 4px 12px rgba(0,0,0,0.08);margin-bottom:15px">';
  
  // Grid 2 colonne
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:20px">';
  
  // Colonna 1 - Primo mese
  html += '<div style="text-align:center">';
  html += '<div style="font-size:0.9em;font-weight:700;color:#a1a1aa;margin-bottom:15px;opacity:0.8">📅 ' + nomiMesi[mese1].substring(0,3) + ' ' + anno1 + '</div>';
  
  // Uscite
  html += '<div style="margin-bottom:12px;padding:12px;background:linear-gradient(135deg,rgba(231,76,60,0.1),rgba(231,76,60,0.05));border-radius:10px;border-left:3px solid #e74c3c">';
  html += '<div style="font-size:0.75em;color:#e74c3c;opacity:0.8;margin-bottom:4px">💸 Uscite</div>';
  html += '<div style="font-size:1.4em;font-weight:800;color:#e74c3c">€' + spese1.toFixed(0) + '</div>';
  html += '</div>';
  
  // Entrate
  html += '<div style="margin-bottom:12px;padding:12px;background:linear-gradient(135deg,rgba(39,174,96,0.1),rgba(39,174,96,0.05));border-radius:10px;border-left:3px solid #27ae60">';
  html += '<div style="font-size:0.75em;color:#27ae60;opacity:0.8;margin-bottom:4px">💰 Entrate</div>';
  html += '<div style="font-size:1.4em;font-weight:800;color:#27ae60">€' + entrate1.toFixed(0) + '</div>';
  html += '</div>';
  
  // Saldo
  html += '<div style="padding:12px;background:linear-gradient(135deg,rgba(102,126,234,0.15),rgba(102,126,234,0.05));border-radius:10px;border-left:3px solid #a1a1aa">';
  html += '<div style="font-size:0.75em;color:#a1a1aa;opacity:0.8;margin-bottom:4px">📊 Saldo</div>';
  html += '<div style="font-size:1.4em;font-weight:800;color:' + (saldo1 >= 0 ? '#27ae60' : '#e74c3c') + '">€' + saldo1.toFixed(0) + '</div>';
  html += '</div>';
  
  html += '</div>';
  
  // Colonna 2 - Secondo mese
  html += '<div style="text-align:center">';
  html += '<div style="font-size:0.9em;font-weight:700;color:#27ae60;margin-bottom:15px;opacity:0.8">📅 ' + nomiMesi[mese2].substring(0,3) + ' ' + anno2 + '</div>';
  
  // Uscite
  html += '<div style="margin-bottom:12px;padding:12px;background:linear-gradient(135deg,rgba(231,76,60,0.1),rgba(231,76,60,0.05));border-radius:10px;border-left:3px solid #e74c3c">';
  html += '<div style="font-size:0.75em;color:#e74c3c;opacity:0.8;margin-bottom:4px">💸 Uscite</div>';
  html += '<div style="font-size:1.4em;font-weight:800;color:#e74c3c">€' + spese2.toFixed(0) + '</div>';
  html += '</div>';
  
  // Entrate
  html += '<div style="margin-bottom:12px;padding:12px;background:linear-gradient(135deg,rgba(39,174,96,0.1),rgba(39,174,96,0.05));border-radius:10px;border-left:3px solid #27ae60">';
  html += '<div style="font-size:0.75em;color:#27ae60;opacity:0.8;margin-bottom:4px">💰 Entrate</div>';
  html += '<div style="font-size:1.4em;font-weight:800;color:#27ae60">€' + entrate2.toFixed(0) + '</div>';
  html += '</div>';
  
  // Saldo
  html += '<div style="padding:12px;background:linear-gradient(135deg,rgba(102,126,234,0.15),rgba(102,126,234,0.05));border-radius:10px;border-left:3px solid #a1a1aa">';
  html += '<div style="font-size:0.75em;color:#a1a1aa;opacity:0.8;margin-bottom:4px">📊 Saldo</div>';
  html += '<div style="font-size:1.4em;font-weight:800;color:' + (saldo2 >= 0 ? '#27ae60' : '#e74c3c') + '">€' + saldo2.toFixed(0) + '</div>';
  html += '</div>';
  
  html += '</div>';
  html += '</div>';
  
  // Divider
  html += '<div style="height:2px;background:linear-gradient(to right,transparent,var(--border),transparent);margin:20px 0"></div>';
  
  // Variazioni - stile card compatte
  html += '<div style="text-align:center;margin-bottom:15px">';
  html += '<div style="font-size:1.1em;font-weight:700;color:var(--text);margin-bottom:12px">📈 Variazioni</div>';
  html += '</div>';
  
  html += '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">';
  
  // Variazione Uscite - INTELLIGENTE: Meno spese = MEGLIO (verde), Più spese = PEGGIO (rosso)
  var speseIcon = diffSpese < 0 ? '↘️' : '↗️';
  var speseBetter = diffSpese < 0; // Meno spese è meglio
  var speseColor = speseBetter ? '#27ae60' : '#e74c3c';
  var speseBg = speseBetter ? 'rgba(39,174,96,0.1)' : 'rgba(231,76,60,0.1)';
  var speseBadge = speseBetter ? '✅ Meglio' : '⚠️ Peggio';
  var speseBadgeColor = speseBetter ? '#27ae60' : '#e74c3c';
  
  html += '<div style="padding:14px;background:' + speseBg + ';border-radius:12px;text-align:center;border:2px solid ' + speseColor + '">';
  html += '<div style="font-size:0.75em;font-weight:700;color:' + speseColor + ';margin-bottom:6px">💸 Uscite</div>';
  html += '<div style="font-size:1.5em;font-weight:800;color:' + speseColor + ';margin-bottom:4px">';
  html += speseIcon + ' ' + (diffSpese > 0 ? '+' : '') + '€' + Math.abs(diffSpese).toFixed(0);
  html += '</div>';
  html += '<div style="font-size:0.7em;opacity:0.8;margin-bottom:6px">' + (diffSpese > 0 ? '+' : '') + percDiffSpese + '%</div>';
  html += '<div style="font-size:0.65em;font-weight:700;padding:4px 8px;border-radius:6px;background:' + (speseBetter ? 'rgba(39,174,96,0.15)' : 'rgba(231,76,60,0.15)') + ';color:' + speseBadgeColor + ';display:inline-block">' + speseBadge + '</div>';
  html += '</div>';
  
  // Variazione Entrate - INTELLIGENTE: Più entrate = MEGLIO (verde), Meno entrate = PEGGIO (rosso)
  var entrateIcon = diffEntrate > 0 ? '↗️' : '↘️';
  var entrateBetter = diffEntrate > 0; // Più entrate è meglio
  var entrateColor = entrateBetter ? '#27ae60' : '#e74c3c';
  var entrateBg = entrateBetter ? 'rgba(39,174,96,0.1)' : 'rgba(231,76,60,0.1)';
  var entrateBadge = entrateBetter ? '✅ Meglio' : '⚠️ Peggio';
  var entrateBadgeColor = entrateBetter ? '#27ae60' : '#e74c3c';
  
  html += '<div style="padding:14px;background:' + entrateBg + ';border-radius:12px;text-align:center;border:2px solid ' + entrateColor + '">';
  html += '<div style="font-size:0.75em;font-weight:700;color:' + entrateColor + ';margin-bottom:6px">💰 Entrate</div>';
  html += '<div style="font-size:1.5em;font-weight:800;color:' + entrateColor + ';margin-bottom:4px">';
  html += entrateIcon + ' ' + (diffEntrate > 0 ? '+' : '') + '€' + Math.abs(diffEntrate).toFixed(0);
  html += '</div>';
  html += '<div style="font-size:0.7em;opacity:0.8;margin-bottom:6px">' + (diffEntrate > 0 ? '+' : '') + percDiffEntrate + '%</div>';
  html += '<div style="font-size:0.65em;font-weight:700;padding:4px 8px;border-radius:6px;background:' + (entrateBetter ? 'rgba(39,174,96,0.15)' : 'rgba(231,76,60,0.15)') + ';color:' + entrateBadgeColor + ';display:inline-block">' + entrateBadge + '</div>';
  html += '</div>';
  
  // Variazione Saldo - INTELLIGENTE: Più saldo = MEGLIO (verde), Meno saldo = PEGGIO (rosso)
  var saldoIcon = diffSaldo > 0 ? '↗️' : '↘️';
  var saldoBetter = diffSaldo > 0; // Più saldo è meglio
  var saldoColor = saldoBetter ? '#27ae60' : '#e74c3c';
  var saldoBg = saldoBetter ? 'rgba(39,174,96,0.1)' : 'rgba(231,76,60,0.1)';
  var saldoBadge = saldoBetter ? '✅ Meglio' : '⚠️ Peggio';
  var saldoBadgeColor = saldoBetter ? '#27ae60' : '#e74c3c';
  
  html += '<div style="padding:14px;background:' + saldoBg + ';border-radius:12px;text-align:center;border:2px solid ' + saldoColor + '">';
  html += '<div style="font-size:0.75em;font-weight:700;color:' + saldoColor + ';margin-bottom:6px">📊 Saldo</div>';
  html += '<div style="font-size:1.5em;font-weight:800;color:' + saldoColor + ';margin-bottom:4px">';
  html += saldoIcon + ' ' + (diffSaldo > 0 ? '+' : '') + '€' + Math.abs(diffSaldo).toFixed(0);
  html += '</div>';
  html += '<div style="font-size:0.7em;opacity:0.8;margin-bottom:6px">' + (diffSaldo > 0 ? '+' : '') + percDiffSaldo + '%</div>';
  html += '<div style="font-size:0.65em;font-weight:700;padding:4px 8px;border-radius:6px;background:' + (saldoBetter ? 'rgba(39,174,96,0.15)' : 'rgba(231,76,60,0.15)') + ';color:' + saldoBadgeColor + ';display:inline-block">' + saldoBadge + '</div>';
  html += '</div>';
  
  html += '</div>';
  html += '</div>'; // Chiude card principale
  
  // Insight
  html += '<div style="margin-top:20px;padding:15px;background:linear-gradient(135deg,#fff9e6,#fff3cc);border-left:4px solid #f39c12;border-radius:8px;color:#333">';
  html += '<div style="font-weight:700;margin-bottom:8px;color:#333">💡 Insight</div>';
  if (diffSpese > 0) {
    html += '<div style="font-size:0.9em;color:#333">Le uscite sono aumentate di €' + Math.abs(diffSpese).toFixed(0) + ' rispetto al mese precedente. ';
    if (diffEntrate > diffSpese) {
      html += 'Fortunatamente, le entrate sono cresciute di più! 👍</div>';
    } else {
      html += 'Cerca di ottimizzare le spese per il prossimo mese. 💪</div>';
    }
  } else {
    html += '<div style="font-size:0.9em;color:#333">Ottimo! Le uscite sono diminuite di €' + Math.abs(diffSpese).toFixed(0) + '. Continua così! 🎉</div>';
  }
  html += '</div>';
  
  html += '</div>';
  
  document.getElementById('confrontoResult').innerHTML = html;
  document.getElementById('confrontoResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  playSound('success');
  mostraToast('✅ Confronto completato!', 'success');
}

// Confronto anni personalizzato
function confrontaAnniPersonalizzato() {
  var elemA = document.getElementById('confrontoAnnoA');
  var elemB = document.getElementById('confrontoAnnoB');
  var result = document.getElementById('confrontoResult');
  
  if (!elemA || !elemB || !result) {
    mostraToast('⚠️ Errore: elementi del confronto non trovati', 'error');
    return;
  }
  
  var anno1 = parseInt(elemA.value);
  var anno2 = parseInt(elemB.value);
  
  var spese1 = calcolaSpeseAnno(anno1);
  var entrate1 = calcolaEntrateAnno(anno1);
  var saldo1 = entrate1 - spese1;
  
  var spese2 = calcolaSpeseAnno(anno2);
  var entrate2 = calcolaEntrateAnno(anno2);
  var saldo2 = entrate2 - spese2;
  
  var diffSpese = spese2 - spese1;
  var percDiffSpese = spese1 > 0 ? ((diffSpese / spese1) * 100).toFixed(1) : 0;
  
  var diffEntrate = entrate2 - entrate1;
  var percDiffEntrate = entrate1 > 0 ? ((diffEntrate / entrate1) * 100).toFixed(1) : 0;
  
  var diffSaldo = saldo2 - saldo1;
  var percDiffSaldo = Math.abs(saldo1) > 0 ? ((diffSaldo / Math.abs(saldo1)) * 100).toFixed(1) : 0;
  
  var html = '<div style="background:var(--card);padding:20px;border-radius:16px;margin-top:15px;box-shadow:0 4px 12px rgba(0,0,0,0.08);animation:slideIn 0.3s ease-out">';
  
  // Header
  html += '<div style="text-align:center;margin-bottom:20px">';
  html += '<h4 style="font-size:1.2em;margin-bottom:8px">📆 Confronto Annuale Personalizzato</h4>';
  html += '<div style="font-size:0.9em;opacity:0.7">';
  html += '<span style="color:#9b59b6;font-weight:600">🔵 Anno ' + anno1 + '</span>';
  html += ' vs ';
  html += '<span style="color:#a1a1aa;font-weight:600">🟢 Anno ' + anno2 + '</span>';
  html += '</div>';
  html += '</div>';
  
  // Grid - una card sopra l'altra
  html += '<div style="display:grid;grid-template-columns:1fr;gap:12px;margin-bottom:20px">';
  
  // Primo anno
  html += '<div style="text-align:center;padding:16px;background:linear-gradient(135deg,#f3e5f5,#e1bee7);border-radius:12px;border:2px solid #9b59b6">';
  html += '<div style="font-size:1em;font-weight:700;margin-bottom:12px;color:#9b59b6">🔵 ' + anno1 + '</div>';
  html += '<div style="margin-bottom:8px">';
  html += '<div style="font-size:0.7em;opacity:0.7">Uscite</div>';
  html += '<div style="font-size:1.2em;font-weight:700;color:#e74c3c">€' + spese1.toFixed(0) + '</div>';
  html += '</div>';
  html += '<div style="margin-bottom:8px">';
  html += '<div style="font-size:0.7em;opacity:0.7">Entrate</div>';
  html += '<div style="font-size:1.2em;font-weight:700;color:#27ae60">€' + entrate1.toFixed(0) + '</div>';
  html += '</div>';
  html += '<div>';
  html += '<div style="font-size:0.7em;opacity:0.7">Saldo</div>';
  html += '<div style="font-size:1.2em;font-weight:700;color:' + (saldo1 >= 0 ? '#27ae60' : '#e74c3c') + '">€' + saldo1.toFixed(0) + '</div>';
  html += '</div>';
  html += '</div>';
  
  // Secondo anno
  html += '<div style="text-align:center;padding:16px;background:linear-gradient(135deg,#a1a1aa,#71717a);color:#fff;border-radius:12px;box-shadow:0 6px 20px rgba(102,126,234,0.4)">';
  html += '<div style="font-size:1em;font-weight:700;margin-bottom:12px">🟢 ' + anno2 + ' ⭐</div>';
  html += '<div style="margin-bottom:8px">';
  html += '<div style="font-size:0.7em;opacity:0.9">Uscite</div>';
  html += '<div style="font-size:1.3em;font-weight:800">€' + spese2.toFixed(0) + '</div>';
  html += '</div>';
  html += '<div style="margin-bottom:8px">';
  html += '<div style="font-size:0.7em;opacity:0.9">Entrate</div>';
  html += '<div style="font-size:1.3em;font-weight:800">€' + entrate2.toFixed(0) + '</div>';
  html += '</div>';
  html += '<div>';
  html += '<div style="font-size:0.7em;opacity:0.9">Saldo</div>';
  html += '<div style="font-size:1.3em;font-weight:800">€' + saldo2.toFixed(0) + '</div>';
  html += '</div>';
  html += '</div>';
  
  html += '</div>';
  
  // Variazioni - una sopra l'altra
  html += '<div style="display:grid;grid-template-columns:1fr;gap:10px">';
  
  html += '<div style="padding:12px;background:' + (diffSpese > 0 ? '#ffebee' : '#e8f5e9') + ';border-radius:10px;text-align:center;border:2px solid ' + (diffSpese > 0 ? '#e74c3c' : '#27ae60') + '">';
  html += '<div style="font-size:0.7em;opacity:0.8;margin-bottom:3px">Δ Uscite Annuali</div>';
  html += '<div style="font-size:1.3em;font-weight:800;color:' + (diffSpese > 0 ? '#e74c3c' : '#27ae60') + '">';
  html += (diffSpese > 0 ? '+' : '') + '€' + diffSpese.toFixed(0);
  html += '</div>';
  html += '<div style="font-size:0.65em;opacity:0.7;margin-top:2px">' + (diffSpese > 0 ? '+' : '') + percDiffSpese + '%</div>';
  html += '</div>';
  
  html += '<div style="padding:12px;background:' + (diffEntrate >= 0 ? '#e8f5e9' : '#ffebee') + ';border-radius:10px;text-align:center;border:2px solid ' + (diffEntrate >= 0 ? '#27ae60' : '#e74c3c') + '">';
  html += '<div style="font-size:0.7em;opacity:0.8;margin-bottom:3px">Δ Entrate Annuali</div>';
  html += '<div style="font-size:1.3em;font-weight:800;color:' + (diffEntrate >= 0 ? '#27ae60' : '#e74c3c') + '">';
  html += (diffEntrate > 0 ? '+' : '') + '€' + diffEntrate.toFixed(0);
  html += '</div>';
  html += '<div style="font-size:0.65em;opacity:0.7;margin-top:2px">' + (diffEntrate > 0 ? '+' : '') + percDiffEntrate + '%</div>';
  html += '</div>';
  
  html += '<div style="padding:12px;background:' + (diffSaldo >= 0 ? '#e8f5e9' : '#ffebee') + ';border-radius:10px;text-align:center;border:2px solid ' + (diffSaldo >= 0 ? '#27ae60' : '#e74c3c') + '">';
  html += '<div style="font-size:0.7em;opacity:0.8;margin-bottom:3px">Δ Saldo Annuale</div>';
  html += '<div style="font-size:1.3em;font-weight:800;color:' + (diffSaldo >= 0 ? '#27ae60' : '#e74c3c') + '">';
  html += (diffSaldo > 0 ? '+' : '') + '€' + diffSaldo.toFixed(0);
  html += '</div>';
  html += '<div style="font-size:0.65em;opacity:0.7;margin-top:2px">' + (diffSaldo > 0 ? '+' : '') + percDiffSaldo + '%</div>';
  html += '</div>';
  
  html += '</div>';
  html += '</div>';
  
  document.getElementById('confrontoResult').innerHTML = html;
  document.getElementById('confrontoResult').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  playSound('success');
  mostraToast('✅ Confronto completato!', 'success');
}

// ========== CALENDARIO ==========
// ========== RICERCA AVANZATA ==========
function toggleAdvancedSearch() {
  var panel = document.getElementById('advancedSearchPanel');
  var btn = document.getElementById('advancedSearchBtn');
  var isOpen = panel.style.display !== 'none';
  
  if (isOpen) {
    panel.style.display = 'none';
    btn.innerHTML = '🔍 Avanzata';
  } else {
    panel.style.display = 'block';
    btn.innerHTML = '✕ Chiudi';
  }
  
  playSound('click');
}

// ========== SISTEMA RISPARMIO 15/20/65 ==========
function aggiornaRisparmio() {
  // Calcola le entrate del mese corrente
  var entrateCorrente = 0;
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese && t.tipo === 'income') {
      entrateCorrente += parseFloat(t.importo) || 0;
    }
  });
  
  // Calcola le percentuali: 65% necessità, 20% desideri, 15% risparmi
  var budgetNecessita = entrateCorrente * 0.65;  // 65%
  var budgetDesideri = entrateCorrente * 0.20;   // 20%
  var budgetRisparmi = entrateCorrente * 0.15;   // 15%
  
  // Aggiorna i valori nell'interfaccia
  document.getElementById('savingsIncome').textContent = formatEuro(entrateCorrente);
  document.getElementById('savingsNeeds').textContent = formatEuro(budgetNecessita);
  document.getElementById('savingsWants').textContent = formatEuro(budgetDesideri);
  document.getElementById('savingsSavings').textContent = formatEuro(budgetRisparmi);
  
  // Calcola le spese effettive per tipo
  var speseNecessita = 0;
  var speseDesideri = 0;
  var totaleUscite = 0; // Per statistiche (con spese condivise divise)
  var totaleUsciteReali = 0; // Per cash flow reale
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese) {
      var imp = parseFloat(t.importo) || 0;
      
      if (t.tipo === 'expense' && !t.virtualRecovery) {
        // Cash flow reale: sempre importo intero
        totaleUsciteReali += imp;
        
        // Statistiche: se condiviso, conta solo la tua metà
        var importoEffettivo = t.condiviso ? splitAmount(imp) : imp;
        totaleUscite += importoEffettivo;
        
        var tipo = DB.categorieClassificazione[t.categoria] || 'desideri';
        if (tipo === 'necessita') {
          speseNecessita += importoEffettivo;
        } else if (tipo === 'desideri') {
          speseDesideri += importoEffettivo;
        }
      } else if (t.tipo === 'partner_payment' && t.condiviso && !t.virtualRecovery) {
        // Lei paga condiviso - conta solo la tua metà
        var importoDaContare = splitAmount(imp);
        totaleUscite += importoDaContare;
        
        var tipo = DB.categorieClassificazione[t.categoria] || 'desideri';
        if (tipo === 'necessita') {
          speseNecessita += importoDaContare;
        } else if (tipo === 'desideri') {
          speseDesideri += importoDaContare;
        }
      }
    }
  });
  
  // Calcola spese condivise e da recuperare
  var speseCondivise = 0;
  var leiHaPagatoCondiviso = 0;
  var leiHaPagatoNonCondiviso = 0; // Prestiti
  var anticipiPartnerMese = 0;
  var recuperiVirtualiTuPaghi = 0;
  var recuperiVirtualiLeiPaga = 0;
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese) {
      if (t.tipo === 'expense') {
        if (t.condiviso && !t.virtualRecovery) {
          // Spesa condivisa
          var importoTotale = t.importoOriginale || t.importo;
          speseCondivise += parseFloat(importoTotale) || 0;
          
          // Chi ha pagato?
          var chiHaPagato = t.chiHaPagato || 'user';
          if (chiHaPagato === 'partner') {
            leiHaPagatoCondiviso += parseFloat(importoTotale) || 0;
          }
          
          // Pagamento misto: se partner ha pagato differenza
          if (t.pagamentoMisto && t.metodiPagamento) {
            t.metodiPagamento.forEach(function(metodo) {
              if (metodo.pagatoDa === 'partner') {
                leiHaPagatoCondiviso += parseFloat(metodo.importo) || 0;
              }
            });
          }
        } else if (t.virtualRecovery) {
          var chiHaPagato = t.chiHaPagato || 'user';
          if (chiHaPagato === 'user') {
            recuperiVirtualiTuPaghi += parseFloat(t.importo) || 0;
          } else {
            recuperiVirtualiLeiPaga += parseFloat(t.importo) || 0;
          }
        }
        
        // Anticipo
        if (t.anticipoPartner && t.anticipoPartner > 0) {
          var chiHaPagato = t.chiHaPagato || 'user';
          if (chiHaPagato === 'user') {
            anticipiPartnerMese += parseFloat(t.anticipoPartner);
          } else {
            anticipiPartnerMese -= parseFloat(t.anticipoPartner);
          }
        }
      } else if (t.tipo === 'partner_payment') {
        // Backward compatibility
        var imp = parseFloat(t.importo) || 0;
        if (t.virtualRecovery) {
          recuperiVirtualiLeiPaga += imp;
        } else if (t.condiviso) {
          leiHaPagatoCondiviso += imp;
        } else {
          leiHaPagatoNonCondiviso += imp;
        }
      }
    }
  });
  
  // Da recuperare = (tue spese condivise / 2) - (sue spese condivise / 2) - (prestiti) + (anticipi) + (recuperi virtuali)
  var daRecuperare = splitAmount(speseCondivise) - splitAmount(leiHaPagatoCondiviso) - leiHaPagatoNonCondiviso + anticipiPartnerMese + recuperiVirtualiTuPaghi - recuperiVirtualiLeiPaga;
  
  // Arrotonda il risultato finale a 2 decimali
  daRecuperare = Math.round(daRecuperare * 100) / 100;
  
  // Risparmio sul conto (cash flow reale)
  var risparmioSulConto = entrateCorrente - totaleUsciteReali;
  
  // Risparmio totale effettivo (considerando da recuperare)
  var risparmiatoTotale = risparmioSulConto + daRecuperare;
  
  var percentualeRisparmio = entrateCorrente > 0 ? (risparmiatoTotale / budgetRisparmi * 100) : 0;
  
  // Limita al 100%
  if (percentualeRisparmio > 100) percentualeRisparmio = 100;
  if (percentualeRisparmio < 0) percentualeRisparmio = 0;
  
  document.getElementById('savingsProgress').textContent = percentualeRisparmio.toFixed(0) + '%';
  document.getElementById('savingsProgressBar').style.width = percentualeRisparmio + '%';
  
  // Analisi mensile con dati dettagliati
  aggiornaAnalisiRisparmio(entrateCorrente, speseNecessita, speseDesideri, risparmioSulConto, daRecuperare, risparmiatoTotale, budgetNecessita, budgetDesideri, budgetRisparmi, totaleUscite);
}

function aggiornaAnalisiRisparmio(entrate, speseNecessita, speseDesideri, risparmioSulConto, daRecuperare, risparmioTotale, budgetNecessita, budgetDesideri, budgetRisparmi, totaleUscite) {
  var analisiDiv = document.getElementById('savingsAnalysis');
  
  var html = '';
  
  // Card riepilogativa con breakdown dettagliato
  html += '<div style="background:var(--bg);padding:18px;border-radius:12px;margin-bottom:15px">';
  html += '<div style="font-size:1.2em;font-weight:700;margin-bottom:15px;text-align:center">💰 Risparmio del Mese</div>';
  
  // Risparmio sul conto
  html += '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--card);border-radius:10px;margin-bottom:10px;border-left:4px solid #3498db">';
  html += '<div>';
  html += '<div style="font-size:0.85em;color:#7f8c8d">🏦 Sul Conto</div>';
  html += '<div style="font-size:0.75em;color:#95a5a6;margin-top:2px">Cash flow reale</div>';
  html += '</div>';
  html += '<div style="font-size:1.5em;font-weight:800;color:#3498db">' + formatEuro(risparmioSulConto) + '</div>';
  html += '</div>';
  
  // Da recuperare/rimborsare
  var daRecupLabel = '✅ Pari';
  var daRecupColor = '#f39c12';
  var daRecupIcon = '✅';
  if (daRecuperare > 0.01) {
    daRecupLabel = '💰 Da Recuperare';
    daRecupColor = '#27ae60';
  } else if (daRecuperare < -0.01) {
    daRecupLabel = '💸 Da Rimborsare';
    daRecupColor = '#e74c3c';
  }
  
  html += '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px;background:var(--card);border-radius:10px;margin-bottom:10px;border-left:4px solid ' + daRecupColor + '">';
  html += '<div>';
  html += '<div style="font-size:0.85em;color:#7f8c8d">' + daRecupLabel + '</div>';
  html += '<div style="font-size:0.75em;color:#95a5a6;margin-top:2px">Splitwise</div>';
  html += '</div>';
  html += '<div style="font-size:1.5em;font-weight:800;color:' + daRecupColor + '">' + (daRecuperare >= 0 ? '+' : '') + formatEuro(Math.abs(daRecuperare)) + '</div>';
  html += '</div>';
  
  // Separatore
  html += '<div style="border-top:2px dashed var(--border);margin:15px 0"></div>';
  
  // Risparmio totale effettivo
  html += '<div style="display:flex;justify-content:space-between;align-items:center;padding:15px;background:linear-gradient(135deg,#a1a1aa,#71717a);border-radius:12px;box-shadow:0 4px 12px rgba(102,126,234,0.3)">';
  html += '<div style="flex:1;min-width:0">';
  html += '<div style="font-size:0.85em;color:#fff;opacity:0.9;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">💎 Risparmio Totale</div>';
  html += '<div style="font-size:0.7em;color:#fff;opacity:0.8;margin-top:2px;white-space:nowrap">Conto + Splitwise</div>';
  html += '</div>';
  html += '<div style="font-size:2em;font-weight:900;color:#fff;flex-shrink:0;margin-left:8px">' + formatEuro(risparmioTotale) + '</div>';
  html += '</div>';
  
  html += '</div>';
  
  // Confronto con obiettivo (basato su risparmio totale)
  html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:15px">';
  html += '<div style="background:var(--bg);padding:15px;border-radius:10px;text-align:center">';
  html += '<div style="font-size:0.85em;color:#7f8c8d;margin-bottom:5px">Obiettivo (15%)</div>';
  html += '<div style="font-size:1.6em;font-weight:800;color:#3498db">' + formatEuro(budgetRisparmi) + '</div>';
  html += '</div>';
  html += '<div style="background:var(--bg);padding:15px;border-radius:10px;text-align:center">';
  html += '<div style="font-size:0.85em;color:#7f8c8d;margin-bottom:5px">Raggiunto</div>';
  html += '<div style="font-size:1.6em;font-weight:800;color:' + (risparmioTotale >= budgetRisparmi ? '#27ae60' : '#e67e22') + '">' + (budgetRisparmi > 0 ? ((risparmioTotale / budgetRisparmi) * 100).toFixed(0) : '0') + '%</div>';
  html += '</div>';
  html += '</div>';
  
  // Stato risparmio
  var differenza = risparmioTotale - budgetRisparmi;
  var icon = '📊';
  var messaggio = '';
  var colore = '#7f8c8d';
  
  if (differenza >= 0) {
    icon = '✅';
    messaggio = 'Ottimo! Hai superato l\'obiettivo di risparmio di ' + formatEuro(differenza);
    colore = '#27ae60';
  } else {
    icon = '⚠️';
    messaggio = 'Ti mancano ' + formatEuro(Math.abs(differenza)) + ' per raggiungere l\'obiettivo del 15%';
    colore = '#e67e22';
  }
  
  html += '<div style="background:var(--bg);padding:15px;border-radius:10px;margin-bottom:15px">';
  html += '<div style="font-size:1.2em;font-weight:700;margin-bottom:8px;text-align:center">' + icon + ' Stato Risparmio</div>';
  html += '<div style="color:' + colore + ';font-weight:600;text-align:center">' + messaggio + '</div>';
  html += '</div>';
  
  // Distribuzione dettagliata per tipo
  html += '<div style="background:var(--bg);padding:15px;border-radius:10px;margin-bottom:15px">';
  html += '<div style="font-size:1.1em;font-weight:700;margin-bottom:15px;text-align:center">📊 Distribuzione Spese per Tipo</div>';
  
  // Necessità
  var percNecessita = budgetNecessita > 0 ? (speseNecessita / budgetNecessita * 100) : 0;
  var colorNecessita = percNecessita > 100 ? '#e74c3c' : (percNecessita > 90 ? '#f39c12' : '#27ae60');
  html += '<div style="margin-bottom:15px">';
  html += '<div style="display:flex;justify-content:space-between;margin-bottom:5px">';
  html += '<span style="font-size:0.9em">🎯 <strong>Necessità</strong></span>';
  html += '<span style="font-size:0.9em"><strong>' + formatEuro(speseNecessita) + '</strong> / ' + formatEuro(budgetNecessita) + '</span>';
  html += '</div>';
  html += '<div style="background:#ecf0f1;height:10px;border-radius:5px;overflow:hidden">';
  html += '<div style="background:' + colorNecessita + ';height:100%;width:' + Math.min(percNecessita, 100) + '%;transition:width 0.5s"></div>';
  html += '</div>';
  html += '<div style="font-size:0.8em;color:#7f8c8d;margin-top:3px;text-align:right">' + percNecessita.toFixed(1) + '% del budget</div>';
  html += '</div>';
  
  // Desideri
  var percDesideri = budgetDesideri > 0 ? (speseDesideri / budgetDesideri * 100) : 0;
  var colorDesideri = percDesideri > 100 ? '#e74c3c' : (percDesideri > 90 ? '#f39c12' : '#27ae60');
  html += '<div style="margin-bottom:15px">';
  html += '<div style="display:flex;justify-content:space-between;margin-bottom:5px">';
  html += '<span style="font-size:0.9em">💎 <strong>Desideri</strong></span>';
  html += '<span style="font-size:0.9em"><strong>' + formatEuro(speseDesideri) + '</strong> / ' + formatEuro(budgetDesideri) + '</span>';
  html += '</div>';
  html += '<div style="background:#ecf0f1;height:10px;border-radius:5px;overflow:hidden">';
  html += '<div style="background:' + colorDesideri + ';height:100%;width:' + Math.min(percDesideri, 100) + '%;transition:width 0.5s"></div>';
  html += '</div>';
  html += '<div style="font-size:0.8em;color:#7f8c8d;margin-top:3px;text-align:right">' + percDesideri.toFixed(1) + '% del budget</div>';
  html += '</div>';
  
  html += '</div>';
  
  // Totale uscite (USA totaleUscite che include TUTTE le categorie)
  var percentualeUscite = entrate > 0 ? (totaleUscite / entrate * 100) : 0;
  html += '<div style="background:var(--bg);padding:15px;border-radius:10px">';
  html += '<div style="font-size:1.1em;font-weight:700;margin-bottom:3px;text-align:center">💸 Costo Reale</div>';
  html += '<div style="font-size:0.75em;color:#888;text-align:center;margin-bottom:10px">(quanto spendi effettivamente)</div>';
  html += '<div style="margin-bottom:10px">';
  html += '<div style="display:flex;justify-content:space-between;margin-bottom:5px">';
  html += '<span style="font-size:0.9em">Speso: <strong>' + formatEuro(totaleUscite) + '</strong></span>';
  html += '<span style="font-size:0.9em"><strong>' + percentualeUscite.toFixed(1) + '%</strong> delle entrate</span>';
  html += '</div>';
  html += '<div style="background:#ecf0f1;height:10px;border-radius:5px;overflow:hidden">';
  html += '<div style="background:var(--expense);height:100%;width:' + Math.min(percentualeUscite, 100) + '%;transition:width 0.5s"></div>';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  
  analisiDiv.innerHTML = html;
}

function mostraDettagliRisparmio() {
  playSound('click');
  
  var modal = document.getElementById('modal');
  modal.classList.add('active');
  
  var content = modal.querySelector('.modal-content');
  
  var entrate = 0, uscite = 0;
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese) {
      var imp = parseFloat(t.importo) || 0;
      if (t.tipo === 'income') entrate += imp;
      else if (t.tipo === 'expense') uscite += imp;
    }
  });
  
  var necessita = entrate * 0.65;  // 65%
  var desideri = entrate * 0.20;   // 20%
  var risparmi = entrate * 0.15;   // 15%
  var saldo = entrate - uscite;
  
  var html = '<div class="modal-header"><h3>📊 Dettagli Risparmio</h3><button class="close-btn" onclick="chiudiModal()">×</button></div>';
  
  html += '<div style="background:linear-gradient(135deg,#a1a1aa,#71717a);color:#fff;padding:20px;border-radius:12px;margin-bottom:15px;text-align:center">';
  html += '<div style="font-size:0.9em;opacity:0.9">Entrate Mensili</div>';
  html += '<div style="font-size:2.5em;font-weight:800;margin:10px 0">' + formatEuro(entrate) + '</div>';
  html += '</div>';
  
  html += '<div style="margin-bottom:15px">';
  html += '<h4 style="margin-bottom:10px">🎯 Necessità (65%)</h4>';
  html += '<div style="background:var(--bg);padding:15px;border-radius:10px">';
  html += '<div style="font-size:1.8em;font-weight:800;color:#e67e22">' + formatEuro(necessita) + '</div>';
  html += '<p style="font-size:0.85em;color:#7f8c8d;margin-top:5px">Da destinare a spese essenziali</p>';
  html += '</div></div>';
  
  html += '<div style="margin-bottom:15px">';
  html += '<h4 style="margin-bottom:10px">💎 Desideri (20%)</h4>';
  html += '<div style="background:var(--bg);padding:15px;border-radius:10px">';
  html += '<div style="font-size:1.8em;font-weight:800;color:#9b59b6">' + formatEuro(desideri) + '</div>';
  html += '<p style="font-size:0.85em;color:#7f8c8d;margin-top:5px">Budget per divertimento</p>';
  html += '</div></div>';
  
  html += '<div style="margin-bottom:20px">';
  html += '<h4 style="margin-bottom:10px">🏦 Risparmi (15%)</h4>';
  html += '<div style="background:var(--bg);padding:15px;border-radius:10px">';
  html += '<div style="font-size:1.8em;font-weight:800;color:#27ae60">' + formatEuro(risparmi) + '</div>';
  html += '<p style="font-size:0.85em;color:#7f8c8d;margin-top:5px">Obiettivo di risparmio</p>';
  html += '</div></div>';
  
  html += '<div style="background:' + (saldo >= risparmi ? '#d5f4e6' : '#fee') + ';padding:15px;border-radius:10px;border-left:4px solid ' + (saldo >= risparmi ? '#27ae60' : '#e74c3c') + '">';
  html += '<div style="font-size:0.9em;font-weight:600;margin-bottom:5px">' + (saldo >= risparmi ? '✅ Obiettivo Raggiunto!' : '⚠️ Sotto Obiettivo') + '</div>';
  html += '<div style="font-size:0.85em">Risparmio attuale: <strong>' + formatEuro(saldo) + '</strong></div>';
  html += '</div>';
  
  html += '<button class="btn" onclick="chiudiModal()" style="margin-top:15px">OK</button>';
  
  content.innerHTML = html;
}

function impostaObiettivo() {
  playSound('click');
  mostraToast('💡 Funzione in sviluppo - Potrai impostare obiettivi personalizzati', 'info');
}

function toggleMonthSelector() {
  var dropdown = document.getElementById('monthSelectorDropdown');
  var btn = document.getElementById('monthSelectorBtn');
  
  if (dropdown.style.display === 'none' || dropdown.style.display === '') {
    // Apri dropdown
    dropdown.style.display = 'block';
    btn.innerHTML = '📅 Scegli Mese ▲';
    
    // Trova anno più vecchio nelle transazioni
    var minYear = new Date().getFullYear();
    if (DB.transazioni.length > 0) {
      DB.transazioni.forEach(function(t) {
        var transYear = new Date(t.data).getFullYear();
        if (transYear < minYear) minYear = transYear;
      });
    }
    
    // Popola anni disponibili (da anno prima transazione a 2099)
    var yearSelect = document.getElementById('monthSelectorYear');
    var currentYear = new Date().getFullYear();
    yearSelect.innerHTML = '';
    
    for (var y = 2099; y >= minYear; y--) {
      var option = document.createElement('option');
      option.value = y;
      option.textContent = y;
      if (y === currentYear) option.selected = true;
      yearSelect.appendChild(option);
    }
    
    // Seleziona mese corrente
    var currentMonth = new Date().getMonth();
    document.getElementById('monthSelectorMonth').value = currentMonth;
  } else {
    // Chiudi dropdown
    dropdown.style.display = 'none';
    btn.innerHTML = '📅 Scegli Mese ▼';
  }
  
  playSound('click');
}

function applyMonthSelector() {
  var monthValue = parseInt(document.getElementById('monthSelectorMonth').value);
  var yearValue = parseInt(document.getElementById('monthSelectorYear').value);
  
  // Calcola primo e ultimo giorno del mese
  var firstDay = new Date(yearValue, monthValue, 1);
  var lastDay = new Date(yearValue, monthValue + 1, 0);
  
  // Formatta in YYYY-MM-DD
  var fromStr = yearValue + '-' + 
                String(monthValue + 1).padStart(2, '0') + '-01';
  var toStr = yearValue + '-' + 
              String(monthValue + 1).padStart(2, '0') + '-' + 
              String(lastDay.getDate()).padStart(2, '0');
  
  document.getElementById('searchDateFrom').value = fromStr;
  document.getElementById('searchDateTo').value = toStr;
  
  // Chiudi dropdown
  document.getElementById('monthSelectorDropdown').style.display = 'none';
  document.getElementById('monthSelectorBtn').innerHTML = '📅 Scegli Mese ▼';
  
  mostraTrans();
  playSound('success');
}

function setQuickPeriod(type) {
  var today = new Date();
  var fromDate, toDate;
  
  switch(type) {
    case 'thisMonth':
      fromDate = new Date(today.getFullYear(), today.getMonth(), 1);
      toDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      break;
    case 'last30':
      toDate = new Date(today);
      fromDate = new Date(today);
      fromDate.setDate(fromDate.getDate() - 30);
      break;
    case 'thisYear':
      fromDate = new Date(today.getFullYear(), 0, 1);
      toDate = new Date(today.getFullYear(), 11, 31);
      break;
  }
  
  // Formatta le date in YYYY-MM-DD per i campi input
  var fromStr = fromDate.getFullYear() + '-' + 
                String(fromDate.getMonth() + 1).padStart(2, '0') + '-' + 
                String(fromDate.getDate()).padStart(2, '0');
  var toStr = toDate.getFullYear() + '-' + 
              String(toDate.getMonth() + 1).padStart(2, '0') + '-' + 
              String(toDate.getDate()).padStart(2, '0');
  
  document.getElementById('searchDateFrom').value = fromStr;
  document.getElementById('searchDateTo').value = toStr;
  
  mostraTrans();
  playSound('click');
}

function resetAdvancedSearch() {
  document.getElementById('searchDateFrom').value = '';
  document.getElementById('searchDateTo').value = '';
  document.getElementById('searchAmountMin').value = '';
  document.getElementById('searchAmountMax').value = '';
  document.getElementById('sortOrder').value = 'recenti';
  if (document.getElementById('filterMetodo')) {
    document.getElementById('filterMetodo').value = 'all';
  }
  ordinamentoTransazioni = 'recenti';
  mostraTrans();
  playSound('click');
}

function toggleMostraTutte() {
  mostraTutteTransazioni = document.getElementById('showAllTransactions').checked;
  mostraTrans();
  playSound('click');
  
  if (mostraTutteTransazioni) {
    mostraToast('📋 Visualizzazione: tutte le transazioni dell\'anno', 'info');
  } else {
    mostraToast('📅 Visualizzazione: solo transazioni mensili', 'info');
  }
}

function cambiaOrdinamento() {
  ordinamentoTransazioni = document.getElementById('sortOrder').value;
  mostraTrans();
  playSound('click');
  
  var messaggi = {
    'recenti': '📅 Ordinate: più recenti (per data)',
    'ultime-inserite': '🆕 Ordinate: ultime inserite',
    'vecchie': '📅 Ordinate: più vecchie (per data)',
    'a-z': '🔤 Ordinate: A → Z',
    'z-a': '🔤 Ordinate: Z → A',
    'importo-alto': '💰 Ordinate: importo alto → basso',
    'importo-basso': '💰 Ordinate: importo basso → alto'
  };
  
  mostraToast(messaggi[ordinamentoTransazioni] || 'Ordinamento modificato', 'info');
}

// ========== PREVISIONI ==========
function calcolaPrevisioni() {
  // Verifica che gli elementi esistano
  var predictedExpense = document.getElementById('predictedExpense');
  var predictedBalance = document.getElementById('predictedBalance');
  var predictionTrend = document.getElementById('predictionTrend');
  var predictionNote = document.getElementById('predictionNote');
  
  if (!predictedExpense || !predictedBalance || !predictionTrend || !predictionNote) {
    console.warn('Elementi previsioni non trovati nel DOM');
    return;
  }
  
  // Calcola media ultimi 3 mesi BASANDOSI SUL MESE SELEZIONATO
  var ultimi3Mesi = [];
  
  // Usa anno/mese dell'app (annoTabelle), NON la data di oggi
  var annoCorrente = annoTabelle || anno;
  var meseCorrente = mese;
  
  for (var i = 1; i <= 3; i++) {
    var m = meseCorrente - i;
    var y = annoCorrente;
    if (m < 0) {
      m += 12;
      y--;
    }
    
    var speseMese = 0;
    DB.transazioni.forEach(function(t) {
      var d = new Date(t.data);
      if (d.getFullYear() === y && d.getMonth() === m) {
        var imp = parseFloat(t.importo) || 0;
        if (t.tipo === 'expense' && !t.virtualRecovery) {
          // Se condiviso, conta solo la tua metà
          if (t.condiviso) {
            speseMese += splitAmount(imp);
          } else {
            speseMese += imp;
          }
        } else if (t.tipo === 'partner_payment' && !t.virtualRecovery) {
          // Spese di lei: se condiviso metà, altrimenti tutto (prestito)
          speseMese += t.condiviso ? splitAmount(imp) : imp;
        }
      }
    });
    
    ultimi3Mesi.push(speseMese);
  }
  
  var mediaSpese = ultimi3Mesi.reduce(function(a, b) { return a + b; }, 0) / 3;
  
  // Calcola trend
  var trend = 0;
  var previsioneSpese = mediaSpese;
  
  if (ultimi3Mesi.length === 3 && ultimi3Mesi[2] > 0) {
    trend = ((ultimi3Mesi[0] - ultimi3Mesi[2]) / ultimi3Mesi[2]) * 100;
    previsioneSpese = mediaSpese * (1 + trend / 100);
  }
  
  // Calcola entrate medie
  var entrateUltimi3 = [];
  for (var i = 1; i <= 3; i++) {
    var m = meseCorrente - i;
    var y = annoCorrente;
    if (m < 0) {
      m += 12;
      y--;
    }
    
    var entrateMese = 0;
    DB.transazioni.forEach(function(t) {
      var d = new Date(t.data);
      if (d.getFullYear() === y && d.getMonth() === m && t.tipo === 'income') {
        entrateMese += parseFloat(t.importo) || 0;
      }
    });
    
    entrateUltimi3.push(entrateMese);
  }
  
  var mediaEntrate = entrateUltimi3.reduce(function(a, b) { return a + b; }, 0) / 3;
  var previsioneSaldo = mediaEntrate - previsioneSpese;
  
  document.getElementById('predictedExpense').textContent = formatEuro(previsioneSpese);
  document.getElementById('predictedBalance').textContent = formatEuro(previsioneSaldo);
  
  var trendIcon = trend > 0 ? '📈' : '📉';
  var trendColor = trend > 0 ? '#e74c3c' : '#27ae60';
  document.getElementById('predictionTrend').innerHTML = '<span style="color:' + trendColor + '">' + trendIcon + ' ' + (trend > 0 ? '+' : '') + trend.toFixed(1) + '% rispetto a 3 mesi fa</span>';
  
  var saldoIcon = previsioneSaldo >= 0 ? '✅' : '⚠️';
  document.getElementById('predictionNote').textContent = saldoIcon + ' Basato su media ultimi 3 mesi';
}

// ========== CONDIVIDI REPORT ==========
function condividiReport() {
  playSound('click');
  
  var mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  
  // Calcola dati del mese
  var ent = 0, usc = 0;
  var catSpese = {};
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese) {
      var imp = parseFloat(t.importo) || 0;
      if (t.tipo === 'income') ent += imp;
      else if (t.tipo === 'expense') {
        usc += imp;
        catSpese[t.categoria] = (catSpese[t.categoria] || 0) + imp;
      }
    }
  });
  
  var saldo = ent - usc;
  var topCat = Object.entries(catSpese).sort(function(a,b) { return b[1] - a[1]; }).slice(0, 5);
  
  // Crea report HTML
  var reportHTML = '<div class="report-preview" style="font-family:Arial,sans-serif;color:#000">';
  reportHTML += '<div class="report-header">';
  reportHTML += '<h2 style="color:#2c3e50;margin:0">💰 Report Mensile</h2>';
  reportHTML += '<p style="color:#7f8c8d;margin:5px 0">' + mesiNomi[mese] + ' ' + anno + '</p>';
  reportHTML += '</div>';
  
  reportHTML += '<div class="report-section">';
  reportHTML += '<h3 style="color:#27ae60;margin:0 0 10px 0">📈 Entrate: €' + ent.toFixed(2) + '</h3>';
  reportHTML += '<h3 style="color:#e67e22;margin:0 0 10px 0">📉 Uscite: €' + usc.toFixed(2) + '</h3>';
  reportHTML += '<h3 style="color:#3498db;margin:0">💰 Saldo: €' + saldo.toFixed(2) + '</h3>';
  reportHTML += '</div>';
  
  if (topCat.length > 0) {
    reportHTML += '<div class="report-section">';
    reportHTML += '<h4 style="margin:0 0 10px 0">🔥 Top 5 Spese</h4>';
    topCat.forEach(function(item, idx) {
      var percent = usc > 0 ? (item[1] / usc * 100).toFixed(1) : 0;
      reportHTML += '<p style="margin:5px 0">' + (idx + 1) + '. ' + item[0] + ': €' + item[1].toFixed(2) + ' (' + percent + '%)</p>';
    });
    reportHTML += '</div>';
  }
  
  reportHTML += '<p style="text-align:center;color:#95a5a6;font-size:0.9em;margin-top:20px">Generato da Budget Manager Pro</p>';
  reportHTML += '</div>';
  
  // Mostra modal con report
  var modal = document.getElementById('modal');
  modal.classList.add('active');
  
  var content = modal.querySelector('.modal-content');
  content.innerHTML = '<div class="modal-header"><h3>📤 Condividi Report</h3><button class="close-btn" onclick="chiudiModal()">×</button></div>';
  content.innerHTML += reportHTML;
  content.innerHTML += '<button class="btn" onclick="copiaReportHTML()">📋 Copia Report</button>';
  content.innerHTML += '<button class="btn btn-edit" onclick="scaricaReportPDF()">📥 Scarica PDF</button>';
  content.innerHTML += '<button class="btn btn-danger" onclick="chiudiModal()">Chiudi</button>';
  
  window.currentReport = reportHTML;
}

function copiaReportHTML() {
  var tempDiv = document.createElement('div');
  tempDiv.innerHTML = window.currentReport;
  tempDiv.style.position = 'fixed';
  tempDiv.style.left = '-9999px';
  document.body.appendChild(tempDiv);
  
  var range = document.createRange();
  range.selectNode(tempDiv);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  
  try {
    document.execCommand('copy');
    mostraToast('✅ Report copiato negli appunti!', 'success');
    playSound('success');
  } catch (e) {
    mostraToast('❌ Errore nella copia', 'danger');
    playSound('error');
  }
  
  document.body.removeChild(tempDiv);
  window.getSelection().removeAllRanges();
}

function scaricaReportPDF() {
  mostraToast('💡 Funzione in sviluppo - Usa "Copia Report" e incolla in un editor', 'info');
  playSound('click');
}

// ========== BREAKDOWN ENTRATE ==========
function toggleBreakdownEntrate() {
  var content = document.getElementById('breakdownEntrateContent');
  var icon = document.getElementById('breakdownEntrateToggleIcon');

  if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
    content.style.maxHeight = '1000px';
    icon.style.transform = 'rotate(0deg)';
    aggiornaBreakdownEntrate();
  } else {
    content.style.maxHeight = '0px';
    icon.style.transform = 'rotate(-90deg)';
  }
  playSound('click');
}

// Toggle per sezioni categorie
function toggleCatSection(contentId) {
  var content = document.getElementById(contentId);
  var toggleId = contentId.replace('Content', 'Toggle');
  var icon = document.getElementById(toggleId);

  if (content.style.maxHeight === '0px' || content.style.maxHeight === '') {
    content.style.maxHeight = '500px';
    if (icon) icon.style.transform = 'rotate(180deg)';
  } else {
    content.style.maxHeight = '0px';
    if (icon) icon.style.transform = 'rotate(0deg)';
  }
  playSound('click');
}

function aggiornaBreakdownEntrate() {
  var mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  
  // Aggiorna titolo mese
  if (document.getElementById('breakdownEntrateMonth')) {
    document.getElementById('breakdownEntrateMonth').textContent = mesiNomi[mese] + ' ' + anno;
  }
  
  // Calcola entrate per categoria
  var entratePerCategoria = {};
  var totaleEntrate = 0;
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese && t.tipo === 'income') {
      var imp = parseFloat(t.importo) || 0;
      entratePerCategoria[t.categoria] = (entratePerCategoria[t.categoria] || 0) + imp;
      totaleEntrate += imp;
    }
  });
  
  // Aggiorna totale
  if (document.getElementById('breakdownEntrateTotale')) {
    document.getElementById('breakdownEntrateTotale').textContent = formatEuro(totaleEntrate);
  }
  
  // Genera lista entrate
  var html = '';
  var entries = Object.entries(entratePerCategoria).sort(function(a, b) { return b[1] - a[1]; });
  
  // Mappa icone per categorie entrate
  var iconMap = {
    'Stipendio': '💼',
    'Buoni Pasto': '🎟️',
    'Welfare': '🏥',
    'Bonus': '🎁',
    'Rimborso': '💳',
    'Altro': '💰'
  };
  
  // Colori gradient per le icone
  var colors = [
    'linear-gradient(135deg, #4caf50, #2e7d32)',
    'linear-gradient(135deg, #f39c12, #e67e22)',
    'linear-gradient(135deg, #9b59b6, #8e44ad)',
    'linear-gradient(135deg, #3498db, #2980b9)',
    'linear-gradient(135deg, #e74c3c, #c0392b)',
    'linear-gradient(135deg, #16a085, #0e6655)'
  ];
  
  if (entries.length === 0) {
    html = '<div style="text-align:center;padding:30px;color:#7f8c8d">📊 Nessuna entrata questo mese</div>';
  } else {
    entries.forEach(function(entry, index) {
      var categoria = entry[0];
      var importo = entry[1];
      var percentuale = totaleEntrate > 0 ? ((importo / totaleEntrate) * 100).toFixed(1) : 0;
      var icona = iconMap[categoria] || '💰';
      var color = colors[index % colors.length];
      
      html += '<div style="display:flex;align-items:center;padding:12px;background:white;border-radius:8px;margin-bottom:8px;box-shadow:0 2px 4px rgba(0,0,0,0.05)">';
      html += '<div style="width:40px;height:40px;background:' + color + ';border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:1.3em;flex-shrink:0">' + icona + '</div>';
      html += '<div style="flex:1;margin-left:12px">';
      html += '<div style="font-weight:700;font-size:0.95em;color:#2c3e50">' + categoria + '</div>';
      html += '<div style="font-size:0.75em;color:#7f8c8d;margin-top:2px">' + percentuale + '% del totale</div>';
      html += '</div>';
      html += '<div style="font-size:1.2em;font-weight:800;color:#2e7d32">' + formatEuro(importo) + '</div>';
      html += '</div>';
    });
  }
  
  if (document.getElementById('breakdownEntrateList')) {
    document.getElementById('breakdownEntrateList').innerHTML = html;
  }
  
  // Genera grafico trend ultimi 6 mesi
  aggiornaGraficoEntrateTrend();
}

function aggiornaGraficoEntrateTrend() {
  var canvas = document.getElementById('incomeComparisonChart');
  if (!canvas) return;
  
  var ctx = canvas.getContext('2d');
  
  // Distruggi grafico esistente se presente
  if (window.incomeComparisonChartInstance) {
    window.incomeComparisonChartInstance.destroy();
  }
  
  // Prepara dati ultimi 6 mesi
  var mesiLabels = [];
  var entrateData = [];
  var mesiNomi = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
  
  for (var i = 5; i >= 0; i--) {
    var d = new Date(anno, mese - i, 1);
    var m = d.getMonth();
    var a = d.getFullYear();
    
    mesiLabels.push(mesiNomi[m]);
    
    var totale = 0;
    DB.transazioni.forEach(function(t) {
      var td = new Date(t.data);
      if (td.getFullYear() === a && td.getMonth() === m && t.tipo === 'income') {
        totale += parseFloat(t.importo) || 0;
      }
    });
    entrateData.push(totale);
  }
  
  // Crea grafico
  window.incomeComparisonChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: mesiLabels,
      datasets: [{
        label: 'Entrate',
        data: entrateData,
        backgroundColor: 'rgba(76, 175, 80, 0.8)',
        borderColor: '#4caf50',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '€' + value;
            }
          }
        }
      }
    }
  });
}

// ========== INVESTIMENTI & OBIETTIVI ==========
function aggiornaWidgetObiettivi() {
  var container = document.getElementById('widgetObiettiviCompatto');
  if (!container) return;
  
  if (!DB.obiettivi || DB.obiettivi.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:25px;color:#7f8c8d;background:rgba(255,255,255,0.8);border-radius:10px"><div style="font-size:1.5em;margin-bottom:8px">🎯</div><div style="font-size:0.9em">Nessun obiettivo impostato</div><div style="font-size:0.8em;margin-top:6px;opacity:0.8">Vai alla sezione Obiettivi per crearne uno!</div></div>';
    return;
  }
  
  var html = '';
  // Mostra solo i primi 3 obiettivi
  DB.obiettivi.slice(0, 3).forEach(function(obj) {
    // Risparmio = valore manuale iniziale + risparmi calcolati (solo propri)
    var risparmioIniziale = obj.risparmiato || 0;
    var risparmioCalcolato = 0;

    if (obj.dataInizio) {
      var dataInizio = new Date(obj.dataInizio);
      var oggi = new Date();

      DB.transazioni.forEach(function(t) {
        var d = new Date(t.data);
        if (d >= dataInizio && d <= oggi) {
          var imp = parseFloat(t.importo) || 0;

          if (t.tipo === 'income' && !t.rimborsoPartner) {
            risparmioCalcolato += imp;
          } else if (t.tipo === 'expense' && !t.virtualRecovery) {
            if (t.condiviso) {
              risparmioCalcolato -= imp / 2;
            } else {
              risparmioCalcolato -= imp;
            }
          }
        }
      });
    }

    // SOMMA il valore manuale iniziale ai risparmi calcolati
    var risparmiato = risparmioIniziale + risparmioCalcolato;

    var percentuale = obj.target > 0 ? ((risparmiato / obj.target) * 100) : 0;
    var progressColor = percentuale < 30 ? '#f44336' : percentuale < 60 ? '#ff9800' : percentuale < 90 ? '#4caf50' : '#2e7d32';

    html += '<div style="background:rgba(255,255,255,0.9);padding:14px;border-radius:12px;margin-bottom:10px;border:2px solid ' + progressColor + '">';
    // Nome e icona centrati orizzontalmente
    html += '<div style="text-align:center;margin-bottom:10px">';
    html += '<span style="font-size:1.3em;margin-right:8px">' + obj.icona + '</span>';
    html += '<span style="font-weight:700;font-size:1em;color:#2c3e50">' + obj.nome + '</span>';
    html += '</div>';
    // Progress bar
    html += '<div style="background:#ecf0f1;height:8px;border-radius:4px;overflow:hidden;margin-bottom:8px">';
    html += '<div style="background:' + progressColor + ';height:100%;width:' + Math.min(percentuale, 100).toFixed(1) + '%;transition:width 0.5s ease"></div>';
    html += '</div>';
    // Percentuale centrata
    html += '<div style="text-align:center;font-size:1.1em;font-weight:800;color:' + progressColor + ';margin-bottom:6px">' + percentuale.toFixed(0) + '%</div>';
    // Valori centrati
    html += '<div style="text-align:center;font-size:0.8em;color:#7f8c8d">';
    html += formatEuro(risparmiato) + ' / ' + formatEuro(obj.target);
    html += '</div>';
    html += '</div>';
  });
  
  if (DB.obiettivi.length > 3) {
    html += '<div style="text-align:center;padding:10px;color:#e65100;font-size:0.85em;font-weight:600">+' + (DB.obiettivi.length - 3) + ' altri obiettivi</div>';
  }
  
  container.innerHTML = html;
}

function aggiornaInvestimenti() {
  // Calcola capacità risparmio (Entrate - Uscite del mese corrente)
  var totEntrate = 0;
  var totUscite = 0;
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getFullYear() === anno && d.getMonth() === mese) {
      var imp = parseFloat(t.importo) || 0;
      
      if (t.tipo === 'income') {
        totEntrate += imp;
      } else if (t.tipo === 'expense' && !t.virtualRecovery) {
        var importoEffettivo = t.condiviso ? splitAmount(imp) : imp;
        totUscite += importoEffettivo;
      } else if (t.tipo === 'partner_payment' && t.condiviso && !t.virtualRecovery) {
        totUscite += splitAmount(imp);
      }
    }
  });
  
  var capacitaRisparmio = totEntrate - totUscite;
  
  // Aggiorna capacità risparmio in tutti i posti
  var capacitaElements = document.querySelectorAll('#capacitaRisparmio');
  capacitaElements.forEach(function(el) {
    if (el) el.textContent = formatEuro(capacitaRisparmio);
  });
  
  // Aggiorna lista obiettivi nella sezione completa
  aggiornaListaObiettiviInvestimento();
  
  // Aggiorna proiezioni
  aggiornaProiezioni(capacitaRisparmio);
  
  // Aggiorna widget dashboard
  aggiornaWidgetObiettivi();
}

function aggiornaListaObiettiviInvestimento() {
  var container = document.getElementById('obiettiviInvestimentoList');
  if (!container) return;

  if (!DB.obiettivi || DB.obiettivi.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:30px 20px;color:#7f8c8d;background:rgba(255,255,255,0.9);border-radius:12px"><div style="font-size:2em;margin-bottom:10px">🎯</div><div style="font-size:1em;font-weight:700;margin-bottom:6px">Nessun obiettivo</div><div style="font-size:0.85em">Clicca su "Gestisci Obiettivi" per iniziare</div></div>';
    return;
  }

  // Colori per obiettivi
  var colors = ['#ff9800', '#2196f3', '#9c27b0', '#4caf50', '#f44336', '#00bcd4'];

  var html = '<div style="display:flex;flex-direction:column;gap:12px">';

  DB.obiettivi.forEach(function(obj, index) {
    // Risparmio = valore manuale iniziale + risparmi calcolati (solo propri, non debiti partner)
    var risparmioIniziale = obj.risparmiato || 0;
    var risparmioCalcolato = 0;

    if (obj.dataInizio) {
      var dataInizio = new Date(obj.dataInizio);
      var oggi = new Date();

      DB.transazioni.forEach(function(t) {
        var d = new Date(t.data);
        if (d >= dataInizio && d <= oggi) {
          var imp = parseFloat(t.importo) || 0;

          if (t.tipo === 'income' && !t.rimborsoPartner) {
            // Entrate normali (non rimborsi dal partner che sono debiti)
            risparmioCalcolato += imp;
          } else if (t.tipo === 'expense' && !t.virtualRecovery) {
            // Spese: se condivisa, solo metà è mia
            if (t.condiviso) {
              risparmioCalcolato -= imp / 2; // Solo la mia metà
            } else {
              risparmioCalcolato -= imp;
            }
          }
        }
      });
    }

    // SOMMA il valore manuale iniziale ai risparmi calcolati
    var risparmiato = risparmioIniziale + risparmioCalcolato;

    var percentuale = obj.target > 0 ? ((risparmiato / obj.target) * 100) : 0;
    var mancante = Math.max(0, obj.target - risparmiato);
    var color = colors[index % colors.length];

    // Colore progress
    var progressColor;
    if (percentuale >= 100) progressColor = '#2e7d32';
    else if (percentuale >= 60) progressColor = '#4caf50';
    else if (percentuale >= 30) progressColor = '#ff9800';
    else progressColor = '#f44336';

    // Card obiettivo - layout verticale ottimizzato mobile
    html += '<div style="background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.1)">';

    // Header con colore
    html += '<div style="background:' + color + ';padding:12px 16px;display:flex;align-items:center;justify-content:space-between">';
    html += '<div style="display:flex;align-items:center;gap:10px">';
    html += '<span style="font-size:1.4em">' + obj.icona + '</span>';
    html += '<span style="font-weight:700;color:#fff;font-size:1.05em">' + obj.nome + '</span>';
    html += '</div>';
    html += '<span style="background:rgba(255,255,255,0.25);padding:4px 10px;border-radius:20px;font-size:0.8em;font-weight:700;color:#fff">' + percentuale.toFixed(0) + '%</span>';
    html += '</div>';

    // Corpo
    html += '<div style="padding:14px 16px">';

    // Date (se presenti)
    if (obj.dataInizio || obj.dataFine) {
      html += '<div style="display:flex;gap:12px;margin-bottom:12px;font-size:0.8em">';
      if (obj.dataInizio) {
        var dInizio = new Date(obj.dataInizio);
        html += '<div style="flex:1;padding:8px;background:rgba(33,150,243,0.1);border-radius:8px;text-align:center">';
        html += '<div style="color:#1976d2;font-weight:600">📅 Inizio</div>';
        html += '<div style="color:#1565c0;font-weight:700;margin-top:2px">' + dInizio.toLocaleDateString('it-IT', {day:'2-digit',month:'short',year:'2-digit'}) + '</div>';
        html += '</div>';
      }
      if (obj.dataFine) {
        var dFine = new Date(obj.dataFine);
        html += '<div style="flex:1;padding:8px;background:rgba(156,39,176,0.1);border-radius:8px;text-align:center">';
        html += '<div style="color:#7b1fa2;font-weight:600">🏁 Fine</div>';
        html += '<div style="color:#6a1b9a;font-weight:700;margin-top:2px">' + dFine.toLocaleDateString('it-IT', {day:'2-digit',month:'short',year:'2-digit'}) + '</div>';
        html += '</div>';
      }
      html += '</div>';
    }

    // Progress bar
    html += '<div style="background:#e0e0e0;height:10px;border-radius:5px;overflow:hidden;margin-bottom:14px">';
    html += '<div style="background:' + progressColor + ';height:100%;width:' + Math.min(percentuale, 100) + '%;transition:width 0.4s"></div>';
    html += '</div>';

    // Valori in griglia 3 colonne (mobile friendly)
    html += '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center">';

    // Risparmiato
    html += '<div style="padding:10px 6px;background:rgba(76,175,80,0.1);border-radius:8px">';
    html += '<div style="font-size:0.7em;color:#2e7d32;font-weight:600">Risparmiato</div>';
    html += '<div style="font-size:0.95em;font-weight:800;color:#2e7d32;margin-top:2px">' + formatEuro(risparmiato) + '</div>';
    html += '</div>';

    // Obiettivo
    html += '<div style="padding:10px 6px;background:rgba(33,150,243,0.1);border-radius:8px">';
    html += '<div style="font-size:0.7em;color:#1976d2;font-weight:600">Obiettivo</div>';
    html += '<div style="font-size:0.95em;font-weight:800;color:#1976d2;margin-top:2px">' + formatEuro(obj.target) + '</div>';
    html += '</div>';

    // Mancante
    html += '<div style="padding:10px 6px;background:rgba(255,152,0,0.1);border-radius:8px">';
    html += '<div style="font-size:0.7em;color:#e65100;font-weight:600">Mancante</div>';
    html += '<div style="font-size:0.95em;font-weight:800;color:#e65100;margin-top:2px">' + formatEuro(mancante) + '</div>';
    html += '</div>';

    html += '</div>';

    // Status raggiunto
    if (percentuale >= 100) {
      html += '<div style="text-align:center;margin-top:10px;padding:8px;background:rgba(76,175,80,0.15);border-radius:8px;color:#2e7d32;font-weight:700;font-size:0.85em">🎉 OBIETTIVO RAGGIUNTO!</div>';
    }

    html += '</div></div>';
  });

  html += '</div>';
  container.innerHTML = html;
  
  // Aggiorna totale risparmiato (solo propri, non debiti partner)
  var totaleRisparmiato = DB.obiettivi.reduce(function(sum, obj) {
    var risparmioIniziale = obj.risparmiato || 0;
    var risparmioCalcolato = 0;
    if (obj.dataInizio) {
      var dataInizio = new Date(obj.dataInizio);
      var oggi = new Date();
      DB.transazioni.forEach(function(t) {
        var d = new Date(t.data);
        if (d >= dataInizio && d <= oggi) {
          var imp = parseFloat(t.importo) || 0;
          if (t.tipo === 'income' && !t.rimborsoPartner) {
            risparmioCalcolato += imp;
          } else if (t.tipo === 'expense' && !t.virtualRecovery) {
            if (t.condiviso) {
              risparmioCalcolato -= imp / 2;
            } else {
              risparmioCalcolato -= imp;
            }
          }
        }
      });
    }
    return sum + risparmioIniziale + risparmioCalcolato;
  }, 0);
  
  var totaleElements = document.querySelectorAll('#totaleRisparmiato');
  totaleElements.forEach(function(el) {
    if (el) el.textContent = formatEuro(totaleRisparmiato);
  });
}

function aggiornaProiezioni(capacitaRisparmio) {
  var container = document.getElementById('proiezioniGrid');
  if (!container) return;
  
  // Nascondi sezione proiezioni se non ci sono obiettivi o capacità <= 0
  var proiezioniSection = document.getElementById('proiezioniInvestimenti');
  if (!DB.obiettivi || DB.obiettivi.length === 0 || capacitaRisparmio <= 0) {
    if (proiezioniSection) proiezioniSection.style.display = 'none';
    return;
  }
  
  if (proiezioniSection) proiezioniSection.style.display = 'block';
  
  var html = '';
  var colors = [
    { bg: 'linear-gradient(135deg,#fff3e0,#ffe0b2)', text: '#e65100', border: '#ff9800' },
    { bg: 'linear-gradient(135deg,#e3f2fd,#bbdefb)', text: '#1976d2', border: '#2196f3' },
    { bg: 'linear-gradient(135deg,#f3e5f5,#e1bee7)', text: '#7b1fa2', border: '#9c27b0' },
    { bg: 'linear-gradient(135deg,#e8f5e9,#c8e6c9)', text: '#2e7d32', border: '#4caf50' }
  ];
  
  DB.obiettivi.slice(0, 4).forEach(function(obj, index) {
    var mancante = obj.target - obj.risparmiato;
    if (mancante > 0) {
      var mesiNecessari = Math.ceil(mancante / capacitaRisparmio);
      var color = colors[index % colors.length];
      
      html += '<div style="background:' + color.bg + ';padding:15px;border-radius:10px;text-align:center;border:2px solid ' + color.border + '">';
      html += '<div style="font-size:0.8em;color:' + color.text + ';font-weight:600;margin-bottom:4px">' + obj.icona + ' ' + obj.nome + ' in</div>';
      html += '<div style="font-size:1.6em;font-weight:900;color:' + color.text + '">' + mesiNecessari + ' mesi</div>';
      html += '</div>';
    } else {
      // Obiettivo già raggiunto
      html += '<div style="background:linear-gradient(135deg,#e8f5e9,#c8e6c9);padding:15px;border-radius:10px;text-align:center;border:2px solid #4caf50">';
      html += '<div style="font-size:0.8em;color:#2e7d32;font-weight:600;margin-bottom:4px">' + obj.icona + ' ' + obj.nome + '</div>';
      html += '<div style="font-size:1.4em;font-weight:900;color:#2e7d32">✅ Completato!</div>';
      html += '</div>';
    }
  });
  
  container.innerHTML = html;
}

// ========== GESTIONE MODAL OBIETTIVI ==========
function apriGestioneObiettivi() {
  document.getElementById('modalObiettivi').style.display = 'flex';
  aggiornaListaObiettiviModal();
  playSound('click');
}

function chiudiModalObiettivi() {
  document.getElementById('modalObiettivi').style.display = 'none';
  document.getElementById('formNuovoObiettivo').style.display = 'none';
  playSound('click');
}

function aggiornaListaObiettiviModal() {
  var container = document.getElementById('obiettiviListModal');
  if (!container) return;

  if (!DB.obiettivi || DB.obiettivi.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:30px;color:#7f8c8d">Nessun obiettivo impostato.<br><span style="font-size:0.9em">Clicca il pulsante qui sotto per aggiungerne uno!</span></div>';
    return;
  }

  var mesiNomi = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
  var html = '';

  DB.obiettivi.forEach(function(obj, index) {
    // Calcolo risparmio completo (manuale + calcolato)
    var risparmioIniziale = obj.risparmiato || 0;
    var risparmioCalcolato = 0;
    if (obj.dataInizio) {
      var dataInizio = new Date(obj.dataInizio);
      var oggi = new Date();
      DB.transazioni.forEach(function(t) {
        var d = new Date(t.data);
        if (d >= dataInizio && d <= oggi) {
          var imp = parseFloat(t.importo) || 0;
          if (t.tipo === 'income' && !t.rimborsoPartner) {
            risparmioCalcolato += imp;
          } else if (t.tipo === 'expense' && !t.virtualRecovery) {
            if (t.condiviso) {
              risparmioCalcolato -= imp / 2;
            } else {
              risparmioCalcolato -= imp;
            }
          }
        }
      });
    }
    var risparmiato = risparmioIniziale + risparmioCalcolato;

    var percentuale = obj.target > 0 ? ((risparmiato / obj.target) * 100).toFixed(1) : 0;
    var progressColor = percentuale < 30 ? '#e74c3c' : percentuale < 70 ? '#f39c12' : '#27ae60';
    var mancante = Math.max(0, obj.target - risparmiato);

    // Card obiettivo con design migliorato
    html += '<div style="background:linear-gradient(145deg, var(--card) 0%, rgba(255,255,255,0.02) 100%);padding:16px;border-radius:16px;margin-bottom:14px;border-left:5px solid ' + progressColor + ';box-shadow:0 4px 15px rgba(0,0,0,0.08)">';

    // Header: icona + nome + percentuale
    html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:14px">';
    html += '<div style="font-size:1.8em;width:50px;height:50px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,' + progressColor + '22,' + progressColor + '11);border-radius:12px;flex-shrink:0">' + obj.icona + '</div>';
    html += '<div style="flex:1;min-width:0">';
    html += '<div style="font-weight:700;font-size:1em;color:var(--text);margin-bottom:3px">' + obj.nome + '</div>';
    html += '<div style="font-size:0.8em;color:#888">Target: ' + formatEuro(obj.target) + '</div>';
    html += '</div>';
    html += '<div style="text-align:center;flex-shrink:0;padding:8px 12px;background:' + progressColor + '15;border-radius:10px">';
    html += '<div style="font-size:1.3em;font-weight:800;color:' + progressColor + '">' + percentuale + '%</div>';
    html += '</div>';
    html += '</div>';

    // Barra progresso
    html += '<div style="background:rgba(128,128,128,0.15);height:10px;border-radius:5px;overflow:hidden;margin-bottom:14px">';
    html += '<div style="background:linear-gradient(90deg,' + progressColor + ',' + progressColor + 'aa);height:100%;width:' + Math.min(percentuale, 100) + '%;border-radius:5px"></div>';
    html += '</div>';

    // Stats in griglia 2 colonne
    html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">';
    html += '<div style="padding:12px 8px;background:rgba(76,175,80,0.1);border-radius:10px;text-align:center">';
    html += '<div style="font-size:0.7em;color:#2e7d32;font-weight:600;text-transform:uppercase;letter-spacing:0.5px">Risparmiato</div>';
    html += '<div style="font-size:1.05em;font-weight:800;color:#2e7d32;margin-top:4px">' + formatEuro(risparmiato) + '</div>';
    html += '</div>';
    html += '<div style="padding:12px 8px;background:rgba(255,152,0,0.1);border-radius:10px;text-align:center">';
    html += '<div style="font-size:0.7em;color:#e65100;font-weight:600;text-transform:uppercase;letter-spacing:0.5px">Mancante</div>';
    html += '<div style="font-size:1.05em;font-weight:800;color:#e65100;margin-top:4px">' + formatEuro(mancante) + '</div>';
    html += '</div>';
    html += '</div>';

    // Date e pulsanti
    html += '<div style="display:flex;align-items:center;gap:8px">';
    if (obj.dataInizio || obj.dataFine) {
      html += '<div style="flex:1;display:flex;gap:6px;font-size:0.7em">';
      if (obj.dataInizio) {
        var dInizio = new Date(obj.dataInizio);
        html += '<span style="padding:4px 8px;background:rgba(33,150,243,0.1);border-radius:6px;color:#1976d2">📅 ' + dInizio.getDate() + '/' + (dInizio.getMonth()+1) + '/' + (dInizio.getFullYear()+'').slice(-2) + '</span>';
      }
      if (obj.dataFine) {
        var dFine = new Date(obj.dataFine);
        html += '<span style="padding:4px 8px;background:rgba(156,39,176,0.1);border-radius:6px;color:#7b1fa2">🏁 ' + dFine.getDate() + '/' + (dFine.getMonth()+1) + '/' + (dFine.getFullYear()+'').slice(-2) + '</span>';
      }
      html += '</div>';
    } else {
      html += '<div style="flex:1"></div>';
    }
    html += '<button onclick="modificaRisparmiato(' + index + ')" style="background:#3498db;color:white;border:none;width:38px;height:38px;border-radius:10px;cursor:pointer;font-size:1.1em;flex-shrink:0">✏️</button>';
    html += '<button onclick="eliminaObiettivo(' + index + ')" style="background:#e74c3c;color:white;border:none;width:38px;height:38px;border-radius:10px;cursor:pointer;font-size:1.1em;flex-shrink:0">🗑️</button>';
    html += '</div>';

    // Status raggiunto
    if (percentuale >= 100) {
      html += '<div style="text-align:center;margin-top:12px;padding:10px;background:linear-gradient(135deg,rgba(76,175,80,0.15),rgba(76,175,80,0.08));border-radius:10px;color:#2e7d32;font-weight:700;font-size:0.9em">🎉 OBIETTIVO RAGGIUNTO!</div>';
    }

    html += '</div>';
  });

  container.innerHTML = html;
}

function mostraFormNuovoObiettivo() {
  document.getElementById('formNuovoObiettivo').style.display = 'block';
  document.getElementById('obiettivoNome').value = '';
  document.getElementById('obiettivoTarget').value = '';
  document.getElementById('obiettivoRisparmiato').value = '0';

  // Imposta data inizio a oggi
  var oggi = new Date().toISOString().split('T')[0];
  var dataInizioInput = document.getElementById('obiettivoDataInizio');
  var dataFineInput = document.getElementById('obiettivoDataFine');
  if (dataInizioInput) dataInizioInput.value = oggi;
  if (dataFineInput) dataFineInput.value = '';

  playSound('click');
}

function annullaFormObiettivo() {
  document.getElementById('formNuovoObiettivo').style.display = 'none';
  playSound('click');
}

function salvaObiettivo() {
  var nome = document.getElementById('obiettivoNome').value.trim();
  var icona = document.getElementById('obiettivoIcona').value;
  var target = parseFloat(document.getElementById('obiettivoTarget').value) || 0;
  var risparmiato = parseFloat(document.getElementById('obiettivoRisparmiato').value) || 0;
  var dataInizio = document.getElementById('obiettivoDataInizio') ? document.getElementById('obiettivoDataInizio').value : null;
  var dataFine = document.getElementById('obiettivoDataFine') ? document.getElementById('obiettivoDataFine').value : null;

  if (!nome) {
    mostraToast('⚠️ Inserisci un nome per l\'obiettivo', 'warning');
    return;
  }

  if (target <= 0) {
    mostraToast('⚠️ Inserisci un target valido', 'warning');
    return;
  }

  // Validazione date
  if (dataFine && dataInizio && new Date(dataFine) <= new Date(dataInizio)) {
    mostraToast('⚠️ La data fine deve essere dopo la data inizio', 'warning');
    return;
  }

  if (!DB.obiettivi) {
    DB.obiettivi = [];
  }

  DB.obiettivi.push({
    id: Date.now(),
    nome: nome,
    icona: icona,
    target: target,
    risparmiato: risparmiato,
    dataInizio: dataInizio || new Date().toISOString().split('T')[0],
    dataFine: dataFine || null,
    creato: new Date().toISOString()
  });

  salvaDB();
  aggiornaListaObiettiviModal();
  aggiornaInvestimenti();
  annullaFormObiettivo();
  mostraToast('✅ Obiettivo aggiunto con successo!', 'success');
  playSound('success');
}

function modificaRisparmiato(index) {
  var obj = DB.obiettivi[index];
  var nuovoImporto = prompt('Quanto hai risparmiato finora per "' + obj.nome + '"?\n\nImporto attuale: €' + obj.risparmiato.toFixed(2), obj.risparmiato);
  
  if (nuovoImporto !== null) {
    var importo = parseFloat(nuovoImporto);
    if (!isNaN(importo) && importo >= 0) {
      DB.obiettivi[index].risparmiato = importo;
      salvaDB();
      aggiornaListaObiettiviModal();
      aggiornaInvestimenti();
      mostraToast('✅ Importo aggiornato!', 'success');
    } else {
      alert('Inserisci un importo valido');
    }
  }
}

function eliminaObiettivo(index) {
  var obj = DB.obiettivi[index];
  if (confirm('Vuoi eliminare l\'obiettivo "' + obj.nome + '"?')) {
    DB.obiettivi.splice(index, 1);
    salvaDB();
    aggiornaListaObiettiviModal();
    aggiornaInvestimenti();
    mostraToast('🗑️ Obiettivo eliminato', 'info');
  }
}

// ========== GESTIONE MULTI-CONTO ==========
function aggiornaComposizioneConti() {
  var container = document.getElementById('composizioneConti');
  if (!container) return;
  
  // Inizializza conti se non esistono
  if (!DB.conti) {
    DB.conti = {
      webank: 0,
      revolut: 0,
      paypal: 0,
      buoni_pasto: { saldo: 0, valoreUnitario: 10.50 },
      contanti: 0
    };
  }
  
  // Calcola saldi automaticamente dalle transazioni
  calcolaSaldiConti();
  
  var totale = DB.conti.webank + DB.conti.revolut + DB.conti.paypal + 
               (DB.conti.buoni_pasto.saldo * DB.conti.buoni_pasto.valoreUnitario) + 
               DB.conti.contanti;
  
  // NUOVO - Usa conti dinamici
  inizializzaContiDinamici();
  
  var conti = [];
  var colors = ['rgba(52, 152, 219, 0.9)', 'rgba(155, 89, 182, 0.9)', 'rgba(46, 204, 113, 0.9)', 'rgba(231, 76, 60, 0.9)', 'rgba(255, 152, 0, 0.9)'];
  var colorIndex = 0;
  
  // Calcola totale per i conti personalizzati
  var totalePersonalizzati = 0;
  DB.contiPersonalizzati.forEach(function(conto) {
    var saldo = DB.conti[conto.id] || 0;
    totalePersonalizzati += saldo;
  });
  
  var totale = totalePersonalizzati + (DB.conti.buoni_pasto.saldo * DB.conti.buoni_pasto.valoreUnitario);
  
  // Aggiungi conti personalizzati
  DB.contiPersonalizzati.forEach(function(conto) {
    var saldo = DB.conti[conto.id] || 0;
    conti.push({
      nome: conto.nome,
      icona: conto.icona,
      saldo: saldo,
      color: colors[colorIndex % colors.length],
      principale: conto.principale
    });
    colorIndex++;
  });
  
  // Aggiungi buoni pasto
  conti.push({ 
    nome: 'Buoni Pasto', 
    icona: '🎟️', 
    saldo: DB.conti.buoni_pasto.saldo * DB.conti.buoni_pasto.valoreUnitario,
    extra: DB.conti.buoni_pasto.saldo + ' buoni × €' + DB.conti.buoni_pasto.valoreUnitario.toFixed(2),
    color: 'rgba(241, 196, 15, 0.9)' 
  });
  
  var html = '';
  conti.forEach(function(conto) {
    var percentuale = totale > 0 ? ((conto.saldo / totale) * 100) : 0;
    var barWidth = Math.max(percentuale, 1); // Minimo 1% per visibilità
    
    html += '<div style="margin-bottom:12px">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">';
    html += '<div style="display:flex;align-items:center;gap:8px">';
    html += '<span style="font-size:1.1em">' + conto.icona + '</span>';
    html += '<span style="font-size:0.85em;font-weight:700;color:#fff">' + conto.nome;
    if (conto.principale) html += ' <span style="font-size:0.7em;opacity:0.8">(Principale)</span>';
    html += '</span>';
    html += '</div>';
    html += '<span style="font-size:1em;font-weight:900;color:#fff">' + formatEuro(conto.saldo) + '</span>';
    html += '</div>';
    
    if (conto.extra) {
      html += '<div style="font-size:0.7em;color:rgba(255,255,255,0.7);margin-bottom:4px;margin-left:32px">' + conto.extra + '</div>';
    }
    
    // Progress bar
    html += '<div style="background:rgba(255,255,255,0.2);height:6px;border-radius:3px;overflow:hidden">';
    html += '<div style="background:' + conto.color + ';height:100%;width:' + barWidth.toFixed(1) + '%;transition:width 0.5s ease"></div>';
    html += '</div>';
    
    // Percentuale
    html += '<div style="text-align:right;font-size:0.7em;color:rgba(255,255,255,0.7);margin-top:2px">' + percentuale.toFixed(1) + '%</div>';
    html += '</div>';
  });
  
  container.innerHTML = html;
}

function calcolaSaldiConti() {
  inizializzaContiDinamici();

  // Inizializza saldiIniziali se non esiste
  if (!DB.saldiIniziali) DB.saldiIniziali = {};

  // Inizializza saldi PARTENDO dai saldi iniziali (non da 0!)
  var saldi = {
    buoni_pasto: DB.saldiIniziali.buoni_pasto || 0 // numero buoni
  };

  DB.contiPersonalizzati.forEach(function(conto) {
    saldi[conto.id] = DB.saldiIniziali[conto.id] || 0;
  });
  
  // Calcola dai transazioni
  DB.transazioni.forEach(function(t) {
    var imp = parseFloat(t.importo) || 0;
    
    if (t.tipo === 'income') {
      // Entrate - aggiunge al conto di destinazione
      var dest = t.destinazione || t.metodo || 'carta';
      
      // Retrocompatibilità
      if (dest === 'carta') dest = 'webank';
      
      if (dest === 'buoni_pasto') {
        // Per i buoni, usa dettagliBuoni se disponibile
        if (t.dettagliBuoni && t.dettagliBuoni.quantita) {
          saldi.buoni_pasto += t.dettagliBuoni.quantita;
        }
      } else if (saldi.hasOwnProperty(dest)) {
        saldi[dest] += imp;
      }
    } else if (t.tipo === 'expense' && !t.virtualRecovery) {
      // Uscite - sottrae dal conto
      if (t.pagamentoMisto && t.metodiPagamento) {
        // Pagamento misto
        t.metodiPagamento.forEach(function(metodo) {
          var importo = parseFloat(metodo.importo) || 0;
          if (metodo.tipo === 'buoni_pasto') {
            saldi.buoni_pasto -= (metodo.quantita || 0);
          } else if (saldi.hasOwnProperty(metodo.tipo)) {
            saldi[metodo.tipo] -= importo;
          }
        });
      } else {
        // Pagamento singolo
        var metodo = t.metodo || 'carta';
        
        // Retrocompatibilità
        if (metodo === 'carta') metodo = 'webank';
        
        if (metodo === 'buoni_pasto') {
          // Scala i buoni in base all'importo e valore unitario
          var valoreUnitario = DB.conti.buoni_pasto.valoreUnitario || 10.50;
          var buoniUsati = Math.ceil(imp / valoreUnitario);
          saldi.buoni_pasto -= buoniUsati;
        } else if (saldi.hasOwnProperty(metodo)) {
          saldi[metodo] -= imp;
        }
      }
    } else if (t.tipo === 'partner_payment' && !t.virtualRecovery) {
      // Non tocca il tuo patrimonio
    }
  });
  
  // Aggiorna DB
  Object.keys(saldi).forEach(function(key) {
    if (key === 'buoni_pasto') {
      DB.conti.buoni_pasto.saldo = saldi.buoni_pasto;
    } else {
      DB.conti[key] = saldi[key];
    }
  });
}

function getContiList() {
  return [
    { value: 'webank', label: '💳 WeBank (Principale)', default: true },
    { value: 'revolut', label: '🌐 Revolut' },
    { value: 'paypal', label: '💰 PayPal' },
    { value: 'buoni_pasto', label: '🎟️ Buoni Pasto' },
    { value: 'contanti', label: '💵 Contanti' }
  ];
}

// ========== FUNZIONI MODAL PAGAMENTO MISTO ==========
var pagataDifferenzaDa = 'io'; // default

function checkMetodoPagamento() {
  // Se seleziona buoni, suggerisci pagamento misto
  var metodo = document.getElementById('tmetodo').value;
  var mistoCheckbox = document.getElementById('tpagamentoMisto');
  var section = document.getElementById('pagamentoMistoSection');
  var checkIcon = document.getElementById('mistoCheckIcon');

  // NUOVO: Aggiorna visibilità e testi dinamici
  aggiornaVisibilitaPagamentoMisto();
  aggiornaTestiPagamentoMisto();

  // FIX: Se il metodo NON è buoni_pasto, nascondi e deseleziona pagamento misto
  if (metodo !== 'buoni_pasto') {
    if (mistoCheckbox && mistoCheckbox.checked) {
      mistoCheckbox.checked = false;
      if (checkIcon) checkIcon.style.display = 'none';
      if (section) section.style.display = 'none';
      // Nascondi anche il calcolo condivisione
      var calcDiv = document.getElementById('mistoCondivisoCalcolo');
      if (calcDiv) calcDiv.style.display = 'none';
      // Aggiorna visual checkbox
      aggiornaVisualCheckbox();
    }
  } else if (!mistoCheckbox.checked) {
    // Suggerimento visivo per buoni_pasto
    var mistoGroup = mistoCheckbox.closest('.form-group');
    if (mistoGroup) {
      mistoGroup.style.animation = 'pulse 0.5s';
      setTimeout(function() {
        if (mistoGroup) mistoGroup.style.animation = '';
      }, 500);
    }
  }
}

// Variabile per salvare il metodo di pagamento precedente
var metodoPagamentoPrecedente = 'webank';

function togglePagamentoMistoCheckbox() {
  var checkbox = document.getElementById('tpagamentoMisto');
  var checkIcon = document.getElementById('mistoCheckIcon');
  var section = document.getElementById('pagamentoMistoSection');
  var tmetodo = document.getElementById('tmetodo');

  checkbox.checked = !checkbox.checked;

  if (checkbox.checked) {
    checkIcon.style.display = 'block';
    section.style.display = 'block';

    // Salva il metodo di pagamento corrente prima di cambiarlo
    if (tmetodo && tmetodo.value !== 'buoni_pasto') {
      metodoPagamentoPrecedente = tmetodo.value;
    }

    // Imposta buoni come metodo principale
    if (tmetodo) tmetodo.value = 'buoni_pasto';

    // Inizializza impostazioni buoni se non esistono
    if (!DB.impostazioniBuoni) {
      DB.impostazioniBuoni = {
        valoreUnitario: 10.50,
        quantitaMensile: 12,
        giornoAccredito: 1
      };
    }

    // Aggiorna saldo buoni
    var saldoBuoni = DB.conti.buoni_pasto ? DB.conti.buoni_pasto.saldo : 0;
    if (document.getElementById('tmistoSaldoBuoni')) {
      document.getElementById('tmistoSaldoBuoni').textContent = saldoBuoni;
    }

    // Imposta valore unitario corretto
    var valoreUnitario = DB.conti.buoni_pasto ? DB.conti.buoni_pasto.valoreUnitario : 10.50;

    // Calcola differenza
    calcolaDifferenzaMista();
  } else {
    checkIcon.style.display = 'none';
    section.style.display = 'none';
    // Nascondi anche il calcolo condivisione
    var calcDiv = document.getElementById('mistoCondivisoCalcolo');
    if (calcDiv) calcDiv.style.display = 'none';

    // Ripristina il metodo di pagamento precedente
    if (tmetodo) {
      tmetodo.value = metodoPagamentoPrecedente || 'webank';
    }
  }

  // NUOVO - Aggiorna visual checkbox per mostrare stato disabilitato/abilitato
  aggiornaVisualCheckbox();

  playSound('click');
}

function calcolaDifferenzaMista() {
  var importoTotale = parseFloat(document.getElementById('timp').value) || 0;
  var quantitaBuoni = parseInt(document.getElementById('tmistoQuantitaBuoni').value) || 0;
  
  // Prendi valore unitario dal DB
  var valoreUnitario = 10.50;
  if (DB.conti && DB.conti.buoni_pasto && DB.conti.buoni_pasto.valoreUnitario) {
    valoreUnitario = DB.conti.buoni_pasto.valoreUnitario;
  } else if (DB.impostazioniBuoni && DB.impostazioniBuoni.valoreUnitario) {
    valoreUnitario = DB.impostazioniBuoni.valoreUnitario;
  }
  
  var valoreBuoni = quantitaBuoni * valoreUnitario;
  var differenza = importoTotale - valoreBuoni;
  
  // Aggiorna UI
  if (document.getElementById('tmistoValoreBuoni')) {
    document.getElementById('tmistoValoreBuoni').textContent = 
      quantitaBuoni + ' buon' + (quantitaBuoni === 1 ? 'o' : 'i') + ' = €' + valoreBuoni.toFixed(2);
  }
  
  if (document.getElementById('tmistoDifferenza')) {
    document.getElementById('tmistoDifferenza').value = differenza.toFixed(2);
    
    // Colora in base al valore
    var diffInput = document.getElementById('tmistoDifferenza');
    if (differenza < 0) {
      diffInput.style.background = '#ffebee';
      diffInput.style.color = '#c62828';
    } else if (differenza === 0) {
      diffInput.style.background = '#e8f5e9';
      diffInput.style.color = '#2e7d32';
    } else {
      diffInput.style.background = '#ecf0f1';
      diffInput.style.color = '#2c3e50';
    }
  }
  
  // NUOVO - Calcola e mostra recupero se condiviso
  aggiornaCalcoloCondivisoMisto();
}

function aggiornaCalcoloCondivisoMisto() {
  var calcDiv = document.getElementById('mistoCondivisoCalcolo');
  var calcContent = document.getElementById('mistoCondivisoCalcoloContent');
  if (!calcDiv || !calcContent) return;
  
  // Verifica se pagamento misto è attivo
  var pagamentoMisto = document.getElementById('tpagamentoMisto');
  if (!pagamentoMisto || !pagamentoMisto.checked) {
    calcDiv.style.display = 'none';
    return;
  }
  
  // Usa il checkbox generale "Spesa Condivisa"
  var isCondiviso = document.getElementById('tcondiviso') ? document.getElementById('tcondiviso').checked : false;
  
  if (!isCondiviso) {
    calcDiv.style.display = 'none';
    return;
  }
  
  // Mostra il div
  calcDiv.style.display = 'block';
  
  var importoTotale = parseFloat(document.getElementById('timp').value) || 0;
  var quantitaBuoni = parseInt(document.getElementById('tmistoQuantitaBuoni').value) || 0;
  var valoreUnitario = 10.50;
  if (DB.conti && DB.conti.buoni_pasto) valoreUnitario = DB.conti.buoni_pasto.valoreUnitario;
  else if (DB.impostazioniBuoni) valoreUnitario = DB.impostazioniBuoni.valoreUnitario;
  
  var valoreBuoni = quantitaBuoni * valoreUnitario;
  var differenza = importoTotale - valoreBuoni;
  
  var metaTotale = importoTotale / 2;
  
  // Chi paga la differenza?
  var tuoPagamento = valoreBuoni;
  var matildePagamento = 0;
  
  if (pagataDifferenzaDa === 'io') {
    tuoPagamento += differenza;
  } else {
    matildePagamento = differenza;
  }
  
  var tuoRecupero = tuoPagamento - metaTotale;
  var matildeRecupero = matildePagamento - metaTotale;
  
  var html = '<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;font-size:0.85em;margin-bottom:6px">';
  html += '<div>• Totale: <strong>€' + importoTotale.toFixed(2) + '</strong></div>';
  html += '<div>• A testa: <strong>€' + metaTotale.toFixed(2) + '</strong></div>';
  html += '</div>';
  html += '<div style="padding-top:6px;border-top:1px solid rgba(0,0,0,0.1);font-size:0.85em;margin-bottom:6px">';
  html += '<div>• Tu paghi: €' + tuoPagamento.toFixed(2) + '</div>';
  html += '<div>• Partner paga: €' + matildePagamento.toFixed(2) + '</div>';
  html += '</div>';
  
  if (tuoRecupero > 0) {
    html += '<div style="padding:6px;background:#e8f5e9;border-radius:4px;text-align:center;font-weight:700;color:#2e7d32">✅ Partner ti deve: €' + tuoRecupero.toFixed(2) + '</div>';
  } else if (tuoRecupero < 0) {
    html += '<div style="padding:6px;background:#fff3e0;border-radius:4px;text-align:center;font-weight:700;color:#e65100">⚠️ Tu devi a Partner: €' + Math.abs(tuoRecupero).toFixed(2) + '</div>';
  } else {
    html += '<div style="padding:6px;background:#e3f2fd;border-radius:4px;text-align:center;font-weight:700;color:#1976d2">✓ Pari - nessun recupero</div>';
  }
  
  calcContent.innerHTML = html;
}

function selezionaPagataDa(chi) {
  pagataDifferenzaDa = chi;
  
  // Aggiorna UI radio buttons
  var ioDot = document.getElementById('radioIoDot');
  var matildeDot = document.getElementById('radioPartnerDot');
  var ioCard = document.getElementById('pagataDaIo');
  var matildeCard = document.getElementById('pagataDaPartner');
  
  if (chi === 'io') {
    if (ioDot) ioDot.style.display = 'block';
    if (matildeDot) matildeDot.style.display = 'none';
    if (ioCard) {
      ioCard.style.borderColor = '#3498db';
      ioCard.style.background = '#e3f2fd';
    }
    if (matildeCard) {
      matildeCard.style.borderColor = 'var(--border)';
      matildeCard.style.background = 'var(--card)';
    }
  } else {
    if (ioDot) ioDot.style.display = 'none';
    if (matildeDot) matildeDot.style.display = 'block';
    if (ioCard) {
      ioCard.style.borderColor = 'var(--border)';
      ioCard.style.background = 'var(--card)';
    }
    if (matildeCard) {
      matildeCard.style.borderColor = '#9c27b0';
      matildeCard.style.background = '#f3e5f5';
    }
  }
  
  // NUOVO - Ricalcola quando cambia chi paga
  aggiornaCalcoloCondivisoMisto();
  
  playSound('click');
}

// ========== FUNZIONI MODAL DESTINAZIONE ENTRATE ==========
function checkDestinazioneSelezionata() {
  var dest = document.getElementById('tdestinazione');
  var dettagliBuoniGroup = document.getElementById('dettagliBuoniGroup');
  var timpInput = document.getElementById('timp');
  var categoriaSelect = document.getElementById('tcat');
  var categoriaGroup = document.getElementById('categoriaGroup');
  var importoGroup = document.getElementById('importoGroup');

  if (!dest || !dettagliBuoniGroup || !timpInput) return;

  if (dest.value === 'buoni_pasto') {
    dettagliBuoniGroup.style.display = 'block';

    // NASCONDE categoria e importo per i buoni pasto (sono calcolati automaticamente)
    if (categoriaGroup) categoriaGroup.style.display = 'none';
    if (importoGroup) importoGroup.style.display = 'none';

    // RIMUOVE required per evitare errore "invalid form control not focusable"
    if (categoriaSelect) categoriaSelect.removeAttribute('required');
    if (timpInput) timpInput.removeAttribute('required');

    // Auto-seleziona categoria "Buoni Pasto"
    if (categoriaSelect) {
      categoriaSelect.value = 'Buoni Pasto';
    }

    // Imposta valori default dalle impostazioni
    if (DB.impostazioniBuoni) {
      if (document.getElementById('tbuoniQuantita')) {
        document.getElementById('tbuoniQuantita').value = DB.impostazioniBuoni.quantitaMensile || 12;
      }
      if (document.getElementById('tbuoniValore')) {
        document.getElementById('tbuoniValore').value = DB.impostazioniBuoni.valoreUnitario || 10.50;
      }
    }

    calcolaImportoBuoni();
  } else {
    dettagliBuoniGroup.style.display = 'none';

    // MOSTRA categoria e importo per altri tipi di entrata
    if (categoriaGroup) categoriaGroup.style.display = 'block';
    if (importoGroup) importoGroup.style.display = 'block';

    // RIPRISTINA required quando i campi sono visibili
    if (categoriaSelect) categoriaSelect.setAttribute('required', '');
    if (timpInput) timpInput.setAttribute('required', '');

    timpInput.readOnly = false;
    timpInput.style.background = '';

    // Riabilita categoria
    if (categoriaSelect) {
      categoriaSelect.disabled = false;
      categoriaSelect.style.opacity = '1';
      categoriaSelect.style.cursor = '';
      categoriaSelect.style.background = '';
    }
  }
}

function calcolaImportoBuoni() {
  var quantita = parseInt(document.getElementById('tbuoniQuantita').value) || 0;
  var valore = parseFloat(document.getElementById('tbuoniValore').value) || 0;
  var totale = quantita * valore;
  
  if (document.getElementById('tbuoniTotale')) {
    document.getElementById('tbuoniTotale').textContent = '€' + totale.toFixed(2);
  }
  if (document.getElementById('timp')) {
    document.getElementById('timp').value = totale.toFixed(2);
  }
}

// ========== IMPOSTAZIONI BUONI PASTO ==========
function salvaImpostazioniBuoni() {
  // Funzione legacy - ora si usa salvaModificaBuoni() dal modal
  var valoreEl = document.getElementById('settingsBuoniValore');
  var quantitaEl = document.getElementById('settingsBuoniQuantita');
  var giornoEl = document.getElementById('settingsBuoniGiorno');

  if (!valoreEl || !quantitaEl || !giornoEl) return;

  var valore = parseFloat(valoreEl.value) || 10.50;
  var quantita = parseInt(quantitaEl.value) || 12;
  var giorno = parseInt(giornoEl.value) || 1;

  if (!DB.impostazioniBuoni) DB.impostazioniBuoni = {};

  DB.impostazioniBuoni.valoreUnitario = valore;
  DB.impostazioniBuoni.quantitaMensile = quantita;
  DB.impostazioniBuoni.giornoAccredito = giorno;

  // Aggiorna anche valore nel conto
  if (!DB.conti) DB.conti = { webank: 0, revolut: 0, paypal: 0, buoni_pasto: { saldo: 0, valoreUnitario: 10.50 }, contanti: 0 };
  if (!DB.conti.buoni_pasto) DB.conti.buoni_pasto = { saldo: 0, valoreUnitario: 10.50 };
  DB.conti.buoni_pasto.valoreUnitario = valore;

  salvaDB();
  mostraToast('✅ Impostazioni buoni salvate!', 'success');
  playSound('success');

  // Aggiorna riepilogo
  aggiornaRiepilogoBuoni();
}

function aggiornaRiepilogoBuoni() {
  var valoreEl = document.getElementById('settingsBuoniValore');
  var quantitaEl = document.getElementById('settingsBuoniQuantita');
  var giornoEl = document.getElementById('settingsBuoniGiorno');

  // Se gli elementi non esistono, usa i valori dal DB
  var valore, quantita, giorno;
  if (valoreEl && quantitaEl && giornoEl) {
    valore = parseFloat(valoreEl.value) || 10.50;
    quantita = parseInt(quantitaEl.value) || 12;
    giorno = parseInt(giornoEl.value) || 1;
  } else {
    valore = (DB.impostazioniBuoni && DB.impostazioniBuoni.valoreUnitario) || 10.50;
    quantita = (DB.impostazioniBuoni && DB.impostazioniBuoni.quantitaMensile) || 12;
    giorno = (DB.impostazioniBuoni && DB.impostazioniBuoni.giornoAccredito) || 1;
  }
  
  var totale = valore * quantita;
  if (document.getElementById('riepilogoBuoniTotale')) {
    document.getElementById('riepilogoBuoniTotale').textContent = '€' + totale.toFixed(2);
  }
  
  // Calcola prossimo accredito
  var oggi = new Date();
  var prossimoMese = new Date(oggi.getFullYear(), oggi.getMonth(), giorno);
  
  if (oggi.getDate() >= giorno) {
    prossimoMese.setMonth(prossimoMese.getMonth() + 1);
  }
  
  var mesiNomi = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
  if (document.getElementById('riepilogoBuoniProssimo')) {
    document.getElementById('riepilogoBuoniProssimo').textContent = 
      prossimoMese.getDate() + ' ' + mesiNomi[prossimoMese.getMonth()] + ' ' + prossimoMese.getFullYear();
  }
}

function caricaImpostazioniBuoni() {
  // Carica impostazioni salvate
  if (DB.impostazioniBuoni) {
    if (document.getElementById('settingsBuoniValore')) {
      document.getElementById('settingsBuoniValore').value = DB.impostazioniBuoni.valoreUnitario || 10.50;
    }
    if (document.getElementById('settingsBuoniQuantita')) {
      document.getElementById('settingsBuoniQuantita').value = DB.impostazioniBuoni.quantitaMensile || 12;
    }
    if (document.getElementById('settingsBuoniGiorno')) {
      document.getElementById('settingsBuoniGiorno').value = DB.impostazioniBuoni.giornoAccredito || 1;
    }
    aggiornaRiepilogoBuoni();
  }
}

function apriModalModificaBuoni() {
  // Carica valori attuali
  var numBuoni = DB.conti.buoni_pasto ? DB.conti.buoni_pasto.saldo : 0;
  var valoreUnitario = DB.conti.buoni_pasto ? DB.conti.buoni_pasto.valoreUnitario : 10.50;
  var quantitaMensile = (DB.impostazioniBuoni && DB.impostazioniBuoni.quantitaMensile) ? DB.impostazioniBuoni.quantitaMensile : 12;
  var giornoAccredito = (DB.impostazioniBuoni && DB.impostazioniBuoni.giornoAccredito) ? DB.impostazioniBuoni.giornoAccredito : 1;

  document.getElementById('buoniSaldoAttuale').value = numBuoni;
  document.getElementById('buoniValoreUnitario').value = valoreUnitario;
  document.getElementById('buoniQuantitaMensile').value = quantitaMensile;
  document.getElementById('buoniGiornoAccredito').value = giornoAccredito;

  aggiornaRiepilogoModalBuoni();
  document.getElementById('modalBuoniPasto').classList.add('active');
  playSound('click');
}

function chiudiModalBuoni() {
  document.getElementById('modalBuoniPasto').classList.remove('active');
  playSound('click');
}

function aggiornaRiepilogoModalBuoni() {
  var numBuoni = parseInt(document.getElementById('buoniSaldoAttuale').value) || 0;
  var valoreUnitario = parseFloat(document.getElementById('buoniValoreUnitario').value) || 10.50;
  var quantitaMensile = parseInt(document.getElementById('buoniQuantitaMensile').value) || 12;

  var valoreTotale = numBuoni * valoreUnitario;
  var entrataMensile = quantitaMensile * valoreUnitario;

  var riepilogo = document.getElementById('buoniRiepilogoModal');
  if (riepilogo) {
    riepilogo.innerHTML = '<div style="font-size:0.85em;color:#7f8c8d">' +
      '💰 Valore attuale: <strong style="color:#ff9800">€' + valoreTotale.toFixed(2) + '</strong><br>' +
      '📅 Entrata mensile: <strong style="color:#ff9800">€' + entrataMensile.toFixed(2) + '</strong>' +
      '</div>';
  }
}

function salvaModificaBuoni() {
  var numBuoni = parseInt(document.getElementById('buoniSaldoAttuale').value) || 0;
  var valoreUnitario = parseFloat(document.getElementById('buoniValoreUnitario').value) || 10.50;
  var quantitaMensile = parseInt(document.getElementById('buoniQuantitaMensile').value) || 12;
  var giornoAccredito = parseInt(document.getElementById('buoniGiornoAccredito').value) || 1;

  // Salva nel conto buoni_pasto
  if (!DB.conti) DB.conti = {};
  if (!DB.conti.buoni_pasto) DB.conti.buoni_pasto = { saldo: 0, valoreUnitario: 10.50 };
  DB.conti.buoni_pasto.saldo = numBuoni;
  DB.conti.buoni_pasto.valoreUnitario = valoreUnitario;

  // Salva impostazioni mensili
  if (!DB.impostazioniBuoni) DB.impostazioniBuoni = {};
  DB.impostazioniBuoni.valoreUnitario = valoreUnitario;
  DB.impostazioniBuoni.quantitaMensile = quantitaMensile;
  DB.impostazioniBuoni.giornoAccredito = giornoAccredito;

  salvaDB();
  chiudiModalBuoni();
  aggiornaListaConti();
  aggiornaDashboard();
  mostraToast('✅ Buoni pasto aggiornati!', 'success');
  playSound('success');
}

// ========== GESTIONE CONTI DINAMICA ==========
var iconeDisponibiliArray = ['💳','🌐','💰','🏦','💵','💶','💷','💴','🔵','🟢','🟣','🟡','🔴','⭐','💎','🎯'];
var contoInModifica = null;

function inizializzaContiDinamici() {
  // Migra vecchi dati se esistono
  if (!DB.contiPersonalizzati && DB.nomiConti) {
    DB.contiPersonalizzati = [
      { id: 'webank', nome: DB.nomiConti.conto1 || 'WeBank', icona: '💳', principale: true },
      { id: 'revolut', nome: DB.nomiConti.conto2 || 'Revolut', icona: '🌐', principale: false },
      { id: 'paypal', nome: DB.nomiConti.conto3 || 'PayPal', icona: '💰', principale: false },
      { id: 'contanti', nome: DB.nomiConti.contanti || 'Contanti', icona: '💵', principale: false }
    ];
    delete DB.nomiConti; // Rimuovi vecchia struttura
    salvaDB();
  }
  
  // Assicura struttura default
  if (!DB.contiPersonalizzati || DB.contiPersonalizzati.length === 0) {
    DB.contiPersonalizzati = [
      { id: 'webank', nome: 'WeBank', icona: '💳', principale: true },
      { id: 'revolut', nome: 'Revolut', icona: '🌐', principale: false },
      { id: 'paypal', nome: 'PayPal', icona: '💰', principale: false },
      { id: 'contanti', nome: 'Contanti', icona: '💵', principale: false }
    ];
    salvaDB();
  }
}

function aggiornaListaConti() {
  var container = document.getElementById('listaContiDinamica');
  if (!container) return;

  inizializzaContiDinamici();

  var html = '';

  // Conti personalizzati con drag & drop
  DB.contiPersonalizzati.forEach(function(conto, index) {
    var isPrincipale = conto.principale;

    var bgColor = isPrincipale ? 'background:linear-gradient(135deg,rgba(255,193,7,0.1),rgba(255,193,7,0.05));border:2px solid #ffc107' : 'background:var(--card);border:2px solid var(--border)';

    html += '<div class="conto-draggable" draggable="true" data-index="' + index + '" data-id="' + conto.id + '" style="' + bgColor + ';padding:10px 12px;border-radius:12px;margin-bottom:8px;transition:all 0.2s">';

    // Riga principale: drag handle + icona + nome + pulsanti
    html += '<div style="display:flex;align-items:center;gap:8px">';
    html += '<div class="drag-handle" style="color:#a1a1aa;font-size:1.4em;cursor:grab;padding:8px;margin:-8px;touch-action:none">⠿</div>';
    html += '<div style="font-size:1.3em">' + conto.icona + '</div>';
    html += '<div style="flex:1;font-weight:600;font-size:0.9em;color:var(--text)">' + conto.nome + (isPrincipale ? ' <span style="color:#ffc107">⭐</span>' : '') + '</div>';
    html += '<button onclick="event.stopPropagation();apriModalModificaConto(\'' + conto.id + '\')" style="background:#3498db;color:#fff;border:none;width:32px;height:32px;border-radius:6px;cursor:pointer;font-size:0.85em">⚙️</button>';
    html += '<button onclick="event.stopPropagation();eliminaConto(\'' + conto.id + '\')" style="background:#e74c3c;color:#fff;border:none;width:32px;height:32px;border-radius:6px;cursor:pointer;font-size:0.85em">🗑️</button>';
    html += '</div>';

    html += '</div>';
  });
  
  // Buoni Pasto - ora modificabile
  var hasTickets = DB.config && DB.config.ticketRestaurant && DB.config.ticketRestaurant.user;
  var partnerHasTickets = DB.config && DB.config.ticketRestaurant && DB.config.ticketRestaurant.partner;
  var anyoneHasTickets = hasTickets || partnerHasTickets;

  if (anyoneHasTickets) {
    var saldoBuoni = DB.conti.buoni_pasto ? (DB.conti.buoni_pasto.saldo * DB.conti.buoni_pasto.valoreUnitario) : 0;
    var numBuoni = DB.conti.buoni_pasto ? DB.conti.buoni_pasto.saldo : 0;
    var valoreUnitario = DB.conti.buoni_pasto ? DB.conti.buoni_pasto.valoreUnitario : 10.50;

    html += '<div style="background:linear-gradient(135deg,rgba(255,152,0,0.1),rgba(255,152,0,0.05));border:2px solid #ff9800;padding:12px;border-radius:12px;margin-bottom:10px">';
    html += '<div style="display:flex;align-items:center;gap:10px">';
    html += '<div style="width:26px"></div>'; // Spazio per allineamento con drag handle
    html += '<div style="font-size:1.4em;width:36px;text-align:center">🎟️</div>';
    html += '<div style="flex:1;min-width:0">';
    html += '<div style="font-weight:700;font-size:0.95em;color:var(--text)">Buoni Pasto</div>';
    html += '<div style="font-size:0.8em;color:#ff9800">' + numBuoni + ' × €' + valoreUnitario.toFixed(2) + ' = ' + formatEuro(saldoBuoni) + '</div>';
    html += '</div>';
    html += '<button onclick="apriModalModificaBuoni()" style="background:#ff9800;color:#fff;border:none;width:36px;height:36px;border-radius:8px;cursor:pointer;font-size:0.9em;flex-shrink:0">⚙️</button>';
    html += '</div>';
    html += '</div>';
  }
  
  container.innerHTML = html;

  // Inizializza drag & drop per i conti
  inizializzaDragDropConti();
}

// Variabili per drag & drop
var contoTrascinato = null;
var touchStartY = 0;
var touchCurrentTarget = null;
var isDraggingConto = false;

function inizializzaDragDropConti() {
  var items = document.querySelectorAll('.conto-draggable');

  items.forEach(function(item) {
    // ========== EVENTI MOUSE (Desktop) ==========
    item.addEventListener('dragstart', function(e) {
      contoTrascinato = this;
      this.style.opacity = '0.5';
      e.dataTransfer.effectAllowed = 'move';
    });

    item.addEventListener('dragend', function(e) {
      this.style.opacity = '1';
      contoTrascinato = null;
      // Rimuovi tutti gli stili di dragover
      document.querySelectorAll('.conto-draggable').forEach(function(el) {
        el.style.borderTop = '';
        el.style.borderBottom = '';
      });
    });

    item.addEventListener('dragover', function(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';

      if (this !== contoTrascinato) {
        var rect = this.getBoundingClientRect();
        var midY = rect.top + rect.height / 2;

        // Rimuovi stili precedenti
        document.querySelectorAll('.conto-draggable').forEach(function(el) {
          el.style.borderTop = '';
          el.style.borderBottom = '';
        });

        // Mostra indicatore di drop
        if (e.clientY < midY) {
          this.style.borderTop = '3px solid #667eea';
        } else {
          this.style.borderBottom = '3px solid #667eea';
        }
      }
    });

    item.addEventListener('drop', function(e) {
      e.preventDefault();

      if (this !== contoTrascinato && contoTrascinato) {
        var fromIndex = parseInt(contoTrascinato.getAttribute('data-index'));
        var toIndex = parseInt(this.getAttribute('data-index'));

        var rect = this.getBoundingClientRect();
        var midY = rect.top + rect.height / 2;

        // Aggiusta l'indice se stiamo droppando nella metà inferiore
        if (e.clientY > midY) {
          toIndex++;
        }

        // Riordina l'array
        var elemento = DB.contiPersonalizzati.splice(fromIndex, 1)[0];
        if (fromIndex < toIndex) toIndex--;
        DB.contiPersonalizzati.splice(toIndex, 0, elemento);

        salvaDB();
        aggiornaListaConti();
        aggiornaComposizioneConti(); // Sincronizza ordine con dashboard
        mostraToast('✅ Ordine conti aggiornato', 'success');
        playSound('click');
      }

      // Rimuovi stili
      this.style.borderTop = '';
      this.style.borderBottom = '';
    });

  });

  // ========== EVENTI TOUCH (Mobile) - Attaccati al drag handle ==========
  var dragHandles = document.querySelectorAll('.conto-draggable .drag-handle');

  dragHandles.forEach(function(handle) {
    var item = handle.closest('.conto-draggable');

    handle.addEventListener('touchstart', function(e) {
      e.preventDefault(); // Blocca scroll

      contoTrascinato = item;
      touchStartY = e.touches[0].clientY;
      isDraggingConto = true;

      // Stile MOLTO evidente per la card selezionata
      item.style.transform = 'scale(1.05)';
      item.style.zIndex = '1000';
      item.style.boxShadow = '0 0 0 3px #667eea, 0 12px 35px rgba(102, 126, 234, 0.5)';
      item.style.background = 'linear-gradient(135deg, rgba(102, 126, 234, 0.3), rgba(102, 126, 234, 0.15))';
      item.style.transition = 'none';

      // Handle evidenziato
      handle.style.color = '#fff';
      handle.style.background = '#667eea';
      handle.style.borderRadius = '6px';
      handle.style.transform = 'scale(1.3)';

      // Vibrazione feedback
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }
    }, { passive: false });

    handle.addEventListener('touchmove', function(e) {
      if (!isDraggingConto || !contoTrascinato) return;
      e.preventDefault();

      var touch = e.touches[0];

      // Trova l'elemento sotto il dito
      contoTrascinato.style.visibility = 'hidden';
      var elementoSotto = document.elementFromPoint(touch.clientX, touch.clientY);
      contoTrascinato.style.visibility = 'visible';

      // Rimuovi stili precedenti da tutti
      document.querySelectorAll('.conto-draggable').forEach(function(el) {
        el.style.borderTop = '';
        el.style.borderBottom = '';
      });

      // Trova il .conto-draggable più vicino
      if (elementoSotto) {
        var contoSotto = elementoSotto.closest('.conto-draggable');

        if (contoSotto && contoSotto !== contoTrascinato) {
          touchCurrentTarget = contoSotto;
          var rect = contoSotto.getBoundingClientRect();
          var midY = rect.top + rect.height / 2;

          if (touch.clientY < midY) {
            contoSotto.style.borderTop = '3px solid #667eea';
          } else {
            contoSotto.style.borderBottom = '3px solid #667eea';
          }
        }
      }
    }, { passive: false });

    handle.addEventListener('touchend', function(e) {
      if (!isDraggingConto || !contoTrascinato) return;

      var touch = e.changedTouches[0];

      // Ripristina stili card
      contoTrascinato.style.transform = '';
      contoTrascinato.style.zIndex = '';
      contoTrascinato.style.boxShadow = '';
      contoTrascinato.style.background = '';
      contoTrascinato.style.transition = '';

      // Ripristina stili handle
      handle.style.color = '';
      handle.style.background = '';
      handle.style.borderRadius = '';
      handle.style.transform = '';

      // Rimuovi tutti gli indicatori
      document.querySelectorAll('.conto-draggable').forEach(function(el) {
        el.style.borderTop = '';
        el.style.borderBottom = '';
      });

      // Esegui lo spostamento se abbiamo un target valido
      if (touchCurrentTarget && touchCurrentTarget !== contoTrascinato) {
        var fromIndex = parseInt(contoTrascinato.getAttribute('data-index'));
        var toIndex = parseInt(touchCurrentTarget.getAttribute('data-index'));

        var rect = touchCurrentTarget.getBoundingClientRect();
        var midY = rect.top + rect.height / 2;

        if (touch.clientY > midY) {
          toIndex++;
        }

        // Riordina l'array
        var elemento = DB.contiPersonalizzati.splice(fromIndex, 1)[0];
        if (fromIndex < toIndex) toIndex--;
        DB.contiPersonalizzati.splice(toIndex, 0, elemento);

        salvaDB();
        aggiornaListaConti();
        aggiornaComposizioneConti();
        mostraToast('✅ Ordine conti aggiornato', 'success');
        playSound('click');

        if (navigator.vibrate) {
          navigator.vibrate(100);
        }
      }

      // Reset
      contoTrascinato = null;
      touchCurrentTarget = null;
      isDraggingConto = false;
    });

    handle.addEventListener('touchcancel', function(e) {
      if (contoTrascinato) {
        contoTrascinato.style.transform = '';
        contoTrascinato.style.zIndex = '';
        contoTrascinato.style.boxShadow = '';
        contoTrascinato.style.background = '';
        contoTrascinato.style.transition = '';
      }

      handle.style.color = '';
      handle.style.background = '';
      handle.style.borderRadius = '';
      handle.style.transform = '';

      document.querySelectorAll('.conto-draggable').forEach(function(el) {
        el.style.borderTop = '';
        el.style.borderBottom = '';
      });

      contoTrascinato = null;
      touchCurrentTarget = null;
      isDraggingConto = false;
    });
  });
}

function apriModalAggiuntaConto() {
  contoInModifica = null;
  document.getElementById('modalContoTitolo').textContent = '➕ Aggiungi Conto';
  document.getElementById('contoId').value = '';
  document.getElementById('contoNome').value = '';
  document.getElementById('contoIcona').value = '';
  document.getElementById('contoPrincipale').checked = false;
  document.getElementById('iconaSelezionata').textContent = '❓';
  document.getElementById('principaleCheckIcon').style.display = 'none';
  document.getElementById('principaleCheckbox').style.background = '#fff';
  document.getElementById('contoSaldoAttuale').value = '0';
  document.getElementById('contoSaldoAttuale').dataset.saldoTransazioni = '0';
  
  // Popola icone
  var iconeContainer = document.getElementById('iconeDisponibili');
  iconeContainer.innerHTML = '';
  iconeDisponibiliArray.forEach(function(icona) {
    var btn = document.createElement('div');
    btn.textContent = icona;
    btn.style.cssText = 'font-size:1.5em;padding:8px;cursor:pointer;border-radius:6px;text-align:center;transition:all 0.2s';
    btn.onmouseover = function() { this.style.background = 'rgba(102,126,234,0.2)'; };
    btn.onmouseout = function() { this.style.background = ''; };
    btn.onclick = function() { selezionaIcona(icona); };
    iconeContainer.appendChild(btn);
  });
  
  document.getElementById('modalConto').classList.add('active');
}

function apriModalModificaConto(id) {
  var conto = DB.contiPersonalizzati.find(function(c) { return c.id === id; });
  if (!conto) return;

  contoInModifica = id;
  document.getElementById('modalContoTitolo').textContent = '✏️ Modifica Conto';
  document.getElementById('contoId').value = id;
  document.getElementById('contoNome').value = conto.nome;
  document.getElementById('contoIcona').value = conto.icona;
  document.getElementById('contoPrincipale').checked = conto.principale;
  document.getElementById('iconaSelezionata').textContent = conto.icona;

  // Usa il saldo già calcolato in DB.conti
  var saldoAttuale = (DB.conti && DB.conti[id]) ? DB.conti[id] : 0;
  var saldoIniziale = (DB.saldiIniziali && DB.saldiIniziali[id]) ? DB.saldiIniziali[id] : 0;
  var saldoTransazioni = saldoAttuale - saldoIniziale;
  document.getElementById('contoSaldoAttuale').value = saldoAttuale.toFixed(2);
  document.getElementById('contoSaldoAttuale').dataset.saldoTransazioni = saldoTransazioni.toFixed(2);
  
  if (conto.principale) {
    document.getElementById('principaleCheckIcon').style.display = 'block';
    document.getElementById('principaleCheckbox').style.background = '#ffc107';
  } else {
    document.getElementById('principaleCheckIcon').style.display = 'none';
    document.getElementById('principaleCheckbox').style.background = '#fff';
  }
  
  // Popola icone
  var iconeContainer = document.getElementById('iconeDisponibili');
  iconeContainer.innerHTML = '';
  iconeDisponibiliArray.forEach(function(icona) {
    var btn = document.createElement('div');
    btn.textContent = icona;
    btn.style.cssText = 'font-size:1.5em;padding:8px;cursor:pointer;border-radius:6px;text-align:center;transition:all 0.2s';
    if (icona === conto.icona) btn.style.background = 'rgba(102,126,234,0.3)';
    btn.onmouseover = function() { this.style.background = 'rgba(102,126,234,0.2)'; };
    btn.onmouseout = function() { 
      if (icona !== document.getElementById('contoIcona').value) this.style.background = ''; 
    };
    btn.onclick = function() { selezionaIcona(icona); };
    iconeContainer.appendChild(btn);
  });
  
  document.getElementById('modalConto').classList.add('active');
}

function selezionaIcona(icona) {
  document.getElementById('contoIcona').value = icona;
  document.getElementById('iconaSelezionata').textContent = icona;
  
  // Aggiorna visualizzazione
  var iconeContainer = document.getElementById('iconeDisponibili');
  Array.from(iconeContainer.children).forEach(function(btn) {
    if (btn.textContent === icona) {
      btn.style.background = 'rgba(102,126,234,0.3)';
    } else {
      btn.style.background = '';
    }
  });
}

function togglePrincipale() {
  var checkbox = document.getElementById('contoPrincipale');
  var checkIcon = document.getElementById('principaleCheckIcon');
  var checkboxDiv = document.getElementById('principaleCheckbox');
  
  checkbox.checked = !checkbox.checked;
  
  if (checkbox.checked) {
    checkIcon.style.display = 'block';
    checkboxDiv.style.background = '#ffc107';
  } else {
    checkIcon.style.display = 'none';
    checkboxDiv.style.background = '#fff';
  }
}

function salvaConto(e) {
  e.preventDefault();

  var id = document.getElementById('contoId').value;
  var nome = document.getElementById('contoNome').value.trim();
  var icona = document.getElementById('contoIcona').value;
  var principale = document.getElementById('contoPrincipale').checked;

  // Calcola saldo iniziale dal saldo attuale inserito
  var saldoAttualeInput = parseFloat(document.getElementById('contoSaldoAttuale').value) || 0;
  var saldoTransazioni = parseFloat(document.getElementById('contoSaldoAttuale').dataset.saldoTransazioni) || 0;
  var saldoIniziale = saldoAttualeInput - saldoTransazioni;

  if (!nome || !icona) {
    mostraToast('⚠️ Compila tutti i campi!', 'warning');
    return;
  }

  // Assicura che saldiIniziali esista
  if (!DB.saldiIniziali) DB.saldiIniziali = {};

  if (id) {
    // Modifica
    var conto = DB.contiPersonalizzati.find(function(c) { return c.id === id; });
    if (conto) {
      conto.nome = nome;
      conto.icona = icona;

      // Se imposto come principale, rimuovi principale dagli altri
      if (principale) {
        DB.contiPersonalizzati.forEach(function(c) { c.principale = false; });
        conto.principale = true;
      } else {
        conto.principale = false;
      }

      // NUOVO: Salva saldo iniziale
      DB.saldiIniziali[id] = saldoIniziale;
    }
    mostraToast('✅ Conto modificato!', 'success');
  } else {
    // Nuovo
    var newId = 'conto_' + Date.now();

    // Se è principale, rimuovi principale dagli altri
    if (principale) {
      DB.contiPersonalizzati.forEach(function(c) { c.principale = false; });
    }

    DB.contiPersonalizzati.push({
      id: newId,
      nome: nome,
      icona: icona,
      principale: principale
    });

    // NUOVO: Salva saldo iniziale
    DB.saldiIniziali[newId] = saldoIniziale;

    // Inizializza saldo calcolato
    if (!DB.conti[newId]) DB.conti[newId] = saldoIniziale;

    mostraToast('✅ Conto aggiunto!', 'success');
  }
  
  salvaDB();
  aggiornaListaConti();
  aggiornaDropdownConti();
  aggiornaComposizioneConti();
  chiudiModalConto();
  playSound('success');
}

function eliminaConto(id) {
  var conto = DB.contiPersonalizzati.find(function(c) { return c.id === id; });
  if (!conto) return;
  
  mostraConferma({
    icon: '🗑️',
    title: 'Elimina Conto',
    message: 'Vuoi davvero eliminare "' + conto.nome + '"? Il saldo verrà perso.',
    confirmText: '🗑️ Elimina',
    danger: true
  }).then(function(confirmed) {
    if (!confirmed) return;
    
    // Rimuovi da array
    DB.contiPersonalizzati = DB.contiPersonalizzati.filter(function(c) { return c.id !== id; });
    
    // Rimuovi saldo
    delete DB.conti[id];
    
    // Se era principale, imposta il primo come principale
    var hasPrincipale = DB.contiPersonalizzati.some(function(c) { return c.principale; });
    if (!hasPrincipale && DB.contiPersonalizzati.length > 0) {
      DB.contiPersonalizzati[0].principale = true;
    }
    
    salvaDB();
    aggiornaListaConti();
    aggiornaDropdownConti();
    aggiornaComposizioneConti();
    mostraToast('✅ Conto eliminato!', 'success');
    playSound('success');
  });
}

function chiudiModalConto() {
  document.getElementById('modalConto').classList.remove('active');
}

function aggiornaDropdownConti() {
  if (!DB.contiPersonalizzati) return;
  
  // Aggiorna dropdown metodo pagamento
  var tmetodo = document.getElementById('tmetodo');
  if (tmetodo) {
    var selectedValue = tmetodo.value;
    tmetodo.innerHTML = '';
    
    DB.contiPersonalizzati.forEach(function(conto) {
      var opt = document.createElement('option');
      opt.value = conto.id;
      opt.textContent = conto.icona + ' ' + conto.nome + (conto.principale ? ' (Principale)' : '');
      tmetodo.appendChild(opt);
    });
    
    // Buoni - aggiungi ID per poterlo nascondere/mostrare
    var optBuoni = document.createElement('option');
    optBuoni.value = 'buoni_pasto';
    optBuoni.id = 'optMetodoBuoni';
    optBuoni.textContent = '🎟️ Buoni Pasto';
    tmetodo.appendChild(optBuoni);
    
    tmetodo.value = selectedValue;
  }
  
  // Aggiorna dropdown differenza mista
  var tmistoDiff = document.getElementById('tmistoMetodoDifferenza');
  if (tmistoDiff) {
    var selectedValue2 = tmistoDiff.value;
    tmistoDiff.innerHTML = '';
    
    DB.contiPersonalizzati.forEach(function(conto) {
      var opt = document.createElement('option');
      opt.value = conto.id;
      opt.textContent = conto.icona + ' ' + conto.nome;
      tmistoDiff.appendChild(opt);
    });
    
    tmistoDiff.value = selectedValue2;
  }
  
  // Aggiorna dropdown destinazione entrate
  var tdest = document.getElementById('tdestinazione');
  if (tdest) {
    var selectedValue3 = tdest.value;
    tdest.innerHTML = '';
    
    DB.contiPersonalizzati.forEach(function(conto) {
      var opt = document.createElement('option');
      opt.value = conto.id;
      opt.textContent = conto.icona + ' ' + conto.nome;
      tdest.appendChild(opt);
    });
    
    // Buoni
    var optBuoni2 = document.createElement('option');
    optBuoni2.value = 'buoni_pasto';
    optBuoni2.textContent = '🎟️ Buoni Pasto';
    tdest.appendChild(optBuoni2);
    
    tdest.value = selectedValue3;
  }
}

// ========== MODAL DETTAGLIO CATEGORIA ==========
function apriModalCategoriaDettaglio(categoria, soloCondivise, meseAnnoCondiviso) {
  var modal = document.getElementById('modalCategoriaDettaglio');
  if (!modal) return;

  // Trova icona categoria
  var icona = '';
  var catEntry = DB.categorie.expense.find(function(c) { return c === categoria; });
  if (catEntry) {
    // Trova icona dal rendering esistente
    var distribContainer = document.getElementById('distribuzione');
    if (distribContainer) {
      var items = distribContainer.querySelectorAll('[data-categoria="' + categoria + '"]');
      if (items.length > 0) {
        var iconSpan = items[0].querySelector('.categoria-icona');
        if (iconSpan) icona = iconSpan.textContent;
      }
    }
  }

  // Imposta titolo (con indicazione condivise se applicabile)
  document.getElementById('categoriaDettaglioIcona').textContent = icona;
  document.getElementById('categoriaDettaglioNome').textContent = categoria + (soloCondivise ? ' (Condivise)' : '');
  
  // Ottieni periodo selezionato dalla dashboard
  var distribTab = document.querySelector('[id^="distribTab"][style*="667eea"]');
  var periodo = 'mese';
  if (distribTab) {
    if (distribTab.id === 'distribTabAnno') periodo = 'anno';
    else if (distribTab.id === 'distribTabCustom') periodo = 'custom';
  }
  
  var periodoLabel = '';
  
  // Filtra transazioni per categoria e periodo
  var transazioni = [];
  var totale = 0;

  DB.transazioni.forEach(function(t) {
    // Includi sia expense che partner_payment
    if ((t.tipo !== 'expense' && t.tipo !== 'partner_payment') || t.categoria !== categoria || t.virtualRecovery) return;

    // Filtro solo condivise se richiesto
    if (soloCondivise && !t.condiviso) return;

    var d = new Date(t.data);
    var include = false;

    // Se abbiamo meseAnnoCondiviso, usiamo quello
    if (meseAnnoCondiviso) {
      var parts = meseAnnoCondiviso.split('-');
      var annoSel = parseInt(parts[0]);
      var meseSel = parseInt(parts[1]);
      include = (d.getFullYear() === annoSel && d.getMonth() === meseSel);

      var mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
      periodoLabel = mesiNomi[meseSel] + ' ' + annoSel;
    } else if (periodo === 'mese') {
      var meseSelect = document.getElementById('distribMeseSelect');
      if (meseSelect) {
        var parts = meseSelect.value.split('-');
        var annoSel = parseInt(parts[0]);
        var meseSel = parseInt(parts[1]);
        include = (d.getFullYear() === annoSel && d.getMonth() === meseSel);

        // Label periodo
        var mesiNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
        periodoLabel = mesiNomi[meseSel] + ' ' + annoSel;
      }
    } else if (periodo === 'anno') {
      var annoSelect = document.getElementById('distribAnnoSelect');
      if (annoSelect) {
        var annoSel = parseInt(annoSelect.value);
        include = (d.getFullYear() === annoSel);
        periodoLabel = 'Anno ' + annoSel;
      }
    } else if (periodo === 'custom') {
      var dataInizio = document.getElementById('distribDataInizio');
      var dataFine = document.getElementById('distribDataFine');
      if (dataInizio && dataFine && dataInizio.value && dataFine.value) {
        include = (t.data >= dataInizio.value && t.data <= dataFine.value);
        periodoLabel = 'Dal ' + dataInizio.value + ' al ' + dataFine.value;
      }
    }

    if (include) {
      transazioni.push(t);
      totale += parseFloat(t.importo) || 0;
    }
  });
  
  // Ordina per data decrescente
  transazioni.sort(function(a, b) {
    if (a.data !== b.data) return b.data.localeCompare(a.data);
    return (b.ora || '00:00').localeCompare(a.ora || '00:00');
  });
  
  // Renderizza transazioni
  var html = '';
  
  if (transazioni.length === 0) {
    html = '<div style="text-align:center;padding:40px;color:#7f8c8d">';
    html += '<div style="font-size:3em;margin-bottom:10px">📭</div>';
    html += '<div style="font-size:1.1em">Nessuna transazione</div>';
    html += '</div>';
  } else {
    transazioni.forEach(function(t) {
      var d = new Date(t.data);
      var giorno = d.getDate();
      var mese = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'][d.getMonth()];
      
      // Trova metodo pagamento
      var metodoIcona = '💳';
      var metodoNome = 'Carta';
      var isPartnerPayment = (t.tipo === 'partner_payment');
      
      if (isPartnerPayment) {
        metodoIcona = '👤';
        metodoNome = 'Partner';
      } else if (t.pagamentoMisto) {
        metodoIcona = '🎟️💳';
        metodoNome = 'Misto';
      } else if (t.metodo) {
        if (t.metodo === 'buoni_pasto') {
          metodoIcona = '🎟️';
          metodoNome = 'Buoni';
        } else if (t.metodo === 'contanti') {
          metodoIcona = '💵';
          metodoNome = 'Contanti';
        } else {
          // Trova nome conto personalizzato
          var conto = DB.contiPersonalizzati.find(function(c) { return c.id === t.metodo; });
          if (conto) {
            metodoIcona = conto.icona;
            metodoNome = conto.nome;
          }
        }
      }
      
      // Card transazione compatta per mobile
      html += '<div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--card);border-radius:12px;border:1px solid var(--border)">';

      // Data compatta
      html += '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:42px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:8px;padding:6px 8px">';
      html += '<div style="font-size:1.2em;font-weight:800;color:#fff;line-height:1">' + giorno + '</div>';
      html += '<div style="font-size:0.6em;color:rgba(255,255,255,0.85);font-weight:600;text-transform:uppercase">' + mese + '</div>';
      html += '</div>';

      // Centro: nota/metodo
      html += '<div style="flex:1;min-width:0">';
      if (t.note) {
        html += '<div style="font-size:0.9em;font-weight:600;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + escapeHtml(t.note) + '</div>';
      } else {
        html += '<div style="font-size:0.85em;color:#999;font-style:italic">Senza nota</div>';
      }
      // Badges piccoli
      html += '<div style="display:flex;align-items:center;gap:6px;margin-top:4px;flex-wrap:wrap">';
      var badgeColor = isPartnerPayment ? '#9c27b0' : '#667eea';
      html += '<span style="font-size:0.7em;color:' + badgeColor + ';font-weight:600">' + metodoIcona + ' ' + metodoNome + '</span>';
      if (t.condiviso) {
        html += '<span style="font-size:0.7em;color:#9c27b0;font-weight:600">💑</span>';
      }
      html += '</div>';
      html += '</div>';

      // Importo a destra
      html += '<div style="font-size:1em;font-weight:800;color:#e74c3c;white-space:nowrap">' + formatEuro(t.importo) + '</div>';

      html += '</div>';
    });
  }
  
  document.getElementById('categoriaDettaglioTransazioni').innerHTML = html;
  document.getElementById('categoriaDettaglioTotale').textContent = formatEuro(totale);
  document.getElementById('categoriaDettaglioCount').textContent = transazioni.length + (transazioni.length === 1 ? ' transazione' : ' transazioni');
  
  // Aggiorna periodo nel subtitle
  var periodoElement = document.getElementById('categoriaDettaglioPeriodo');
  if (periodoElement && periodoLabel) {
    periodoElement.textContent = '📅 ' + periodoLabel;
  }
  
  modal.classList.add('active');
  playSound('success');
}

function chiudiModalCategoriaDettaglio() {
  var modal = document.getElementById('modalCategoriaDettaglio');
  if (modal) {
    modal.classList.remove('active');
  }
}

function escapeHtml(text) {
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}

// ========== CENTRO CONTROLLO PATRIMONIO - TABS ==========
var currentFinanzeTab = 'overview';
var risparmiChart = null;
var confrontoTipo = 'mesescorso';
var patrimonioMeseSelezionato = null; // null = mese corrente
var dropdownMesiAperto = false;

function cambiaTabFinanze(tab) {
  currentFinanzeTab = tab;
  
  // Aggiorna pulsanti tabs DARK STYLE
  ['tabOverview', 'tabGrafico', 'tabConfronto'].forEach(function(id) {
    var btn = document.getElementById(id);
    if (btn) {
      var isActive = (id === 'tab' + tab.charAt(0).toUpperCase() + tab.slice(1));
      if (isActive) {
        btn.style.background = 'linear-gradient(135deg,#e5e4e2,#ffa500)';
        btn.style.color = '#16213e';
        btn.style.border = 'none';
        btn.style.boxShadow = '0 0 15px rgba(255,215,0,0.3)';
      } else {
        btn.style.background = 'rgba(255,255,255,0.05)';
        btn.style.color = '#e5e4e2';
        btn.style.border = '2px solid rgba(255,215,0,0.3)';
        btn.style.boxShadow = 'none';
      }
    }
  });
  
  // Mostra/nascondi contenuti
  document.getElementById('tabContentOverview').style.display = (tab === 'overview') ? 'block' : 'none';
  document.getElementById('tabContentGrafico').style.display = (tab === 'grafico') ? 'block' : 'none';
  document.getElementById('tabContentConfronto').style.display = (tab === 'confronto') ? 'block' : 'none';
  
  // Inizializza contenuto se necessario
  if (tab === 'overview') {
    aggiornaOverviewFinanze();
  } else if (tab === 'grafico') {
    // Grafico rimosso temporaneamente - in attesa di nuova grafica
    // if (!evoChart) inizializzaGraficoEvoluzione();
    // if (!risparmiChart) inizializzaGraficoRisparmio();
    // aggiornaEvoluzione();
    // aggiornaGraficoRisparmio();
  } else if (tab === 'confronto') {
    aggiornaConfronto();
  }
  
  playSound('click');
}

// ========== SELETTORE MESI STORICO ==========
function toggleSelectoreMesi() {
  dropdownMesiAperto = !dropdownMesiAperto;
  var dropdown = document.getElementById('dropdownMesi');
  var icon = document.getElementById('dropdownIcon');
  
  if (dropdownMesiAperto) {
    // Popola dropdown con tutti i mesi disponibili
    popolaDropdownMesi();
    dropdown.style.display = 'block';
    icon.textContent = '▲';
  } else {
    dropdown.style.display = 'none';
    icon.textContent = '▼';
  }
  
  playSound('click');
}

function popolaDropdownMesi() {
  var snapshots = generaSnapshotsPatrimonio();
  if (snapshots.length === 0) return;
  
  var lista = document.getElementById('listaDropdownMesi');
  lista.innerHTML = '';
  
  // Inverti ordine per mostrare mesi più recenti prima
  for (var i = snapshots.length - 1; i >= 0; i--) {
    var snap = snapshots[i];
    var isSelected = false;
    
    if (patrimonioMeseSelezionato) {
      isSelected = snap.data.getTime() === patrimonioMeseSelezionato.getTime();
    } else {
      // Mese corrente
      isSelected = (i === snapshots.length - 1);
    }
    
    var btn = document.createElement('div');
    btn.onclick = (function(data) {
      return function() {
        selezionaMesePatrimonio(data);
      };
    })(snap.data);
    
    btn.style.cssText = 'padding:12px 15px;background:' + (isSelected ? 'rgba(255,215,0,0.2)' : 'rgba(255,255,255,0.03)') + ';border:2px solid ' + (isSelected ? 'rgba(255,215,0,0.5)' : 'rgba(255,215,0,0.15)') + ';border-radius:8px;margin-bottom:8px;cursor:pointer;transition:all 0.2s;display:flex;justify-content:space-between;align-items:center';
    
    btn.onmouseover = function() {
      if (!isSelected) {
        this.style.background = 'rgba(255,255,255,0.08)';
        this.style.borderColor = 'rgba(255,215,0,0.3)';
      }
    };
    btn.onmouseout = function() {
      if (!isSelected) {
        this.style.background = 'rgba(255,255,255,0.03)';
        this.style.borderColor = 'rgba(255,215,0,0.15)';
      }
    };
    
    var labelDiv = document.createElement('div');
    labelDiv.style.cssText = 'font-weight:' + (isSelected ? '900' : '700') + ';color:' + (isSelected ? '#e5e4e2' : '#fff') + ';font-size:0.95em';
    labelDiv.textContent = snap.label;
    
    var valoreDiv = document.createElement('div');
    valoreDiv.style.cssText = 'font-weight:800;color:' + (isSelected ? '#e5e4e2' : '#d1d4dc') + ';font-size:0.9em';
    valoreDiv.textContent = formatEuro(snap.patrimonio);
    
    btn.appendChild(labelDiv);
    btn.appendChild(valoreDiv);
    lista.appendChild(btn);
  }
}

function selezionaMesePatrimonio(data) {
  patrimonioMeseSelezionato = data;
  
  // Chiudi dropdown
  dropdownMesiAperto = false;
  document.getElementById('dropdownMesi').style.display = 'none';
  document.getElementById('dropdownIcon').textContent = '▼';
  
  // Aggiorna vista
  aggiornaVistaPatrimonioStorico();
  playSound('click');
}

function cambiaPatrimonioStorico(direzione) {
  var snapshots = generaSnapshotsPatrimonio();
  if (snapshots.length === 0) return;
  
  var indiceCorrente;
  if (!patrimonioMeseSelezionato) {
    indiceCorrente = snapshots.length - 1; // Mese corrente
  } else {
    indiceCorrente = snapshots.findIndex(function(s) {
      return s.data.getTime() === patrimonioMeseSelezionato.getTime();
    });
  }
  
  var nuovoIndice = indiceCorrente + direzione;
  
  // Limiti
  if (nuovoIndice < 0) nuovoIndice = 0;
  if (nuovoIndice >= snapshots.length) nuovoIndice = snapshots.length - 1;
  
  if (nuovoIndice === snapshots.length - 1) {
    patrimonioMeseSelezionato = null; // Torna a mese corrente
  } else {
    patrimonioMeseSelezionato = snapshots[nuovoIndice].data;
  }
  
  aggiornaVistaPatrimonioStorico();
  playSound('click');
}

function vaiOggiPatrimonio() {
  patrimonioMeseSelezionato = null;
  aggiornaVistaPatrimonioStorico();
  playSound('click');
}

function aggiornaVistaPatrimonioStorico() {
  var snapshots = generaSnapshotsPatrimonio();
  if (snapshots.length === 0) return;
  
  var dataTarget;
  var snapshot;
  
  if (!patrimonioMeseSelezionato) {
    // Mese corrente
    snapshot = snapshots[snapshots.length - 1];
    dataTarget = snapshot.data;
  } else {
    dataTarget = patrimonioMeseSelezionato;
    snapshot = snapshots.find(function(s) {
      return s.data.getTime() === dataTarget.getTime();
    });
  }
  
  if (!snapshot) return;
  
  // Aggiorna label mese (OLD CARD SLIDER - ora rimosso)
  var meseLabel = document.getElementById('patrimonioMeseLabel');
  if (meseLabel) {
    meseLabel.textContent = snapshot.label;
  }
  
  // Aggiorna patrimonio
  var patrimonioEl = document.getElementById('patrimonioTotaleVista');
  if (patrimonioEl) {
    patrimonioEl.textContent = formatEuro(snapshot.patrimonio);
  }
  
  // Calcola variazione vs mese precedente
  var indice = snapshots.findIndex(function(s) {
    return s.data.getTime() === dataTarget.getTime();
  });
  
  if (indice > 0) {
    var precedente = snapshots[indice - 1];
    var delta = snapshot.patrimonio - precedente.patrimonio;
    var perc = precedente.patrimonio !== 0 ? (delta / precedente.patrimonio) * 100 : 0;
    
    var varDiv = document.getElementById('patrimonioVariazione');
    if (varDiv) {
      varDiv.textContent = (delta >= 0 ? '▲ +' : '▼ ') + formatEuro(Math.abs(delta)) + ' (' + (delta >= 0 ? '+' : '') + perc.toFixed(1) + '%)';
      
      if (delta >= 0) {
        varDiv.style.background = 'rgba(78,204,163,0.15)';
        varDiv.style.color = '#4ecca3';
      } else {
        varDiv.style.background = 'rgba(242,54,69,0.15)';
        varDiv.style.color = '#f23645';
      }
    }
  } else {
    var varDiv2 = document.getElementById('patrimonioVariazione');
    if (varDiv2) {
      varDiv2.textContent = '-';
    }
  }
  
  // Aggiorna overview se è il tab attivo
  if (currentFinanzeTab === 'overview') {
    aggiornaOverviewFinanzeStorico(dataTarget);
  } else if (currentFinanzeTab === 'confronto') {
    aggiornaConfrontoStorico(dataTarget);
  }
}

function aggiornaOverviewFinanzeStorico(dataTarget) {
  // Calcola snapshot per la data target
  var snapshots = generaSnapshotsPatrimonio();
  var targetSnapshot = snapshots.find(function(s) {
    return s.data.getTime() === dataTarget.getTime();
  });
  
  if (!targetSnapshot) return;
  
  // Usa i saldi storici dello snapshot
  // NOTA: Per ora usiamo i valori correnti dei conti
  // In futuro potremmo salvare snapshot storici dei singoli conti
  
  document.getElementById('detailWebank').textContent = formatEuro(DB.conti.webank || 0);
  document.getElementById('detailRevolut').textContent = formatEuro(DB.conti.revolut || 0);
  
  var saldoBuoni = DB.conti.buoni_pasto ? DB.conti.buoni_pasto.saldo || 0 : 0;
  var valoreBuono = DB.conti.buoni_pasto ? DB.conti.buoni_pasto.valoreUnitario || 10.50 : 10.50;
  document.getElementById('detailBuoni').textContent = formatEuro(saldoBuoni * valoreBuono);
  
  document.getElementById('detailPaypal').textContent = formatEuro(DB.conti.paypal || 0);
  document.getElementById('detailContanti').textContent = formatEuro(DB.conti.contanti || 0);
  
  // Calcola performance per il mese target
  var meseTarget = dataTarget.getMonth();
  var annoTarget = dataTarget.getFullYear();
  var entrate = 0;
  var uscite = 0;
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getMonth() === meseTarget && d.getFullYear() === annoTarget) {
      var imp = parseFloat(t.importo) || 0;
      if (t.tipo === 'income') {
        entrate += imp;
      } else if (t.tipo === 'expense' && !t.virtualRecovery) {
        uscite += imp;
      } else if (t.tipo === 'partner_payment' && !t.virtualRecovery) {
        uscite += imp;
      }
    }
  });
  
  var risparmiato = entrate - uscite;
  var percRisp = entrate > 0 ? (risparmiato / entrate) * 100 : 0;
  
  document.getElementById('perfEntrate').textContent = formatEuro(entrate);
  document.getElementById('perfUscite').textContent = formatEuro(uscite);
  document.getElementById('perfRisparmiato').textContent = formatEuro(risparmiato);
  
  // Score
  var score = '';
  if (percRisp >= 20) score = '⭐⭐⭐⭐⭐ Eccezionale! Risparmio >20%';
  else if (percRisp >= 15) score = '⭐⭐⭐⭐ Ottimo! Risparmio 15-20%';
  else if (percRisp >= 10) score = '⭐⭐⭐ Buono! Risparmio 10-15%';
  else if (percRisp >= 5) score = '⭐⭐ Sufficiente, risparmio 5-10%';
  else score = '⭐ Attenzione! Risparmio <5%';

  var perfScoreEl = document.getElementById('perfScore');
  if (perfScoreEl) perfScoreEl.textContent = score;
}

function aggiornaConfrontoStorico(dataTarget) {
  // Aggiorna confronto usando il mese selezionato come base
  // Implementa logica simile ad aggiornaConfronto ma usa dataTarget
  aggiornaConfronto(); // Per ora usa la funzione esistente
}

function aggiornaOverviewFinanze() {
  if (patrimonioMeseSelezionato) {
    aggiornaVistaPatrimonioStorico();
    return;
  }
  
  // Aggiorna patrimonio totale
  var totale = calcolaPatrimonioTotale();
  var patrimonioEl = document.getElementById('patrimonioTotaleVista');
  if (patrimonioEl) {
    patrimonioEl.textContent = formatEuro(totale);
  }
  
  // Aggiorna mese corrente (OLD CARD SLIDER - elemento potrebbe non esistere)
  var meseNomi = ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'];
  var oggi = new Date();
  var meseLabelEl = document.getElementById('patrimonioMeseLabel');
  if (meseLabelEl) {
    meseLabelEl.textContent = meseNomi[oggi.getMonth()] + ' ' + oggi.getFullYear();
  }
  
  // Calcola variazione vs mese scorso
  var tuttiSnapshots = generaSnapshotsPatrimonio();
  if (tuttiSnapshots.length >= 2) {
    var attuale = tuttiSnapshots[tuttiSnapshots.length - 1].patrimonio;
    var meseScorso = tuttiSnapshots[tuttiSnapshots.length - 2].patrimonio;
    var delta = attuale - meseScorso;
    var perc = meseScorso !== 0 ? (delta / meseScorso) * 100 : 0;
    var variazione = (delta >= 0 ? '▲ +' : '▼ ') + formatEuro(Math.abs(delta)) + ' (' + (delta >= 0 ? '+' : '') + perc.toFixed(1) + '%)';
    var varEl = document.getElementById('patrimonioVariazione');
    if (varEl) {
      varEl.textContent = variazione;
    }
  } else {
    var varEl2 = document.getElementById('patrimonioVariazione');
    if (varEl2) {
      varEl2.textContent = '-';
    }
  }
  
  // Aggiorna dettaglio conti
  var detailWebank = document.getElementById('detailWebank');
  if (detailWebank) detailWebank.textContent = formatEuro(DB.conti.webank || 0);
  
  var detailRevolut = document.getElementById('detailRevolut');
  if (detailRevolut) detailRevolut.textContent = formatEuro(DB.conti.revolut || 0);
  
  var saldoBuoni = DB.conti.buoni_pasto ? DB.conti.buoni_pasto.saldo || 0 : 0;
  var valoreBuono = DB.conti.buoni_pasto ? DB.conti.buoni_pasto.valoreUnitario || 10.50 : 10.50;
  var detailBuoni = document.getElementById('detailBuoni');
  if (detailBuoni) detailBuoni.textContent = formatEuro(saldoBuoni * valoreBuono);
  
  var detailPaypal = document.getElementById('detailPaypal');
  if (detailPaypal) detailPaypal.textContent = formatEuro(DB.conti.paypal || 0);
  
  var detailContanti = document.getElementById('detailContanti');
  if (detailContanti) detailContanti.textContent = formatEuro(DB.conti.contanti || 0);
  
  // Calcola performance mese corrente
  var meseCorr = oggi.getMonth();
  var annoCorr = oggi.getFullYear();
  var entrate = 0;
  var uscite = 0;
  
  DB.transazioni.forEach(function(t) {
    var d = new Date(t.data);
    if (d.getMonth() === meseCorr && d.getFullYear() === annoCorr) {
      var imp = parseFloat(t.importo) || 0;
      if (t.tipo === 'income') {
        entrate += imp;
      } else if (t.tipo === 'expense' && !t.virtualRecovery) {
        uscite += imp;
      } else if (t.tipo === 'partner_payment' && !t.virtualRecovery) {
        uscite += imp;
      }
    }
  });
  
  var risparmiato = entrate - uscite;
  var percRisp = entrate > 0 ? (risparmiato / entrate) * 100 : 0;
  
  var perfEntrate = document.getElementById('perfEntrate');
  if (perfEntrate) perfEntrate.textContent = formatEuro(entrate);
  
  var perfUscite = document.getElementById('perfUscite');
  if (perfUscite) perfUscite.textContent = formatEuro(uscite);
  
  var perfRisparmiato = document.getElementById('perfRisparmiato');
  if (perfRisparmiato) perfRisparmiato.textContent = formatEuro(risparmiato);
  
  // Score
  var score = '';
  if (percRisp >= 20) score = '⭐⭐⭐⭐⭐ Eccezionale! Risparmio >20%';
  else if (percRisp >= 15) score = '⭐⭐⭐⭐ Ottimo! Risparmio 15-20%';
  else if (percRisp >= 10) score = '⭐⭐⭐ Buono! Risparmio 10-15%';
  else if (percRisp >= 5) score = '⭐⭐ Sufficiente, risparmio 5-10%';
  else score = '⭐ Attenzione! Risparmio <5%';

  var perfScoreEl = document.getElementById('perfScore');
  if (perfScoreEl) perfScoreEl.textContent = score;
}

// FUNZIONI GRAFICO RISPARMIO DISABILITATE
/*
function inizializzaGraficoRisparmio() {
  var ctx = document.getElementById('risparmiChart');
  if (!ctx) return;
  
  risparmiChart = new Chart(ctx.getContext('2d'), {
    type: 'bar',
    data: {
      labels: [],
      datasets: [{
        label: 'Risparmio Mensile',
        data: [],
        backgroundColor: 'rgba(255,215,0,0.8)',
        borderColor: '#e5e4e2',
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: window.innerWidth < 768 ? 1.3 : 2,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(15,52,96,0.95)',
          borderColor: 'rgba(255,215,0,0.5)',
          borderWidth: 2,
          padding: 15,
          titleFont: { size: 14, weight: 'bold' },
          titleColor: '#e5e4e2',
          bodyFont: { size: 13 },
          bodyColor: '#fff',
          displayColors: false,
          callbacks: {
            label: function(context) {
              return '€' + context.parsed.y.toLocaleString('it-IT', {minimumFractionDigits:2, maximumFractionDigits:2});
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '€' + value.toFixed(0);
            },
            font: { size: window.innerWidth < 768 ? 10 : 11 },
            color: '#d1d4dc'
          },
          grid: { 
            color: 'rgba(255,215,0,0.1)',
            borderColor: 'rgba(255,215,0,0.2)'
          }
        },
        x: {
          ticks: { 
            font: { size: window.innerWidth < 768 ? 9 : 11 },
            color: '#d1d4dc',
            maxRotation: 45,
            minRotation: 0
          },
          grid: { display: false }
        }
      }
    }
  });
}

function aggiornaGraficoRisparmio() {
  if (!risparmiChart) return;
  
  var snapshots = generaSnapshotsPatrimonio();
  var filtered = filtraSnapshotsPeriodo(snapshots);
  
  // Calcola risparmio mensile (differenza tra mesi)
  var risparmiMensili = [];
  for (var i = 1; i < filtered.length; i++) {
    risparmiMensili.push({
      label: filtered[i].label,
      valore: filtered[i].patrimonio - filtered[i - 1].patrimonio
    });
  }
  
  risparmiChart.data.labels = risparmiMensili.map(function(r) { return r.label; });
  risparmiChart.data.datasets[0].data = risparmiMensili.map(function(r) { return r.valore; });
  
  // Colori dinamici (verde positivo, rosso negativo)
  risparmiChart.data.datasets[0].backgroundColor = risparmiMensili.map(function(r) {
    return r.valore >= 0 ? 'rgba(39,174,96,0.8)' : 'rgba(231,76,60,0.8)';
  });
  risparmiChart.data.datasets[0].borderColor = risparmiMensili.map(function(r) {
    return r.valore >= 0 ? '#27ae60' : '#e74c3c';
  });
  
  risparmiChart.update();
}
*/

function selezionaConfronto(tipo) {
  confrontoTipo = tipo;
  aggiornaConfronto();
  playSound('click');
}

function aggiornaConfronto() {
  var oggi = new Date();
  var meseNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  
  document.getElementById('confrontoMeseCorrente').textContent = meseNomi[oggi.getMonth()] + ' ' + oggi.getFullYear();
  
  var snapshots = generaSnapshotsPatrimonio();
  if (snapshots.length === 0) {
    document.getElementById('confrontoRisultato').innerHTML = '<div style="text-align:center;color:#7f8c8d">Nessun dato disponibile</div>';
    return;
  }
  
  var attuale = snapshots[snapshots.length - 1];
  var confronto = null;
  var titolo = '';
  
  if (confrontoTipo === 'mesescorso' && snapshots.length >= 2) {
    confronto = snapshots[snapshots.length - 2];
    titolo = 'Confronto con ' + confronto.label;
  } else if (confrontoTipo === 'stessomese') {
    // Trova stesso mese anno scorso
    var annoScorso = oggi.getFullYear() - 1;
    var meseOggi = oggi.getMonth();
    confronto = snapshots.find(function(s) {
      return s.data.getFullYear() === annoScorso && s.data.getMonth() === meseOggi;
    });
    titolo = confronto ? 'Confronto con ' + confronto.label : 'Dati anno scorso non disponibili';
  } else if (confrontoTipo === 'media') {
    // Media ultimi 6 mesi
    var ultimi6 = snapshots.slice(-7, -1); // -7 perché escludiamo mese corrente
    if (ultimi6.length > 0) {
      var somma = ultimi6.reduce(function(acc, s) { return acc + s.patrimonio; }, 0);
      var media = somma / ultimi6.length;
      confronto = { label: 'Media 6 mesi', patrimonio: media };
      titolo = 'Confronto con Media Ultimi 6 Mesi';
    }
  }
  
  if (!confronto) {
    document.getElementById('confrontoRisultato').innerHTML = '<div style="text-align:center;color:#7f8c8d">Dati non disponibili per questo confronto</div>';
    return;
  }
  
  var deltaPatrimonio = attuale.patrimonio - confronto.patrimonio;
  var percPatrimonio = confronto.patrimonio !== 0 ? (deltaPatrimonio / confronto.patrimonio) * 100 : 0;
  
  var html = '<div style="margin-bottom:15px;font-weight:700;font-size:1.1em;color:var(--text)">' + titolo + '</div>';
  
  html += '<div style="background:rgba(102,126,234,0.05);border-radius:10px;padding:15px;margin-bottom:12px">';
  html += '<div style="font-size:0.9em;color:#7f8c8d;margin-bottom:8px">💎 Patrimonio</div>';
  html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">';
  html += '<div><span style="color:#7f8c8d;font-size:0.85em">' + confronto.label + ':</span> <span style="font-weight:700">' + formatEuro(confronto.patrimonio) + '</span></div>';
  html += '</div>';
  html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">';
  html += '<div><span style="color:#7f8c8d;font-size:0.85em">' + attuale.label + ':</span> <span style="font-weight:700">' + formatEuro(attuale.patrimonio) + '</span></div>';
  html += '</div>';
  html += '<div style="height:2px;background:var(--border);margin-bottom:10px"></div>';
  html += '<div style="display:flex;justify-content:space-between;align-items:center">';
  html += '<div style="font-weight:700">Δ Variazione:</div>';
  html += '<div style="font-size:1.2em;font-weight:900;color:' + (deltaPatrimonio >= 0 ? '#27ae60' : '#e74c3c') + '">';
  html += (deltaPatrimonio >= 0 ? '+' : '') + formatEuro(deltaPatrimonio) + ' (' + (deltaPatrimonio >= 0 ? '+' : '') + percPatrimonio.toFixed(1) + '%)';
  html += '</div>';
  html += '</div>';
  html += '</div>';
  
  document.getElementById('confrontoRisultato').innerHTML = html;
}

// ========== EVOLUZIONE PATRIMONIO ==========
var evoPeriodo = '6mesi';
var evoChart = null;
var evoMeseCorrente = new Date().getMonth();
var evoAnnoCorrente = new Date().getFullYear();
var evoPeriodoMesi = 6;

// ========== EVOLUZIONE SEMPLICE CON CHART.JS ==========

function inizializzaEvoluzione() {
  console.log('[EVO] === INIZIALIZZAZIONE ===');
  
  if (!DB || !DB.transazioni) {
    console.log('[EVO] DB non pronto, riprovo tra 500ms...');
    setTimeout(inizializzaEvoluzione, 500);
    return;
  }
  
  console.log('[EVO] DB OK, transazioni:', DB.transazioni.length);
  
  // Verifica Chart.js
  if (typeof Chart === 'undefined') {
    console.error('[EVO] Chart.js NON CARICATO!');
    document.getElementById('evoDateHeader').textContent = 'Chart.js non disponibile';
    return;
  }
  console.log('[EVO] Chart.js disponibile');
  
  var ctx = document.getElementById('evoChart');
  if (!ctx) {
    console.error('[EVO] Canvas #evoChart NON TROVATO!');
    return;
  }
  console.log('[EVO] Canvas trovato');
  
  // Distruggi chart esistente
  if (evoChart) {
    console.log('[EVO] Distruggo chart esistente');
    evoChart.destroy();
  }
  
  // Crea nuovo chart
  try {
    evoChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Patrimonio',
          data: [],
          borderColor: '#e5e4e2',
          backgroundColor: 'rgba(255,215,0,0.1)',
          borderWidth: 3,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: '#e5e4e2',
          pointBorderColor: '#1a1a2e',
          pointBorderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(26, 26, 46, 0.9)',
            titleColor: '#e5e4e2',
            bodyColor: '#fff',
            borderColor: '#e5e4e2',
            borderWidth: 1,
            callbacks: {
              label: function(context) {
                return formatEuro(context.parsed.y);
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            ticks: {
              callback: function(value) {
                return formatEuroK(value);
              },
              color: '#e5e4e2',
              font: {
                weight: 'bold'
              }
            },
            grid: {
              color: 'rgba(255,215,0,0.1)'
            }
          },
          x: {
            type: 'category', // FORZA: mostra label esatte, non date
            ticks: {
              color: '#e5e4e2',
              font: {
                weight: 'bold',
                size: 11
              },
              maxRotation: 0,
              minRotation: 0
            },
            grid: {
              color: 'rgba(255,215,0,0.1)'
            }
          }
        }
      }
    });
    
    console.log('[EVO] Chart creato con successo!');
    
    // Primo aggiornamento
    setTimeout(aggiornaEvoluzione, 100);
    
  } catch(e) {
    console.error('[EVO] ERRORE creazione Chart:', e);
    document.getElementById('evoDateHeader').textContent = 'Errore: ' + e.message;
  }
}

function aggiornaEvoluzione() {
  console.log('[EVO] === INIZIO AGGIORNAMENTO ===');
  console.log('[EVO] Mese:', evoMeseCorrente, 'Anno:', evoAnnoCorrente, 'Periodo:', evoPeriodoMesi);
  
  if (!evoChart) {
    console.error('[EVO] Chart non inizializzato!');
    return;
  }
  console.log('[EVO] Chart OK');
  
  if (!DB || !DB.transazioni) {
    console.error('[EVO] DB non disponibile!');
    return;
  }
  console.log('[EVO] DB OK, transazioni:', DB.transazioni.length);
  
  var snapshots = generaSnapshotsPatrimonio();
  console.log('[EVO] Snapshots generati:', snapshots ? snapshots.length : 'NULL');
  
  if (!snapshots || snapshots.length === 0) {
    console.log('[EVO] Nessun snapshot disponibile');
    document.getElementById('evoCurrentValue').textContent = '€0';
    document.getElementById('evoCurrentDelta').textContent = 'Nessun dato';
    document.getElementById('evoDateHeader').textContent = 'Nessun dato';
    return;
  }
  
  console.log('[EVO] Primo snapshot:', snapshots[0].label, snapshots[0].patrimonio);
  console.log('[EVO] Ultimo snapshot:', snapshots[snapshots.length-1].label, snapshots[snapshots.length-1].patrimonio);
  
  // Filtra per periodo
  var dataCorrente = new Date(evoAnnoCorrente, evoMeseCorrente, 1);
  var dataInizio = new Date(dataCorrente);
  dataInizio.setMonth(dataInizio.getMonth() - evoPeriodoMesi + 1);
  
  console.log('[EVO] Periodo da', dataInizio.toISOString(), 'a', dataCorrente.toISOString());
  
  var snapshotsFiltrati = snapshots.filter(function(s) {
    return s.data >= dataInizio && s.data <= dataCorrente;
  });
  
  console.log('[EVO] Snapshots filtrati:', snapshotsFiltrati.length);
  
  if (snapshotsFiltrati.length === 0) {
    console.log('[EVO] Nessun dato nel periodo, uso ultimo disponibile');
    snapshotsFiltrati = [snapshots[snapshots.length - 1]];
  }
  
  // Aggiorna grafico
  var labels = snapshotsFiltrati.map(function(s) { return s.label; });
  var data = snapshotsFiltrati.map(function(s) { return s.patrimonio; });
  
  console.log('[EVO] Labels:', labels);
  console.log('[EVO] Data:', data);
  
  evoChart.data.labels = labels;
  evoChart.data.datasets[0].data = data;
  evoChart.update();
  console.log('[EVO] Chart aggiornato');
  
  // Snapshot corrente
  var currentSnapshot = snapshotsFiltrati[snapshotsFiltrati.length - 1];
  console.log('[EVO] Current snapshot:', currentSnapshot.label, currentSnapshot.patrimonio);
  
  // Aggiorna date header
  var mesiNomi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 
                   'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
  var dateText = mesiNomi[evoMeseCorrente] + ' ' + evoAnnoCorrente;
  document.getElementById('evoDateHeader').textContent = dateText;
  console.log('[EVO] Data header impostata:', dateText);
  
  // Aggiorna valore corrente
  document.getElementById('evoCurrentValue').textContent = formatEuro(currentSnapshot.patrimonio);
  
  // Calcola delta
  var idxCurrent = snapshotsFiltrati.length - 1;
  if (idxCurrent > 0) {
    var prevSnap = snapshotsFiltrati[idxCurrent - 1];
    var delta = currentSnapshot.patrimonio - prevSnap.patrimonio;
    var perc = prevSnap.patrimonio !== 0 ? (delta / prevSnap.patrimonio) * 100 : 0;
    
    var deltaEl = document.getElementById('evoCurrentDelta');
    deltaEl.textContent = (delta >= 0 ? '▲ +' : '▼ ') + formatEuro(Math.abs(delta)) + ' (' + (delta >= 0 ? '+' : '') + perc.toFixed(1) + '%)';
    deltaEl.style.color = delta >= 0 ? '#27ae60' : '#e74c3c';
  } else {
    document.getElementById('evoCurrentDelta').textContent = '-';
  }
  
  // Stats mese scorso
  var monthStatEl = document.getElementById('evoStatMonth');
  if (idxCurrent > 0) {
    var prevSnap = snapshotsFiltrati[idxCurrent - 1];
    var delta = currentSnapshot.patrimonio - prevSnap.patrimonio;
    monthStatEl.textContent = (delta >= 0 ? '+' : '') + formatEuro(delta);
    monthStatEl.style.color = delta >= 0 ? '#27ae60' : '#e74c3c';
  } else {
    monthStatEl.textContent = '-';
  }
  
  // Stats anno corrente - USA TUTTI GLI SNAPSHOTS
  var inizioAnno = snapshots.find(function(s) {
    return s.data.getFullYear() === evoAnnoCorrente && s.data.getMonth() === 0;
  });
  
  var yearStatEl = document.getElementById('evoStatYear');
  console.log('[EVO] Inizio anno snapshot:', inizioAnno);
  
  if (inizioAnno) {
    var deltaAnno = currentSnapshot.patrimonio - inizioAnno.patrimonio;
    yearStatEl.textContent = (deltaAnno >= 0 ? '+' : '') + formatEuro(deltaAnno);
    yearStatEl.style.color = deltaAnno >= 0 ? '#27ae60' : '#e74c3c';
    console.log('[EVO] Delta anno:', deltaAnno);
  } else {
    // Se non c'è gennaio, usa il primo snapshot dell'anno
    var primoSnapshotAnno = snapshots.find(function(s) {
      return s.data.getFullYear() === evoAnnoCorrente;
    });
    
    if (primoSnapshotAnno && primoSnapshotAnno.data.getTime() !== currentSnapshot.data.getTime()) {
      var deltaAnno = currentSnapshot.patrimonio - primoSnapshotAnno.patrimonio;
      yearStatEl.textContent = (deltaAnno >= 0 ? '+' : '') + formatEuro(deltaAnno);
      yearStatEl.style.color = deltaAnno >= 0 ? '#27ae60' : '#e74c3c';
      console.log('[EVO] Delta anno (dal primo mese):', deltaAnno);
    } else {
      yearStatEl.textContent = '-';
      console.log('[EVO] Nessun dato anno precedente');
    }
  }
  
  console.log('[EVO] === AGGIORNAMENTO COMPLETATO ===');
}

function cambiaEvoMese(offset) {
  console.log('[EVO] Cambio mese evoluzione, offset:', offset);
  evoMeseCorrente += offset;
  
  if (evoMeseCorrente < 0) {
    evoMeseCorrente = 11;
    evoAnnoCorrente--;
  } else if (evoMeseCorrente > 11) {
    evoMeseCorrente = 0;
    evoAnnoCorrente++;
  }
  
  console.log('[EVO] Nuovo mese/anno evoluzione:', evoMeseCorrente, evoAnnoCorrente);
  
  // ⭐️ SINCRONIZZA mese generale con evoluzione
  mese = evoMeseCorrente;
  anno = evoAnnoCorrente;
  annoTabelle = evoAnnoCorrente;
  
  document.getElementById('year').value = anno;
  document.getElementById('month').value = mese;
  
  // ⭐️ Aggiorna TUTTO in Finanze quando cambi nell'evoluzione
  aggiornaFinanzeDateHeader();
  aggiornaRisparmio();
  mostraAnalisi();
  calcolaPrevisioni();
  popolaTabelleMensili();
  aggiornaEvoluzione();
  aggiornaBottoniOggi();
  
  console.log('[EVO] Sincronizzazione Finanze completata');
}

function vaiOggiEvo() {
  var oggi = new Date();
  evoMeseCorrente = oggi.getMonth();
  evoAnnoCorrente = oggi.getFullYear();
  
  // ⭐️ SINCRONIZZA mese generale
  mese = evoMeseCorrente;
  anno = evoAnnoCorrente;
  annoTabelle = evoAnnoCorrente;
  
  document.getElementById('year').value = anno;
  document.getElementById('month').value = mese;
  
  // ⭐️ Aggiorna tutto
  aggiornaFinanzeDateHeader();
  aggiornaRisparmio();
  mostraAnalisi();
  calcolaPrevisioni();
  popolaTabelleMensili();
  aggiornaEvoluzione();
  aggiornaBottoniOggi();
  
  console.log('[EVO] Tornato a oggi, sincronizzato tutto');
}

function cambiaEvoPeriodo(mesi) {
  evoPeriodoMesi = mesi;
  
  document.querySelectorAll('.evo-period-btn').forEach(function(btn) {
    if (parseInt(btn.dataset.months) === mesi) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  aggiornaEvoluzione();
}

// FUNZIONI EVOLUZIONE DISABILITATE - In attesa di nuova grafica
/*
function toggleEvoluzione() {
  var content = document.getElementById('evoluzioneContent');
  var icon = document.getElementById('evoluzioneIcon');
  
  if (content.style.display === 'none') {
    content.style.display = 'block';
    icon.style.transform = 'rotate(90deg)';
    
    // Inizializza grafico se non esiste
    if (!evoChart) {
      inizializzaGraficoEvoluzione();
    }
    aggiornaEvoluzione();
  } else {
    content.style.display = 'none';
    icon.style.transform = 'rotate(0deg)';
  }
  
  playSound('click');
}

function cambiaEvoPeriodo(periodo) {
  evoPeriodo = periodo;
  
  // Aggiorna pulsanti DARK STYLE
  ['evo6mesi', 'evo1anno', 'evotutto'].forEach(function(id) {
    var btn = document.getElementById(id);
    if (btn) {
      if (id === 'evo' + periodo) {
        btn.style.background = 'linear-gradient(135deg,#e5e4e2,#ffa500)';
        btn.style.color = '#16213e';
        btn.style.border = 'none';
        btn.style.boxShadow = '0 0 10px rgba(255,215,0,0.3)';
      } else {
        btn.style.background = 'rgba(255,255,255,0.05)';
        btn.style.color = '#e5e4e2';
        btn.style.border = '2px solid rgba(255,215,0,0.3)';
        btn.style.boxShadow = 'none';
      }
    }
  });
  
  aggiornaEvoluzione();
  playSound('click');
}
*/

function calcolaPatrimonioTotale() {
  var totale = 0;

  // SAFETY: Inizializza strutture se non esistono
  if (!DB.conti) DB.conti = {};
  if (!DB.contiPersonalizzati) DB.contiPersonalizzati = [];

  // Prima ricalcola i saldi dai dati
  calcolaSaldiConti();

  // USA SOLO i conti personalizzati (evita duplicati con vecchio sistema)
  if (DB.contiPersonalizzati && DB.contiPersonalizzati.length > 0) {
    DB.contiPersonalizzati.forEach(function(conto) {
      // Il saldo è in DB.conti[conto.id], NON in conto.saldo
      var saldo = DB.conti[conto.id] || 0;
      totale += saldo;
    });
  } else {
    // Fallback per vecchio sistema (nessun conto personalizzato)
    totale += DB.conti.webank || 0;
    totale += DB.conti.revolut || 0;
    totale += DB.conti.paypal || 0;
    totale += DB.conti.contanti || 0;
  }

  // Buoni pasto (sempre separati)
  if (DB.conti.buoni_pasto) {
    var saldoBuoni = DB.conti.buoni_pasto.saldo || 0;
    var valoreBuono = DB.conti.buoni_pasto.valoreUnitario || 10.50;
    totale += saldoBuoni * valoreBuono;
  }

  return totale;
}

function generaSnapshotsPatrimonio() {
  try {
    console.log('[SNAP] Generazione snapshots...');
    
    // Verifica DB
    if (!DB || !DB.transazioni || !Array.isArray(DB.transazioni)) {
      console.error('[SNAP] DB non valido:', DB);
      return [];
    }
    
    if (DB.transazioni.length === 0) {
      console.log('[SNAP] Nessuna transazione');
      return [];
    }
    
    console.log('[SNAP] Transazioni:', DB.transazioni.length);
    
    // Crea snapshots mensili calcolando il patrimonio alla fine di ogni mese
    var snapshots = [];
    var oggi = new Date();
    
    // Trova la data più vecchia nelle transazioni
    var dataMin = new Date();
    DB.transazioni.forEach(function(t) {
      try {
        var d = new Date(t.data);
        if (d < dataMin) dataMin = d;
      } catch(e) {
        console.error('[SNAP] Errore parsing data transazione:', t, e);
      }
    });
    
    // Parte dal mese della prima transazione
    var meseCorrente = new Date(dataMin.getFullYear(), dataMin.getMonth(), 1);
    var meseOggi = new Date(oggi.getFullYear(), oggi.getMonth(), 1);
    
    console.log('[SNAP] Range:', meseCorrente, 'to', meseOggi);
    
    while (meseCorrente <= meseOggi) {
      var anno = meseCorrente.getFullYear();
      var mese = meseCorrente.getMonth();
      var ultimoGiorno = new Date(anno, mese + 1, 0);
      
      // Calcola patrimonio alla fine del mese
      var patrimonio = calcolaPatrimonioAllaData(ultimoGiorno);
      
      snapshots.push({
        data: new Date(anno, mese, 1),
        label: ['Gen','Feb','Mar','Apr','Mag','Giu','Lug','Ago','Set','Ott','Nov','Dic'][mese] + ' ' + anno.toString().substr(2),
        patrimonio: patrimonio
      });
      
      // Passa al mese successivo
      meseCorrente = new Date(anno, mese + 1, 1);
    }
    
    console.log('[SNAP] Generati', snapshots.length, 'snapshots');
    return snapshots;
    
  } catch(e) {
    console.error('[SNAP] ERRORE fatale:', e);
    return [];
  }
}

function calcolaPatrimonioAllaData(data) {
  try {
    // Ricrea lo stato del patrimonio alla data specificata
    // IMPORTANTE: Parte dal patrimonio ATTUALE e sottrae le transazioni DOPO la data
    
    var patrimonioAttuale = calcolaPatrimonioTotale();
    var dataStr = data.toISOString().split('T')[0];
    
    // Sottrai tutte le transazioni DOPO questa data
    if (DB && DB.transazioni && Array.isArray(DB.transazioni)) {
      DB.transazioni.forEach(function(t) {
        try {
          if (t.data <= dataStr) return; // Ignora transazioni prima/uguale alla data target
          
          var imp = parseFloat(t.importo) || 0;
          
          if (t.tipo === 'income') {
            // Entrata futura - sottrai dal patrimonio attuale
            patrimonioAttuale -= imp;
          } else if (t.tipo === 'expense' && !t.virtualRecovery) {
            // Uscita futura - aggiungi al patrimonio attuale
            patrimonioAttuale += imp;
          } else if (t.tipo === 'partner_payment' && !t.virtualRecovery) {
            // Partner paga futuro - aggiungi al patrimonio attuale
            patrimonioAttuale += imp;
          }
        } catch(e) {
          console.error('[CALC] Errore transazione:', t, e);
        }
      });
    }
    
    return patrimonioAttuale;
  } catch(e) {
    console.error('[CALC] Errore calcolo patrimonio alla data:', e);
    return 0;
  }
}

function filtraSnapshotsPeriodo(snapshots) {
  if (evoPeriodo === '6mesi') {
    return snapshots.slice(-6);
  } else if (evoPeriodo === '1anno') {
    return snapshots.slice(-12);
  } else {
    return snapshots; // tutto
  }
}

// FUNZIONI GRAFICO EVOLUZIONE DISABILITATE
/*
function inizializzaGraficoEvoluzione() {
  var ctx = document.getElementById('patrimonioChart');
  if (!ctx) return;
  
  evoChart = new Chart(ctx.getContext('2d'), {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Patrimonio',
        data: [],
        borderColor: '#e5e4e2',
        backgroundColor: 'rgba(255,215,0,0.15)',
        borderWidth: 3,
        tension: 0.4,
        fill: true,
        pointRadius: 6,
        pointHoverRadius: 9,
        pointBackgroundColor: '#e5e4e2',
        pointBorderColor: '#16213e',
        pointBorderWidth: 3,
        pointHoverBackgroundColor: '#ffa500',
        pointHoverBorderColor: '#e5e4e2'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: window.innerWidth < 768 ? 1.5 : 2,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(15,52,96,0.95)',
          borderColor: 'rgba(255,215,0,0.5)',
          borderWidth: 2,
          padding: 15,
          titleFont: { size: 14, weight: 'bold' },
          titleColor: '#e5e4e2',
          bodyFont: { size: 13 },
          bodyColor: '#fff',
          displayColors: false,
          callbacks: {
            label: function(context) {
              return '€' + context.parsed.y.toLocaleString('it-IT', {minimumFractionDigits:2, maximumFractionDigits:2});
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback: function(value) {
              return '€' + (value >= 1000 ? (value/1000).toFixed(1) + 'k' : value.toFixed(0));
            },
            font: { size: window.innerWidth < 768 ? 10 : 11 },
            color: '#d1d4dc'
          },
          grid: {
            color: 'rgba(255,215,0,0.1)',
            borderColor: 'rgba(255,215,0,0.2)'
          }
        },
        x: {
          ticks: {
            font: { size: window.innerWidth < 768 ? 9 : 11 },
            color: '#d1d4dc',
            maxRotation: 45,
            minRotation: 0
          },
          grid: {
            display: false
          }
        }
      }
    }
  });
}

function aggiornaEvoluzione_OLD_DEPRECATED() {
  // DEPRECATED - Non usare, esiste nuova versione sotto
  return;
  if (!evoChart) return;
  
  // Genera snapshots
  var tuttiSnapshots = generaSnapshotsPatrimonio();
  var snapshots = filtraSnapshotsPeriodo(tuttiSnapshots);
  
  if (snapshots.length === 0) {
    document.getElementById('evoPatrimonioAttuale').textContent = '€0';
    document.getElementById('evoDeltaMese').textContent = '-';
    document.getElementById('evoDeltaMesePerc').textContent = '';
    document.getElementById('evoDeltaAnno').textContent = '-';
    document.getElementById('evoDeltaAnnoPerc').textContent = '';
    return;
  }
  
  // Aggiorna grafico
  evoChart.data.labels = snapshots.map(function(s) { return s.label; });
  evoChart.data.datasets[0].data = snapshots.map(function(s) { return s.patrimonio; });
  evoChart.update();
  
  // Calcola metriche
  var patrimonioAttuale = snapshots[snapshots.length - 1].patrimonio;
  
  // Delta vs mese scorso
  var deltaMese = 0;
  var deltaMesePerc = 0;
  if (snapshots.length >= 2) {
    var meseScorso = snapshots[snapshots.length - 2].patrimonio;
    deltaMese = patrimonioAttuale - meseScorso;
    deltaMesePerc = meseScorso !== 0 ? (deltaMese / meseScorso) * 100 : 0;
  }
  
  // Delta dall'inizio anno
  var inizioAnno = tuttiSnapshots.find(function(s) {
    return s.data.getFullYear() === new Date().getFullYear() && s.data.getMonth() === 0;
  });
  var deltaAnno = 0;
  var deltaAnnoPerc = 0;
  if (inizioAnno) {
    deltaAnno = patrimonioAttuale - inizioAnno.patrimonio;
    deltaAnnoPerc = inizioAnno.patrimonio !== 0 ? (deltaAnno / inizioAnno.patrimonio) * 100 : 0;
  }
  
  // Aggiorna UI
  document.getElementById('evoPatrimonioAttuale').textContent = formatEuro(patrimonioAttuale);
  
  var deltaMeseEl = document.getElementById('evoDeltaMese');
  var deltaMesePercEl = document.getElementById('evoDeltaMesePerc');
  deltaMeseEl.textContent = (deltaMese >= 0 ? '+' : '') + formatEuro(deltaMese);
  deltaMeseEl.style.color = deltaMese >= 0 ? '#27ae60' : '#e74c3c';
  deltaMesePercEl.textContent = (deltaMesePerc >= 0 ? '▲' : '▼') + ' ' + Math.abs(deltaMesePerc).toFixed(1) + '%';
  deltaMesePercEl.style.color = deltaMese >= 0 ? '#27ae60' : '#e74c3c';
  
  var deltaAnnoEl = document.getElementById('evoDeltaAnno');
  var deltaAnnoPercEl = document.getElementById('evoDeltaAnnoPerc');
  if (inizioAnno) {
    deltaAnnoEl.textContent = (deltaAnno >= 0 ? '+' : '') + formatEuro(deltaAnno);
    deltaAnnoEl.style.color = deltaAnno >= 0 ? '#27ae60' : '#e74c3c';
    deltaAnnoPercEl.textContent = (deltaAnnoPerc >= 0 ? '▲' : '▼') + ' ' + Math.abs(deltaAnnoPerc).toFixed(1) + '%';
    deltaAnnoPercEl.style.color = deltaAnno >= 0 ? '#27ae60' : '#e74c3c';
  } else {
    deltaAnnoEl.textContent = '-';
    deltaAnnoPercEl.textContent = '';
  }
}
*/

// ========== GESTIONE PROFILO COPPIA/SINGOLO ==========
function aggiornaProfiloDisplay() {
  if (!DB.config) return;

  var mode = DB.config.mode || 'solo';
  var userName = DB.config.userName || 'Utente';
  var partnerName = DB.config.partnerName || 'Partner';

  var profiloModo = document.getElementById('profiloModo');
  var profiloNomi = document.getElementById('profiloNomi');
  var profiloDisplay = document.getElementById('profiloDisplay');
  var impostazioniCoppia = document.getElementById('impostazioniCoppia');
  var btnSingolo = document.getElementById('btnSingolo');
  var btnCoppia = document.getElementById('btnCoppia');

  if (profiloModo) {
    if (mode === 'couple') {
      profiloModo.textContent = '👫 Coppia';
      profiloNomi.textContent = userName + ' & ' + partnerName;
      if (profiloDisplay) profiloDisplay.style.background = 'linear-gradient(135deg,#e91e63,#9c27b0)';
    } else {
      profiloModo.textContent = '👤 Singolo';
      profiloNomi.textContent = userName;
      if (profiloDisplay) profiloDisplay.style.background = 'linear-gradient(135deg,#667eea,#764ba2)';
    }
  }

  // Mostra/nascondi campi coppia
  if (impostazioniCoppia) {
    impostazioniCoppia.style.display = mode === 'couple' ? 'block' : 'none';
  }

  // Aggiorna stile bottoni
  if (btnSingolo && btnCoppia) {
    if (mode === 'couple') {
      btnSingolo.style.background = 'var(--bg)';
      btnSingolo.style.border = '2px solid var(--border)';
      btnCoppia.style.background = 'linear-gradient(135deg,#e91e63,#9c27b0)';
      btnCoppia.style.border = 'none';
      btnCoppia.style.color = '#fff';
    } else {
      btnCoppia.style.background = 'var(--bg)';
      btnCoppia.style.border = '2px solid var(--border)';
      btnSingolo.style.background = 'linear-gradient(135deg,#667eea,#764ba2)';
      btnSingolo.style.border = 'none';
      btnSingolo.style.color = '#fff';
    }
  }

  // Popola campi input
  var settingsUserName = document.getElementById('settingsUserName');
  var settingsPartnerName = document.getElementById('settingsPartnerName');
  if (settingsUserName) settingsUserName.value = userName;
  if (settingsPartnerName) settingsPartnerName.value = partnerName;

  // Aggiorna label buoni con nomi
  var buoniUserLabel = document.getElementById('buoniUserLabel');
  var buoniPartnerLabel = document.getElementById('buoniPartnerLabel');
  if (buoniUserLabel) buoniUserLabel.textContent = userName;
  if (buoniPartnerLabel) buoniPartnerLabel.textContent = partnerName;

  // Carica impostazioni buoni pasto
  var buoniUserToggle = document.getElementById('buoniUserToggle');
  var buoniPartnerToggle = document.getElementById('buoniPartnerToggle');
  var buoniPartnerRow = document.getElementById('buoniPartnerRow');

  if (DB.config.ticketRestaurant) {
    if (buoniUserToggle) buoniUserToggle.checked = DB.config.ticketRestaurant.user !== false;
    if (buoniPartnerToggle) buoniPartnerToggle.checked = DB.config.ticketRestaurant.partner === true;
  }

  // Mostra/nascondi riga partner buoni
  if (buoniPartnerRow) {
    buoniPartnerRow.style.display = mode === 'couple' ? 'flex' : 'none';
  }

  // Aggiorna preview buoni
  if (typeof aggiornaBuoniPreview === 'function') {
    aggiornaBuoniPreview();
  }
}

function cambiaModalita(nuovaModalita) {
  if (!DB.config) DB.config = {};
  DB.config.mode = nuovaModalita;

  // SALVA SUBITO nel DB!
  salvaDB();

  aggiornaProfiloDisplay();

  // Mostra/nascondi elementi specifici coppia
  var condivisoGroup = document.getElementById('condivisoCheckboxGroup');
  var virtualGroup = document.getElementById('virtualRecoveryGroup');
  var navCondiviso = document.getElementById('navCondiviso');
  var buoniPartnerRow = document.getElementById('buoniPartnerRow');

  if (nuovaModalita === 'solo') {
    if (condivisoGroup) condivisoGroup.style.display = 'none';
    if (virtualGroup) virtualGroup.style.display = 'none';
    if (navCondiviso) navCondiviso.style.display = 'none';
    if (buoniPartnerRow) buoniPartnerRow.style.display = 'none';
  } else {
    if (navCondiviso) navCondiviso.style.display = 'flex';
    if (buoniPartnerRow) buoniPartnerRow.style.display = 'flex';
  }

  // Aggiorna preview buoni
  if (typeof aggiornaBuoniPreview === 'function') {
    aggiornaBuoniPreview();
  }

  // Aggiorna visibilità opzioni buoni pasto ovunque
  if (typeof nascondiOpzioniBuoniPasto === 'function') {
    nascondiOpzioniBuoniPasto();
  }

  // Aggiorna visibilità di tutti i campi modalità
  aggiornaVisibilitaCampiModalita();

  // Feedback
  var modeText = nuovaModalita === 'couple' ? 'Coppia' : 'Singolo';
  mostraToast('✅ Modalità ' + modeText + ' attivata!', 'success');
}

function salvaProfilo() {
  if (!DB.config) DB.config = {};

  var settingsUserName = document.getElementById('settingsUserName');
  var settingsPartnerName = document.getElementById('settingsPartnerName');

  if (settingsUserName && settingsUserName.value.trim()) {
    DB.config.userName = settingsUserName.value.trim();
  }
  if (settingsPartnerName && settingsPartnerName.value.trim()) {
    DB.config.partnerName = settingsPartnerName.value.trim();
  }

  // Salva impostazioni buoni pasto
  if (!DB.config.ticketRestaurant) DB.config.ticketRestaurant = {};
  var buoniUserToggle = document.getElementById('buoniUserToggle');
  var buoniPartnerToggle = document.getElementById('buoniPartnerToggle');

  if (buoniUserToggle) {
    DB.config.ticketRestaurant.user = buoniUserToggle.checked;
  }
  if (buoniPartnerToggle) {
    DB.config.ticketRestaurant.partner = buoniPartnerToggle.checked;
  }

  DB.config.setupCompleted = true;
  salvaDB();
  aggiornaProfiloDisplay();
  aggiornaDash();

  // Aggiorna visibilità buoni ovunque
  aggiornaBuoniPreview();

  // Feedback
  mostraToast('✅ Profilo salvato con successo!', 'success');
}

// Aggiorna preview buoni pasto E salva subito nel DB
function aggiornaBuoniPreview() {
  var buoniUserToggle = document.getElementById('buoniUserToggle');
  var buoniPartnerToggle = document.getElementById('buoniPartnerToggle');
  var previewEl = document.getElementById('buoniPreview');

  var userChecked = buoniUserToggle ? buoniUserToggle.checked : false;
  var partnerChecked = buoniPartnerToggle ? buoniPartnerToggle.checked : false;

  // SALVA SUBITO nel DB quando i toggle cambiano
  if (!DB.config) DB.config = {};
  if (!DB.config.ticketRestaurant) DB.config.ticketRestaurant = {};
  DB.config.ticketRestaurant.user = userChecked;
  DB.config.ticketRestaurant.partner = partnerChecked;
  salvaDB();

  // In modalità singolo, ignora il partner per la visibilità
  var isSoloMode = DB.config && DB.config.mode === 'solo';
  if (isSoloMode) {
    partnerChecked = false;
  }

  var anyoneHasBuoni = userChecked || partnerChecked;

  // Aggiorna preview text
  if (previewEl) {
    var userName = DB.config && DB.config.userName ? DB.config.userName : 'Tu';
    var partnerName = DB.config && DB.config.partnerName ? DB.config.partnerName : 'Partner';

    var attivi = [];
    if (userChecked) attivi.push(userName);
    if (partnerChecked) attivi.push(partnerName);

    if (attivi.length === 0) {
      previewEl.innerHTML = '⚠️ Nessuno riceve buoni pasto';
      previewEl.style.background = 'rgba(244,67,54,0.15)';
      previewEl.style.color = '#f44336';
    } else {
      previewEl.innerHTML = '✅ Buoni pasto attivi per: ' + attivi.join(' e ');
      previewEl.style.background = 'rgba(255,152,0,0.15)';
      previewEl.style.color = '#ff9800';
    }
  }

  // Nascondi/mostra card Impostazioni Buoni Pasto
  var impostazioniBuoniCard = document.getElementById('impostazioniBuoniCard');
  if (impostazioniBuoniCard) {
    impostazioniBuoniCard.style.display = anyoneHasBuoni ? 'block' : 'none';
  }

  // Nascondi/mostra opzione buoni nei dropdown
  var optMetodoBuoni = document.getElementById('optMetodoBuoni');
  var optDestBuoni = document.getElementById('optDestBuoni');
  if (optMetodoBuoni) optMetodoBuoni.style.display = anyoneHasBuoni ? '' : 'none';
  if (optDestBuoni) optDestBuoni.style.display = anyoneHasBuoni ? '' : 'none';

  // Aggiorna lista conti (per mostrare/nascondere buoni)
  if (typeof aggiornaListaConti === 'function') {
    aggiornaListaConti();
  }

  // Aggiorna stile toggle switches
  aggiornaStileToggleBuoni();
}

function aggiornaStileToggleBuoni() {
  var buoniUserToggle = document.getElementById('buoniUserToggle');
  var buoniPartnerToggle = document.getElementById('buoniPartnerToggle');

  if (buoniUserToggle) {
    var sliderUser = buoniUserToggle.parentElement.querySelector('.buoniSlider');
    var trackUser = buoniUserToggle.nextElementSibling;
    if (buoniUserToggle.checked) {
      if (trackUser) trackUser.style.background = '#ff9800';
      if (sliderUser) sliderUser.style.transform = 'translateX(26px)';
    } else {
      if (trackUser) trackUser.style.background = '#ccc';
      if (sliderUser) sliderUser.style.transform = 'translateX(0)';
    }
  }

  if (buoniPartnerToggle) {
    var sliderPartner = buoniPartnerToggle.parentElement.querySelector('.buoniSlider');
    var trackPartner = buoniPartnerToggle.nextElementSibling;
    if (buoniPartnerToggle.checked) {
      if (trackPartner) trackPartner.style.background = '#ff9800';
      if (sliderPartner) sliderPartner.style.transform = 'translateX(26px)';
    } else {
      if (trackPartner) trackPartner.style.background = '#ccc';
      if (sliderPartner) sliderPartner.style.transform = 'translateX(0)';
    }
  }
}

// ========== SLIDER EVOLUZIONE PATRIMONIO ==========
var patrimonioSliderIndex = 0;
var patrimonioHistory = [];

function calcolaStoriaPatrimonio() {
  patrimonioHistory = [];

  if (!DB.transazioni || DB.transazioni.length === 0) return;

  // Ordina transazioni per data
  var transazioniOrdinate = DB.transazioni.slice().sort(function(a, b) {
    var dataA = new Date(a.data + 'T' + (a.ora || '12:00'));
    var dataB = new Date(b.data + 'T' + (b.ora || '12:00'));
    return dataA - dataB;
  });

  var saldo = 0;
  var saldoBuoni = 0;

  // Aggiungi punto iniziale
  patrimonioHistory.push({
    data: transazioniOrdinate[0].data,
    saldo: 0,
    saldoBuoni: 0,
    totale: 0,
    transazione: null,
    descrizione: 'Inizio tracking'
  });

  transazioniOrdinate.forEach(function(t, index) {
    var importo = parseFloat(t.importo) || 0;
    var isBuoni = t.categoria === 'Buoni Pasto' || t.metodo === 'buoni_pasto';

    if (t.tipo === 'income') {
      if (isBuoni) {
        saldoBuoni += importo;
      } else {
        saldo += importo;
      }
    } else if (t.tipo === 'expense') {
      if (t.metodo === 'buoni_pasto' || isBuoni) {
        saldoBuoni -= importo;
      } else {
        saldo -= importo;
      }
    }
    // partner_payment non modifica il saldo dell'utente direttamente

    patrimonioHistory.push({
      data: t.data,
      ora: t.ora,
      saldo: saldo,
      saldoBuoni: saldoBuoni,
      totale: saldo + saldoBuoni,
      transazione: t,
      descrizione: (t.tipo === 'income' ? '+' : '-') + '€' + importo.toFixed(2) + ' ' + (t.categoria || '') + ' ' + (t.note || '')
    });
  });

  patrimonioSliderIndex = patrimonioHistory.length - 1;
}

function aggiornaSliderPatrimonio() {
  var slider = document.getElementById('patrimonioSlider');
  var display = document.getElementById('patrimonioSliderDisplay');
  var dataDisplay = document.getElementById('patrimonioSliderData');
  var dettaglioDisplay = document.getElementById('patrimonioSliderDettaglio');

  if (!slider || patrimonioHistory.length === 0) return;

  slider.max = patrimonioHistory.length - 1;
  slider.value = patrimonioSliderIndex;

  var punto = patrimonioHistory[patrimonioSliderIndex];

  if (display) {
    display.textContent = formatEuro(punto.totale);
    display.style.color = punto.totale >= 0 ? '#27ae60' : '#e74c3c';
  }

  if (dataDisplay) {
    var dataFormattata = new Date(punto.data).toLocaleDateString('it-IT', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
    dataDisplay.textContent = dataFormattata + (punto.ora ? ' ' + punto.ora : '');
  }

  if (dettaglioDisplay) {
    dettaglioDisplay.textContent = punto.descrizione;
  }
}

function onSliderPatrimonioChange(value) {
  patrimonioSliderIndex = parseInt(value);
  aggiornaSliderPatrimonio();
}

function initSliderPatrimonio() {
  calcolaStoriaPatrimonio();
  aggiornaSliderPatrimonio();
}

// ========== NASCONDI OPZIONI BUONI PASTO SE DISABILITATI ==========
function nascondiOpzioniBuoniPasto() {
  // Controlla se l'utente ha i buoni pasto
  var hasTickets = DB.config && DB.config.ticketRestaurant && DB.config.ticketRestaurant.user;

  // In modalità coppia, controlla anche il partner
  var partnerHasTickets = DB.config && DB.config.ticketRestaurant && DB.config.ticketRestaurant.partner;

  // In modalità singolo, ignora il partner
  var isSoloMode = DB.config && DB.config.mode === 'solo';
  if (isSoloMode) {
    partnerHasTickets = false;
  }

  // Se nessuno ha i buoni, nascondi tutte le opzioni relative
  var anyoneHasTickets = hasTickets || partnerHasTickets;

  // Nascondi/mostra opzione nel dropdown destinazione (entrate)
  var optDestBuoni = document.getElementById('optDestBuoni');
  if (optDestBuoni) {
    optDestBuoni.style.display = anyoneHasTickets ? '' : 'none';
  }

  // Nascondi/mostra opzione nel dropdown metodo pagamento (uscite)
  var optMetodoBuoni = document.getElementById('optMetodoBuoni');
  if (optMetodoBuoni) {
    optMetodoBuoni.style.display = anyoneHasTickets ? '' : 'none';
  }

  // Nascondi/mostra checkbox pagamento misto
  var pagamentoMistoGroup = document.getElementById('pagamentoMistoCheckboxGroup');
  if (pagamentoMistoGroup && !anyoneHasTickets) {
    pagamentoMistoGroup.style.display = 'none';
  }

  // Nascondi/mostra card Impostazioni Buoni Pasto
  var impostazioniBuoniCard = document.getElementById('impostazioniBuoniCard');
  if (impostazioniBuoniCard) {
    impostazioniBuoniCard.style.display = anyoneHasTickets ? 'block' : 'none';
  }

  // Aggiorna lista conti (per mostrare/nascondere buoni)
  if (typeof aggiornaListaConti === 'function') {
    aggiornaListaConti();
  }

  // Nascondi categoria "Buoni Pasto" dalle entrate se nessuno ha i buoni
  // Questo viene gestito dinamicamente in aggCatSel()

  console.log('[BUONI] Utente ha buoni:', hasTickets, '| Partner ha buoni:', partnerHasTickets);
}

// ========== INIZIALIZZAZIONE ==========
try {
  console.log('[INIT] 1. Inizio caricamento...');
  carica();
  console.log('[INIT] 2. Dati caricati');
  
  applyTheme();
  console.log('[INIT] 3. Tema applicato');
  
  aggAnni();
  console.log('[INIT] 4. Anni generati');
  
  var monthSelect = document.getElementById('month');
  if (monthSelect) {
    monthSelect.value = mese;
  }
  console.log('[INIT] 5. Mese impostato');
  
  aggiorna();
  console.log('[INIT] 6. Dashboard aggiornata');
  
  aggiornaBottoniOggi();
  aggiornaDisplayAnnoMese();  // Aggiorna display anno/mese nell'header
  console.log('[INIT] 7. UI aggiornata');
  
  // NUOVO: Aggiorna testi dinamici in base al config
  aggiornaTestiDinamici();
  console.log('[INIT] 8. Testi dinamici aggiornati');
  
  // Carica impostazioni buoni
  caricaImpostazioniBuoni();
  console.log('[INIT] 9. Impostazioni buoni caricate');

  // Nascondi opzioni buoni pasto se utente non li ha
  nascondiOpzioniBuoniPasto();
  console.log('[INIT] 9b. Opzioni buoni pasto aggiornate');

  // NUOVO: Aggiorna display profilo coppia/singolo
  aggiornaProfiloDisplay();
  console.log('[INIT] 9c. Profilo utente aggiornato');

  // NUOVO: Inizializza slider patrimonio
  initSliderPatrimonio();
  console.log('[INIT] 9d. Slider patrimonio inizializzato');

  // Inizializza Overview Finanze
  setTimeout(function() {
    aggiornaOverviewFinanze();
  }, 100);
  
  // Carica conti dinamici
  inizializzaContiDinamici();
  aggiornaListaConti();
  aggiornaDropdownConti();
  
  // Inizializza e aggiorna grafico distribuzione
  inizializzaDistribSelettori();
  aggiornaDistribuzione();
  
  // ========== CONTROLLO SETUP WIZARD ==========
  // Se setup non completato, mostra wizard PRIMA del PIN
  if (!DB.config || !DB.config.setupCompleted) {
    mostraWizardSetup();
  } else {
    // Setup già fatto, procedi con PIN se abilitato
    if (biometricEnabled && !isAuthenticated) {
      mostraSchermataBlocco();
    }
  }
  
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
      if (DB.theme === 'auto') applyTheme();
    });
  }
  
  // Inizializza gesture mobile
  if ('ontouchstart' in window) {
    initPullToRefresh();
  }
} catch (error) {
  // Mostra errore in modo user-friendly
  var errorMsg = 'Errore inizializzazione: ' + (error.message || 'Sconosciuto');
  if (typeof mostraToast === 'function') {
    mostraToast('❌ ' + errorMsg, 'error');
  } else {
    alert(errorMsg);
  }
}

// ========== PWA STANDALONE (funziona senza service worker) ==========
// Service Worker rimosso per compatibilità con apertura diretta da File

// Mostra prompt di installazione PWA (se disponibile)
let deferredPrompt;
window.addEventListener('beforeinstallprompt', function(e) {
  e.preventDefault();
  deferredPrompt = e;
  
  // Mostra un banner per installare l'app
  var installBanner = document.createElement('div');
  installBanner.innerHTML = '<div style="position:fixed;bottom:80px;left:15px;right:15px;background:linear-gradient(135deg,#a1a1aa,#71717a);color:#fff;padding:15px;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.3);z-index:1000;animation:slideUp 0.3s ease-out">' +
    '<div style="display:flex;justify-content:space-between;align-items:center">' +
    '<div style="flex:1"><strong>📱 Installa l\'app</strong><br><span style="font-size:0.85em;opacity:0.9">Aggiungi Budget Manager alla home screen</span></div>' +
    '<button onclick="installPWA()" style="background:#fff;color:#a1a1aa;border:none;padding:10px 20px;border-radius:8px;font-weight:700;cursor:pointer;margin-left:10px">Installa</button>' +
    '<button onclick="this.closest(\'div\').parentElement.remove()" style="background:rgba(255,255,255,0.2);color:#fff;border:none;padding:10px;border-radius:8px;margin-left:8px;cursor:pointer">✕</button>' +
    '</div></div>';
  
  // Mostra solo se non è già installata
  if (!window.matchMedia('(display-mode: standalone)').matches) {
    document.body.appendChild(installBanner);
    
    // Nascondi automaticamente dopo 10 secondi
    setTimeout(function() {
      if (installBanner.parentElement) {
        installBanner.remove();
      }
    }, 10000);
  }
});

window.installPWA = function() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(function(choiceResult) {
      if (choiceResult.outcome === 'accepted') {
      }
      deferredPrompt = null;
      // Rimuovi il banner
      var banner = document.querySelector('div[style*="position:fixed"]');
      if (banner) banner.remove();
    });
  }
};

// Aggiungi stile per l'animazione del banner
var style = document.createElement('style');
style.textContent = '@keyframes slideUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }';
document.head.appendChild(style);

// Inizializza select Finanze
setTimeout(function() {
  try {
    var yearFinanze = document.getElementById('yearFinanze');
    var monthFinanze = document.getElementById('monthFinanze');
    
    if (yearFinanze && monthFinanze) {
      // Popola anni (2022-2030)
      for (var y = 2022; y <= 2030; y++) {
        var opt = document.createElement('option');
        opt.value = y;
        opt.textContent = y;
        yearFinanze.appendChild(opt);
      }
      
      // Imposta valori correnti
      var today = new Date();
      var currentYear = today.getFullYear();
      var currentMonth = today.getMonth();
      
      yearFinanze.value = currentYear;
      monthFinanze.value = currentMonth;
    }
  } catch(e) {
    console.error('Errore inizializzazione finanze:', e);
  }
}, 500);

// ========== EVOLUZIONE PATRIMONIO GLASSMORPHISM ==========
var evoPeriodMonths = 6;
var evoSelectedDate = null;

function inizializzaEvoluzione_OLD_DISABLED() {
  // DISABILITATA - Funzione vecchia sostituita da versione semplice
  console.log('[EVO] VECCHIA FUNZIONE CHIAMATA - IGNORATA');
  return;
}

// OBSOLETO: Sostituito da aggiornaDisplayMeseAnno() e dual dropdown
/*
function selezionaEvoMese(data) {
  evoSelectedDate = data;
  
  // Aggiorna UI selector
  var meseNomi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  var monthText = document.getElementById('evoMonthText');
  if (monthText) {
    monthText.textContent = meseNomi[data.getMonth()] + ' ' + data.getFullYear();
  }
  
  // Aggiorna selected nel dropdown
  document.querySelectorAll('.evo-month-option').forEach(function(opt) {
    opt.classList.remove('selected');
    if (parseInt(opt.dataset.timestamp) === data.getTime()) {
      opt.classList.add('selected');
    }
  });
  
  // Chiudi dropdown
  var dropdown = document.getElementById('evoMonthDropdown');
  if (dropdown) dropdown.classList.remove('active');
  
  var selector = document.getElementById('evoMonthSelector');
  if (selector) selector.classList.remove('active');
  
  aggiornaEvoluzione();
  playSound('click');
}
*/


function aggiornaEvoluzione_OLD_DISABLED2() {
  // DISABILITATA - Usa versione semplice
  console.log('[EVO] VECCHIA aggiornaEvoluzione IGNORATA');
  return;
}

function disegnaEvoGrafico(snapshots, currentSnapshot) {
  if (!snapshots || snapshots.length === 0) return;
  
  var valuesContainer = document.getElementById('evoChartValues');
  if (!valuesContainer) return;
  
  valuesContainer.innerHTML = '';
  
  // Trova min/max per scaling
  var values = snapshots.map(function(s) { return s.patrimonio; });
  var minVal = Math.min.apply(null, values);
  var maxVal = Math.max.apply(null, values);
  var range = maxVal - minVal;
  
  // Protezione da valori infiniti o NaN
  if (!isFinite(minVal) || !isFinite(maxVal)) return;
  
  // CURVA SMOOTH CON AREA
  var svgWidth = 770;
  var svgHeight = 130;
  var segmentWidth = svgWidth / (snapshots.length - 1 || 1);
  
  var pathData = '';
  var fillData = '';
  
  snapshots.forEach(function(snap, idx) {
    var x = idx * segmentWidth;
    var normalizedValue = range > 0 ? (snap.patrimonio - minVal) / range : 0.5;
    var y = svgHeight - (normalizedValue * (svgHeight * 0.7) + svgHeight * 0.15);
    
    if (idx === 0) {
      pathData = 'M' + x + ',' + y;
      fillData = 'M' + x + ',' + y;
    } else {
      var prevX = (idx - 1) * segmentWidth;
      var prevSnap = snapshots[idx - 1];
      var prevNormalized = range > 0 ? (prevSnap.patrimonio - minVal) / range : 0.5;
      var prevY = svgHeight - (prevNormalized * (svgHeight * 0.7) + svgHeight * 0.15);
      
      // Bezier curve per smooth effect
      var cpX1 = prevX + segmentWidth / 3;
      var cpX2 = x - segmentWidth / 3;
      pathData += ' C' + cpX1 + ',' + prevY + ' ' + cpX2 + ',' + y + ' ' + x + ',' + y;
      fillData += ' C' + cpX1 + ',' + prevY + ' ' + cpX2 + ',' + y + ' ' + x + ',' + y;
    }
  });
  
  // Chiudi area fill
  fillData += ' L' + svgWidth + ',' + svgHeight + ' L0,' + svgHeight + ' Z';
  
  var pathEl = document.getElementById('evoCurvePath');
  var fillEl = document.getElementById('evoCurveFill');
  if (pathEl) pathEl.setAttribute('d', pathData);
  if (fillEl) fillEl.setAttribute('d', fillData);
  
  // Crea markers con dots SULLA LINEA
  snapshots.forEach(function(snap, idx) {
    var normalizedValue = range > 0 ? (snap.patrimonio - minVal) / range : 0.5;
    
    // Calcola l'altezza esatta dove si trova la linea (da 15% a 85% dell'altezza)
    var lineHeightPercent = normalizedValue * 70 + 15;
    
    var marker = document.createElement('div');
    marker.className = 'evo-value-marker';
    marker.style.animationDelay = (0.8 + idx * 0.2) + 's';
    
    // Calcola percentuale vs precedente
    var percent = 0;
    if (idx > 0) {
      var prevVal = snapshots[idx - 1].patrimonio;
      percent = prevVal !== 0 ? ((snap.patrimonio - prevVal) / prevVal) * 100 : 0;
    }
    
    // Check se è il mese corrente
    var isCurrent = currentSnapshot && snap.data.getTime() === currentSnapshot.data.getTime();
    
    // Box con valore E percentuale SEMPRE VISIBILE
    var valueBox = document.createElement('div');
    valueBox.className = 'evo-value-box';
    
    var percentDiv = document.createElement('div');
    if (idx > 0) {
      percentDiv.className = 'evo-box-percent ' + (percent >= 0 ? 'positive' : 'negative');
      percentDiv.textContent = (percent >= 0 ? '+' : '') + percent.toFixed(1) + '%';
    } else {
      percentDiv.className = 'evo-box-percent neutral';
      percentDiv.textContent = '—';
    }
    
    var amount = document.createElement('div');
    amount.className = 'evo-box-amount';
    amount.textContent = formatEuroK(snap.patrimonio);
    
    valueBox.appendChild(percentDiv);
    valueBox.appendChild(amount);
    
    // DOT posizionato con bottom percentage
    var dot = document.createElement('div');
    dot.className = 'evo-value-dot' + (isCurrent ? ' current' : '');
    dot.style.bottom = lineHeightPercent + '%';
    
    // Label mese sotto (SOLO MESE)
    var monthLabel = document.createElement('div');
    monthLabel.className = 'evo-month-label';
    
    // Estrai solo il mese (es: "Gen" da "Gen 26")
    var labelParts = snap.label.split(' ');
    monthLabel.textContent = labelParts[0]; // Solo "Gen", "Dic", etc
    
    marker.appendChild(valueBox);
    marker.appendChild(dot);
    marker.appendChild(monthLabel);
    
    valuesContainer.appendChild(marker);
  });
  
  console.log('[EVO] Smooth curve con dots sulla linea:', snapshots.length, 'elementi');
}

function formatEuroK(val) {
  if (val >= 1000) {
    return '€' + (val / 1000).toFixed(1) + 'k';
  }
  return '€' + val.toFixed(0);
}

function aggiornaEvoStats(allSnapshots, currentSnapshot, currentIdx) {
  // Stat 1: Vs mese scorso
  var statMonth = document.getElementById('evoStatMonth');
  if (statMonth) {
    if (currentIdx > 0) {
      var prevSnap = allSnapshots[currentIdx - 1];
      var delta = currentSnapshot.patrimonio - prevSnap.patrimonio;
      statMonth.textContent = (delta >= 0 ? '+' : '') + formatEuro(delta);
      statMonth.className = 'evo-stat-number ' + (delta >= 0 ? '' : 'negative');
    } else {
      statMonth.textContent = '-';
      statMonth.className = 'evo-stat-number';
    }
  }
  
  // Stat 2: Da inizio anno
  var statYear = document.getElementById('evoStatYear');
  var yearLabel = document.getElementById('evoStatYearLabel');
  if (statYear && yearLabel) {
    var currentYear = currentSnapshot.data.getFullYear();
    var yearStart = allSnapshots.find(function(s) {
      return s.data.getFullYear() === currentYear && s.data.getMonth() === 0;
    });
    
    if (yearStart) {
      var deltaYear = currentSnapshot.patrimonio - yearStart.patrimonio;
      statYear.textContent = (deltaYear >= 0 ? '+' : '') + formatEuro(deltaYear);
      statYear.className = 'evo-stat-number ' + (deltaYear >= 0 ? '' : 'negative');
      yearLabel.textContent = 'Da Gen ' + currentYear;
    } else {
      statYear.textContent = '-';
      statYear.className = 'evo-stat-number';
      yearLabel.textContent = 'Anno Corrente';
    }
  }
}

// ========== DUAL DROPDOWN FUNCTIONS ==========
function inizializzaEvoDualDropdown(snapshots) {
  console.log('[DUAL] === INIZIO INIZIALIZZAZIONE DUAL DROPDOWN ===');
  console.log('[DUAL] Snapshots ricevuti:', snapshots ? snapshots.length : 0);
  
  if (!snapshots || snapshots.length === 0) {
    console.error('[DUAL] Nessuno snapshot disponibile!');
    return;
  }
  
  var anni = [];
  snapshots.forEach(function(snap) {
    var anno = snap.data.getFullYear();
    if (anni.indexOf(anno) === -1) anni.push(anno);
  });
  console.log('[DUAL] Anni trovati:', anni);
  
  var yearDropdown = document.getElementById('evoYearDropdown');
  console.log('[DUAL] yearDropdown elemento:', !!yearDropdown);
  
  if (yearDropdown) {
    yearDropdown.innerHTML = '';
    anni.forEach(function(anno) {
      var opt = document.createElement('div');
      opt.className = 'evo-dropdown-option';
      opt.textContent = anno;
      opt.onclick = function() { 
        console.log('[DUAL] Click anno:', anno);
        selezionaAnno(anno, snapshots); 
      };
      yearDropdown.appendChild(opt);
    });
    console.log('[DUAL] Opzioni anno create:', anni.length);
  }
  
  var yearSelector = document.getElementById('evoYearSelector');
  console.log('[DUAL] yearSelector elemento:', !!yearSelector);
  
  if (yearSelector) {
    yearSelector.onclick = function(e) {
      console.log('[DUAL] Click yearSelector');
      e.stopPropagation();
      yearDropdown.classList.toggle('active');
      this.classList.toggle('active');
      var monthDD = document.getElementById('evoMonthMiniDropdown');
      var monthSel = document.getElementById('evoMonthMiniSelector');
      if (monthDD) monthDD.classList.remove('active');
      if (monthSel) monthSel.classList.remove('active');
    };
  }
  
  var monthSelector = document.getElementById('evoMonthMiniSelector');
  var monthDropdown = document.getElementById('evoMonthMiniDropdown');
  console.log('[DUAL] monthSelector elemento:', !!monthSelector);
  console.log('[DUAL] monthDropdown elemento:', !!monthDropdown);
  
  if (monthSelector && monthDropdown) {
    monthSelector.onclick = function(e) {
      console.log('[DUAL] Click monthSelector');
      e.stopPropagation();
      aggiornaDropdownMesi();
      monthDropdown.classList.toggle('active');
      this.classList.toggle('active');
      yearDropdown.classList.remove('active');
      yearSelector.classList.remove('active');
    };
  }
  
  var ultimo = snapshots[snapshots.length - 1];
  console.log('[DUAL] Ultimo snapshot:', ultimo.label);
  aggiornaDisplayMeseAnno(ultimo.data);
  console.log('[DUAL] === DUAL DROPDOWN INIZIALIZZATO ===');
}

function aggiornaDisplayMeseAnno(data) {
  var yearText = document.getElementById('evoYearText');
  var monthText = document.getElementById('evoMonthMiniText');
  var mesi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];
  if (yearText) yearText.textContent = data.getFullYear();
  if (monthText) monthText.textContent = mesi[data.getMonth()];
}

function selezionaAnno(anno, allSnapshots) {
  var snapAnno = allSnapshots.find(function(s) { return s.data.getFullYear() === anno; });
  if (snapAnno) {
    evoSelectedDate = snapAnno.data;
    aggiornaDisplayMeseAnno(snapAnno.data);
    aggiornaEvoluzione();
  }
  document.getElementById('evoYearDropdown').classList.remove('active');
  document.getElementById('evoYearSelector').classList.remove('active');
}

function aggiornaDropdownMesi() {
  var allSnaps = generaSnapshotsPatrimonio();
  var annoCorrente = parseInt(document.getElementById('evoYearText').textContent);
  var mesiAnno = allSnaps.filter(function(s) { return s.data.getFullYear() === annoCorrente; });
  var dropdown = document.getElementById('evoMonthMiniDropdown');
  dropdown.innerHTML = '';
  mesiAnno.forEach(function(snap) {
    var opt = document.createElement('div');
    opt.className = 'evo-dropdown-option';
    opt.textContent = snap.label.split(' ')[0];
    opt.onclick = function() {
      evoSelectedDate = snap.data;
      aggiornaDisplayMeseAnno(snap.data);
      aggiornaEvoluzione();
      dropdown.classList.remove('active');
      document.getElementById('evoMonthMiniSelector').classList.remove('active');
    };
    dropdown.appendChild(opt);
  });
}

// NOTA: Inizializzazione Evoluzione ora gestita in vai('finanze')
// Non serve più l'inizializzazione globale al caricamento
/*
// Inizializza dopo caricamento - aumentato timeout
setTimeout(function() {
  try {
    if (typeof generaSnapshotsPatrimonio !== 'function') {
      console.error('[EVO] generaSnapshotsPatrimonio non disponibile, riprovo...');
      setTimeout(function() {
        try {
          inizializzaEvoluzione();
        } catch(e2) {
          console.error('[EVO] Secondo tentativo fallito:', e2);
        }
      }, 2000);
      return;
    }
    console.log('[EVO] Chiamata inizializzaEvoluzione...');
    inizializzaEvoluzione();
  } catch(e) {
    console.error('[EVO] Errore inizializzazione evoluzione:', e);
  }
}, 2000); // Aumentato a 2000ms

// FALLBACK: Forza inizializzazione dopo 4 secondi se non è partita
setTimeout(function() {
  var monthText = document.getElementById('evoMonthText');
  if (monthText && monthText.textContent === 'Caricamento...') {
    console.warn('[EVO] FALLBACK: Forzo inizializzazione dopo 4s');
    try {
      inizializzaEvoluzione();
    } catch(e) {
      console.error('[EVO] Fallback fallito:', e);
    }
  }
}, 4000);
*/

// ========================================
// ========== PAGAMENTI RICORRENTI ==========
// ========================================

var tipoRicorrenteSelezionato = 'abbonamento';
var filtroRicorrentiAttivo = 'tutti';

// Inizializza array ricorrenti se non esiste
function initRicorrenti() {
  if (!DB.ricorrenti) {
    DB.ricorrenti = [];
  }
}

// Apri modal per nuovo ricorrente
function apriModalRicorrente(id) {
  initRicorrenti();

  var modal = document.getElementById('modalRicorrente');
  var titolo = document.getElementById('modalRicorrenteTitolo');
  var btnElimina = document.getElementById('btnEliminaRicorrente');

  // Popola select metodi pagamento
  var selMetodo = document.getElementById('ricorrenteMetodo');
  selMetodo.innerHTML = '';
  var conti = DB.contiPersonalizzati || [
    { id: 'webank', nome: 'WeBank', icona: '💳' },
    { id: 'revolut', nome: 'Revolut', icona: '🌐' },
    { id: 'contanti', nome: 'Contanti', icona: '💵' }
  ];
  conti.forEach(function(c) {
    var opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = c.icona + ' ' + c.nome;
    selMetodo.appendChild(opt);
  });

  // Data di default: oggi
  var oggi = new Date().toISOString().split('T')[0];

  if (id) {
    // Modifica esistente
    var ric = DB.ricorrenti.find(function(r) { return r.id == id; });
    if (ric) {
      titolo.textContent = 'Modifica Ricorrente';
      document.getElementById('ricorrenteId').value = ric.id;
      document.getElementById('ricorrenteNome').value = ric.nome;
      document.getElementById('ricorrenteImporto').value = ric.importo;
      document.getElementById('ricorrenteFrequenza').value = ric.frequenza || 'mensile';
      document.getElementById('ricorrenteGiorno').value = ric.giorno;
      document.getElementById('ricorrenteDataInizio').value = ric.dataInizio || oggi;
      document.getElementById('ricorrenteDataFine').value = ric.dataFine || '';
      document.getElementById('ricorrenteCategoria').value = ric.categoria;
      document.getElementById('ricorrenteMetodo').value = ric.metodo;
      document.getElementById('ricorrenteIcona').value = ric.icona || '💳';
      document.getElementById('ricorrenteColore').value = ric.colore || '#7c4dff';
      document.getElementById('ricorrenteNote').value = ric.note || '';

      // Seleziona tipo
      tipoRicorrenteSelezionato = ric.tipo || 'abbonamento';
      document.querySelectorAll('.tipo-ricorrente').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.tipo === tipoRicorrenteSelezionato);
      });

      btnElimina.style.display = 'block';
    }
  } else {
    // Nuovo
    titolo.textContent = 'Nuovo Pagamento Ricorrente';
    document.getElementById('ricorrenteId').value = '';
    document.getElementById('ricorrenteNome').value = '';
    document.getElementById('ricorrenteImporto').value = '';
    document.getElementById('ricorrenteFrequenza').value = 'mensile';
    document.getElementById('ricorrenteGiorno').value = '1';
    document.getElementById('ricorrenteDataInizio').value = oggi;
    document.getElementById('ricorrenteDataFine').value = '';
    document.getElementById('ricorrenteCategoria').value = 'TV, film, musica, streaming';
    document.getElementById('ricorrenteMetodo').value = conti[0] ? conti[0].id : 'webank';
    document.getElementById('ricorrenteIcona').value = '🎬';
    document.getElementById('ricorrenteColore').value = '#7c4dff';
    document.getElementById('ricorrenteNote').value = '';
    tipoRicorrenteSelezionato = 'abbonamento';
    document.querySelectorAll('.tipo-ricorrente').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.tipo === 'abbonamento');
    });
    btnElimina.style.display = 'none';
  }

  modal.style.display = 'flex';
}

function chiudiModalRicorrente() {
  document.getElementById('modalRicorrente').style.display = 'none';
}

function selezionaTipoRicorrente(tipo, btn) {
  tipoRicorrenteSelezionato = tipo;
  document.querySelectorAll('.tipo-ricorrente').forEach(function(b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  // Cambia icona e categoria default in base al tipo
  var iconaSelect = document.getElementById('ricorrenteIcona');
  var catSelect = document.getElementById('ricorrenteCategoria');
  if (tipo === 'abbonamento') {
    iconaSelect.value = '🎬';
    catSelect.value = 'TV, film, musica, streaming';
  } else if (tipo === 'bolletta') {
    iconaSelect.value = '💡';
    catSelect.value = 'Luce';
  } else if (tipo === 'prestito') {
    iconaSelect.value = '🏦';
    catSelect.value = 'Prestito';
  } else {
    iconaSelect.value = '📋';
    catSelect.value = 'Altro';
  }
}

function salvaRicorrente() {
  initRicorrenti();

  var id = document.getElementById('ricorrenteId').value;
  var nome = document.getElementById('ricorrenteNome').value.trim();
  var importo = parseFloat(document.getElementById('ricorrenteImporto').value) || 0;
  var frequenza = document.getElementById('ricorrenteFrequenza').value;
  var giorno = parseInt(document.getElementById('ricorrenteGiorno').value) || 1;
  var dataInizio = document.getElementById('ricorrenteDataInizio').value;
  var dataFine = document.getElementById('ricorrenteDataFine').value;
  var categoria = document.getElementById('ricorrenteCategoria').value;
  var metodo = document.getElementById('ricorrenteMetodo').value;
  var icona = document.getElementById('ricorrenteIcona').value;
  var colore = document.getElementById('ricorrenteColore').value;
  var note = document.getElementById('ricorrenteNote').value.trim();

  if (!nome) {
    mostraToast('⚠️ Inserisci un nome', 'warning');
    return;
  }
  if (importo <= 0) {
    mostraToast('⚠️ Inserisci un importo valido', 'warning');
    return;
  }

  var ricorrente = {
    id: id ? parseInt(id) : Date.now(),
    nome: nome,
    tipo: tipoRicorrenteSelezionato,
    importo: importo,
    frequenza: frequenza,
    giorno: giorno,
    dataInizio: dataInizio,
    dataFine: dataFine || null,
    categoria: categoria,
    metodo: metodo,
    icona: icona,
    colore: colore,
    note: note,
    attivo: true,
    dataCreazione: id ? undefined : new Date().toISOString()
  };

  if (id) {
    // Modifica
    var idx = DB.ricorrenti.findIndex(function(r) { return r.id == id; });
    if (idx !== -1) {
      ricorrente.dataCreazione = DB.ricorrenti[idx].dataCreazione;
      DB.ricorrenti[idx] = ricorrente;
    }
    mostraToast('✅ Ricorrente modificato!', 'success');
  } else {
    // Nuovo
    DB.ricorrenti.push(ricorrente);
    mostraToast('✅ Ricorrente aggiunto!', 'success');
  }

  salvaDB();
  chiudiModalRicorrente();
  mostraRicorrenti();
}

function eliminaRicorrente() {
  var id = document.getElementById('ricorrenteId').value;
  if (!id) return;

  if (confirm('Eliminare questo pagamento ricorrente?')) {
    DB.ricorrenti = DB.ricorrenti.filter(function(r) { return r.id != id; });
    salvaDB();
    chiudiModalRicorrente();
    mostraRicorrenti();
    mostraToast('🗑️ Ricorrente eliminato', 'success');
  }
}

function filtraRicorrenti(tipo, btn) {
  filtroRicorrentiAttivo = tipo;
  document.querySelectorAll('.ricorrenti-tab').forEach(function(t) {
    t.classList.remove('active');
  });
  btn.classList.add('active');
  mostraRicorrenti();
}

function mostraRicorrenti() {
  initRicorrenti();

  var oggi = new Date();
  var giornoOggi = oggi.getDate();
  var container = document.getElementById('listaRicorrenti');

  // Filtra per tipo
  var lista = DB.ricorrenti.filter(function(r) {
    if (filtroRicorrentiAttivo === 'tutti') return true;
    return r.tipo === filtroRicorrentiAttivo;
  });

  // Calcola totali
  var totale = 0;
  var pagato = 0;
  var daPagare = 0;

  DB.ricorrenti.forEach(function(r) {
    if (r.attivo !== false) {
      totale += r.importo;
      if (r.giorno <= giornoOggi) {
        pagato += r.importo;
      } else {
        daPagare += r.importo;
      }
    }
  });

  // Aggiorna riepilogo
  document.getElementById('ricorrentiTotale').textContent = formatEuro(totale);
  document.getElementById('ricorrentiPagato').textContent = formatEuro(pagato);
  document.getElementById('ricorrentiDaPagare').textContent = formatEuro(daPagare);

  var percentuale = totale > 0 ? (pagato / totale * 100) : 0;
  document.getElementById('ricorrentiProgressBar').style.width = percentuale + '%';

  // Calcola saldo dopo ricorrenze
  var saldoTotale = calcolaSaldoTotaleRicorrenti();
  var saldoDopo = saldoTotale - daPagare;
  var saldoDopoEl = document.getElementById('saldoDopoRicorrenze');
  saldoDopoEl.textContent = formatEuro(saldoDopo);
  saldoDopoEl.style.color = saldoDopo >= 0 ? '#4ecca3' : '#ff6b6b';

  // Genera lista
  if (lista.length === 0) {
    container.innerHTML = '<div class="empty" style="padding:30px;text-align:center;color:#888">' +
      '<div style="font-size:2.5em;margin-bottom:10px">🔄</div>' +
      '<div>Nessun pagamento ricorrente</div>' +
      '<div style="font-size:0.85em;margin-top:5px">Aggiungi abbonamenti, bollette o prestiti</div>' +
      '</div>';
  } else {
    var html = '';

    // Ordina per giorno del mese
    lista.sort(function(a, b) { return a.giorno - b.giorno; });

    lista.forEach(function(r) {
      var isPagato = r.giorno <= giornoOggi;
      var statusClass = isPagato ? 'pagato' : 'da-pagare';
      var statusIcon = isPagato ? '✓' : '○';
      var statusColor = isPagato ? '#4ecca3' : '#ff9800';

      html += '<div class="ricorrente-item ' + statusClass + '" onclick="apriModalRicorrente(' + r.id + ')" style="' +
        'display:flex;align-items:center;gap:12px;padding:14px;margin-bottom:10px;' +
        'background:linear-gradient(135deg, ' + r.colore + '15, ' + r.colore + '08);' +
        'border:2px solid ' + r.colore + '40;border-radius:12px;cursor:pointer;' +
        'transition:transform 0.2s ease, box-shadow 0.2s ease' +
        '" onmouseover="this.style.transform=\'scale(1.02)\'" onmouseout="this.style.transform=\'scale(1)\'">';

      // Icona
      html += '<div style="width:45px;height:45px;background:' + r.colore + ';border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:1.5em">' +
        r.icona + '</div>';

      // Info
      html += '<div style="flex:1;min-width:0">';
      html += '<div style="font-weight:700;color:var(--text);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + r.nome + '</div>';
      html += '<div style="font-size:0.8em;color:#888;display:flex;align-items:center;gap:8px">';
      html += '<span>' + r.giorno + '° del mese</span>';
      html += '<span style="opacity:0.5">•</span>';
      html += '<span>' + (r.tipo === 'abbonamento' ? '🎬' : r.tipo === 'bolletta' ? '💡' : '🏦') + ' ' + r.tipo + '</span>';
      html += '</div>';
      if (r.note) {
        html += '<div style="font-size:0.75em;color:#666;margin-top:2px">' + r.note + '</div>';
      }
      html += '</div>';

      // Importo e status
      html += '<div style="text-align:right">';
      html += '<div style="font-size:1.1em;font-weight:800;color:' + r.colore + '">€' + r.importo.toFixed(2) + '</div>';
      html += '<div style="font-size:0.8em;color:' + statusColor + ';font-weight:600">' + statusIcon + ' ' + (isPagato ? 'Pagato' : 'Da pagare') + '</div>';
      html += '</div>';

      html += '</div>';
    });

    container.innerHTML = html;
  }

  // Genera calendario
  generaCalendarioRicorrenti();
}

function generaCalendarioRicorrenti() {
  initRicorrenti();

  var container = document.getElementById('calendarioRicorrenti');
  var oggi = new Date();
  var giornoOggi = oggi.getDate();
  var anno = oggi.getFullYear();
  var mese = oggi.getMonth();
  var giorniMese = new Date(anno, mese + 1, 0).getDate();
  var primoGiorno = new Date(anno, mese, 1).getDay();

  // Aggiusta per settimana che inizia da Lunedì
  primoGiorno = primoGiorno === 0 ? 6 : primoGiorno - 1;

  // Crea mappa giorni con ricorrenti
  var giorniConRicorrenti = {};
  DB.ricorrenti.forEach(function(r) {
    if (r.attivo !== false) {
      var g = r.giorno > giorniMese ? giorniMese : r.giorno;
      if (!giorniConRicorrenti[g]) giorniConRicorrenti[g] = [];
      giorniConRicorrenti[g].push(r);
    }
  });

  var html = '';

  // Header giorni settimana
  var giorniSettimana = ['L', 'M', 'M', 'G', 'V', 'S', 'D'];
  giorniSettimana.forEach(function(g) {
    html += '<div style="text-align:center;font-size:0.7em;color:#888;font-weight:600;padding:5px">' + g + '</div>';
  });

  // Celle vuote prima del primo giorno
  for (var i = 0; i < primoGiorno; i++) {
    html += '<div></div>';
  }

  // Giorni del mese
  for (var d = 1; d <= giorniMese; d++) {
    var ricorrentiGiorno = giorniConRicorrenti[d] || [];
    var totaleGiorno = ricorrentiGiorno.reduce(function(sum, r) { return sum + r.importo; }, 0);
    var isOggi = d === giornoOggi;
    var isPagato = d <= giornoOggi;
    var hasRicorrenti = ricorrentiGiorno.length > 0;

    var bgColor = 'transparent';
    var textColor = 'var(--text)';
    var border = 'none';

    if (hasRicorrenti) {
      if (isPagato) {
        bgColor = 'rgba(78, 204, 163, 0.2)';
        textColor = '#4ecca3';
      } else {
        bgColor = 'rgba(255, 152, 0, 0.2)';
        textColor = '#ff9800';
      }
    }

    if (isOggi) {
      border = '2px solid #7c4dff';
    }

    html += '<div onclick="mostraScadenzeGiorno(' + d + ')" style="' +
      'text-align:center;padding:6px 2px;border-radius:8px;cursor:pointer;' +
      'background:' + bgColor + ';color:' + textColor + ';border:' + border + ';' +
      'font-weight:' + (hasRicorrenti ? '700' : '400') + ';font-size:0.85em;' +
      'transition:transform 0.2s ease' +
      '" onmouseover="this.style.transform=\'scale(1.1)\'" onmouseout="this.style.transform=\'scale(1)\'">';
    html += d;
    if (hasRicorrenti) {
      html += '<div style="font-size:0.65em;margin-top:1px">€' + totaleGiorno.toFixed(0) + '</div>';
    }
    html += '</div>';
  }

  container.innerHTML = html;
}

function mostraScadenzeGiorno(giorno) {
  initRicorrenti();

  var container = document.getElementById('scadenzeGiornoSelezionato');
  var oggi = new Date();
  var giornoOggi = oggi.getDate();
  var giorniMese = new Date(oggi.getFullYear(), oggi.getMonth() + 1, 0).getDate();

  var ricorrentiGiorno = DB.ricorrenti.filter(function(r) {
    if (r.attivo === false) return false;
    var g = r.giorno > giorniMese ? giorniMese : r.giorno;
    return g === giorno;
  });

  if (ricorrentiGiorno.length === 0) {
    container.style.display = 'none';
    return;
  }

  var isPagato = giorno <= giornoOggi;
  var totale = ricorrentiGiorno.reduce(function(sum, r) { return sum + r.importo; }, 0);

  var html = '<div style="font-weight:700;margin-bottom:10px;display:flex;justify-content:space-between;align-items:center">';
  html += '<span>📅 ' + giorno + '° del mese</span>';
  html += '<span style="color:' + (isPagato ? '#4ecca3' : '#ff9800') + '">' + (isPagato ? '✓ Pagato' : '○ Da pagare') + '</span>';
  html += '</div>';

  ricorrentiGiorno.forEach(function(r) {
    html += '<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.1)">';
    html += '<span style="font-size:1.3em">' + r.icona + '</span>';
    html += '<span style="flex:1">' + r.nome + '</span>';
    html += '<span style="font-weight:700;color:' + r.colore + '">€' + r.importo.toFixed(2) + '</span>';
    html += '</div>';
  });

  html += '<div style="margin-top:10px;text-align:right;font-weight:700;color:#7c4dff">Totale: €' + totale.toFixed(2) + '</div>';

  container.innerHTML = html;
  container.style.display = 'block';
}

// Funzione per calcolare saldo totale per ricorrenti
function calcolaSaldoTotaleRicorrenti() {
  var totale = 0;

  // Somma saldi conti
  if (DB.contiPersonalizzati) {
    DB.contiPersonalizzati.forEach(function(c) {
      if (c.id !== 'buoni_pasto') {
        var saldo = DB.saldiIniziali && DB.saldiIniziali[c.id] ? DB.saldiIniziali[c.id] : 0;
        totale += saldo;
      }
    });
  }

  // Aggiungi/sottrai transazioni
  if (DB.transazioni) {
    DB.transazioni.forEach(function(t) {
      if (t.tipo === 'income') {
        totale += t.importo;
      } else {
        totale -= t.importo;
      }
    });
  }

  return totale;
}

// Widget Ricorrenti per Dashboard
function aggiornaWidgetRicorrenti() {
  initRicorrenti();

  var widgetContainer = document.getElementById('widgetRicorrenti');
  if (!widgetContainer) return;

  var oggi = new Date();
  var giornoOggi = oggi.getDate();

  // Calcola totali
  var totale = 0;
  var daPagare = 0;

  DB.ricorrenti.forEach(function(r) {
    if (r.attivo !== false) {
      totale += r.importo;
      if (r.giorno > giornoOggi) {
        daPagare += r.importo;
      }
    }
  });

  // Aggiorna totali widget
  var totaleEl = document.getElementById('widgetRicorrentiTotale');
  var daPagareEl = document.getElementById('widgetRicorrentiDaPagare');
  if (totaleEl) totaleEl.textContent = formatEuro(totale);
  if (daPagareEl) daPagareEl.textContent = formatEuro(daPagare);

  // Lista prossime scadenze (max 4)
  var listaContainer = document.getElementById('widgetRicorrentiLista');
  if (!listaContainer) return;

  // Filtra solo quelli da pagare e ordina per giorno
  var prossimi = DB.ricorrenti.filter(function(r) {
    return r.attivo !== false && r.giorno > giornoOggi;
  }).sort(function(a, b) {
    return a.giorno - b.giorno;
  }).slice(0, 4);

  if (prossimi.length === 0) {
    if (DB.ricorrenti.length === 0) {
      listaContainer.innerHTML = '<div style="text-align:center;padding:15px;color:#888;font-size:0.9em">' +
        '<div style="font-size:1.5em;margin-bottom:8px">🔄</div>' +
        'Nessun pagamento ricorrente<br><span style="font-size:0.85em">Aggiungi abbonamenti e bollette</span></div>';
    } else {
      listaContainer.innerHTML = '<div style="text-align:center;padding:15px;color:#4ecca3;font-size:0.9em">' +
        '<div style="font-size:1.5em;margin-bottom:8px">✓</div>' +
        'Tutto pagato questo mese!</div>';
    }
    return;
  }

  var html = '';
  prossimi.forEach(function(r) {
    var giorniMancanti = r.giorno - giornoOggi;
    var urgenza = giorniMancanti <= 3 ? '#ff6b6b' : giorniMancanti <= 7 ? '#ff9800' : '#888';

    html += '<div style="display:flex;align-items:center;gap:10px;padding:10px;margin-bottom:8px;background:rgba(255,255,255,0.7);border-radius:10px;border-left:4px solid ' + r.colore + '">';
    html += '<div style="width:36px;height:36px;background:' + r.colore + ';border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.2em">' + r.icona + '</div>';
    html += '<div style="flex:1;min-width:0">';
    html += '<div style="font-weight:700;color:#333;font-size:0.9em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">' + r.nome + '</div>';
    html += '<div style="font-size:0.75em;color:' + urgenza + ';font-weight:600">' + r.giorno + '° del mese · tra ' + giorniMancanti + ' giorni</div>';
    html += '</div>';
    html += '<div style="font-weight:800;color:' + r.colore + ';font-size:1em">€' + r.importo.toFixed(2) + '</div>';
    html += '</div>';
  });

  listaContainer.innerHTML = html;
}

