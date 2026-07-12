/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-167580",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Candies, fudge, vanilla with nuts",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 74.6,
    "energy_kcal": 435.0,
    "fat_g": 13.7,
    "fibre_g": 0.9,
    "folate_ug": 12.0,
    "iron_mg": 0.41,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 103.0,
    "protein_g": 3.0,
    "salt_g": 0.105,
    "sat_fat_g": 3.83,
    "sodium_mg": 42.0,
    "sugar_g": 71.0,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167580",
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
