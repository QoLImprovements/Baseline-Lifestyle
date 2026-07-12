/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "Calculated using weight loss of 14.6%",
  "id": "cofid-current-11-982",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bread, wholemeal, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 49.2,
    "energy_kcal": 255.0,
    "fat_g": 2.9,
    "fibre_g": 8.2,
    "folate_ug": 46.0,
    "iron_mg": 2.81,
    "magnesium_mg": 77.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 237.0,
    "potassium_mg": 296.0,
    "protein_g": 11.2,
    "salt_g": 1.175,
    "sat_fat_g": 0.54,
    "sodium_mg": 470.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-982",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
