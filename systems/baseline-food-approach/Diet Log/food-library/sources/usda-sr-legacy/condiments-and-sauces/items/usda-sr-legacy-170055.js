/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170055",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Tomato products, canned, sauce, with mushrooms",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 8.43,
    "energy_kcal": 35.0,
    "fat_g": 0.13,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 0.89,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 380.0,
    "protein_g": 1.45,
    "salt_g": 1.13,
    "sat_fat_g": 0.017,
    "sodium_mg": 452.0,
    "sugar_g": 5.77,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 12.4,
    "vitamin_e_mg": 1.92,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170055",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "condiments-and-sauces",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
