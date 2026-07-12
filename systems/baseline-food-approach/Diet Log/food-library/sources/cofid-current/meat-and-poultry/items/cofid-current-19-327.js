/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-19-327",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Spring rolls, meat, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 18.2,
    "energy_kcal": 242.0,
    "fat_g": 16.4,
    "fibre_g": 2.0,
    "folate_ug": 3.0,
    "iron_mg": 1.23,
    "magnesium_mg": 13.0,
    "omega3_g": 1.0,
    "phosphorus_mg": 64.0,
    "potassium_mg": 117.0,
    "protein_g": 6.5,
    "salt_g": 1.2125,
    "sat_fat_g": 3.81,
    "sodium_mg": 485.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 29.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-327",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
