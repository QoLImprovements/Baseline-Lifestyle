/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Coleslaw, non-lettuce salads",
  "id": "usda-fndds-2709814",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-single-serving-container",
      "kind": "unit",
      "label": "1 single serving container"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-fast-food-order",
      "kind": "unit",
      "label": "1 fast food order"
    }
  ],
  "name": "Coleslaw, fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 12.4,
    "energy_kcal": 159.0,
    "fat_g": 11.8,
    "fibre_g": 1.9,
    "folate_ug": 25.0,
    "iron_mg": 0.3,
    "magnesium_mg": 10.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 25.0,
    "potassium_mg": 153.0,
    "protein_g": 0.88,
    "salt_g": 0.5525,
    "sat_fat_g": 1.91,
    "sodium_mg": 221.0,
    "sugar_g": 9.54,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 13.7,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 79.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709814",
  "state": "Unspecified",
  "subcategory": "Coleslaw, non-lettuce salads",
  "tags": [
    "coleslaw-non-lettuce-salads",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
