/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169767",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 269.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Vegetable juice, BOLTHOUSE FARMS, DAILY GREENS",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 8.13,
    "energy_kcal": 128.0,
    "fat_g": 0.04,
    "fibre_g": 1.9,
    "folate_ug": 63.0,
    "iron_mg": 3.85,
    "magnesium_mg": 11.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 90.0,
    "potassium_mg": 224.0,
    "protein_g": 0.49,
    "salt_g": 0.0375,
    "sat_fat_g": 0.015,
    "sodium_mg": 15.0,
    "sugar_g": 5.37,
    "vitamin_a_ug": 602.0,
    "vitamin_c_mg": 10.1,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 106.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169767",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "beverages",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
