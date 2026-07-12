/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "package-10-oz-yields",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170472",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Vegetables, mixed, frozen, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 13.1,
    "energy_kcal": 273.0,
    "fat_g": 0.15,
    "fibre_g": 4.4,
    "folate_ug": 19.0,
    "iron_mg": 0.82,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 169.0,
    "protein_g": 2.86,
    "salt_g": 0.0875,
    "sat_fat_g": 0.031,
    "sodium_mg": 35.0,
    "sugar_g": 3.12,
    "vitamin_a_ug": 214.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 23.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170472",
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
