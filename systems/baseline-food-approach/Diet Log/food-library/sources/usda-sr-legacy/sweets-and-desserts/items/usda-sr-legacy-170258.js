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
  "id": "usda-sr-legacy-170258",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Frozen novelties, No Sugar Added, FUDGSICLE pops",
  "nutritionPerBasis": {
    "calcium_mg": 231.0,
    "carbs_g": 23.1,
    "energy_kcal": 519.0,
    "fat_g": 1.87,
    "fibre_g": 1.5,
    "folate_ug": 6.0,
    "iron_mg": 1.58,
    "magnesium_mg": 27.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 160.0,
    "potassium_mg": 253.0,
    "protein_g": 3.67,
    "salt_g": 0.24,
    "sat_fat_g": 0.984,
    "sodium_mg": 96.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170258",
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
