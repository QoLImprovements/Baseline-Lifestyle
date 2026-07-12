/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "bar-1-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-169673",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "bar-1-oz",
      "kind": "unit",
      "label": "bar (1 oz)"
    }
  ],
  "name": "Snacks, crisped rice bar, almond",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 64.6,
    "energy_kcal": 1920.0,
    "fat_g": 20.4,
    "fibre_g": 3.6,
    "folate_ug": 0.0,
    "iron_mg": 6.35,
    "magnesium_mg": 71.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 167.0,
    "potassium_mg": 229.0,
    "protein_g": 7.0,
    "salt_g": 0.585,
    "sat_fat_g": 3.77,
    "sodium_mg": 234.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2640.0,
    "vitamin_c_mg": 11.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169673",
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
