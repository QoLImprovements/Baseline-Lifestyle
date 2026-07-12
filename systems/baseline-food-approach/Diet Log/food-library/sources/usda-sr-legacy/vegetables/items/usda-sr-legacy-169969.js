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
  "id": "usda-sr-legacy-169969",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Broccoli, frozen, chopped, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 5.35,
    "energy_kcal": 117.0,
    "fat_g": 0.12,
    "fibre_g": 3.0,
    "folate_ug": 56.0,
    "iron_mg": 0.61,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 142.0,
    "protein_g": 3.1,
    "salt_g": 0.0275,
    "sat_fat_g": 0.018,
    "sodium_mg": 11.0,
    "sugar_g": 1.47,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 40.1,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 88.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169969",
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
