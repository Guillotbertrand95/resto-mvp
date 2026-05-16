# 📄 État actuel du projet

## 🧱 Stack

- Frontend : React + Vite
- Backend : Node.js / Express
- Base de données : Supabase (PostgreSQL)
- ORM : Prisma
- Langage : JavaScript

---

## ✅ Backend

- Architecture modulaire :
    - routes
    - controllers
    - services
    - repositories

- Transactions Prisma en place
- Logique métier solide et centralisée

---

## 📦 Produits

- Création de produits (POST /products)
- Liste des produits (GET /products)

Champs :

- name
- unit
- currentStock
- alertThreshold
- averagePrice

---

## 🔄 Mouvements de stock

- Création de mouvements (POST /stock-movements)
- Historique des mouvements (GET /stock-movements)

Types :

- IN (entrée)
- OUT (sortie)

---

## 💰 Logique financière

- Calcul du prix moyen pondéré
- Valorisation des mouvements
- totalValue calculé côté backend
- Pas d’arrondi en base

---

## 📊 Dashboard

Endpoint :

- GET /dashboard/stats

Données :

- totalInValue
- totalOutValue
- currentStockValue

---

## 🎨 Frontend

### Pages

- Dashboard
- Produits
- Mouvements de stock

### Fonctionnalités

- Affichage des KPI
- Tableau des produits
- Tableau des mouvements
- Création de produit
- Création de mouvement (IN / OUT dynamique)

---

## ⚠️ Points à améliorer

- Pas encore d’alertes visuelles stock
- Pas de filtres sur les mouvements
- Pas de feedback utilisateur (succès / erreur)
- Pas d’authentification

---

## 🎯 Niveau actuel

👉 MVP fonctionnel

- données cohérentes
- logique métier solide
- premières interactions utilisateur
