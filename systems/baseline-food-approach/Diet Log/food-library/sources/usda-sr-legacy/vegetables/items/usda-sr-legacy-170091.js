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
  "id": "usda-sr-legacy-170091",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Seaweed, spirulina, raw",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 2.42,
    "energy_kcal": 109.0,
    "fat_g": 0.39,
    "fibre_g": 0.4,
    "folate_ug": 9.0,
    "iron_mg": 2.79,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 127.0,
    "protein_g": 5.92,
    "salt_g": 0.245,
    "sat_fat_g": 0.135,
    "sodium_mg": 98.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170091",
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
