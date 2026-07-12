/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-200",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lentil and nut roast, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 18.8,
    "energy_kcal": 222.0,
    "fat_g": 12.1,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 2.6,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 180.0,
    "potassium_mg": 370.0,
    "protein_g": 10.6,
    "salt_g": 0.65,
    "sat_fat_g": 1.8,
    "sodium_mg": 260.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.66,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-200",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
