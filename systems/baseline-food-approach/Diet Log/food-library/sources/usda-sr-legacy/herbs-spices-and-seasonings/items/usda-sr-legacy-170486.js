/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "0-25-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170486",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.4,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    },
    {
      "gramsPerUnit": 0.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Parsley, freeze-dried",
  "nutritionPerBasis": {
    "calcium_mg": 176.0,
    "carbs_g": 42.4,
    "energy_kcal": 271.0,
    "fat_g": 5.2,
    "fibre_g": 32.7,
    "folate_ug": 194.0,
    "iron_mg": 53.9,
    "magnesium_mg": 372.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 548.0,
    "potassium_mg": 6300.0,
    "protein_g": 31.3,
    "salt_g": 0.9775,
    "sat_fat_g": 0.0,
    "sodium_mg": 391.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 63200.0,
    "vitamin_c_mg": 149.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170486",
  "state": "Dried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "dried",
    "herbs-spices-and-seasonings",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
