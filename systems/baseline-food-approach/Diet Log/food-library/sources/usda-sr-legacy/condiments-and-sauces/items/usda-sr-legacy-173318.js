/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173318",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, hamburger; single, regular patty; double decker bun with condiments and special sauce",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 22.7,
    "energy_kcal": 1080.0,
    "fat_g": 13.3,
    "fibre_g": 1.4,
    "folate_ug": 22.0,
    "iron_mg": 2.07,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 194.0,
    "protein_g": 12.2,
    "salt_g": 0.965,
    "sat_fat_g": 4.24,
    "sodium_mg": 386.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 23.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173318",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "condiments-and-sauces",
    "fast-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
