# Etap 1: budowanie produkcyjne
FROM node:20-alpine AS build
WORKDIR /app

# Kopiowanie package.json i package-lock.json
COPY package*.json ./

# Instalacja zależności
RUN npm ci

# Kopiowanie reszty kodu
COPY . .

# Budowanie produkcyjne
RUN npm run build

# Etap 2: serwowanie statycznych plików (Nginx)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Skonfiguruj Nginx (opcjonalnie: pod Vite możesz dodać własny default.conf)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
