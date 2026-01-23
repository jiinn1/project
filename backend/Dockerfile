# Etap 1: budowanie aplikacji
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Kopiowanie plików projektu
COPY pom.xml .
COPY src ./src

# Budowanie jar
RUN mvn clean package -DskipTests

# Etap 2: uruchomienie
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app

# Skopiowanie jar z etapu build
COPY --from=build /app/target/*.jar app.jar

# Ustawienie portu
EXPOSE 8080

# Uruchomienie aplikacji
ENTRYPOINT ["java","-jar","app.jar"]
