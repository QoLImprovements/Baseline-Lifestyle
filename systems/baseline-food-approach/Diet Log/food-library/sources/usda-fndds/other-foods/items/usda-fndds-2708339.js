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
  "id": "usda-fndds-2708339",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-fast-food-order",
      "kind": "unit",
      "label": "1 fast food order"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-stick",
      "kind": "unit",
      "label": "1 stick"
    }
  ],
  "name": "French toast sticks, fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 48.5,
    "energy_kcal": 400.0,
    "fat_g": 20.9,
    "fibre_g": 1.6,
    "folate_ug": 215.0,
    "iron_mg": 2.26,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 102.0,
    "potassium_mg": 131.0,
    "protein_g": 7.06,
    "salt_g": 1.1775,
    "sat_fat_g": 4.69,
    "sodium_mg": 471.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 17.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708339",
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
