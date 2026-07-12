/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup-sliced",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167767",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 162.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "spear",
      "kind": "unit",
      "label": "spear"
    },
    {
      "gramsPerUnit": 181.0,
      "key": "cup-chunks",
      "kind": "unit",
      "label": "cup, chunks"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    }
  ],
  "name": "Pineapple, canned, juice pack, drained",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 15.6,
    "energy_kcal": 252.0,
    "fat_g": 0.11,
    "fibre_g": 1.3,
    "folate_ug": 5.0,
    "iron_mg": 0.28,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 7.0,
    "potassium_mg": 124.0,
    "protein_g": 0.51,
    "salt_g": 0.0025,
    "sat_fat_g": 0.008,
    "sodium_mg": 1.0,
    "sugar_g": 14.3,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 9.4,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167767",
  "state": "Canned",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "canned",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
