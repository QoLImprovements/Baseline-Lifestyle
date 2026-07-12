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
  "id": "usda-sr-legacy-171383",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, ISOMIL, ADVANCE with iron, ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 6.7,
    "energy_kcal": 274.0,
    "fat_g": 3.59,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.18,
    "magnesium_mg": 5.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 49.0,
    "potassium_mg": 71.0,
    "protein_g": 1.61,
    "salt_g": 0.0725,
    "sat_fat_g": 1.17,
    "sodium_mg": 29.0,
    "sugar_g": 6.7,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171383",
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
