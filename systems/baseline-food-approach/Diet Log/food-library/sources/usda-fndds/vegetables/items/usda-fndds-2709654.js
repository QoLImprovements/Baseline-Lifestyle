/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2709654",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 228.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Broccoli casserole with noodles",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 15.9,
    "energy_kcal": 112.0,
    "fat_g": 3.77,
    "fibre_g": 1.9,
    "folate_ug": 53.0,
    "iron_mg": 1.07,
    "magnesium_mg": 20.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 71.0,
    "potassium_mg": 191.0,
    "protein_g": 3.55,
    "salt_g": 0.465,
    "sat_fat_g": 1.73,
    "sodium_mg": 186.0,
    "sugar_g": 1.34,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 42.1,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 55.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709654",
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
