/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "piece-2-1-2-x-2-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170088",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "piece-2-1-2-x-2-dia",
      "kind": "unit",
      "label": "piece (2-1/2\" x 2\" dia)"
    }
  ],
  "name": "Sweet potato, cooked, candied, home-prepared",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 32.1,
    "energy_kcal": 164.0,
    "fat_g": 3.54,
    "fibre_g": 2.1,
    "folate_ug": 6.0,
    "iron_mg": 0.79,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 178.0,
    "protein_g": 0.89,
    "salt_g": 0.2975,
    "sat_fat_g": 2.17,
    "sodium_mg": 119.0,
    "sugar_g": 27.2,
    "vitamin_a_ug": 349.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170088",
  "state": "Cooked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "cooked",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
