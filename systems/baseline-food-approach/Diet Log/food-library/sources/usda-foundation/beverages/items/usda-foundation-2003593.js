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
  "id": "usda-foundation-2003593",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Grape juice, white, with added vitamin C, from concentrate, shelf stable",
  "nutritionPerBasis": {
    "calcium_mg": 7.32,
    "carbs_g": 15.8,
    "energy_kcal": 66.1,
    "fat_g": 0.265,
    "fibre_g": 0.0,
    "folate_ug": 1.73,
    "iron_mg": 0.119,
    "magnesium_mg": 4.27,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.6,
    "potassium_mg": 49.0,
    "protein_g": 0.094,
    "salt_g": 0.017975,
    "sat_fat_g": 0.0,
    "sodium_mg": 7.19,
    "sugar_g": 14.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 55.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2003593",
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
