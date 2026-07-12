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
  "id": "usda-sr-legacy-170500",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Carrot, dehydrated",
  "nutritionPerBasis": {
    "calcium_mg": 212.0,
    "carbs_g": 79.6,
    "energy_kcal": 1430.0,
    "fat_g": 1.49,
    "fibre_g": 23.6,
    "folate_ug": 55.0,
    "iron_mg": 3.93,
    "magnesium_mg": 118.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 346.0,
    "potassium_mg": 2540.0,
    "protein_g": 8.1,
    "salt_g": 0.6875,
    "sat_fat_g": 0.256,
    "sodium_mg": 275.0,
    "sugar_g": 38.8,
    "vitamin_a_ug": 3420.0,
    "vitamin_c_mg": 14.6,
    "vitamin_e_mg": 5.45,
    "vitamin_k_ug": 108.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170500",
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
