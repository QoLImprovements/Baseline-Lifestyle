/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving-1-2-cup",
  "description": "Sweets",
  "id": "usda-sr-legacy-169631",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "serving-1-2-cup",
      "kind": "unit",
      "label": "serving 1/2 cup"
    }
  ],
  "name": "Ice creams, vanilla, light, no sugar added",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 21.4,
    "energy_kcal": 169.0,
    "fat_g": 7.45,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 0.19,
    "magnesium_mg": 9.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 75.0,
    "potassium_mg": 196.0,
    "protein_g": 3.97,
    "salt_g": 0.24,
    "sat_fat_g": 4.05,
    "sodium_mg": 96.0,
    "sugar_g": 6.46,
    "vitamin_a_ug": 86.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169631",
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
