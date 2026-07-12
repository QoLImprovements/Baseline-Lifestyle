/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173521",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-beech-nut-stage-2-4-oz",
      "kind": "unit",
      "label": "jar Beech-Nut Stage 2 (4 oz)"
    }
  ],
  "name": "Babyfood, dinner, sweet potatoes and chicken, strained",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 11.0,
    "energy_kcal": 74.0,
    "fat_g": 2.17,
    "fibre_g": 1.3,
    "folate_ug": 6.0,
    "iron_mg": 0.45,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 200.0,
    "protein_g": 2.51,
    "salt_g": 0.055,
    "sat_fat_g": 0.572,
    "sodium_mg": 22.0,
    "sugar_g": 2.65,
    "vitamin_a_ug": 216.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173521",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
