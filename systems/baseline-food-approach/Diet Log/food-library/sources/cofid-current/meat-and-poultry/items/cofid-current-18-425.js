/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Fat and skin removed",
  "id": "cofid-current-18-425",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tongue, ox, meat only, pickled, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 0.0,
    "energy_kcal": 293.0,
    "fat_g": 23.9,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 3.0,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 230.0,
    "potassium_mg": 150.0,
    "protein_g": 19.5,
    "salt_g": 2.5,
    "sat_fat_g": 0.0,
    "sodium_mg": 1000.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-425",
  "state": "Unspecified",
  "subcategory": "MG",
  "tags": [
    "meat-and-poultry",
    "mg",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
