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
  "id": "usda-fndds-2705688",
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
    }
  ],
  "name": "Pudding, flavors other than chocolate, made from dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 19.4,
    "energy_kcal": 106.0,
    "fat_g": 1.89,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.0,
    "magnesium_mg": 10.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 202.0,
    "potassium_mg": 132.0,
    "protein_g": 2.78,
    "salt_g": 0.66,
    "sat_fat_g": 1.11,
    "sodium_mg": 264.0,
    "sugar_g": 19.4,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705688",
  "state": "Unspecified",
  "subcategory": "Pudding",
  "tags": [
    "pudding",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
