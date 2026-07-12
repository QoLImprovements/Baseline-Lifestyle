/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-sunbelt-bar",
  "description": "Cereal bars",
  "id": "usda-fndds-2708102",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-sunbelt-bar",
      "kind": "unit",
      "label": "1 Sunbelt bar"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    }
  ],
  "name": "Cereal or granola bar, lowfat, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 333.0,
    "carbs_g": 79.2,
    "energy_kcal": 408.0,
    "fat_g": 8.33,
    "fibre_g": 4.2,
    "folate_ug": 17.0,
    "iron_mg": 1.5,
    "magnesium_mg": 71.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 152.0,
    "potassium_mg": 224.0,
    "protein_g": 4.17,
    "salt_g": 0.7825,
    "sat_fat_g": 2.08,
    "sodium_mg": 313.0,
    "sugar_g": 29.2,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 2.23,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708102",
  "state": "Unspecified",
  "subcategory": "Cereal bars",
  "tags": [
    "cereal-bars",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
