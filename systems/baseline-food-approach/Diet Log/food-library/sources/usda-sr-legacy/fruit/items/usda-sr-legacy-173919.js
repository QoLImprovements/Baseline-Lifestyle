/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-25-cup-1-nlea-serving",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-173919",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-25-cup-1-nlea-serving",
      "kind": "unit",
      "label": "1.25 cup (1 NLEA serving)"
    }
  ],
  "name": "Cereals ready-to-eat, POST SELECTS Blueberry Morning",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 81.6,
    "energy_kcal": 1650.0,
    "fat_g": 5.3,
    "fibre_g": 4.7,
    "folate_ug": 182.0,
    "iron_mg": 3.3,
    "magnesium_mg": 57.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 162.0,
    "potassium_mg": 195.0,
    "protein_g": 6.5,
    "salt_g": 0.8525,
    "sat_fat_g": 0.6,
    "sodium_mg": 341.0,
    "sugar_g": 29.2,
    "vitamin_a_ug": 400.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.56,
    "vitamin_k_ug": 12.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173919",
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
