/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "quantity-not-specified",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707527",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 0.5,
      "key": "1-nut",
      "kind": "unit",
      "label": "1 nut"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-nfs",
      "kind": "unit",
      "label": "1 oz, NFS"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-cup-without-shell",
      "kind": "unit",
      "label": "1 cup, without shell"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-without-shell",
      "kind": "unit",
      "label": "1 oz, without shell"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-oz-in-shell-yields",
      "kind": "unit",
      "label": "1 oz, in shell, yields"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "1-cup-in-shell-yields",
      "kind": "unit",
      "label": "1 cup, in shell, yields"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    }
  ],
  "name": "Pistachio nuts, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 28.3,
    "energy_kcal": 572.0,
    "fat_g": 45.8,
    "fibre_g": 10.3,
    "folate_ug": 51.0,
    "iron_mg": 4.03,
    "magnesium_mg": 109.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 469.0,
    "potassium_mg": 1010.0,
    "protein_g": 21.0,
    "salt_g": 0.015,
    "sat_fat_g": 5.64,
    "sodium_mg": 6.0,
    "sugar_g": 7.74,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 2.17,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707527",
  "state": "Unspecified",
  "subcategory": "Nuts and seeds",
  "tags": [
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
