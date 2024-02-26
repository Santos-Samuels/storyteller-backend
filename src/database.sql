CREATE DATABASE storyteller;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE histories (
  user_id UUID NOT NULL,
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  theme VARCHAR(255) NOT NULL,
  resume TEXT NOT NULL,
  ramifications TEXT[],
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE caracters (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  baseSpriteRef VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
);

CREATE TABLE scenes ( 
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  history_id UUID NOT NULL,
  caracter_id UUID NOT NULL,
  caracterSpriteRef VARCHAR(255) NOT NULL,
  speech TEXT NOT NULL,
  emotion VARCHAR(255) NOT NULL,
  position INT NOT NULL,
  backgroundRef VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (history_id) REFERENCES histories(id),
  FOREIGN KEY (caracter_id) REFERENCES caracters(id)
);


