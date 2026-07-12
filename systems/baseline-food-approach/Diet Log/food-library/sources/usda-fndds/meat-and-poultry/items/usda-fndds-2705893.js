/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Pork",
  "id": "usda-fndds-2705893",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-rib-yield-after-cooking-bone-removed",
      "kind": "unit",
      "label": "1 rib (yield after cooking, bone removed)"
    }
  ],
  "name": "Ribs, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 12.1,
    "energy_kcal": 254.0,
    "fat_g": 15.0,
    "fibre_g": 0.3,
    "folate_ug": 1.0,
    "iron_mg": 0.91,
    "magnesium_mg": 16.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 124.0,
    "potassium_mg": 244.0,
    "protein_g": 16.5,
    "salt_g": 1.685,
    "sat_fat_g": 5.44,
    "sodium_mg": 674.0,
    "sugar_g": 9.89,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705893",
  "state": "Unspecified",
  "subcategory": "Pork",
  "tags": [
    "meat-and-poultry",
    "pork",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
