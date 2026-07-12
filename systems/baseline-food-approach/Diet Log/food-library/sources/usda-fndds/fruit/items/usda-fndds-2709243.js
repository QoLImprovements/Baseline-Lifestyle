/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Mango and papaya",
  "id": "usda-fndds-2709243",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-slice-chunk",
      "kind": "unit",
      "label": "1 slice/chunk"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Mango, canned",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 16.2,
    "energy_kcal": 65.0,
    "fat_g": 0.3,
    "fibre_g": 1.2,
    "folate_ug": 19.0,
    "iron_mg": 0.12,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 114.0,
    "protein_g": 0.62,
    "salt_g": 0.0025,
    "sat_fat_g": 0.069,
    "sodium_mg": 1.0,
    "sugar_g": 15.2,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 21.8,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 3.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709243",
  "state": "Canned",
  "subcategory": "Mango and papaya",
  "tags": [
    "canned",
    "fruit",
    "mango-and-papaya"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
