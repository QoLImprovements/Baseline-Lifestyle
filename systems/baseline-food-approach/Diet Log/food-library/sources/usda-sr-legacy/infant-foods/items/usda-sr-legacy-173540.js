/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Infant Foods",
  "defaultMeasure": "serving-100-ml",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173540",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "serving-100-ml",
      "kind": "unit",
      "label": "Serving 100 ml"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, PROSOBEE, with iron, ready-to-feed",
  "nutritionPerBasis": {
    "calcium_mg": 69.0,
    "carbs_g": 6.11,
    "energy_kcal": 63.0,
    "fat_g": 3.5,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.18,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 79.0,
    "protein_g": 1.64,
    "salt_g": 0.0575,
    "sat_fat_g": 1.44,
    "sodium_mg": 23.0,
    "sugar_g": 6.11,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173540",
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
