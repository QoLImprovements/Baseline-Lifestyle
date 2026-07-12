/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "piece",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172450",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Tofu, dried-frozen (koyadofu)",
  "nutritionPerBasis": {
    "calcium_mg": 364.0,
    "carbs_g": 10.0,
    "energy_kcal": 2000.0,
    "fat_g": 30.3,
    "fibre_g": 7.2,
    "folate_ug": 92.0,
    "iron_mg": 9.73,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 483.0,
    "potassium_mg": 20.0,
    "protein_g": 52.5,
    "salt_g": 0.015,
    "sat_fat_g": 4.39,
    "sodium_mg": 6.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172450",
  "state": "Dried",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "dried",
    "legumes-and-legume-products",
    "soy-and-plant-proteins"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
