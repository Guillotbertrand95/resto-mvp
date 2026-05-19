---

# 📄 `ETAT_ACTUEL.md`

```md
# 📄 État actuel du projet

---

## 🧱 Stack

- Frontend : React + Vite
- Backend : Node.js / Express
- Base de données : PostgreSQL (Supabase)
- ORM : Prisma
- Langage : JavaScript

---

## ✅ Backend

Architecture modulaire en place :

- routes
- controllers
- services
- repositories

Transactions Prisma utilisées.

---

## 📦 Produits

Fonctionnalités :

- création produit
- récupération produits
- catégories
- portions

Champs actuels :

- name
- unit
- currentStock
- alertThreshold
- averagePrice
- category
- portionQuantity

---

## 🔄 Mouvements de stock

Fonctionnalités :

- entrée stock (IN)
- sortie stock (OUT)
- historique mouvements

Calculs automatiques :

- mise à jour stock
- prix moyen pondéré
- valorisation mouvements

---

## 🍽️ Portions

Calculs backend disponibles :

- availablePortions
- portionCost

Exemple :

```txt
6 kg / 0.18 kg = 33 portions
```

📊 Dashboard

Indicateurs disponibles :

totalInValue
totalOutValue
currentStockValue
🎨 Frontend

Pages :

Dashboard
Produits
Mouvements

Fonctionnalités :

création produits
création mouvements
affichage stock
filtres catégories
alertes stock faible
affichage portions
🧪 Outils développement

Route dev disponible :

DELETE /dev/reset

Permet :

reset produits
reset mouvements
🎯 Niveau actuel

Le MVP possède désormais :

✅ un vrai moteur stock

Le système sait déjà :

valoriser un stock
gérer les portions
calculer un coût portion
recalculer automatiquement les données métier
🚀 Prochaine grande étape

Introduction de :

recettes
ventes automatiques
sorties stock automatiques
calcul marge
