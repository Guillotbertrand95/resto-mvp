## 🆕 Décisions frontend récentes

### Architecture

- séparation pages / components / services
- layout global avec navigation (React Router)

### API

- centralisation via apiFetch
- services dédiés par domaine (product, stockMovement, dashboard)

### Formulaires

- gestion locale avec useState
- appel API via service
- rechargement des données après mutation

### UX

- formulaire dynamique: - IN → avec prix - OUT → sans prix

---

## 🧠 Règle confirmée

👉 Le backend est la source de vérité

- calculs côté backend
- frontend = affichage + interaction

---

## 🆕 Décisions récentes

### Données

- category ajouté au modèle Product
- quantity passée de Int → Float

👉 Raison :
support des quantités réelles (kg, L, etc.)

---

### Frontend

- filtre catégorie côté client
- utilisation de Set() pour extraire les catégories
- séparation logique filtrage / affichage

---

### UX

- badge visuel pour stock faible
- affichage unités (kg, L, pièce)

---

## 🧠 Règles confirmées

- backend = source de vérité
- frontend = affichage + interaction
- données métier doivent refléter la réalité terrain
