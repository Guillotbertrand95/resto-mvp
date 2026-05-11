# 📄 État actuel du projet

## 🧱 Stack

- Frontend : React + Vite
- Backend : Node.js / Express
- Base de données : Supabase (PostgreSQL)
- ORM : Prisma
- Langage : JavaScript (TypeScript prévu plus tard)

---

## ✅ Ce qui fonctionne

### Backend

- Backend structuré (app / server / modules)
- Nodemon configuré (reload automatique)
- Architecture modulaire mise en place :
    - routes
    - controllers
    - services
    - repositories

---

### Produits

- Modèle Product créé
- Migration Prisma OK
- Endpoints :
    - GET /products
    - POST /products
- Validation des données en place

---

### Stock

- Modèle StockMovement créé
- Relation Product ↔ StockMovement OK
- Migration Prisma OK

- Module stock-movements structuré :
    - repository
    - service
    - controller
    - routes

- Endpoints :
    - POST /stock-movements
    - GET /stock-movements (historique)

---

### 💰 Valorisation du stock

- Calcul du prix moyen pondéré (`averagePrice`)
- Mise à jour automatique sur les entrées de stock (IN)
- Conservation du prix moyen lors des sorties (OUT)
- Gestion des cas initiaux (stock 0 / averagePrice null)
- Calcul en précision complète (pas d’arrondi en base)

---

### 📊 Valorisation des mouvements

- Chaque mouvement contient :
    - quantity
    - unitPrice
    - totalValue (calculé côté API)

- Les sorties de stock (OUT) sont valorisées avec le prix moyen au moment de la sortie
- Historique enrichi avec valeur financière

---

### 🔐 Transactions (robustesse)

- Utilisation de transactions Prisma (`$transaction`)
- Garantie de cohérence :
    - création mouvement
    - mise à jour stock
- Évite les incohérences en cas d’erreur

---

### 📈 Dashboard

- Module `dashboard` créé :
    - service
    - controller
    - routes

- Endpoint :
    - GET /dashboard/stats

- Données retournées :
    - totalInValue (valeur des entrées)
    - totalOutValue (valeur des sorties)
    - currentStockValue (valeur actuelle du stock)

---

### 🧠 Logique métier

- Entrée de stock (IN) fonctionnelle
- Sortie de stock (OUT) fonctionnelle
- Mise à jour automatique du `currentStock`
- Vérification stock insuffisant (sécurité OK)

- Calcul du prix moyen pondéré
- Valorisation des sorties de stock (coût réel consommé)
- Calcul de la valeur des mouvements (`totalValue`)

---

## ⚠️ Problèmes identifiés

- Données historiques anciennes non valorisées (`unitPrice = null`)
- Légère dérive possible si arrondi côté backend (corrigé → plus d’arrondi en base)

---

## 🎯 Prochaines étapes

- Connecter le dashboard au frontend (cartes KPI)
- Filtrage des mouvements (date, produit)
- Gestion des portions (feature clé du produit)
- Calcul des marges (vente vs coût réel)
- Gestion des fournisseurs (prix d’achat, historique)
- Migration progressive vers TypeScript

---

## 🧠 À garder en tête

- Ne jamais modifier directement le stock
- Toujours passer par les mouvements de stock
- Stocker la bonne information au bon moment (prix au moment du mouvement)
- Calculer avec précision en backend, afficher arrondi en frontend
- Garder une architecture propre et modulaire
- Penser en logique métier avant technique

---

## ❓ Questions en cours

- Comment modéliser efficacement les portions ?
- Comment relier ventes ↔ sorties de stock ?
- Comment gérer les fournisseurs et l’évolution des prix ?
- Faut-il historiser davantage (factures, achats détaillés) ?

---

## 🚀 Vision

- Passer d’un simple outil de stock à un système de **pilotage économique**
- Permettre au restaurateur de raisonner en :
    - coût réel
    - portions
    - marge

- Base pour :
    - automatisation
    - IA
    - recommandations d’achat
