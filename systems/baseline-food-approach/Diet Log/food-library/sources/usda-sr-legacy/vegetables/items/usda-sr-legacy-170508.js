/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "parsnip-9-long",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170508",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "parsnip-9-long",
      "kind": "unit",
      "label": "parsnip (9\" long)"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    }
  ],
  "name": "Parsnips, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 17.0,
    "energy_kcal": 299.0,
    "fat_g": 0.3,
    "fibre_g": 4.0,
    "folate_ug": 58.0,
    "iron_mg": 0.58,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 69.0,
    "potassium_mg": 367.0,
    "protein_g": 1.32,
    "salt_g": 0.615,
    "sat_fat_g": 0.05,
    "sodium_mg": 246.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 1.0,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170508",
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
