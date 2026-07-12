/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "g",
  "description": "10 samples, 68.6 Brix; imported commercial concentrate",
  "id": "cofid-current-14-272",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Apple juice concentrate, unsweetened, commerical",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 57.6,
    "energy_kcal": 223.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 1.6,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 640.0,
    "protein_g": 0.5,
    "salt_g": 0.0275,
    "sat_fat_g": 0.1,
    "sodium_mg": 11.0,
    "sugar_g": 57.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 49.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-272",
  "state": "Unspecified",
  "subcategory": "PE",
  "tags": [
    "beverages",
    "pe",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
