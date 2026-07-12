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
  "id": "usda-sr-legacy-170482",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Borage, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 3.55,
    "energy_kcal": 105.0,
    "fat_g": 0.81,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 3.64,
    "magnesium_mg": 57.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 55.0,
    "potassium_mg": 491.0,
    "protein_g": 2.09,
    "salt_g": 0.22,
    "sat_fat_g": 0.197,
    "sodium_mg": 88.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 219.0,
    "vitamin_c_mg": 32.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170482",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
