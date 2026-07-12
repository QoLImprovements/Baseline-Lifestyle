/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples, fat and skin removed",
  "id": "cofid-current-18-426",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tongue, ox, meat only, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.0,
    "energy_kcal": 242.0,
    "fat_g": 18.3,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 2.5,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 140.0,
    "protein_g": 19.4,
    "salt_g": 2.15,
    "sat_fat_g": 0.0,
    "sodium_mg": 860.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "18-426",
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
