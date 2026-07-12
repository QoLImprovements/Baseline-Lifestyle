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
  "id": "usda-sr-legacy-170279",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Candies, fruit snacks, with high vitamin C",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 88.0,
    "energy_kcal": 352.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.0,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 8.0,
    "protein_g": 0.08,
    "salt_g": 0.0575,
    "sat_fat_g": 0.0,
    "sodium_mg": 23.0,
    "sugar_g": 68.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 136.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170279",
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
