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
  "id": "usda-sr-legacy-173547",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 31.3,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, ENFAMIL, PROSOBEE, liquid concentrate, reconstituted, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 7.58,
    "energy_kcal": 67.0,
    "fat_g": 3.4,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.17,
    "magnesium_mg": 5.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 45.0,
    "potassium_mg": 78.0,
    "protein_g": 1.63,
    "salt_g": 0.0575,
    "sat_fat_g": 1.43,
    "sodium_mg": 23.0,
    "sugar_g": 0.97,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 7.8,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173547",
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
