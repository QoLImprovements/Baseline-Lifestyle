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
  "id": "usda-sr-legacy-170420",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peas, green, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 15.6,
    "energy_kcal": 84.0,
    "fat_g": 0.22,
    "fibre_g": 5.5,
    "folate_ug": 63.0,
    "iron_mg": 1.54,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 117.0,
    "potassium_mg": 271.0,
    "protein_g": 5.36,
    "salt_g": 0.0075,
    "sat_fat_g": 0.039,
    "sodium_mg": 3.0,
    "sugar_g": 5.93,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 14.2,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 25.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170420",
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
