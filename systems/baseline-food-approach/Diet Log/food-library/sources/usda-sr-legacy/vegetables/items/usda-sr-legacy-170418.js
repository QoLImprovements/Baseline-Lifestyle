/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170418",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 253.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    }
  ],
  "name": "Peas, edible-podded, frozen, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 9.02,
    "energy_kcal": 52.0,
    "fat_g": 0.38,
    "fibre_g": 3.1,
    "folate_ug": 35.0,
    "iron_mg": 2.4,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 217.0,
    "protein_g": 3.5,
    "salt_g": 0.0125,
    "sat_fat_g": 0.073,
    "sodium_mg": 5.0,
    "sugar_g": 4.82,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 22.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 30.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170418",
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
