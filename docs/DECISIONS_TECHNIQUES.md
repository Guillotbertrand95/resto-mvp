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
