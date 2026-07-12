/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Literature sources and anlaysis",
  "id": "cofid-current-13-358",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Squash, spaghetti, baked",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 4.3,
    "energy_kcal": 23.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.3,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 120.0,
    "protein_g": 0.7,
    "salt_g": 0.045,
    "sat_fat_g": 0.1,
    "sodium_mg": 18.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-358",
  "state": "Baked",
  "subcategory": "DG",
  "tags": [
    "baked",
    "dg",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
