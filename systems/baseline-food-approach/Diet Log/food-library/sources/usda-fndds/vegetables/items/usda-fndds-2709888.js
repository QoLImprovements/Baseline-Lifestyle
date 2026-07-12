/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cabbage",
  "id": "usda-fndds-2709888",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cabbage, Chinese, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 2.2,
    "energy_kcal": 37.0,
    "fat_g": 2.85,
    "fibre_g": 1.0,
    "folate_ug": 57.0,
    "iron_mg": 0.81,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 254.0,
    "protein_g": 1.52,
    "salt_g": 0.48,
    "sat_fat_g": 0.721,
    "sodium_mg": 192.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 225.0,
    "vitamin_c_mg": 38.6,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 48.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709888",
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
