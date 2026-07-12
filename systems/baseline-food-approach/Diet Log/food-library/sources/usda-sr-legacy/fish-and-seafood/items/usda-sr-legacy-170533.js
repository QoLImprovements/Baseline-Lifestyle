/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "0-5-cup-mashed",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170533",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "0-5-cup-mashed",
      "kind": "unit",
      "label": "0.5 cup, mashed"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    }
  ],
  "name": "Squash, summer, scallop, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 3.3,
    "energy_kcal": 67.0,
    "fat_g": 0.17,
    "fibre_g": 1.9,
    "folate_ug": 21.0,
    "iron_mg": 0.33,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 140.0,
    "protein_g": 1.03,
    "salt_g": 0.5925,
    "sat_fat_g": 0.035,
    "sodium_mg": 237.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 10.8,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170533",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "fish-and-seafood",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
