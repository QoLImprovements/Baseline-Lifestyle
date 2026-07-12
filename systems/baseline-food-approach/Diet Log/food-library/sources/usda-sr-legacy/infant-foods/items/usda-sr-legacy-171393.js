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
  "id": "usda-sr-legacy-171393",
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
  "name": "Infant formula, MEAD JOHNSON, ENFAMIL, Premature, with iron, 24 calories, ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 8.88,
    "energy_kcal": 339.0,
    "fat_g": 3.9,
    "fibre_g": 0.0,
    "folate_ug": 31.0,
    "iron_mg": 1.4,
    "magnesium_mg": 7.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 70.0,
    "potassium_mg": 76.0,
    "protein_g": 2.6,
    "salt_g": 0.1375,
    "sat_fat_g": 1.8,
    "sodium_mg": 55.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 248.0,
    "vitamin_c_mg": 15.6,
    "vitamin_e_mg": 1.86,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171393",
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
