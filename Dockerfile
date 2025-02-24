# Базовый образ с Node.js
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json для установки зависимостей
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install --frozen-lockfile

# Копируем весь проект
COPY . .

# Собираем Astro
RUN npm run build

# Открываем порт 3000
EXPOSE 3000

# Запускаем сервер Astro (SSR)
CMD ["npm", "run", "preview"]
