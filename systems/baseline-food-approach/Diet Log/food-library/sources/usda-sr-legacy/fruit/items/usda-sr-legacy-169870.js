/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-169870",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 59.0,
      "key": "cup-1-nlea-serving",
      "kind": "unit",
      "label": "cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST GREAT GRAINS Banana Nut Crunch",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 70.9,
    "energy_kcal": 390.0,
    "fat_g": 8.8,
    "fibre_g": 11.2,
    "folate_ug": 339.0,
    "iron_mg": 28.0,
    "magnesium_mg": 98.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 279.0,
    "potassium_mg": 349.0,
    "protein_g": 9.8,
    "salt_g": 0.595,
    "sat_fat_g": 1.1,
    "sodium_mg": 238.0,
    "sugar_g": 17.5,
    "vitamin_a_ug": 378.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 1.64,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169870",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "fruit",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
