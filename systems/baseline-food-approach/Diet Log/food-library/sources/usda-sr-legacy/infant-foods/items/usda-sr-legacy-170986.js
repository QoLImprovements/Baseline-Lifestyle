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
  "id": "usda-sr-legacy-170986",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.8,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant Formula, MEAD JOHNSON, ENFAMIL, ENFACARE, ready-to-feed, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 7.73,
    "energy_kcal": 73.0,
    "fat_g": 3.8,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 1.28,
    "magnesium_mg": 6.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 48.0,
    "potassium_mg": 76.0,
    "protein_g": 2.0,
    "salt_g": 0.0675,
    "sat_fat_g": 1.58,
    "sodium_mg": 27.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 11.5,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170986",
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
