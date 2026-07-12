/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "4 samples, 2 brands, drained proportion = 0.54",
  "id": "cofid-old-14-056",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Blackcurrants, canned in juice, whole contents",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 7.6,
    "energy_kcal": 31.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 4.0,
    "iron_mg": 5.2,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 190.0,
    "protein_g": 0.8,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 7.6,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 37.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-056",
  "state": "Canned",
  "subcategory": "FA",
  "tags": [
    "beverages",
    "canned",
    "fa"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
