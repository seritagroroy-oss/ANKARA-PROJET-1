# 🛡️ VISIOREG™ — Système Intelligent de Gestion des Visiteurs & Contrôle d'Accès

> *« Chaque visite enregistrée, chaque accès maîtrisé. »* 🚀

[![Author](https://img.shields.io/badge/Architecte-SERI%20TAGRO%20ROY-blue.svg)](https://github.com/seritagroroy-oss)
[![Version](https://img.shields.io/badge/Version-1.0.0--Entreprise-cyan.svg)]()
[![Status](https://img.shields.io/badge/Production-Ready-emerald.svg)]()
[![License](https://img.shields.io/badge/Propriété-Exclusive%20Client-blueviolet.svg)]()

---

## 🏛️ Présentation du Projet

**VISIOREG™** est une plateforme logicielle d'entreprise moderne dédiée à la gestion, la sécurisation et la traçabilité des visiteurs en entreprise, sièges sociaux, institutions financières et sites industriels.

Elle remplace définitivement les anciens registres manuscrits par un écosystème numérique complet combinant intelligence artificielle (OCR de pièces d'identité), validation mobile par WhatsApp en 1 clic pour les décideurs, badges QR dématérialisés et conformité stricte aux exigences de protection des données (ARTCI / RGPD).

Conçu et développé par **SERI TAGRO ROY** (*Architecte Logiciel & Ingénieur Full-Stack*).

---

## ⚡ Piliers Fonctionnels & Modules

| Module | Description & Rôle Opérationnel |
| :--- | :--- |
| 🪪 **Kiosque Accueil & OCR Intelligent** | Détection automatique des pièces d'identité (CNI ivoirienne, Passeport biométrique, Permis CEDEAO), extraction instantanée en moins de 1.8s. |
| 📲 **Validation DG & Responsables (WhatsApp)** | Notification mobile interactive instantanée envoyée sur WhatsApp au Directeur Général ou à l'hôte avec boutons `[Accepter]` ou `[Refuser]`. |
| 🎫 **Badges Visiteurs QR Code Dynamiques** | Génération de badges dématérialisés transmis par smartphone ou imprimables sur imprimante thermique 80mm. |
| 📟 **Borne de Sortie (Check-Out) Autonome** | Clôture de visite rapide et sécurisée par scan du QR Code du badge à l'accueil ou au poste de sécurité. |
| 🔥 **Mode Sécurité Évacuation Incendie HSE** | Appel nominal instantané des visiteurs et prestataires actuellement présents sur site avec export PDF certifié horodaté pour les secours. |
| 📊 **Tableau de Bord & KPIs Analytiques** | Suivi en temps réel des flux, pics d'affluence, durée moyenne de visite et statistiques décisionnelles. |
| 💼 **Portail Exécutif & Grille Budgétaire** | Présentation commerciale transparente, devis en 3 formules et matrice complète des coûts réels Cloud vs services gratuits. |

---

## 💻 Stack Technologique Retenue

* **Interface Utilisateur :** Progressive Web App (PWA), HTML5 sémantique, Vanilla CSS3 (thème sombre Glassmorphism, animations fluides), JavaScript ES6+ moderne.
* **Moteur d'Intelligence Artificielle :** Pipeline de vision par ordinateur (Google Cloud Vision API / Azure AI Vision) pour la lecture MRZ et l'extraction de métadonnées.
* **Messagerie & Notifications :** Meta WhatsApp Business Cloud API & Firebase Cloud Messaging (FCM).
* **Base de Données & Sécurité :** PostgreSQL avec chiffrement au repos AES-256 et sauvegardes répliquées.
* **Infrastructure Cloud :** VPS Dédié Linux Ubuntu Haute Disponibilité, Certificat SSL Let's Encrypt HTTPS 256 bits, nom de domaine officiel certifié ARTCI (.ci).

---

## 📁 Structure du Projet

```text
ANKARA/
├── index.html                           # Interface complète du portail VISIOREG (Hub + Démo Interactive + Devis)
├── style.css                            # Système de design Glassmorphism, tokens CSS, animations et media queries
├── app.js                               # Moteur applicatif JS (OCR simulé/réel, borne check-out, WhatsApp modal, stats)
├── ARCHITECTURE_TECHNIQUE.md            # Spécifications d'ingénierie logicielle, flux séquentiels & schémas
├── PROPOSITION_COMMERCIALE_VISIOREG.md  # Offre commerciale complète, jalons de paiement (40%-30%-30%) & matrice des coûts
└── README.md                            # Documentation officielle du dépôt GitHub
```

---

## 🚀 Démarrage Rapide

Ouvrez simplement le fichier `index.html` dans n'importe quel navigateur moderne (Google Chrome, Microsoft Edge, Firefox, Safari) ou lancez un serveur local :

```bash
# Avec Python 3
python -m http.server 8080

# Ou avec Node.js (npx serve)
npx serve .
```

Accédez ensuite à `http://localhost:8080` pour explorer l'écosystème complet.

---

## 👨‍💻 Auteur & Concepteur

* **Concepteur & Architecte Logiciel :** **SERI TAGRO ROY**
* **Profil GitHub :** [@seritagroroy-oss](https://github.com/seritagroroy-oss)
* **Spécialité :** Architecte Systèmes d'Information, Vision par Ordinateur & Applications d'Entreprise
* **Localisation :** Abidjan, Côte d'Ivoire

---

*Projet sous copyright © 2026 SERI TAGRO ROY. Tous droits réservés.*
