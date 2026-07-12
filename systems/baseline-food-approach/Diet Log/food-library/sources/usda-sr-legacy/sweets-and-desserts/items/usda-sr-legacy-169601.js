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
  "id": "usda-sr-legacy-169601",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 141.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 844.0,
      "key": "recipe-yield",
      "kind": "unit",
      "label": "recipe yield"
    }
  ],
  "name": "Desserts, apple crisp, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 30.8,
    "energy_kcal": 161.0,
    "fat_g": 3.43,
    "fibre_g": 1.4,
    "folate_ug": 16.0,
    "iron_mg": 0.82,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 78.0,
    "protein_g": 1.75,
    "salt_g": 0.8775,
    "sat_fat_g": 0.685,
    "sodium_mg": 351.0,
    "sugar_g": 19.7,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169601",
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
