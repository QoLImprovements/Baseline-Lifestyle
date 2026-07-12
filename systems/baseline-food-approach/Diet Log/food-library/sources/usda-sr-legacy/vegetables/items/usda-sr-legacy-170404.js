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
  "id": "usda-sr-legacy-170404",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "head",
      "kind": "unit",
      "label": "head"
    }
  ],
  "name": "Chicory, witloof, raw",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 4.0,
    "energy_kcal": 71.0,
    "fat_g": 0.1,
    "fibre_g": 3.1,
    "folate_ug": 37.0,
    "iron_mg": 0.24,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 211.0,
    "protein_g": 0.9,
    "salt_g": 0.005,
    "sat_fat_g": 0.024,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170404",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
