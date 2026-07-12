/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-cup-without-shell-ns-as-to-form",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707518",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "1-cup-without-shell-ns-as-to-form",
      "kind": "unit",
      "label": "1 cup, without shell, NS as to form"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-peanut-without-shell",
      "kind": "unit",
      "label": "1 peanut, without shell"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 51.0,
      "key": "1-cup-in-shell-yields",
      "kind": "unit",
      "label": "1 cup, in shell, yields"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-oz-in-shell-yields",
      "kind": "unit",
      "label": "1 oz, in shell, yields"
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
      "gramsPerUnit": 28.35,
      "key": "1-oz-without-shell-ns-as-to-form",
      "kind": "unit",
      "label": "1 oz, without shell, NS as to form"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-peanut-in-shell-yields",
      "kind": "unit",
      "label": "1 peanut in shell, yields"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-nfs",
      "kind": "unit",
      "label": "1 oz, NFS"
    }
  ],
  "name": "Peanuts, dry roasted, lightly salted",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 21.2,
    "energy_kcal": 584.0,
    "fat_g": 49.4,
    "fibre_g": 8.4,
    "folate_ug": 97.0,
    "iron_mg": 1.57,
    "magnesium_mg": 177.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 361.0,
    "potassium_mg": 631.0,
    "protein_g": 24.2,
    "salt_g": 0.4975,
    "sat_fat_g": 7.68,
    "sodium_mg": 199.0,
    "sugar_g": 4.88,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.9,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707518",
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
