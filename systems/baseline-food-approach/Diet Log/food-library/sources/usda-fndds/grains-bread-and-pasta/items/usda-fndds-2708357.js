/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup-cooked",
  "description": "Pasta, noodles, cooked grains",
  "id": "usda-fndds-2708357",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pasta, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 30.7,
    "energy_kcal": 157.0,
    "fat_g": 0.92,
    "fibre_g": 1.8,
    "folate_ug": 73.0,
    "iron_mg": 1.27,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 44.0,
    "protein_g": 5.76,
    "salt_g": 0.58,
    "sat_fat_g": 0.175,
    "sodium_mg": 232.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708357",
  "state": "Cooked",
  "subcategory": "Pasta, noodles, cooked grains",
  "tags": [
    "cooked",
    "grains-bread-and-pasta",
    "pasta-noodles-cooked-grains"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
