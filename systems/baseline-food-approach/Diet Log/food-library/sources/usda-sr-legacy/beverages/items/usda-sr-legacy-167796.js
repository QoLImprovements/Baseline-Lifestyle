/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167796",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Fruit juice smoothie, NAKED JUICE, GREEN MACHINE",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 12.5,
    "energy_kcal": 223.0,
    "fat_g": 0.26,
    "fibre_g": 0.7,
    "folate_ug": 15.0,
    "iron_mg": 0.42,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 165.0,
    "protein_g": 0.6,
    "salt_g": 0.015,
    "sat_fat_g": 0.053,
    "sodium_mg": 6.0,
    "sugar_g": 11.2,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 8.2,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 21.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167796",
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
