/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2710062",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Squash, summer, souffle",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 6.87,
    "energy_kcal": 125.0,
    "fat_g": 8.94,
    "fibre_g": 0.7,
    "folate_ug": 24.0,
    "iron_mg": 0.79,
    "magnesium_mg": 18.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 95.0,
    "potassium_mg": 218.0,
    "protein_g": 4.65,
    "salt_g": 0.58,
    "sat_fat_g": 4.45,
    "sodium_mg": 232.0,
    "sugar_g": 3.16,
    "vitamin_a_ug": 114.0,
    "vitamin_c_mg": 6.6,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710062",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "unspecified",
    "vegetable-dishes",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
