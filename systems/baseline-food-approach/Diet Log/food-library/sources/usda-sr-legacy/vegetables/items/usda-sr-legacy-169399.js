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
  "id": "usda-sr-legacy-169399",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "plant",
      "kind": "unit",
      "label": "plant"
    }
  ],
  "name": "Fireweed, leaves, raw",
  "nutritionPerBasis": {
    "calcium_mg": 429.0,
    "carbs_g": 19.2,
    "energy_kcal": 431.0,
    "fat_g": 2.75,
    "fibre_g": 10.6,
    "folate_ug": 112.0,
    "iron_mg": 2.4,
    "magnesium_mg": 156.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 494.0,
    "protein_g": 4.71,
    "salt_g": 0.085,
    "sat_fat_g": 0.0,
    "sodium_mg": 34.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 180.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169399",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
