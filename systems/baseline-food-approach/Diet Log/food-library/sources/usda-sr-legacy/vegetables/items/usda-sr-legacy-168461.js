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
  "id": "usda-sr-legacy-168461",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Soybeans, mature seeds, sprouted, cooked, stir-fried",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 9.4,
    "energy_kcal": 523.0,
    "fat_g": 7.1,
    "fibre_g": 0.8,
    "folate_ug": 127.0,
    "iron_mg": 0.4,
    "magnesium_mg": 96.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 216.0,
    "potassium_mg": 567.0,
    "protein_g": 13.1,
    "salt_g": 0.035,
    "sat_fat_g": 0.985,
    "sodium_mg": 14.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168461",
  "state": "Fried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fried",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
