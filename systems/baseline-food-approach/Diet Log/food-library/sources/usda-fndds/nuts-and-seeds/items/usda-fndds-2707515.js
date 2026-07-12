/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-oz-nfs",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707515",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-nfs",
      "kind": "unit",
      "label": "1 oz, NFS"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "1-cup-without-shell-ns-as-to-form",
      "kind": "unit",
      "label": "1 cup, without shell, NS as to form"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "1-cup-in-shell-yields",
      "kind": "unit",
      "label": "1 cup, in shell, yields"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-peanut-nfs",
      "kind": "unit",
      "label": "1 peanut, NFS"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-peanut-in-shell-yields",
      "kind": "unit",
      "label": "1 peanut in shell, yields"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-without-shell-ns-as-to-form",
      "kind": "unit",
      "label": "1 oz, without shell, NS as to form"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-peanut-without-shell",
      "kind": "unit",
      "label": "1 peanut, without shell"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-oz-in-shell-yields",
      "kind": "unit",
      "label": "1 oz, in shell, yields"
    }
  ],
  "name": "Peanuts, roasted, salted",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 15.3,
    "energy_kcal": 599.0,
    "fat_g": 52.5,
    "fibre_g": 9.4,
    "folate_ug": 120.0,
    "iron_mg": 1.52,
    "magnesium_mg": 176.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 397.0,
    "potassium_mg": 726.0,
    "protein_g": 28.0,
    "salt_g": 0.8,
    "sat_fat_g": 8.66,
    "sodium_mg": 320.0,
    "sugar_g": 4.18,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 6.94,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707515",
  "state": "Roasted",
  "subcategory": "Nuts and seeds",
  "tags": [
    "nuts-and-seeds",
    "roasted"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
