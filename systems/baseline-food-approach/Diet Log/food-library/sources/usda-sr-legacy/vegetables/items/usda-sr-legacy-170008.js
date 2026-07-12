/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "nlea-serving",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170008",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 331.0,
      "key": "onion",
      "kind": "unit",
      "label": "onion"
    }
  ],
  "name": "Onions, sweet, raw",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 7.55,
    "energy_kcal": 32.0,
    "fat_g": 0.08,
    "fibre_g": 0.9,
    "folate_ug": 23.0,
    "iron_mg": 0.26,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 119.0,
    "protein_g": 0.8,
    "salt_g": 0.02,
    "sat_fat_g": 0.0,
    "sodium_mg": 8.0,
    "sugar_g": 5.02,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170008",
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
