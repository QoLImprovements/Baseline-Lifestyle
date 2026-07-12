/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soy & Plant Proteins",
  "defaultMeasure": "oz",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172451",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Tofu, fried",
  "nutritionPerBasis": {
    "calcium_mg": 372.0,
    "carbs_g": 8.86,
    "energy_kcal": 270.0,
    "fat_g": 20.2,
    "fibre_g": 3.9,
    "folate_ug": 27.0,
    "iron_mg": 4.87,
    "magnesium_mg": 60.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 287.0,
    "potassium_mg": 146.0,
    "protein_g": 18.8,
    "salt_g": 0.04,
    "sat_fat_g": 2.92,
    "sodium_mg": 16.0,
    "sugar_g": 2.72,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172451",
  "state": "Fried",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "fried",
    "legumes-and-legume-products",
    "soy-and-plant-proteins"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
