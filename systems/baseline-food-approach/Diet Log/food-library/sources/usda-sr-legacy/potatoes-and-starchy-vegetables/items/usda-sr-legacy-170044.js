/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup-prepared",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170044",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup-prepared",
      "kind": "unit",
      "label": "cup prepared"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "package-yield-12-oz",
      "kind": "unit",
      "label": "package yield, 12 oz"
    },
    {
      "gramsPerUnit": 29.0,
      "key": "patty-oval-approx-3-x-1-1-2-x-1-2",
      "kind": "unit",
      "label": "patty, oval (approx 3\" x 1-1/2\" x 1/2\")"
    }
  ],
  "name": "Potatoes, hash brown, frozen, plain, prepared, pan fried in canola oil",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 28.5,
    "energy_kcal": 917.0,
    "fat_g": 11.6,
    "fibre_g": 3.2,
    "folate_ug": 16.0,
    "iron_mg": 0.54,
    "magnesium_mg": 28.0,
    "omega3_g": 0.369,
    "phosphorus_mg": 79.0,
    "potassium_mg": 496.0,
    "protein_g": 2.65,
    "salt_g": 0.0375,
    "sat_fat_g": 0.934,
    "sodium_mg": 15.0,
    "sugar_g": 0.27,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 6.7,
    "vitamin_e_mg": 2.19,
    "vitamin_k_ug": 18.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170044",
  "state": "Fried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fried",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
