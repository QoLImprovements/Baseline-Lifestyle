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
  "id": "usda-sr-legacy-170501",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Tomatoes, crushed, canned",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 7.29,
    "energy_kcal": 134.0,
    "fat_g": 0.28,
    "fibre_g": 1.9,
    "folate_ug": 13.0,
    "iron_mg": 1.3,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 293.0,
    "protein_g": 1.64,
    "salt_g": 0.465,
    "sat_fat_g": 0.04,
    "sodium_mg": 186.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 9.2,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170501",
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
