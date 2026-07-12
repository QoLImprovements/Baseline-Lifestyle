/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709240",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-lychee",
      "kind": "unit",
      "label": "1 lychee"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lychee",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 16.5,
    "energy_kcal": 66.0,
    "fat_g": 0.44,
    "fibre_g": 1.3,
    "folate_ug": 14.0,
    "iron_mg": 0.31,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 171.0,
    "protein_g": 0.83,
    "salt_g": 0.0025,
    "sat_fat_g": 0.099,
    "sodium_mg": 1.0,
    "sugar_g": 15.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 71.5,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709240",
  "state": "Unspecified",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "fruit",
    "other-fruits-and-fruit-salads",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
