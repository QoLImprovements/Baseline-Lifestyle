/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Coleslaw, non-lettuce salads",
  "id": "usda-fndds-2709815",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "guideline-amount-per-sandwich",
      "kind": "unit",
      "label": "Guideline amount per sandwich"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-single-serving-container",
      "kind": "unit",
      "label": "1 single serving container"
    }
  ],
  "name": "Coleslaw",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 10.4,
    "energy_kcal": 117.0,
    "fat_g": 7.98,
    "fibre_g": 1.9,
    "folate_ug": 33.0,
    "iron_mg": 0.14,
    "magnesium_mg": 11.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 32.0,
    "potassium_mg": 172.0,
    "protein_g": 0.94,
    "salt_g": 0.7,
    "sat_fat_g": 1.23,
    "sodium_mg": 280.0,
    "sugar_g": 7.44,
    "vitamin_a_ug": 79.0,
    "vitamin_c_mg": 26.9,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 54.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709815",
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
