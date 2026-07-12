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
  "id": "usda-sr-legacy-171397",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.4,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "5-fl-oz",
      "kind": "unit",
      "label": "5 fl oz"
    }
  ],
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, For Spit Up, ready-to-feed, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 7.19,
    "energy_kcal": 274.0,
    "fat_g": 3.54,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.18,
    "magnesium_mg": 4.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 37.0,
    "potassium_mg": 70.0,
    "protein_g": 1.4,
    "salt_g": 0.05,
    "sat_fat_g": 2.3,
    "sodium_mg": 20.0,
    "sugar_g": 7.19,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 5.9,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171397",
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
