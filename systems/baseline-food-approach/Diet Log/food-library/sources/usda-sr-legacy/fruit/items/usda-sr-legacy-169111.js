/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-halves-or-slices",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169111",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 251.0,
      "key": "cup-halves-or-slices",
      "kind": "unit",
      "label": "cup, halves or slices"
    },
    {
      "gramsPerUnit": 98.0,
      "key": "half-with-liquid",
      "kind": "unit",
      "label": "half, with liquid"
    }
  ],
  "name": "Peaches, canned, light syrup pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 14.6,
    "energy_kcal": 226.0,
    "fat_g": 0.03,
    "fibre_g": 1.3,
    "folate_ug": 3.0,
    "iron_mg": 0.36,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 97.0,
    "protein_g": 0.45,
    "salt_g": 0.0125,
    "sat_fat_g": 0.003,
    "sodium_mg": 5.0,
    "sugar_g": 13.2,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169111",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "canned",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
