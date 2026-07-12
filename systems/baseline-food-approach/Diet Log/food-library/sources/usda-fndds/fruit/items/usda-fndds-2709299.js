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
  "id": "usda-fndds-2709299",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 171.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fruit salad, excluding citrus fruits, with marshmallows",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 17.5,
    "energy_kcal": 251.0,
    "fat_g": 19.5,
    "fibre_g": 1.4,
    "folate_ug": 16.0,
    "iron_mg": 0.28,
    "magnesium_mg": 21.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 42.0,
    "potassium_mg": 171.0,
    "protein_g": 1.78,
    "salt_g": 0.31,
    "sat_fat_g": 2.69,
    "sodium_mg": 124.0,
    "sugar_g": 12.7,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 15.9,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 32.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709299",
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
