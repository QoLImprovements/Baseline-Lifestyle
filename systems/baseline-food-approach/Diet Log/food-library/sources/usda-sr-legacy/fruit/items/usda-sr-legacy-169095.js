/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "super-colossal",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169095",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "super-colossal",
      "kind": "unit",
      "label": "super colossal"
    },
    {
      "gramsPerUnit": 8.3,
      "key": "jumbo",
      "kind": "unit",
      "label": "jumbo"
    }
  ],
  "name": "Olives, ripe, canned (jumbo-super colossal)",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 5.61,
    "energy_kcal": 339.0,
    "fat_g": 6.87,
    "fibre_g": 2.5,
    "folate_ug": 0.0,
    "iron_mg": 3.32,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 9.0,
    "protein_g": 0.97,
    "salt_g": 1.8375,
    "sat_fat_g": 0.909,
    "sodium_mg": 735.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 1.65,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169095",
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
