/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Apples",
  "id": "usda-fndds-2709219",
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
  "name": "Apple pie filling",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 26.1,
    "energy_kcal": 100.0,
    "fat_g": 0.1,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.29,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 45.0,
    "protein_g": 0.1,
    "salt_g": 0.1175,
    "sat_fat_g": 0.0,
    "sodium_mg": 47.0,
    "sugar_g": 13.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709219",
  "state": "Unspecified",
  "subcategory": "Apples",
  "tags": [
    "apples",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
