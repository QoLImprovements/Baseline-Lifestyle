/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "0-33-package-10-oz-yields",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169959",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "0-33-package-10-oz-yields",
      "kind": "unit",
      "label": "0.33 package (10 oz) yields"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    }
  ],
  "name": "Beans, pinto, immature seeds, frozen, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 30.9,
    "energy_kcal": 162.0,
    "fat_g": 0.48,
    "fibre_g": 5.4,
    "folate_ug": 34.0,
    "iron_mg": 2.71,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 100.0,
    "potassium_mg": 646.0,
    "protein_g": 9.31,
    "salt_g": 0.2075,
    "sat_fat_g": 0.058,
    "sodium_mg": 83.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169959",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "legumes-and-pulses",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
