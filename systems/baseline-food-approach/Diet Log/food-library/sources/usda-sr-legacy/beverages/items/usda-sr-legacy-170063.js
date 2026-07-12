/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170063",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 253.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "6-fl-oz",
      "kind": "unit",
      "label": "6 fl oz"
    }
  ],
  "name": "Vegetable juice cocktail, canned",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 3.87,
    "energy_kcal": 22.0,
    "fat_g": 0.31,
    "fibre_g": 0.5,
    "folate_ug": 21.0,
    "iron_mg": 0.28,
    "magnesium_mg": 11.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 19.0,
    "potassium_mg": 185.0,
    "protein_g": 0.93,
    "salt_g": 0.4225,
    "sat_fat_g": 0.088,
    "sodium_mg": 169.0,
    "sugar_g": 2.84,
    "vitamin_a_ug": 35.0,
    "vitamin_c_mg": 54.3,
    "vitamin_e_mg": 1.02,
    "vitamin_k_ug": 6.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170063",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "beverages",
    "canned",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
