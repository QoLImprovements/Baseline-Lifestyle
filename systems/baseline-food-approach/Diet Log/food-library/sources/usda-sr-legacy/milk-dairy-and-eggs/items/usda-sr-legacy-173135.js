/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-173135",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snacks, M&M MARS, KUDOS Whole Grain Bar, M&M's milk chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 943.0,
    "carbs_g": 73.0,
    "energy_kcal": 1740.0,
    "fat_g": 12.0,
    "fibre_g": 2.4,
    "folate_ug": 0.0,
    "iron_mg": 0.85,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 3.78,
    "salt_g": 0.8525,
    "sat_fat_g": 6.8,
    "sodium_mg": 341.0,
    "sugar_g": 37.8,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173135",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "milk-dairy-and-eggs",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
