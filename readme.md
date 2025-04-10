# Game of Thrones - Drizzle Server

A simple drizzle - postgres game of thrones api

## 1. Create a PostgreSQL Database

Open Postgres CLI

```bash
psql -U postgres
```

Then inside the CLI:

```sql
CREATE DATABASE drizzle_app;
CREATE USER drizzle_user WITH PASSWORD 'password';
GRANT ALL PRIVILEGES ON DATABASE drizzle_app TO drizzle_user;
```

## 2. Set Up Your .env File
```.env
DATABASE_URL=postgresql://drizzle_user:password@localhost:5432/drizzle_app
```
