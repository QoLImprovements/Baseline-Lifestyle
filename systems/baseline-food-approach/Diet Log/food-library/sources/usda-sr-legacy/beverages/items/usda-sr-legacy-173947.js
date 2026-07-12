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
  "id": "usda-sr-legacy-173947",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Blackberry juice, canned",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 7.8,
    "energy_kcal": 38.0,
    "fat_g": 0.6,
    "fibre_g": 0.1,
    "folate_ug": 10.0,
    "iron_mg": 0.48,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 135.0,
    "protein_g": 0.3,
    "salt_g": 0.0025,
    "sat_fat_g": 0.018,
    "sodium_mg": 1.0,
    "sugar_g": 7.7,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 11.3,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 15.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173947",
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
