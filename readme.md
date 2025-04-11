# Game of Thrones - Drizzle Server

A simple drizzle - postgres game of thrones api

## 1. Create a PostgreSQL Database

Open Postgres CLI

```bash
psql -U postgres
```

Inside the Postgres CLI:

```sql
CREATE DATABASE drizzle_app;
CREATE USER drizzle_user WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE drizzle_app TO drizzle_user;
\q
```

## 2. Set Up Your .env File
```.env
DATABASE_URL=postgresql://drizzle_user:password@localhost:5432/drizzle_app
```
## 3. Add Tables
```bash
npx drizzle-kit push   
```
## 4. Seed Database 
```bash
psql postgresql://drizzle_user:password@localhost:5432/drizzle_app -f seed/master.sql   
```

extra commands remove later

DROP DB

```sql
\c postgres;
---
DROP DATABASE drizzle_app;
DROP ROLE drizzle_user;
```