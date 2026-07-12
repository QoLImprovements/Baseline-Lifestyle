/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168519",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    }
  ],
  "name": "Carrots, frozen, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 7.73,
    "energy_kcal": 37.0,
    "fat_g": 0.68,
    "fibre_g": 3.3,
    "folate_ug": 11.0,
    "iron_mg": 0.53,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 192.0,
    "protein_g": 0.58,
    "salt_g": 0.7375,
    "sat_fat_g": 0.132,
    "sodium_mg": 295.0,
    "sugar_g": 4.08,
    "vitamin_a_ug": 846.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 13.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168519",
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
