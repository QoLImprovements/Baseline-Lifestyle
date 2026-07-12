/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173550",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Child formula, ABBOTT NUTRITION, PEDIASURE, ready-to-feed, with iron and fiber",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 11.3,
    "energy_kcal": 99.0,
    "fat_g": 4.7,
    "fibre_g": 0.5,
    "folate_ug": 28.0,
    "iron_mg": 1.32,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 80.0,
    "potassium_mg": 124.0,
    "protein_g": 2.8,
    "salt_g": 0.09,
    "sat_fat_g": 1.26,
    "sodium_mg": 36.0,
    "sugar_g": 7.6,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 5.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173550",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
