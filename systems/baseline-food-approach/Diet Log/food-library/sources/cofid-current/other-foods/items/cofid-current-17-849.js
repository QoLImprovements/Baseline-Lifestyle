/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples including assorted flavours of noodles, rice and chilli",
  "id": "cofid-current-17-849",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pot savouries",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 58.8,
    "energy_kcal": 365.0,
    "fat_g": 10.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 4.1,
    "magnesium_mg": 76.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 210.0,
    "potassium_mg": 640.0,
    "protein_g": 11.6,
    "salt_g": 1.5,
    "sat_fat_g": 0.0,
    "sodium_mg": 600.0,
    "sugar_g": 8.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-849",
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
