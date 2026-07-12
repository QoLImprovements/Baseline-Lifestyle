/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "3-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169763",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    }
  ],
  "name": "Potatoes, yellow fleshed, roasted, salt added in processing, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 23.4,
    "energy_kcal": 119.0,
    "fat_g": 1.85,
    "fibre_g": 2.6,
    "folate_ug": 0.0,
    "iron_mg": 0.45,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 444.0,
    "protein_g": 1.99,
    "salt_g": 0.845,
    "sat_fat_g": 0.153,
    "sodium_mg": 338.0,
    "sugar_g": 0.31,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169763",
  "state": "Roasted",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "roasted",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
