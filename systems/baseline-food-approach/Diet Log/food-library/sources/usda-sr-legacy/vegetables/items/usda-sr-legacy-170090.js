/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170090",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Seaweed, agar, dried",
  "nutritionPerBasis": {
    "calcium_mg": 625.0,
    "carbs_g": 80.9,
    "energy_kcal": 1280.0,
    "fat_g": 0.3,
    "fibre_g": 7.7,
    "folate_ug": 580.0,
    "iron_mg": 21.4,
    "magnesium_mg": 770.0,
    "omega3_g": 0.087,
    "phosphorus_mg": 52.0,
    "potassium_mg": 1120.0,
    "protein_g": 6.21,
    "salt_g": 0.255,
    "sat_fat_g": 0.061,
    "sodium_mg": 102.0,
    "sugar_g": 2.97,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.0,
    "vitamin_k_ug": 24.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170090",
  "state": "Dried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "dried",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
