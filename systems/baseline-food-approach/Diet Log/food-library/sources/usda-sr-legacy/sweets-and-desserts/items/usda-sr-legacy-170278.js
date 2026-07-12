/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece",
  "description": "Sweets",
  "id": "usda-sr-legacy-170278",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Candies, NESTLE, BUTTERFINGER Crisp",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 68.4,
    "energy_kcal": 465.0,
    "fat_g": 18.3,
    "fibre_g": 1.7,
    "folate_ug": 25.0,
    "iron_mg": 0.6,
    "magnesium_mg": 89.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 153.0,
    "potassium_mg": 429.0,
    "protein_g": 6.67,
    "salt_g": 0.0325,
    "sat_fat_g": 10.6,
    "sodium_mg": 13.0,
    "sugar_g": 48.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.31,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170278",
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
