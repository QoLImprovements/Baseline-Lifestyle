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
  "id": "usda-sr-legacy-167573",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Ice creams, vanilla, rich",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 22.3,
    "energy_kcal": 1040.0,
    "fat_g": 16.2,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.34,
    "magnesium_mg": 11.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 105.0,
    "potassium_mg": 157.0,
    "protein_g": 3.5,
    "salt_g": 0.1525,
    "sat_fat_g": 10.3,
    "sodium_mg": 61.0,
    "sugar_g": 20.6,
    "vitamin_a_ug": 182.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167573",
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
