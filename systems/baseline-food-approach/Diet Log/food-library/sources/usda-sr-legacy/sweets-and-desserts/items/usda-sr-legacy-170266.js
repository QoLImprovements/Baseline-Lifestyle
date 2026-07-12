/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-pop",
  "description": "Sweets",
  "id": "usda-sr-legacy-170266",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "serving-1-pop",
      "kind": "unit",
      "label": "serving 1 pop"
    }
  ],
  "name": "Frozen novelties, No Sugar Added CREAMSICLE Pops",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 12.9,
    "energy_kcal": 300.0,
    "fat_g": 0.61,
    "fibre_g": 3.6,
    "folate_ug": 0.0,
    "iron_mg": 0.28,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 3.69,
    "salt_g": 0.1025,
    "sat_fat_g": 0.47,
    "sodium_mg": 41.0,
    "sugar_g": 2.75,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170266",
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
