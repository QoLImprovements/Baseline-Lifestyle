/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-mashed",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169294",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup-mashed",
      "kind": "unit",
      "label": "cup, mashed"
    }
  ],
  "name": "Squash, winter, acorn, cooked, boiled, mashed, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 8.79,
    "energy_kcal": 34.0,
    "fat_g": 0.08,
    "fibre_g": 2.6,
    "folate_ug": 11.0,
    "iron_mg": 0.56,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 263.0,
    "protein_g": 0.67,
    "salt_g": 0.0075,
    "sat_fat_g": 0.017,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 6.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169294",
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
