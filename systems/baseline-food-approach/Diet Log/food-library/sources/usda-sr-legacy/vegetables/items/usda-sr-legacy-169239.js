/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-33-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169239",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "0-33-cup",
      "kind": "unit",
      "label": "0.33 cup"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    }
  ],
  "name": "Kale, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 4.88,
    "energy_kcal": 28.0,
    "fat_g": 0.46,
    "fibre_g": 2.0,
    "folate_ug": 17.0,
    "iron_mg": 0.93,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 333.0,
    "protein_g": 2.66,
    "salt_g": 0.0375,
    "sat_fat_g": 0.059,
    "sodium_mg": 15.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 206.0,
    "vitamin_c_mg": 39.3,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 334.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169239",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
