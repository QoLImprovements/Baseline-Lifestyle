/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "container",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170989",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "container",
      "kind": "unit",
      "label": "container"
    }
  ],
  "name": "Babyfood, mashed cheddar potatoes and broccoli, toddlers",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 7.47,
    "energy_kcal": 202.0,
    "fat_g": 1.47,
    "fibre_g": 1.2,
    "folate_ug": 6.0,
    "iron_mg": 0.16,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 118.0,
    "protein_g": 1.11,
    "salt_g": 0.44,
    "sat_fat_g": 0.875,
    "sodium_mg": 176.0,
    "sugar_g": 1.17,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 8.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170989",
  "state": "Mashed",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "mashed",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
