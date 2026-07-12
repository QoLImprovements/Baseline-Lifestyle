/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-2-pops",
  "description": "Sweets",
  "id": "usda-sr-legacy-170267",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "serving-2-pops",
      "kind": "unit",
      "label": "serving 2 pops"
    }
  ],
  "name": "Frozen novelties, Sugar Free, CREAMSICLE Pops",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 12.0,
    "energy_kcal": 49.0,
    "fat_g": 2.33,
    "fibre_g": 7.5,
    "folate_ug": 0.0,
    "iron_mg": 0.03,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 1.37,
    "salt_g": 0.015,
    "sat_fat_g": 2.0,
    "sodium_mg": 6.0,
    "sugar_g": 0.43,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170267",
  "state": "Frozen",
  "subcategory": "Sweets",
  "tags": [
    "frozen",
    "sweets",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
