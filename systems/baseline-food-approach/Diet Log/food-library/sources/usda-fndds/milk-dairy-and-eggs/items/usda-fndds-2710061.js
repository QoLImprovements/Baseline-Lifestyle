/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Vegetable dishes",
  "id": "usda-fndds-2710061",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 217.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Squash, summer, casserole, with cheese sauce",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 9.28,
    "energy_kcal": 92.0,
    "fat_g": 4.71,
    "fibre_g": 1.2,
    "folate_ug": 26.0,
    "iron_mg": 0.77,
    "magnesium_mg": 23.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 81.0,
    "potassium_mg": 249.0,
    "protein_g": 3.69,
    "salt_g": 0.43,
    "sat_fat_g": 2.38,
    "sodium_mg": 172.0,
    "sugar_g": 2.84,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 13.9,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710061",
  "state": "Unspecified",
  "subcategory": "Vegetable dishes",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "vegetable-dishes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
