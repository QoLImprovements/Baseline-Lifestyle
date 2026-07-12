/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, Manufacturer's data",
  "id": "cofid-current-17-734",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Ovaltine, powder",
  "nutritionPerBasis": {
    "calcium_mg": 800.0,
    "carbs_g": 83.1,
    "energy_kcal": 358.0,
    "fat_g": 1.9,
    "fibre_g": 4.3,
    "folate_ug": 200.0,
    "iron_mg": 14.0,
    "magnesium_mg": 375.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 156.0,
    "protein_g": 7.3,
    "salt_g": 0.3,
    "sat_fat_g": 1.4,
    "sodium_mg": 120.0,
    "sugar_g": 48.3,
    "vitamin_a_ug": 800.0,
    "vitamin_c_mg": 80.0,
    "vitamin_e_mg": 12.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-734",
  "state": "Unspecified",
  "subcategory": "PAA",
  "tags": [
    "other-foods",
    "paa",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
