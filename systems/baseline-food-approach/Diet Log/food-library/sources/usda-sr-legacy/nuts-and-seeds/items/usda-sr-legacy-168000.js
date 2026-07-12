/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "serving-2-tbsp",
  "description": "Sweets",
  "id": "usda-sr-legacy-168000",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "serving-2-tbsp",
      "kind": "unit",
      "label": "serving 2 TBSP"
    }
  ],
  "name": "Chocolate-flavored hazelnut spread",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 62.4,
    "energy_kcal": 539.0,
    "fat_g": 29.7,
    "fibre_g": 5.4,
    "folate_ug": 14.0,
    "iron_mg": 4.38,
    "magnesium_mg": 64.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 152.0,
    "potassium_mg": 407.0,
    "protein_g": 5.41,
    "salt_g": 0.1025,
    "sat_fat_g": 28.4,
    "sodium_mg": 41.0,
    "sugar_g": 54.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.96,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168000",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "nuts-and-seeds",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
