# Décisions techniques

## 🏗️ Architecture backend

Structure souhaitée :

- routes → reçoit la requête HTTP
- controllers → gère la réponse HTTP
- services → logique métier
- repositories → accès base de données
- prisma → ORM PostgreSQL

## 🔁 Principe

Séparer les responsabilités :

Exemple :

- route : "/products"
- controller : getProducts()
- service : logique métier
- repository : Prisma query

## 🧪 Choix actuels

- JavaScript pour aller vite
- Structure prête pour TypeScript plus tard

## 🔮 Évolution prévue

- migration progressive vers TypeScript
- ajout de tests
- ajout d’authentification
- intégration n8n
- intégration IA

## ⚠️ Règle importante

Toujours privilégier :
➡️ code simple
➡️ lisibilité
➡️ séparation des responsabilités

plutôt que :
❌ optimisation prématurée
❌ complexité inutile
