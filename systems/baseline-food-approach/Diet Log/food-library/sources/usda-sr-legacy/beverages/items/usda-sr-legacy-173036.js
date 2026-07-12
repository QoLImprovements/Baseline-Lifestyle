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
  "id": "usda-sr-legacy-173036",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Grapefruit, sections, canned, juice pack, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 9.21,
    "energy_kcal": 37.0,
    "fat_g": 0.09,
    "fibre_g": 0.4,
    "folate_ug": 9.0,
    "iron_mg": 0.21,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 169.0,
    "protein_g": 0.7,
    "salt_g": 0.0175,
    "sat_fat_g": 0.012,
    "sodium_mg": 7.0,
    "sugar_g": 8.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 33.9,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173036",
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
