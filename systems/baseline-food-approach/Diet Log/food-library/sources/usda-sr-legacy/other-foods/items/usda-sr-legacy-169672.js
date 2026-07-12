/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-169672",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-oz",
      "kind": "unit",
      "label": "2 oz"
    }
  ],
  "name": "Snacks, cornnuts, barbecue-flavor",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 71.7,
    "energy_kcal": 1820.0,
    "fat_g": 14.3,
    "fibre_g": 8.4,
    "folate_ug": 0.0,
    "iron_mg": 1.7,
    "magnesium_mg": 109.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 283.0,
    "potassium_mg": 286.0,
    "protein_g": 9.0,
    "salt_g": 1.5,
    "sat_fat_g": 2.58,
    "sodium_mg": 600.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169672",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "other-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
