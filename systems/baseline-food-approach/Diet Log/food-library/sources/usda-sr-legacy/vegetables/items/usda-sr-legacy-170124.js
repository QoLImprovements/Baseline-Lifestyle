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
  "id": "usda-sr-legacy-170124",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    }
  ],
  "name": "Spinach, frozen, chopped or leaf, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 153.0,
    "carbs_g": 4.8,
    "energy_kcal": 143.0,
    "fat_g": 0.87,
    "fibre_g": 3.7,
    "folate_ug": 121.0,
    "iron_mg": 1.96,
    "magnesium_mg": 82.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 302.0,
    "protein_g": 4.01,
    "salt_g": 0.805,
    "sat_fat_g": 0.036,
    "sodium_mg": 322.0,
    "sugar_g": 0.51,
    "vitamin_a_ug": 603.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 3.54,
    "vitamin_k_ug": 541.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170124",
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
