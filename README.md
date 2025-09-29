# M-Government Platform for Kabupaten Bandung

## Overview
This is a prototype Mobile-Government (M-Government) platform providing access to public services at the Kabupaten Bandung level. It simulates key services like citizen registration, tax payments, health bookings, and complaints. **This is for educational purposes only—do not use in production without legal compliance and security audits.**

**Note on "Dark OSINT"**: Dark OSINT refers to advanced open-source intelligence techniques that operate in less visible or "dark web"-adjacent spaces for data collection. This project does NOT incorporate or endorse dark OSINT methods, as they can violate privacy laws (e.g., UU PDP in Indonesia). Use only ethical OSINT for research, such as public government APIs.

## Features
- User authentication via NIK (Indonesian ID).
- Modules for:
  - Kependuduk (e.g., apply for KTP).
  - Pajak (e.g., pay PBB online).
  - Kesehatan (e.g., book Puskesmas visits).
  - Pengaduan (e.g., report issues via integrated LAPOR! system).
  - And more (expandable to all 20+ services in Kabupaten Bandung).
- Responsive mobile UI.
- Admin panel for service management.

## Tech Stack
- Frontend: React Native
- Backend: Node.js + Express
- Database: MongoDB
- Auth: JWT
- Deployment: Docker + Nginx

## Prerequisites
- Node.js v18+
- MongoDB v6+
- React Native CLI
- Android Studio/Xcode for mobile builds
- Docker for server deployment

## Installation
1. Clone the repo: `git clone <your-repo-url>`
2. Install dependencies:
   - Backend: `cd backend && npm install`
   - Frontend: `cd frontend && npm install`
3. Set up environment:
   - Create `.env` in backend:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/mgov-bandung
     JWT_SECRET=your-secret-key
     ```
4. Run locally:
   - Backend: `npm start` (runs on http://localhost:5000)
   - Frontend: `npx react-native run-android` or `run-ios`
5. For server deployment:
   - Build Docker image: `docker build -t mgov-bandung .`
   - Run: `docker run -p 80:5000 mgov-bandung`

## File Structure
