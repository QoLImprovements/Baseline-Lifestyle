/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "As raw, steamed for 3-9 minutes, Calabrese",
  "id": "cofid-current-13-504",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Broccoli, green, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 3.5,
    "energy_kcal": 34.0,
    "fat_g": 0.5,
    "fibre_g": 3.8,
    "folate_ug": 72.0,
    "iron_mg": 0.75,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 373.0,
    "protein_g": 4.1,
    "salt_g": 0.0175,
    "sat_fat_g": 0.12,
    "sodium_mg": 7.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 60.0,
    "vitamin_e_mg": 1.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-504",
  "state": "Steamed",
  "subcategory": "DG",
  "tags": [
    "dg",
    "steamed",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
