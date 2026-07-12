/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170534",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "0-5-cup-slices",
      "kind": "unit",
      "label": "0.5 cup slices"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "0-5-cup-mashed",
      "kind": "unit",
      "label": "0.5 cup, mashed"
    }
  ],
  "name": "Squash, summer, zucchini, includes skin, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 2.69,
    "energy_kcal": 64.0,
    "fat_g": 0.36,
    "fibre_g": 1.0,
    "folate_ug": 28.0,
    "iron_mg": 0.37,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 264.0,
    "protein_g": 1.14,
    "salt_g": 0.5975,
    "sat_fat_g": 0.072,
    "sodium_mg": 239.0,
    "sugar_g": 1.71,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 12.9,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170534",
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
