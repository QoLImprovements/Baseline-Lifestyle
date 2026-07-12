/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709287",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fruit salad, fresh or raw, excluding citrus fruits, no dressing",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 13.9,
    "energy_kcal": 59.0,
    "fat_g": 0.21,
    "fibre_g": 1.5,
    "folate_ug": 8.0,
    "iron_mg": 0.18,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 190.0,
    "protein_g": 0.64,
    "salt_g": 0.01,
    "sat_fat_g": 0.045,
    "sodium_mg": 4.0,
    "sugar_g": 10.4,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 19.7,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709287",
  "state": "Raw",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "condiments-and-sauces",
    "other-fruits-and-fruit-salads",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
