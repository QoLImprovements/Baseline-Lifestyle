/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709233",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-cherry",
      "kind": "unit",
      "label": "1 cherry"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cherries, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 16.2,
    "energy_kcal": 71.0,
    "fat_g": 0.19,
    "fibre_g": 2.1,
    "folate_ug": 4.0,
    "iron_mg": 0.11,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 230.0,
    "protein_g": 1.04,
    "salt_g": 0.0,
    "sat_fat_g": 0.038,
    "sodium_mg": 0.0,
    "sugar_g": 13.9,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 10.4,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709233",
  "state": "Frozen",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "frozen",
    "fruit",
    "other-fruits-and-fruit-salads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
