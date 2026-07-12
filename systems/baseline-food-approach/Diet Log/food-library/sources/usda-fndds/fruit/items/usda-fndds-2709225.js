/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Bananas",
  "id": "usda-fndds-2709225",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-banana",
      "kind": "unit",
      "label": "1 banana"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Banana, baked",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 32.4,
    "energy_kcal": 161.0,
    "fat_g": 3.21,
    "fibre_g": 1.8,
    "folate_ug": 9.0,
    "iron_mg": 0.06,
    "magnesium_mg": 30.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 24.0,
    "potassium_mg": 322.0,
    "protein_g": 0.82,
    "salt_g": 0.0075,
    "sat_fat_g": 1.73,
    "sodium_mg": 3.0,
    "sugar_g": 24.7,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 10.4,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709225",
  "state": "Baked",
  "subcategory": "Bananas",
  "tags": [
    "baked",
    "bananas",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
