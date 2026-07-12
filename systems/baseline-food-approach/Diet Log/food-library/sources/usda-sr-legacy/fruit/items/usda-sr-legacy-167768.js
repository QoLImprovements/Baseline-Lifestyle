/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-halves",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167768",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 219.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "cup-whole",
      "kind": "unit",
      "label": "cup, whole"
    }
  ],
  "name": "Apricots, canned, heavy syrup, drained",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 21.3,
    "energy_kcal": 83.0,
    "fat_g": 0.11,
    "fibre_g": 2.7,
    "folate_ug": 2.0,
    "iron_mg": 0.3,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 143.0,
    "protein_g": 0.64,
    "salt_g": 0.01,
    "sat_fat_g": 0.007,
    "sodium_mg": 4.0,
    "sugar_g": 18.6,
    "vitamin_a_ug": 146.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167768",
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
