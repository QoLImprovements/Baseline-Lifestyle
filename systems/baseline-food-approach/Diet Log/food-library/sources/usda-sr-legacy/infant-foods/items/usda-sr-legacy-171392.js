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
  "id": "usda-sr-legacy-171392",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "5-fl-oz",
      "kind": "unit",
      "label": "5 fl oz"
    },
    {
      "gramsPerUnit": 30.4,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, ENFAMIL, Premature, with iron, 20 calories, ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 6.2,
    "energy_kcal": 63.0,
    "fat_g": 3.3,
    "fibre_g": 0.0,
    "folate_ug": 26.0,
    "iron_mg": 1.18,
    "magnesium_mg": 6.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 59.0,
    "potassium_mg": 64.0,
    "protein_g": 2.2,
    "salt_g": 0.115,
    "sat_fat_g": 1.51,
    "sodium_mg": 46.0,
    "sugar_g": 3.6,
    "vitamin_a_ug": 270.0,
    "vitamin_c_mg": 13.1,
    "vitamin_e_mg": 1.83,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171392",
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
