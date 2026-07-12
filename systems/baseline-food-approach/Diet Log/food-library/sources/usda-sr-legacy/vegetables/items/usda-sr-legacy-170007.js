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
  "id": "usda-sr-legacy-170007",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Onions, welsh, raw",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 6.5,
    "energy_kcal": 142.0,
    "fat_g": 0.4,
    "fibre_g": 2.4,
    "folate_ug": 16.0,
    "iron_mg": 1.22,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 212.0,
    "protein_g": 1.9,
    "salt_g": 0.0425,
    "sat_fat_g": 0.067,
    "sodium_mg": 17.0,
    "sugar_g": 2.18,
    "vitamin_a_ug": 1160.0,
    "vitamin_c_mg": 27.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 193.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170007",
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
