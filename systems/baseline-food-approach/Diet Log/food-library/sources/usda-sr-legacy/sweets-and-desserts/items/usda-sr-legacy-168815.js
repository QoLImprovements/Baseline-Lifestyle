/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "0-5-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-168815",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Frozen yogurts, vanilla, soft-serve",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 24.2,
    "energy_kcal": 665.0,
    "fat_g": 5.6,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.3,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 211.0,
    "protein_g": 4.0,
    "salt_g": 0.2175,
    "sat_fat_g": 3.42,
    "sodium_mg": 87.0,
    "sugar_g": 24.0,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168815",
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
