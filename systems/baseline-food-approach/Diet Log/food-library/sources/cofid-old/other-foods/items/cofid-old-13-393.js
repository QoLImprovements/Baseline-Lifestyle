/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "5 samples, 2 brands. Soaked to remove brine",
  "id": "cofid-old-13-393",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Vine leaves, preserved in brine",
  "nutritionPerBasis": {
    "calcium_mg": 390.0,
    "carbs_g": 0.2,
    "energy_kcal": 15.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 2.3,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 45.0,
    "protein_g": 3.6,
    "salt_g": 5.525,
    "sat_fat_g": 0.0,
    "sodium_mg": 2210.0,
    "sugar_g": 0.1,
    "vitamin_a_ug": 275.0,
    "vitamin_c_mg": 15.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "13-393",
  "state": "Unspecified",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
