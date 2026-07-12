/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "10 samples from Indian restaurants",
  "id": "cofid-current-19-326",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Meat samosas, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 18.9,
    "energy_kcal": 272.0,
    "fat_g": 17.3,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 2.58,
    "magnesium_mg": 26.0,
    "omega3_g": 0.89,
    "phosphorus_mg": 138.0,
    "potassium_mg": 258.0,
    "protein_g": 11.4,
    "salt_g": 1.0225,
    "sat_fat_g": 4.45,
    "sodium_mg": 409.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-326",
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
