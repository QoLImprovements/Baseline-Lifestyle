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
  "id": "usda-sr-legacy-174654",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "0-75-cup-1-nlea-serving",
      "kind": "unit",
      "label": "0.75 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, NATURE'S PATH, Organic FLAX PLUS, Pumpkin Granola",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 66.1,
    "energy_kcal": 1960.0,
    "fat_g": 18.3,
    "fibre_g": 8.4,
    "folate_ug": 15.0,
    "iron_mg": 4.04,
    "magnesium_mg": 40.0,
    "omega3_g": 1.61,
    "phosphorus_mg": 323.0,
    "potassium_mg": 291.0,
    "protein_g": 11.2,
    "salt_g": 0.185,
    "sat_fat_g": 2.8,
    "sodium_mg": 74.0,
    "sugar_g": 18.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 26.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174654",
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
