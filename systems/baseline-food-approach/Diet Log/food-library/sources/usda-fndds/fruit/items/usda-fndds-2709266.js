/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-fruit",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709266",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-fruit",
      "kind": "unit",
      "label": "1 fruit"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Plum, canned",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 13.5,
    "energy_kcal": 55.0,
    "fat_g": 0.23,
    "fibre_g": 1.0,
    "folate_ug": 2.0,
    "iron_mg": 0.13,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 106.0,
    "protein_g": 0.52,
    "salt_g": 0.0025,
    "sat_fat_g": 0.013,
    "sodium_mg": 1.0,
    "sugar_g": 12.4,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709266",
  "state": "Canned",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "canned",
    "fruit",
    "other-fruits-and-fruit-salads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
