# ANKER – Stabilisationsachse · iki1uc

## Zweck
ANKER ist die Stabilisationsachse des iki1uc‑Systems.
Es hält die Achsen IQ, QI, EVO, UPD, UPG, BIOS und CALC im korrekten Verhältnis.

## Struktur
- NAME: ANKER
- ID: A01
- Station: S01
- Dimension: D4
- Modus: erabel (neutral, operation möglich)

## Rolle
ANKER stabilisiert, ohne selbst aktiv zu berechnen oder zu steuern.
Es ist die neutrale Achse zwischen AXI, 6d und API.

## Bindungen
- AXI
- 6d
- 360
- 100
- 213 (REAL)
- API

## Status
STATE = STABIL  
READY = 100%
# reM – Stationseinheit

reM ist eine Station, die sich beim System anmeldet und anhand der
CSV-Datei `re-zustand-modi-9-4.csv` ihren Betriebsmodus erhält.

Nur bestimmte Modi erlauben eine Buchung (z. B. ACTIVE, READY).

reM besteht aus:
- reM_State.js
- reM_Register.js
- reM_Booking.js

index.html zeigt den aktuellen Zustand der Station.
