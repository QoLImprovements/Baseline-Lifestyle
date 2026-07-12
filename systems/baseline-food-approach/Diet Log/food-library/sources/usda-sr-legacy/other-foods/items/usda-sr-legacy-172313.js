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
  "id": "usda-sr-legacy-172313",
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
  "name": "Child formula, ABBOTT NUTRITION, PEDIASURE, ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 11.2,
    "energy_kcal": 99.0,
    "fat_g": 4.77,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 1.34,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 125.0,
    "protein_g": 2.86,
    "salt_g": 0.09,
    "sat_fat_g": 1.26,
    "sodium_mg": 36.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 74.0,
    "vitamin_c_mg": 9.5,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172313",
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
