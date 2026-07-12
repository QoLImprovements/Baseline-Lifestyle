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
  "id": "usda-sr-legacy-167738",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pie fillings, blueberry, canned",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 44.4,
    "energy_kcal": 757.0,
    "fat_g": 0.2,
    "fibre_g": 2.6,
    "folate_ug": 1.0,
    "iron_mg": 0.8,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 115.0,
    "protein_g": 0.41,
    "salt_g": 0.03,
    "sat_fat_g": 0.0,
    "sodium_mg": 12.0,
    "sugar_g": 37.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167738",
  "state": "Canned",
  "subcategory": "Sweets",
  "tags": [
    "canned",
    "sweets",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
