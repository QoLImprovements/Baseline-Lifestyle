/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "3-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-170658",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "3-pieces",
      "kind": "unit",
      "label": "3 pieces"
    }
  ],
  "name": "Candies, soft fruit and nut squares",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 73.8,
    "energy_kcal": 390.0,
    "fat_g": 9.52,
    "fibre_g": 2.4,
    "folate_ug": 12.0,
    "iron_mg": 0.93,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 82.0,
    "protein_g": 2.31,
    "salt_g": 0.3275,
    "sat_fat_g": 0.898,
    "sodium_mg": 131.0,
    "sugar_g": 46.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170658",
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
