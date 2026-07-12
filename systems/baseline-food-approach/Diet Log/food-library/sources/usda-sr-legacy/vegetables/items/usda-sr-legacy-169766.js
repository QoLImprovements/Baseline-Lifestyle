/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-25-cup-drained",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169766",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "0-25-cup-drained",
      "kind": "unit",
      "label": "0.25 cup drained"
    }
  ],
  "name": "Peppers, hot pickled, canned",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 4.56,
    "energy_kcal": 22.0,
    "fat_g": 0.4,
    "fibre_g": 2.6,
    "folate_ug": 13.0,
    "iron_mg": 0.32,
    "magnesium_mg": 6.0,
    "omega3_g": 0.03,
    "phosphorus_mg": 13.0,
    "potassium_mg": 113.0,
    "protein_g": 0.8,
    "salt_g": 3.575,
    "sat_fat_g": 0.061,
    "sodium_mg": 1430.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 12.3,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 21.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169766",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
