/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-bar",
  "description": "Cereal bars",
  "id": "usda-fndds-2708114",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Breakfast bar, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 72.8,
    "energy_kcal": 376.0,
    "fat_g": 7.5,
    "fibre_g": 2.1,
    "folate_ug": 108.0,
    "iron_mg": 4.86,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 197.0,
    "protein_g": 4.4,
    "salt_g": 0.8425,
    "sat_fat_g": 1.5,
    "sodium_mg": 337.0,
    "sugar_g": 35.1,
    "vitamin_a_ug": 608.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 13.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708114",
  "state": "Unspecified",
  "subcategory": "Cereal bars",
  "tags": [
    "cereal-bars",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
