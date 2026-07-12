/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Fried vegetables",
  "id": "usda-fndds-2709565",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Yuca fries",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 34.7,
    "energy_kcal": 269.0,
    "fat_g": 13.9,
    "fibre_g": 1.6,
    "folate_ug": 22.0,
    "iron_mg": 0.27,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 247.0,
    "protein_g": 1.24,
    "salt_g": 0.385,
    "sat_fat_g": 1.9,
    "sodium_mg": 154.0,
    "sugar_g": 1.55,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 2.77,
    "vitamin_k_ug": 15.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709565",
  "state": "Unspecified",
  "subcategory": "Fried vegetables",
  "tags": [
    "fried-vegetables",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
