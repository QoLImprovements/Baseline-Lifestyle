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
  "id": "usda-fndds-2708324",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-waffle-any-size",
      "kind": "unit",
      "label": "1 waffle, any size"
    },
    {
      "gramsPerUnit": 3.7,
      "key": "1-surface-inch-belgian-waffle",
      "kind": "unit",
      "label": "1 surface inch, Belgian waffle"
    }
  ],
  "name": "Waffle, school",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 49.2,
    "energy_kcal": 257.0,
    "fat_g": 3.57,
    "fibre_g": 4.3,
    "folate_ug": 57.0,
    "iron_mg": 6.43,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 286.0,
    "potassium_mg": 164.0,
    "protein_g": 7.14,
    "salt_g": 1.3925,
    "sat_fat_g": 0.714,
    "sodium_mg": 557.0,
    "sugar_g": 4.29,
    "vitamin_a_ug": 155.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708324",
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
