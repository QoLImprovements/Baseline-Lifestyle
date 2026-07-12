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
  "id": "usda-sr-legacy-172475",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "0-25-block",
      "kind": "unit",
      "label": "0.25 block"
    }
  ],
  "name": "Tofu, raw, firm, prepared with calcium sulfate",
  "nutritionPerBasis": {
    "calcium_mg": 683.0,
    "carbs_g": 2.78,
    "energy_kcal": 144.0,
    "fat_g": 8.72,
    "fibre_g": 2.3,
    "folate_ug": 29.0,
    "iron_mg": 2.66,
    "magnesium_mg": 58.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 237.0,
    "protein_g": 17.3,
    "salt_g": 0.035,
    "sat_fat_g": 1.26,
    "sodium_mg": 14.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 166.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172475",
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
