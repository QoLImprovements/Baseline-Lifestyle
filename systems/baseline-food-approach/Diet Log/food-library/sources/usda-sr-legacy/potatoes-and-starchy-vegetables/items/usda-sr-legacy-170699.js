/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170699",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 242.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Fast foods, potato, mashed",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 14.6,
    "energy_kcal": 370.0,
    "fat_g": 2.82,
    "fibre_g": 1.3,
    "folate_ug": 9.0,
    "iron_mg": 0.31,
    "magnesium_mg": 15.0,
    "omega3_g": 0.176,
    "phosphorus_mg": 59.0,
    "potassium_mg": 286.0,
    "protein_g": 1.65,
    "salt_g": 0.765,
    "sat_fat_g": 0.577,
    "sodium_mg": 306.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170699",
  "state": "Mashed",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "mashed",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
