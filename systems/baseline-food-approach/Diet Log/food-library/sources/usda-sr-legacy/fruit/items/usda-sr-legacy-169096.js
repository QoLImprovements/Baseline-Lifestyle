/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "olive",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169096",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.7,
      "key": "olive",
      "kind": "unit",
      "label": "olive"
    }
  ],
  "name": "Olives, pickled, canned or bottled, green",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 3.84,
    "energy_kcal": 145.0,
    "fat_g": 15.3,
    "fibre_g": 3.3,
    "folate_ug": 3.0,
    "iron_mg": 0.49,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 42.0,
    "protein_g": 1.03,
    "salt_g": 3.9,
    "sat_fat_g": 2.03,
    "sodium_mg": 1560.0,
    "sugar_g": 0.54,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.81,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169096",
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
