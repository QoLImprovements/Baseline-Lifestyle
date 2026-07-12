/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-crepe-any-size",
  "description": "Pancakes, waffles, French toast",
  "id": "usda-fndds-2708342",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-crepe-any-size",
      "kind": "unit",
      "label": "1 crepe, any size"
    },
    {
      "gramsPerUnit": 1.3,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Crepe, plain",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 22.0,
    "energy_kcal": 224.0,
    "fat_g": 11.3,
    "fibre_g": 0.6,
    "folate_ug": 43.0,
    "iron_mg": 1.87,
    "magnesium_mg": 17.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 150.0,
    "potassium_mg": 169.0,
    "protein_g": 8.85,
    "salt_g": 0.695,
    "sat_fat_g": 3.44,
    "sodium_mg": 278.0,
    "sugar_g": 4.48,
    "vitamin_a_ug": 98.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708342",
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
