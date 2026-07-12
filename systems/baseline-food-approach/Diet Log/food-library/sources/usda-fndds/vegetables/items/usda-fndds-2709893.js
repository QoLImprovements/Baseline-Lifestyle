/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Cabbage",
  "id": "usda-fndds-2709893",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cabbage, red, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 6.85,
    "energy_kcal": 58.0,
    "fat_g": 2.86,
    "fibre_g": 2.1,
    "folate_ug": 15.0,
    "iron_mg": 0.0,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 272.0,
    "protein_g": 1.26,
    "salt_g": 0.345,
    "sat_fat_g": 0.715,
    "sodium_mg": 138.0,
    "sugar_g": 3.87,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 46.2,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 34.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709893",
  "state": "Cooked",
  "subcategory": "Cabbage",
  "tags": [
    "cabbage",
    "cooked",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
