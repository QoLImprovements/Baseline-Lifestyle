/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-cup-cooked",
  "description": "Oatmeal",
  "id": "usda-fndds-2708385",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 485.0,
      "key": "1-cup-dry-yields",
      "kind": "unit",
      "label": "1 cup, dry, yields"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    }
  ],
  "name": "Oatmeal, regular or quick, made with non-dairy milk, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 14.4,
    "energy_kcal": 95.0,
    "fat_g": 2.71,
    "fibre_g": 1.8,
    "folate_ug": 8.0,
    "iron_mg": 1.0,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 101.0,
    "potassium_mg": 110.0,
    "protein_g": 3.35,
    "salt_g": 0.2925,
    "sat_fat_g": 0.346,
    "sodium_mg": 117.0,
    "sugar_g": 2.21,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.16,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708385",
  "state": "Unspecified",
  "subcategory": "Oatmeal",
  "tags": [
    "beverages",
    "oatmeal",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
