/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "piece",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169927",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Papaya, canned, heavy syrup, drained",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 55.8,
    "energy_kcal": 862.0,
    "fat_g": 0.55,
    "fibre_g": 1.5,
    "folate_ug": 0.0,
    "iron_mg": 0.29,
    "magnesium_mg": 6.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 6.0,
    "potassium_mg": 67.0,
    "protein_g": 0.14,
    "salt_g": 0.0225,
    "sat_fat_g": 0.268,
    "sodium_mg": 9.0,
    "sugar_g": 52.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169927",
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
