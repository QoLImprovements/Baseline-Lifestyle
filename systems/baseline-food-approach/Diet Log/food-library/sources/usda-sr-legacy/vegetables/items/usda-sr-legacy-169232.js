/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "gourd",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169232",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 771.0,
      "key": "gourd",
      "kind": "unit",
      "label": "gourd"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "0-5-cup-1-pieces",
      "kind": "unit",
      "label": "0.5 cup (1\" pieces)"
    }
  ],
  "name": "Gourd, white-flowered (calabash), raw",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 3.39,
    "energy_kcal": 59.0,
    "fat_g": 0.02,
    "fibre_g": 0.5,
    "folate_ug": 6.0,
    "iron_mg": 0.2,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 150.0,
    "protein_g": 0.62,
    "salt_g": 0.005,
    "sat_fat_g": 0.002,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 10.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169232",
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
