# 🎯 Portfolio Project Selection Prompt

## Context
You are helping Utkarsh Halwai (@HACKERPLAYZ41) curate his portfolio for **blockcode.in**. He has 24+ GitHub repositories (8 public, 16+ private) and needs to select only the **most impressive, relevant, and portfolio-worthy projects**.

## Available Projects

### PUBLIC (8):
1. **Blockcode.in** - Hosting platform (Flagship)
2. **Discord Profile Finder** - Discord API tool (1 star)
3. **Vault Plugin** - Minecraft economy API
4. **Solar System** - HTML5 Canvas animation
5. **Birthday Gift** - Animated template
6. **Kolhapuri Chappal** - E-commerce
7. **Chatbot Widget** - AI chatbot with OpenAI
8. **E-commerce Store** - Next.js + Razorpay

### PRIVATE (14+):
9. **Blast Broadcast Hub** - TypeScript broadcasting
10. **Blockcode Marketplace Shop** - TypeScript marketplace
11. **Blockcode.space** - Discord tool (HTML)
12. **Bridge Shopper** - TypeScript shopping
13. **Builder Orbit Works** - Builder.io project
14. **Chappal Heritage Hub V2** - TypeScript e-commerce
15. **DJ Portfolio** - Replit portfolio
16. **Friend Lore Keeper** - Social tracker
17. **Magic Bento Showcase** - Bento grid portfolio
18. **Mehndi Aura Gallery UI** - TypeScript gallery
19. **Panel** - Hosting management panel
20. **PORTFOLIO** - Main portfolio codebase
21. **VS Mehandi Art** - Live at vsmehandi.art
22. **Wake Up Main** - Productivity app

---

## Selection Criteria

### MUST INCLUDE (Tier 1) 🏆
These projects MUST be in the portfolio:
- **Blockcode.in** - Flagship product, core business
- **Any project with live URL** - Shows real-world deployment
- **Any project with unique/complex tech** - Demonstrates advanced skills
- **Any project that serves 500+ clients** - Business impact

### SHOULD INCLUDE (Tier 2) ⭐
Include if space permits:
- **Projects with 100+ lines of code** - Shows depth
- **Projects using modern stack** - TypeScript, React, Next.js
- **Projects with unique features** - Payment integration, APIs, etc.

### OPTIONAL (Tier 3) 📦
Include only if relevant to target audience:
- **Personal/Template projects** - Birthday, Sorry page
- **Learning/experimentation projects** - Early repos
- **Duplicate/similar projects** - Pick the best version

### EXCLUDE ❌
Do NOT include:
- **Empty repos** - 0 KB or minimal code
- **Forks without significant changes**
- **Very old/outdated tech** - Unless showcasing evolution
- **Incomplete/broken projects**

---

## Output Format

Return selected projects in this format:

```markdown
## 🏆 Featured Projects (Top 5-7)

### 1. [Project Name] - [Badge: LIVE/PRIVATE]
**Why Include:** [1-2 lines on why this is impressive]
**Tech Stack:** [Key technologies only]
**Live/GitHub:** [URL if public]
**Category:** [Hosting/E-commerce/Tool/API/Other]

[Repeat for 5-7 featured projects]

---

## 📦 All Projects (Complete List)

[Remaining projects in condensed format]
```

---

## Special Instructions

1. **Prioritize business impact** - Blockcode hosting is the main product
2. **Show full-stack capability** - Include frontend, backend, database projects
3. **Highlight modern tech** - TypeScript > JavaScript, React > vanilla
4. **Group similar projects** - E-commerce together, tools together
5. **Keep it scannable** - Recruiters spend 30 seconds max
6. **Include metrics** - "500+ clients", "99.9% uptime", etc.

---

## Target Audience

- **Potential clients** for Blockcode hosting
- **Recruiters** looking for full-stack developers
- **Collaborators** for open-source projects
- **Investors** interested in Blockcode business

---

## Example Selection (Reference)

**GOOD Selection:**
- Blockcode.in (flagship, live, business)
- Discord Profile Finder (live, API, 1 star)
- Chatbot Widget (AI, modern tech)
- E-commerce Store (payments, production)
- Panel (hosting infrastructure)
- VS Mehandi Art (live client work)

**BAD Selection:**
- Birthday Gift (too simple)
- Sorry Page (not professional)
- Empty repos
- 5 similar e-commerce projects (pick best 2)

---

## Final Check

Before finalizing, ask:
- ✅ Does this showcase my best work?
- ✅ Is there variety in tech stack?
- ✅ Are live projects prioritized?
- ✅ Is the list scannable in 30 seconds?
- ✅ Would a client be impressed?

---

**NOW: Analyze the projects above and return the curated portfolio list following these guidelines.**
