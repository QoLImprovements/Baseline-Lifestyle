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
  "id": "usda-sr-legacy-167605",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "cup-prepared",
      "kind": "unit",
      "label": "cup prepared"
    }
  ],
  "name": "Potatoes, hash brown, refrigerated, prepared, pan-fried in canola oil",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 34.0,
    "energy_kcal": 1010.0,
    "fat_g": 10.3,
    "fibre_g": 3.6,
    "folate_ug": 0.0,
    "iron_mg": 0.74,
    "magnesium_mg": 32.0,
    "omega3_g": 0.718,
    "phosphorus_mg": 122.0,
    "potassium_mg": 704.0,
    "protein_g": 3.24,
    "salt_g": 0.1925,
    "sat_fat_g": 0.805,
    "sodium_mg": 77.0,
    "sugar_g": 1.16,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 1.68,
    "vitamin_k_ug": 19.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167605",
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
