/* ============================================================
   WIKI — el contenido de las fichas de personaje.

   Para editar un texto, busca el personaje y cambia lo que
   este entre comillas. Cada fila es: ["Etiqueta", "Texto"]

   El campo "color" es el color que usa la ficha de ese
   personaje (y solo ahi — el resto del sitio no lo usa).
   ============================================================ */

const WIKI = {

  chordeva: {
    nombre: "Chordeva",
    color: "#c89ad4",
    rol: "The Chaotic Catalyst · Melee Speedster · Twin Sister",
    chips: ["Demon", "Melee", "Final Design"],
    look: [
      ["Skin", "Purple — darker than Charon"],
      ["Hair", "Purple, medium, messy and spiked"],
      ["Eyes", "Red iris, black sclera, faint glow in the dark"],
      ["Horns", "\"C\" shape from the side. Right horn has a ring with a big yellow jewel"],
      ["Tail", "3 segments, two tiny tentacle ends — always fidgeting, spins a butterfly knife"],
      ["Teeth", "Sharp, pale — family trait"],
      ["Jacket", "Long tattered red coat under a small black jacket. Midriff exposed."],
      ["Pants", "Baggy, tight at the back — trained legs"],
      ["Boots", "Dark, heavy, custom. Toe spikes for kicks, pink ankle bands, skate-capable"],
      ["Accessories", "Rings, layered collars, bracelets, spike wristbands — everything shiny"],
      ["Bandaids", "Both arms — magnetic weapon recall, like Kratos' blades"],
      ["Shape language", "Asymmetry, sharp spikes, curves — chaos and rebellion"]
    ],
    pers: [
      ["Core", "Hyperactive, talkative, socially unaware, genuinely good-hearted"],
      ["Speech quirk", "Repeats small words: \"ok ok\", \"bye bye\", \"hey hey\", \"no no\""],
      ["Accent", "Light casual British — faster when excited"],
      ["Dopamine", "Cycles obsessively: lifting → martial arts → gambling → etc. Never sticks long."],
      ["Sleep", "Hates it. Her mother's ring helps with nightmares but doesn't cure them."],
      ["Apologies", "When told she messed up, apologizes immediately and means it"],
      ["Curse", "Win/lose alternating — only if she started the fight or fights alone. The losses are always ridiculous: a flower in the face, a loose shoelace."]
    ],
    fight: [
      ["Style", "Air combos, high mobility, fragile. Kicks are heavy finishers."],
      ["Boots", "Skate on terrain like roller skates — keeps momentum while attacking"],
      ["Slot 1 — Blade Flurry", "Invincible dash through all enemies, slashing each one. Keep clicking to extend (the requirement goes up). Ends with a backward jump. 3 charges."],
      ["Slot 2 — Lash Dash", "Forward and upward boost toward a targeted enemy or special block. Large movement. 2 charges."],
      ["Slot 3 — Blade Trick", "Speed and damage boost, refreshes all charges. 50% chance to self-damage (buffs doubled). If HP hits 0: kill 3 enemies or raise style 2 ranks to survive at 1 HP."],
      ["Slot 4 — Ultimate", "Pre-hardmode: summons dual split-blades (becomes permanent). Hardmode (Sin Devil Trigger): powerful demon form, devastating attacks and aura damage."]
    ],
    rel: [
      ["Charon", "Deep trust. Mocks him constantly about the 1cm height difference. They spar to see who endures more pain. Absolute love."],
      ["Seph", "Talks at her endlessly. Somehow extracts more words out of Seph than anyone else manages. No resentment about the coldness."],
      ["Freya", "A chaotic cycle — a joke lands wrong, Freya gets mad, both forget by the next day. Sometimes genuinely friendly. Freya spells her name \"Kordeva\" and she doesn't care."]
    ]
  },

  charon: {
    nombre: "Charon",
    color: "#a8b8e8",
    rol: "The Timid Prince · Ranged Gunslinger · Twin Brother",
    chips: ["Demon", "Ranged", "WIP"],
    look: [
      ["Skin", "Purple — lighter than Chordeva"],
      ["Hair", "Deep purple — covers his right eye"],
      ["Horns", "Deep red. Right horn is a reverse \"S\". From behind they read as \"SOS\"."],
      ["Robot arm", "Right side, gray metallic. Inspired by Nero (DMC5) and Ryuji Goda"],
      ["Arm detail", "The fingers have teeth (the infection), it glows yellow inside, and shakes on cooldown"],
      ["Tail", "3 segments, fires a secondary pistol — not strong enough for constant use"],
      ["Coat", "Deep blue, pristine, barely scratched — Vergil energy"],
      ["Other", "Bulletproof vest and ammo, belly bag, empty bullet collar, white cowboy pants and boots, glove on the organic hand"],
      ["Shape language", "Straight lines, clean curves — order and control with chaos creeping in"]
    ],
    pers: [
      ["Core", "Timid, respectful, burdened by royal blood and the curse"],
      ["With strangers", "Quiet, polite, avoids confrontation"],
      ["With people he trusts", "Jokes, playful insults, completely himself — not just with Chordeva, with anyone he trusts"],
      ["Curse", "Teeth grow out of his body, especially the robot arm — an infection from royal blood and the sin of gluttony"],
      ["Backstory", "Royal twin. His parents were trapped under rubble during a monster attack (their fate is ambiguous). Both twins were scarred by a Sinner before Seph saved them."]
    ],
    fight: [
      ["Weapon system", "Left arm (organic): standard firearms. Tail: the same but slower. Robot arm: stronger and special bullets."],
      ["Slot 1 — Trick Shot", "Toss a coin, shoot it to ricochet into a critical hit on the nearest enemy — Ultrakill style. 3 charges."],
      ["Slot 2 — Shotgun Boost", "The tail fires a shotgun blast, propelling Charon in the opposite direction. Movement tool. Long tail recovery cooldown. 2 charges."],
      ["Slot 3 — Overcharge", "Activates a special robot arm weapon (railcannon, super SMG, etc). Firing too long causes self-damage. Taking damage while overcharged gives temporary weapon buffs. 2 charges."],
      ["Slot 4 — Ultimate", "Pre-hardmode: take damage but Overcharge costs nothing, plus a massive railcannon shot. Hardmode (Brimstone Laser): demon form, massive piercing laser, slower but damage resistant."],
      ["Synergy — Freya", "Can shoot Freya's fireballs mid-air to detonate them early for bigger explosions."]
    ],
    rel: [
      ["Chordeva", "Complete trust. Jokes, sparring, absolute bond. Sometimes takes her jokes literally and gets hurt, but struggles to say so."],
      ["Seph", "Admires her stoicism. Wants her approval and protection without realizing it. Small moments — like her answering his mundane questions — mean everything to him."],
      ["Freya", "Her genuine interest draws him in. Innocent, easily embarrassed, secretly fantasizes about a simple normal relationship. Unaware she originally planned to sacrifice him."]
    ]
  },

  seph: {
    nombre: "Seph",
    color: "#e8c840",
    rol: "The Frozen Guardian · Tank / Heavy Melee · Battle Angel",
    chips: ["Angel", "Tank", "Redesign"],
    look: [
      ["Skin", "Black — subverts the white angel trope on purpose"],
      ["Hair", "Blonde wolfcut, bloody bandaid covering one eye"],
      ["Eyes", "Left: blind, deep scars. Right: also scarred. Cries blood instead of tears."],
      ["Build", "Muscular, toned, bigger body, sharper face — tank energy, not delicate"],
      ["Armor", "Broken and cracked throughout — her fractured state made physical"],
      ["Chest shield", "Impenetrable from the outside. Inside: a mechanism to pierce her own heart. A literal metaphor — she'd rather die than feel loss again."],
      ["Left arm", "Wing-shaped armor hiding a shotgun (Knuckleblaster inspired, Ultrakill). Being redesigned but staying similar."],
      ["Skirts (3)", "Bottom: blood red with a feather pattern. Middle: bright torn red. Top: pure white, destroyed but unstained."],
      ["Jacket", "Black, broken, scratched — a gift from Chordeva. She wears it even though she doesn't like it."],
      ["Gloves", "Dark, fingerless. Chordeva has a similar pair — a bond detail."],
      ["Halo", "Floats behind her, rotated. Contains a giant eye with 360° vision. Two tiny wings float at its sides."],
      ["Shape language", "Straight but broken lines — damaged order, barely holding together"]
    ],
    pers: [
      ["Core", "Stoic, brutally honest, emotionally locked from trauma"],
      ["Why frozen", "She lost everyone she loved. The pain nearly destroyed her. Her solution: never love again."],
      ["Honesty", "Says exactly what she means. Reads as cruel but isn't. No social filter, just truth."],
      ["Under pressure", "More efficient, not faster. Never panics. Always the last to tend her own wounds."],
      ["Secret", "Drawn to the twins without understanding why. Fights these feelings constantly."],
      ["Affection", "Actions only — cooks nuggets for Charon, wears Chordeva's jacket, stands watch while the others rest."],
      ["Grief", "Cries blood. Never speaks of it."],
      ["Conflict", "Open up and risk loss again, or stay frozen and safe forever."]
    ],
    fight: [
      ["Style", "Slow, devastating, crowd control through grabs. Surprisingly mobile in the air thanks to the wings."],
      ["Energy", "God of War 3 — angry, brutally efficient, emotionally disconnected. Fights like she's doing laundry."],
      ["Slot 1 — Stomp", "Slam down, AoE damage scales with height. Works on ground and in air. 2 charges."],
      ["Slot 2 — Wing Uppercut", "Ground: launches upward, pulling nearby enemies into the air. Air: flings surrounding enemies downward, setting up Stomp. 2 charges."],
      ["Slot 3 — Blood Rage", "Self-damage to enter a smaller rage state: increased damage, Broken Bones debuff, health drains over time. 2 charges."],
      ["Slot 4 — Ultimate", "Pre-hardmode: summons a kusarigama, a mid-range chain sickle (becomes permanent). Hardmode (Spartan Rage): massive damage, high resistance, can grab enemies — Kratos energy."]
    ],
    rel: [
      ["Charon", "Fiercely protective, completely hides it. Cooks nuggets when he asks. His mundane questions get answers — which means everything to him."],
      ["Chordeva", "Annoyed but somehow engaged. Chordeva gets more words out of her than anyone else manages. She wears the jacket anyway."],
      ["Freya", "Deep distrust from day one. Won't call her trustworthy. When pushed far enough, verbally destroys her."]
    ]
  },

  freya: {
    nombre: "Freya",
    color: "#e06040",
    rol: "The Insecure Bully · Fire Mage · Witch",
    chips: ["Witch", "Fire"],
    look: [
      ["Skin", "Pink/red tone"],
      ["Hair", "Dark brown, braided buns"],
      ["Horns", "Goat horns with chains"],
      ["Arm", "One green bandaged arm"],
      ["Wings", "Bat wings"],
      ["Legs", "Goat legs"],
      ["Burns", "Two red burn marks on her arm — from her own incomplete fire magic"],
      ["Jewelry", "Gold earrings, chains, cross necklace, pentagram. Half of it is sharp and broken — her hidden true nature."],
      ["Gauntlets", "Golden, on her hands"],
      ["Skirt", "Dark, layered, with teeth and spikes at the hem"],
      ["Build", "Not thin — heavier build"],
      ["Shape language", "Clean polished surface hiding sharp broken details — deception"]
    ],
    pers: [
      ["Core", "Mean on purpose, thin-skinned, secretly lonely"],
      ["Accent", "Forced neutral — slips rough when stressed, angry, or genuinely moved"],
      ["Swearing", "Harsh, weaponized — meant to hurt"],
      ["Curse", "Fire magic burns her own skin. Her anger literally hurts her."],
      ["Change", "Charon's genuine kindness — a hug out of pure gratitude — gives her warmth that doesn't burn. First time she questions the plan."]
    ],
    fight: [
      ["Slot 1 — Fire Breath", "Hold to spray a fire cone, leaving burning patches. Right-click to detonate all burning enemies on screen (costs 1 charge below S rank). 3 charges."],
      ["Slot 2 — Rainstorm", "Ground: boosts Freya upward. Air: pushes her down fast — creates momentum for Seph's Stomp synergy. 2 charges."],
      ["Slot 3 — Self-Immolate", "Explosion knocks back enemies, grants a speed boost, leaves a fire trail. Deals self-damage. Panic button and utility. 2 charges."],
      ["Slot 4 — Ultimate", "Pre-hardmode: meteor shower (AoE, ignores ceilings indoors). Hardmode (Satanic Goat Form): goat demon transformation, fire from the mouth, stomp explosions."]
    ],
    rel: [
      ["Charon", "Started as a mark — she planned to sacrifice him to summon Lucifer. His kindness broke through. \"Corazón\" slips out honestly now. Genuinely conflicted between the deal and protecting him."],
      ["Chordeva", "Gets genuinely offended, but Chordeva's daily resets keep the door open. Sometimes actually friendly."],
      ["Seph", "Mutual deep distrust. Won't be trusted. When Seph decides to fight back, she verbally destroys her."],
      ["Lucifer", "Made a half-completed deal — fire magic in exchange for her soul. The magic burns her as a result. She has to find him to finish or break the pact. Charon's royal blood might be the key."]
    ]
  }

};
