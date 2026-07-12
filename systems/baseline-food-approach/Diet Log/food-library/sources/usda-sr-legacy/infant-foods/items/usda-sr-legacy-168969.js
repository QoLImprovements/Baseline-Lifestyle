/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-168969",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.4,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant Formula, MEAD JOHNSON, ENFAMIL, Premium, Infant, Liquid concentrate, not reconstituted",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 14.3,
    "energy_kcal": 541.0,
    "fat_g": 7.1,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 2.32,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 138.0,
    "protein_g": 2.72,
    "salt_g": 0.0875,
    "sat_fat_g": 2.94,
    "sodium_mg": 35.0,
    "sugar_g": 14.3,
    "vitamin_a_ug": 118.0,
    "vitamin_c_mg": 15.6,
    "vitamin_e_mg": 1.17,
    "vitamin_k_ug": 11.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168969",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "infant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
