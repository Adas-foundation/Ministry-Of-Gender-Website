CREATE EXTENSION postgis;

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    role_id INT REFERENCES roles(id),
    password VARCHAR(255)
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

CREATE TABLE offices (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    name VARCHAR(100),
    district_id INT REFERENCES districts(id)
);

CREATE TABLE reports (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference_number VARCHAR(20) UNIQUE NOT NULL,
    incident_location GEOMETRY(Point, 4326),   -- PostGIS column
    reporter_location GEOMETRY(Point, 4326),   -- PostGIS column
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) NOT NULL CHECK (status IN ('submitted','under_review','assigned','resolved')),
    district_id INT REFERENCES districts(id),
    assigned_user_id INT REFERENCES users(id),
    description TEXT,
    station_id INT REFERENCES stations(id)
);

CREATE TABLE evidence (
    id SERIAL PRIMARY KEY,
    report_id UUID REFERENCES reports(id) ON DELETE CASCADE,
    file_path TEXT NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    chain_of_custody JSONB,
    uploaded_by TEXT
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
    changed_by INT REFERENCES users(id),
    office_id UUID REFERENCES offices(id)
);

CREATE TABLE emergency_sos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    reference_id VARCHAR(50),
    location GEOMETRY(Point, 4326),
    emergency_type VARCHAR(50),
    status VARCHAR(20),
    station_id INT REFERENCES stations(id),
    assigned_user_id INT REFERENCES users(id)
);

CREATE TABLE settings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    platform_name TEXT NOT NULL,
    timezone TEXT NOT NULL,
    language TEXT NOT NULL,
    contact_email TEXT NOT NULL,
    two_fa BOOLEAN NOT NULL DEFAULT true,
    session_timeout INT NOT NULL DEFAULT 30,
    password_expiry INT NOT NULL DEFAULT 90,
    ip_whitelist TEXT,
    retention TEXT NOT NULL
);