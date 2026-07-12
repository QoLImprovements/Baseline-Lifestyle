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
  "id": "usda-fndds-2710067",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Vegetable curry",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 8.81,
    "energy_kcal": 86.0,
    "fat_g": 5.27,
    "fibre_g": 1.8,
    "folate_ug": 19.0,
    "iron_mg": 0.68,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 286.0,
    "protein_g": 1.6,
    "salt_g": 0.97,
    "sat_fat_g": 1.26,
    "sodium_mg": 388.0,
    "sugar_g": 3.18,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 12.3,
    "vitamin_e_mg": 1.41,
    "vitamin_k_ug": 10.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710067",
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
