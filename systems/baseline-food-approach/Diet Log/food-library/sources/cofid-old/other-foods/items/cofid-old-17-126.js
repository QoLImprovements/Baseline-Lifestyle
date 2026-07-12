/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "20 samples, 6 brands including Skips",
  "id": "cofid-old-17-126",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Corn and starch snacks",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 55.8,
    "energy_kcal": 505.0,
    "fat_g": 31.2,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 1.3,
    "magnesium_mg": 18.0,
    "omega3_g": 12.0,
    "phosphorus_mg": 82.0,
    "potassium_mg": 130.0,
    "protein_g": 3.8,
    "salt_g": 3.3,
    "sat_fat_g": 13.93,
    "sodium_mg": 1320.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "17-126",
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
