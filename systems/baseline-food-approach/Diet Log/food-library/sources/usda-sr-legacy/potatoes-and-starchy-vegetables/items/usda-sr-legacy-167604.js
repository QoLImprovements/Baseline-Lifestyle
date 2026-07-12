/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup-unprepared",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-167604",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 159.0,
      "key": "cup-unprepared",
      "kind": "unit",
      "label": "cup unprepared"
    }
  ],
  "name": "Potatoes, hash brown, refrigerated, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 19.2,
    "energy_kcal": 84.0,
    "fat_g": 0.08,
    "fibre_g": 1.8,
    "folate_ug": 0.0,
    "iron_mg": 0.48,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 425.0,
    "protein_g": 1.75,
    "salt_g": 0.105,
    "sat_fat_g": 0.0,
    "sodium_mg": 42.0,
    "sugar_g": 0.91,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.9,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167604",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
