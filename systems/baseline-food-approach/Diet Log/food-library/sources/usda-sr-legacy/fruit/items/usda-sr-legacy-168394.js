/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "0-5-cup-1-2-pieces",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168394",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "0-5-cup-1-2-pieces",
      "kind": "unit",
      "label": "0.5 cup (1/2\" pieces)"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "cup-1-2-pieces",
      "kind": "unit",
      "label": "cup (1/2\" pieces)"
    }
  ],
  "name": "Balsam-pear (bitter gourd), pods, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 4.32,
    "energy_kcal": 19.0,
    "fat_g": 0.18,
    "fibre_g": 2.0,
    "folate_ug": 51.0,
    "iron_mg": 0.38,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 319.0,
    "protein_g": 0.84,
    "salt_g": 0.015,
    "sat_fat_g": 0.014,
    "sodium_mg": 6.0,
    "sugar_g": 1.95,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 33.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168394",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "fruit",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
