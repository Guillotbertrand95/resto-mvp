# 🧠 Décisions techniques

---

## 🧱 Architecture backend

- architecture modulaire :
    - routes
    - controllers
    - services
    - repositories

- séparation claire des responsabilités
- logique métier centralisée dans les services
- Prisma utilisé comme couche d’accès base de données

---

## 🎨 Architecture frontend

- React + Vite
- séparation :
    - pages
    - components
    - services
    - styles

- React Router pour le layout global
- CSS modulaire par composant/page

---

## 🌐 API

- centralisation des appels API
- services frontend dédiés par domaine :
    - products
    - stockMovements
    - dashboard

- backend considéré comme :
  👉 source de vérité métier

Le frontend ne réalise pas les calculs métier.

---

## 📦 Produits

Ajout de :

- category
- portionQuantity

Objectif :

- mieux représenter la réalité terrain
- préparer la gestion des portions

---

## ⚖️ Gestion des quantités

Passage de :

```txt
Int → Float
```

Raison :

support des kg
support des litres
support des quantités réelles

Exemples :

0.2 kg
1.5 L
0.05 kg
🍽️ Portions

Introduction de :

portionQuantity

Calculs backend :

availablePortions
portionCost

Objectif :

raisonner en portions
préparer les ventes automatiques
préparer les calculs de marge
💰 Calculs métier

Calculs effectués côté backend :

prix moyen pondéré
valorisation stock
coût portion
portions disponibles

Le frontend affiche uniquement les résultats.

🧪 Outils développement

Ajout d’une route dev :

DELETE /dev/reset

Permet :

suppression produits
suppression mouvements

Objectif :

reset rapide environnement MVP
tests propres pendant développement
🎯 Philosophie actuelle

Construire :

👉 un moteur métier fiable

avant de complexifier :

l’UI
l’IA
l’automatisation
