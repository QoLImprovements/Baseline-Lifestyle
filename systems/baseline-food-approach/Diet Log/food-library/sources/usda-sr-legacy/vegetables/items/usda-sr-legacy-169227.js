/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-chopped",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169227",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Dandelion greens, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 6.4,
    "energy_kcal": 33.0,
    "fat_g": 0.6,
    "fibre_g": 2.9,
    "folate_ug": 13.0,
    "iron_mg": 1.8,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 232.0,
    "protein_g": 2.0,
    "salt_g": 0.11,
    "sat_fat_g": 0.146,
    "sodium_mg": 44.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 342.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 2.44,
    "vitamin_k_ug": 551.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169227",
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
