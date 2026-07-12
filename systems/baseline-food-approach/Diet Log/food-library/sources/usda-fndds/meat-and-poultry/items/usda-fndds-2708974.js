/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup-nfs",
  "description": "Soups, broth-based",
  "id": "usda-fndds-2708974",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 263.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 329.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "1-cup-with-bone-yield-after-bone-removed",
      "kind": "unit",
      "label": "1 cup, with bone (yield after bone removed)"
    },
    {
      "gramsPerUnit": 263.0,
      "key": "1-cup-boneless",
      "kind": "unit",
      "label": "1 cup, boneless"
    }
  ],
  "name": "Soupy rice with chicken, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 16.5,
    "energy_kcal": 151.0,
    "fat_g": 4.04,
    "fibre_g": 1.4,
    "folate_ug": 38.0,
    "iron_mg": 1.35,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 123.0,
    "potassium_mg": 191.0,
    "protein_g": 12.1,
    "salt_g": 1.885,
    "sat_fat_g": 0.926,
    "sodium_mg": 754.0,
    "sugar_g": 1.17,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 6.9,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708974",
  "state": "Unspecified",
  "subcategory": "Soups, broth-based",
  "tags": [
    "meat-and-poultry",
    "soups-broth-based",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
