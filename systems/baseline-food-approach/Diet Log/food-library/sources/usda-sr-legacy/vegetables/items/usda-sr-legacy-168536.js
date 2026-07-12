/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "10-slices-2-1-2-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168536",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 89.0,
      "key": "10-slices-2-1-2-dia",
      "kind": "unit",
      "label": "10 slices (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Lotus root, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 16.0,
    "energy_kcal": 66.0,
    "fat_g": 0.07,
    "fibre_g": 3.1,
    "folate_ug": 8.0,
    "iron_mg": 0.9,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 363.0,
    "protein_g": 1.58,
    "salt_g": 0.7025,
    "sat_fat_g": 0.021,
    "sodium_mg": 281.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 27.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168536",
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
