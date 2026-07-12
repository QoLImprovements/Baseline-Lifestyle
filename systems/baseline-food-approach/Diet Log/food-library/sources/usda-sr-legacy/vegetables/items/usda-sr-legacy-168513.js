/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168513",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "sprout",
      "kind": "unit",
      "label": "sprout"
    }
  ],
  "name": "Brussels sprouts, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 7.1,
    "energy_kcal": 150.0,
    "fat_g": 0.5,
    "fibre_g": 2.6,
    "folate_ug": 60.0,
    "iron_mg": 1.2,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 317.0,
    "protein_g": 2.55,
    "salt_g": 0.6425,
    "sat_fat_g": 0.102,
    "sodium_mg": 257.0,
    "sugar_g": 1.74,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 62.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 140.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168513",
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
