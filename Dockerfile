FROM node:22-alpine

WORKDIR /app

# Copier uniquement package.json et package-lock.json pour le cache npm install
COPY package*.json ./

RUN npm install

# Copier le reste des fichiers après l'installation
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
