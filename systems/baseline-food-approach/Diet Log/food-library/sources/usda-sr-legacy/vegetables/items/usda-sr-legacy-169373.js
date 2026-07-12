/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-25-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169373",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.6,
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
  "name": "Peppers, sweet, red, freeze-dried",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 68.7,
    "energy_kcal": 314.0,
    "fat_g": 3.0,
    "fibre_g": 21.3,
    "folate_ug": 229.0,
    "iron_mg": 10.4,
    "magnesium_mg": 188.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 327.0,
    "potassium_mg": 3170.0,
    "protein_g": 17.9,
    "salt_g": 0.4825,
    "sat_fat_g": 0.447,
    "sodium_mg": 193.0,
    "sugar_g": 40.8,
    "vitamin_a_ug": 3860.0,
    "vitamin_c_mg": 1900.0,
    "vitamin_e_mg": 4.0,
    "vitamin_k_ug": 114.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169373",
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
