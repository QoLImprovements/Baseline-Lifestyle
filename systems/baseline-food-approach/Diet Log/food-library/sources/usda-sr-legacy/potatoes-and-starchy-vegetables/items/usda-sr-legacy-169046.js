/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "10-chips",
  "description": "Snacks",
  "id": "usda-sr-legacy-169046",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "10-chips",
      "kind": "unit",
      "label": "10 chips"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Snacks, potato chips, white, restructured, baked",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 71.4,
    "energy_kcal": 1960.0,
    "fat_g": 18.2,
    "fibre_g": 4.8,
    "folate_ug": 0.0,
    "iron_mg": 0.8,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 274.0,
    "potassium_mg": 721.0,
    "protein_g": 5.0,
    "salt_g": 1.34,
    "sat_fat_g": 2.63,
    "sodium_mg": 536.0,
    "sugar_g": 5.01,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.18,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169046",
  "state": "Baked",
  "subcategory": "Snacks",
  "tags": [
    "baked",
    "potatoes-and-starchy-vegetables",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
