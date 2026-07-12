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
  "id": "usda-fndds-2709890",
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
  "name": "Cabbage, green, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 6.44,
    "energy_kcal": 55.0,
    "fat_g": 2.88,
    "fibre_g": 2.5,
    "folate_ug": 37.0,
    "iron_mg": 0.07,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 209.0,
    "protein_g": 0.98,
    "salt_g": 0.355,
    "sat_fat_g": 0.728,
    "sodium_mg": 142.0,
    "sugar_g": 3.23,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 34.5,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 62.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709890",
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
