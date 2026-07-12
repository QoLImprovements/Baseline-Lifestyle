/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup-dry-yields",
  "description": "Pasta, noodles, cooked grains",
  "id": "usda-fndds-2708439",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 690.0,
      "key": "1-cup-dry-yields",
      "kind": "unit",
      "label": "1 cup, dry, yields"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 115.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    }
  ],
  "name": "Bulgur, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 17.3,
    "energy_kcal": 121.0,
    "fat_g": 5.07,
    "fibre_g": 4.2,
    "folate_ug": 17.0,
    "iron_mg": 0.9,
    "magnesium_mg": 30.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 38.0,
    "potassium_mg": 65.0,
    "protein_g": 2.9,
    "salt_g": 0.6075,
    "sat_fat_g": 2.13,
    "sodium_mg": 243.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708439",
  "state": "Unspecified",
  "subcategory": "Pasta, noodles, cooked grains",
  "tags": [
    "grains-bread-and-pasta",
    "pasta-noodles-cooked-grains",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
