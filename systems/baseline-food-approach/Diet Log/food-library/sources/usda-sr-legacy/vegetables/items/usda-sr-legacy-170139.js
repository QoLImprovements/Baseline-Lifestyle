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
  "id": "usda-sr-legacy-170139",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Turnip greens, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 137.0,
    "carbs_g": 4.36,
    "energy_kcal": 20.0,
    "fat_g": 0.23,
    "fibre_g": 3.5,
    "folate_ug": 118.0,
    "iron_mg": 0.8,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 203.0,
    "protein_g": 1.14,
    "salt_g": 0.6625,
    "sat_fat_g": 0.053,
    "sodium_mg": 265.0,
    "sugar_g": 0.53,
    "vitamin_a_ug": 381.0,
    "vitamin_c_mg": 27.4,
    "vitamin_e_mg": 1.88,
    "vitamin_k_ug": 368.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170139",
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
