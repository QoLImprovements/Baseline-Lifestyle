/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "container",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169768",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 700.0,
      "key": "container",
      "kind": "unit",
      "label": "container"
    },
    {
      "gramsPerUnit": 229.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Potatoes, mashed, ready-to-eat",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 13.3,
    "energy_kcal": 106.0,
    "fat_g": 5.01,
    "fibre_g": 1.9,
    "folate_ug": 6.0,
    "iron_mg": 0.27,
    "magnesium_mg": 14.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 61.0,
    "potassium_mg": 274.0,
    "protein_g": 1.97,
    "salt_g": 0.745,
    "sat_fat_g": 2.63,
    "sodium_mg": 298.0,
    "sugar_g": 1.76,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169768",
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
