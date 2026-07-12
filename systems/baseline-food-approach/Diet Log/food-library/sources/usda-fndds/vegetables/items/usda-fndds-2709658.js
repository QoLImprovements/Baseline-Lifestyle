/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Broccoli",
  "id": "usda-fndds-2709658",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Broccoli, Chinese, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 4.72,
    "energy_kcal": 50.0,
    "fat_g": 3.42,
    "fibre_g": 2.6,
    "folate_ug": 89.0,
    "iron_mg": 0.6,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 44.0,
    "potassium_mg": 277.0,
    "protein_g": 1.22,
    "salt_g": 0.3325,
    "sat_fat_g": 0.811,
    "sodium_mg": 133.0,
    "sugar_g": 0.89,
    "vitamin_a_ug": 94.0,
    "vitamin_c_mg": 25.4,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 92.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709658",
  "state": "Cooked",
  "subcategory": "Broccoli",
  "tags": [
    "broccoli",
    "cooked",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
