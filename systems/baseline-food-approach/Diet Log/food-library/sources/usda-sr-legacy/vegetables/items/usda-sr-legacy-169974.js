/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "root",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169974",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 156.0,
      "key": "root",
      "kind": "unit",
      "label": "root"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "cup-1-pieces",
      "kind": "unit",
      "label": "cup (1\" pieces)"
    }
  ],
  "name": "Burdock root, raw",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 17.3,
    "energy_kcal": 302.0,
    "fat_g": 0.15,
    "fibre_g": 3.3,
    "folate_ug": 23.0,
    "iron_mg": 0.8,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 308.0,
    "protein_g": 1.53,
    "salt_g": 0.0125,
    "sat_fat_g": 0.025,
    "sodium_mg": 5.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169974",
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
