# TRP-1 MCP Setup & AI Agent Effectiveness Study

## Overview

This repository documents my work for **TRP-1: MCP Setup Challenge**.  
The objective of this challenge was not only to connect an MCP server, but to demonstrate **intentional configuration, evaluation, and control of an AI coding agent** in a modern orchestrated environment.

Rather than focusing on output alone, this project treats the AI agent as a **system under test**.

---

## Goals of This Submission

- Successfully connect and operate with the **Tenx MCP server**
- Design and refine an **AI agent ruleset** based on best practices
- Experimentally evaluate how rules influence agent behavior
- Document insights gained through structured testing and iteration

---

## MCP Setup

- **MCP Server**: Tenx MCP (10 Academy)
- **Connection Method**: HTTP proxy
- **Status**: Active throughout assessment
- **Purpose**: Enable logging and observability of AI–agent interactions

All agent interactions during this project were performed with the MCP connection enabled to ensure activity logging.

---

## Project: Agent Effectiveness Micro-Experiment

### Why a Micro-Project?

Instead of using arbitrary prompts, I created a **small, repeatable project** to empirically test how AI agent rules affect:

- Assumption-making
- Tradeoff reasoning
- Solution structure
- Code quality
- Interaction discipline

The project itself is intentionally simple so that **agent behavior**, not project complexity, is what’s being evaluated.

---

### Problem Statement

> Design a very small “TRP Log” web application that allows users to:
> - Save short notes
> - Save useful links
> - Persist data locally in the browser

Constraints:
- No authentication
- Desktop-first
- Simplicity over completeness

---

## Experimental Design

### Test Prompt (Fixed)

The same prompt was reused across experiments:

Design a very small TRP log web app.

#### Requirements:

1. Users can save short notes
2. Users can save links
3. Data persistence can be simple (localStorage is acceptable)
4. No authentication
5. Desktop-first

#### Tasks:

- Ask clarifying questions if needed
- Propose two possible approaches
- Explain tradeoffs
- Recommend one approach
- Provide a minimal implementation plan


This ensured **consistent comparison** across rule configurations.

---

## Rule Iterations

The AI agent was tested under multiple rule configurations:

- **Baseline** – minimal or no rules
- **Rules v1** – role definition + thinking style
- **Rules v2** – interaction contract + trigger handling + MCP awareness

Each version is stored in the `rules/` directory.

---

## What I Observed

### What Worked Well

- Explicit role definition reduced shallow “chatbot-style” responses
- Tradeoff-first instructions improved architectural reasoning
- Interaction rules reduced unprompted assumptions
- Non-blocking trigger logic preserved task completion while maintaining observability

---

### What Didn’t Work Well

- Overly strict trigger enforcement caused brittle execution
- Absolute “MUST / DO NOT PROCEED” rules conflicted with real MCP tool availability
- Large rule blocks were less effective than smaller, operational constraints

---

## Key Insights Gained

- **Rules act as probability shapers, not hard guarantees**
- Clear, testable instructions influence behavior more than abstract preferences
- Observability tools (MCP triggers) should enhance—not block—agent execution
- Designing fallback behavior is as important as defining ideal behavior

---


## Closing Notes

This submission is intentionally focused on **process, experimentation, and learning** rather than application complexity.

The core takeaway from this challenge is that effective AI-assisted development depends less on prompt cleverness and more on **clear collaboration contracts, observability, and iterative refinement**.

---

## Author

Surafel Yimam  
TRP-1 MCP Setup Challenge