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
  "id": "usda-sr-legacy-169404",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Broccoli, chinese, raw",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 4.67,
    "energy_kcal": 108.0,
    "fat_g": 0.76,
    "fibre_g": 2.6,
    "folate_ug": 104.0,
    "iron_mg": 0.59,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 274.0,
    "protein_g": 1.2,
    "salt_g": 0.0175,
    "sat_fat_g": 0.116,
    "sodium_mg": 7.0,
    "sugar_g": 0.88,
    "vitamin_a_ug": 86.0,
    "vitamin_c_mg": 29.6,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 89.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169404",
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
