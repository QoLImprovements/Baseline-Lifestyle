/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170037",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Potatoes, mashed, home-prepared, whole milk and margarine added",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 16.9,
    "energy_kcal": 113.0,
    "fat_g": 4.2,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 0.26,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 326.0,
    "protein_g": 1.96,
    "salt_g": 0.8325,
    "sat_fat_g": 0.745,
    "sodium_mg": 333.0,
    "sugar_g": 1.41,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 10.5,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170037",
  "state": "Mashed",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "mashed",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
