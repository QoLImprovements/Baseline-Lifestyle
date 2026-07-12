/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "10-slice",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169131",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "10-slice",
      "kind": "unit",
      "label": "10 slice"
    },
    {
      "gramsPerUnit": 139.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Plantains, yellow, baked",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 41.4,
    "energy_kcal": 155.0,
    "fat_g": 0.16,
    "fibre_g": 2.2,
    "folate_ug": 53.0,
    "iron_mg": 0.28,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 477.0,
    "protein_g": 1.52,
    "salt_g": 0.005,
    "sat_fat_g": 0.0,
    "sodium_mg": 2.0,
    "sugar_g": 21.3,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 16.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 12.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169131",
  "state": "Baked",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "baked",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
