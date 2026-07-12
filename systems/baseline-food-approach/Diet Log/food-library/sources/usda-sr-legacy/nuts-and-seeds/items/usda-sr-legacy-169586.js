/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-169586",
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
  "name": "Candies, peanut brittle, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 71.2,
    "energy_kcal": 2030.0,
    "fat_g": 19.0,
    "fibre_g": 2.5,
    "folate_ug": 46.0,
    "iron_mg": 1.22,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 106.0,
    "potassium_mg": 168.0,
    "protein_g": 7.57,
    "salt_g": 1.1125,
    "sat_fat_g": 4.14,
    "sodium_mg": 445.0,
    "sugar_g": 51.3,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.56,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169586",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "nuts-and-seeds",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
