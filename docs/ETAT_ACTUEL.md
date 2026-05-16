# 📄 État actuel du projet

## 🧱 Stack

- Frontend : React + Vite
- Backend : Node.js / Express
- Base de données : Supabase (PostgreSQL)
- ORM : Prisma
- Langage : JavaScript

---

## ✅ Backend

- Architecture modulaire (routes / controllers / services / repositories)
- Transactions Prisma en place
- Logique métier centralisée

---

## 📦 Produits

- Création produit (POST /products)
- Liste produits (GET /products)

Champs :

- name
- unit
- currentStock
- alertThreshold
- averagePrice
- category

---

## 🔄 Mouvements de stock

- Création (POST /stock-movements)
- Historique (GET /stock-movements)

Types :

- IN (entrée)
- OUT (sortie)

---

## 💰 Logique financière

- Prix moyen pondéré
- Valorisation des mouvements
- totalValue calculé côté backend
- précision complète (pas d’arrondi en base)

---

## 📊 Dashboard

- totalInValue
- totalOutValue
- currentStockValue

---

## 🎨 Frontend

### Pages

- Dashboard
- Produits
- Mouvements

### Fonctionnalités

- Affichage KPI
- Tableau produits
- Tableau mouvements
- Création produit
- Création mouvements (IN / OUT dynamique)
- Filtre par catégorie
- Alerte stock faible (visuelle)

---

## 🆕 Améliorations récentes

- Ajout catégorie produit
- Filtrage dynamique par catégorie
- Passage quantity en Float (support décimales)
- Ajout unités dans affichage
- Badge "Stock bas"

---

## 🎯 Niveau actuel

👉 MVP solide et exploitable
