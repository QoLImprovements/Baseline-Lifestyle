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
  "id": "usda-sr-legacy-171395",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "5-fl-oz",
      "kind": "unit",
      "label": "5 fl oz"
    }
  ],
  "name": "Infant formula, ABBOTT NUTRITION, SIMILAC, GO AND GROW, ready-to-feed, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 6.69,
    "energy_kcal": 278.0,
    "fat_g": 3.54,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.31,
    "magnesium_mg": 6.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 85.0,
    "potassium_mg": 98.0,
    "protein_g": 1.97,
    "salt_g": 0.05,
    "sat_fat_g": 1.02,
    "sodium_mg": 20.0,
    "sugar_g": 6.69,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171395",
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
