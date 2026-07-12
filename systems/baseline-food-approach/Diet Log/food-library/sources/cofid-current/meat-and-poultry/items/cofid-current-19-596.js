/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-596",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Samosas, lamb, baked, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 23.1,
    "energy_kcal": 288.0,
    "fat_g": 17.5,
    "fibre_g": 2.3,
    "folate_ug": 9.0,
    "iron_mg": 1.55,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 130.0,
    "potassium_mg": 300.0,
    "protein_g": 11.1,
    "salt_g": 0.1,
    "sat_fat_g": 3.39,
    "sodium_mg": 40.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 2.85,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-596",
  "state": "Baked",
  "subcategory": "MR",
  "tags": [
    "baked",
    "meat-and-poultry",
    "mr"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
