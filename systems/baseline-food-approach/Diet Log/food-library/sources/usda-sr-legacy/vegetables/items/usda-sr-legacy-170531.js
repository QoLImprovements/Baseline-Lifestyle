/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170531",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Spinach, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 3.75,
    "energy_kcal": 96.0,
    "fat_g": 0.26,
    "fibre_g": 2.4,
    "folate_ug": 146.0,
    "iron_mg": 3.57,
    "magnesium_mg": 87.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 56.0,
    "potassium_mg": 466.0,
    "protein_g": 2.97,
    "salt_g": 0.765,
    "sat_fat_g": 0.043,
    "sodium_mg": 306.0,
    "sugar_g": 0.43,
    "vitamin_a_ug": 524.0,
    "vitamin_c_mg": 9.8,
    "vitamin_e_mg": 2.08,
    "vitamin_k_ug": 494.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170531",
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
