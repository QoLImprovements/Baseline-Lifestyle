/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "tsp",
  "description": "Sweets",
  "id": "usda-sr-legacy-168088",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6.7,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Syrups, grenadine",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 66.9,
    "energy_kcal": 1120.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.05,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 28.0,
    "protein_g": 0.0,
    "salt_g": 0.0675,
    "sat_fat_g": 0.0,
    "sodium_mg": 27.0,
    "sugar_g": 46.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168088",
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
