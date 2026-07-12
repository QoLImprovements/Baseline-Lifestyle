/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-slice-nfs",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708332",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-slice-nfs",
      "kind": "unit",
      "label": "1 slice, NFS"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-bite-size",
      "kind": "unit",
      "label": "1 bite size"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "French toast, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 139.0,
    "carbs_g": 29.9,
    "energy_kcal": 183.0,
    "fat_g": 3.82,
    "fibre_g": 1.1,
    "folate_ug": 53.0,
    "iron_mg": 1.86,
    "magnesium_mg": 18.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 108.0,
    "potassium_mg": 115.0,
    "protein_g": 7.24,
    "salt_g": 0.6075,
    "sat_fat_g": 1.2,
    "sodium_mg": 243.0,
    "sugar_g": 9.01,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708332",
  "state": "Frozen",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "frozen",
    "other-foods",
    "pancakes-waffles-french-toast"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
