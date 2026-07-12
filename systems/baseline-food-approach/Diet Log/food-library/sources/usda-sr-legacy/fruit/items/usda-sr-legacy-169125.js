/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-crushed-sliced-or-chunks",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169125",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 246.0,
      "key": "cup-crushed-sliced-or-chunks",
      "kind": "unit",
      "label": "cup, crushed, sliced, or chunks"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "slice-or-ring-3-dia-with-liquid",
      "kind": "unit",
      "label": "slice or ring (3\" dia) with liquid"
    }
  ],
  "name": "Pineapple, canned, water pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 8.3,
    "energy_kcal": 134.0,
    "fat_g": 0.09,
    "fibre_g": 0.8,
    "folate_ug": 5.0,
    "iron_mg": 0.4,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 127.0,
    "protein_g": 0.43,
    "salt_g": 0.0025,
    "sat_fat_g": 0.006,
    "sodium_mg": 1.0,
    "sugar_g": 7.5,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169125",
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
