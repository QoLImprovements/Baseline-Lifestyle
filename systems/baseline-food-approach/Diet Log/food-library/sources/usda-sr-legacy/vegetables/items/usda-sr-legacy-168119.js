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
  "id": "usda-sr-legacy-168119",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 144.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Turnip greens, canned, no salt added",
  "nutritionPerBasis": {
    "calcium_mg": 118.0,
    "carbs_g": 2.81,
    "energy_kcal": 19.0,
    "fat_g": 0.3,
    "fibre_g": 1.3,
    "folate_ug": 92.0,
    "iron_mg": 1.51,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 141.0,
    "protein_g": 1.36,
    "salt_g": 0.0725,
    "sat_fat_g": 0.07,
    "sodium_mg": 29.0,
    "sugar_g": 0.42,
    "vitamin_a_ug": 298.0,
    "vitamin_c_mg": 15.5,
    "vitamin_e_mg": 1.47,
    "vitamin_k_ug": 287.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168119",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
