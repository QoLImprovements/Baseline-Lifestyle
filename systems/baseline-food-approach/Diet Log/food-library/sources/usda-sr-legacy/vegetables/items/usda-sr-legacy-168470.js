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
  "id": "usda-sr-legacy-168470",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 223.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Squash, summer, zucchini, includes skin, frozen, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 3.56,
    "energy_kcal": 71.0,
    "fat_g": 0.13,
    "fibre_g": 1.3,
    "folate_ug": 8.0,
    "iron_mg": 0.48,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 194.0,
    "protein_g": 1.15,
    "salt_g": 0.005,
    "sat_fat_g": 0.027,
    "sodium_mg": 2.0,
    "sugar_g": 1.69,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 3.7,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168470",
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
