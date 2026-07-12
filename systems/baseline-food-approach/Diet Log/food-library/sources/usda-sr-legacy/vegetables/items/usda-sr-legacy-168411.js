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
  "id": "usda-sr-legacy-168411",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Edamame, frozen, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 8.91,
    "energy_kcal": 121.0,
    "fat_g": 5.2,
    "fibre_g": 5.2,
    "folate_ug": 311.0,
    "iron_mg": 2.27,
    "magnesium_mg": 64.0,
    "omega3_g": 0.361,
    "phosphorus_mg": 169.0,
    "potassium_mg": 436.0,
    "protein_g": 11.9,
    "salt_g": 0.015,
    "sat_fat_g": 0.62,
    "sodium_mg": 6.0,
    "sugar_g": 2.18,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 6.1,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 26.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168411",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
