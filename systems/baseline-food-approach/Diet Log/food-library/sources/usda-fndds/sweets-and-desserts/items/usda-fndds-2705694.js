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
  "id": "usda-fndds-2705694",
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
  "name": "Pudding, chocolate, ready-to-eat",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 23.0,
    "energy_kcal": 142.0,
    "fat_g": 4.6,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.27,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 184.0,
    "protein_g": 2.09,
    "salt_g": 0.38,
    "sat_fat_g": 1.26,
    "sodium_mg": 152.0,
    "sugar_g": 17.2,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705694",
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
