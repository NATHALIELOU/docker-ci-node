# Image de base
FROM node:18-alpine

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Copier tout le code source
COPY . .

# Exposer le port sur lequel le serveur écoute
EXPOSE 3000

# Commande de démarrage du serveur
CMD ["node", "index.js"]
