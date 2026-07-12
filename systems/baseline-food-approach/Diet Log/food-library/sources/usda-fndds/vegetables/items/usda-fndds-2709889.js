/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Cabbage",
  "id": "usda-fndds-2709889",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cabbage, green, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 6.63,
    "energy_kcal": 32.0,
    "fat_g": 0.24,
    "fibre_g": 2.6,
    "folate_ug": 38.0,
    "iron_mg": 0.07,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 215.0,
    "protein_g": 1.0,
    "salt_g": 0.3425,
    "sat_fat_g": 0.035,
    "sodium_mg": 137.0,
    "sugar_g": 3.32,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 35.6,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 61.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709889",
  "state": "Cooked",
  "subcategory": "Cabbage",
  "tags": [
    "cabbage",
    "cooked",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
