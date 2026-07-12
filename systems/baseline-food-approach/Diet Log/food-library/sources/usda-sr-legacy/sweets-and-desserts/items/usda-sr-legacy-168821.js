/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-1-75-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-168821",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "package-1-75-oz",
      "kind": "unit",
      "label": "package (1.75 oz)"
    }
  ],
  "name": "Pectin, unsweetened, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 90.4,
    "energy_kcal": 1360.0,
    "fat_g": 0.3,
    "fibre_g": 8.6,
    "folate_ug": 1.0,
    "iron_mg": 2.71,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 7.0,
    "protein_g": 0.3,
    "salt_g": 0.5,
    "sat_fat_g": 0.05,
    "sodium_mg": 200.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168821",
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
