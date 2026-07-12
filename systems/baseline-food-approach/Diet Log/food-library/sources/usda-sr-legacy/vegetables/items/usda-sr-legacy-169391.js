/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup-1-pieces",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169391",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "0-5-cup-1-pieces",
      "kind": "unit",
      "label": "0.5 cup (1\" pieces)"
    }
  ],
  "name": "Cauliflower, green, cooked, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 6.28,
    "energy_kcal": 32.0,
    "fat_g": 0.31,
    "fibre_g": 3.3,
    "folate_ug": 41.0,
    "iron_mg": 0.72,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 278.0,
    "protein_g": 3.04,
    "salt_g": 0.6475,
    "sat_fat_g": 0.049,
    "sodium_mg": 259.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 72.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169391",
  "state": "Cooked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "cooked",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
