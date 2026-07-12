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
  "id": "usda-sr-legacy-172305",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 106.0,
      "key": "serving-100-ml",
      "kind": "unit",
      "label": "serving 100 ml"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, ENFAMIL, LIPIL, low iron, ready to feed, with ARA and DHA",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 7.18,
    "energy_kcal": 64.0,
    "fat_g": 3.5,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.46,
    "magnesium_mg": 5.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 35.0,
    "potassium_mg": 71.0,
    "protein_g": 1.38,
    "salt_g": 0.045,
    "sat_fat_g": 1.45,
    "sodium_mg": 18.0,
    "sugar_g": 7.18,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172305",
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
