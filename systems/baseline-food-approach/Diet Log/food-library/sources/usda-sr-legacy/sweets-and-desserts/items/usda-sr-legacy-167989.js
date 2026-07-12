/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "gumdrop-small-1-2-dia",
  "description": "Sweets",
  "id": "usda-sr-legacy-167989",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.2,
      "key": "gumdrop-small-1-2-dia",
      "kind": "unit",
      "label": "gumdrop, small (1/2\" dia)"
    },
    {
      "gramsPerUnit": 63.0,
      "key": "10-gummy-dinosaurs",
      "kind": "unit",
      "label": "10 gummy dinosaurs"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "cup-gumdrops",
      "kind": "unit",
      "label": "cup gumdrops"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "spice-drop",
      "kind": "unit",
      "label": "spice drop"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "10-gumdrops",
      "kind": "unit",
      "label": "10 gumdrops"
    },
    {
      "gramsPerUnit": 4.2,
      "key": "gumdrop-medium-3-4-dia",
      "kind": "unit",
      "label": "gumdrop, medium (3/4\" dia)"
    },
    {
      "gramsPerUnit": 11.6,
      "key": "gumdrop-large-1-dia",
      "kind": "unit",
      "label": "gumdrop, large (1\" dia)"
    },
    {
      "gramsPerUnit": 9.5,
      "key": "spice-stick",
      "kind": "unit",
      "label": "spice stick"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "jelly-ring-1-1-4-dia",
      "kind": "unit",
      "label": "jelly ring (1-1/4\" dia)"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "10-gummy-fish",
      "kind": "unit",
      "label": "10 gummy fish"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "10-gummy-worms",
      "kind": "unit",
      "label": "10 gummy worms"
    }
  ],
  "name": "Candies, gumdrops, starch jelly pieces",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 98.9,
    "energy_kcal": 396.0,
    "fat_g": 0.0,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.4,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1.0,
    "potassium_mg": 5.0,
    "protein_g": 0.0,
    "salt_g": 0.11,
    "sat_fat_g": 0.0,
    "sodium_mg": 44.0,
    "sugar_g": 59.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167989",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
