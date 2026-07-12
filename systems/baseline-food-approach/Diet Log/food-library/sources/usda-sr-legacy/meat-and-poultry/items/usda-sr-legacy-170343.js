/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170343",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "KFC, Fried Chicken, EXTRA CRISPY, Skin and Breading",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 22.5,
    "energy_kcal": 1940.0,
    "fat_g": 36.6,
    "fibre_g": 1.5,
    "folate_ug": 0.0,
    "iron_mg": 0.67,
    "magnesium_mg": 18.0,
    "omega3_g": 0.654,
    "phosphorus_mg": 149.0,
    "potassium_mg": 170.0,
    "protein_g": 11.0,
    "salt_g": 2.07,
    "sat_fat_g": 7.54,
    "sodium_mg": 828.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170343",
  "state": "Fried",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
