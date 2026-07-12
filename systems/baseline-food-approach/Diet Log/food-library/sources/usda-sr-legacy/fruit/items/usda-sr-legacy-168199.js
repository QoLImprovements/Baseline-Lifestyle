/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168199",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 53.0,
      "key": "10-slices-1-4-thick",
      "kind": "unit",
      "label": "10 slices (1/4\" thick)"
    }
  ],
  "name": "Plantains, green, fried",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 49.2,
    "energy_kcal": 1290.0,
    "fat_g": 11.8,
    "fibre_g": 3.5,
    "folate_ug": 15.0,
    "iron_mg": 0.67,
    "magnesium_mg": 58.0,
    "omega3_g": 0.222,
    "phosphorus_mg": 44.0,
    "potassium_mg": 482.0,
    "protein_g": 1.5,
    "salt_g": 0.005,
    "sat_fat_g": 3.69,
    "sodium_mg": 2.0,
    "sugar_g": 3.63,
    "vitamin_a_ug": 60.0,
    "vitamin_c_mg": 3.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168199",
  "state": "Fried",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fried",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
