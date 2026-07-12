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
  "id": "usda-sr-legacy-170133",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Sweet potato leaves, cooked, steamed, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 7.38,
    "energy_kcal": 35.0,
    "fat_g": 0.34,
    "fibre_g": 1.9,
    "folate_ug": 49.0,
    "iron_mg": 0.63,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 312.0,
    "protein_g": 2.18,
    "salt_g": 0.6225,
    "sat_fat_g": 0.065,
    "sodium_mg": 249.0,
    "sugar_g": 5.48,
    "vitamin_a_ug": 147.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 109.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170133",
  "state": "Steamed",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "steamed",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
