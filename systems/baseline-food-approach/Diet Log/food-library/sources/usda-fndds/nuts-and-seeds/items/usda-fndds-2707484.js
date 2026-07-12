/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-cup",
  "description": "Nuts and seeds",
  "id": "usda-fndds-2707484",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-package",
      "kind": "unit",
      "label": "1 package"
    }
  ],
  "name": "Nuts, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 20.9,
    "energy_kcal": 610.0,
    "fat_g": 53.8,
    "fibre_g": 7.4,
    "folate_ug": 75.0,
    "iron_mg": 2.76,
    "magnesium_mg": 196.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 389.0,
    "potassium_mg": 601.0,
    "protein_g": 19.6,
    "salt_g": 0.7825,
    "sat_fat_g": 7.59,
    "sodium_mg": 313.0,
    "sugar_g": 4.53,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 7.76,
    "vitamin_k_ug": 10.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707484",
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
