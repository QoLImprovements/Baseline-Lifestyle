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
  "id": "usda-sr-legacy-170052",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Tomatoes, red, ripe, canned, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 6.19,
    "energy_kcal": 108.0,
    "fat_g": 0.19,
    "fibre_g": 1.0,
    "folate_ug": 5.0,
    "iron_mg": 1.33,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 207.0,
    "protein_g": 0.91,
    "salt_g": 0.5525,
    "sat_fat_g": 0.026,
    "sodium_mg": 221.0,
    "sugar_g": 3.52,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170052",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
