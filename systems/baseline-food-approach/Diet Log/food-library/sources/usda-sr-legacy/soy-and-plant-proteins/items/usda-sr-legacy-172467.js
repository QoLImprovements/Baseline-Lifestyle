/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "g",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172467",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tempeh, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 96.0,
    "carbs_g": 7.62,
    "energy_kcal": 817.0,
    "fat_g": 11.4,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 2.13,
    "magnesium_mg": 77.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 253.0,
    "potassium_mg": 401.0,
    "protein_g": 19.9,
    "salt_g": 0.035,
    "sat_fat_g": 3.4,
    "sodium_mg": 14.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172467",
  "state": "Cooked",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "cooked",
    "legumes-and-legume-products",
    "soy-and-plant-proteins"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
