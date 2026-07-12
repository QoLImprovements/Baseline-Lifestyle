/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pudding",
  "id": "usda-fndds-2705693",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    }
  ],
  "name": "Pudding, flavors other than chocolate, ready-to-eat, sugar free",
  "nutritionPerBasis": {
    "calcium_mg": 126.0,
    "carbs_g": 9.53,
    "energy_kcal": 70.0,
    "fat_g": 2.07,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.02,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 236.0,
    "potassium_mg": 149.0,
    "protein_g": 3.18,
    "salt_g": 0.6425,
    "sat_fat_g": 1.18,
    "sodium_mg": 257.0,
    "sugar_g": 4.65,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705693",
  "state": "Ready-to-eat",
  "subcategory": "Pudding",
  "tags": [
    "pudding",
    "ready-to-eat",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
