/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe from manufacturer",
  "id": "cofid-current-15-212",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nut cutlets, retail, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 89.0,
    "carbs_g": 19.9,
    "energy_kcal": 212.0,
    "fat_g": 13.0,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 1.4,
    "magnesium_mg": 64.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 150.0,
    "potassium_mg": 210.0,
    "protein_g": 5.1,
    "salt_g": 0.55,
    "sat_fat_g": 1.4,
    "sodium_mg": 220.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 92.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.94,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-212",
  "state": "Grilled",
  "subcategory": "DR",
  "tags": [
    "dr",
    "grilled",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
