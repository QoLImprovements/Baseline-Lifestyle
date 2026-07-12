/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-old-17-129",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Oriental mix",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 33.1,
    "energy_kcal": 545.0,
    "fat_g": 40.7,
    "fibre_g": 0.0,
    "folate_ug": 87.0,
    "iron_mg": 2.8,
    "magnesium_mg": 140.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 400.0,
    "potassium_mg": 520.0,
    "protein_g": 20.0,
    "salt_g": 2.075,
    "sat_fat_g": 0.0,
    "sodium_mg": 830.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-129",
  "state": "Unspecified",
  "subcategory": "SNC",
  "tags": [
    "other-foods",
    "snc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
