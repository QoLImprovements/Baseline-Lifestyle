/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-cup-without-shell",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707528",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "1-cup-without-shell",
      "kind": "unit",
      "label": "1 cup, without shell"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "1-cup-in-shell-yields",
      "kind": "unit",
      "label": "1 cup, in shell, yields"
    },
    {
      "gramsPerUnit": 0.5,
      "key": "1-nut",
      "kind": "unit",
      "label": "1 nut"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-nfs",
      "kind": "unit",
      "label": "1 oz, NFS"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-oz-in-shell-yields",
      "kind": "unit",
      "label": "1 oz, in shell, yields"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-without-shell",
      "kind": "unit",
      "label": "1 oz, without shell"
    }
  ],
  "name": "Pistachio nuts, salted",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 27.2,
    "energy_kcal": 576.0,
    "fat_g": 47.0,
    "fibre_g": 9.9,
    "folate_ug": 49.0,
    "iron_mg": 3.88,
    "magnesium_mg": 105.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 450.0,
    "potassium_mg": 967.0,
    "protein_g": 20.2,
    "salt_g": 0.9725,
    "sat_fat_g": 5.82,
    "sodium_mg": 389.0,
    "sugar_g": 7.43,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 2.65,
    "vitamin_k_ug": 15.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707528",
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
