# build stage
FROM maven:3.9.6-eclipse-temurin-17 as builder

WORKDIR /build
COPY pom.xml pom.xml
RUN mvn -B dependency:go-offline -DskipTests

COPY src src
RUN mvn package

# final stage
FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=builder /build/target/*.jar /app/app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]