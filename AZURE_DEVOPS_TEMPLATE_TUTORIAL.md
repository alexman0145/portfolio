# Guide Complet : Créer des Templates sur Azure DevOps

## Introduction

Dans ce tutoriel, nous allons voir comment créer des templates personnalisés sur Azure DevOps. Les templates permettent de standardiser les work items et d'améliorer la productivité de votre équipe en définissant des champs et des pages personnalisés. Suivez ce guide étape par étape pour créer votre propre processus hérité (inherited process) et le configurer selon vos besoins.

---

## Étape 1 : Accéder aux Paramètres de l'Organisation

Pour commencer, vous devez accéder aux paramètres de votre organisation Azure DevOps.

1. Connectez-vous à votre organisation Azure DevOps
2. Cliquez sur **Organization Settings** (Paramètres de l'organisation)

![Organisation Settings](/.attachments/image-365ad508-9ffa-4a17-8cc1-4db8bba73607.png)

---

## Étape 2 : Naviguer vers la Section Process

Une fois dans les paramètres de l'organisation, vous devez accéder à la configuration des processus.

1. Dans le menu de gauche, cherchez la section **Boards**
2. Cliquez sur **Process**

![Process Section](/.attachments/image-cf235a14-39d8-4b13-bbc2-374aacd8a577.png)

---

## Étape 3 : Sélectionner le Processus de Base

Azure DevOps propose plusieurs processus par défaut. Vous devez choisir celui que vous utilisez actuellement dans vos projets.

1. Identifiez le processus utilisé par votre projet (par exemple : **Agile**, Scrum, ou CMMI)
2. Cliquez sur le processus que vous souhaitez personnaliser

![Choix du processus](/.attachments/image-5236500d-5b67-41e2-9dac-8a0dcc053dad.png)

---

## Étape 4 : Créer un Processus Hérité (Inherited Process)

Pour personnaliser un processus sans affecter le processus par défaut, vous devez créer un processus hérité.

### 4.1 Créer le Process Inherited

Si l'option est disponible, cliquez sur **Create inherited process** (Créer un processus hérité)

![Create inherited process](/.attachments/image-12c87924-0a05-4ae0-823e-f3c221cd71d9.png)

### 4.2 Nommer le Process

1. Entrez un nom significatif pour votre processus hérité
2. Ajoutez une description si nécessaire (optionnel)

![Nommer le process](/.attachments/image-7d237cb7-e7fc-4e35-be1d-b5f6cbc36887.png)

### 4.3 Valider la Création

Cliquez sur **Create process** pour finaliser la création

---

## Étape 5 : Accéder au Processus Hérité

Maintenant que votre processus hérité est créé, vous devez y accéder pour le configurer.

1. Retournez dans **All processes** (Tous les processus)
2. Cliquez sur le processus hérité que vous venez de créer

---

## Étape 6 : Sélectionner l'Item à Personnaliser

Vous pouvez maintenant choisir quel type de work item vous souhaitez personnaliser avec votre template.

Sélectionnez l'item auquel vous voulez appliquer le template (par exemple : User Story, Task, Bug, Feature, etc.)

![Sélection de l'item](/.attachments/image-e2332fec-5719-40ea-96ad-58a88db0262d.png)

---

## Étape 7 : Personnaliser l'Item avec Plusieurs Options

Une fois l'item sélectionné, vous avez plusieurs options de personnalisation disponibles :

![Options de personnalisation](/.attachments/image-1b5a1af1-e6b7-4c56-8325-db7630f3c62d.png)

### Option 1 : Ajouter une Page (Add Page)

Les pages permettent d'organiser vos champs par thématique et d'améliorer la lisibilité.

1. Cliquez sur **New page** ou **Add page**
2. Entrez un nom descriptif pour la page
3. Cette page affichera le groupe avec ses champs (Fields)

![Ajouter une page](/.attachments/image-308b79c4-1900-4040-a97b-8aaff0e03c1d.png)

4. Cliquez sur **Add Page** pour valider

### Option 2 : Ajouter un Groupe Parent (Add Group)

Les groupes permettent de regrouper logiquement plusieurs champs ensemble.

![Ajouter un groupe](/.attachments/image-2aca0ea8-86c9-4f7e-a6d0-7fd66caa9c3b.png)

1. Cliquez sur **New group** ou **Add group**
2. Entrez le nom du groupe
3. Sélectionnez la position où vous souhaitez placer ce groupe
4. Cliquez sur **Add group** pour valider

### Option 3 : Ajouter un Champ Personnalisé (Add Field)

Les champs personnalisés sont au cœur de vos templates. Ils permettent de capturer des informations spécifiques à votre organisation.

1. Cliquez sur **New field** pour créer un nouveau champ

**Configuration du champ :**

- **Nom du champ** : Entrez un nom descriptif et clair
- **Type de champ** : Sélectionnez le type approprié parmi :
  - Texte (Text)
  - Texte multiligne (Text Area)
  - Liste déroulante (Picklist)
  - Nombre entier (Integer)
  - Nombre décimal (Decimal)
  - Date (Date)
  - Booléen (Boolean/Checkbox)
  - Et bien d'autres...

- **Groupe** : Vous pouvez :
  - Sélectionner un groupe existant
  - Créer un nouveau groupe directement

3. Cliquez sur **Add Field** pour finaliser

---

## Étape 8 : Appliquer les Modifications

Après avoir ajouté tous vos éléments (pages, groupes, champs) dans l'item, les modifications ne sont pas encore actives sur vos projets.

### 8.1 Définir le Processus par Défaut

Pour que les modifications soient appliquées, vous devez définir votre processus hérité comme processus par défaut.

1. Retournez à la liste des processus
2. Trouvez votre processus hérité
3. Cliquez sur les **trois petits points** (⋯) à côté du nom du processus
4. Sélectionnez **Set as default process** (Définir comme processus par défaut)

![Définir comme processus par défaut](/.attachments/image-160272b7-3103-4f0f-b3aa-f60794640466.png)

### 8.2 Appliquer aux Projets Existants

Pour les projets existants qui utilisent l'ancien processus, vous devrez :

1. Aller dans les paramètres du projet
2. Changer le processus du projet pour utiliser votre nouveau processus hérité
3. Les modifications seront alors appliquées à tous les nouveaux work items créés

---

## Conclusion

Félicitations ! Vous savez maintenant créer des templates personnalisés sur Azure DevOps. Cette fonctionnalité est extrêmement puissante pour :

- **Standardiser** les informations collectées dans votre équipe
- **Améliorer la qualité** des données saisies
- **Faciliter le reporting** en ayant des champs cohérents
- **Adapter Azure DevOps** aux besoins spécifiques de votre organisation

### Bonnes Pratiques

- **Planifiez vos champs** : Réfléchissez bien aux informations dont vous avez besoin avant de créer des champs
- **Nommage cohérent** : Utilisez des conventions de nommage claires pour vos champs et groupes
- **Ne surchargez pas** : Évitez d'ajouter trop de champs obligatoires qui pourraient ralentir votre équipe
- **Documentez vos templates** : Maintenez une documentation expliquant l'utilité de chaque champ personnalisé
- **Testez avant déploiement** : Créez d'abord le processus sur un projet de test avant de le déployer à grande échelle

### Ressources Supplémentaires

Pour aller plus loin avec les processus Azure DevOps :
- Apprenez à créer des règles de workflow personnalisées
- Découvrez comment exporter et importer des processus
- Explorez les API REST pour automatiser la gestion des processus

---

**N'hésitez pas à partager ce guide avec vos collègues et votre équipe !**

*Dernière mise à jour : 2025*
