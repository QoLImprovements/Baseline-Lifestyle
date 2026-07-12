/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-slice",
  "description": "Fried vegetables",
  "id": "usda-fndds-2709725",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fried green tomatoes",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 21.8,
    "energy_kcal": 216.0,
    "fat_g": 12.8,
    "fibre_g": 1.3,
    "folate_ug": 46.0,
    "iron_mg": 1.64,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 153.0,
    "protein_g": 3.68,
    "salt_g": 0.7925,
    "sat_fat_g": 1.78,
    "sodium_mg": 317.0,
    "sugar_g": 1.58,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 6.2,
    "vitamin_e_mg": 2.57,
    "vitamin_k_ug": 16.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709725",
  "state": "Fried",
  "subcategory": "Fried vegetables",
  "tags": [
    "fried",
    "fried-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
