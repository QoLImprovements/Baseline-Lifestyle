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
  "id": "usda-sr-legacy-170491",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 236.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 29.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Carrot juice, canned",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 9.28,
    "energy_kcal": 165.0,
    "fat_g": 0.15,
    "fibre_g": 0.8,
    "folate_ug": 4.0,
    "iron_mg": 0.46,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 292.0,
    "protein_g": 0.95,
    "salt_g": 0.165,
    "sat_fat_g": 0.027,
    "sodium_mg": 66.0,
    "sugar_g": 3.91,
    "vitamin_a_ug": 956.0,
    "vitamin_c_mg": 8.5,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 15.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170491",
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
