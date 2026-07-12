/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "Fruits and Fruit Juices",
  "id": "usda-foundation-2003592",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Grape juice, purple, with added vitamin C, from concentrate, shelf stable",
  "nutritionPerBasis": {
    "calcium_mg": 9.74,
    "carbs_g": 15.6,
    "energy_kcal": 66.1,
    "fat_g": 0.288,
    "fibre_g": 0.0,
    "folate_ug": 0.664,
    "iron_mg": 0.041,
    "magnesium_mg": 7.87,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 49.8,
    "protein_g": 0.258,
    "salt_g": 0.01005,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.02,
    "sugar_g": 14.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 45.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2003592",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
