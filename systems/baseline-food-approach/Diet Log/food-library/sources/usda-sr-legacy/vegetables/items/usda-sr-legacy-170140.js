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
  "id": "usda-sr-legacy-170140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Turnip greens, frozen, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 152.0,
    "carbs_g": 4.98,
    "energy_kcal": 29.0,
    "fat_g": 0.42,
    "fibre_g": 3.4,
    "folate_ug": 39.0,
    "iron_mg": 1.94,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 224.0,
    "protein_g": 3.35,
    "salt_g": 0.6275,
    "sat_fat_g": 0.099,
    "sodium_mg": 251.0,
    "sugar_g": 0.75,
    "vitamin_a_ug": 538.0,
    "vitamin_c_mg": 21.8,
    "vitamin_e_mg": 2.66,
    "vitamin_k_ug": 519.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170140",
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
