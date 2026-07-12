/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "pepper",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168576",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "pepper",
      "kind": "unit",
      "label": "pepper"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    }
  ],
  "name": "Peppers, jalapeno, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 6.5,
    "energy_kcal": 119.0,
    "fat_g": 0.37,
    "fibre_g": 2.8,
    "folate_ug": 27.0,
    "iron_mg": 0.25,
    "magnesium_mg": 15.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 26.0,
    "potassium_mg": 248.0,
    "protein_g": 0.91,
    "salt_g": 0.0075,
    "sat_fat_g": 0.092,
    "sodium_mg": 3.0,
    "sugar_g": 4.12,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 119.0,
    "vitamin_e_mg": 3.58,
    "vitamin_k_ug": 18.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168576",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
