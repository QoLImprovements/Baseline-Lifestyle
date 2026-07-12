/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-slice-any-size",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708331",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "French toast, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 32.3,
    "energy_kcal": 273.0,
    "fat_g": 11.4,
    "fibre_g": 1.2,
    "folate_ug": 70.0,
    "iron_mg": 2.39,
    "magnesium_mg": 20.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 148.0,
    "potassium_mg": 135.0,
    "protein_g": 10.4,
    "salt_g": 0.755,
    "sat_fat_g": 3.25,
    "sodium_mg": 302.0,
    "sugar_g": 10.1,
    "vitamin_a_ug": 106.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708331",
  "state": "Unspecified",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "other-foods",
    "pancakes-waffles-french-toast",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
