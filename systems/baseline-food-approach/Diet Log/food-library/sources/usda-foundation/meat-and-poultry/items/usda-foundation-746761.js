/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "raw",
  "description": "Beef Products",
  "id": "usda-foundation-746761",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 788.0,
      "key": "raw",
      "kind": "unit",
      "label": "raw"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Beef, round, top round roast, boneless, separable lean only, trimmed to 0\" fat, select, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.0,
    "energy_kcal": 123.0,
    "fat_g": 2.41,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.34,
    "magnesium_mg": 11.9,
    "omega3_g": 0.015,
    "phosphorus_mg": 220.0,
    "potassium_mg": 316.0,
    "protein_g": 23.7,
    "salt_g": 0.1375,
    "sat_fat_g": 0.924,
    "sodium_mg": 55.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "746761",
  "state": "Raw",
  "subcategory": "Beef Products",
  "tags": [
    "beef-products",
    "meat-and-poultry",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
