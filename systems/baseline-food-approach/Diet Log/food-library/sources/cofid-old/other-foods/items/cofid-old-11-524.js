/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 packets, assorted",
  "id": "cofid-old-11-524",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Biscuits, wafer, filled",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 66.0,
    "energy_kcal": 537.0,
    "fat_g": 30.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.6,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 160.0,
    "protein_g": 4.7,
    "salt_g": 0.175,
    "sat_fat_g": 20.66,
    "sodium_mg": 70.0,
    "sugar_g": 44.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "11-524",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
