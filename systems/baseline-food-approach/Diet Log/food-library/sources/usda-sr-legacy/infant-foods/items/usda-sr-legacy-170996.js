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
  "id": "usda-sr-legacy-170996",
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
  "name": "Infant formula, GERBER, GOOD START, PROTECT PLUS, ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 7.17,
    "energy_kcal": 65.0,
    "fat_g": 3.36,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.98,
    "magnesium_mg": 5.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 25.0,
    "potassium_mg": 71.0,
    "protein_g": 1.44,
    "salt_g": 0.045,
    "sat_fat_g": 1.44,
    "sodium_mg": 18.0,
    "sugar_g": 7.17,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170996",
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
