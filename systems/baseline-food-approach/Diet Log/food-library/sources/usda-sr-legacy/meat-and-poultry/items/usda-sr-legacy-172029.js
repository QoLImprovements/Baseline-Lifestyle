/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "item",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172029",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, biscuit, with egg, cheese, and bacon",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 24.4,
    "energy_kcal": 301.0,
    "fat_g": 17.5,
    "fibre_g": 0.2,
    "folate_ug": 48.0,
    "iron_mg": 1.57,
    "magnesium_mg": 15.0,
    "omega3_g": 0.074,
    "phosphorus_mg": 363.0,
    "potassium_mg": 131.0,
    "protein_g": 12.0,
    "salt_g": 2.04,
    "sat_fat_g": 5.89,
    "sodium_mg": 816.0,
    "sugar_g": 1.74,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.02,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172029",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
