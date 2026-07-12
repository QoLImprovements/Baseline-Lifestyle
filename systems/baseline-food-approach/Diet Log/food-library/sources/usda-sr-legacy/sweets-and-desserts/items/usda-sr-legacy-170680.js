/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving",
  "description": "Sweets",
  "id": "usda-sr-legacy-170680",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Candies, HERSHEYS, PAYDAY Bar",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 52.9,
    "energy_kcal": 490.0,
    "fat_g": 25.0,
    "fibre_g": 3.8,
    "folate_ug": 51.0,
    "iron_mg": 1.92,
    "magnesium_mg": 90.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 197.0,
    "potassium_mg": 725.0,
    "protein_g": 13.4,
    "salt_g": 0.5775,
    "sat_fat_g": 4.81,
    "sodium_mg": 231.0,
    "sugar_g": 40.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.47,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170680",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
