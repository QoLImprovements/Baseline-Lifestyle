/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-miniature-bite-size-pancake",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708303",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-miniature-bite-size-pancake",
      "kind": "unit",
      "label": "1 miniature/bite size pancake"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1.9,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-pancake-any-size",
      "kind": "unit",
      "label": "1 pancake, any size"
    }
  ],
  "name": "Pancakes, school",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 40.4,
    "energy_kcal": 231.0,
    "fat_g": 6.57,
    "fibre_g": 5.2,
    "folate_ug": 72.0,
    "iron_mg": 6.16,
    "magnesium_mg": 74.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 295.0,
    "potassium_mg": 199.0,
    "protein_g": 6.26,
    "salt_g": 1.0375,
    "sat_fat_g": 1.11,
    "sodium_mg": 415.0,
    "sugar_g": 7.53,
    "vitamin_a_ug": 408.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708303",
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
