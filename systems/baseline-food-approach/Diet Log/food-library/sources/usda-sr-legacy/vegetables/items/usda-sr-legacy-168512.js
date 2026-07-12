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
  "id": "usda-sr-legacy-168512",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Broccoli, frozen, spears, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 5.35,
    "energy_kcal": 117.0,
    "fat_g": 0.11,
    "fibre_g": 3.0,
    "folate_ug": 30.0,
    "iron_mg": 0.61,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 180.0,
    "protein_g": 3.1,
    "salt_g": 0.65,
    "sat_fat_g": 0.018,
    "sodium_mg": 260.0,
    "sugar_g": 1.44,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 40.1,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 99.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168512",
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
