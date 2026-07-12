/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-slice-chunk",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709214",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-slice-chunk",
      "kind": "unit",
      "label": "1 slice/chunk"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fruit, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 15.3,
    "energy_kcal": 63.0,
    "fat_g": 0.24,
    "fibre_g": 1.4,
    "folate_ug": 7.0,
    "iron_mg": 0.17,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 103.0,
    "protein_g": 0.56,
    "salt_g": 2.3925,
    "sat_fat_g": 0.032,
    "sodium_mg": 957.0,
    "sugar_g": 13.7,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709214",
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
