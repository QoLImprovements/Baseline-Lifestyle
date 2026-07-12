/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-cup-nfs",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707582",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-without-shell",
      "kind": "unit",
      "label": "1 oz, without shell"
    },
    {
      "gramsPerUnit": 46.0,
      "key": "1-cup-in-shell-yields",
      "kind": "unit",
      "label": "1 cup, in shell, yields"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-nfs",
      "kind": "unit",
      "label": "1 oz, NFS"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-oz-in-shell-yields",
      "kind": "unit",
      "label": "1 oz, in shell, yields"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "1-cup-without-shell",
      "kind": "unit",
      "label": "1 cup, without shell"
    }
  ],
  "name": "Sunflower seeds, plain, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 24.1,
    "energy_kcal": 582.0,
    "fat_g": 49.8,
    "fibre_g": 11.1,
    "folate_ug": 237.0,
    "iron_mg": 3.8,
    "magnesium_mg": 129.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 1160.0,
    "potassium_mg": 850.0,
    "protein_g": 19.3,
    "salt_g": 0.0075,
    "sat_fat_g": 5.22,
    "sodium_mg": 3.0,
    "sugar_g": 2.73,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 26.1,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707582",
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
