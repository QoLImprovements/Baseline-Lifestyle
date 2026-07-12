/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167543",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snacks, granola bars, hard, almond",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 62.0,
    "energy_kcal": 2070.0,
    "fat_g": 25.5,
    "fibre_g": 4.8,
    "folate_ug": 12.0,
    "iron_mg": 2.5,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 228.0,
    "potassium_mg": 273.0,
    "protein_g": 7.7,
    "salt_g": 0.64,
    "sat_fat_g": 12.5,
    "sodium_mg": 256.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167543",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "nuts-and-seeds",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
