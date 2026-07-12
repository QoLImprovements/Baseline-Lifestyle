/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "5 samples, 3 brands; mixed vegetable filling",
  "id": "cofid-current-15-305",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Samosas, vegetable, retail",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 30.0,
    "energy_kcal": 217.0,
    "fat_g": 9.3,
    "fibre_g": 3.5,
    "folate_ug": 44.0,
    "iron_mg": 1.5,
    "magnesium_mg": 19.0,
    "omega3_g": 0.77,
    "phosphorus_mg": 65.0,
    "potassium_mg": 150.0,
    "protein_g": 5.1,
    "salt_g": 0.975,
    "sat_fat_g": 1.09,
    "sodium_mg": 390.0,
    "sugar_g": 2.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-305",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
