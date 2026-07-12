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
  "id": "usda-fndds-2708333",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    }
  ],
  "name": "French toast, fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 152.0,
    "carbs_g": 35.7,
    "energy_kcal": 310.0,
    "fat_g": 14.3,
    "fibre_g": 1.3,
    "folate_ug": 72.0,
    "iron_mg": 2.49,
    "magnesium_mg": 21.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 137.0,
    "potassium_mg": 128.0,
    "protein_g": 9.84,
    "salt_g": 0.8925,
    "sat_fat_g": 4.75,
    "sodium_mg": 357.0,
    "sugar_g": 10.1,
    "vitamin_a_ug": 132.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.52,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708333",
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
