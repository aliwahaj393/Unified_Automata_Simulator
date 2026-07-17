# Unified Automata Simulator

A comprehensive, single-page web application suite for visualizing and simulating various models of computation including Context-Free Grammars (CFG) / Pushdown Automata (PDA), Deterministic / Non-Deterministic Finite Automata (DFA/NFA), and Turing Machines.

## Features

- **Multi-Model Simulation**: Seamlessly switch between three different simulator environments (CFG/PDA, DFA/NFA, Turing Machine) from a unified sidebar interface.
- **Visual Automata Layout**: Modern, responsive design utilizing a sleek aesthetic. 
- **In-Browser Execution with Neo4j**: The simulators run client-side, while utilizing a Neo4j graph database backend to save and load your machines.
- **Interactive Interface**: Dedicated iframe views to isolate different simulator logics while maintaining a unified wrapper (Automata Studio).

---

## Why Use the Unified Simulator?

Theoretical computer science concepts can be difficult to grasp abstractly. This unified suite brings multiple automata simulators under a single, cohesive "Automata Studio" roof. 

**Why a unified interface?**
Instead of navigating to disparate tools for different automata types, you can transition from designing finite state machines to exploring pushdown automata and Turing machines all within the same environment. This helps in understanding the Chomsky hierarchy step-by-step.

---

## Prerequisites: Neo4j Installation

To use this simulator and save your machines, you need an active Neo4j database running either locally or in the cloud.

### Local Installation (Neo4j Desktop)
1. Download [Neo4j Desktop](https://neo4j.com/download/) and install it on your machine.
2. Open Neo4j Desktop and create a new **Local DBMS**.
3. Set the password for the default `neo4j` user.
4. Click **Start** to run the database. The default connection URI is usually `bolt://127.0.0.1:7687` or `neo4j://127.0.0.1:7687`.

### Alternative: Neo4j AuraDB (Cloud)
If you prefer not to install anything, you can use [Neo4j AuraDB](https://neo4j.com/cloud/platform/aura-graph-database/) to create a free cloud instance. You will receive a connection URI (e.g., `neo4j+s://<id>.databases.neo4j.io`) and a password.

---

## How to Use the Simulator

### 1. Launching the App
1. Open the `index.html` file in any modern web browser.
2. The main interface "Automata Studio" will load with the sidebar navigation.

### 2. Navigating the Simulators
- Click on **CFG / PDA** to load the Context-Free Grammar and Pushdown Automata simulator.
- Click on **DFA / NFA** to load the Deterministic and Non-Deterministic Finite Automata simulator.
- Click on **Turing Machine** to load the interactive Turing Machine environment.
- Use the **Fullscreen** button in the top header to maximize the simulator canvas.
