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
  "id": "usda-sr-legacy-167714",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Hearts of palm, raw",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 25.6,
    "energy_kcal": 481.0,
    "fat_g": 0.2,
    "fibre_g": 1.5,
    "folate_ug": 24.0,
    "iron_mg": 1.69,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 1810.0,
    "protein_g": 2.7,
    "salt_g": 0.035,
    "sat_fat_g": 0.046,
    "sodium_mg": 14.0,
    "sugar_g": 17.2,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167714",
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
