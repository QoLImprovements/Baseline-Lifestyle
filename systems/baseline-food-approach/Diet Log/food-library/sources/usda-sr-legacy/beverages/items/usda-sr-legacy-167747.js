/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "wedge-yields",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167747",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.9,
      "key": "wedge-yields",
      "kind": "unit",
      "label": "wedge yields"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "lemon-yields",
      "kind": "unit",
      "label": "lemon yields"
    },
    {
      "gramsPerUnit": 244.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 30.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Lemon juice, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 6.9,
    "energy_kcal": 91.0,
    "fat_g": 0.24,
    "fibre_g": 0.3,
    "folate_ug": 20.0,
    "iron_mg": 0.08,
    "magnesium_mg": 6.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 8.0,
    "potassium_mg": 103.0,
    "protein_g": 0.35,
    "salt_g": 0.0025,
    "sat_fat_g": 0.04,
    "sodium_mg": 1.0,
    "sugar_g": 2.52,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 38.7,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167747",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
