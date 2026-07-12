/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 sub-samples, 2 from different establishments in each of 5 regions. Consists of chicken, onions and peppers",
  "id": "cofid-current-19-464",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fajita, chicken, meat only, takeaway and restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 0.3,
    "energy_kcal": 125.0,
    "fat_g": 6.3,
    "fibre_g": 0.8,
    "folate_ug": 0.0,
    "iron_mg": 2.85,
    "magnesium_mg": 25.0,
    "omega3_g": 0.23,
    "phosphorus_mg": 176.0,
    "potassium_mg": 316.0,
    "protein_g": 16.8,
    "salt_g": 0.835,
    "sat_fat_g": 2.12,
    "sodium_mg": 334.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 1.9,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-464",
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
