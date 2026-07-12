/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-spiral-shaped",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-168903",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "cup-spiral-shaped",
      "kind": "unit",
      "label": "cup spiral shaped"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-oz",
      "kind": "unit",
      "label": "2 oz"
    }
  ],
  "name": "Macaroni, vegetable, enriched, dry",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 74.9,
    "energy_kcal": 1540.0,
    "fat_g": 1.04,
    "fibre_g": 4.3,
    "folate_ug": 278.0,
    "iron_mg": 4.28,
    "magnesium_mg": 46.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 285.0,
    "protein_g": 13.1,
    "salt_g": 0.1075,
    "sat_fat_g": 0.15,
    "sodium_mg": 43.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168903",
  "state": "Unspecified",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
