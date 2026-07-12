/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "4-mushrooms",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168436",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "4-mushrooms",
      "kind": "unit",
      "label": "4 mushrooms"
    },
    {
      "gramsPerUnit": 3.6,
      "key": "mushroom",
      "kind": "unit",
      "label": "mushroom"
    }
  ],
  "name": "Mushrooms, shiitake, dried",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 75.4,
    "energy_kcal": 1240.0,
    "fat_g": 0.99,
    "fibre_g": 11.5,
    "folate_ug": 163.0,
    "iron_mg": 1.72,
    "magnesium_mg": 132.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 294.0,
    "potassium_mg": 1530.0,
    "protein_g": 9.58,
    "salt_g": 0.0325,
    "sat_fat_g": 0.225,
    "sodium_mg": 13.0,
    "sugar_g": 2.21,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168436",
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
