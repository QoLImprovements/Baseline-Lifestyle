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
  "id": "usda-fndds-2709818",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cucumber and vegetable namasu",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 12.2,
    "energy_kcal": 56.0,
    "fat_g": 0.18,
    "fibre_g": 0.6,
    "folate_ug": 8.0,
    "iron_mg": 0.03,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 131.0,
    "protein_g": 0.47,
    "salt_g": 0.3,
    "sat_fat_g": 0.026,
    "sodium_mg": 120.0,
    "sugar_g": 10.8,
    "vitamin_a_ug": 98.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 14.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709818",
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
