/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-169039",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, frosted oat cereal with marshmallows",
  "nutritionPerBasis": {
    "calcium_mg": 333.0,
    "carbs_g": 84.7,
    "energy_kcal": 1670.0,
    "fat_g": 3.33,
    "fibre_g": 4.3,
    "folate_ug": 353.0,
    "iron_mg": 15.0,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 141.0,
    "potassium_mg": 207.0,
    "protein_g": 7.1,
    "salt_g": 1.3325,
    "sat_fat_g": 0.62,
    "sodium_mg": 533.0,
    "sugar_g": 36.1,
    "vitamin_a_ug": 500.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169039",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "grains-bread-and-pasta",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
