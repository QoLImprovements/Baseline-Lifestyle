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
  "id": "usda-sr-legacy-167950",
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
      "gramsPerUnit": 85.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-oz",
      "kind": "unit",
      "label": "2 oz"
    }
  ],
  "name": "Snacks, KRAFT, CORNNUTS, plain",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 71.9,
    "energy_kcal": 1870.0,
    "fat_g": 15.6,
    "fibre_g": 6.9,
    "folate_ug": 0.0,
    "iron_mg": 1.67,
    "magnesium_mg": 113.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 275.0,
    "potassium_mg": 278.0,
    "protein_g": 8.5,
    "salt_g": 1.41,
    "sat_fat_g": 2.43,
    "sodium_mg": 564.0,
    "sugar_g": 0.61,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.98,
    "vitamin_k_ug": 9.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167950",
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
