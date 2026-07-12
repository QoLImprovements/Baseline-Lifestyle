/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "quantity-not-specified",
  "description": "Grits and other cooked cereals",
  "id": "usda-fndds-2708360",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    }
  ],
  "name": "Cereal, cooked, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 11.4,
    "energy_kcal": 64.0,
    "fat_g": 1.09,
    "fibre_g": 1.7,
    "folate_ug": 4.0,
    "iron_mg": 0.68,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 58.0,
    "protein_g": 2.21,
    "salt_g": 0.175,
    "sat_fat_g": 0.186,
    "sodium_mg": 70.0,
    "sugar_g": 0.17,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708360",
  "state": "Cooked",
  "subcategory": "Grits and other cooked cereals",
  "tags": [
    "cooked",
    "grains-bread-and-pasta",
    "grits-and-other-cooked-cereals"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
