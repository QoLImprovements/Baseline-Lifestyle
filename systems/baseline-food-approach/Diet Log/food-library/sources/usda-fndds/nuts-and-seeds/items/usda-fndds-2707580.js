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
  "id": "usda-fndds-2707580",
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
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 46.0,
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
      "gramsPerUnit": 28.35,
      "key": "1-oz-without-shell",
      "kind": "unit",
      "label": "1 oz, without shell"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "1-cup-without-shell",
      "kind": "unit",
      "label": "1 cup, without shell"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-oz-in-shell-yields",
      "kind": "unit",
      "label": "1 oz, in shell, yields"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "1-cup-in-shell-yields",
      "kind": "unit",
      "label": "1 cup, in shell, yields"
    }
  ],
  "name": "Pumpkin seeds, salted",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 14.5,
    "energy_kcal": 567.0,
    "fat_g": 48.5,
    "fibre_g": 6.4,
    "folate_ug": 56.0,
    "iron_mg": 7.97,
    "magnesium_mg": 543.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1160.0,
    "potassium_mg": 779.0,
    "protein_g": 29.5,
    "salt_g": 1.1925,
    "sat_fat_g": 8.44,
    "sodium_mg": 477.0,
    "sugar_g": 1.27,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707580",
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
