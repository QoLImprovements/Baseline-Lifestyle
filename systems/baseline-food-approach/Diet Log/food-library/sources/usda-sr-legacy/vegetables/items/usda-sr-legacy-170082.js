/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tbsp",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170082",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.9,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 3.6,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    }
  ],
  "name": "Shallots, freeze-dried",
  "nutritionPerBasis": {
    "calcium_mg": 183.0,
    "carbs_g": 80.7,
    "energy_kcal": 348.0,
    "fat_g": 0.5,
    "fibre_g": 15.7,
    "folate_ug": 116.0,
    "iron_mg": 6.0,
    "magnesium_mg": 104.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 296.0,
    "potassium_mg": 1650.0,
    "protein_g": 12.3,
    "salt_g": 0.1475,
    "sat_fat_g": 0.084,
    "sodium_mg": 59.0,
    "sugar_g": 38.2,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 39.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170082",
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
