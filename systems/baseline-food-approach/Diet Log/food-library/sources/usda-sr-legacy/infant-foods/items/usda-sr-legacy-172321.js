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
  "id": "usda-sr-legacy-172321",
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
      "label": "serving 100 ml"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, ENFAMIL, AR, ready-to-feed, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 8.73,
    "energy_kcal": 71.0,
    "fat_g": 3.3,
    "fibre_g": 0.4,
    "folate_ug": 11.0,
    "iron_mg": 1.18,
    "magnesium_mg": 5.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 35.0,
    "potassium_mg": 71.0,
    "protein_g": 1.64,
    "salt_g": 0.065,
    "sat_fat_g": 1.38,
    "sodium_mg": 26.0,
    "sugar_g": 6.44,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 5.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172321",
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
