CREATE DATABASE storyteller;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Roles Table
CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
);

-- Users Table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role_id INT NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Stories Table
CREATE TABLE stories (
  user_id UUID NOT NULL,
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  theme VARCHAR(255) NOT NULL,
  summary TEXT NOT NULL,
  ramifications TEXT[],
  is_ramification BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Caracters Table
CREATE TABLE caracters (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  baseSpriteRef VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP
);

-- Scenes Table
CREATE TABLE scenes ( 
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  story_id UUID NOT NULL,
  backgroundUrl VARCHAR(255) NOT NULL,
  ramificationTheme VARCHAR(255),
  next_scene_id UUID,
  branched_scene_ids UUID[],
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (story_id) REFERENCES stories(id),
  FOREIGN KEY (next_scene_id) REFERENCES scenes(id)
);

-- Caracter_Scene Join Table
CREATE TABLE caracter_scene (
  id SERIAL PRIMARY KEY,
  scene_id UUID NOT NULL,
  caracter_id UUID NOT NULL,
  caracterSpriteUrl VARCHAR(255) NOT NULL,
  speech TEXT NOT NULL,
  emotion VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (scene_id) REFERENCES scenes(id),
  FOREIGN KEY (caracter_id) REFERENCES caracters(id)
);
