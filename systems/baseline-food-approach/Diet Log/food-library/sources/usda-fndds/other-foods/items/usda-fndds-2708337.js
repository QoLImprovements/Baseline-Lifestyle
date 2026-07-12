/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708337",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    }
  ],
  "name": "French toast, gluten free",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 30.6,
    "energy_kcal": 264.0,
    "fat_g": 12.2,
    "fibre_g": 2.2,
    "folate_ug": 38.0,
    "iron_mg": 2.02,
    "magnesium_mg": 12.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 117.0,
    "potassium_mg": 114.0,
    "protein_g": 7.79,
    "salt_g": 0.75,
    "sat_fat_g": 3.33,
    "sodium_mg": 300.0,
    "sugar_g": 9.17,
    "vitamin_a_ug": 106.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.51,
    "vitamin_k_ug": 4.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708337",
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
