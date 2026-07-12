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
  "id": "usda-sr-legacy-170018",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 278.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    }
  ],
  "name": "Peas and carrots, frozen, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 10.1,
    "energy_kcal": 201.0,
    "fat_g": 0.42,
    "fibre_g": 3.1,
    "folate_ug": 26.0,
    "iron_mg": 0.94,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 158.0,
    "protein_g": 3.09,
    "salt_g": 0.17,
    "sat_fat_g": 0.077,
    "sodium_mg": 68.0,
    "sugar_g": 4.36,
    "vitamin_a_ug": 476.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 18.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170018",
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
