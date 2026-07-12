/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "0-5-cup",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172476",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "0-25-block",
      "kind": "unit",
      "label": "0.25 block"
    }
  ],
  "name": "Tofu, raw, regular, prepared with calcium sulfate",
  "nutritionPerBasis": {
    "calcium_mg": 350.0,
    "carbs_g": 1.87,
    "energy_kcal": 317.0,
    "fat_g": 4.78,
    "fibre_g": 0.3,
    "folate_ug": 15.0,
    "iron_mg": 5.36,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 121.0,
    "protein_g": 8.08,
    "salt_g": 0.0175,
    "sat_fat_g": 0.691,
    "sodium_mg": 7.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172476",
  "state": "Raw",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "raw",
    "soy-and-plant-proteins"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
