/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-1-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167951",
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
  "name": "Snacks, crisped rice bar, chocolate chip",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 73.0,
    "energy_kcal": 1690.0,
    "fat_g": 13.5,
    "fibre_g": 2.2,
    "folate_ug": 140.0,
    "iron_mg": 6.3,
    "magnesium_mg": 48.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 134.0,
    "potassium_mg": 168.0,
    "protein_g": 5.1,
    "salt_g": 0.695,
    "sat_fat_g": 5.24,
    "sodium_mg": 278.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1760.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167951",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
