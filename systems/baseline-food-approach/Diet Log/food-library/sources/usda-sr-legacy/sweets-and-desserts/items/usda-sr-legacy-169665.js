/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "2-tbsp",
  "description": "Sweets",
  "id": "usda-sr-legacy-169665",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "2-tbsp",
      "kind": "unit",
      "label": "2 tbsp"
    },
    {
      "gramsPerUnit": 340.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Toppings, pineapple",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 66.4,
    "energy_kcal": 1060.0,
    "fat_g": 0.1,
    "fibre_g": 0.4,
    "folate_ug": 2.0,
    "iron_mg": 0.12,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 43.0,
    "protein_g": 0.1,
    "salt_g": 0.105,
    "sat_fat_g": 0.018,
    "sodium_mg": 42.0,
    "sugar_g": 21.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169665",
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
