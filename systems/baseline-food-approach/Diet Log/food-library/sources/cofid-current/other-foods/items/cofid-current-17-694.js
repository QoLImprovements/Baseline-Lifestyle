/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "20 samples, savoury wholewheat sticks",
  "id": "cofid-current-17-694",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Twiglets",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 63.3,
    "energy_kcal": 393.0,
    "fat_g": 11.8,
    "fibre_g": 12.4,
    "folate_ug": 78.0,
    "iron_mg": 2.9,
    "magnesium_mg": 81.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 370.0,
    "potassium_mg": 460.0,
    "protein_g": 12.3,
    "salt_g": 2.0,
    "sat_fat_g": 1.6,
    "sodium_mg": 800.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-694",
  "state": "Unspecified",
  "subcategory": "SN",
  "tags": [
    "other-foods",
    "sn",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
