import os
import psycopg2
from flask import Flask, jsonify

app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY", "random-secret-12345")
DATABASE_URL = os.environ.get(
    "DATABASE_URL",
    "postgres://postgres:postgres@postgres:5432/postgres"
)

@app.get("/")
def index():
    return "Hello from Flask + PostgreSQL via Dokploy!", 200

@app.get("/health")
def health():
    try:
        conn = psycopg2.connect(DATABASE_URL)
        with conn.cursor() as cur:
            cur.execute("SELECT 1;")
            cur.fetchone()
        conn.close()
        return jsonify(status="ok", db="reachable"), 200
    except Exception as e:
        return jsonify(status="degraded", error=str(e)), 500
