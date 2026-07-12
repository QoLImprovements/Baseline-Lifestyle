/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "g",
  "description": "10 samples, 4 brands",
  "id": "cofid-old-11-160",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Baby cereals, wheat-based",
  "nutritionPerBasis": {
    "calcium_mg": 830.0,
    "carbs_g": 70.3,
    "energy_kcal": 391.0,
    "fat_g": 5.8,
    "fibre_g": 0.0,
    "folate_ug": 69.0,
    "iron_mg": 18.0,
    "magnesium_mg": 84.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 420.0,
    "potassium_mg": 1040.0,
    "protein_g": 18.8,
    "salt_g": 0.17,
    "sat_fat_g": 0.0,
    "sodium_mg": 68.0,
    "sugar_g": 9.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 130.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-160",
  "state": "Unspecified",
  "subcategory": "AK",
  "tags": [
    "ak",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
