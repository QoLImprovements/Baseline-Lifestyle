/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "White potatoes, baked or boiled",
  "id": "usda-fndds-2709401",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-whole-canned",
      "kind": "unit",
      "label": "1 whole, canned"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Potato, canned, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 13.6,
    "energy_kcal": 60.0,
    "fat_g": 0.2,
    "fibre_g": 2.4,
    "folate_ug": 6.0,
    "iron_mg": 1.25,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 228.0,
    "protein_g": 1.39,
    "salt_g": 0.3975,
    "sat_fat_g": 0.051,
    "sodium_mg": 159.0,
    "sugar_g": 0.59,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.1,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709401",
  "state": "Canned",
  "subcategory": "White potatoes, baked or boiled",
  "tags": [
    "canned",
    "potatoes-and-starchy-vegetables",
    "white-potatoes-baked-or-boiled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
