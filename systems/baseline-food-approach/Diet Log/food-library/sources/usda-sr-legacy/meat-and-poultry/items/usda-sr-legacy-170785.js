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
  "id": "usda-sr-legacy-170785",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "item",
      "kind": "unit",
      "label": "item"
    }
  ],
  "name": "Fast foods, crispy chicken in tortilla, with lettuce, cheese, and ranch sauce",
  "nutritionPerBasis": {
    "calcium_mg": 88.0,
    "carbs_g": 23.2,
    "energy_kcal": 275.0,
    "fat_g": 15.1,
    "fibre_g": 1.3,
    "folate_ug": 36.0,
    "iron_mg": 1.47,
    "magnesium_mg": 19.0,
    "omega3_g": 0.469,
    "phosphorus_mg": 186.0,
    "potassium_mg": 173.0,
    "protein_g": 11.5,
    "salt_g": 1.5175,
    "sat_fat_g": 3.84,
    "sodium_mg": 607.0,
    "sugar_g": 2.48,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.21,
    "vitamin_k_ug": 23.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170785",
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
