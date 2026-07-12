/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709974",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Green peas, canned, reduced sodium, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 11.8,
    "energy_kcal": 97.0,
    "fat_g": 4.0,
    "fibre_g": 4.0,
    "folate_ug": 33.0,
    "iron_mg": 1.24,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 121.0,
    "protein_g": 3.87,
    "salt_g": 0.0275,
    "sat_fat_g": 0.552,
    "sodium_mg": 11.0,
    "sugar_g": 3.88,
    "vitamin_a_ug": 87.0,
    "vitamin_c_mg": 10.7,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 23.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709974",
  "state": "Canned",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "canned",
    "oils-and-fats",
    "other-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
