# WebMap

A full-stack web application that takes a URL from the user, maps out its links and nested page connections, and displays the result as an interactive graph — similar to Obsidian's graph view.

> **Project status:** Work in progress.  
> This README is currently a high-level declaration of the project. Implementation details will be added as they are defined.

---

## Overview

WebMap is planned as a two-phase tool:

1. **Site mapping** — crawl a user-provided URL, map all links and nested page connections, and render them graphically as a connected web. This includes mapping similar components as well as different pages.
2. **Security-focused testing** — test the page's vulnerabilities in a cybersecurity sense, including testing inputs and validations to see whether the application returns technical errors or user-facing errors. SEO and accessibility checks are also planned, with the main focus on web application security.

---

## Planned Features

### Phase 1 — Site Mapping
- Accept a URL from the user
- Map all links and nested page connections
- Display the structure as an interactive graph
- Map similar components and different pages

### Phase 2 — Security & Quality Testing
- Test page inputs
- Test validations and distinguish between technical errors and user-facing errors
- Additional security, SEO, and accessibility checks: **Work in progress**

### Authentication & Storage
Login and authentication are planned, along with possible storage of scanned websites and related data. Whether a database and full authentication system are necessary is still under consideration.

---
## Tech Stack

### Current Stack

- **Frontend:** React + Vite
- **Backend API:** FastAPI
- **Site Crawling & Analysis:** Python

### Planned Expansion

The initial version of WebMap focuses on validating the core crawling, mapping, and visualization functionality using a simplified architecture.

Future versions may introduce:

- **ASP.NET Core** for authentication and account management
- Persistent scan storage
- User accounts and saved project workspaces
- Additional security, SEO, and accessibility analysis features

The decision to introduce ASP.NET Core will depend on the complexity of future requirements and whether dedicated authentication and application-management services provide meaningful value to the project.

---

## Architecture

High-level structure:

- React + Vite frontend
- .NET backend for direct backend endpoints and authentication
- Python service for parsing websites and building the graph

Detailed architecture: **Work in progress**

---

## Getting Started

**Work in progress.**


raw vernacular: keeping track of setup process.

what is required? 
python 3.12
javascript... node version v26.2.0 is what I used for the start of this.

necessary steps? 

frontend (for now)
run npm install 
run command is npm run dev.

for pythonfast api. 
what are the setups? 
you need to create the .venv 
what I used is pyenv to create it and control python versions.

use pyenv install to install everything
Create the venv
python3 -m venv .venv
to get in. you can use your terminal command/ I use Ubuntu on wsl -- source .venv/bin/activate
that shoudl put your terminal in the py environment.

then you install all the requirements .txt.

pip install -r requirements.txt




---

## Project Structure

**Work in progress.**

---

## Roadmap

**Work in progress.**

High-level phases:
- Phase 1: URL mapping and graph visualization
- Phase 2: Security-focused testing, with SEO and accessibility considerations

---

## Contributing

**Work in progress.**

---

## License

**Work in progress.**
