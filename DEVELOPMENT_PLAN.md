# Development Plan: T2-NArFU Prototype (React)

This plan outlines the incremental development of the proof-of-concept (PoC) for the T2 Super-App integration with NArFU services.

## Phase 1: Project Foundation (The "Easiest")
**Goal:** Setup environment and core UI shell.
*   [x] Initialize project using Vite + React + TypeScript.
*   [x] Setup basic folder structure (`components/`, `hooks/`, `data/`, `styles/`).
*   [x] Create Global Layout: Bottom navigation (Home, Schedule, Sakai, Profile) with T2 branding colors (Black, White, Magenta).

## Phase 2: Dashboard & Static Mock Data
**Goal:** Show the "Unified" look.
*   [x] Create `mockData.ts` based on real Ruz/Sakai scrapes.
*   [x] Build **Dashboard Screen**:
    *   T2 Balance & Tariff widget.
    *   "Next Lesson" widget (Dynamic based on current time).
    *   "Latest Announcement" widget.

## Phase 3: Smart Timetable (Ruz Module)
**Goal:** Implement the "One-Click" to Sakai feature.
*   [x] Build **Timetable Screen**:
    *   Day-by-day list view (like the ruz.narfu.ru website but modernized).
    *   Each lesson card should have a "Join Sakai" button.
*   [x] Implement simple state filtering (Filter by day).

## Phase 4: Sakai Integration (LMS Module)
**Goal:** Demonstrate assignments and materials.
*   [x] Build **Sakai Courses Screen**:
    *   List of active courses with "Unread" badges.
*   [x] Build **Assignments View**:
    *   List of deadlines with progress indicators.
*   [x] Add "SSO Simulation": A loading transition that mimics logging in without a password.

## Phase 5: Notifications & T2 Ecosystem
**Goal:** Final polish and "Wow" factors for the jury.
*   [x] Implement **Notification Simulator**: A button to trigger a fake "Schedule Changed" alert.
*   [x] Build **Profile & Tariff Screen**:
    *   Special "NArFU Connect" tariff selector.
    *   Zero-rating status indicator (Unlimited EDU traffic: Active).
*   [x] Final UI/UX polish and responsive adjustments.

---
## Timeline Strategy
Each phase is designed to be completed in a single iteration, allowing for constant validation.
