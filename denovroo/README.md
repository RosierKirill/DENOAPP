# 🦕 DENOAPP

Une démonstration simple des fonctionnalités principales de **Deno** :

- Exécution directe de TypeScript
- Permissions système (lecture, réseau)
- Tests intégrés
- Linter, formatter, infos de dépendances
- Compatibilité avec les modules npm

---

## Prérequis

Installe Deno (si ce n’est pas déjà fait) :

```bash
curl -fsSL https://deno.land/install.sh | sh
```

Vérifie l’installation :

```bash
deno --version
```

---

## 1. Exécuter un fichier TypeScript

```bash
deno run main.ts
```

---

## 2. Permissions (sécurité par défaut)

Essaye de lire un fichier local :

```bash
deno run main.ts
```

Demande l'accès et si refus donne une erreur : `PermissionDenied: Requires --allow-read`

Puis exécute avec la permission :

```bash
deno run --allow-read main.ts
```

Même principe pour le réseau :

```bash
deno run --allow-net main.ts
```

---

## 3. Tests intégrés

**Fichier : `main_test.ts`**

```bash
deno test
```

---

## 4. Outils intégrés

### Formatter

```bash
deno fmt main.ts
```

### Linter

```bash
deno lint main.ts
```

### Informations sur le cache et les dépendances

```bash
deno info main.ts
```

### Ajouter un module npm

```bash
deno add npm:react
```

---

## 5. Serveur HTTP avec Oak

**Fichier : `server.ts`**

Lance le serveur :

```bash
deno run --allow-net server.ts
```

ou plus simplement (Deno 1.41+) :

```bash
deno serve server.ts
```

Ouvre ensuite :  
[http://localhost:8000](http://localhost:8000)

### Routes disponibles :

- `/` → Renvoie “Hello world!”
- `/book` → Liste des livres
- `/book/:id` → Détails d’un livre spécifique
