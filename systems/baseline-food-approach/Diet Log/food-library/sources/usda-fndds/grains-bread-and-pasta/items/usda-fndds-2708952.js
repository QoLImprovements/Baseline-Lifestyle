/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup",
  "description": "Fried rice and lo/chow mein",
  "id": "usda-fndds-2708952",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 198.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Rice, fried, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 32.5,
    "energy_kcal": 174.0,
    "fat_g": 3.19,
    "fibre_g": 1.1,
    "folate_ug": 6.0,
    "iron_mg": 0.46,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 69.0,
    "protein_g": 3.84,
    "salt_g": 0.9025,
    "sat_fat_g": 0.493,
    "sodium_mg": 361.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708952",
  "state": "Fried",
  "subcategory": "Fried rice and lo/chow mein",
  "tags": [
    "fried",
    "fried-rice-and-lo-chow-mein",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
