/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Lettuce and lettuce salads",
  "id": "usda-fndds-2709949",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 86.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lettuce, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 4.21,
    "energy_kcal": 49.0,
    "fat_g": 3.11,
    "fibre_g": 1.5,
    "folate_ug": 33.0,
    "iron_mg": 0.29,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 284.0,
    "protein_g": 1.06,
    "salt_g": 0.4225,
    "sat_fat_g": 0.813,
    "sodium_mg": 169.0,
    "sugar_g": 1.26,
    "vitamin_a_ug": 340.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 0.64,
    "vitamin_k_ug": 86.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709949",
  "state": "Cooked",
  "subcategory": "Lettuce and lettuce salads",
  "tags": [
    "cooked",
    "lettuce-and-lettuce-salads",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
