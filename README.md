# Mothers-Day-Garden
An interactive and animated garden for my mom ❤️

## 🌼 Product Requirements Document: Mom’s Garden – MVP
### 🧭 Overview
Product Name: Mom’s Garden
Purpose: A cheerful, interactive garden-themed website designed as a personal Mother’s Day gift. It’s a whimsical space where my mom can explore visual elements, hear ambient sounds, and plan her real-life or dream garden.

Phase: MVP (Static interactive site with animations and sounds)
Host: Netlify or something similar
Primary User: My mom

### 🎯 Goals
Create a visually rich, animated homepage featuring a custom garden illustration. I can provide all SVG assets for the flowers, trees, etc, and png for the background image. 

Allow interaction with key garden elements (e.g., watering can, birdhouse)

Provide light ambient sounds and/or sound effects triggered by interaction

Enable access to a basic Garden Planning Tool

Delight my mom on Mother’s Day and lay the foundation for future features

### 🔍 Key Features
1. **Homepage / Interactive Garden Scene**
- Rendered using hand-illustrated SVG assets
- Background, animated, and interactive elements are layered using HTML/CSS positioning
- All assets optimized for performance and mobile-friendly viewing
- Elements include:
    - 🌞 Sun
    - 🏡 Tool shed
    - 🪑 Bench (with bird)
    - 🐦 Birdhouse
    - 🌼 Assorted flowers (some interactive)
    - 🌿 Watering can (launches garden planner)
    - 🌲 Trees

2. **Element Interactions**

- Watering Can:	Opens Garden Planner tool (modal or new view)
- Birdhouse:	Plays chirping sound or fun message
- Bench/Bird:	Triggers light sound (wood creak or coo)
- Sun:	Plays ambient tone or sunrise-style animation
- Heart Flower:	Displays "I love you" and/or sparkles (easter egg)

3. **Garden Planning Tool**
- Opens on click of the watering can
- Simple interface with:
    - Drag and drop vegetable and herbs that can be placed on a garden bed,
    - Small plot preview with placed plants
    - Optional notes area (“Planting ideas”)
    - Button to download an image of the garden bed and notes

4. **Sound + Animation Layer**

- Soft looping background
- Click interactions trigger .mp3 or .ogg sounds
- SVG animations on hover/click (e.g., flower wiggle, watering splash)

### 🔒 Basic Login Gate 

- Simple username/password gate using JavaScript or Netlify Identity (or something similar)

- Placeholder for future personalization (notes, saved projects, etc.)

### 🚧 Future Features (Post-MVP)
- Persistent user data (recipes, memories, bookmarks, etc.)

- Storage for garden designs and notes

- Full memory/photo log

- Dynamic seasonal changes or weather

### ✅ Deliverables
- Deployed static site with interactive garden

- Working garden planner module

- Integrated sounds and animations

- Surprise touches (e.g., heart flower, sun click, etc.)