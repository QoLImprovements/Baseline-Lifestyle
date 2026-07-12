/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "1-cup",
  "description": "Seafood mixed dishes",
  "id": "usda-fndds-2706858",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 112.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Tuna casserole with vegetables and mushroom sauce, no noodles",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 8.39,
    "energy_kcal": 115.0,
    "fat_g": 5.12,
    "fibre_g": 0.9,
    "folate_ug": 13.0,
    "iron_mg": 1.0,
    "magnesium_mg": 16.0,
    "omega3_g": 0.084,
    "phosphorus_mg": 97.0,
    "potassium_mg": 188.0,
    "protein_g": 9.04,
    "salt_g": 0.91,
    "sat_fat_g": 1.98,
    "sodium_mg": 364.0,
    "sugar_g": 1.81,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706858",
  "state": "Unspecified",
  "subcategory": "Seafood mixed dishes",
  "tags": [
    "fungi",
    "seafood-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
