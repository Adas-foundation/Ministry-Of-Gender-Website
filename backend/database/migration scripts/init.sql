CREATE EXTENSION postgis;

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    role_id INT REFERENCES roles(id)
);

CREATE TABLE reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_number VARCHAR(20) UNIQUE NOT NULL,
    incident_location GEOMETRY(Point, 4326),   -- PostGIS column
    reporter_location GEOMETRY(Point, 4326),   -- PostGIS column
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) NOT NULL CHECK (status IN ('submitted','under_review','assigned','resolved'))
);

CREATE TABLE evidence (
    id SERIAL PRIMARY KEY,
    report_id UUID REFERENCES reports(id) ON DELETE CASCADE,
    file_path TEXT NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    chain_of_custody JSONB
);

CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    report_id UUID REFERENCES reports(id) ON DELETE CASCADE,
    channel VARCHAR(10) CHECK (channel IN ('SMS','Email')),
    status_word VARCHAR(20),
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE case_status_history (
    id SERIAL PRIMARY KEY,
    report_id UUID REFERENCES reports(id) ON DELETE CASCADE,
    status VARCHAR(20) CHECK (status IN ('submitted','under_review','assigned','resolved')),
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    changed_by INT REFERENCES users(id)
);

CREATE TABLE districts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    geometry GEOMETRY(Polygon, 4326)   -- PostGIS polygon for coverage area
);

CREATE TABLE stations (
    id SERIAL PRIMARY KEY,
    district_id INT REFERENCES districts(id),
    name VARCHAR(100) NOT NULL,
    location GEOMETRY(Point, 4326)     -- PostGIS point for station location
);
