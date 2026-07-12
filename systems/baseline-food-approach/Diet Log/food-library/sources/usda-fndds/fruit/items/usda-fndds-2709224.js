/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup-mashed",
  "description": "Bananas",
  "id": "usda-fndds-2709224",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "1-banana",
      "kind": "unit",
      "label": "1 banana"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-linear-inch",
      "kind": "unit",
      "label": "1 linear inch"
    }
  ],
  "name": "Banana, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 22.7,
    "energy_kcal": 97.0,
    "fat_g": 0.28,
    "fibre_g": 1.7,
    "folate_ug": 15.0,
    "iron_mg": 0.0,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 326.0,
    "protein_g": 0.74,
    "salt_g": 0.0,
    "sat_fat_g": 0.112,
    "sodium_mg": 0.0,
    "sugar_g": 15.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709224",
  "state": "Raw",
  "subcategory": "Bananas",
  "tags": [
    "bananas",
    "fruit",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
