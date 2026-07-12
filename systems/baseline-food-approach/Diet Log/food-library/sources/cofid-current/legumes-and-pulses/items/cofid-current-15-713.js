/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe from dietary survey records. Mixed beans and vegetables",
  "id": "cofid-current-15-713",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Casserole, bean and root vegetable, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 8.4,
    "energy_kcal": 48.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 41.0,
    "iron_mg": 0.75,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 260.0,
    "protein_g": 3.0,
    "salt_g": 0.085,
    "sat_fat_g": 0.08,
    "sodium_mg": 34.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 185.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 2.67
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-713",
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
