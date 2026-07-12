/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-1-2-pieces",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168393",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "cup-1-2-pieces",
      "kind": "unit",
      "label": "cup (1/2\" pieces)"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "balsam-pear",
      "kind": "unit",
      "label": "balsam-pear"
    }
  ],
  "name": "Balsam-pear (bitter gourd), pods, raw",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 3.7,
    "energy_kcal": 71.0,
    "fat_g": 0.17,
    "fibre_g": 2.8,
    "folate_ug": 72.0,
    "iron_mg": 0.43,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 31.0,
    "potassium_mg": 296.0,
    "protein_g": 1.0,
    "salt_g": 0.0125,
    "sat_fat_g": 0.0,
    "sodium_mg": 5.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 84.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168393",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fruit",
    "raw",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
