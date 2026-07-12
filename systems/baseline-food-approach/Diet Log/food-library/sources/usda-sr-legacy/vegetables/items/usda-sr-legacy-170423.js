/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170423",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peas, mature seeds, sprouted, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 17.1,
    "energy_kcal": 98.0,
    "fat_g": 0.51,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 1.67,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 268.0,
    "protein_g": 7.05,
    "salt_g": 0.0075,
    "sat_fat_g": 0.09,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 6.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170423",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
