/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "0-75-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-169862",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST, GREAT GRAINS Crunchy Pecan Cereal",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 73.0,
    "energy_kcal": 1680.0,
    "fat_g": 10.5,
    "fibre_g": 9.7,
    "folate_ug": 192.0,
    "iron_mg": 17.3,
    "magnesium_mg": 98.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 296.0,
    "potassium_mg": 337.0,
    "protein_g": 9.0,
    "salt_g": 0.7175,
    "sat_fat_g": 1.0,
    "sodium_mg": 287.0,
    "sugar_g": 15.4,
    "vitamin_a_ug": 430.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169862",
  "state": "Ready-to-eat",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "nuts-and-seeds",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
