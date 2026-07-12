/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "tbsp",
  "description": "Sweets",
  "id": "usda-sr-legacy-169594",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cocoa, dry powder, unsweetened, processed with alkali",
  "nutritionPerBasis": {
    "calcium_mg": 111.0,
    "carbs_g": 58.3,
    "energy_kcal": 922.0,
    "fat_g": 13.1,
    "fibre_g": 29.8,
    "folate_ug": 32.0,
    "iron_mg": 15.5,
    "magnesium_mg": 476.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 728.0,
    "potassium_mg": 2510.0,
    "protein_g": 18.1,
    "salt_g": 0.0475,
    "sat_fat_g": 7.76,
    "sodium_mg": 19.0,
    "sugar_g": 1.76,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169594",
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
