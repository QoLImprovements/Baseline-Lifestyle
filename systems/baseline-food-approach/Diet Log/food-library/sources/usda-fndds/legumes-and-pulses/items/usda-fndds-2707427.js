/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707427",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Dal",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 19.2,
    "energy_kcal": 145.0,
    "fat_g": 4.31,
    "fibre_g": 7.5,
    "folate_ug": 172.0,
    "iron_mg": 3.17,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 172.0,
    "potassium_mg": 352.0,
    "protein_g": 8.6,
    "salt_g": 0.7725,
    "sat_fat_g": 2.51,
    "sodium_mg": 309.0,
    "sugar_g": 1.71,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707427",
  "state": "Unspecified",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
