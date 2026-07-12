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
  "id": "usda-fndds-2709269",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-tamarind",
      "kind": "unit",
      "label": "1 tamarind"
    }
  ],
  "name": "Tamarind",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 62.5,
    "energy_kcal": 239.0,
    "fat_g": 0.6,
    "fibre_g": 5.1,
    "folate_ug": 14.0,
    "iron_mg": 2.8,
    "magnesium_mg": 92.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 628.0,
    "protein_g": 2.8,
    "salt_g": 0.07,
    "sat_fat_g": 0.272,
    "sodium_mg": 28.0,
    "sugar_g": 38.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709269",
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
