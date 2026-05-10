# État actuel du projet

## 🧱 Stack

- Frontend : React + Vite
- Backend : Node.js / Express
- Base de données : Supabase (PostgreSQL)
- ORM : Prisma
- Langage : JavaScript (TypeScript prévu plus tard)

## ✅ Ce qui fonctionne

### Backend

- Backend structuré (app / server / modules)
- Nodemon configuré (reload automatique)
- Architecture modulaire mise en place :
    - routes
    - controllers
    - services
    - repositories

### Produits

- Modèle Product créé
- Migration Prisma OK
- Endpoint :
    - GET /products
    - POST /products
- Validation des données en place

### Stock

- Modèle StockMovement créé
- Relation Product ↔ StockMovement OK
- Migration Prisma OK

- Module stock-movements créé :
    - repository
    - service
    - controller
    - routes

- Endpoint :
    - POST /stock-movements

### Logique métier

- Entrée de stock (IN) fonctionnelle
- Sortie de stock (OUT) fonctionnelle
- Mise à jour automatique du currentStock
- Vérification stock insuffisant (sécurité OK)

## ⚠️ Problèmes identifiés

- Aucun bug bloquant actuellement

## 🎯 Prochaine étape

- Améliorer la réponse API (retourner produit + mouvement)
- Ajouter GET /stock-movements (historique)
- Calcul du prix moyen (averagePrice)
- Structurer encore la logique métier (services)

## 🧠 À garder en tête

- Ne jamais modifier directement le stock
- Toujours passer par les mouvements de stock
- Garder une architecture propre et modulaire
- Penser en logique métier avant technique

## ❓ Questions en cours

- Comment calculer le prix moyen efficacement ?
- Comment gérer les portions (future feature clé) ?
- Faut-il historiser plus de données (fournisseurs, achats) ?
