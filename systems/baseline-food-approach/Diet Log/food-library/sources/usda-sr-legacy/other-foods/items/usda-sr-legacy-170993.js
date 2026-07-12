/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "fl-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170993",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 29.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Toddler formula, MEAD JOHNSON, ENFAGROW PREMIUM (formerly ENFAMIL, LIPIL, NEXT STEP), ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 133.0,
    "carbs_g": 7.18,
    "energy_kcal": 268.0,
    "fat_g": 3.63,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.37,
    "magnesium_mg": 5.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 89.0,
    "potassium_mg": 89.0,
    "protein_g": 1.78,
    "salt_g": 0.0625,
    "sat_fat_g": 1.55,
    "sodium_mg": 25.0,
    "sugar_g": 7.18,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 8.2,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 5.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170993",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
