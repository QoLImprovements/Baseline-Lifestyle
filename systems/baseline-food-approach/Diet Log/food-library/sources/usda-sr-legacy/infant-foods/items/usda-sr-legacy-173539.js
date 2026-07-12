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
  "id": "usda-sr-legacy-173539",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 104.0,
      "key": "serving-100-ml",
      "kind": "unit",
      "label": "serving 100 ml"
    },
    {
      "gramsPerUnit": 30.8,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Infant formula, MEAD JOHNSON, PREGESTIMIL, with iron, with ARA and DHA, prepared from powder",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 6.54,
    "energy_kcal": 67.0,
    "fat_g": 3.7,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 1.19,
    "magnesium_mg": 5.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 34.0,
    "potassium_mg": 73.0,
    "protein_g": 1.86,
    "salt_g": 0.0775,
    "sat_fat_g": 2.2,
    "sodium_mg": 31.0,
    "sugar_g": 0.53,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173539",
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
