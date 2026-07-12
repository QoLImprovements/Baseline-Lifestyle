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
  "id": "usda-foundation-2003590",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apple juice, with added vitamin C, from concentrate, shelf stable",
  "nutritionPerBasis": {
    "calcium_mg": 7.1,
    "carbs_g": 11.4,
    "energy_kcal": 48.4,
    "fat_g": 0.286,
    "fibre_g": 0.0,
    "folate_ug": 3.09,
    "iron_mg": 0.04,
    "magnesium_mg": 4.86,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.99,
    "potassium_mg": 95.9,
    "protein_g": 0.086,
    "salt_g": 0.012175,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.87,
    "sugar_g": 10.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 51.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2003590",
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
