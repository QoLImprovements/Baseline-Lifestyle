/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708037",
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
      "gramsPerUnit": 1.6,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-crepe-with-filling-any-size",
      "kind": "unit",
      "label": "1 crepe with filling, any size"
    }
  ],
  "name": "Crepe, fruit filled",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 26.6,
    "energy_kcal": 188.0,
    "fat_g": 7.12,
    "fibre_g": 1.2,
    "folate_ug": 23.0,
    "iron_mg": 1.04,
    "magnesium_mg": 11.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 78.0,
    "potassium_mg": 117.0,
    "protein_g": 4.57,
    "salt_g": 0.44,
    "sat_fat_g": 1.78,
    "sodium_mg": 176.0,
    "sugar_g": 16.0,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 12.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708037",
  "state": "Unspecified",
  "subcategory": "Pancakes, waffles, French toast",
  "tags": [
    "fruit",
    "pancakes-waffles-french-toast",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
