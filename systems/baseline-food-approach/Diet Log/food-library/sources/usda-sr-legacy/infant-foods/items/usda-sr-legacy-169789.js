/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "5-fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-169789",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "5-fl-oz",
      "kind": "unit",
      "label": "5 fl oz"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, ENFAMIL, Premature, 24 calories ready-to-feed Low iron",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 7.19,
    "energy_kcal": 279.0,
    "fat_g": 3.34,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 0.33,
    "magnesium_mg": 6.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 54.0,
    "potassium_mg": 64.0,
    "protein_g": 1.97,
    "salt_g": 0.095,
    "sat_fat_g": 1.34,
    "sodium_mg": 38.0,
    "sugar_g": 7.21,
    "vitamin_a_ug": 248.0,
    "vitamin_c_mg": 13.1,
    "vitamin_e_mg": 1.86,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169789",
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
