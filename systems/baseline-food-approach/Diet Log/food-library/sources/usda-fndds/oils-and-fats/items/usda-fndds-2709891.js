/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cabbage",
  "id": "usda-fndds-2709891",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cabbage, green, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 6.43,
    "energy_kcal": 58.0,
    "fat_g": 3.26,
    "fibre_g": 2.5,
    "folate_ug": 37.0,
    "iron_mg": 0.08,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 209.0,
    "protein_g": 0.97,
    "salt_g": 0.3325,
    "sat_fat_g": 0.439,
    "sodium_mg": 133.0,
    "sugar_g": 3.23,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 34.5,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 62.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709891",
  "state": "Cooked",
  "subcategory": "Cabbage",
  "tags": [
    "cabbage",
    "cooked",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
