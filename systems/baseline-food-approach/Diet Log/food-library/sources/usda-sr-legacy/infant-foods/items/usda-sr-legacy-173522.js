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
  "id": "usda-sr-legacy-173522",
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
  "name": "Infant formula, MEAD JOHNSON, Enfamil 24, ready to feed, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 6.93,
    "energy_kcal": 298.0,
    "fat_g": 4.1,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 1.41,
    "magnesium_mg": 6.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 34.0,
    "potassium_mg": 84.0,
    "protein_g": 1.64,
    "salt_g": 0.0525,
    "sat_fat_g": 1.72,
    "sodium_mg": 21.0,
    "sugar_g": 8.1,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 9.4,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173522",
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
