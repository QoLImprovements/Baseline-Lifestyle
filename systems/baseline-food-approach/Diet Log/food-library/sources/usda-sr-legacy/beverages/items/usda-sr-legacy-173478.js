/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "packet",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173478",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Babyfood, juice treats, fruit medley, toddler",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 86.7,
    "energy_kcal": 347.0,
    "fat_g": 0.02,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.24,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 54.0,
    "protein_g": 0.0,
    "salt_g": 0.2225,
    "sat_fat_g": 0.0,
    "sodium_mg": 89.0,
    "sugar_g": 57.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173478",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
